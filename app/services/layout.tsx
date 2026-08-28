import type { Metadata } from 'next';
import { pageMeta } from '../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Services',
  description:
    'Device repairs $50–200, custom development from $299, Care retainers $250/mo. Remote, mail-in, Greater Philadelphia. Scoped before invoice.',
  path: '/services'
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
