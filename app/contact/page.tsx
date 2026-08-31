import Nav from '../components/Nav';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import { site } from '../../lib/site';

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">QUOTE</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Request a written scope</h1>
            <p className="mt-5 text-lg text-white/50">
              Four short steps. You get deliverables and price before any invoice. Typical reply under 24 hours.
            </p>

            <ol className="mt-10 space-y-4 text-sm text-white/55">
              <li className="flex gap-3">
                <span className="mono text-[#00ff9f]">1</span>
                Choose the service
              </li>
              <li className="flex gap-3">
                <span className="mono text-[#00ff9f]">2</span>
                Describe the job
              </li>
              <li className="flex gap-3">
                <span className="mono text-[#00ff9f]">3</span>
                Leave contact details
              </li>
              <li className="flex gap-3">
                <span className="mono text-[#00ff9f]">4</span>
                Review and send
              </li>
            </ol>

            <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/35">Email</p>
                <a className="mt-1 block text-[#00ff9f]" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/35">Call / text</p>
                <a className="mt-1 block text-[#00ff9f]" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
