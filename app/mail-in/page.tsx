import { ArrowRight, Package, Shield, Truck } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../../lib/site';

const STEPS = [
  {
    icon: Shield,
    t: '1 · Prep',
    d: 'Back up what you can. Remove SIM/SD if the tray opens. Note the failure in one short message (liquid, drop, no power, boot loop) plus your deadline.'
  },
  {
    icon: Package,
    t: '2 · Pack',
    d: 'Padded mailer or small box. No loose batteries rattling. Include a paper slip with your name, phone, email, and the issue.'
  },
  {
    icon: Truck,
    t: '3 · Ship & track',
    d: 'Use tracked shipping. Text or email the tracking number. You receive a written outcome before any open-ended spend.'
  }
];

export default function MailInPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32">
        <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">MAIL-IN</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Ship it in. Get a clear outcome.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/50">
          For hardware that needs hands-on work. Remote triage first when possible. Written scope before open-ended
          charges.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.t} className="glass rounded-3xl p-6">
              <s.icon className="h-6 w-6 text-[#00ff9f]" />
              <h2 className="mt-4 text-lg font-semibold">{s.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="glass-strong mt-12 rounded-3xl p-8">
          <h2 className="text-xl font-semibold">Before you ship</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/55">
            <li>· Confirm the job via quote form or text so intake is expected.</li>
            <li>· Data recovery is best-effort; critical files should be backed up when the device still responds.</li>
            <li>· You confirm you own the device or are authorized to service it.</li>
            <li>· Parts and lab time are quoted before work expands past the agreed band.</li>
          </ul>
          <p className="mt-6 text-sm text-white/40">
            Address and shipping details are confirmed after intake — do not ship without a tracking plan and contact
            confirmation.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/contact?service=Device%20%2F%20software%20repair&q=Mail-in%20repair"
            className="btn-primary"
          >
            Start mail-in intake <ArrowRight className="h-4 w-4" />
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
