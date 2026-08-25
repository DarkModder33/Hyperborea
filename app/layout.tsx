import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hyperion Intelligence | TradeHax AI',
  description:
    'Elite AI-powered market intelligence and premium tech services. Simulation-first trading tools plus remote IT execution.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
