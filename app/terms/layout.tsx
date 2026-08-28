import type { Metadata } from 'next';
import { pageMeta } from '../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Terms of service',
  description: 'TradeHax terms of service for repairs, development, retainers, and site use.',
  path: '/terms'
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
