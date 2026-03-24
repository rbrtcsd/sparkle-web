'use client';

import { useActionState, useState, useEffect } from 'react';
import { submitServiceRequest, type RequestFormState, getRequestCategories } from './actions';
import Link from 'next/link';
import AddressAutocomplete from '@/components/AddressAutocomplete';
import AddressValidator from '@/components/AddressValidator';

const initialState: RequestFormState = { success: false, error: null };
const DEFAULT_CATEGORIES = ['Service / Repair', 'Inground Pool Quote', 'Above Ground Pool Quote', 'Inground Liner Replacement', 'Above Ground Liner Replacement', 'Equipment Question', 'Billing / Account', 'Other'];

export default function RequestPage() {
  const [state, formAction, isPending] = useActionState(submitServiceRequest, initialState);
  const [categories, setCategories] = useState<string[]>(DEFAULT_CATEGORIES);

  useEffect(() => {
    getRequestCategories().then(cats => { if (cats.length) setCategories(cats); });
  }, []);

  if (state.success) {
    return (
      <>
        <section className="hero-gradient pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Request Submitted
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Thank you for your request!
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              We have received your service request and will get back to you as soon as possible,
              typically within one business day. If your request is urgent, please do not hesitate
              to call us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
              >
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
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Request Service or Quote
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Need a repair, a quote on a new pool, or just have a question? Fill out the form below and we&apos;ll get back to you within one business day.
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10">
            {state.error && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-100 text-red-700 text-sm">
                {state.error}
              </div>
            )}

            <form action={formAction} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  defaultValue={state.values?.name || ''}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="John Smith"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    defaultValue={state.values?.phone || ''}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={state.values?.email || ''}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* SMS Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="sms_consent"
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20 flex-shrink-0"
                  />
                  <span className="text-sm text-slate-500 leading-relaxed">
                    I agree to receive text messages from Sparkle Pools regarding my service requests,
                    appointment reminders, quotes, and account updates. Msg &amp; data rates may apply.
                    Reply STOP to opt out at any time.{' '}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                  </span>
                </label>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  defaultValue={state.values?.address || ''}
                  onBlur={() => document.getElementById('__validate_address_btn')?.click()}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="123 Main Street"
                />
                <AddressValidator cityId="city" stateId="state" zipId="zip" />
              </div>

              {/* City, State, Zip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    defaultValue={state.values?.city || ''}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Anytown"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-2">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    defaultValue={state.values?.state || ''}
                    maxLength={2}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors uppercase"
                    placeholder="IN"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-slate-700 mb-2">
                    Zip <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    required
                    defaultValue={state.values?.zip || ''}
                    maxLength={10}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="47804"
                  />
                </div>
              </div>

              <AddressAutocomplete addressId="address" cityId="city" stateId="state" zipId="zip" />

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                  What is this about? <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue={state.values?.category || ''}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="">— Select —</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
                  How can we help? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  defaultValue={state.values?.description || ''}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Please describe the service you need, any issues you're experiencing, or questions you have..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full btn-pill btn-pill-primary text-lg shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed gap-2"
              >
                {isPending ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
