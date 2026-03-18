import { getServiceSupabase } from './supabase';

export type HoursEntry = { day: string; open: string; close: string; closed: boolean };

const defaultNorth: HoursEntry[] = [
  { day:'Monday', open:'9:00 AM', close:'5:00 PM', closed:false },
  { day:'Tuesday', open:'9:00 AM', close:'5:00 PM', closed:false },
  { day:'Wednesday', open:'9:00 AM', close:'5:00 PM', closed:false },
  { day:'Thursday', open:'9:00 AM', close:'5:00 PM', closed:false },
  { day:'Friday', open:'9:00 AM', close:'5:00 PM', closed:false },
  { day:'Saturday', open:'', close:'', closed:true },
  { day:'Sunday', open:'', close:'', closed:true },
];
const defaultSouth: HoursEntry[] = [
  { day:'Monday', open:'11:00 AM', close:'6:00 PM', closed:false },
  { day:'Tuesday', open:'', close:'', closed:true },
  { day:'Wednesday', open:'', close:'', closed:true },
  { day:'Thursday', open:'11:00 AM', close:'6:00 PM', closed:false },
  { day:'Friday', open:'11:00 AM', close:'6:00 PM', closed:false },
  { day:'Saturday', open:'9:00 AM', close:'3:00 PM', closed:false },
  { day:'Sunday', open:'10:00 AM', close:'2:00 PM', closed:false },
];

export async function getStoreHours(): Promise<{ north: HoursEntry[]; south: HoursEntry[] }> {
  try {
    const supabase = getServiceSupabase();
    const { data } = await supabase.from('app_settings').select('key, value').in('key', ['store_hours_north', 'store_hours_south']);
    let north = defaultNorth;
    let south = defaultSouth;
    (data || []).forEach(r => {
      try {
        if (r.key === 'store_hours_north') north = JSON.parse(r.value);
        if (r.key === 'store_hours_south') south = JSON.parse(r.value);
      } catch { /* use defaults */ }
    });
    return { north, south };
  } catch {
    return { north: defaultNorth, south: defaultSouth };
  }
}

/** Condense hours into a short string like "Mon–Fri 9–5" */
export function condenseHours(data: HoursEntry[]): string {
  const parts: string[] = [];
  let i = 0;
  while (i < data.length) {
    if (data[i].closed) { i++; continue; }
    const time = `${stripMinutes(data[i].open)}–${stripMinutes(data[i].close)}`;
    let j = i + 1;
    while (j < data.length && !data[j].closed && `${stripMinutes(data[j].open)}–${stripMinutes(data[j].close)}` === time) j++;
    const dayRange = j - i > 1 ? `${shortDay(data[i].day)}–${shortDay(data[j-1].day)}` : shortDay(data[i].day);
    parts.push(`${dayRange} ${time}`);
    i = j;
  }
  return parts.join(' · ');
}

function shortDay(d: string): string {
  return d.slice(0, 3);
}

function stripMinutes(t: string): string {
  // "9:00 AM" → "9" , "11:00 AM" → "11", "2:30 PM" → "2:30"
  return t.replace(/:00/g, '').replace(/\s*(AM|PM)/gi, '').trim();
}
