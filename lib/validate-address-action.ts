'use server';

export interface UspsResult {
  valid: boolean;
  standardized?: {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    zip4?: string;
  };
  error?: string;
}

export async function validateAddressAction(
  streetAddress: string,
  city: string,
  state: string,
  zip: string
): Promise<UspsResult> {
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
  const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

  try {
    const res = await fetch(`${sbUrl}/functions/v1/validate-address`, {
      method: 'POST',
      headers: { 'apikey': sbKey, 'Authorization': `Bearer ${sbKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ streetAddress, city, state, ZIPCode: zip }),
    });
    const data = await res.json();
    if (data.valid && data.standardized) {
      return { valid: true, standardized: data.standardized };
    }
    return { valid: false, error: data.error || 'Address not found' };
  } catch (e) {
    return { valid: false, error: 'Validation unavailable' };
  }
}
