import type { Metadata } from 'next';
import { supabase } from '@/lib/supabase';
import QuoteActions from './QuoteActions';

export const metadata: Metadata = {
  title: 'Quote',
};

// Force dynamic rendering since we fetch data per-request
export const dynamic = 'force-dynamic';

type QuoteItem = {
  id: string;
  description: string;
  type: string;
  quantity: number;
  unit: string;
  unit_price: number;
  line_total: number;
  sort_order: number;
};

type Quote = {
  id: string;
  quote_number: string;
  customer_name: string;
  customer_notes: string | null;
  title: string;
  status: string;
  subtotal: number;
  tax_total: number;
  total: number;
  valid_until: string | null;
  share_token: string;
  created_at: string;
};

type Settings = Record<string, string>;

function fmt(n: number | null | undefined): string {
  return '$' + parseFloat(String(n || 0)).toFixed(2);
}

function fmtDate(iso: string | null | undefined): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default async function QuoteViewPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  // Fetch quote by share_token
  const { data: quotes, error: quoteError } = await supabase
    .from('quotes')
    .select('*')
    .eq('share_token', token)
    .limit(1);

  if (quoteError || !quotes || quotes.length === 0) {
    return (
      <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Quote not found</h2>
          <p className="text-slate-500">This link may have expired or is invalid.</p>
        </div>
      </div>
    );
  }

  const quote = quotes[0] as Quote;

  // Fetch line items
  const { data: items } = await supabase
    .from('quote_items')
    .select('*')
    .eq('quote_id', quote.id)
    .order('sort_order', { ascending: true });

  const lineItems = (items || []) as QuoteItem[];

  // Fetch store settings
  const { data: settingsRows } = await supabase
    .from('app_settings')
    .select('key,value');

  const settings: Settings = {};
  if (settingsRows) {
    settingsRows.forEach((r: { key: string; value: string }) => {
      settings[r.key] = r.value;
    });
  }

  const storeName = settings.store_name || 'Sparkle Pools';
  const storeParts = [settings.store_address, settings.store_phone].filter(Boolean);
  const taxPct = (parseFloat(settings.tax_rate || '0') * 100)
    .toFixed(2)
    .replace(/\.?0+$/, '');

  const isActionable = quote.status === 'sent';
  const showBanner = ['approved', 'declined', 'converted'].includes(quote.status);
  const bannerText =
    quote.status === 'approved'
      ? 'This quote has been approved'
      : quote.status === 'declined'
        ? 'This quote has been declined'
        : quote.status === 'converted'
          ? 'This quote has been accepted and scheduled'
          : '';
  const bannerClass =
    quote.status === 'approved'
      ? 'bg-[#e8f5e9] text-[#2e7d32]'
      : quote.status === 'declined'
        ? 'bg-[#ffebee] text-[#c62828]'
        : quote.status === 'converted'
          ? 'bg-[#e0f7fa] text-[#0097a7]'
          : '';

  return (
    <div className="min-h-screen bg-[#f0f4f8] py-6 px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hide site navbar/footer for this page using a style override */}
      <style>{`
        nav, footer { display: none !important; }
        main { min-height: auto !important; }
      `}</style>

      <div className="max-w-[600px] mx-auto">
        <div className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(27,95,168,0.10)] overflow-hidden">
          {/* Header */}
          <div className="bg-[#1b5fa8] text-white px-6 py-7">
            <div className="text-xl font-extrabold">{storeName}</div>
            {storeParts.length > 0 && (
              <div className="text-xs opacity-80 mt-0.5 leading-relaxed">
                {storeParts.join(' \u00B7 ')}
              </div>
            )}
            <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold mt-3 tracking-wide">
              QUOTE {quote.quote_number || ''}
            </div>
          </div>

          {/* Status Banner */}
          {showBanner && (
            <div className={`px-6 py-4 text-center font-bold text-[15px] ${bannerClass}`}>
              {bannerText}
            </div>
          )}

          {/* Customer Message */}
          {quote.customer_notes && (
            <div className="px-6 py-[18px] bg-[#f0f7ff] border-b border-[#d6e4f0]">
              <div className="text-[10px] font-bold uppercase tracking-[1px] text-[#1b5fa8] opacity-70 mb-1.5">
                Message from {storeName}
              </div>
              <div className="text-sm leading-relaxed text-[#2a3a50] whitespace-pre-wrap">
                {quote.customer_notes}
              </div>
            </div>
          )}

          {/* Meta */}
          <div className="px-6 py-5 border-b border-[#eef1f6]">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#8a95a8]">
                Customer
              </span>
              <span className="text-sm font-semibold text-slate-900">
                {quote.customer_name || ''}
              </span>
            </div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#8a95a8]">
                Date
              </span>
              <span className="text-sm font-semibold text-slate-900">
                {fmtDate(quote.created_at)}
              </span>
            </div>
            {quote.valid_until && (
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#8a95a8]">
                  Valid Until
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {fmtDate(quote.valid_until)}
                </span>
              </div>
            )}
          </div>

          {/* Title */}
          {quote.title && (
            <div className="px-6 py-4 text-base font-bold border-b border-[#eef1f6]">
              {quote.title}
            </div>
          )}

          {/* Line Items */}
          <div className="px-6">
            <div className="flex text-[11px] font-bold uppercase tracking-wide text-[#8a95a8] pt-3.5 pb-2 border-b-[1.5px] border-[#eef1f6]">
              <span className="flex-1">Item</span>
              <span className="text-right w-20">Amount</span>
            </div>

            {lineItems.length === 0 ? (
              <div className="py-4 text-[#8a95a8] text-sm">No items</div>
            ) : (
              lineItems.map((li, i) => {
                const typeLabel =
                  li.type === 'product'
                    ? 'Product'
                    : li.type === 'labor'
                      ? 'Labor'
                      : 'Custom';
                const typeBg =
                  li.type === 'product'
                    ? 'bg-[#e3eeff] text-[#1b5fa8]'
                    : li.type === 'labor'
                      ? 'bg-[#fff3e0] text-[#e65100]'
                      : 'bg-[#eef1f6] text-[#4a5568]';

                return (
                  <div
                    key={li.id || i}
                    className={`flex items-start py-3 ${
                      i < lineItems.length - 1 ? 'border-b border-[#f3f5f8]' : ''
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold">
                        <span
                          className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded mr-1 align-middle ${typeBg}`}
                        >
                          {typeLabel}
                        </span>
                        {li.description}
                      </div>
                      <div className="text-xs text-[#8a95a8] mt-0.5">
                        {li.quantity} {li.unit || 'ea'} @ {fmt(li.unit_price)}
                      </div>
                    </div>
                    <div className="w-20 text-right text-sm font-semibold shrink-0">
                      {fmt(li.line_total)}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Totals */}
          <div className="px-6 py-4 bg-[#f7f9fc]">
            <div className="flex justify-between py-1 text-[13px]">
              <span className="text-[#4a5568]">Subtotal</span>
              <span className="font-semibold">{fmt(quote.subtotal)}</span>
            </div>
            <div className="flex justify-between py-1 text-[13px]">
              <span className="text-[#4a5568]">Tax ({taxPct}%)</span>
              <span className="font-semibold">{fmt(quote.tax_total)}</span>
            </div>
            <div className="flex justify-between pt-2.5 mt-2 border-t-2 border-[#1b5fa8] text-lg font-extrabold text-[#1b5fa8]">
              <span>Total</span>
              <span>{fmt(quote.total)}</span>
            </div>
          </div>

          {/* Actions */}
          {isActionable && <QuoteActions token={token} />}

          {/* Footer */}
          <div className="px-6 py-4 text-center text-[11px] text-[#8a95a8] border-t border-[#eef1f6]">
            {storeName} &middot; Thank you for your business
          </div>
        </div>
      </div>
    </div>
  );
}
