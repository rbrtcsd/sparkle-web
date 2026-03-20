'use client';

import { useState } from 'react';

interface ManagerField {
  key: string;
  label: string;
  type: string;
}

interface CustomerField {
  key: string;
  label: string;
  type: string;
}

interface TemplateOption {
  key: string;
  label: string;
  price_field: boolean;
}

interface AgreementTemplate {
  version: string;
  title: string;
  body?: string;
  base_package?: string;
  important_note?: string;
  conditions?: string;
  manager_fields?: ManagerField[];
  customer_fields?: CustomerField[];
  options?: TemplateOption[];
  deposit_formula?: string;
  deposit_fixed_balance?: number;
  deposit_balance_note?: string;
}

interface AgreementSigningProps {
  token: string;
  template: AgreementTemplate;
  customerName: string;
  supabaseUrl: string;
  supabaseKey: string;
  agreementData?: Record<string, unknown>;
  quoteSubtotal?: number;
  quoteTaxTotal?: number;
  quoteTotal?: number;
  taxRate?: number;
}

function fmt(n: number | null | undefined): string {
  return '$' + parseFloat(String(n || 0)).toFixed(2);
}

function fmtDate(iso: string | null | undefined): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function AgreementSigning({
  token, template, customerName, supabaseUrl, supabaseKey,
  agreementData, quoteSubtotal, quoteTaxTotal, quoteTotal, taxRate
}: AgreementSigningProps) {
  const [signerName, setSignerName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [noteAcknowledged, setNoteAcknowledged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [customerFields, setCustomerFields] = useState<Record<string, string>>({});
  const [optionInitials, setOptionInitials] = useState<Record<string, boolean>>({});

  const ad = (agreementData || {}) as Record<string, unknown>;
  const adOptions = (ad.options || {}) as Record<string, { selected?: boolean; price?: number }>;
  const isRichTemplate = !!(template.base_package || template.manager_fields?.length || template.conditions);

  // Calculate pricing
  let optionsTotal = 0;
  if (template.options) {
    template.options.forEach(o => {
      const od = adOptions[o.key];
      if (od?.selected) optionsTotal += od.price || 0;
    });
  }
  const subtotalWithOpts = (quoteSubtotal || 0) + optionsTotal;
  const tr = taxRate || 0;
  const totalTax = (quoteTaxTotal || 0) + (optionsTotal * tr);
  const grandTotal = subtotalWithOpts + totalTax;

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
        body: JSON.stringify({
          share_token: token,
          signer_name: signerName.trim(),
          customer_fields: customerFields,
          option_initials: optionInitials,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to sign agreement');

      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  if (!isRichTemplate) {
    // Legacy simple template
    return (
      <div className="border-t border-[#eef1f6]">
        <div className="px-6 py-4 bg-[#f0f7ff] border-b border-[#d6e4f0]">
          <div className="text-[10px] font-bold uppercase tracking-[1px] text-[#1b5fa8] opacity-70 mb-1">Agreement Required</div>
          <div className="text-[15px] font-bold text-[#1e2533]">{template.title}</div>
          <div className="text-[11px] text-[#6b7280] mt-1">Please review and sign the agreement below to proceed.</div>
        </div>
        <div className="px-6 py-4">
          <div className="border border-[#e5e7eb] rounded-lg p-5 max-h-[400px] overflow-y-auto text-[13px] text-[#374151] leading-relaxed whitespace-pre-wrap bg-white"
            dangerouslySetInnerHTML={{ __html: template.body || '' }} />
        </div>
        <div className="px-6 pb-4">
          <div className="text-[11px] text-[#6b7280] leading-relaxed mb-4 p-3 bg-[#f9fafb] rounded-lg border border-[#e5e7eb]">
            By typing your name below and clicking &quot;Sign Agreement,&quot; you consent to use an electronic
            signature in accordance with the federal ESIGN Act and applicable state laws.
          </div>
          <label className="flex items-start gap-2.5 mb-4 cursor-pointer select-none">
            <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 accent-[#1b5fa8]" />
            <span className="text-[13px] text-[#374151] font-medium">I have read and agree to the terms above</span>
          </label>
          <div className="mb-4">
            <label className="block text-[11px] font-bold text-[#6b7280] uppercase tracking-[0.5px] mb-1.5">Type your full name as your electronic signature</label>
            <input type="text" value={signerName} onChange={e => setSignerName(e.target.value)} placeholder={customerName || 'Your full name'}
              className="w-full px-3.5 py-3 border-[1.5px] border-[#d1d5db] rounded-[10px] text-[15px] font-medium italic text-[#1e2533] outline-none focus:border-[#1b5fa8] focus:ring-[3px] focus:ring-[rgba(27,95,168,0.12)] transition-all"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }} />
          </div>
          {error && <div className="text-[13px] text-[#c62828] font-semibold text-center mb-3">{error}</div>}
          <button onClick={handleSign} disabled={loading}
            className="w-full py-3.5 rounded-[10px] bg-[#1b5fa8] text-white text-[15px] font-bold cursor-pointer transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-60">
            {loading ? 'Signing...' : 'Sign Agreement'}
          </button>
        </div>
      </div>
    );
  }

  // Rich agreement form
  return (
    <div className="border-t border-[#eef1f6]">
      {/* Header */}
      <div className="px-6 py-4 bg-[#f0f7ff] border-b border-[#d6e4f0]">
        <div className="text-[10px] font-bold uppercase tracking-[1px] text-[#1b5fa8] opacity-70 mb-1">Agreement Required</div>
        <div className="text-[15px] font-bold text-[#1e2533]">{template.title}</div>
        <div className="text-[11px] text-[#6b7280] mt-1">Please review the details below, fill in any required fields, and sign to proceed.</div>
      </div>

      <div className="px-6 py-4 space-y-4">
        {/* Project Details (manager fields - read-only) */}
        {template.manager_fields && template.manager_fields.length > 0 && (
          <div>
            <div className="text-[12px] font-bold text-[#8a95a8] uppercase tracking-[0.5px] mb-2">Project Details</div>
            <div className="bg-[#f7f9fc] rounded-lg p-3">
              {template.manager_fields.map(f => {
                let val = String(ad[f.key] || '');
                if (f.type === 'date' && val) val = fmtDate(val);
                return (
                  <div key={f.key} className="flex justify-between py-1 text-[13px]">
                    <span className="text-[#4a5568] font-semibold">{f.label}</span>
                    <span className="font-semibold">{val}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Base Package */}
        {template.base_package && (
          <div>
            <div className="text-[12px] font-bold text-[#8a95a8] uppercase tracking-[0.5px] mb-2">Base Package</div>
            <div className="bg-[#f7f9fc] rounded-lg p-3 text-[13px] text-[#374151] whitespace-pre-wrap leading-relaxed">
              {template.base_package}
            </div>
          </div>
        )}

        {/* Pricing */}
        <div>
          <div className="text-[12px] font-bold text-[#8a95a8] uppercase tracking-[0.5px] mb-2">Pricing</div>
          <div className="bg-[#f7f9fc] rounded-lg p-3">
            <div className="flex justify-between py-1.5 text-[14px] font-bold">
              <span>Base Package</span>
              <span>{fmt(quoteSubtotal)}</span>
            </div>

            {/* Options */}
            {template.options && template.options.map(o => {
              const od = adOptions[o.key];
              if (!od?.selected) return null;
              return (
                <div key={o.key} className="flex justify-between items-center py-1.5 pl-3 text-[13px] border-t border-[#eef1f6]">
                  <label className="flex items-center gap-2 cursor-pointer flex-1">
                    <input
                      type="checkbox"
                      checked={optionInitials[o.key] || false}
                      onChange={e => setOptionInitials(prev => ({ ...prev, [o.key]: e.target.checked }))}
                      className="w-3.5 h-3.5 accent-[#1b5fa8]"
                    />
                    <span>{o.label}</span>
                    <span className="text-[11px] text-[#6b7280]">(initial to accept)</span>
                  </label>
                  <span className="font-semibold">{fmt(od.price)}</span>
                </div>
              );
            })}

            {optionsTotal > 0 && (
              <div className="flex justify-between py-1.5 text-[13px] font-semibold border-t border-[#eef1f6]">
                <span>Subtotal</span>
                <span>{fmt(subtotalWithOpts)}</span>
              </div>
            )}
            <div className="flex justify-between py-1 text-[13px] text-[#6b7280]">
              <span>Tax</span>
              <span>{fmt(totalTax)}</span>
            </div>
            <div className="flex justify-between pt-2 mt-1 border-t-2 border-[#1b5fa8] text-[16px] font-extrabold text-[#1b5fa8]">
              <span>Total</span>
              <span>{fmt(grandTotal)}</span>
            </div>
          </div>
        </div>

        {/* Deposit breakdown */}
        {template.deposit_formula === 'total_minus_fixed' && template.deposit_fixed_balance && (
          <div className="bg-[#f0f7ff] p-3 rounded-lg text-[13px]">
            <div className="font-bold mb-1">Payment Schedule</div>
            <div>Deposit due at signing: <strong>{fmt(grandTotal - template.deposit_fixed_balance > 0 ? grandTotal - template.deposit_fixed_balance : 0)}</strong></div>
            {template.deposit_balance_note && (
              <div className="text-[#6b7280] mt-0.5">Balance: {template.deposit_balance_note}</div>
            )}
          </div>
        )}

        {/* Important Note */}
        {template.important_note && (
          <div className="bg-[#fff8e1] p-3 rounded-lg border-l-4 border-[#f59e0b]">
            <div className="text-[12px] font-bold mb-1.5">Important Note</div>
            <div className="text-[13px] whitespace-pre-wrap leading-relaxed mb-2">{template.important_note}</div>
            <label className="flex items-center gap-2 text-[13px] font-semibold cursor-pointer">
              <input type="checkbox" checked={noteAcknowledged} onChange={e => setNoteAcknowledged(e.target.checked)}
                className="w-3.5 h-3.5 accent-[#f59e0b]" />
              I acknowledge this note
            </label>
          </div>
        )}

        {/* Customer Fields */}
        {template.customer_fields && template.customer_fields.length > 0 && (
          <div>
            <div className="text-[12px] font-bold text-[#8a95a8] uppercase tracking-[0.5px] mb-2">Your Selections</div>
            {template.customer_fields.map(f => (
              <div key={f.key} className="mb-2.5">
                <label className="block text-[11px] font-bold text-[#6b7280] uppercase tracking-[0.5px] mb-1">{f.label}</label>
                <input
                  type="text"
                  value={customerFields[f.key] || ''}
                  onChange={e => setCustomerFields(prev => ({ ...prev, [f.key]: e.target.value }))}
                  placeholder={`Enter ${f.label.toLowerCase()}`}
                  className="w-full px-3 py-2.5 border-[1.5px] border-[#d1d5db] rounded-lg text-[14px] outline-none focus:border-[#1b5fa8] focus:ring-[3px] focus:ring-[rgba(27,95,168,0.12)] transition-all"
                />
              </div>
            ))}
          </div>
        )}

        {/* Conditions */}
        {template.conditions && (
          <div>
            <div className="text-[12px] font-bold text-[#8a95a8] uppercase tracking-[0.5px] mb-2">Terms &amp; Conditions</div>
            <div className="max-h-[300px] overflow-y-auto text-[12px] text-[#374151] whitespace-pre-wrap leading-relaxed border border-[#e5e7eb] rounded-lg p-3.5 bg-white">
              {template.conditions}
            </div>
          </div>
        )}
      </div>

      {/* E-Sign Consent + Signature */}
      <div className="px-6 pb-4">
        <div className="text-[11px] text-[#6b7280] leading-relaxed mb-4 p-3 bg-[#f9fafb] rounded-lg border border-[#e5e7eb]">
          By typing your name below and clicking &quot;Sign Agreement,&quot; you consent to use an electronic
          signature in accordance with the federal ESIGN Act and applicable state laws. Your electronic
          signature has the same legal effect as a handwritten signature.
        </div>

        <label className="flex items-start gap-2.5 mb-4 cursor-pointer select-none">
          <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 accent-[#1b5fa8]" />
          <span className="text-[13px] text-[#374151] font-medium">
            I have read and agree to all terms, conditions, and details above
          </span>
        </label>

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

        {error && <div className="text-[13px] text-[#c62828] font-semibold text-center mb-3">{error}</div>}

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
