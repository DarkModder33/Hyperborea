import type { Metadata } from 'next';
import './globals.css';
import AnalyticsProvider from './components/AnalyticsProvider';
import StickyCta from './components/StickyCta';
import Plausible from './components/Plausible';
import JsonLd from './components/JsonLd';
import { SITE_NAME, SITE_URL, ogImageFor } from '../lib/seo';

const defaultOg = ogImageFor('/');

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TradeHax | Tech repairs, custom builds & music lessons',
    template: '%s | TradeHax'
  },
  description:
    'Founder-led tech execution: device repairs $50–200, custom development from $299, remote guitar lessons, Care retainers $250/mo. Instant estimates. Greater Philadelphia + worldwide.',
  keywords: [
    'phone repair Philadelphia',
    'mail-in phone repair',
    'data recovery',
    'custom website development',
    'Next.js developer',
    'remote guitar lessons',
    'IT support Greater Philadelphia',
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
  alternates: {
    canonical: SITE_URL
  },
  openGraph: {
    title: 'TradeHax | One expert. Full stack.',
    description: 'Instant estimates. Scoped before invoice. Remote + mail-in. Repairs, builds, retainers.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [{ url: defaultOg, width: 1200, height: 630, alt: 'TradeHax' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradeHax | Tech repairs & custom builds',
    description: 'Instant estimates. Clear scope. Founder-led execution.',
    images: [defaultOg]
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <Plausible />
        <JsonLd />
      </head>
      <body className="min-h-screen antialiased pb-20 md:pb-0">
        <div className="noise" aria-hidden />
        <AnalyticsProvider />
        {children}
        <StickyCta />
      </body>
    </html>
  );
}
