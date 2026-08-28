const FAQS = [
  {
    q: 'How fast do you reply?',
    a: 'Target is within 24 hours with a written scope or next step. Urgent hardware issues can text the line on the contact page.'
  },
  {
    q: 'Do you take mail-in repairs?',
    a: 'Yes. Follow the mail-in guide, ship with tracking, and you get a clear outcome before any open-ended spend.'
  },
  {
    q: 'What does a written scope include?',
    a: 'Deliverables, price range or fixed fee, timeline, and what is out of scope. Work does not expand without agreement.'
  },
  {
    q: 'Is Care required after a website build?',
    a: 'No. Care is optional at $250/mo for priority fixes and light upkeep. One-off projects can end at handoff.'
  },
  {
    q: 'Are market tools on this site a broker?',
    a: 'No. Simulation and research only — not brokerage, not live order routing, not investment advice.'
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
    <section className="mx-auto max-w-6xl px-5 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">FAQ</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">Straight answers before you book.</h2>
      <div className="mt-10 space-y-3">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group glass rounded-2xl px-5 py-4 open:border-[#00ff9f]/25"
          >
            <summary className="cursor-pointer list-none font-medium text-white marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {f.q}
                <span className="text-[#00ff9f] transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-white/55">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
