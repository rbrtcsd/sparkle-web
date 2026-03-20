'use client';

import { useState } from 'react';

interface ManagerField { key: string; label: string; type: string; }
interface CustomerField { key: string; label: string; type: string; }
interface TemplateOption { key: string; label: string; price_field: boolean; }

interface AgreementTemplate {
  version: string;
  title: string;
  body?: string;
  intro_text?: string;
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
  quoteNumber?: string;
  quoteDate?: string;
}

function fmt(n: number | null | undefined): string {
  return '$' + parseFloat(String(n || 0)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function fmtDate(iso: string | null | undefined): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function AgreementSigning({
  token, template, customerName, supabaseUrl, supabaseKey,
  agreementData, quoteSubtotal, quoteTaxTotal, quoteTotal, taxRate,
  quoteNumber, quoteDate
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
  const selectedOptions: (TemplateOption & { price: number })[] = [];
  if (template.options) {
    template.options.forEach(o => {
      const od = adOptions[o.key];
      if (od?.selected) {
        const price = od.price || 0;
        optionsTotal += price;
        selectedOptions.push({ ...o, price });
      }
    });
  }
  const tr = taxRate || 0;
  const grandTotal = ((quoteSubtotal || 0) + optionsTotal) * (1 + tr);

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

  // Legacy simple template
  if (!isRichTemplate) {
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

  // Rich agreement form matching PDF layout
  return (
    <div className="border-t border-[#eef1f6]">
      {/* Agreement Header */}
      <div className="px-6 py-5 bg-[#1b5fa8] text-white">
        <h2 className="text-[18px] font-extrabold tracking-wide mb-2">
          {template.title || 'Agreement'}
        </h2>
        <div className="text-[12px] opacity-85 leading-relaxed">
          <div><strong>Buyer:</strong> {customerName}</div>
          <div><strong>Date:</strong> {fmtDate(quoteDate)}</div>
          {quoteNumber && <div><strong>Quote:</strong> {quoteNumber}</div>}
        </div>
      </div>

      {/* Intro Text */}
      {template.intro_text && (
        <div className="px-6 py-4 text-[13px] text-[#374151] leading-relaxed bg-[#fffde7] border-b border-[#f0e68c]">
          {template.intro_text}
        </div>
      )}

      <div className="px-6 py-4">
        {/* Project Details */}
        {template.manager_fields && template.manager_fields.length > 0 && (
          <div className="mb-5">
            {template.manager_fields.map(f => {
              let val = String(ad[f.key] || '');
              if (f.type === 'date' && val) val = fmtDate(val);
              return (
                <div key={f.key} className="flex justify-between py-[5px] text-[13px] border-b border-[#f3f5f8]">
                  <span className="text-[#4a5568] font-semibold">{f.label}:</span>
                  <span className="font-bold text-[#1e2533]">{val}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Base Package */}
        {template.base_package && (
          <div className="mb-5">
            <div className="text-[13px] font-extrabold text-[#1b5fa8] uppercase tracking-[0.5px] mb-2 pb-1 border-b-2 border-[#1b5fa8]">
              Base Package Includes
            </div>
            <div
              className="text-[13px] text-[#374151] leading-[1.7] [&_ol]:pl-5 [&_ol]:my-1 [&_ul]:pl-5 [&_ul]:my-1 [&_li]:mb-0.5"
              dangerouslySetInnerHTML={{ __html: template.base_package }}
            />
          </div>
        )}

        {/* Important Note */}
        {template.important_note && (
          <div className="mb-5 bg-[#fff8e1] border-[1.5px] border-[#f59e0b] rounded-lg p-3.5">
            <div className="text-[12px] font-extrabold text-[#b45309] uppercase mb-1.5">Important Note</div>
            <div className="text-[13px] text-[#92400e] leading-relaxed">{template.important_note}</div>
            <label className="flex items-center gap-2 mt-2.5 p-2 bg-[rgba(245,158,11,0.1)] rounded-md cursor-pointer">
              <input
                type="checkbox"
                checked={noteAcknowledged}
                onChange={e => setNoteAcknowledged(e.target.checked)}
                className="w-4 h-4 accent-[#f59e0b]"
              />
              <span className="text-[13px] font-bold text-[#92400e]">Initial here to acknowledge</span>
            </label>
          </div>
        )}

        {/* Options */}
        {selectedOptions.length > 0 && (
          <div className="mb-5">
            <div className="text-[13px] font-extrabold text-[#1b5fa8] uppercase tracking-[0.5px] mb-2 pb-1 border-b-2 border-[#1b5fa8]">
              Options (Add Cost to Base Package Pricing)
            </div>
            {selectedOptions.map(o => (
              <div key={o.key} className="flex items-center gap-2.5 p-3 mb-1.5 bg-[#f7f9fc] border-[1.5px] border-[#e5e7eb] rounded-lg">
                <label className="flex-1 flex items-center gap-2 text-[13px] font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={optionInitials[o.key] || false}
                    onChange={e => setOptionInitials(prev => ({ ...prev, [o.key]: e.target.checked }))}
                    className="w-4 h-4 accent-[#1b5fa8]"
                  />
                  {o.label}
                </label>
                <span className="text-[14px] font-bold text-[#1b5fa8] whitespace-nowrap">{fmt(o.price)}</span>
              </div>
            ))}
          </div>
        )}

        {/* Pricing Summary */}
        <div className="mb-5">
          <div className="text-[13px] font-extrabold text-[#1b5fa8] uppercase tracking-[0.5px] mb-2 pb-1 border-b-2 border-[#1b5fa8]">
            Pricing
          </div>
          <div className="border-[1.5px] border-[#e5e7eb] rounded-lg overflow-hidden">
            <div className="flex justify-between px-3.5 py-2.5 text-[13px] border-b border-[#eef1f6]">
              <span className="font-semibold">Base Package Pricing:</span>
              <span className="font-bold">{fmt(quoteSubtotal)} <span className="text-[11px] text-[#8a95a8] ml-1">+ TAX</span></span>
            </div>
            {optionsTotal > 0 && (
              <>
                <div className="flex justify-between px-3.5 py-2.5 text-[13px] border-b border-[#eef1f6]">
                  <span className="font-semibold">Total Options:</span>
                  <span className="font-bold">{fmt(optionsTotal)} <span className="text-[11px] text-[#8a95a8] ml-1">+ TAX</span></span>
                </div>
                <div className="flex justify-between px-3.5 py-2.5 text-[13px] border-b border-[#eef1f6]">
                  <span className="font-semibold">Total Base + Total Options:</span>
                  <span className="font-bold">{fmt((quoteSubtotal || 0) + optionsTotal)} <span className="text-[11px] text-[#8a95a8] ml-1">+ TAX</span></span>
                </div>
              </>
            )}
            <div className="flex justify-between px-3.5 py-3 bg-[#1b5fa8] text-white text-[15px] font-extrabold">
              <span>Total (incl. tax):</span>
              <span>{fmt(grandTotal)}</span>
            </div>
          </div>
        </div>

        {/* Customer Fields */}
        {template.customer_fields && template.customer_fields.length > 0 && (
          <div className="mb-5">
            {template.customer_fields.map(f => (
              <div key={f.key} className="mb-3.5">
                <label className="block text-[12px] font-bold text-[#4a5568] uppercase tracking-[0.3px] mb-1.5">
                  {f.label}:
                </label>
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

        {/* Payment Schedule */}
        {template.deposit_formula === 'total_minus_fixed' && template.deposit_fixed_balance && (
          <div className="mb-5 bg-[#f0f7ff] border-[1.5px] border-[#bfdbfe] rounded-lg p-3.5">
            <div className="text-[12px] font-extrabold text-[#1b5fa8] uppercase mb-2">
              Payments Shall Be Made as Follows
            </div>
            <div className="flex justify-between text-[13px] py-1">
              <span>Due upon signing:</span>
              <strong>{fmt(grandTotal - template.deposit_fixed_balance > 0 ? grandTotal - template.deposit_fixed_balance : 0)}</strong>
            </div>
            <div className="flex justify-between text-[13px] py-1">
              <span>Due upon completion*:</span>
              <strong>{template.deposit_balance_note || fmt(template.deposit_fixed_balance)}</strong>
            </div>
          </div>
        )}

        {/* Agreed Conditions */}
        {template.conditions && (
          <div className="mb-5">
            <div className="text-[13px] font-extrabold text-[#1b5fa8] uppercase tracking-[0.5px] mb-2 pb-1 border-b-2 border-[#1b5fa8]">
              Agreed Conditions
            </div>
            <div
              className="max-h-[350px] overflow-y-auto text-[11px] text-[#374151] leading-[1.7] border-[1.5px] border-[#e5e7eb] rounded-lg p-4 bg-white [&_ol]:pl-5 [&_ol]:my-1 [&_ul]:pl-5 [&_ul]:my-1 [&_li]:mb-0.5"
              dangerouslySetInnerHTML={{ __html: template.conditions }}
            />
          </div>
        )}

        {/* Legal Acknowledgment */}
        <div className="p-3.5 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg my-4 text-[12px] text-[#374151] leading-relaxed italic">
          &ldquo;The undersigned parties have read and understand this Agreement, including the Terms and
          Conditions above, and the undersigned parties are in complete agreement with the same. In witness
          thereof, the parties have set their hands and seals below on the day and year first written above.&rdquo;
        </div>
      </div>

      {/* ESIGN Consent + Signature */}
      <div className="px-6 pb-5">
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
