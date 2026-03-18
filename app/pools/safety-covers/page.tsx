import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Automatic Safety Covers',
  description: 'Coverstar automatic pool safety covers. One-touch operation, ASTM rated, reduces heating and chemical costs by up to 60%.',
};

const checkIcon = (
  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  </div>
);

const models = [
  {
    name: 'Eclipse',
    tier: 'Premium',
    description: 'Top-tier model with advanced technology and premium features.',
  },
  {
    name: 'CS3000',
    tier: 'Tough & Reliable',
    description: 'Durable workhorse designed for dependable performance.',
  },
  {
    name: 'Atom',
    tier: 'Seamless Design',
    description: 'Sleek, modern aesthetic with seamless integration.',
  },
  {
    name: 'CS300HD',
    tier: 'Small Pools & Spas',
    description: 'Purpose-built for smaller pools and spas.',
  },
];

export default function SafetyCoversPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Authorized Coverstar Dealer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Automatic Safety Covers
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Protect your family, save energy, and simplify pool ownership with one-touch automatic covers from Coverstar.
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Key Benefits</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Why an Automatic Cover?
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                Coverstar automatic covers provide unmatched safety, energy savings, and convenience for any pool.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">One-touch operation &mdash; button, key switch, or WiFi</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">ASTM safety rated &mdash; keeps children, pets, and wildlife safe</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Reduces heating and chemical costs by up to 60%</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Heat-sealed webbing &mdash; twice as strong as stitched covers</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Waterproof motors and stainless steel components</p>
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

      {/* Models */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Models</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Coverstar Models
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              A cover for every pool, every budget, and every style.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {models.map((model) => (
              <div
                key={model.name}
                className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold text-slate-900">{model.name}</h3>
                <p className="text-sm font-semibold text-primary mt-1">{model.tier}</p>
                <p className="mt-4 text-slate-500 leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options & Pricing */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Options</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Colors, Tracks &amp; Options
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              10 standard cover colors available, with multiple track systems including under-track, standard top-track, and recessed options. Various lid and coping finishes to match your pool deck.
            </p>
            <div className="mt-8 bg-slate-50 rounded-2xl border border-slate-100 p-6 sm:p-8">
              <p className="text-slate-700 font-semibold">Pricing</p>
              <p className="mt-2 text-slate-500 leading-relaxed">
                Automatic covers typically range from $10,000 to $20,000 depending on pool size and complexity.
              </p>
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
            Protect Your Pool &amp; Family
          </h2>
          <p className="mt-6 text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Get a free quote on a Coverstar automatic safety cover for your pool.
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
