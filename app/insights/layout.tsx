import type { Metadata } from 'next';
import { pageMeta } from '../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Insights',
  description:
    'Guides on website scope, mail-in repair, and operations from TradeHax — practical content that converts.',
  path: '/insights'
});

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
