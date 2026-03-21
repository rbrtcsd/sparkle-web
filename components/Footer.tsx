import Link from 'next/link';
import Image from 'next/image';
import { getStoreHours, condenseHours } from '@/lib/hours';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/request', label: 'Request a Quote' },
  { href: '/careers', label: 'Careers' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Inground Pools',
  'Fiberglass Pools',
  'Above Ground Pools',
  'Safety Covers',
  'Pool Heating',
  'Service & Repair',
];

export default async function Footer({ storeHours }: { storeHours?: string } = {}) {
  const hours = await getStoreHours();
  const northSummary = condenseHours(hours.north);
  const southSummary = condenseHours(hours.south);
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/sparkle-logo.svg"
              alt="Sparkle Pools"
              width={160}
              height={48}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-teal-300 font-semibold text-sm mt-3 tracking-wide">
              Let&apos;s Get Wet!
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              The Wabash Valley&apos;s trusted pool experts. We build, service, and maintain pools for families across Terre Haute and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Locations
            </h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div>
                <p className="text-white font-semibold text-xs uppercase tracking-wider mb-1">North</p>
                <p>2225 N 25th Street<br />Terre Haute, IN 47804</p>
                <p className="text-slate-500 mt-1">{northSummary}</p>
              </div>
              <div>
                <p className="text-white font-semibold text-xs uppercase tracking-wider mb-1">South</p>
                <p>5171 S US Highway 41<br />Terre Haute, IN 47802</p>
                <p className="text-slate-500 mt-1">{southSummary}</p>
              </div>
              <a href="tel:8122321292" className="inline-flex items-center gap-2 hover:text-white transition-colors mt-2">
                <svg className="w-4 h-4 text-primary-light shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (812) 232-1292
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; 2026 Sparkle Pools. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-700">·</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
              <span className="text-slate-700">·</span>
              <span>Terre Haute, IN &amp; the Wabash Valley</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
