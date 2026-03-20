'use server';

import { getServiceSupabase } from '@/lib/supabase';

export type RequestFormState = {
  success: boolean;
  error: string | null;
};

export async function submitServiceRequest(
  _prevState: RequestFormState,
  formData: FormData
): Promise<RequestFormState> {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const address = formData.get('address') as string;
  const city = formData.get('city') as string;
  const state = formData.get('state') as string;
  const zip = formData.get('zip') as string;
  const description = formData.get('description') as string;

  // Validation
  if (!name || !phone || !description) {
    return { success: false, error: 'Name, phone, and description are required.' };
  }

  const nameParts = name.trim().split(/\s+/).filter(Boolean);
  if (nameParts.length < 2) {
    return { success: false, error: 'Please enter your first and last name.' };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  try {
    const supabase = getServiceSupabase();

    const fullAddress = [address, city, state, zip].filter(Boolean).join(', ');

    // ── Customer matching ──
    const lastName = name.trim().split(/\s+/).pop()?.toLowerCase() || '';
    const addrNormalized = (address || '').trim().toLowerCase().replace(/[.,#]/g, '').replace(/\s+/g, ' ');
    let custId: string | null = null;
    let custName: string | null = name;
    let needsReview = false;

    if (addrNormalized.length >= 5) {
      // Search by first few words of the address (street number + street name)
      const addrParts = addrNormalized.split(' ');
      const addrSearch = addrParts.slice(0, Math.min(3, addrParts.length)).join(' ');

      // Search both legacy address and mailing_address columns
      const { data: addrMatches } = await supabase
        .from('customers')
        .select('customer_id, name, address, mailing_address')
        .or(`address.ilike.%${addrSearch}%,mailing_address.ilike.%${addrSearch}%`)
        .limit(10);

      if (addrMatches?.length) {
        // Address matched — check if last name matches (same household)
        const lastNameMatch = addrMatches.find(c => {
          const custLastName = (c.name || '').trim().split(/\s+/).pop()?.toLowerCase() || '';
          return custLastName === lastName;
        });

        if (lastNameMatch) {
          custId = lastNameMatch.customer_id;
          custName = lastNameMatch.name;

          // Fill gaps on existing customer (phone, email if missing)
          const fills: Record<string, string> = {};
          if (phone) {
            // Check if customer has this phone already (primary or alt)
            const { data: cust } = await supabase
              .from('customers')
              .select('phone, email, alt_phones, alt_emails')
              .eq('customer_id', custId)
              .single();
            if (cust) {
              if (!cust.phone) fills.phone = phone;
              if (email && !cust.email) fills.email = email;
            }
          }
          if (Object.keys(fills).length) {
            await supabase.from('customers').update(fills).eq('customer_id', custId);
          }
        } else {
          // Address exists but different last name — flag for review
          needsReview = true;
        }
      }
    }

    // No match found and no address conflict — create new customer
    if (!custId && !needsReview) {
      const { data: newCust } = await supabase
        .from('customers')
        .insert({
          name: name,
          phone: phone,
          email: email || null,
          mailing_address: address || null,
          mailing_city: city || null,
          mailing_state: state ? state.toUpperCase() : null,
          mailing_zip: zip || null,
        })
        .select('customer_id')
        .single();
      custId = newCust?.customer_id || null;
    }

    // Create the request
    const { error } = await supabase.from('requests').insert({
      customer_id: custId,
      customer_name: custName || name,
      property_address: fullAddress || null,
      description: description,
      priority: 'Standard',
      status: 'Open',
      submitted_by: 'Website',
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: false, error: 'Something went wrong. Please try again or call us directly.' };
    }

    // If customer couldn't be matched (address conflict), notify managers
    if (needsReview) {
      try {
        await supabase.from('notifications').insert({
          type: 'customer_review',
          title: 'Website Request — Customer Review Needed',
          message: `${name} submitted a request from ${fullAddress || 'no address'} (${phone}). Address matched an existing customer with a different last name.`,
          link: 'requests.html',
        });
      } catch { /* non-critical */ }
    }

    return { success: true, error: null };
  } catch (err) {
    console.error('Request submission error:', err);
    return { success: false, error: 'Something went wrong. Please try again or call us directly.' };
  }
}
