import { ArrowRight, Wrench, Code2, Smartphone, Droplets, HardDrive, Battery, Unlock, Cable } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../../lib/site';

const repairs = [
  { icon: Smartphone, title: 'Screen replacement', detail: 'iPhone, Android, tablets' },
  { icon: Droplets, title: 'Water damage recovery', detail: 'Full diagnostics + recovery attempt' },
  { icon: HardDrive, title: 'Data retrieval', detail: 'Broken devices or failed drives' },
  { icon: Unlock, title: 'Unbricking', detail: 'Software / firmware recovery' },
  { icon: Cable, title: 'ESN / IMEI repair', detail: 'Network unlock issues' },
  { icon: Battery, title: 'Battery & charging', detail: 'Ports, batteries, cables' }
];

const development = [
  'Website creation (landing pages to full apps)',
  'Mobile apps (iOS, Android, cross-platform)',
  'Web3 integration (wallets, smart contracts)',
  'Backend & APIs (Node.js, databases, hosting)',
  'AI integration (ChatGPT, Claude, custom bots)',
  'E-commerce (Shopify, Stripe, payment flows)'
];

export default function ServicesPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32">
        <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">TECH EXECUTION</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Work that ships. Systems that stay up.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/50">
          Remote-first IT and web execution. Owner-operated. Scoped before invoice. Mail-in and Greater Philadelphia
          options available.
        </p>

        {/* High-level packages */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {site.services.map((item) => (
            <article key={item.title} className="card-lift glass rounded-3xl p-8">
              <p className="text-sm text-[#00ff9f]">{item.price}</p>
              <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
              <ul className="mt-5 space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-white/55">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff9f]/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Device repairs detail */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Wrench className="h-6 w-6 text-[#00ff9f]" />
            <div>
              <p className="mono text-xs tracking-[0.18em] text-[#00ff9f]">DEVICE REPAIRS</p>
              <h2 className="text-2xl font-semibold sm:text-3xl">$50 – $200 depending on complexity</h2>
            </div>
          </div>
          <p className="mb-8 max-w-2xl text-white/50">
            One expert, full solutions. Remote triage when possible. Mail-in for hardware work. Local Greater
            Philadelphia support available.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repairs.map((r) => (
              <div key={r.title} className="glass rounded-2xl p-5">
                <r.icon className="h-5 w-5 text-[#00ff9f]" />
                <h3 className="mt-4 font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-white/50">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom development detail */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Code2 className="h-6 w-6 text-[#a855f7]" />
            <div>
              <p className="mono text-xs tracking-[0.18em] text-[#a855f7]">CUSTOM DEVELOPMENT</p>
              <h2 className="text-2xl font-semibold sm:text-3xl">Starting at $299</h2>
            </div>
          </div>
          <p className="mb-8 max-w-2xl text-white/50">
            From concept to deployment. Landing pages, full apps, AI integrations, and e-commerce — written scope
            before any invoice.
          </p>
          <div className="glass rounded-3xl p-8">
            <ul className="grid gap-3 sm:grid-cols-2">
              {development.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a855f7]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Delivery badges */}
        <div className="mt-14 flex flex-wrap gap-3">
          <span className="rounded-full border border-[#00ff9f]/25 bg-[#00ff9f]/5 px-4 py-2 text-xs font-medium text-[#00ff9f]">
            Remote diagnostics
          </span>
          <span className="rounded-full border border-[#00ff9f]/25 bg-[#00ff9f]/5 px-4 py-2 text-xs font-medium text-[#00ff9f]">
            Mail-in accepted
          </span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/60">
            Greater Philadelphia local
          </span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/60">
            Worldwide clients welcome
          </span>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a href="/contact" className="btn-primary">
            Request a free quote <ArrowRight className="h-4 w-4" />
          </a>
          <a href={`tel:${site.phoneTel}`} className="btn-ghost">
            {site.phoneDisplay}
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
