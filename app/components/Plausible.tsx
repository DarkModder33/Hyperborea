import Script from 'next/script';

/**
 * Privacy-friendly analytics by Plausible
 * Site-specific loader from plausible.io dashboard
 */
export default function Plausible() {
  return (
    <>
      <Script
        async
        src="https://plausible.io/js/pa-UaGwCGBAxey2b_v_E0KBI.js"
        strategy="afterInteractive"
      />
      <Script id="plausible-init" strategy="beforeInteractive">{
        `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`
      }</Script>
    </>
  );
}
