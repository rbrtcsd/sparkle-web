import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Inground pools, fiberglass pools, above ground pools, safety covers, heating, maintenance, repair, and water hauling in the Wabash Valley.',
};

const services = [
  {
    title: 'Inground Vinyl Liner Pools',
    description:
      'Build your dream pool with a custom inground vinyl liner pool. We use Latham steel and polymer wall systems paired with premium Merlin Industries vinyl liners \u2014 available in dozens of patterns from the Aqua Intense, Aqua Max, and designer collections. Every pool is custom-designed to fit your yard and lifestyle.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Fiberglass Pools',
    description:
      'Want a pool installed in days instead of months? Our Latham fiberglass pools feature Advanced Composite construction and Crystite Gel Coat finishes for unmatched durability. Choose from a wide range of shapes and sizes \u2014 from compact plunge pools to full-size family pools.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: 'Above Ground Pools',
    description:
      "Quality doesn't have to break the bank. We offer the Nova STR steel above ground pool and the Revelle hybrid model \u2014 both built to last with sleek designs that look great in any yard. Professional installation included.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Automatic Safety Covers',
    description:
      'Protect your family and save on energy with a Coverstar automatic pool cover. One-touch operation, ASTM safety rated, and available in 10 colors. Models include the premium Eclipse, the reliable CS3000, and the sleek Atom. Covers can reduce heating and chemical costs by up to 60%.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Pool Heating',
    description:
      'Extend your swim season with professional heating solutions. We install and service Raypak Digital gas heaters (199k\u2013399k BTU) and Raypak CrosswindV heat pumps with efficiency ratings up to 6.1 COP. Heat & chill models available.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 009 11.25a3 3 0 10 6 0c0-1.39-.45-2.672-1.21-3.713.885-.544 1.834-.946 2.842-1.185.39-.093.756-.21 1.094-.348z" />
      </svg>
    ),
  },
  {
    title: 'Pool Service & Maintenance',
    description:
      'Keep your pool crystal clear all season. We offer weekly maintenance plans, opening and closing services, water chemistry testing and balancing, and equipment inspections. One less thing to worry about.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Equipment Repair & Installation',
    description:
      'Pumps, filters, heaters, salt systems, lighting, plumbing \u2014 we repair and install it all. Our technicians are factory-trained on all major brands. Fast diagnosis, quality parts, honest pricing.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.067A.75.75 0 005.25 12.6v6.8a.75.75 0 00.786.5l5.384-.652m0-4.08l5.384 3.067a.75.75 0 00.786-.5v-6.8a.75.75 0 00-.786-.5l-5.384.652m0 4.08V9.927m0 0a.75.75 0 00-.786-.5L5.25 10.079a.75.75 0 00-.786.5M11.42 9.927a.75.75 0 01.786-.5l5.384.652a.75.75 0 01.786.5" />
      </svg>
    ),
  },
  {
    title: 'Water Hauling',
    description:
      'Need water fast? We provide bulk water delivery for pool fills, top-offs, and emergency needs across the Wabash Valley. Save time and protect your well.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-2.39a1.125 1.125 0 01-.79-.327l-2.61-2.611a1.125 1.125 0 00-.795-.329H9.75V5.25A2.25 2.25 0 007.5 3H5.25A2.25 2.25 0 003 5.25v8.875c0 .621.504 1.125 1.125 1.125h1.125" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Our Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              What We Do
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              From new pool construction to equipment repair, we offer everything you need to build, maintain, and enjoy your pool. Every project is handled by our experienced team with quality products from trusted brands.
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover group p-8 rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-100/50"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-slate-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-lg text-slate-600 mb-8">
              Ready to get started? Tell us what you need and we will take it from there.
            </p>
            <Link
              href="/request"
              className="btn-pill btn-pill-primary px-10 py-4 text-lg shadow-lg shadow-primary/20"
            >
              Request a Service
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
