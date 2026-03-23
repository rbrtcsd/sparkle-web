import { getServiceSupabase } from '@/lib/supabase';

export interface AddressMatchResult {
  validated: boolean;
  standardized?: {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
  };
  customerId: string | null;
  customerName: string | null;
  matchType: 'property' | 'customer' | 'new' | 'review';
  // review = address exists in system but different last name (possible new owner)
}

/**
 * Validate address with USPS, then match against properties/customers in the database.
 * Returns the matched customer or flags for manual review.
 */
export async function validateAndMatchAddress(
  streetAddress: string,
  city: string,
  state: string,
  zip: string,
  customerLastName: string
): Promise<AddressMatchResult> {
  const supabase = getServiceSupabase();
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
  const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

  // 1. Validate with USPS
  let standardized: AddressMatchResult['standardized'] | undefined;
  let validated = false;
  try {
    const uspsRes = await fetch(`${sbUrl}/functions/v1/validate-address`, {
      method: 'POST',
      headers: { 'apikey': sbKey, 'Authorization': `Bearer ${sbKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ streetAddress, city, state, ZIPCode: zip }),
    });
    const usps = await uspsRes.json();
    if (usps.valid && usps.standardized) {
      standardized = usps.standardized;
      validated = true;
    }
  } catch (e) {
    // USPS failed — continue with raw address
  }

  // Use standardized address if available, otherwise raw
  const searchAddr = standardized?.streetAddress || streetAddress;
  const searchCity = standardized?.city || city;
  const searchState = standardized?.state || state;

  // Normalize for comparison
  const normalizeAddr = (s: string) => (s || '').trim().toUpperCase().replace(/[.,#]/g, '').replace(/\s+/g, ' ');
  const normalizedSearch = normalizeAddr(searchAddr);
  if (!normalizedSearch || normalizedSearch.length < 5) {
    return { validated, standardized, customerId: null, customerName: null, matchType: 'new' };
  }

  // 2. Search properties table for matching address
  const addrWords = normalizedSearch.split(' ').slice(0, 3).join(' ');
  const { data: properties } = await supabase
    .from('properties')
    .select('id, address, city, state')
    .ilike('address', `%${addrWords}%`)
    .limit(10);

  if (properties?.length) {
    // Find exact-ish match
    const propMatch = properties.find(p => normalizeAddr(p.address).includes(addrWords));
    if (propMatch) {
      // Find the customer who owns this property
      const { data: owners } = await supabase
        .from('property_owners')
        .select('customer_id, customers(customer_id, name)')
        .eq('property_id', propMatch.id)
        .is('end_date', null)
        .limit(1);

      if (owners?.length && (owners[0] as any).customers) {
        const cust = (owners[0] as any).customers;
        return {
          validated,
          standardized,
          customerId: cust.customer_id,
          customerName: cust.name,
          matchType: 'property',
        };
      }
    }
  }

  // 3. Search customers table by address
  const { data: customers } = await supabase
    .from('customers')
    .select('customer_id, name, address, mailing_address')
    .or(`address.ilike.%${addrWords}%,mailing_address.ilike.%${addrWords}%`)
    .limit(10);

  if (customers?.length) {
    const lastName = customerLastName.toLowerCase();

    // Check for last name match (same household)
    const nameMatch = customers.find(c => {
      const custLast = (c.name || '').trim().split(/\s+/).pop()?.toLowerCase() || '';
      return custLast === lastName;
    });

    if (nameMatch) {
      return {
        validated,
        standardized,
        customerId: nameMatch.customer_id,
        customerName: nameMatch.name,
        matchType: 'customer',
      };
    }

    // Address exists but different last name — flag for review
    return {
      validated,
      standardized,
      customerId: null,
      customerName: null,
      matchType: 'review',
    };
  }

  // 4. No match at all — new customer
  return {
    validated,
    standardized,
    customerId: null,
    customerName: null,
    matchType: 'new',
  };
}
