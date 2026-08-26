import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../../lib/site';

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-[#00ff9f]">CONTACT</p>
        <h1 className="text-5xl font-semibold tracking-tight">Owner line.</h1>
        <p className="mt-6 text-lg text-white/60">
          Michael. CompSci student. Family shop. If it is broken or needs to ship, start here.
        </p>
        <div className="mt-10 space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-lg">
          <p>
            Email{' '}
            <a className="text-[#00ff9f]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p>
            Call / text{' '}
            <a className="text-[#00ff9f]" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </p>
          <p className="text-white/50">
            Send the device, URL, deadline, and on-site vs remote. Reply target: 24 hours.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/60">
          {site.socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="hover:text-[#00ff9f]">
              {item.label}
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
