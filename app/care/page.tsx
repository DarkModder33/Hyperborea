import { ArrowRight, CheckCircle2, XCircle, Shield } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../../lib/site';

export default function CarePage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32">
        <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">RECURRING REVENUE</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Care plans — keep the system earning
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/50">
          Builds pay once. Care compounds. Three tiers after launch — or onboard a site we didn’t build after a short
          audit.
        </p>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {site.careTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ${
                tier.id === 'growth' ? 'glass-strong glow-ring' : 'glass'
              }`}
            >
              <div className="flex items-center gap-2">
                <Shield className={`h-5 w-5 ${tier.id === 'growth' ? 'text-[#00ff9f]' : 'text-white/40'}`} />
                <p className="mono text-xs tracking-[0.18em] text-white/40">{tier.name.toUpperCase()}</p>
              </div>
              <p className="mt-4 text-3xl font-semibold text-[#00ff9f]">{tier.price}</p>
              <p className="mt-2 text-sm text-white/50">{tier.blurb}</p>
              <ul className="mt-6 space-y-3">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00ff9f]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`/contact?service=Care%20retainer&q=${encodeURIComponent(`${tier.name} plan ${tier.price}`)}`}
                className="btn-primary mt-8 w-full justify-center"
              >
                Start {tier.name} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="glass mt-12 rounded-3xl p-8">
          <p className="mono text-xs tracking-[0.18em] text-white/40">NOT INCLUDED (ANY TIER)</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {site.careExcludes.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-white/50">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-sm text-white/40">
          Device repair stays separate. Guitar coaching is personal brand — book via the contact form if needed.
        </p>
      </section>
      <Footer />
    </main>
  );
}
