'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Wrench, Code2, Shield, Sparkles, Music, LineChart } from 'lucide-react';
import { site } from '../../lib/site';
import { readEstimateIntent, track } from '../../lib/analytics';
import {
  type QuoteFormData,
  type FieldErrors,
  validateStep,
  validateReview,
  firstErrorMessage,
  hasErrors
} from '../../lib/quoteValidation';

const SERVICES = [
  {
    id: 'Device / software repair',
    label: 'Device repair',
    blurb: 'Screen, water, data, battery, unbrick',
    icon: Wrench
  },
  {
    id: 'Website system',
    label: 'Website or app',
    blurb: 'Landing pages to full systems',
    icon: Code2
  },
  {
    id: 'Care retainer',
    label: 'Care plan',
    blurb: '$250/mo priority fixes',
    icon: Shield
  },
  {
    id: 'Custom automation',
    label: 'Automation',
    blurb: 'Scripts, tools, workflows',
    icon: Sparkles
  },
  {
    id: 'Other',
    label: 'Guitar / other',
    blurb: 'Lessons or something else',
    icon: Music
  },
  {
    id: 'Intelligence waitlist',
    label: 'Intelligence',
    blurb: 'Research waitlist only',
    icon: LineChart
  }
] as const;

const BUDGETS = ['Under $200', '$200–$500', '$500–$1,500', '$1,500+', 'Not sure yet'];

const STEPS = ['Service', 'Details', 'Contact', 'Review'] as const;

const inputBase =
  'mt-2 w-full rounded-xl border bg-black/40 px-4 py-3 text-white outline-none transition';
const inputOk = 'border-white/10 focus:border-[#00ff9f]/50';
const inputBad = 'border-rose-400/60 focus:border-rose-400';

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [estimateNote, setEstimateNote] = useState<string | null>(null);
  const [form, setForm] = useState<QuoteFormData>({
    service: '',
    message: '',
    budget: '',
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const q = searchParams.get('q') || '';
    const service = searchParams.get('service') || '';
    const intent = readEstimateIntent();

    let nextService = service;
    if (!nextService && intent?.icon === 'repair') nextService = 'Device / software repair';
    if (!nextService && intent?.icon === 'dev') nextService = 'Website system';
    if (!nextService && intent?.title?.toLowerCase().includes('care')) nextService = 'Care retainer';

    const parts: string[] = [];
    if (q) parts.push(q);
    else if (intent?.query) parts.push(intent.query);
    if (intent?.range) {
      parts.push(`\n[Instant estimate: ${intent.title} — ${intent.range}]`);
      setEstimateNote(`${intent.title} · ${intent.range}`);
    }

    setForm((f) => ({
      ...f,
      service: nextService || f.service,
      message: parts.length ? parts.join('').trim() : f.message
    }));

    if (nextService) setStep(1);
  }, [searchParams]);

  function update<K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    // Clear field error as user edits
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  }

  function runValidate(s: number): boolean {
    const nextErrors = validateStep(s, form);
    setErrors(nextErrors);
    setAttempted(true);
    return !hasErrors(nextErrors);
  }

  function next() {
    if (!runValidate(step)) return;
    track('cta_click', { placement: 'quote_wizard_next', step: STEPS[step] });
    setAttempted(false);
    setStep((x) => Math.min(x + 1, STEPS.length - 1));
  }

  function back() {
    setErrors({});
    setAttempted(false);
    setStep((x) => Math.max(x - 1, 0));
  }

  /** Only allow jumping to earlier completed steps */
  function goToStep(i: number) {
    if (i >= step) return;
    setErrors({});
    setAttempted(false);
    setStep(i);
  }

  async function submit() {
    const all = validateReview(form);
    setErrors(all);
    setAttempted(true);
    if (hasErrors(all)) {
      // Jump to first step that fails
      if (all.service) setStep(0);
      else if (all.message) setStep(1);
      else if (all.name || all.email || all.phone) setStep(2);
      return;
    }

    setStatus('sending');
    track('quote_submit', {
      service: form.service,
      budget: form.budget || 'unset',
      has_estimate: Boolean(estimateNote),
      wizard: true
    });

    const data = new FormData();
    data.set('_subject', 'TradeHax quote request');
    data.set('_template', 'table');
    data.set('_captcha', 'false');
    data.set('name', form.name.trim());
    data.set('email', form.email.trim());
    data.set('phone', form.phone.trim());
    data.set('service', form.service);
    data.set('budget', form.budget || 'Not specified');
    data.set(
      'message',
      [form.message.trim(), estimateNote ? `\nEstimate shown: ${estimateNote}` : ''].join('')
    );

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      });
      if (!res.ok) throw new Error('submit failed');
      setStatus('sent');
    } catch {
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Service: ${form.service}`,
        `Budget: ${form.budget || 'Not specified'}`,
        '',
        form.message
      ].join('\n');
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Quote request — ${form.service || 'TradeHax'}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
    }
  }

  if (status === 'sent') {
    return (
      <div className="glass rounded-3xl p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00ff9f]/15 text-[#00ff9f]">
          <Check className="h-6 w-6" />
        </div>
        <p className="mt-4 text-xl font-semibold text-white">Request received</p>
        <p className="mt-3 text-sm text-white/55">
          You get a written scope within about 24 hours. Urgent hardware? Text {site.phoneDisplay}.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setStep(0);
            setForm({ service: '', message: '', budget: '', name: '', email: '', phone: '' });
            setEstimateNote(null);
            setErrors({});
            setAttempted(false);
          }}
          className="btn-ghost mt-6"
        >
          Start another request
        </button>
      </div>
    );
  }

  const banner = attempted ? firstErrorMessage(errors) : '';

  return (
    <div className="glass rounded-3xl p-5 sm:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between gap-2">
          {STEPS.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => goToStep(i)}
              className="flex flex-1 flex-col items-center gap-2"
              aria-current={i === step ? 'step' : undefined}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                  i < step
                    ? 'bg-[#00ff9f] text-black'
                    : i === step
                      ? 'border-2 border-[#00ff9f] text-[#00ff9f]'
                      : 'border border-white/15 text-white/35'
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span
                className={`hidden text-[10px] uppercase tracking-wider sm:block ${
                  i === step ? 'text-white' : 'text-white/35'
                }`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#00ff9f] transition-all duration-300"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {estimateNote && (
        <div className="mb-5 rounded-xl border border-[#00ff9f]/25 bg-[#00ff9f]/5 px-4 py-3 text-sm text-[#00ff9f]">
          From your estimate: <strong>{estimateNote}</strong>
        </div>
      )}

      {step === 0 && (
        <div>
          <h2 className="text-lg font-semibold">What do you need?</h2>
          <p className="mt-1 text-sm text-white/45">Pick one. You can change it later.</p>
          <div
            className="mt-5 grid gap-3 sm:grid-cols-2"
            role="radiogroup"
            aria-label="Service"
            aria-invalid={Boolean(errors.service)}
          >
            {SERVICES.map((s) => {
              const selected = form.service === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => update('service', s.id)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    selected
                      ? 'border-[#00ff9f]/50 bg-[#00ff9f]/10'
                      : errors.service
                        ? 'border-rose-400/40 bg-black/30'
                        : 'border-white/10 bg-black/30 hover:border-white/25'
                  }`}
                >
                  <s.icon className={`h-5 w-5 ${selected ? 'text-[#00ff9f]' : 'text-white/40'}`} />
                  <p className="mt-3 font-medium text-white">{s.label}</p>
                  <p className="mt-1 text-xs text-white/45">{s.blurb}</p>
                </button>
              );
            })}
          </div>
          {errors.service && (
            <p className="mt-3 text-sm text-rose-400" role="alert">
              {errors.service}
            </p>
          )}
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <h2 className="text-lg font-semibold">Describe the job</h2>
            <p className="mt-1 text-sm text-white/45">
              Device model, site URL, deadline, remote vs mail-in — whatever helps.
            </p>
          </div>
          <label className="block text-sm">
            <span className="text-white/45">Details</span>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'err-message' : undefined}
              className={`${inputBase} resize-y ${errors.message ? inputBad : inputOk}`}
              placeholder="What’s broken or what should we build?"
            />
            {errors.message && (
              <p id="err-message" className="mt-2 text-sm text-rose-400" role="alert">
                {errors.message}
              </p>
            )}
          </label>
          <fieldset>
            <legend className="text-sm text-white/45">Budget (optional)</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {BUDGETS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => update('budget', b)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition ${
                    form.budget === b
                      ? 'border-[#00ff9f]/50 bg-[#00ff9f]/10 text-[#00ff9f]'
                      : 'border-white/10 text-white/55 hover:border-white/25'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div>
            <h2 className="text-lg font-semibold">How do we reach you?</h2>
            <p className="mt-1 text-sm text-white/45">Used only to reply with a written scope.</p>
          </div>
          <label className="block text-sm">
            <span className="text-white/45">Name</span>
            <input
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'err-name' : undefined}
              className={`${inputBase} ${errors.name ? inputBad : inputOk}`}
              placeholder="Your name"
              autoComplete="name"
            />
            {errors.name && (
              <p id="err-name" className="mt-2 text-sm text-rose-400" role="alert">
                {errors.name}
              </p>
            )}
          </label>
          <label className="block text-sm">
            <span className="text-white/45">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'err-email' : undefined}
              className={`${inputBase} ${errors.email ? inputBad : inputOk}`}
              placeholder="you@domain.com"
              autoComplete="email"
            />
            {errors.email && (
              <p id="err-email" className="mt-2 text-sm text-rose-400" role="alert">
                {errors.email}
              </p>
            )}
          </label>
          <label className="block text-sm">
            <span className="text-white/45">Phone / text (optional)</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'err-phone' : undefined}
              className={`${inputBase} ${errors.phone ? inputBad : inputOk}`}
              placeholder={site.phoneDisplay}
              autoComplete="tel"
            />
            {errors.phone && (
              <p id="err-phone" className="mt-2 text-sm text-rose-400" role="alert">
                {errors.phone}
              </p>
            )}
          </label>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Review & send</h2>
          <dl className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-white/40">Service</dt>
              <dd className="text-right text-white">{form.service}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-white/40">Budget</dt>
              <dd className="text-right text-white">{form.budget || 'Not specified'}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-white/40">Name</dt>
              <dd className="text-right text-white">{form.name}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-white/40">Email</dt>
              <dd className="text-right text-white">{form.email}</dd>
            </div>
            {form.phone && (
              <div className="flex justify-between gap-4">
                <dt className="text-white/40">Phone</dt>
                <dd className="text-right text-white">{form.phone}</dd>
              </div>
            )}
            <div className="border-t border-white/10 pt-3">
              <dt className="text-white/40">Details</dt>
              <dd className="mt-2 whitespace-pre-wrap text-white/80">{form.message}</dd>
            </div>
          </dl>
          <p className="text-xs text-white/35">
            Sends to {site.email}. No mailing list. Written scope before any invoice.
          </p>
        </div>
      )}

      {banner && step === 3 && (
        <p className="mt-4 text-sm text-rose-400" role="alert">
          {banner}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        {step > 0 ? (
          <button type="button" onClick={back} className="btn-ghost">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        ) : (
          <span />
        )}

        {step < STEPS.length - 1 ? (
          <button type="button" onClick={next} className="btn-primary">
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button type="button" onClick={submit} disabled={status === 'sending'} className="btn-primary">
            {status === 'sending' ? 'Sending…' : 'Request written scope'}
          </button>
        )}
      </div>
    </div>
  );
}

export default function QuoteForm() {
  return (
    <Suspense fallback={<div className="glass h-96 animate-pulse rounded-3xl" aria-hidden />}>
      <QuoteFormInner />
    </Suspense>
  );
}
