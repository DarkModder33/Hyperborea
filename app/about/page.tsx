import { ArrowRight, CheckCircle2, MapPin, User } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../../lib/site';

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32">
        <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">ABOUT</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          One operator. Clear scope. Real delivery.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/55">
          TradeHax is a founder-led execution shop: device repairs, custom software, and remote music
          coaching — plus simulation-first market research as an education layer. No agency layers. No
          theater.
        </p>

        {/* Mission */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <p className="mono text-xs tracking-[0.18em] text-[#00ff9f]">MISSION</p>
            <h2 className="mt-3 text-2xl font-semibold">Ship working systems, not decks.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Clients get a written scope before any invoice, a single point of contact, and work that stays
              online. The website itself is the portfolio — the same standard you buy is what you see here.
            </p>
          </div>
          <div className="glass rounded-3xl p-8">
            <p className="mono text-xs tracking-[0.18em] text-[#a855f7]">WHO WE SERVE</p>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {[
                'Small businesses that need a site or repair without enterprise overhead',
                'Individuals with broken phones, laptops, or data recovery needs',
                'Operators who want automation or internal tools scoped cleanly',
                'Students and players seeking structured remote guitar coaching',
                'Anyone who values remote + mail-in options and a 24h reply target'
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00ff9f]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Founder */}
        <div className="mt-16 glass rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ff9f] to-[#a855f7] text-2xl font-bold text-black">
              MF
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#00ff9f]">
                <User className="h-4 w-4" />
                <p className="mono text-xs tracking-[0.18em]">FOUNDER</p>
              </div>
              <h2 className="mt-2 text-2xl font-semibold">Michael O&apos;Flaherty</h2>
              <p className="mt-1 text-sm text-white/45">CompSci student · Operator · Greater Philadelphia</p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
                I run TradeHax as a single-operator practice: repairs and recovery when hardware fails,
                custom builds when software is the bottleneck, and remote guitar lessons when someone wants
                structured progress. Market tools on this site are research and education only — never
                brokerage or live order routing.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/50">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#00ff9f]" />
                  {site.region}
                </span>
                <a href={`mailto:${site.email}`} className="transition hover:text-[#00ff9f]">
                  {site.email}
                </a>
                <a href={`tel:${site.phoneTel}`} className="transition hover:text-[#00ff9f]">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="mt-16">
          <p className="mono text-xs tracking-[0.2em] text-white/40">WHY CHOOSE US</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Credibility without the agency tax.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: 'Scoped before invoice',
                d: 'You see price and deliverables in writing before work starts. No open-ended surprises.'
              },
              {
                t: 'One expert, full path',
                d: 'Repairs, builds, lessons, and research under one standard — not handed off to a chain of freelancers.'
              },
              {
                t: 'Remote + mail-in',
                d: 'Diagnostics online when possible. Hardware via mail-in. Local Greater Philadelphia when needed.'
              },
              {
                t: '24h reply target',
                d: 'Speed is part of the product. Urgent issues can text the line on the contact page.'
              },
              {
                t: 'Site is the demo',
                d: 'This stack is what you buy: Next.js, Cloudflare, conversion flows, clear UX.'
              },
              {
                t: 'Honest boundaries',
                d: 'Market tools are simulation/education only. No fake brokerage claims. No hype pricing.'
              }
            ].map((item) => (
              <div key={item.t} className="glass rounded-2xl p-6">
                <h3 className="font-semibold">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <a href="/contact" className="btn-primary">
            Request a scope <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/services" className="btn-ghost">
            View services
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
