import { ArrowRight } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../../lib/site';

export default function PortfolioPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32">
        <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">PORTFOLIO</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Proof over pitch decks.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/50">
          Representative work patterns — problem, range, result. Names stay private unless the client
          asks to be listed.
        </p>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {site.portfolio.map((job) => (
            <article key={job.title} className="card-lift glass flex flex-col rounded-3xl p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="mono rounded-full border border-white/10 px-3 py-1 text-[10px] tracking-[0.14em] text-white/50">
                  {job.tag}
                </span>
                <span className="text-sm text-[#00ff9f]">{job.range}</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold">{job.title}</h2>
              <p className="mt-4 text-sm text-white/45">
                <span className="text-white/70">Problem. </span>
                {job.problem}
              </p>
              <p className="mt-3 text-sm text-white/45">
                <span className="text-white/70">Result. </span>
                {job.result}
              </p>
              <p className="mono mt-auto pt-6 text-[11px] tracking-wide text-white/30">{job.stack}</p>
            </article>
          ))}
        </div>

        <div className="glass mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Need the same outcome?</h2>
            <p className="mt-2 text-sm text-white/50">Send the URL or device. Scope before invoice.</p>
          </div>
          <a href="/contact" className="btn-primary shrink-0">
            Request a scope <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
