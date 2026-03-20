import type { Metadata } from 'next';
import Link from 'next/link';
import LinerGallery from './LinerGallery';

export const metadata: Metadata = {
  title: 'Vinyl Liner Replacement | Sparkle Pools',
  description: 'Authorized Merlin Industries dealer. Premium vinyl pool liner replacement for all inground pools. Browse 50+ patterns and colors. Serving Terre Haute and the Wabash Valley.',
};

export default function LinersPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Authorized Merlin Industries Dealer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Vinyl Liner Replacement
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Give your pool a brand new look with a premium Merlin Industries vinyl liner. We replace liners on all inground vinyl pools &mdash; not just pools we built. Browse our full pattern catalog below and request a free estimate.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/request"
                className="btn-pill bg-white text-primary px-8 py-3.5 text-base hover:bg-blue-50 shadow-lg text-center"
              >
                Request an Estimate
              </Link>
              <a
                href="tel:8122321292"
                className="btn-pill btn-pill-outline px-8 py-3.5 text-base text-center"
              >
                (812) 232-1292
              </a>
            </div>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Our Most Popular Service</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Professional Liner Replacement
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                A new liner transforms the entire look and feel of your pool. Whether your current liner is faded, wrinkled, leaking, or you simply want a fresh style &mdash; we handle the entire process from measurement to installation.
              </p>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                As an authorized Merlin Industries dealer, we have access to their complete catalog of premium vinyl patterns. Every liner is custom-manufactured to fit your exact pool dimensions.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <h3 className="text-lg font-bold text-slate-900 mb-5">What&apos;s Included:</h3>
              <ul className="space-y-4">
                {[
                  'Custom-measured liner manufactured to your pool',
                  'Drain pool and remove old liner',
                  'Clean and prep pool floor and walls',
                  'Install new liner with vacuum-set process',
                  'Replace skimmer and inlet faceplates and gaskets',
                  'Install liner lock to prevent slipping',
                  'Fill pool and balance startup chemicals',
                  'Most jobs completed in 1\u20132 days',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signs Section */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 0L48 5C96 10 192 20 288 28C384 36 480 42 576 42C672 42 768 36 864 30C960 24 1056 18 1152 18C1248 18 1344 24 1392 27L1440 30V60H0V0Z" fill="#f8fafc"/>
        </svg>
      </div>
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Is It Time?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Signs You Need a New Liner
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Fading & Staining', desc: 'Colors have washed out or chemical stains won\'t come clean' },
              { title: 'Wrinkles & Stretching', desc: 'Liner has shifted, bunched up, or won\'t stay smooth' },
              { title: 'Leaks & Tears', desc: 'Losing water faster than normal, visible rips or holes' },
              { title: 'Ready for a New Look', desc: 'Your liner is dated and you want a fresh, modern pattern' },
            ].map((sign) => (
              <div key={sign.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{sign.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{sign.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liner Pattern Gallery */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Merlin Industries Catalog</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Browse Liner Patterns
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Explore our complete selection of Merlin Industries vinyl liner patterns. Click any pattern to see it up close. Visit our showroom to see physical samples.
            </p>
          </div>

          <LinerGallery />

          <p className="text-center text-sm text-slate-400 mt-8">
            Colors shown are representative. Actual vinyl colors may vary slightly. Visit our showroom to view physical samples.
          </p>
        </div>
      </section>

      {/* Process */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 0L48 5C96 10 192 20 288 28C384 36 480 42 576 42C672 42 768 36 864 30C960 24 1056 18 1152 18C1248 18 1344 24 1392 27L1440 30V60H0V0Z" fill="#f8fafc"/>
        </svg>
      </div>
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              The Replacement Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Request an Estimate', desc: 'Contact us online or by phone. We\'ll schedule a time to measure your pool and discuss pattern options.' },
              { step: '2', title: 'Choose Your Pattern', desc: 'Browse the Merlin catalog and pick the perfect liner for your pool. We can bring samples to your home.' },
              { step: '3', title: 'Custom Manufacturing', desc: 'Your liner is custom-made to your pool\'s exact measurements by Merlin Industries.' },
              { step: '4', title: 'Professional Installation', desc: 'Our crew drains, preps, and installs your new liner. Most jobs are done in 1\u20132 days.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
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
            Ready for a New Liner?
          </h2>
          <p className="mt-6 text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Request a free estimate and we&apos;ll get you on the schedule. We replace liners on all inground vinyl pools in the Terre Haute and Wabash Valley area.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request"
              className="btn-pill bg-white text-primary px-10 py-4 text-lg hover:bg-blue-50 shadow-lg"
            >
              Request an Estimate
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
