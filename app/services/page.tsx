import { ArrowRight } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../../lib/site';

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
          Remote-first IT and web execution for people who need a working product, not another demo.
          Owner-operated. Scoped before invoice.
        </p>

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

        <div className="mt-12 flex flex-wrap gap-3">
          <a href="/contact" className="btn-primary">
            Request a scope <ArrowRight className="h-4 w-4" />
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
