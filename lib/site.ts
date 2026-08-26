export const site = {
  name: 'Hyperion',
  brand: 'TradeHax AI',
  tagline: 'Execution layer for operators who ship.',
  email: 'owner@tradehax.net',
  phoneDisplay: '(609) 412-8878',
  phoneTel: '+16094128878',
  region: 'Greater Philadelphia · Remote worldwide',
  socials: [
    { label: 'YouTube', href: 'https://www.youtube.com/@tradehaxnet' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@tradehax.net' },
    { label: 'Linktree', href: 'https://linktr.ee/tradehax.net' },
    { label: 'GitHub', href: 'https://github.com/DarkModder33' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mcflaherty' }
  ],
  services: [
    {
      title: 'Website systems',
      price: 'From $499',
      points: ['Next.js / Cloudflare deploy', 'Mobile-first conversion layout', 'Contact + booking flow']
    },
    {
      title: 'Device & software repair',
      price: 'From $89',
      points: ['Phones, PCs, OS recovery', 'Remote triage when possible', 'Local Greater Philadelphia']
    },
    {
      title: 'Custom automation',
      price: 'From $299',
      points: ['Internal tools & scripts', 'Workflow cleanup', 'Scoped before invoice']
    },
    {
      title: 'Care retainer',
      price: '$250 / mo',
      points: ['Priority fixes', 'Uptime checks', 'Small updates included']
    }
  ],
  portfolio: [
    {
      tag: 'Website',
      title: 'Service-business site rebuild',
      range: '$499–$1,200',
      problem: 'Old host down, no mobile layout, contact form broken.',
      result: 'Clean static/Next deploy on Cloudflare, booking path live, owner can update content without a ticket.',
      stack: 'Next.js · Cloudflare · Form intake'
    },
    {
      tag: 'Repair',
      title: 'OS rescue + data recovery',
      range: '$89–$199',
      problem: 'Laptop would not boot; client needed files for school and work the same week.',
      result: 'Boot repaired, critical files recovered, backup routine set so it does not repeat.',
      stack: 'Windows / macOS · Imaging · Backup'
    },
    {
      tag: 'Automation',
      title: 'Internal workflow script',
      range: '$299–$800',
      problem: 'Manual copy-paste between sheets and email was eating hours every week.',
      result: 'Scoped script + short handoff doc. Operator runs one command instead of twenty clicks.',
      stack: 'Python / Node · Sheets · Docs'
    }
  ]
};
