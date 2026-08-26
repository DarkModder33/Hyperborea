import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../../lib/site';

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">CONTACT</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Owner line.</h1>
        <p className="mt-5 text-lg text-white/50">
          Michael O&apos;Flaherty — CompSci student, operator, family shop. If it is broken or needs
          to ship, start here.
        </p>

        <div className="glass mt-10 space-y-6 rounded-3xl p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-white/35">Email</p>
            <a className="mt-1 block text-xl text-[#00ff9f]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-white/35">Call / text</p>
            <a className="mt-1 block text-xl text-[#00ff9f]" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </div>
          <p className="text-sm text-white/45">
            Include device or site URL, deadline, and on-site vs remote. Target reply: 24 hours.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/50">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-[#00ff9f]">
              {s.label}
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
