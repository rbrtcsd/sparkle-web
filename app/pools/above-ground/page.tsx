import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Above Ground Pools',
  description: 'Quality above ground pools from Sparkle Pools. Nova STR steel and Revelle hybrid models with professional installation in the Wabash Valley.',
};

const products = [
  {
    name: 'Nova STR Steel Pool',
    image: '/images/nova-str.jpg',
    features: [
      'All-steel construction built to last',
      'Clean, modern look that complements any backyard',
      'Multiple sizes available',
      'Professional installation included',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    name: 'Revelle Hybrid Pool',
    image: '/images/revelle.jpg',
    features: [
      'Hybrid steel and resin construction',
      'Premium aesthetics with enhanced durability',
      'Resin components resist corrosion and UV damage',
      'Multiple sizes available',
      'Professional installation included',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: 'Affordable Entry',
    description: 'An above ground pool is the most budget-friendly way to bring a pool to your backyard without compromising on quality.',
  },
  {
    title: 'Flexible Installation',
    description: 'Can be installed in most yards, including spaces where inground pools may not be feasible.',
  },
  {
    title: 'Shorter Timeline',
    description: 'From start to swim in a fraction of the time compared to inground construction.',
  },
  {
    title: 'Built to Last',
    description: 'Quality steel and hybrid construction that stands up to years of use and weather.',
  },
];

export default function AboveGroundPoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Quality &amp; Value</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Above Ground Pools
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Quality above ground pools with professional installation. Affordable, durable, and ready to enjoy &mdash; perfect for any backyard and budget.
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Our Models</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Featured Above Ground Pools
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              We carry two premium above ground pool lines &mdash; both built for durability, style, and years of enjoyment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="card-hover group bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 overflow-hidden"
              >
                <div className="relative h-48 sm:h-56">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {product.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {product.name}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <p className="text-slate-500 leading-relaxed">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 0L48 5C96 10 192 20 288 28C384 36 480 42 576 42C672 42 768 36 864 30C960 24 1056 18 1152 18C1248 18 1344 24 1392 27L1440 30V60H0V0Z" fill="#f8fafc"/>
        </svg>
      </div>

      {/* Why Above Ground */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Benefits</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Why Above Ground?
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Above ground pools are a smart choice for families who want pool ownership without the full commitment of an inground build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <h3 className="text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-slate-500 leading-relaxed">
                  {benefit.description}
                </p>
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
            Ready to Start Your Pool Project?
          </h2>
          <p className="mt-6 text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Get in touch to learn more about our above ground pool options and schedule your professional installation.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request"
              className="btn-pill bg-white text-primary px-10 py-4 text-lg hover:bg-blue-50 shadow-lg"
            >
              Request Service
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
