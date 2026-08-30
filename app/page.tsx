import type { Metadata } from 'next';
import {
  ArrowRight,
  Wrench,
  MonitorSmartphone,
  Shield,
  Package,
  MessageSquare,
  BookOpen,
  Guitar
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
  title: 'TradeHax | Tech repairs, websites & remote lessons',
  description:
    'Instant estimates for device repairs ($50–200), websites from $299, Care retainers ($250/mo), and remote guitar lessons. Greater Philadelphia and worldwide.',
  path: '/'
});

const PATHS = [
  {
    icon: Wrench,
    title: 'Device repair',
    price: '$50–200',
    href: '/contact?service=Device%20%2F%20software%20repair&q=Device%20repair',
    text: 'Screens, water damage, data recovery, batteries, unbrick.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Website or app',
    price: 'From $299',
    href: '/contact?service=Website%20system&q=Need%20a%20website',
    text: 'Landing pages, full sites, booking flows. Scope before pay.'
  },
  {
    icon: Shield,
    title: 'Care plan',
    price: '$250/mo',
    href: '/care',
    text: 'Priority fixes and small updates after launch.'
  },
  {
    icon: Guitar,
    title: 'Guitar lessons',
    price: 'From $40',
    href: '/contact?service=Other&q=Remote%20guitar%20lessons',
    text: '1-on-1 remote sessions with a clear practice plan.'
  }
];

export default function Home() {
  const featured = insights.slice(0, 3);

  return (
    <main>
      <Nav />
      <div className="pt-[4.25rem]">
        <Marquee />
      </div>

      {/* Hero — plain language, estimate first */}
      <section className="px-5 pb-14 pt-10 sm:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mono text-xs tracking-[0.18em] text-[#00ff9f]">GREATER PHILADELPHIA · REMOTE · MAIL-IN</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Tell us what you need.
            <br />
            <span className="text-gradient">Get a price range now.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/55 sm:text-lg">
            Phone and laptop repair, custom websites, ongoing site care, and remote guitar lessons. One person does the
            work. You get a written scope before any invoice.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <InstantEstimate />
        </div>

        <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-4 text-sm text-white/45">
          <a href={`mailto:${site.email}`} className="hover:text-[#00ff9f]">
            {site.email}
          </a>
          <a href={`tel:${site.phoneTel}`} className="hover:text-[#00ff9f]">
            {site.phoneDisplay}
          </a>
          <a href={`sms:${site.phoneTel}`} className="inline-flex items-center gap-1.5 hover:text-[#00ff9f]">
            <MessageSquare className="h-3.5 w-3.5" /> Text us
          </a>
        </div>
      </section>

      {/* Quick paths */}
      <section className="border-y border-white/8 bg-white/[0.02] px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight">Or pick a path</h2>
          <p className="mt-2 text-center text-sm text-white/45">Each link opens a quote form with that service selected.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PATHS.map((p) => (
              <a key={p.title} href={p.href} className="glass card-lift rounded-2xl p-5 transition hover:border-[#00ff9f]/30">
                <p.icon className="h-6 w-6 text-[#00ff9f]" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-[#00ff9f]">{p.price}</p>
                <p className="mt-2 text-sm text-white/50">{p.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-white/60">
                  Continue <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How it works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { n: '1', t: 'Describe the job', d: 'Use the estimate box or a path above. You see a price band right away.' },
            { n: '2', t: 'Request a written scope', d: 'Submit the quote form. You get deliverables and price before you pay.' },
            { n: '3', t: 'We do the work', d: 'Remote, mail-in, or local when hardware needs hands. Optional Care after launch.' }
          ].map((s) => (
            <li key={s.n} className="glass rounded-2xl p-6">
              <span className="mono text-[#00ff9f]">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-white/50">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/mail-in" className="btn-ghost">
            <Package className="h-4 w-4" /> Mail-in repair guide
          </a>
          <a href="/services" className="btn-ghost">
            Full service list
          </a>
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-white/8 bg-black/25 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Guides</h2>
              <p className="mt-2 text-sm text-white/45">Short practical articles tied to real services.</p>
            </div>
            <a href="/insights" className="btn-ghost">
              <BookOpen className="h-4 w-4" /> All guides
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {featured.map((post) => (
              <a key={post.slug} href={`/insights/${post.slug}`} className="glass rounded-2xl p-5 transition hover:border-[#00ff9f]/25">
                <p className="mono text-[10px] tracking-wider text-[#00ff9f]">{post.category}</p>
                <h3 className="mt-2 font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-white/45">{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="glass-strong rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready for a written scope?</h2>
          <p className="mt-3 max-w-lg text-white/50">
            Use the form for builds and retainers. Text for urgent device issues.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="btn-primary">
              Open quote form <ArrowRight className="h-4 w-4" />
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
