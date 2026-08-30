'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Wrench, Code2, Guitar, Sparkles } from 'lucide-react';
import { saveEstimateIntent, track } from '../../lib/analytics';

const EXAMPLE_PROMPTS = [
  'iPhone screen broken',
  'laptop water damage',
  'Need a website',
  'Android battery',
  'Data recovery',
  'Guitar lessons'
] as const;

type EstimateResult = {
  title: string;
  range: string;
  note: string;
  service: string;
  icon: 'repair' | 'dev' | 'music' | 'general';
};

function matchEstimate(query: string): EstimateResult {
  const q = query.toLowerCase().trim();

  if (!q) {
    return {
      title: 'Custom quote',
      range: 'Free estimate',
      note: 'Describe the job for a typical price band.',
      service: 'Other',
      icon: 'general'
    };
  }

  if (
    /screen|display|glass|cracked|broken phone|iphone|android|tablet|ipad|battery|charging|port|water|liquid|damage|data recover|unbrick|firmware|bricked|phone|laptop|pc repair/.test(
      q
    )
  ) {
    return {
      title: 'Device repair / recovery',
      range: '$50 – $200',
      note: 'Remote check when possible. Mail-in and Greater Philadelphia available.',
      service: 'Device / software repair',
      icon: 'repair'
    };
  }

  if (
    /website|landing|web app|mobile app|shopify|ecommerce|e-commerce|api|backend|chatbot|automation|next\.js|react|site|webpage/.test(
      q
    )
  ) {
    return {
      title: 'Website or custom build',
      range: 'From $299',
      note: 'Landing pages to fuller systems. Written scope before any invoice.',
      service: 'Website system',
      icon: 'dev'
    };
  }

  if (/care|retainer|maintenance|monthly/.test(q)) {
    return {
      title: 'Care retainer',
      range: '$250 / month',
      note: 'Priority fixes and light updates for live sites.',
      service: 'Care retainer',
      icon: 'dev'
    };
  }

  if (/guitar|lesson|music|coaching/.test(q)) {
    return {
      title: 'Remote guitar lessons',
      range: 'From $40 / session',
      note: '1-on-1 on Meet, Zoom, or Teams.',
      service: 'Other',
      icon: 'music'
    };
  }

  return {
    title: 'Custom quote',
    range: 'Free estimate',
    note: 'We will map the right service and send a clear range.',
    service: 'Other',
    icon: 'general'
  };
}

export default function InstantEstimate() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) {
      setQuery(q);
      setSubmitted(true);
      const r = matchEstimate(q);
      saveEstimateIntent({ query: q, title: r.title, range: r.range, icon: r.icon, at: Date.now() });
    }
  }, []);

  const result = useMemo(() => matchEstimate(query), [query]);
  const showResult = submitted || query.trim().length > 2;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    track('estimate_result', {
      query: query.slice(0, 80),
      title: result.title,
      range: result.range
    });
    saveEstimateIntent({
      query,
      title: result.title,
      range: result.range,
      icon: result.icon,
      at: Date.now()
    });
  }

  function applyPrompt(prompt: string) {
    setQuery(prompt);
    setSubmitted(true);
    track('estimate_prompt_click', { prompt });
    const r = matchEstimate(prompt);
    saveEstimateIntent({
      query: prompt,
      title: r.title,
      range: r.range,
      icon: r.icon,
      at: Date.now()
    });
  }

  const Icon =
    result.icon === 'repair'
      ? Wrench
      : result.icon === 'dev'
        ? Code2
        : result.icon === 'music'
          ? Guitar
          : Sparkles;

  const contactHref = `/contact?service=${encodeURIComponent(result.service)}&q=${encodeURIComponent(query.slice(0, 120))}`;

  return (
    <div id="estimate" className="w-full scroll-mt-28">
      <form onSubmit={handleSubmit} className="glass rounded-2xl p-4 sm:p-5">
        <label htmlFor="instant-estimate" className="mb-2 block text-left text-sm font-medium text-white/70">
          What do you need help with?
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="instant-estimate"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (submitted) setSubmitted(false);
            }}
            onFocus={() => track('estimate_open', {})}
            placeholder="e.g. iPhone screen broken"
            className="min-h-[48px] flex-1 rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#00ff9f]/50"
            autoComplete="off"
          />
          <button type="submit" className="btn-primary shrink-0">
            Get estimate
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {EXAMPLE_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => applyPrompt(prompt)}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60 transition hover:border-[#00ff9f]/40 hover:text-[#00ff9f]"
            >
              {prompt}
            </button>
          ))}
        </div>
      </form>

      {showResult && (
        <div
          className="mt-4 rounded-2xl border border-[#00ff9f]/30 bg-[#00ff9f]/5 p-5 text-left"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00ff9f]/15">
              <Icon className="h-5 w-5 text-[#00ff9f]" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-white/50">Typical range</p>
              <h3 className="mt-0.5 text-lg font-semibold text-white">{result.title}</h3>
              <p className="mt-1 text-2xl font-semibold text-[#00ff9f]">{result.range}</p>
              <p className="mt-2 text-sm text-white/55">{result.note}</p>
              <a
                href={contactHref}
                onClick={() => {
                  track('estimate_book_click', { title: result.title, range: result.range });
                  saveEstimateIntent({
                    query,
                    title: result.title,
                    range: result.range,
                    icon: result.icon,
                    at: Date.now()
                  });
                }}
                className="btn-primary mt-4 inline-flex"
              >
                Continue to quote form
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <p className="mt-4 border-t border-white/10 pt-3 text-xs text-white/35">
            Estimates only. Final price after a short written scope.
          </p>
        </div>
      )}
    </div>
  );
}
