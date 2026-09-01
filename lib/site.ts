export const site = {
  name: 'Hyperion',
  brand: 'TradeHax',
  tagline: 'Premier execution. Wealth from shipped work.',
  email: 'owner@tradehax.net',
  phoneDisplay: '(609) 412-8878',
  phoneTel: '+16094128878',
  region: 'Greater Philadelphia · Remote worldwide',
  capacity: 'Taking 3 new build projects this month',
  socials: [
    { label: 'YouTube', href: 'https://www.youtube.com/@tradehaxnet' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@tradehax.net' },
    { label: 'Linktree', href: 'https://linktr.ee/tradehax.net' },
    { label: 'GitHub', href: 'https://github.com/DarkModder33' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mcflaherty' }
  ],
  /** Primary revenue engine */
  services: [
    {
      title: 'Growth System (flagship)',
      price: '$1,500–$5,000',
      points: ['Conversion site', 'Booking + intake', 'Automation hooks', 'Hand-off under Care']
    },
    {
      title: 'Website systems',
      price: 'From $499',
      points: ['Mobile-first conversion layout', 'Contact + booking path', 'Cloudflare deploy']
    },
    {
      title: 'Automation & systems',
      price: 'From $299',
      points: ['Workflow scripts', 'Lead routing', 'Admin time reduction']
    },
    {
      title: 'Care retainers',
      price: 'From $250 / mo',
      points: ['Priority fixes', 'Monitoring', 'Growth tiers available']
    }
  ],
  careTiers: [
    {
      id: 'care',
      name: 'Care',
      price: '$250/mo',
      blurb: 'Keep it live and fixed.',
      includes: [
        'Priority response on break/fix issues',
        'Monthly uptime / health check',
        'Small content updates (fair-use minutes)',
        'Security and dependency nudges'
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      price: '$500/mo',
      blurb: 'Improve it every month.',
      includes: [
        'Everything in Care',
        'Monthly improvement sprint',
        'Light SEO / conversion tweaks',
        'Automation adjustments'
      ]
    },
    {
      id: 'partner',
      name: 'Partner',
      price: '$1,000+/mo',
      blurb: 'Your technical department.',
      includes: [
        'Everything in Growth',
        'Expanded hour envelope',
        'Roadmap check-ins',
        'Priority in the build queue'
      ]
    }
  ],
  portfolio: [
    {
      tag: 'Website',
      title: 'Service-business site rebuild',
      range: '$499–$1,200',
      problem: 'Old host down, no mobile layout, contact form broken.',
      result: 'Live booking path, mobile-first pages, owner can update without tickets.',
      metric: 'Inquiry path restored same week',
      stack: 'Next.js · Cloudflare · Form intake'
    },
    {
      tag: 'Automation',
      title: 'Internal workflow script',
      range: '$299–$800',
      problem: 'Manual copy-paste between sheets and email ate hours weekly.',
      result: 'One command replaces a multi-step manual routine.',
      metric: '~50% less admin on that workflow',
      stack: 'Python / Node · Sheets · Docs'
    },
    {
      tag: 'Website',
      title: 'Conversion landing + estimate flow',
      range: '$299–$699',
      problem: 'Pretty site, zero path from interest to scoped job.',
      result: 'Instant estimate, quote handoff, mobile CTA — same pattern as this site.',
      metric: 'Clear path from visit → scope request',
      stack: 'Next.js · Analytics · Forms'
    },
    {
      tag: 'Repair',
      title: 'OS rescue + data recovery',
      range: '$89–$199',
      problem: 'Laptop would not boot; files needed same week.',
      result: 'Boot restored, critical files recovered, backup routine documented.',
      metric: 'Same-week recovery',
      stack: 'Imaging · Backup'
    }
  ],
  careIncludes: [
    'Priority response on break/fix issues for covered properties',
    'Monthly uptime / health check on agreed sites',
    'Small content and copy updates (within fair-use minutes)',
    'Security and dependency nudges when something critical surfaces',
    'One short strategy check-in per month if you want it'
  ],
  careExcludes: [
    'Full redesigns or new feature builds (scoped separately)',
    'Hardware repair parts and device lab time',
    'Third-party fees (domains, ads, SaaS licenses)',
    'Unlimited hours — we stay inside the monthly envelope or re-scope'
  ]
};
