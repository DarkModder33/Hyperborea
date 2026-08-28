import type { Metadata } from 'next';
import { pageMeta } from '../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Privacy policy',
  description: 'How TradeHax collects and uses contact and technical data. Privacy policy.',
  path: '/privacy'
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
