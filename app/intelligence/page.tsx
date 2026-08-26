import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function IntelligencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <p className="mb-4 font-mono text-sm text-[#a855f7]">AI INTELLIGENCE</p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
          Simulation-first market research.
        </h1>
        <p className="mb-10 max-w-2xl text-xl text-gray-400">
          Scanners, watchlists, and research notes. No brokerage. No live trade execution.
          Education and analysis only.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Scanner preview', 'Filtered market snapshots for study. Not signals to buy or sell.'],
            ['Risk framing', 'Position sizing and volatility context before anyone touches capital.'],
            ['$19 / month', 'Paid research access after the waitlist. Cancel anytime.']
          ].map(([title, body]) => (
            <article key={title} className="rounded-3xl border border-[#a855f7]/30 bg-zinc-900/40 p-8">
              <h2 className="text-xl font-semibold text-[#a855f7]">{title}</h2>
              <p className="mt-4 text-gray-400">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm text-gray-500">
          Nothing on this site is investment advice. Markets can wipe capital. If you cannot afford
          to lose the money, do not trade. Hyperion is a research layer, not a broker.
        </p>
        <a
          href="mailto:owner@tradehax.net?subject=Intelligence%20waitlist"
          className="mt-10 inline-flex rounded-2xl border border-[#a855f7] px-8 py-4 font-semibold"
        >
          Join the waitlist
        </a>
      </section>
      <Footer />
    </main>
  );
}
