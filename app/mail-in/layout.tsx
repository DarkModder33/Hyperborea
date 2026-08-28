import type { Metadata } from 'next';
import { pageMeta } from '../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Mail-in repair guide',
  description:
    'How to prep, pack, and ship devices to TradeHax for mail-in repair and data recovery. Tracked shipping and written outcomes.',
  path: '/mail-in'
});

export default function MailInLayout({ children }: { children: React.ReactNode }) {
  return children;
}
