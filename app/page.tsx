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
  Sparkles,
  Star,
  MessageSquare
} from 'lucide-react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import InstantEstimate from './components/InstantEstimate';
import Marquee from './components/Marquee';
import CommandPanel from './components/CommandPanel';
import { site } from '../lib/site';

const PROOF = [
  {
    quote: 'Phone was dead after water damage. Scoped same day, mail-in recovery, files back before the week ended.',
    who: 'Client · Greater Philly',
    tag: 'Repair'
  },
  {
    quote: 'Replaced a broken brochure site with a conversion layout that actually takes bookings. Clear price, no drama.',
    who: 'Service business owner',
    tag: 'Build'
  },
  {
    quote: 'Remote lessons that stick to a plan. Not random YouTube tabs — structure and accountability.',
    who: 'Adult beginner',
    tag: 'Lessons'
  }
];

const HIRE_LANES = [
  {
    title: 'Broken device',
    price: '$50–200',
    href: '/contact?service=Device%20%2F%20software%20repair&q=Device%20repair',
    blurb: 'Screen, water, data, unbrick, battery'
  },
  {
    title: 'Need a site or app',
    price: 'From $299',
    href: '/contact?service=Website%20system&q=Need%20a%20website',
    blurb: 'Landing → full system, scoped first'
  },
  {
    title: 'Ongoing cover',
    price: '$250/mo',
    href: '/contact?service=Care%20retainer&q=Care%20retainer',
    blurb: 'Priority fixes + small updates'
  },
  {
    title: 'Guitar coaching',
    price: 'From $40',
    href: '/contact?service=Other&q=Remote%20guitar%20lessons',
    blurb: '1-on-1 remote, structured progress'
  }
];

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Top: moving capability strip (replaces static accepting-work bar) */}
      <div className="pt-[4.25rem]">
        <Marquee />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-10 sm:pt-14">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-80" />
        <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="hero-panel">
            <div className="mono mb-5 inline-flex items-center gap-2 rounded-full border border-[#00ff9f]/30 bg-[#00ff9f]/10 px-3 py-1 text-[11px] tracking-[0.18em] text-[#00ff9f]">
              <Sparkles className="h-3 w-3" />
              PREMIER EXECUTION · WEALTH FROM SHIPPED WORK
            </div>
            <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem]">
              A desk that
              <br />
              turns demand
              <br />
              <span className="text-gradient">into paid scope.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
              Instant estimate → written scope → delivered work. Repairs, custom systems, retainers, and remote
              coaching. One operator. The site is the product standard.
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

      {/* Metrics */}
      <section className="border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            ['24h', 'Scope SLA'],
            ['$50–200', 'Repair band'],
            ['$299+', 'Build entry'],
            ['$250/mo', 'Recurring care']
          ].map(([v, l]) => (
            <div key={l} className="px-6 py-9 text-center transition hover:bg-white/[0.02]">
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{v}</p>
              <p className="mt-2 mono text-[10px] uppercase tracking-[0.2em] text-white/35">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hire now — direct money lanes */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">HIRE NOW</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Pick a lane. Open scope in one step.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/40">
            Pre-filled quote paths. You still get a written scope before any invoice.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {HIRE_LANES.map((lane) => (
            <a
              key={lane.title}
              href={lane.href}
              className="card-lift glass group rounded-2xl p-5"
            >
              <p className="text-xs text-white/40">{lane.blurb}</p>
              <h3 className="mt-2 text-lg font-semibold">{lane.title}</h3>
              <p className="mt-1 text-[#00ff9f]">{lane.price}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/60 transition group-hover:text-[#00ff9f]">
                Start quote <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-white/8 bg-black/25">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mb-10 flex items-center gap-2">
            <Star className="h-4 w-4 text-[#00ff9f]" />
            <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">OUTCOMES · NOT HYPE</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PROOF.map((p) => (
              <blockquote key={p.tag} className="glass rounded-3xl p-6">
                <span className="mono rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] tracking-widest text-white/40">
                  {p.tag}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-white/70">“{p.quote}”</p>
                <footer className="mt-5 text-xs text-white/35">{p.who}</footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] text-white/30">
            Representative patterns. Names private unless a client asks to be listed. Replace with your real
            quotes anytime.
          </p>
        </div>
      </section>

      {/* Operator advantage */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">OPERATOR ADVANTAGE</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Designed to compound cash, not traffic vanity.
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
              d: 'Problem → price band in seconds. Intent captured before the scroll ends.'
            },
            {
              icon: FileCheck,
              t: 'Scope before pay',
              d: 'Written deliverables. Higher close rate. Fewer disputes.'
            },
            {
              icon: Clock,
              t: '24h reply target',
              d: 'Speed is product. Agencies queue. We triage.'
            },
            {
              icon: Globe2,
              t: 'Remote + mail-in',
              d: 'National demand. Local when hardware needs hands.'
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
              One-off jobs fund the brand. Retainers compound monthly. Market tools build authority — never
              brokerage.
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
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Estimate → scope → ship → retain.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Radio,
              t: '01 · Capture',
              d: 'Marquee + estimate + hire lanes. Intent stored into the quote form.'
            },
            {
              icon: Cpu,
              t: '02 · Scope',
              d: 'Written price and deliverables. Cash clears before work expands.'
            },
            {
              icon: CheckCircle2,
              t: '03 · Deliver + care',
              d: 'Ship, document, hand off. Upsell $250/mo care for recurring revenue.'
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

      {/* Final conversion */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="glass-strong glow-ring overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mono text-xs tracking-[0.2em] text-[#a855f7]">NEXT MOVE</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Stop browsing. Open a scope.
              </h2>
              <p className="mt-4 max-w-lg text-white/50">
                Text for urgent hardware. Form for builds and retainers. You get a written scope before any
                charge.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {site.services.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                  >
                    <p className="text-xs text-white/40">{s.title}</p>
                    <p className="font-semibold">{s.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/contact" className="btn-primary justify-center px-8">
                Request written scope <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`sms:${site.phoneTel}`} className="btn-ghost justify-center">
                <MessageSquare className="h-4 w-4" />
                Text {site.phoneDisplay}
              </a>
              <a href="/portfolio" className="text-center text-sm text-white/40 transition hover:text-[#00ff9f]">
                See portfolio patterns →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
