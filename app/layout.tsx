import type { Metadata } from 'next';
import './globals.css';
import AnalyticsProvider from './components/AnalyticsProvider';
import StickyCta from './components/StickyCta';
import Plausible from './components/Plausible';

export const metadata: Metadata = {
  title: 'TradeHax | Tech repairs, custom builds & music lessons',
  description:
    'Founder-led tech execution: device repairs $50–200, custom development from $299, remote guitar lessons. Instant estimates. Greater Philadelphia + worldwide.',
  openGraph: {
    title: 'TradeHax | One expert. Full stack.',
    description: 'Instant estimates. Scoped before invoice. Remote + mail-in.',
    url: 'https://www.tradehax.net',
    siteName: 'TradeHax',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradeHax | Tech repairs & custom builds',
    description: 'Instant estimates. Clear scope. No theater.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <Plausible />
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
