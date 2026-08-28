import type { MetadataRoute } from 'next';
import { insights } from '../lib/content';
import { SITE_URL } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/services', '/care', '/portfolio', '/about', '/contact', '/insights', '/privacy', '/terms', '/intelligence'].map(
    (path) => ({
      url: `${SITE_URL}${path || '/'}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8
    })
  );

  const posts = insights.map((p) => ({
    url: `${SITE_URL}/insights/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...posts];
}
