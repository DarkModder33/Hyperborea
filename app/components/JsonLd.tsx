import { SITE_URL } from '../../lib/seo';
import { site } from '../../lib/site';

/** LocalBusiness + WebSite JSON-LD for search rich results */
export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'TradeHax',
        description:
          'Founder-led tech repairs, custom development, Care retainers, and remote guitar lessons.',
        publisher: { '@id': `${SITE_URL}/#business` }
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#business`,
        name: 'TradeHax',
        url: SITE_URL,
        email: site.email,
        telephone: site.phoneTel,
        description:
          'Device repairs, custom websites and apps, retainers, and remote music coaching. Remote and mail-in. Greater Philadelphia.',
        areaServed: ['Greater Philadelphia', 'United States', 'Worldwide (remote)'],
        priceRange: '$50–$1500+',
        sameAs: site.socials.map((s) => s.href)
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
