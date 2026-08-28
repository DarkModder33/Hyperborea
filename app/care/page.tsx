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
          Care retainer — $250 / mo
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/50">
          One-off jobs pay the month. Care compounds it. Priority access, light upkeep, and a single operator who
          already knows your stack.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-strong glow-ring rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-[#00ff9f]" />
              <p className="mono text-xs tracking-[0.18em] text-[#00ff9f]">INCLUDED</p>
            </div>
            <ul className="mt-6 space-y-3">
              {site.careIncludes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/70">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00ff9f]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl p-8 sm:p-10">
            <p className="mono text-xs tracking-[0.18em] text-white/40">NOT INCLUDED</p>
            <ul className="mt-6 space-y-3">
              {site.careExcludes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/50">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-white/40">
              Bigger builds stay on the package ladder — scoped, priced, then optionally moved under Care after
              launch.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { t: 'Who it fits', d: 'Sites and small systems already launched that need a reliable pair of hands.' },
            { t: 'How it starts', d: 'Finish a build or repair with us — or onboard an existing property after a short audit.' },
            { t: 'How you pay', d: 'Monthly. Cancel anytime. Hours beyond the envelope become a mini-scope.' }
          ].map((b) => (
            <div key={b.t} className="glass rounded-2xl p-6">
              <h3 className="font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-white/50">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <a
            href="/contact?service=Care%20retainer&q=Interested%20in%20Care%20retainer%20%24250%2Fmo"
            className="btn-primary"
          >
            Start Care conversation <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/services" className="btn-ghost">
            View all packages
          </a>
          <a href={`sms:${site.phoneTel}`} className="btn-ghost">
            Text {site.phoneDisplay}
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
