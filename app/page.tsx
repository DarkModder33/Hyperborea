import type { Metadata } from 'next';
import {
  ArrowRight,
  Wrench,
  Shield,
  MessageSquare,
  BookOpen,
  Zap,
  Calendar,
  Bot,
  TrendingUp
} from 'lucide-react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import InstantEstimate from './components/InstantEstimate';
import Marquee from './components/Marquee';
import Faq from './components/Faq';
import { site } from '../lib/site';
import { insights } from '../lib/content';
import { pageMeta } from '../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'TradeHax | Websites, automation & Care for service businesses',
  description:
    'We build revenue-generating websites, automations, and business systems. Flagship Growth System $1,500–$5,000. Care from $250/mo. Greater Philadelphia and remote.',
  path: '/'
});

const OUTCOMES = [
  { icon: Calendar, t: 'More booked calls', d: 'Sites and flows built to take inquiries, not just look pretty.' },
  { icon: Zap, t: 'Faster operations', d: 'Automations that cut repeat admin between tools and inboxes.' },
  { icon: Bot, t: 'Less manual follow-up', d: 'Intake, routing, and simple AI-assisted replies where they fit.' },
  { icon: TrendingUp, t: 'A system that compounds', d: 'Launch once, then Care so improvements don’t die after handoff.' }
];

export default function Home() {
  const featured = insights.filter((p) => p.category !== 'LESSONS').slice(0, 3);
  const cases = site.portfolio.filter((p) => p.tag !== 'Repair').slice(0, 3);

  return (
    <main>
      <Nav />
      <div className="pt-[4.25rem]">
        <Marquee />
      </div>

      {/* Hero — outcomes */}
      <section className="px-5 pb-14 pt-10 sm:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mono text-xs tracking-[0.18em] text-[#00ff9f]">
            PREMIER EXECUTION · WEALTH FROM SHIPPED WORK
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Websites, automations, and systems that{' '}
            <span className="text-gradient">get you more booked work.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/55 sm:text-lg">
            TradeHax builds revenue-generating sites and business systems for service businesses — then keeps them
            healthy on Care. Written scope before any invoice. Founder-led.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#00ff9f]/25 bg-[#00ff9f]/10 px-4 py-1.5 text-xs text-[#00ff9f]">
            {site.capacity} · 24h scope target
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/contact" className="btn-primary">
              Request a written scope <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#flagship" className="btn-ghost">
              See flagship offer
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <p className="mb-3 text-center text-sm text-white/40">Or get a quick range first</p>
          <InstantEstimate />
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-y border-white/8 bg-white/[0.02] px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight">What you actually buy</h2>
          <p className="mt-2 text-center text-sm text-white/45">Outcomes — not a menu of random tech chores.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((o) => (
              <div key={o.t} className="glass rounded-2xl p-5">
                <o.icon className="h-5 w-5 text-[#00ff9f]" />
                <h3 className="mt-3 font-semibold">{o.t}</h3>
                <p className="mt-2 text-sm text-white/50">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship */}
      <section id="flagship" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">FLAGSHIP OFFER</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">TradeHax Growth System</h2>
        <p className="mt-3 max-w-2xl text-white/50">
          One packaged outcome for service businesses that need a serious web + intake system — not five disconnected
          micro-services.
        </p>
        <div className="glass-strong glow-ring mt-10 grid gap-8 rounded-3xl p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div>
            <p className="text-3xl font-semibold text-[#00ff9f]">$1,500 – $5,000</p>
            <p className="mt-2 text-sm text-white/45">Scoped to your stack. Written deliverables before work expands.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {[
                'Conversion-focused website or landing system',
                'Booking / quote intake path',
                'Basic automation (routing, follow-up hooks, or AI assist where it fits)',
                'Deploy on a fast host (e.g. Cloudflare)',
                'Optional move onto Care after launch'
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#00ff9f]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <a
              href="/contact?service=Website%20system&q=Growth%20System%20%241500-%245000"
              className="btn-primary justify-center"
            >
              Request Growth System scope <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/care" className="btn-ghost justify-center">
              See Care plans after launch
            </a>
            <p className="text-center text-xs text-white/35">Primary CTA: one written scope. No sales maze.</p>
          </div>
        </div>
      </section>

      {/* Care ladder */}
      <section className="border-y border-white/8 bg-black/30 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">RECURRING</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Care is the long game</h2>
          <p className="mt-3 max-w-xl text-sm text-white/50">
            One-off builds pay the month. Retainers compound. Pick a tier after launch — or onboard an existing site.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {site.careTiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-3xl p-6 ${
                  tier.id === 'growth' ? 'glass-strong glow-ring' : 'glass'
                }`}
              >
                <p className="mono text-[10px] tracking-wider text-white/40">{tier.name.toUpperCase()}</p>
                <p className="mt-2 text-2xl font-semibold text-[#00ff9f]">{tier.price}</p>
                <p className="mt-1 text-sm text-white/50">{tier.blurb}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/60">
                  {tier.includes.map((i) => (
                    <li key={i}>· {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a href="/care" className="btn-primary mt-8 inline-flex">
            Compare Care plans <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Case studies */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Proof — problem → result</h2>
        <p className="mt-2 text-sm text-white/45">Simple metrics. Same standard as this site.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="glass rounded-2xl p-6">
              <p className="mono text-[10px] tracking-wider text-[#00ff9f]">{c.tag}</p>
              <h3 className="mt-2 font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-white/45">
                <span className="text-white/30">Before: </span>
                {c.problem}
              </p>
              <p className="mt-2 text-sm text-white/70">
                <span className="text-white/30">After: </span>
                {c.result}
              </p>
              {'metric' in c && c.metric && (
                <p className="mt-4 rounded-xl border border-[#00ff9f]/20 bg-[#00ff9f]/5 px-3 py-2 text-sm text-[#00ff9f]">
                  {c.metric}
                </p>
              )}
              <p className="mt-3 text-xs text-white/30">{c.range}</p>
            </article>
          ))}
        </div>
        <a href="/portfolio" className="mt-6 inline-flex text-sm text-white/45 hover:text-[#00ff9f]">
          Full portfolio →
        </a>
      </section>

      {/* Secondary: repair */}
      <section className="border-y border-white/8 bg-white/[0.02] px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <Wrench className="h-6 w-6 shrink-0 text-white/40" />
            <div>
              <h2 className="font-semibold">Also: device repair & mail-in</h2>
              <p className="mt-1 text-sm text-white/45">
                Local cash-flow work — screens, water, data, unbrick. Secondary to systems work, still scoped clearly.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="/mail-in" className="btn-ghost">
              Mail-in guide
            </a>
            <a
              href="/contact?service=Device%20%2F%20software%20repair&q=Device%20repair"
              className="btn-ghost"
            >
              Repair quote
            </a>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Guides</h2>
            <p className="mt-2 text-sm text-white/45">Articles that point back to offers.</p>
          </div>
          <a href="/insights" className="btn-ghost">
            <BookOpen className="h-4 w-4" /> All guides
          </a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featured.map((post) => (
            <a
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="glass rounded-2xl p-5 transition hover:border-[#00ff9f]/25"
            >
              <p className="mono text-[10px] tracking-wider text-[#00ff9f]">{post.category}</p>
              <h3 className="mt-2 font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-white/45">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </section>

      <Faq />

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="glass-strong rounded-3xl p-8 sm:p-10">
          <div className="flex items-center gap-2 text-xs text-[#00ff9f]">
            <Shield className="h-4 w-4" />
            {site.capacity}
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Request a written scope</h2>
          <p className="mt-3 max-w-lg text-white/50">
            One primary next step. Deliverables and price before you pay. Urgent hardware? Text instead.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="btn-primary">
              Request a written scope <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`sms:${site.phoneTel}`} className="btn-ghost">
              <MessageSquare className="h-4 w-4" /> Text {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
