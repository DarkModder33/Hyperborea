import type { Metadata } from 'next';
import './globals.css';
import AnalyticsProvider from './components/AnalyticsProvider';
import StickyCta from './components/StickyCta';
import Plausible from './components/Plausible';
import JsonLd from './components/JsonLd';
import CommandPalette from './components/CommandPalette';
import { SITE_NAME, SITE_URL, ogImageFor } from '../lib/seo';

const defaultOg = ogImageFor('/');

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TradeHax | Tech repairs, websites & remote lessons',
    template: '%s | TradeHax'
  },
  description:
    'Get an instant estimate for phone and laptop repair ($50–200), websites from $299, Care retainers $250/mo, and remote guitar lessons. Greater Philadelphia and remote worldwide.',
  keywords: [
    'phone repair Philadelphia',
    'mail-in phone repair',
    'data recovery',
    'custom website development',
    'remote guitar lessons',
    'TradeHax'
  ],
  authors: [{ name: "Michael O'Flaherty", url: SITE_URL }],
  creator: 'TradeHax',
  publisher: 'TradeHax',
  applicationName: SITE_NAME,
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'TradeHax | Repairs, websites, lessons',
    description: 'Instant estimates. Clear scope. Remote and mail-in.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [{ url: defaultOg, width: 1200, height: 630, alt: 'TradeHax' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradeHax | Tech repairs & custom builds',
    description: 'Instant estimates. Clear scope.',
    images: [defaultOg]
  },
  formatDetection: { email: false, address: false, telephone: false }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <Plausible />
        <JsonLd />
      </head>
      <body className="relative min-h-screen antialiased pb-20 md:pb-0">
        <div className="aurora" aria-hidden />
        <div className="noise" aria-hidden />
        <div className="relative z-10">
          <AnalyticsProvider />
          {children}
          <StickyCta />
          <CommandPalette />
        </div>
      </body>
    </html>
  );
}
