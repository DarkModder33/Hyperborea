import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { getInsight, insights } from '../../../lib/content';
import { pageMeta } from '../../../lib/seo';

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getInsight(params.slug);
  if (!post) {
    return { title: 'Insight not found' };
  }
  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    type: 'article',
    insightSlug: post.slug
  });
}

export default function InsightArticle({ params }: { params: { slug: string } }) {
  const post = getInsight(params.slug);
  if (!post) notFound();

  return (
    <main>
      <Nav />
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">{post.category}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-3 text-sm text-white/35">{post.date}</p>
        <p className="mt-6 text-lg text-white/55">{post.excerpt}</p>
        <div className="prose-insight mt-10 border-t border-white/10 pt-8">
          {post.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-3">
          <a href="/contact" className="btn-primary">
            Request a scope <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/insights" className="btn-ghost">
            All insights
          </a>
        </div>
      </article>
      <Footer />
    </main>
  );
}
