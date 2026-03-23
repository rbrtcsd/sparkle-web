'use client';

import { useState } from 'react';
import { validateAddressAction, type UspsResult } from '@/lib/validate-address-action';

interface Props {
  addressId?: string;
  cityId?: string;
  stateId?: string;
  zipId?: string;
  onValidated?: (result: UspsResult) => void;
}

export default function AddressValidator({ addressId = 'address', cityId = 'city', stateId = 'state', zipId = 'zip', onValidated }: Props) {
  const [suggestion, setSuggestion] = useState<UspsResult | null>(null);
  const [checking, setChecking] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const validate = async () => {
    const addrEl = document.getElementById(addressId) as HTMLInputElement;
    const addr = addrEl?.value?.trim() || '';
    if (addr.length < 5) return;

    let city = '', state = '', zip = '';
    const cityEl = document.getElementById(cityId) as HTMLInputElement;
    const stateEl = document.getElementById(stateId) as HTMLInputElement;
    const zipEl = document.getElementById(zipId) as HTMLInputElement;

    if (cityEl) {
      const val = cityEl.value.trim();
      if (cityId === 'city_state') {
        const parts = val.split(',').map(s => s.trim());
        city = parts[0] || '';
        state = parts[1] || '';
      } else {
        city = val;
      }
    }
    if (stateEl) state = stateEl.value?.trim() || state;
    if (zipEl) zip = zipEl.value?.trim() || '';

    setChecking(true);
    setSuggestion(null);
    setAccepted(false);

    try {
      const result = await validateAddressAction(addr, city, state, zip);
      if (result.valid && result.standardized) {
        const s = result.standardized;
        const norm = (x: string) => x.toUpperCase().replace(/[.,#]/g, '').replace(/\s+/g, ' ').trim();
        if (norm(s.streetAddress) !== norm(addr) || norm(s.city) !== norm(city) || norm(s.state) !== norm(state)) {
          setSuggestion(result);
        } else {
          setAccepted(true);
          onValidated?.(result);
        }
      } else {
        setSuggestion(result);
      }
    } catch {
      // Silent fail
    }
    setChecking(false);
  };

  const acceptSuggestion = () => {
    if (!suggestion?.standardized) return;
    const s = suggestion.standardized;

    const addrEl = document.getElementById(addressId) as HTMLInputElement;
    const cityEl = document.getElementById(cityId) as HTMLInputElement;
    const stateEl = document.getElementById(stateId) as HTMLInputElement;
    const zipEl = document.getElementById(zipId) as HTMLInputElement;

    if (addrEl) { addrEl.value = s.streetAddress; addrEl.dispatchEvent(new Event('input', { bubbles: true })); }
    if (cityEl) {
      if (cityId === 'city_state') {
        cityEl.value = `${s.city}, ${s.state}`;
      } else {
        cityEl.value = s.city;
      }
      cityEl.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (stateEl && stateId !== 'city_state') { stateEl.value = s.state; stateEl.dispatchEvent(new Event('input', { bubbles: true })); }
    if (zipEl) { zipEl.value = s.zip + (s.zip4 ? '-' + s.zip4 : ''); zipEl.dispatchEvent(new Event('input', { bubbles: true })); }

    setAccepted(true);
    setSuggestion(null);
    onValidated?.(suggestion);
  };

  return (
    <div>
      {/* Hidden button that the address onBlur triggers */}
      <button type="button" id="__validate_address_btn" onClick={validate} className="hidden" />

      {checking && (
        <div className="mt-2 text-sm text-slate-400 flex items-center gap-2">
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" /><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" /></svg>
          Validating address...
        </div>
      )}

      {suggestion && suggestion.valid && suggestion.standardized && (
        <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm font-medium text-blue-800 mb-1">Did you mean:</p>
          <p className="text-sm font-bold text-blue-900">
            {suggestion.standardized.streetAddress}, {suggestion.standardized.city}, {suggestion.standardized.state} {suggestion.standardized.zip}
          </p>
          <div className="flex gap-2 mt-2">
            <button type="button" onClick={acceptSuggestion} className="px-3 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Use This Address
            </button>
            <button type="button" onClick={() => setSuggestion(null)} className="px-3 py-1.5 bg-white text-slate-600 text-sm font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
              Keep Mine
            </button>
          </div>
        </div>
      )}

      {suggestion && !suggestion.valid && (
        <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            We couldn&apos;t verify this address. Please double-check it&apos;s correct.
          </p>
        </div>
      )}

      {accepted && (
        <div className="mt-2 text-sm text-green-600 font-medium flex items-center gap-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
          Address verified
        </div>
      )}
    </div>
  );
}
