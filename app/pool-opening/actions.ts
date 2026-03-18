'use server';

import { getServiceSupabase } from '@/lib/supabase';

export type OpeningFormState = {
  success: boolean;
  error: string | null;
};

export async function submitPoolOpening(
  _prevState: OpeningFormState,
  formData: FormData
): Promise<OpeningFormState> {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const address = formData.get('address') as string;
  const city = formData.get('city') as string;
  const state = formData.get('state') as string;
  const zip = formData.get('zip') as string;
  const poolType = formData.get('pool_type') as string;
  const coverType = formData.get('cover_type') as string;
  const preferredWeek = formData.get('preferred_week') as string;
  const notes = formData.get('notes') as string;

  if (!name || !phone || !address) {
    return { success: false, error: 'Name, phone, and address are required.' };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  try {
    const supabase = getServiceSupabase();
    const fullAddress = [address, city, state, zip].filter(Boolean).join(', ');

    const descriptionParts = [
      '🏊 POOL OPENING REQUEST',
      `Pool Type: ${poolType || 'Not specified'}`,
      `Cover Type: ${coverType || 'Not specified'}`,
      `Preferred Week: ${preferredWeek || 'No preference'}`,
      notes ? `Notes: ${notes}` : '',
    ].filter(Boolean).join('\n');

    const { error } = await supabase.from('requests').insert({
      customer_name: name,
      phone: phone,
      email: email || null,
      property_address: fullAddress || null,
      description: descriptionParts,
      priority: 'Standard',
      status: 'Open',
      source: 'website',
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: false, error: 'Something went wrong. Please try again or call us at (812) 232-1292.' };
    }

    return { success: true, error: null };
  } catch (err) {
    console.error('Pool opening submission error:', err);
    return { success: false, error: 'Something went wrong. Please try again or call us at (812) 232-1292.' };
  }
}
