export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  body: string[];
};

/** Seed articles for SEO + authority. Add new posts here; pages generate from this list. */
export const insights: Insight[] = [
  {
    slug: 'what-a-299-website-includes',
    title: 'What a $299 website actually includes',
    excerpt: 'Clear scope so you know what you are buying — and what belongs in a larger package.',
    category: 'BUILDS',
    date: '2026-08-01',
    body: [
      'A $299 entry build is for focused jobs: a sharp landing page, service page, or single conversion path — not a twelve-page brand system.',
      'Typical inclusions: mobile-first layout, contact or booking path, deploy on a fast host (e.g. Cloudflare), basic SEO title/description, and a written handoff.',
      'Usually not included at this tier: custom app backends, multi-role dashboards, or ongoing content production. Those get their own scope.',
      'If you need ongoing fixes after launch, Care at $250/mo covers priority maintenance without reopening a full project every time.'
    ]
  },
  {
    slug: 'mail-in-phone-repair-checklist',
    title: 'Mail-in phone repair: checklist before you ship',
    excerpt: 'Reduce delays and data risk with a simple pack-out process.',
    category: 'REPAIRS',
    date: '2026-08-10',
    body: [
      'Back up what you can. Even partial cloud backup beats zero recovery options.',
      'Remove SIM and memory cards if the tray opens. Note passcode only through a secure channel if diagnostics need it.',
      'Describe the failure in one short message: liquid, drop, no power, boot loop — plus your deadline.',
      'Use a padded mailer or small box. Keep tracking. You will get a written outcome before any open-ended spend.'
    ]
  },
  {
    slug: 'scope-before-invoice',
    title: 'Why scope-before-invoice closes more work',
    excerpt: 'Agencies hide hours. Operators who write the deal first earn trust and cash.',
    category: 'OPERATIONS',
    date: '2026-08-15',
    body: [
      'Open-ended tickets create disputes. A one-page scope — deliverables, range, timeline — turns a maybe into a decision.',
      'Clients compare clarity, not just price. Fast triage plus a written band beats a cheaper quote that never defines done.',
      'Retainers work the same way: Care lists what is inside the monthly envelope so neither side guesses.'
    ]
  }
];

export function getInsight(slug: string) {
  return insights.find((p) => p.slug === slug);
}
