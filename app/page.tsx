import {
  ArrowRight,
  LineChart,
  Cpu,
  Radio,
  CheckCircle2,
  Wrench,
  MonitorSmartphone,
  Clock,
  FileCheck,
  Globe2,
  Zap,
  Sparkles
} from 'lucide-react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import InstantEstimate from './components/InstantEstimate';
import Marquee from './components/Marquee';
import CommandPanel from './components/CommandPanel';
import { site } from '../lib/site';

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Status strip */}
      <div className="status-bar border-b border-white/5 pt-[4.5rem]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2.5 text-[11px]">
          <div className="flex items-center gap-2 text-[#00ff9f]">
            <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-[#00ff9f]" />
            <span className="mono tracking-[0.16em]">ACCEPTING WORK · THIS WEEK</span>
          </div>
          <div className="mono tracking-[0.12em] text-white/35">
            SCOPE TARGET ≤ 24H · REMOTE + MAIL-IN · FOUNDER-LED
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-10 sm:pt-14">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-80" />
        <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="hero-panel">
            <div className="mono mb-5 inline-flex items-center gap-2 rounded-full border border-[#00ff9f]/30 bg-[#00ff9f]/10 px-3 py-1 text-[11px] tracking-[0.18em] text-[#00ff9f]">
              <Sparkles className="h-3 w-3" />
              PREMIER EXECUTION · NOT A TEMPLATE SHOP
            </div>
            <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem]">
              Performance-grade
              <br />
              tech. Built to
              <br />
              <span className="text-gradient">close and ship.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
              Instant estimate → written scope → delivered work. Device recovery, custom systems, and
              remote coaching from one operator. The site is the standard you buy.
            </p>

            <div className="mt-9">
              <InstantEstimate />
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/40">
              <a href={`mailto:${site.email}`} className="transition hover:text-[#00ff9f]">
                {site.email}
              </a>
              <a href={`tel:${site.phoneTel}`} className="transition hover:text-[#00ff9f]">
                {site.phoneDisplay}
              </a>
              <span>{site.region}</span>
            </div>
          </div>

          <div className="hero-panel lg:pt-4" style={{ animationDelay: '0.12s' }}>
            <CommandPanel />
          </div>
        </div>
      </section>

      <Marquee />

      {/* Metrics */}
      <section className="border-b border-white/8 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            ['24h', 'Scope SLA'],
            ['$50–200', 'Repair band'],
            ['$299+', 'Build entry'],
            ['$250/mo', 'Care retainer']
          ].map(([v, l]) => (
            <div key={l} className="px-6 py-9 text-center transition hover:bg-white/[0.02]">
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{v}</p>
              <p className="mt-2 mono text-[10px] uppercase tracking-[0.2em] text-white/35">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why operators book */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">OPERATOR ADVANTAGE</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built like a desk that prints work.
            </h2>
          </div>
          <a href="/contact" className="btn-primary shrink-0">
            Open a ticket <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Zap,
              t: 'Instant range',
              d: 'Type the problem. See the band. Friction dies before the sales call.'
            },
            {
              icon: FileCheck,
              t: 'Scope before pay',
              d: 'Written deliverables and price. No open-ended “we’ll see.”'
            },
            {
              icon: Clock,
              t: '24h reply target',
              d: 'Speed is product. Agencies queue. We triage.'
            },
            {
              icon: Globe2,
              t: 'Remote + mail-in',
              d: 'Global pipeline. Philly when hands-on is required.'
            }
          ].map((item) => (
            <div key={item.t} className="card-lift glass rounded-2xl p-6">
              <item.icon className="h-5 w-5 text-[#00ff9f]" />
              <h3 className="mt-4 font-semibold">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue lines */}
      <section className="border-y border-white/8 bg-black/30">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">PRODUCT SURFACE</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Three lines. One performance bar.
            </h2>
            <p className="mt-4 text-white/50">
              Cash services fund the product. The product compounds authority. Everything on this page is the
              quality you purchase.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <a href="/services" className="card-lift glass-strong group rounded-3xl p-8">
              <MonitorSmartphone className="h-8 w-8 text-[#00ff9f]" />
              <h3 className="mt-6 text-xl font-semibold">Tech Services</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Repairs $50–200. Sites & apps from $299. Retainers $250/mo.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#00ff9f]">
                Open catalog <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
            <a href="/contact" className="card-lift glass-strong group rounded-3xl p-8">
              <Wrench className="h-8 w-8 text-[#a855f7]" />
              <h3 className="mt-6 text-xl font-semibold">Repairs & recovery</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Screens, water, data, unbrick, battery. Remote triage first.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#a855f7]">
                Start quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
            <a href="/intelligence" className="card-lift glass-strong group rounded-3xl p-8">
              <LineChart className="h-8 w-8 text-[#00ff9f]" />
              <h3 className="mt-6 text-xl font-semibold">Market insights</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Simulation research only. Authority asset — never brokerage.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#00ff9f]">
                Open hub <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="mono text-xs tracking-[0.2em] text-white/40">PIPELINE</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Estimate → scope → ship.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Radio,
              t: '01 · Capture',
              d: 'Instant estimate or text. Intent carries into the quote form automatically.'
            },
            {
              icon: Cpu,
              t: '02 · Scope',
              d: 'Written price and deliverables before work. No accidental open retainers.'
            },
            {
              icon: CheckCircle2,
              t: '03 · Deliver',
              d: 'Ship, document, hand off. Optional $250/mo care for ongoing cover.'
            }
          ].map((step) => (
            <div key={step.t} className="glass rounded-3xl p-6">
              <step.icon className="h-5 w-5 text-[#00ff9f]" />
              <h3 className="mt-5 text-lg font-semibold">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Package ladder CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="glass-strong glow-ring overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mono text-xs tracking-[0.2em] text-[#a855f7]">PACKAGE LADDER</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Clear numbers. Built to upsell.
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {site.services.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-[#00ff9f]/30"
                  >
                    <p className="text-sm text-white/45">{s.title}</p>
                    <p className="mt-1 text-xl font-semibold">{s.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/contact" className="btn-primary justify-center">
                Request a scope <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`sms:${site.phoneTel}`} className="btn-ghost justify-center">
                Text {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
