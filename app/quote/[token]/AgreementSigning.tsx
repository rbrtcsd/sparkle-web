'use client';

import { useState } from 'react';

interface AgreementSigningProps {
  token: string;
  template: { version: string; title: string; body: string };
  customerName: string;
  supabaseUrl: string;
  supabaseKey: string;
}

export default function AgreementSigning({ token, template, customerName, supabaseUrl, supabaseKey }: AgreementSigningProps) {
  const [signerName, setSignerName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSign() {
    if (!agreed) { setError('Please check the box to confirm you agree.'); return; }
    if (!signerName.trim()) { setError('Please type your full name.'); return; }
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${supabaseUrl}/functions/v1/sign-quote-agreement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({ share_token: token, signer_name: signerName.trim() }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to sign agreement');

      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className="border-t border-[#eef1f6]">
      {/* Agreement Header */}
      <div className="px-6 py-4 bg-[#f0f7ff] border-b border-[#d6e4f0]">
        <div className="text-[10px] font-bold uppercase tracking-[1px] text-[#1b5fa8] opacity-70 mb-1">
          Agreement Required
        </div>
        <div className="text-[15px] font-bold text-[#1e2533]">
          {template.title}
        </div>
        <div className="text-[11px] text-[#6b7280] mt-1">
          Please review and sign the agreement below to proceed.
        </div>
      </div>

      {/* Agreement Body */}
      <div className="px-6 py-4">
        <div
          className="border border-[#e5e7eb] rounded-lg p-5 max-h-[400px] overflow-y-auto text-[13px] text-[#374151] leading-relaxed whitespace-pre-wrap bg-white"
          dangerouslySetInnerHTML={{ __html: template.body }}
        />
      </div>

      {/* E-Sign Consent */}
      <div className="px-6 pb-4">
        <div className="text-[11px] text-[#6b7280] leading-relaxed mb-4 p-3 bg-[#f9fafb] rounded-lg border border-[#e5e7eb]">
          By typing your name below and clicking &quot;Sign Agreement,&quot; you consent to use an electronic
          signature in accordance with the federal ESIGN Act and applicable state laws. Your electronic
          signature has the same legal effect as a handwritten signature.
        </div>

        {/* Agree checkbox */}
        <label className="flex items-start gap-2.5 mb-4 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={agreed}
            onChange={e => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-[#1b5fa8]"
          />
          <span className="text-[13px] text-[#374151] font-medium">
            I have read and agree to the terms above
          </span>
        </label>

        {/* Signature input */}
        <div className="mb-4">
          <label className="block text-[11px] font-bold text-[#6b7280] uppercase tracking-[0.5px] mb-1.5">
            Type your full name as your electronic signature
          </label>
          <input
            type="text"
            value={signerName}
            onChange={e => setSignerName(e.target.value)}
            placeholder={customerName || 'Your full name'}
            className="w-full px-3.5 py-3 border-[1.5px] border-[#d1d5db] rounded-[10px] text-[15px] font-medium italic text-[#1e2533] outline-none focus:border-[#1b5fa8] focus:ring-[3px] focus:ring-[rgba(27,95,168,0.12)] transition-all"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          />
        </div>

        {/* Error */}
        {error && (
          <div className="text-[13px] text-[#c62828] font-semibold text-center mb-3">{error}</div>
        )}

        {/* Submit */}
        <button
          onClick={handleSign}
          disabled={loading}
          className="w-full py-3.5 rounded-[10px] bg-[#1b5fa8] text-white text-[15px] font-bold cursor-pointer transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-60"
        >
          {loading ? 'Signing...' : 'Sign Agreement'}
        </button>
      </div>
    </div>
  );
}
