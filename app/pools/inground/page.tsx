import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Inground Vinyl Liner Pools',
  description: 'Custom inground vinyl liner pool installations by Sparkle Pools. Latham steel and polymer wall systems with premium Merlin Industries liners.',
};

export default function IngroundPoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Pool Construction</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Inground Vinyl Liner Pools
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Custom-designed vinyl liner pools built to fit your yard, your style, and your budget. Latham steel and polymer wall systems paired with premium Merlin Industries liners.
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Feature Image */}
      <section className="bg-white pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 sm:h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/fiberglass-pool-aerial.jpg"
              alt="Aerial view of a completed inground pool installation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Vinyl Liner Pools */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Custom Built</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Vinyl Liner Pools
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                We build custom inground vinyl liner pools using Latham steel and polymer wall systems &mdash; fully tailored to your yard, your style, and your budget.
              </p>
              <div className="mt-8 relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/steel-walls.jpg"
                  alt="Latham steel pool walls during construction"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Fully custom &mdash; any shape, size, or depth to fit your yard</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Paired with premium Merlin Industries vinyl liners in dozens of patterns and colors.{' '}
                    <Link href="/pools/liners" className="text-primary font-medium hover:underline">Browse liners &rarr;</Link>
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Steel walls offer strength and durability with galvanized corrosion resistance</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Polymer walls are 100% corrosion-free &mdash; ideal for saltwater pools</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Professional excavation, plumbing, electrical, and finishing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fiberglass callout */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Looking for a fiberglass pool?</h3>
          <p className="text-slate-500 mb-6">We also install Latham fiberglass pools — factory-built and installed in days, not months.</p>
          <Link href="/pools/fiberglass" className="btn-pill btn-pill-primary px-8 py-3">
            Explore Fiberglass Pools &rarr;
          </Link>
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
            Ready to Start Your Pool Project?
          </h2>
          <p className="mt-6 text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Tell us about your vision and we will help you choose the right pool for your yard, your family, and your budget.
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
