import type { Metadata } from 'next';
import { pageMeta } from '../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Care retainer $250/mo',
  description:
    'Priority fixes, uptime checks, and small updates for $250 per month. Recurring cover after launch from TradeHax.',
  path: '/care'
});

export default function CareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
