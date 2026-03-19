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

          {/* 15% Off Banner */}
          <div className="bg-primary rounded-2xl p-10 text-center mb-12 shadow-lg">
            <div className="text-6xl sm:text-7xl font-extrabold text-white mb-3">15% OFF</div>
            <p className="text-xl text-blue-100 font-semibold">All In-Stock Products</p>
            <p className="text-sm text-blue-200/70 mt-2">Chemicals, equipment, accessories, parts, and more. If it&apos;s on the shelf, it&apos;s on sale.*</p>
          </div>

          {/* AG Pool Deal */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200 rounded-2xl p-8 sm:p-10 mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-block bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3">Sale Week Exclusive</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Above Ground Pools</h3>
                <h4 className="text-xl font-bold text-teal-700 mt-2">Free Water Hauling Included**</h4>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  Purchase an above ground pool during sale week and we&apos;ll fill it for you &mdash; completely free.
                  Water hauling is typically an additional charge, but this week it&apos;s included with every above ground pool purchase.**
                </p>
                <Link href="/pools/above-ground" className="inline-flex items-center gap-2 text-teal-700 font-semibold mt-4 hover:text-teal-900">
                  View Above Ground Pools &rarr;
                </Link>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg className="w-16 h-16 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-teal-800 mt-3">FREE<br />Water Hauling</p>
              </div>
            </div>
          </div>

          {/* Other deals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Chemicals</h3>
              <p className="text-sm text-slate-500">15% off all in-stock chemicals</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.067A.75.75 0 005.25 12.6v6.8a.75.75 0 00.786.5l5.384-.652m0-4.08l5.384 3.067a.75.75 0 00.786-.5v-6.8a.75.75 0 00-.786-.5l-5.384.652m0 4.08V9.927" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Equipment</h3>
              <p className="text-sm text-slate-500">15% off pumps, filters, heaters &amp; more</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Accessories</h3>
              <p className="text-sm text-slate-500">15% off all in-stock accessories</p>
            </div>
          </div>

          {/* Door Prizes */}
          <div className="mt-16 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">While You&apos;re Here</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Door Prize Giveaways</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
              Stop in during sale week and enter to win! One entry per household.
              Winners will be drawn at the end of the sale.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">🏊</div>
                <h3 className="font-bold text-slate-900 text-lg">Free Pool Closing</h3>
                <p className="text-sm text-slate-500 mt-1">We&apos;ll close your pool this fall &mdash; on us</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">🎁</div>
                <h3 className="font-bold text-slate-900 text-lg">$250 Gift Card</h3>
                <p className="text-sm text-slate-500 mt-1">Good toward any product or service</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="font-bold text-slate-900 text-lg">And More!</h3>
                <p className="text-sm text-slate-500 mt-1">Additional prizes announced soon</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-6">Limit one entry per household. No purchase necessary. Must be 18 or older to enter. See store for complete rules.</p>
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
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center mb-8 max-w-xl mx-auto">
            <p className="text-sm font-bold text-amber-800">Special Sale Week Hours &mdash; Both Locations</p>
            <p className="text-amber-700 text-sm mt-1">Mon &ndash; Fri: 9 AM &ndash; 6 PM &middot; Sat: 9 AM &ndash; 4 PM &middot; Sun: 10 AM &ndash; 2 PM</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="bg-primary p-6">
                <h3 className="text-xl font-bold text-white">Sparkle Pools North</h3>
                <p className="text-blue-100/80 text-sm mt-1">2225 N 25th Street, Terre Haute, IN 47804</p>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm font-semibold">Sale Week: M&ndash;F 9&ndash;6 &middot; Sat 9&ndash;4 &middot; Sun 10&ndash;2</p>
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
                <p className="text-slate-600 text-sm font-semibold">Sale Week: M&ndash;F 9&ndash;6 &middot; Sat 9&ndash;4 &middot; Sun 10&ndash;2</p>
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
      {/* Terms & Conditions */}
      <section className="py-10 bg-slate-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-500">Terms &amp; Conditions:</strong><br />
            *15% discount applies to all in-stock products only. Does not apply to special orders, service labor, installation, or delivery fees. Cannot be combined with other offers or prior purchases. Discount taken at time of purchase. While supplies last.<br /><br />
            **Free water hauling offer applies to above ground pool purchases only. Customer must sign a purchase contract and pay the required deposit during sale week (April 27 &ndash; May 3, 2026) to qualify. Installation address must be within 15 miles of our North location (2225 N 25th Street, Terre Haute, IN 47804). Water delivery is provided to the nearest 6,000-gallon increment (e.g. a 13,500-gallon pool receives 12,000 gallons; customer is responsible for topping off the remainder). Sparkle Pools reserves the right to modify or cancel this promotion at any time.<br /><br />
            All offers valid April 27 &ndash; May 3, 2026 only. Sparkle Pools reserves the right to limit quantities. Not responsible for typographical errors.
          </p>
        </div>
      </section>
    </>
  );
}
