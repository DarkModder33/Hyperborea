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
      'Use a padded mailer or small box. Keep tracking. You will get a written outcome before any open-ended spend.',
      'Full step-by-step is on the Mail-in page at tradehax.net/mail-in.'
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
  },
  {
    slug: 'when-to-choose-care-retainer',
    title: 'When a $250/mo Care retainer is worth it',
    excerpt: 'One-off builds end. Care is for properties that need a reliable pair of hands after launch.',
    category: 'CARE',
    date: '2026-08-20',
    body: [
      'Choose Care if the site or system is live, revenue-facing, and you do not want to open a new project for every small break.',
      'Included: priority response, light content updates, monthly health checks within a fair monthly envelope.',
      'Not included: full redesigns, new feature builds, or unlimited hours — those stay on a separate scope.',
      'Start from a finished TradeHax build or an onboarding audit if the property was built elsewhere.'
    ]
  },
  {
    slug: 'remote-guitar-lessons-what-to-expect',
    title: 'Remote guitar lessons: what to expect in the first month',
    excerpt: 'Structure beats random tabs. How 1-on-1 remote sessions actually run.',
    category: 'LESSONS',
    date: '2026-08-22',
    body: [
      'Sessions run on Meet, Zoom, or Teams. You need a playable instrument, a quiet corner, and a stable connection.',
      'Month one focuses on a clear goal (song, technique, or fundamentals) and a weekly practice target you can actually hit.',
      'You leave each session with notes — not a vague “keep practicing.”',
      'Book from the contact form with “guitar lessons” in the message for scheduling.'
    ]
  }
];

export function getInsight(slug: string) {
  return insights.find((p) => p.slug === slug);
}
