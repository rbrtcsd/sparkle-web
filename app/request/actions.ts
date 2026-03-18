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

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  try {
    const supabase = getServiceSupabase();

    const fullAddress = [address, city, state, zip].filter(Boolean).join(', ');

    const { error } = await supabase.from('requests').insert({
      customer_name: name,
      phone: phone,
      email: email || null,
      address: fullAddress || null,
      description: description,
      priority: 'Standard',
      status: 'new',
      source: 'website',
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: false, error: 'Something went wrong. Please try again or call us directly.' };
    }

    return { success: true, error: null };
  } catch (err) {
    console.error('Request submission error:', err);
    return { success: false, error: 'Something went wrong. Please try again or call us directly.' };
  }
}
