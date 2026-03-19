import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Customer Appreciation Day Sale',
  description: 'Sparkle Pools Annual Customer Appreciation Day Sale — April 27 through May 3, 2026. Special deals on pools, equipment, chemicals, and more at both Terre Haute locations.',
};

export default function SalePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0e3d72 0%, #1b5fa8 40%, #0097a7 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sale-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sale-dots)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-white tracking-widest uppercase">Annual Event</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Customer<br />Appreciation Day
          </h1>
          <p className="mt-6 text-2xl sm:text-3xl font-bold text-teal-200">
            April 27 &ndash; May 3, 2026
          </p>
          <p className="mt-4 text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            One week of special deals, exclusive discounts, and giveaways to thank our amazing customers.
            Visit either location to save big on pools, equipment, chemicals, and more!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request"
              className="btn-pill bg-white text-primary px-10 py-4 text-lg hover:bg-blue-50 shadow-lg font-bold"
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
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Sale Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">What to Expect</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              One Week of Incredible Deals
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Our annual Customer Appreciation Day is our way of saying thank you. Stop by either location
              for exclusive in-store specials you won&apos;t find any other time of year.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Pool Chemicals',
                desc: 'Stock up for the season with discounted chemicals, shock treatments, and water care products.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
              },
              {
                title: 'Equipment Deals',
                desc: 'Special pricing on pumps, filters, heaters, robotic cleaners, and automation systems.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.067A.75.75 0 005.25 12.6v6.8a.75.75 0 00.786.5l5.384-.652m0-4.08l5.384 3.067a.75.75 0 00.786-.5v-6.8a.75.75 0 00-.786-.5l-5.384.652m0 4.08V9.927" />
                  </svg>
                ),
              },
              {
                title: 'Pool Accessories',
                desc: 'Floats, toys, covers, ladders, lights, and everything you need for pool season.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                ),
              },
              {
                title: 'New Pool Specials',
                desc: 'Thinking about a new pool? Special financing and pricing on inground and above ground pool packages.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
              },
              {
                title: 'Service Discounts',
                desc: 'Book your pool opening, liner replacement, or equipment installation at special event pricing.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.067A.75.75 0 005.25 12.6v6.8a.75.75 0 00.786.5l5.384-.652m0-4.08l5.384 3.067a.75.75 0 00.786-.5v-6.8a.75.75 0 00-.786-.5l-5.384.652m0 4.08V9.927m0 0a.75.75 0 00-.786-.5L5.25 10.079a.75.75 0 00-.786.5M11.42 9.927a.75.75 0 01.786-.5l5.384.652a.75.75 0 01.786.5" />
                  </svg>
                ),
              },
              {
                title: 'Giveaways & More',
                desc: 'Door prizes, free water testing, hot dogs, and fun for the whole family. Come hang out with us!',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations & Hours */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Visit Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Two Locations</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="bg-primary p-6">
                <h3 className="text-xl font-bold text-white">Sparkle Pools North</h3>
                <p className="text-blue-100/80 text-sm mt-1">2225 N 25th Street, Terre Haute, IN 47804</p>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm">Monday &ndash; Friday: 9:00 AM &ndash; 5:00 PM</p>
                <a href="tel:8122321292" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-3 hover:text-primary-dark">
                  (812) 232-1292
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="bg-primary p-6">
                <h3 className="text-xl font-bold text-white">Sparkle Pools South</h3>
                <p className="text-blue-100/80 text-sm mt-1">5171 S US Highway 41, Terre Haute, IN 47802</p>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm">Mon, Thu &ndash; Fri: 11 &ndash; 6 &middot; Sat: 9 &ndash; 3 &middot; Sun: 10 &ndash; 2</p>
                <a href="tel:8122321292" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-3 hover:text-primary-dark">
                  (812) 232-1292
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clearance Section Placeholder */}
      <section className="py-20 bg-white" id="clearance">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-teal uppercase tracking-[0.2em] mb-3">Coming Soon</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Clearance Items</h2>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
            Check back closer to the sale for a full list of clearance items and special pricing.
            Deals go live April 27th!
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0e3d72 0%, #1b5fa8 40%, #0097a7 100%)' }} className="py-20 relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Don&apos;t Miss Out!
          </h2>
          <p className="mt-6 text-lg text-blue-100/80 max-w-2xl mx-auto">
            April 27 &ndash; May 3 at both Terre Haute locations. Questions? Give us a call.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request" className="btn-pill bg-white text-primary px-10 py-4 text-lg hover:bg-blue-50 shadow-lg font-bold">
              Get a Free Quote
            </Link>
            <a href="tel:8122321292" className="btn-pill btn-pill-outline px-10 py-4 text-lg">
              (812) 232-1292
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
