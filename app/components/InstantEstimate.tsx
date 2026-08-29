'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Wrench, Code2, Guitar, Sparkles } from 'lucide-react';
import { saveEstimateIntent, track } from '../../lib/analytics';

const EXAMPLE_PROMPTS = [
  'iPhone screen broken',
  'laptop water damage',
  'Android battery replacement',
  'Need a landing page',
  'Build a mobile app',
  'Guitar lessons remote',
  'Data recovery from failed drive',
  'Unbrick my phone'
] as const;

const TYPEWRITER = [
  'iPhone screen broken…',
  'laptop water damage…',
  'Need a landing page…',
  'Build a mobile app…',
  'Unbrick my phone…'
];

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
      title: 'Free scope & quote',
      range: '$89+',
      note: 'Tell us what you need — clear range the same day when possible.',
      service: 'Other',
      icon: 'general'
    };
  }

  if (
    /screen|display|glass|cracked|broken phone|iphone|android|tablet|ipad|battery|charging|port|water|liquid|damage|data recover|unbrick|esim|imei|esn|firmware|bricked/.test(
      q
    )
  ) {
    return {
      title: 'Device repair / recovery',
      range: '$50 – $200',
      note: 'Remote diagnostics when possible. Mail-in and Greater Philadelphia options available.',
      service: 'Device / software repair',
      icon: 'repair'
    };
  }

  if (
    /website|landing|web app|mobile app|ios|android app|shopify|ecommerce|e-commerce|api|backend|ai bot|chatbot|automation|web3|smart contract|next\.js|react|care retainer/.test(
      q
    )
  ) {
    return {
      title: 'Custom development',
      range: 'From $299',
      note: 'Landing pages to full apps, AI integrations, and e-commerce. Scoped before any invoice.',
      service: 'Website system',
      icon: 'dev'
    };
  }

  if (/guitar|lesson|music|coaching|practice|song|riff/.test(q)) {
    return {
      title: 'Remote guitar lessons',
      range: 'From $40 / session',
      note: '1-on-1 remote sessions via Google Meet, Zoom, or Teams. All levels welcome.',
      service: 'Other',
      icon: 'music'
    };
  }

  return {
    title: 'Custom quote',
    range: 'Free estimate',
    note: 'We’ll map the right service and send a clear price range quickly.',
    service: 'Other',
    icon: 'general'
  };
}

export default function InstantEstimate() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ph, setPh] = useState('');
  const [twIndex, setTwIndex] = useState(0);

  // Deep-link: /?q=...#estimate
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) {
      setQuery(q);
      setSubmitted(true);
      const r = matchEstimate(q);
      saveEstimateIntent({ query: q, title: r.title, range: r.range, icon: r.icon, at: Date.now() });
      track('estimate_result', { query: q.slice(0, 80), title: r.title, range: r.range, source: 'deeplink' });
    }
  }, []);

  // Typewriter placeholder when empty
  useEffect(() => {
    if (query) return;
    let i = 0;
    let deleting = false;
    let phrase = TYPEWRITER[twIndex % TYPEWRITER.length];
    const id = setInterval(() => {
      if (!deleting) {
        i += 1;
        setPh(phrase.slice(0, i));
        if (i >= phrase.length) {
          deleting = true;
          setTimeout(() => {}, 800);
        }
      } else {
        i -= 1;
        setPh(phrase.slice(0, Math.max(0, i)));
        if (i <= 0) {
          deleting = false;
          setTwIndex((n) => n + 1);
          phrase = TYPEWRITER[(twIndex + 1) % TYPEWRITER.length];
        }
      }
    }, deleting ? 28 : 42);
    return () => clearInterval(id);
  }, [query, twIndex]);

  const result = useMemo(() => matchEstimate(query), [query]);
  const live = query.length > 2;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    track('estimate_result', {
      query: query.slice(0, 80),
      title: result.title,
      range: result.range,
      icon: result.icon
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
    track('estimate_result', {
      query: prompt,
      title: r.title,
      range: r.range,
      icon: r.icon
    });
    saveEstimateIntent({
      query: prompt,
      title: r.title,
      range: r.range,
      icon: r.icon,
      at: Date.now()
    });
  }

  function bookClick() {
    track('estimate_book_click', {
      title: result.title,
      range: result.range,
      icon: result.icon
    });
    saveEstimateIntent({
      query,
      title: result.title,
      range: result.range,
      icon: result.icon,
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
    <div id="estimate" className="w-full max-w-xl scroll-mt-28">
      <form onSubmit={handleSubmit}>
        <label htmlFor="instant-estimate" className="sr-only">
          Describe your issue or project for an instant estimate
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative min-h-[48px] flex-1">
            <input
              id="instant-estimate"
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (submitted) setSubmitted(false);
              }}
              onFocus={() => track('estimate_open', {})}
              placeholder={query ? '' : ph || 'Describe the job…'}
              className="h-full min-h-[48px] w-full rounded-full border border-white/15 bg-black/50 px-5 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#00ff9f]/55 focus:shadow-[0_0_24px_rgba(0,255,159,0.12)]"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn-primary shrink-0">
            Get free estimate
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>

      <div className="mt-4 flex flex-wrap gap-2">
        {EXAMPLE_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => applyPrompt(prompt)}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60 transition hover:border-[#00ff9f]/40 hover:bg-[#00ff9f]/10 hover:text-[#00ff9f]"
          >
            {prompt}
          </button>
        ))}
      </div>

      {(submitted || live) && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#00ff9f]/30 bg-gradient-to-br from-[#00ff9f]/10 to-transparent p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00ff9f]/15 ring-1 ring-[#00ff9f]/25">
              <Icon className="h-5 w-5 text-[#00ff9f]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#00ff9f]">Live range</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{result.title}</h3>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-white">{result.range}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{result.note}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={contactHref} onClick={bookClick} className="btn-primary py-2.5 text-sm">
                  Book free quote
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="/services"
                  onClick={() => track('cta_click', { placement: 'estimate_services' })}
                  className="btn-ghost py-2.5 text-sm"
                >
                  View all services
                </a>
              </div>
            </div>
          </div>
          <p className="mt-4 border-t border-white/8 pt-3 text-[11px] text-white/35">
            Estimates only. Final price after short discovery. Remote, mail-in, Greater Philadelphia.
          </p>
        </div>
      )}
    </div>
  );
}
