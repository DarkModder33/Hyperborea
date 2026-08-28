import type { Metadata } from 'next';
import { pageMeta } from '../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Contact / request a scope',
  description:
    'Request a written scope from TradeHax. Email owner@tradehax.net or text (609) 412-8878. 24h reply target.',
  path: '/contact'
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
