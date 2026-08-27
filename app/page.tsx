import { ArrowRight, Shield, LineChart, Cpu, Radio, CheckCircle2, Wrench, MonitorSmartphone } from 'lucide-react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import InstantEstimate from './components/InstantEstimate';
import { site } from '../lib/site';

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Hero — Instant Estimate first */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-70" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mono mb-6 inline-flex items-center gap-2 rounded-full border border-[#00ff9f]/25 bg-[#00ff9f]/5 px-3 py-1 text-[11px] tracking-[0.18em] text-[#00ff9f]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff9f]" />
              FOUNDER-LED · REMOTE + MAIL-IN
            </div>
            <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Tech repairs, custom builds
              <br />
              <span className="text-gradient">& music lessons — one expert.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              Get an instant estimate range in seconds. Free quotes, clear scope, no theater.
              Remote diagnostics, mail-in repairs, Greater Philadelphia + worldwide.
            </p>
          </div>

          <div className="mt-10">
            <InstantEstimate />
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/40">
            <span>{site.email}</span>
            <span>{site.phoneDisplay}</span>
            <span>{site.region}</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/8 bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            ['24h', 'Response target'],
            ['$50–200', 'Device repairs'],
            ['$299+', 'Custom builds'],
            ['Remote', 'Mail-in ready']
          ].map(([v, l]) => (
            <div key={l} className="px-6 py-8 text-center">
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{v}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Three service lanes */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">ALL SERVICES</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">One operator. Full stack.</h2>
          <p className="mt-4 text-white/50">
            Tech repairs, custom development, music lessons, and simulation-first market tools — scoped before any invoice.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <a href="/services" className="card-lift glass group rounded-3xl p-8">
            <MonitorSmartphone className="h-8 w-8 text-[#00ff9f]" />
            <h3 className="mt-6 text-xl font-semibold">Tech Services</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Device repairs $50–200. Custom development from $299. Remote or mail-in.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#00ff9f]">
              View catalog <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </a>
          <a href="/contact" className="card-lift glass group rounded-3xl p-8">
            <Wrench className="h-8 w-8 text-[#a855f7]" />
            <h3 className="mt-6 text-xl font-semibold">Repairs & recovery</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Screens, water damage, data recovery, unbricking, battery & charging fixes.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#a855f7]">
              Get a quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </a>
          <a href="/intelligence" className="card-lift glass group rounded-3xl p-8">
            <LineChart className="h-8 w-8 text-[#00ff9f]" />
            <h3 className="mt-6 text-xl font-semibold">Market insights</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Simulation scanners and research notes. Education only — never a broker.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#00ff9f]">
              Open hub <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </section>

      {/* Two engines */}
      <section className="border-y border-white/8 bg-black/20">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mb-12 max-w-2xl">
            <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">ARCHITECTURE</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Two engines. One operator.</h2>
            <p className="mt-4 text-white/50">
              Cash-flow services fund the product. The product compounds authority. Nothing is bolted on for show.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <a href="/services" className="card-lift glass group rounded-3xl p-8">
              <Shield className="h-8 w-8 text-[#00ff9f]" />
              <h3 className="mt-6 text-2xl font-semibold">Tech execution</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Websites, device repair, custom software, retainers. Scoped before any invoice. Built to stay online.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#00ff9f]">
                View services <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
            <a href="/intelligence" className="card-lift glass group rounded-3xl p-8">
              <LineChart className="h-8 w-8 text-[#a855f7]" />
              <h3 className="mt-6 text-2xl font-semibold">AI intelligence</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Simulation scanners, risk framing, research notes. Education layer only — never a broker, never live execution.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#a855f7]">
                Open hub <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="mono text-xs tracking-[0.2em] text-white/40">PROCESS</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">From message to shipped.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { icon: Radio, t: '01 · Intake', d: 'Send device, URL, deadline, remote vs on-site. Same-day triage when possible.' },
            { icon: Cpu, t: '02 · Scope', d: 'Written scope and price before work. No open-ended “we’ll figure it out.”' },
            { icon: CheckCircle2, t: '03 · Deliver', d: 'Ship, document, hand off. Retainer available if you want ongoing cover.' }
          ].map((step) => (
            <div key={step.t} className="glass rounded-3xl p-6">
              <step.icon className="h-5 w-5 text-[#00ff9f]" />
              <h3 className="mt-5 text-lg font-semibold">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing strip */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="glass overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mono text-xs tracking-[0.2em] text-[#a855f7]">STARTING POINTS</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Clear numbers. No decoys.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {site.services.map((s) => (
                  <div key={s.title} className="rounded-2xl border border-white/8 bg-black/25 p-5">
                    <p className="text-sm text-white/45">{s.title}</p>
                    <p className="mt-1 text-xl font-semibold">{s.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <a href="/contact" className="btn-primary h-fit">
              Request a scope <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
