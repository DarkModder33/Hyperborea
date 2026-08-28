/**
 * Conversion analytics for static Cloudflare deploy.
 * - sessionStorage buffer + console for local debug
 * - Plausible custom events when script is loaded
 * - gtag passthrough if present
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
    sessionStorage.setItem(BUFFER_KEY, JSON.stringify(list.slice(-40)));
  } catch {
    /* ignore quota */
  }
}

/** Plausible only accepts string prop values in practice */
function toPlausibleProps(props: Props): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(props)) {
    if (v === undefined) continue;
    out[k] = String(v).slice(0, 120);
  }
  return out;
}

export function track(event: AnalyticsEvent, props: Props = {}) {
  if (typeof window === 'undefined') return;
  const payload = { event, props, t: Date.now() };
  pushBuffer(payload);

  // eslint-disable-next-line no-console
  console.info('[TradeHax]', event, props);

  const w = window as Window & {
    plausible?: ((n: string, o?: { props?: Record<string, string> }) => void) & {
      q?: unknown[];
    };
  };

  if (typeof w.plausible === 'function') {
    // Skip page_view — Plausible script records pageviews automatically
    if (event !== 'page_view') {
      w.plausible(event, { props: toPlausibleProps(props) });
    }
  }

  const g = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof g.gtag === 'function' && event !== 'page_view') {
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
