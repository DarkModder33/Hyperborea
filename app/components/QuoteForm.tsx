'use client';

import { useEffect, useState, FormEvent, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { site } from '../../lib/site';
import { readEstimateIntent, track } from '../../lib/analytics';

const serviceOptions = [
  'Website system',
  'Device / software repair',
  'Custom automation',
  'Care retainer',
  'Intelligence waitlist',
  'Other'
];

const budgetOptions = [
  'Under $200',
  '$200–$500',
  '$500–$1,500',
  '$1,500+',
  'Not sure yet'
];

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [prefillService, setPrefillService] = useState('');
  const [prefillMessage, setPrefillMessage] = useState('');
  const [estimateNote, setEstimateNote] = useState<string | null>(null);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    const service = searchParams.get('service') || '';
    const intent = readEstimateIntent();

    if (service) setPrefillService(service);
    else if (intent?.title) {
      if (intent.icon === 'repair') setPrefillService('Device / software repair');
      else if (intent.icon === 'dev') setPrefillService('Website system');
      else setPrefillService('Other');
    }

    const parts: string[] = [];
    if (q) parts.push(q);
    else if (intent?.query) parts.push(intent.query);
    if (intent?.range) {
      parts.push(`\n[Instant estimate shown: ${intent.title} — ${intent.range}]`);
      setEstimateNote(`${intent.title} · ${intent.range}`);
    }
    if (parts.length) setPrefillMessage(parts.join('').trim());
  }, [searchParams]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    track('quote_submit', {
      service: String(data.get('service') || ''),
      budget: String(data.get('budget') || ''),
      has_estimate: Boolean(estimateNote)
    });

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      });
      if (!res.ok) throw new Error('submit failed');
      setStatus('sent');
      form.reset();
    } catch {
      const name = String(data.get('name') || '');
      const email = String(data.get('email') || '');
      const phone = String(data.get('phone') || '');
      const service = String(data.get('service') || '');
      const budget = String(data.get('budget') || '');
      const message = String(data.get('message') || '');
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        `Budget: ${budget}`,
        '',
        message
      ].join('\n');
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Quote request — ${service || 'TradeHax'}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
    }
  }

  if (status === 'sent') {
    return (
      <div className="glass rounded-3xl p-8 text-center">
        <p className="text-xl font-semibold text-[#00ff9f]">Request received.</p>
        <p className="mt-3 text-sm text-white/55">
          I reply within 24 hours with a written scope. Urgent? Text {site.phoneDisplay}.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-6">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass space-y-5 rounded-3xl p-6 sm:p-8">
      <input type="hidden" name="_subject" value="TradeHax quote request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      {estimateNote && (
        <div className="rounded-xl border border-[#00ff9f]/25 bg-[#00ff9f]/5 px-4 py-3 text-sm text-[#00ff9f]">
          Carrying estimate: <strong>{estimateNote}</strong>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-white/45">Name</span>
          <input
            required
            name="name"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#00ff9f]/50"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="text-white/45">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#00ff9f]/50"
            placeholder="you@domain.com"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-white/45">Phone / text</span>
          <input
            name="phone"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#00ff9f]/50"
            placeholder={site.phoneDisplay}
          />
        </label>
        <label className="block text-sm">
          <span className="text-white/45">Service</span>
          <select
            required
            name="service"
            value={prefillService}
            onChange={(e) => setPrefillService(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#00ff9f]/50"
          >
            <option value="" disabled>
              Select…
            </option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="text-white/45">Budget range</span>
        <select
          name="budget"
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#00ff9f]/50"
        >
          <option value="" disabled>
            Optional — helps prioritise
          </option>
          {budgetOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm">
        <span className="text-white/45">What is broken or needed?</span>
        <textarea
          required
          name="message"
          rows={5}
          value={prefillMessage}
          onChange={(e) => setPrefillMessage(e.target.value)}
          className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#00ff9f]/50"
          placeholder="Device / site URL, deadline, remote vs on-site…"
        />
      </label>

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto">
        {status === 'sending' ? 'Sending…' : 'Request written scope'}
      </button>
      <p className="text-xs text-white/35">
        Submits to {site.email}. No spam list. Written scope before any invoice. Typical reply under 24h.
      </p>
    </form>
  );
}

export default function QuoteForm() {
  return (
    <Suspense fallback={<div className="glass h-96 animate-pulse rounded-3xl" />}>
      <QuoteFormInner />
    </Suspense>
  );
}
