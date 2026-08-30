const FAQS = [
  {
    q: 'How fast do you reply?',
    a: 'Usually within 24 hours with a written scope or next step. For urgent hardware issues, text (609) 412-8878.'
  },
  {
    q: 'Do you take mail-in repairs?',
    a: 'Yes. Use the Mail-in guide, ship with tracking after we confirm intake, and you get a clear outcome before open-ended charges.'
  },
  {
    q: 'What is a written scope?',
    a: 'A short agreement of deliverables, price or range, and timeline — before you pay and before work expands.'
  },
  {
    q: 'Is the Care plan required?',
    a: 'No. Care is optional at $250/month for priority fixes on live sites. One-off projects can end at handoff.'
  },
  {
    q: 'Is market content on this site investment advice?',
    a: 'No. Simulation and research only — not a broker and not live order placement.'
  }
];

export default function Faq() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Common questions</h2>
      <div className="mt-8 space-y-3">
        {FAQS.map((f) => (
          <details key={f.q} className="group glass rounded-2xl px-5 py-4">
            <summary className="cursor-pointer list-none font-medium text-white">
              <span className="flex items-center justify-between gap-4">
                {f.q}
                <span className="text-[#00ff9f] transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-white/55">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
