import Nav from '../components/Nav';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import { site } from '../../lib/site';

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">CONTACT</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Request a scope.</h1>
            <p className="mt-5 text-lg text-white/50">
              Michael O&apos;Flaherty — CompSci student, operator, family shop. Written scope before
              any invoice. Target reply: 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/35">Email</p>
                <a className="mt-1 block text-lg text-[#00ff9f]" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/35">Call / text</p>
                <a className="mt-1 block text-lg text-[#00ff9f]" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </a>
              </div>
              <div className="flex flex-wrap gap-4 pt-2 text-sm text-white/45">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#00ff9f]"
                  >
                    {s.label}
                  </a>
                ))}
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
