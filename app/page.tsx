import { ArrowRight, LineChart, Shield } from 'lucide-react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { site } from '../lib/site';

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="relative flex min-h-screen items-center justify-center px-5 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(#00ff9f_0.6px,transparent_1px)] opacity-[0.07] [background-size:28px_28px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex rounded-full border border-[#00ff9f]/25 px-4 py-1 font-mono text-xs tracking-[0.2em] text-[#00ff9f]">
            TRADEHAX · HYPERION
          </p>
          <h1 className="text-6xl font-semibold tracking-[-0.06em] md:text-8xl">
            Built to
            <br />
            <span className="bg-gradient-to-r from-[#00ff9f] via-white to-[#a855f7] bg-clip-text text-transparent">
              ship and scan.
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg text-white/60">
            Elite tech execution and simulation-first market research. Crisp work.
            No cluttered backend theater.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00ff9f] px-8 py-3 font-semibold text-black"
            >
              Book work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/intelligence"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 text-white/80"
            >
              Intelligence
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-24 md:grid-cols-2">
        <article className="card-hover hairline rounded-3xl bg-white/[0.03] p-8">
          <Shield className="mb-8 h-8 w-8 text-[#00ff9f]" />
          <h2 className="text-3xl font-semibold">Tech execution</h2>
          <p className="mt-4 text-white/60">
            Sites, repairs, custom software. Scoped before an invoice. Remote or Greater Philadelphia.
          </p>
          <a href="/services" className="mt-8 inline-block text-sm text-[#00ff9f]">
            View services →
          </a>
        </article>
        <article className="card-hover hairline rounded-3xl bg-white/[0.03] p-8">
          <LineChart className="mb-8 h-8 w-8 text-[#a855f7]" />
          <h2 className="text-3xl font-semibold">AI intelligence</h2>
          <p className="mt-4 text-white/60">
            Research scanners and notes. Simulation only. Not a broker. Not live execution.
          </p>
          <a href="/intelligence" className="mt-8 inline-block text-sm text-[#a855f7]">
            Open hub →
          </a>
        </article>
      </section>
      <Footer />
    </main>
  );
}
