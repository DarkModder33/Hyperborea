import type { Metadata } from 'next';

export const SITE_URL = 'https://tradehax.net';
export const SITE_NAME = 'TradeHax';

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export function pageMeta({
  title,
  description,
  path = '/',
  type = 'website'
}: {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = absoluteUrl(path);
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
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}
