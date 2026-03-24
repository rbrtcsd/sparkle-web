'use server';

import { getServiceSupabase } from '@/lib/supabase';
import { validateAndMatchAddress } from '@/lib/address-match';

export async function getRequestCategories(): Promise<string[]> {
  try {
    const supabase = getServiceSupabase();
    const { data } = await supabase.from('app_settings').select('value').eq('key', 'request_categories').single();
    if (data?.value) {
      const val = typeof data.value === 'string' ? JSON.parse(data.value) : data.value;
      if (Array.isArray(val) && val.length) return val;
    }
  } catch(e) {}
  return [];
}

export type RequestFormState = {
  success: boolean;
  error: string | null;
  values?: Record<string, string>;
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
  const category = formData.get('category') as string;
  const description = formData.get('description') as string;
  const sms_consent = formData.get('sms_consent') === 'on';

  const values = { name, phone, email, address, city, state, zip, category, description };

  // Validation
  if (!name || !phone || !description || !category || !address || !city || !state || !zip) {
    return { success: false, error: 'All fields except email are required.', values };
  }

  const nameParts = name.trim().split(/\s+/).filter(Boolean);
  if (nameParts.length < 2) {
    return { success: false, error: 'Please enter your first and last name.', values };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.', values };
  }

  try {
    const supabase = getServiceSupabase();

    // ── USPS Validation + Customer Matching ──
    const customerLastName = name.trim().split(/\s+/).pop() || '';
    const match = await validateAndMatchAddress(address, city, state, zip, customerLastName);

    // Use standardized address if USPS validated
    const useAddr = match.standardized?.streetAddress || address;
    const useCity = match.standardized?.city || city;
    const useState = match.standardized?.state || state;
    const useZip = match.standardized?.zip || zip;
    const fullAddress = [useAddr, useCity, useState, useZip].filter(Boolean).join(', ');

    let custId = match.customerId;
    let custName: string | null = match.customerName || name;
    const needsReview = match.matchType === 'review';

    // Fill gaps on existing matched customer
    if (custId) {
      const fills: Record<string, unknown> = {};
      const { data: cust } = await supabase
        .from('customers')
        .select('phone, email')
        .eq('customer_id', custId)
        .single();
      if (cust) {
        if (!cust.phone && phone) fills.phone = phone;
        if (!cust.email && email) fills.email = email;
      }
      if (sms_consent) { fills.sms_consent = true; fills.sms_consent_at = new Date().toISOString(); }
      if (Object.keys(fills).length) {
        await supabase.from('customers').update(fills).eq('customer_id', custId);
      }
    }

    // No match — create new customer
    if (!custId && match.matchType === 'new') {
      const nameParts = name.trim().split(/\s+/);
      const firstName = nameParts.slice(0, -1).join(' ') || nameParts[0] || '';
      const lastNamePart = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
      const { data: newCust } = await supabase
        .from('customers')
        .insert({
          name,
          first_name: firstName || null,
          last_name: lastNamePart || null,
          phone,
          email: email || null,
          mailing_address: useAddr || null,
          mailing_city: useCity || null,
          mailing_state: useState ? useState.toUpperCase() : null,
          mailing_zip: useZip || null,
          sms_consent: sms_consent || false,
          sms_consent_at: sms_consent ? new Date().toISOString() : null,
        })
        .select('customer_id')
        .single();
      custId = newCust?.customer_id || null;
    }

    // Update SMS consent on existing customer if they opted in
    if (custId && sms_consent) {
      await supabase.from('customers').update({
        sms_consent: true,
        sms_consent_at: new Date().toISOString(),
      }).eq('customer_id', custId);
    }

    // Look up auto-assignment for this category
    let assignee: string | null = null;
    try {
      const { data: assignSettings } = await supabase
        .from('app_settings')
        .select('value')
        .eq('key', 'request_category_assignments')
        .single();
      if (assignSettings?.value) {
        const assignments = typeof assignSettings.value === 'string'
          ? JSON.parse(assignSettings.value)
          : assignSettings.value;
        assignee = assignments[category] || null;
      }
    } catch { /* non-critical */ }

    // Create the request
    const { error } = await supabase.from('requests').insert({
      customer_id: custId,
      customer_name: custName || name,
      property_address: fullAddress || null,
      description: description,
      category: category,
      assignee: assignee,
      priority: 'Standard',
      status: 'Open',
      submitted_by: 'Website',
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: false, error: 'Something went wrong. Please try again or call us directly.', values };
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
    return { success: false, error: 'Something went wrong. Please try again or call us directly.', values };
  }
}
