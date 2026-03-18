'use server';

import { getServiceSupabase } from '@/lib/supabase';

export type OpeningFormState = {
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

export async function getAvailableWeeks(): Promise<WeekOption[]> {
  const supabase = getServiceSupabase();

  const [{ data: weeks }, { data: bookings }] = await Promise.all([
    supabase.from('opening_weeks').select('*').order('start_date', { ascending: true }),
    supabase.from('pool_openings').select('week_id').neq('status', 'cancelled'),
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

export async function submitPoolOpening(
  _prevState: OpeningFormState,
  formData: FormData
): Promise<OpeningFormState> {
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
      .from('opening_weeks')
      .select('capacity, manually_closed')
      .eq('week_id', weekId)
      .single();

    if (week) {
      if (week.manually_closed) {
        return { success: false, error: 'Sorry, that week is now full. Please select another week.' };
      }
      if (week.capacity) {
        const { count } = await supabase
          .from('pool_openings')
          .select('id', { count: 'exact', head: true })
          .eq('week_id', weekId)
          .neq('status', 'cancelled');
        if (count !== null && count >= week.capacity) {
          return { success: false, error: 'Sorry, that week just filled up. Please select another week.' };
        }
      }
    }

    const { error } = await supabase.from('pool_openings').insert({
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

    return { success: true, error: null };
  } catch (err) {
    console.error('Pool opening submission error:', err);
    return { success: false, error: 'Something went wrong. Please try again or call us at (812) 232-1292.' };
  }
}
