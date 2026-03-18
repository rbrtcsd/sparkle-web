import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pool Heating',
  description: 'Raypak gas heaters and CrosswindV heat pumps. Professional pool heating installation and service by Sparkle Pools.',
};

const checkIcon = (
  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  </div>
);

export default function HeatingPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Raypak Authorized Dealer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Pool Heating
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Extend your swim season with professional heating solutions from Raypak. Gas heaters for quick heat-up, heat pumps for efficient all-season comfort.
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Gas Heaters */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Gas Heaters</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Raypak Digital Gas Heaters
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                Models 206A, 266A, 336A, and 406A &mdash; from 199k to 399k BTU. The fastest way to heat your pool, ideal for quick warm-ups and occasional use.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">82% efficiency</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Copper fin tube heat exchanger</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Corrosion-resistant galvanized cabinet</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Indoor/outdoor installation</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Great for quick heat-up</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 0L48 5C96 10 192 20 288 28C384 36 480 42 576 42C672 42 768 36 864 30C960 24 1056 18 1152 18C1248 18 1344 24 1392 27L1440 30V60H0V0Z" fill="#f8fafc"/>
        </svg>
      </div>

      {/* Heat Pumps */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Heat Pumps</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Raypak CrosswindV Heat Pumps
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                Models from 85k to 138k BTU with COP up to 6.1. The most efficient way to maintain your pool temperature all season long.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">COP up to 6.1 &mdash; super efficient</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Vertical discharge, small footprint</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Heat &amp; chill models available</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Works with variable speed pumps</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Best for maintaining temperature efficiently</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Which is right for you? */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Compare</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Which Is Right for You?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Gas Heater</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">&bull;</span>
                  <p className="text-slate-600 leading-relaxed">Heats fast</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">&bull;</span>
                  <p className="text-slate-600 leading-relaxed">Higher operating cost</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">&bull;</span>
                  <p className="text-slate-600 leading-relaxed">Best for occasional use or quick warm-up</p>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Heat Pump</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">&bull;</span>
                  <p className="text-slate-600 leading-relaxed">Heats slowly but very efficiently</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">&bull;</span>
                  <p className="text-slate-600 leading-relaxed">Lower operating cost</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">&bull;</span>
                  <p className="text-slate-600 leading-relaxed">Best for maintaining temp all season</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Extend Your Swim Season
          </h2>
          <p className="mt-6 text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Let us help you choose the right heating solution for your pool.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request"
              className="btn-pill bg-white text-primary px-10 py-4 text-lg hover:bg-blue-50 shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:8122321292"
              className="btn-pill btn-pill-outline px-10 py-4 text-lg"
            >
              (812) 232-1292
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
