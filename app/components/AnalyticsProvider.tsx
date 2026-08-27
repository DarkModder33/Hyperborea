'use client';

import { useEffect } from 'react';
import { track } from '../../lib/analytics';

export default function AnalyticsProvider() {
  useEffect(() => {
    track('page_view', {
      path: window.location.pathname,
      ref: document.referrer || 'direct'
    });
  }, []);

  return null;
}
