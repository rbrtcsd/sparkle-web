import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional pool services including openings, closings, repairs, maintenance, renovation, and more.',
};

const services = [
  {
    title: 'Pool Openings',
    description:
      'Welcome the season with our comprehensive pool opening service. We remove winter covers, inspect all equipment, reassemble filtration systems, clean debris, balance water chemistry, and ensure everything is running smoothly so you can dive in worry-free.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Pool Closings',
    description:
      'Protect your pool investment during the off-season with our thorough winterization process. We lower water levels, blow out plumbing lines, add winterizing chemicals, install winter plugs, and secure your safety cover to prevent freeze damage.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Liner Replacement',
    description:
      'Refresh the look and integrity of your pool with a new vinyl liner. We carry a wide selection of patterns and colors, handle precise measurements, expert installation, and proper water filling to ensure a perfect fit and long-lasting results.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Equipment Repair & Installation',
    description:
      'Keep your pool systems running at peak performance. Our certified technicians service and repair pumps, filters, heaters, salt systems, chlorinators, automation controls, and LED lighting. We also handle full equipment upgrades and new installations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.067A.75.75 0 005.25 12.6v6.8a.75.75 0 00.786.5l5.384-.652m0-4.08l5.384 3.067a.75.75 0 00.786-.5v-6.8a.75.75 0 00-.786-.5l-5.384.652m0 4.08V9.927m0 0a.75.75 0 00-.786-.5L5.25 10.079a.75.75 0 00-.786.5M11.42 9.927a.75.75 0 01.786-.5l5.384.652a.75.75 0 01.786.5" />
      </svg>
    ),
  },
  {
    title: 'Weekly Maintenance',
    description:
      'Enjoy your pool without the hassle. Our weekly service includes skimming, vacuuming, brushing walls and tile, cleaning baskets, backwashing filters, testing and adjusting water chemistry, and a thorough equipment inspection to catch issues early.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Water Chemistry & Testing',
    description:
      'Proper water balance is essential for swimmer comfort, equipment longevity, and surface protection. We perform comprehensive testing for pH, alkalinity, calcium hardness, cyanuric acid, and sanitizer levels, then adjust accordingly.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'Pool Renovation',
    description:
      'Transform your backyard with a complete pool renovation. We offer resurfacing, coping replacement, tile upgrades, deck repair, plumbing updates, and custom water features. Let us bring your vision to life with expert craftsmanship.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Safety Cover Installation',
    description:
      'Protect your family and pets with a professional safety cover installation. We offer custom-measured mesh and solid safety covers that meet ASTM safety standards, along with annual inspection and re-anchoring services.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Professional Pool Services
            </h1>
            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              From seasonal maintenance to complete renovations, we offer everything you need
              to keep your pool in pristine condition. Every service is performed by our
              experienced, licensed technicians.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
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
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600 mb-6">
              Need a service not listed here? We are happy to discuss your specific needs.
            </p>
            <Link
              href="/request"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/20"
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
