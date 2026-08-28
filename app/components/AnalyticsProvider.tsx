'use client';

import { useEffect } from 'react';
import { track } from '../../lib/analytics';

/**
 * Pageviews are handled by Plausible's script.
 * This only records a local session breadcrumb for debugging.
 */
export default function AnalyticsProvider() {
  useEffect(() => {
    // Local buffer only — do not emit page_view as a Plausible custom event
    try {
      const raw = sessionStorage.getItem('thx_events');
      const list = raw ? JSON.parse(raw) : [];
      list.push({ event: 'page_view', props: { path: window.location.pathname }, t: Date.now() });
      sessionStorage.setItem('thx_events', JSON.stringify(list.slice(-40)));
    } catch {
      /* ignore */
    }
  }, []);

  return null;
}
