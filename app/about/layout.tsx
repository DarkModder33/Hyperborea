import type { Metadata } from 'next';
import { pageMeta } from '../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'About',
  description:
    'TradeHax is founder-led by Michael O\'Flaherty — repairs, custom builds, retainers, and remote lessons. Greater Philadelphia and worldwide.',
  path: '/about'
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
