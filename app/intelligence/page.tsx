import { ArrowRight, ShieldAlert } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ScannerDemo from '../components/ScannerDemo';
import { site } from '../../lib/site';

export default function IntelligencePage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32">
        <p className="mono text-xs tracking-[0.2em] text-[#a855f7]">AI INTELLIGENCE</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Simulation-first market research.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/50">
          Scanners, watchlists, and risk framing for study. No brokerage. No live trade execution. Education and
          research only.
        </p>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <ScannerDemo />
          <div className="space-y-5">
            {[
              ['Scanner layer', 'Filtered snapshots for research workflows — not buy/sell commands.'],
              ['Risk framing', 'Position sizing context and volatility gates before capital is discussed.'],
              ['$19 / month', 'Paid research access after waitlist. Cancel anytime. Simulation only.']
            ].map(([t, d]) => (
              <article key={t} className="glass rounded-3xl p-6">
                <h2 className="text-lg font-semibold text-[#a855f7]">{t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{d}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="glass mt-10 flex gap-4 rounded-3xl p-7">
          <ShieldAlert className="h-6 w-6 shrink-0 text-[#a855f7]" />
          <p className="text-sm leading-relaxed text-white/45">
            Nothing on this site is investment advice. Markets can destroy capital. If you cannot afford to lose the
            money, do not trade. Hyperion is a research interface — not a broker, not a signal service that places
            orders.
          </p>
        </div>

        <a
          href={`mailto:${site.email}?subject=Intelligence%20waitlist`}
          className="btn-ghost mt-10 border-[#a855f7]/40"
        >
          Join the waitlist <ArrowRight className="h-4 w-4" />
        </a>
      </section>
      <Footer />
    </main>
  );
}
