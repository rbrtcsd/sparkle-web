import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Sparkle Pools - Let's Get Wet!",
    template: "%s | Sparkle Pools - Let's Get Wet!",
  },
  description:
    'Terre Haute\'s trusted pool experts. Inground pools, fiberglass pools, above ground pools, service, repair, and maintenance across the Wabash Valley.',
  icons: {
    icon: '/favicon.svg',
  },
};

async function getWebsiteSettings() {
  try {
    const { data } = await supabase
      .from('app_settings')
      .select('key,value')
      .in('key', ['website_seasonal', 'website_announcement', 'website_scheduling_enabled']);
    const settings: Record<string, string | boolean> = {};
    (data || []).forEach((r: { key: string; value: string | boolean }) => { settings[r.key] = r.value; });
    return settings;
  } catch {
    return {};
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ws = await getWebsiteSettings();

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {ws.website_announcement && (
          <div className="bg-[#1b5fa8] text-white text-center text-sm font-semibold py-2.5 px-4 relative z-[60]">
            {ws.website_announcement as string}
          </div>
        )}
        <Navbar seasonal={ws.website_seasonal as string || undefined} />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
