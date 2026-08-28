import Script from 'next/script';

/**
 * Plausible Analytics
 * 1. Create site at https://plausible.io for domain tradehax.net
 * 2. Optional: add www.tradehax.net as an alias in Plausible site settings
 * Funnel events (estimate_*, cta_click, quote_submit, phone_click) fire via lib/analytics track()
 */
export default function Plausible() {
  return (
    <>
      <Script
        defer
        data-domain="tradehax.net"
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
      {/* Queue API before script loads so early track() calls are not dropped */}
      <Script id="plausible-init" strategy="beforeInteractive">{
        `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`
      }</Script>
    </>
  );
}
