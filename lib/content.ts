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
  },
  {
    slug: 'github-student-developer-pack-what-to-claim',
    title: 'GitHub Student Developer Pack: what to claim first',
    excerpt: 'Free tools only help if you claim them in the right order and ship one small project.',
    category: 'STUDENTS',
    date: '2026-08-28',
    body: [
      'The official GitHub Student Developer Pack bundles education access to developer tools, cloud credits, and related perks after you verify student status at education.github.com/pack.',
      'Claim order that works: verify once, enable GitHub Pro features you need, then cloud credits, then domain or IDE perks if offered — don’t try to activate twenty services in one night.',
      'Same day goal: one new repo, one tiny live page or script, one README with a contact link. That beats a folder of unused coupons.',
      'If you want a portfolio or class project turned into a clean public site with a quote path, use the estimate on tradehax.net or request a written scope — free pack for tools, paid help only when you want it done for you.'
    ]
  },
  {
    slug: 'free-student-portfolio-stack',
    title: 'Free student portfolio stack (no credit card)',
    excerpt: 'A live URL beats a PDF. Here’s a free path students can finish in a weekend.',
    category: 'STUDENTS',
    date: '2026-08-29',
    body: [
      'Minimum stack: GitHub repository, a simple HTML or Next static page, and a free host such as Cloudflare Pages.',
      'One page is enough: who you are, two projects with links, and how to reach you. Polish later.',
      'Student domain or design tool deals are optional. Get the URL live first.',
      'When you need booking, estimate widgets, or ongoing fixes, that’s past the free tier — TradeHax scopes those jobs before any invoice.'
    ]
  },
  {
    slug: 'class-project-to-portfolio',
    title: 'Turn a class project into a portfolio piece',
    excerpt: 'Employers click demos. A little packaging turns homework into proof.',
    category: 'STUDENTS',
    date: '2026-08-30',
    body: [
      'Add a short README: problem, what you built, how to run it, screenshot or live link.',
      'Remove secrets and half-finished experiments. One clear story per repo.',
      'Deploy a demo when you can. A link outperforms a zip file.',
      'Need a tighter landing page or help finishing the public version? Request a scope on tradehax.net/contact.'
    ]
  }
];

export function getInsight(slug: string) {
  return insights.find((p) => p.slug === slug);
}
