'use client';

import { useActionState, useState, useEffect, useCallback } from 'react';
import { submitPoolClosing, getAvailableClosingWeeks, checkClosingTerms, type ClosingFormState, type WeekOption, type TermsCheckResult } from './actions';
import Link from 'next/link';

const COVER_OPTIONS: Record<string, string[]> = {
  inground: ['None', 'Solid w/ Watertubes', 'Solid/Mesh Safety', 'Automatic', 'Other'],
  aboveground: ['None', 'Solid w/ Winch and Cable', 'Other'],
};

const initialState: ClosingFormState = { success: false, error: null };

export default function PoolOpeningPage() {
  const [state, formAction, isPending] = useActionState(submitPoolClosing, initialState);
  const [poolType, setPoolType] = useState<string>('');
  const [weeks, setWeeks] = useState<WeekOption[]>([]);
  const [weeksLoading, setWeeksLoading] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState<WeekOption | null>(null);
  const [termsCheck, setTermsCheck] = useState<TermsCheckResult | null>(null);
  const [termsLoading, setTermsLoading] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [termsSigName, setTermsSigName] = useState('');
  const [termsCheckedAddr, setTermsCheckedAddr] = useState('');

  const handleAddressBlur = useCallback(async () => {
    const nameEl = document.getElementById('name') as HTMLInputElement;
    const addrEl = document.getElementById('address') as HTMLInputElement;
    const name = nameEl?.value?.trim() || '';
    const addr = addrEl?.value?.trim() || '';
    if (!name || addr.length < 5 || addr === termsCheckedAddr) return;
    setTermsCheckedAddr(addr);
    setTermsLoading(true);
    try {
      const result = await checkClosingTerms(name, addr);
      setTermsCheck(result);
    } catch {
      setTermsCheck(null);
    }
    setTermsLoading(false);
  }, [termsCheckedAddr]);

  useEffect(() => {
    getAvailableClosingWeeks().then((w) => {
      setWeeks(w);
      setWeeksLoading(false);
    });
  }, []);

  const coverOptions = poolType ? COVER_OPTIONS[poolType] || [] : [];

  if (state.success) {
    return (
      <>
        <section className="hero-gradient pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                You&apos;re On the List!
              </h1>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green/10 text-green flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Pool closing scheduled!</h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-4">
              We&apos;ve received your pool closing request. Our team will reach out to confirm your appointment.
              Closings are scheduled on a first-come, first-served basis, and we&apos;ll do our best to accommodate your preferred timing.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              If we need your signature on our pool closing terms, you&apos;ll receive an email shortly with a link to review and sign electronically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
                Back to Home
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Seasonal Service</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Schedule a Pool Closing
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Ready to prepare your pool for winter? Fill out the form below and we&apos;ll get you on the schedule.
              Closings are booked on a first-come, first-served basis &mdash; the earlier you sign up, the better protected your pool will be!
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">What&apos;s included in a pool closing?</h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                'Lower water level to appropriate depth',
                'Blow out and plug all plumbing lines',
                'Add winterizing chemicals',
                'Remove and store ladder, rails, and accessories',
                'Disconnect and drain pump, filter, and heater',
                'Install winter cover or safety cover',
                'Secure cover with water tubes or anchors',
                'Final equipment inspection and walkthrough',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Your Information</h2>

            {state.error && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-100 text-red-700 text-sm">
                {state.error}
              </div>
            )}

            <form action={formAction} className="space-y-6">
              {/* Hidden fields for week data */}
              <input type="hidden" name="week_id" value={selectedWeek?.week_id || ''} />
              <input type="hidden" name="week_label" value={selectedWeek?.label || ''} />

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input type="text" id="name" name="name" required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="John Smith" />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input type="tel" id="phone" name="phone" required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="(812) 555-1234" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" id="email" name="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="john@example.com" />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                  Pool Address <span className="text-red-500">*</span>
                </label>
                <input type="text" id="address" name="address" required
                  onBlur={handleAddressBlur}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="123 Main Street" />
              </div>

              {/* City/State & Zip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor="city_state" className="block text-sm font-medium text-slate-700 mb-2">City, State</label>
                  <input type="text" id="city_state" name="city_state"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Terre Haute, IN" />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-slate-700 mb-2">Zip</label>
                  <input type="text" id="zip" name="zip" maxLength={10}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="47804" />
                </div>
              </div>

              {/* Pool Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Pool Type <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button type="button" onClick={() => { setPoolType('inground'); }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      poolType === 'inground'
                        ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}>
                    <div className="font-semibold text-slate-900">Inground</div>
                    <div className="text-xs text-slate-500 mt-1">Vinyl liner, fiberglass, concrete</div>
                  </button>
                  <button type="button" onClick={() => { setPoolType('aboveground'); }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      poolType === 'aboveground'
                        ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}>
                    <div className="font-semibold text-slate-900">Above Ground</div>
                    <div className="text-xs text-slate-500 mt-1">Steel wall, resin frame</div>
                  </button>
                </div>
                <input type="hidden" name="pool_type" value={poolType} />
              </div>

              {/* Size & Cover */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pool_size" className="block text-sm font-medium text-slate-700 mb-2">Approx. Pool Size</label>
                  <input type="text" id="pool_size" name="pool_size"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="e.g. 16x32, 24' Round" />
                </div>
                <div>
                  <label htmlFor="cover_type" className="block text-sm font-medium text-slate-700 mb-2">Type of Winter Cover</label>
                  <select id="cover_type" name="cover_type"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                    disabled={!poolType}>
                    <option value="">{poolType ? '— Select cover type —' : '— Select pool type first —'}</option>
                    {coverOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Week */}
              <div>
                <label htmlFor="week_select" className="block text-sm font-medium text-slate-700 mb-2">
                  Preferred Opening Week <span className="text-red-500">*</span>
                </label>
                {weeksLoading ? (
                  <div className="px-4 py-3 rounded-lg border border-slate-200 text-slate-400 text-sm">Loading available weeks...</div>
                ) : weeks.filter(w => w.available).length === 0 ? (
                  <div className="px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-700 text-sm">
                    All weeks are currently full. Please call us at <a href="tel:8122321292" className="font-semibold underline">(812) 232-1292</a> to be added to the waitlist.
                  </div>
                ) : (
                  <select id="week_select"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                    value={selectedWeek?.week_id || ''}
                    onChange={(e) => {
                      const w = weeks.find(wk => wk.week_id === e.target.value);
                      setSelectedWeek(w || null);
                    }}>
                    <option value="">— Select a week —</option>
                    {weeks.map((w) => (
                      <option key={w.week_id} value={w.week_id} disabled={!w.available}>
                        {w.label}{w.spots_label ? ` (${w.spots_label})` : ''}
                      </option>
                    ))}
                  </select>
                )}
                <p className="mt-1.5 text-xs text-slate-400">Openings are first-come, first-served. We&apos;ll confirm your date.</p>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-2">
                  Anything else we should know?
                </label>
                <textarea id="notes" name="notes" rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Gate code, equipment issues, special instructions..." />
              </div>

              {/* Inline Opening Terms */}
              {termsLoading && (
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-500 text-center">
                  Checking terms status...
                </div>
              )}

              {termsCheck?.needsTerms && !termsLoading && (
                <div className="rounded-xl border-2 border-amber-300 bg-amber-50 overflow-hidden">
                  <div className="px-5 py-3 bg-amber-100 border-b border-amber-200">
                    <div className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-0.5">Action Required</div>
                    <div className="text-sm font-bold text-amber-900">{termsCheck.termsTitle}</div>
                  </div>
                  <div className="px-5 py-4 max-h-[300px] overflow-y-auto text-[12px] text-slate-700 leading-relaxed [&_ol]:pl-5 [&_ol]:my-1 [&_ul]:pl-5 [&_ul]:my-1 [&_li]:mb-0.5"
                    dangerouslySetInnerHTML={{ __html: termsCheck.termsContent }} />
                  <div className="px-5 py-4 border-t border-amber-200 space-y-3">
                    <div className="text-[11px] text-slate-500 leading-relaxed p-2.5 bg-white rounded-lg border border-slate-200">
                      By typing your name below, you consent to use an electronic signature in accordance with the federal ESIGN Act.
                    </div>
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input type="checkbox" checked={termsAgreed} onChange={e => setTermsAgreed(e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-amber-600" />
                      <span className="text-sm text-slate-700 font-medium">I have read and agree to the pool closing terms above</span>
                    </label>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                        Type your full name as your electronic signature
                      </label>
                      <input type="text" value={termsSigName} onChange={e => setTermsSigName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 border-[1.5px] border-slate-300 rounded-lg text-[15px] font-medium italic text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Hidden fields for terms signing */}
              <input type="hidden" name="terms_customer_id" value={termsCheck?.customerId || ''} />
              <input type="hidden" name="terms_agreed" value={termsAgreed ? 'yes' : ''} />
              <input type="hidden" name="terms_signer_name" value={termsSigName} />

              {/* Submit */}
              <button type="submit" disabled={isPending || (termsCheck?.needsTerms && (!termsAgreed || !termsSigName.trim()))}
                className="w-full btn-pill btn-pill-primary text-lg shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed gap-2">
                {isPending ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Schedule My Pool Closing'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
