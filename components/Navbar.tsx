'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
];

const poolsDropdown = [
  { href: '/pools/inground', label: 'Inground Pools' },
  { href: '/pools/above-ground', label: 'Above Ground Pools' },
  { href: '/pools/liners', label: 'Vinyl Liners' },
];

const navLinksAfter = [
  { href: '/pool-opening', label: 'Pool Openings' },
  { href: '/request', label: 'Request Service' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [poolsOpen, setPoolsOpen] = useState(false);
  const [mobilePoolsOpen, setMobilePoolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPoolsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPoolsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setPoolsOpen(false), 150);
  };

  const linkClass = scrolled
    ? 'text-slate-700 hover:text-primary hover:bg-primary/5'
    : 'text-white/90 hover:text-white hover:bg-white/10';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/sparkle-logo.svg"
              alt="Sparkle Pools"
              width={160}
              height={48}
              className={`h-10 w-auto transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${linkClass}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Pools dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setPoolsOpen(!poolsOpen)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${linkClass}`}
              >
                Pools
                <svg className={`w-4 h-4 transition-transform ${poolsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-52 rounded-xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 py-2 transition-all duration-200 ${
                  poolsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {poolsDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setPoolsOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinksAfter.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${linkClass}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request"
              className={`ml-4 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-sm'
                  : 'bg-white text-primary hover:bg-white/90 shadow-sm'
              }`}
            >
              Request Service
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                scrolled ? 'text-slate-700' : 'text-white'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Pools expandable */}
          <button
            onClick={() => setMobilePoolsOpen(!mobilePoolsOpen)}
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors"
          >
            Pools
            <svg className={`w-4 h-4 transition-transform ${mobilePoolsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {mobilePoolsOpen && (
            <div className="pl-4 space-y-1">
              {poolsDropdown.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => { setMobileOpen(false); setMobilePoolsOpen(false); }}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {navLinksAfter.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              href="/request"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
            >
              Request Service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
