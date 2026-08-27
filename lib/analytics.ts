/**
 * Lightweight conversion analytics for static Cloudflare deploy.
 * Events are logged to console + session buffer so you can measure funnel later
 * (Plausible/GA/custom endpoint can be wired to the same track() call).
 */

export type AnalyticsEvent =
  | 'page_view'
  | 'estimate_open'
  | 'estimate_prompt_click'
  | 'estimate_result'
  | 'estimate_book_click'
  | 'cta_click'
  | 'quote_submit'
  | 'phone_click'
  | 'email_click';

type Props = Record<string, string | number | boolean | undefined>;

const BUFFER_KEY = 'thx_events';

function pushBuffer(entry: { event: AnalyticsEvent; props: Props; t: number }) {
  if (typeof window === 'undefined') return;
  try {
    const raw = sessionStorage.getItem(BUFFER_KEY);
    const list: unknown[] = raw ? JSON.parse(raw) : [];
    list.push(entry);
    // keep last 40 events in session
    sessionStorage.setItem(BUFFER_KEY, JSON.stringify(list.slice(-40)));
  } catch {
    /* ignore quota */
  }
}

export function track(event: AnalyticsEvent, props: Props = {}) {
  if (typeof window === 'undefined') return;
  const payload = { event, props, t: Date.now() };
  pushBuffer(payload);

  // Always visible in devtools for operator review
  // eslint-disable-next-line no-console
  console.info('[TradeHax]', event, props);

  // Optional: Plausible custom events if script is present
  const w = window as Window & { plausible?: (n: string, o?: { props?: Props }) => void };
  if (typeof w.plausible === 'function') {
    w.plausible(event, { props });
  }

  // Optional: gtag if present
  const g = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof g.gtag === 'function') {
    g.gtag('event', event, props);
  }
}

export function getSessionEvents() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = sessionStorage.getItem(BUFFER_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** Intent written by InstantEstimate, read by QuoteForm */
export const ESTIMATE_KEY = 'thx_estimate';

export type EstimateIntent = {
  query: string;
  title: string;
  range: string;
  icon: string;
  at: number;
};

export function saveEstimateIntent(intent: EstimateIntent) {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(ESTIMATE_KEY, JSON.stringify(intent));
  } catch {
    /* ignore */
  }
}

export function readEstimateIntent(): EstimateIntent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(ESTIMATE_KEY);
    return raw ? (JSON.parse(raw) as EstimateIntent) : null;
  } catch {
    return null;
  }
}
