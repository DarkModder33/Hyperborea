import { ArrowRight } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { insights } from '../../lib/content';

export default function InsightsIndex() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32">
        <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">INSIGHTS</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Guides that grow the pipeline.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/50">
          Practical writing tied to repairs, builds, and retainers — built to rank and convert.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post) => (
            <a key={post.slug} href={`/insights/${post.slug}`} className="card-lift glass group rounded-3xl p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="mono text-[10px] tracking-[0.16em] text-[#00ff9f]">{post.category}</span>
                <span className="text-xs text-white/30">{post.date}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold group-hover:text-[#00ff9f]">{post.title}</h2>
              <p className="mt-3 text-sm text-white/45">{post.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-white/50">
                Read article <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
