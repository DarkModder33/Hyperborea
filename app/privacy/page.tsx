import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../../lib/site';

export default function PrivacyPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">LEGAL</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Privacy policy</h1>
        <p className="mt-3 text-sm text-white/40">Last updated: August 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/60">
          <div>
            <h2 className="text-lg font-semibold text-white">Who we are</h2>
            <p className="mt-2">
              TradeHax / Hyperion is operated by Michael O&apos;Flaherty ({site.region}). Contact:{' '}
              <a href={`mailto:${site.email}`} className="text-[#00ff9f]">
                {site.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">What we collect</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Contact details you submit (name, email, phone, message) via quote forms.</li>
              <li>Basic technical data from hosting/CDN (IP, user agent, pages viewed) as processed by Cloudflare.</li>
              <li>Optional analytics events in your browser session used to improve conversion flows (estimate interactions, CTA clicks). These are not sold.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">How we use it</h2>
            <p className="mt-2">
              To respond to quote requests, deliver services you hire us for, improve the site, and meet legal
              obligations. We do not sell personal information. Form submissions are processed via FormSubmit
              and/or email to {site.email}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Third parties</h2>
            <p className="mt-2">
              Cloudflare (hosting, CDN, security). FormSubmit (form delivery). Payment processors only if you
              explicitly pay for a scoped job (e.g. Stripe/PayPal when used). Social platforms if you choose to
              visit our linked profiles.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Retention</h2>
            <p className="mt-2">
              Quote and project correspondence is kept as long as needed for the job and basic record-keeping,
              then deleted or archived when no longer required.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Your choices</h2>
            <p className="mt-2">
              Email {site.email} to request access, correction, or deletion of personal data you have sent us,
              subject to legal limits.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Market / research tools</h2>
            <p className="mt-2">
              Any simulation or research interfaces on this site are educational only. They are not a broker,
              do not route live orders, and do not constitute investment advice.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
