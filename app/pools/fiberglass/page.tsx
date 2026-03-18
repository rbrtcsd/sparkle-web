import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fiberglass Pools',
  description: 'Latham fiberglass pools installed in days. Advanced Composite construction, Crystite Gel Coat finish, and dozens of shapes and colors.',
};

const checkIcon = (
  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  </div>
);

const shellCategories = [
  {
    title: 'Rectangular / Classic',
    models: 'Apollo 14, Ariel 16, Astoria (12/14/16), Cape Cod (12/14/16), Corinthian (12/14/16), Delray, Kingston, Lake Shore, Monaco, Olympia (12/14/16), Providence 14, Sirius, St. Thomas',
  },
  {
    title: 'Freeform / Curved',
    models: 'Aruba, Barcelona, Bay Isle, Bermuda (12/14/16), Cayman (14/16), Claremont, Coronado, Fiji, Jamaica (10/12/14), Key West, Pleasant Cove, Synergy, Vista Isle',
  },
  {
    title: 'Geometric',
    models: 'Athens (13.23/13.37), Axiom (12/14/16), Coral 16, San Marino (12.23/12.26), Tuscan (11\u201314 series)',
  },
  {
    title: 'Plunge Pools',
    models: 'Enchantment (9.17/9.21/9.24), Milan (8.14/10.16/10.20)',
  },
];

const crystalColors = [
  { name: 'Sapphire Blue', color: '#1a4b8c' },
  { name: 'Ocean Blue', color: '#2980b9' },
  { name: 'Night Sky', color: '#1a1a2e' },
  { name: 'Shale Gray', color: '#7f8c8d' },
  { name: 'Coastal Bronze', color: '#8b6914' },
  { name: 'Pearl White', color: '#f5f0e8' },
];

const classicColors = [
  { name: 'Sapphire Blue', color: '#1a4b8c' },
  { name: 'Ocean Blue', color: '#2980b9' },
  { name: 'Night Sky', color: '#1a1a2e' },
  { name: 'Shale Gray', color: '#7f8c8d' },
  { name: 'Coastal Bronze', color: '#8b6914' },
  { name: 'Whisper White', color: '#fefefe' },
];

export default function FiberglassPoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Fiberglass Pools</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Fiberglass Pools
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Latham Fiberglass &mdash; Installed in Days, Not Months
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Why Fiberglass? */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Why Fiberglass?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Why Fiberglass?
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                Latham fiberglass pools combine speed, strength, and beauty into the lowest-maintenance pool you can own. Factory-built and delivered ready to install.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Installed in as little as 2&ndash;3 days</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Advanced Composite construction &mdash; strongest shell in the industry</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Crystite Gel Coat finish &mdash; smooth, stain-resistant, beautiful</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Lowest lifetime maintenance cost of any pool type</p>
                </li>
                <li className="flex items-start gap-4">
                  {checkIcon}
                  <p className="text-slate-600 leading-relaxed">Backed by Latham&apos;s industry-leading warranty</p>
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

      {/* Shell Shapes */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Shell Shapes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Choose Your Shape
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Dozens of shapes and sizes to fit any backyard, organized by style.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {shellCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{cat.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{cat.models}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colors & Finishes */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Colors &amp; Finishes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Colors &amp; Finishes
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Two premium finish lines to match your style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Crystite Crystal */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Crystite Crystal</h3>
              <p className="text-slate-500 text-sm mb-6">Shimmer finish</p>
              <div className="grid grid-cols-3 gap-4">
                {crystalColors.map((c) => (
                  <div key={c.name} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl border border-slate-200 shadow-sm"
                      style={{ backgroundColor: c.color }}
                    />
                    <p className="mt-2 text-xs font-medium text-slate-600">{c.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Crystite Classic */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Crystite Classic</h3>
              <p className="text-slate-500 text-sm mb-6">Smooth finish</p>
              <div className="grid grid-cols-3 gap-4">
                {classicColors.map((c) => (
                  <div key={c.name} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl border border-slate-200 shadow-sm"
                      style={{ backgroundColor: c.color }}
                    />
                    <p className="mt-2 text-xs font-medium text-slate-600">{c.name}</p>
                  </div>
                ))}
              </div>
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

      {/* Waterline Tile Options */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Waterline Tiles</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Waterline Tile Options
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Choose from designer waterline tile patterns including Italian Slate, Glacier, Monet, Night Life, and Abyss series.
            </p>
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
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Tell us about your backyard and we will help you choose the perfect fiberglass pool for your family.
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
