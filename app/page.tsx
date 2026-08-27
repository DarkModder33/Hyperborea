import {
  ArrowRight,
  Shield,
  LineChart,
  Cpu,
  Radio,
  CheckCircle2,
  Wrench,
  MonitorSmartphone,
  Clock,
  FileCheck,
  Globe2,
  Zap
} from 'lucide-react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import InstantEstimate from './components/InstantEstimate';
import { site } from '../lib/site';

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Hero — conversion first */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-70" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mono mb-6 inline-flex items-center gap-2 rounded-full border border-[#00ff9f]/25 bg-[#00ff9f]/5 px-3 py-1 text-[11px] tracking-[0.18em] text-[#00ff9f]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff9f]" />
              LIVE · FOUNDER-LED · 24H SCOPE TARGET
            </div>
            <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              The site is the demo.
              <br />
              <span className="text-gradient">You buy the same standard.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              Instant estimate → written scope → shipped work. Device repairs, custom builds, and remote
              lessons from one operator. No agency layers. No theater.
            </p>
          </div>

          <div className="mt-10">
            <InstantEstimate />
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/40">
            <a href={`mailto:${site.email}`} className="transition hover:text-[#00ff9f]">
              {site.email}
            </a>
            <a href={`tel:${site.phoneTel}`} className="transition hover:text-[#00ff9f]">
              {site.phoneDisplay}
            </a>
            <span>{site.region}</span>
          </div>
        </div>
      </section>

      {/* Trust metrics — money signals */}
      <section className="border-y border-white/8 bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            ['24h', 'Scope target'],
            ['$50–200', 'Repair range'],
            ['$299+', 'Build entry'],
            ['$250/mo', 'Care retainer']
          ].map(([v, l]) => (
            <div key={l} className="px-6 py-8 text-center">
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{v}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why this captures money */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">CONVERSION MODEL</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Designed to turn intent into invoices.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Zap,
              t: 'Instant range',
              d: 'Visitor types a problem → sees price band in seconds. Friction drops; trust rises.'
            },
            {
              icon: FileCheck,
              t: 'Scope before pay',
              d: 'Every job gets a written scope. No open tickets. Higher close rate, fewer disputes.'
            },
            {
              icon: Clock,
              t: '24h reply target',
              d: 'Speed is a feature. Fast triage wins jobs that agencies leave in a queue.'
            },
            {
              icon: Globe2,
              t: 'Remote + mail-in',
              d: 'Philly local when needed. Global when remote works. One pipeline, two delivery modes.'
            }
          ].map((item) => (
            <div key={item.t} className="glass rounded-2xl p-6">
              <item.icon className="h-5 w-5 text-[#00ff9f]" />
              <h3 className="mt-4 font-semibold">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service lanes */}
      <section className="border-y border-white/8 bg-black/20">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">PRODUCT SURFACE</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Three revenue lines. One standard.</h2>
            <p className="mt-4 text-white/50">
              Cash services fund product. Product compounds authority. Everything on this site is the same
              quality bar you are buying.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <a href="/services" className="card-lift glass group rounded-3xl p-8">
              <MonitorSmartphone className="h-8 w-8 text-[#00ff9f]" />
              <h3 className="mt-6 text-xl font-semibold">Tech Services</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Repairs $50–200. Sites & apps from $299. Retainers at $250/mo.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#00ff9f]">
                Open catalog <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
            <a href="/contact" className="card-lift glass group rounded-3xl p-8">
              <Wrench className="h-8 w-8 text-[#a855f7]" />
              <h3 className="mt-6 text-xl font-semibold">Repairs & recovery</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Screens, water, data, unbrick, battery. Remote triage first when possible.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#a855f7]">
                Start quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
            <a href="/intelligence" className="card-lift glass group rounded-3xl p-8">
              <LineChart className="h-8 w-8 text-[#00ff9f]" />
              <h3 className="mt-6 text-xl font-semibold">Market insights</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Simulation research only. Authority asset — never brokerage.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#00ff9f]">
                Open hub <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="mono text-xs tracking-[0.2em] text-white/40">PIPELINE</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Estimate → scope → ship.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Radio,
              t: '01 · Capture',
              d: 'Instant estimate or text. Intent stored so the quote form already knows the job.'
            },
            {
              icon: Cpu,
              t: '02 · Scope',
              d: 'Written price and deliverables before work. No open-ended retainers by accident.'
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

      {/* Pricing ladder */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="glass overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mono text-xs tracking-[0.2em] text-[#a855f7]">PACKAGE LADDER</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Clear numbers. Upsell path built in.</h2>
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
