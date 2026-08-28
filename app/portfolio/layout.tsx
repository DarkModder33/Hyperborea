import type { Metadata } from 'next';
import { pageMeta } from '../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Portfolio',
  description:
    'Selected TradeHax work: website rebuilds, data recovery, automation, and remote lessons. Problem, range, result.',
  path: '/portfolio'
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
