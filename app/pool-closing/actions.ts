'use server';

import { getServiceSupabase } from '@/lib/supabase';

export type ClosingFormState = {
  success: boolean;
  error: string | null;
};

export type WeekOption = {
  week_id: string;
  label: string;
  start_date: string;
  available: boolean;
  spots_label: string;
};

export async function getAvailableClosingWeeks(): Promise<WeekOption[]> {
  const supabase = getServiceSupabase();

  const [{ data: weeks }, { data: bookings }] = await Promise.all([
    supabase.from('closing_weeks').select('*').order('start_date', { ascending: true }),
    supabase.from('pool_closings').select('week_id').neq('status', 'cancelled'),
  ]);

  if (!weeks) return [];

  const counts: Record<string, number> = {};
  (bookings || []).forEach((b: { week_id: string }) => {
    counts[b.week_id] = (counts[b.week_id] || 0) + 1;
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return weeks.map((w) => {
    const start = new Date(w.start_date + 'T00:00:00');
    const end = new Date(start);
    end.setDate(end.getDate() + 5);
    const bookingCount = counts[w.week_id] || 0;
    const capacityFull = w.capacity !== null && bookingCount >= w.capacity;
    const isPast = end < today;
    const isCurrent = start <= today && end >= today;
    const isFull = w.manually_closed || capacityFull;
    const available = !isPast && !isCurrent && !isFull;

    let spots_label = '';
    if (isPast) spots_label = 'Past';
    else if (isCurrent) spots_label = 'Current Week';
    else if (w.manually_closed) spots_label = 'Full';
    else if (capacityFull) spots_label = 'Full';
    else if (w.capacity) spots_label = `${w.capacity - bookingCount} spots left`;

    return {
      week_id: w.week_id,
      label: w.label,
      start_date: w.start_date,
      available,
      spots_label,
    };
  }).filter(w => !w.spots_label.includes('Past'));
}

export type TermsCheckResult = {
  needsTerms: boolean;
  customerId: string | null;
  termsTitle: string;
  termsContent: string;
  termsVersion: string;
};

export async function checkClosingTerms(name: string, address: string): Promise<TermsCheckResult> {
  const empty: TermsCheckResult = { needsTerms: false, customerId: null, termsTitle: '', termsContent: '', termsVersion: '' };

  if (!address || address.trim().length < 5) return empty;

  const supabase = getServiceSupabase();

  // Get current terms
  const { data: termsRow } = await supabase
    .from('app_settings')
    .select('value')
    .eq('key', 'opening_terms')
    .single();

  const terms = termsRow?.value;
  if (!terms?.version || !terms?.content) return empty;

  // Try to match customer by address
  const addrNormalized = address.trim().toLowerCase().replace(/[.,#]/g, '').replace(/\s+/g, ' ');
  const addrParts = addrNormalized.split(' ');
  const addrSearch = addrParts.slice(0, Math.min(3, addrParts.length)).join(' ');
  const lastName = name.trim().split(/\s+/).pop()?.toLowerCase() || '';

  const { data: addrMatches } = await supabase
    .from('customers')
    .select('customer_id, name, address, mailing_address')
    .or(`address.ilike.%${addrSearch}%,mailing_address.ilike.%${addrSearch}%`)
    .limit(10);

  if (!addrMatches?.length) {
    // New customer — they'll need terms
    return { needsTerms: true, customerId: null, termsTitle: terms.title || 'Pool Closing Terms', termsContent: terms.content, termsVersion: terms.version };
  }

  // Check last name match
  const match = addrMatches.find(c => {
    const custLast = (c.name || '').trim().split(/\s+/).pop()?.toLowerCase() || '';
    return custLast === lastName;
  });

  if (!match) {
    // Address exists, different name — they'll need terms either way
    return { needsTerms: true, customerId: null, termsTitle: terms.title || 'Pool Closing Terms', termsContent: terms.content, termsVersion: terms.version };
  }

  // Check if this customer has valid terms
  const { data: sigs } = await supabase
    .from('opening_term_signatures')
    .select('signature_date')
    .eq('customer_id', match.customer_id)
    .eq('terms_version', terms.version)
    .order('signature_date', { ascending: false })
    .limit(1);

  let needsTerms = true;
  if (sigs?.length) {
    const sigDate = new Date(sigs[0].signature_date);
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
    if (sigDate >= threeYearsAgo) needsTerms = false;
  }

  if (!needsTerms) return empty;

  return { needsTerms: true, customerId: match.customer_id, termsTitle: terms.title || 'Pool Closing Terms', termsContent: terms.content, termsVersion: terms.version };
}

export async function signClosingTermsInline(customerId: string, signerName: string): Promise<{ success: boolean; error: string | null }> {
  if (!customerId || !signerName) return { success: false, error: 'Missing required fields' };

  const supabase = getServiceSupabase();

  const { data: termsRow } = await supabase
    .from('app_settings')
    .select('value')
    .eq('key', 'opening_terms')
    .single();

  const terms = termsRow?.value;
  if (!terms?.version) return { success: false, error: 'No terms configured' };

  const { error } = await supabase
    .from('opening_term_signatures')
    .insert({
      customer_id: customerId,
      terms_version: terms.version,
      signer_name: signerName.trim(),
      signature_date: new Date().toISOString(),
      ip_address: 'website-inline',
      user_agent: 'sparkle-web',
    });

  if (error) return { success: false, error: error.message };
  return { success: true, error: null };
}

export async function submitPoolClosing(
  _prevState: ClosingFormState,
  formData: FormData
): Promise<ClosingFormState> {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const address = formData.get('address') as string;
  const cityState = formData.get('city_state') as string;
  const zip = formData.get('zip') as string;
  const poolType = formData.get('pool_type') as string;
  const poolSize = formData.get('pool_size') as string;
  const coverType = formData.get('cover_type') as string;
  const weekId = formData.get('week_id') as string;
  const weekLabel = formData.get('week_label') as string;
  const notes = formData.get('notes') as string;

  if (!name || !phone || !address) {
    return { success: false, error: 'Name, phone, and address are required.' };
  }

  const nameParts = name.trim().split(/\s+/).filter(Boolean);
  if (nameParts.length < 2) {
    return { success: false, error: 'Please enter your first and last name.' };
  }

  if (!weekId || !weekLabel) {
    return { success: false, error: 'Please select a week for your opening.' };
  }

  if (!poolType) {
    return { success: false, error: 'Please select your pool type.' };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  try {
    const supabase = getServiceSupabase();

    // Check capacity one more time
    const { data: week } = await supabase
      .from('closing_weeks')
      .select('capacity, manually_closed')
      .eq('week_id', weekId)
      .single();

    if (week) {
      if (week.manually_closed) {
        return { success: false, error: 'Sorry, that week is now full. Please select another week.' };
      }
      if (week.capacity) {
        const { count } = await supabase
          .from('pool_closings')
          .select('id', { count: 'exact', head: true })
          .eq('week_id', weekId)
          .neq('status', 'cancelled');
        if (count !== null && count >= week.capacity) {
          return { success: false, error: 'Sorry, that week just filled up. Please select another week.' };
        }
      }
    }

    // ── Customer matching (server-side only, no data exposed to browser) ──
    // Strategy: address is the anchor (pools don't move), last name confirms the household
    const lastName = name.trim().split(/\s+/).pop()?.toLowerCase() || '';
    const addrNormalized = address.trim().toLowerCase().replace(/[.,#]/g, '').replace(/\s+/g, ' ');
    let custId: string | null = null;

    // 1. Search customers by address (fuzzy match on street address)
    if (addrNormalized.length >= 5) {
      // Extract the street number + first word of street name for a targeted search
      const addrParts = addrNormalized.split(' ');
      const addrSearch = addrParts.slice(0, Math.min(3, addrParts.length)).join(' ');

      const { data: addrMatches } = await supabase
        .from('customers')
        .select('customer_id, name, address')
        .ilike('address', `%${addrSearch}%`)
        .limit(10);

      if (addrMatches?.length) {
        // Address matched — check if last name matches any result (same household)
        const lastNameMatch = addrMatches.find(c => {
          const custLastName = (c.name || '').trim().split(/\s+/).pop()?.toLowerCase() || '';
          return custLastName === lastName;
        });

        if (lastNameMatch) {
          // Address + last name match = same household, confident match
          custId = lastNameMatch.customer_id;
        }
        // Address match but different last name = flag for review (possible new owner)
        // Don't auto-match or auto-create — leave customer_id null so staff can resolve
      }
    }

    // 2. No match at all — create a new customer
    // (Only if there was NO address match. If address matched with wrong last name,
    //  we skip creation and leave customer_id null for staff review.)
    if (!custId && !addrNormalized.length) {
      // No address provided — can't match, create new
      const cs = (cityState || '').split(',').map(s => s.trim());
      const { data: newCust } = await supabase
        .from('customers')
        .insert({
          name: name,
          address: address,
          city: cs[0] || null,
          state: cs[1] || null,
          zip: zip || null,
          phone: phone,
          email: email || null,
          pool_type: poolType === 'inground' ? 'Inground' : poolType === 'aboveground' ? 'Above Ground' : null,
          pool_size: poolSize || null,
          cover_type: coverType || null,
        })
        .select('customer_id')
        .single();
      custId = newCust?.customer_id || null;
    } else if (!custId) {
      // We searched but found no address match at all — safe to create new customer
      const { data: addrCheck } = await supabase
        .from('customers')
        .select('customer_id')
        .ilike('address', `%${addrNormalized.split(' ').slice(0, Math.min(3, addrNormalized.split(' ').length)).join(' ')}%`)
        .limit(1);

      if (!addrCheck?.length) {
        // Address not in DB at all — truly new customer
        const cs = (cityState || '').split(',').map(s => s.trim());
        const { data: newCust } = await supabase
          .from('customers')
          .insert({
            name: name,
            address: address,
            city: cs[0] || null,
            state: cs[1] || null,
            zip: zip || null,
            phone: phone,
            email: email || null,
            pool_type: poolType === 'inground' ? 'Inground' : poolType === 'aboveground' ? 'Above Ground' : null,
            pool_size: poolSize || null,
            cover_type: coverType || null,
          })
          .select('customer_id')
          .single();
        custId = newCust?.customer_id || null;
      }
      // else: address exists but last name didn't match — leave customer_id null for review
    }

    // Handle inline terms signing if customer signed during form submission
    const termsCustomerId = formData.get('terms_customer_id') as string;
    const termsAgreed = formData.get('terms_agreed') as string;
    const termsSignerName = formData.get('terms_signer_name') as string;
    const signTermsCustId = termsCustomerId || custId;

    if (termsAgreed === 'yes' && termsSignerName && signTermsCustId) {
      try {
        await signClosingTermsInline(signTermsCustId, termsSignerName);
      } catch { /* non-blocking — terms signed is a bonus, not a blocker */ }
    }

    const { error } = await supabase.from('pool_closings').insert({
      customer_id: custId,
      customer_name: name,
      customer_address: address,
      week_id: weekId,
      week_label: weekLabel,
      status: 'submitted',
      submitted_at: new Date().toISOString(),
      source: 'website',
      form_data: {
        city_state: cityState || null,
        zip: zip || null,
        phone: phone,
        email: email || null,
        pool_type: poolType,
        size: poolSize || null,
        cover: coverType || null,
        customer_notes: notes || null,
      },
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: false, error: 'Something went wrong. Please try again or call us at (812) 232-1292.' };
    }

    // Alert managers if customer couldn't be matched (needs manual review)
    if (!custId) {
      try {
        await supabase.from('notifications').insert({
          type: 'customer_review',
          title: 'Pool Closing — Customer Needs Review',
          message: `${name} at ${address} submitted a pool closing online but couldn't be matched to an existing customer. The address may belong to a different name in the system. Please review and link or create the customer record.`,
          data: {
            customer_name: name,
            customer_address: address,
            phone: phone,
            source: 'pool_closing_website',
          },
        });
      } catch { /* non-blocking */ }
    }

    // Auto-send terms email if customer was matched and doesn't have valid terms
    if (custId && email) {
      try {
        // Get current terms version
        const { data: termsRow } = await supabase
          .from('app_settings')
          .select('value')
          .eq('key', 'opening_terms')
          .single();
        const termsVersion = termsRow?.value?.version;

        if (termsVersion) {
          // Check if customer has valid signature
          const { data: sigs } = await supabase
            .from('opening_term_signatures')
            .select('signature_date')
            .eq('customer_id', custId)
            .eq('terms_version', termsVersion)
            .order('signature_date', { ascending: false })
            .limit(1);

          let needsTerms = true;
          if (sigs?.length) {
            const sigDate = new Date(sigs[0].signature_date);
            const threeYearsAgo = new Date();
            threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
            if (sigDate >= threeYearsAgo) needsTerms = false;
          }

          if (needsTerms) {
            // Send terms email via edge function
            const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.mysparklepools.com';
            await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-opening-terms-email`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
              },
              body: JSON.stringify({ customer_id: custId, to_email: email, base_url: baseUrl }),
            });
          }
        }
      } catch { /* non-blocking */ }
    }

    return { success: true, error: null };
  } catch (err) {
    console.error('Pool opening submission error:', err);
    return { success: false, error: 'Something went wrong. Please try again or call us at (812) 232-1292.' };
  }
}
