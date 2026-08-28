import type { Metadata } from 'next';

export const SITE_URL = 'https://tradehax.net';
export const SITE_NAME = 'TradeHax';

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

/** Map route path → pre-generated OG PNG under /og */
export function ogImageFor(path = '/', insightSlug?: string): string {
  if (insightSlug) return absoluteUrl(`/og/insight-${insightSlug}.png`);
  const key = path.replace(/\/$/, '') || '/';
  const map: Record<string, string> = {
    '/': '/og/default.png',
    '/services': '/og/services.png',
    '/care': '/og/care.png',
    '/portfolio': '/og/portfolio.png',
    '/contact': '/og/contact.png',
    '/insights': '/og/insights.png',
    '/about': '/og/default.png',
    '/privacy': '/og/default.png',
    '/terms': '/og/default.png',
    '/intelligence': '/og/default.png'
  };
  return absoluteUrl(map[key] || '/og/default.png');
}

export function pageMeta({
  title,
  description,
  path = '/',
  type = 'website',
  insightSlug
}: {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  insightSlug?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const image = ogImageFor(path, insightSlug);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: 'en_US',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}
