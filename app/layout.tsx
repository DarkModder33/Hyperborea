import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hyperion Intelligence | TradeHax AI',
  description:
    'Elite tech execution and simulation-first market research. Websites, repairs, automation, and AI intelligence for operators who ship.',
  openGraph: {
    title: 'Hyperion Intelligence | TradeHax AI',
    description: 'Execution layer for operators who ship.',
    url: 'https://www.tradehax.net',
    siteName: 'TradeHax AI',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
