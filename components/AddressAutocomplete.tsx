'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface AddressAutocompleteProps {
  addressId: string;
  cityId: string;
  stateId: string;
  zipId: string;
}

export default function AddressAutocomplete({ addressId, cityId, stateId, zipId }: AddressAutocompleteProps) {
  const initialized = useRef(false);

  function initAutocomplete() {
    if (initialized.current) return;
    const input = document.getElementById(addressId) as HTMLInputElement | null;
    const g = window.google;
    if (!input || !g?.maps?.places) return;
    initialized.current = true;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ac = new (g.maps.places as any).Autocomplete(input, {
        types: ['address'],
        componentRestrictions: { country: 'us' },
        fields: ['address_components'],
      });

      ac.addListener('place_changed', () => {
        const place = ac.getPlace();
        if (!place.address_components) return;

        let streetNum = '', route = '', city = '', state = '', zip = '', zipSuffix = '';
        for (const comp of place.address_components) {
          const t = comp.types[0];
          if (t === 'street_number') streetNum = comp.long_name;
          else if (t === 'route') route = comp.long_name;
          else if (t === 'locality') city = comp.long_name;
          else if (t === 'administrative_area_level_1') state = comp.short_name;
          else if (t === 'postal_code') zip = comp.long_name;
          else if (t === 'postal_code_suffix') zipSuffix = comp.long_name;
        }
        if (zipSuffix) zip = zip + '-' + zipSuffix;

        // Set values and dispatch native events so form data picks them up
        const nativeSet = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')!.set!;
        const fill = (id: string, val: string) => {
          const el = document.getElementById(id) as HTMLInputElement | null;
          if (el && val) {
            nativeSet.call(el, val);
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }
        };
        fill(addressId, [streetNum, route].filter(Boolean).join(' '));
        fill(cityId, city);
        fill(stateId, state);
        fill(zipId, zip);
      });
    } catch (e) {
      console.warn('Google Places autocomplete failed:', e);
    }
  }

  useEffect(() => {
    // If Google Maps is already loaded
    if (window.google?.maps?.places) {
      initAutocomplete();
    }
  });

  return (
    <Script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQrY8yiG67UxvFsw9E2vZ6zuRt6l7A_wI&libraries=places"
      strategy="lazyOnload"
      onLoad={initAutocomplete}
    />
  );
}

// Extend Window type for google maps
declare global {
  interface Window {
    google?: {
      maps?: {
        places?: {
          Autocomplete: new (input: HTMLInputElement, options: Record<string, unknown>) => {
            addListener: (event: string, handler: () => void) => void;
            getPlace: () => { address_components?: Array<{ long_name: string; short_name: string; types: string[] }> };
          };
        };
      };
    };
  }
}
