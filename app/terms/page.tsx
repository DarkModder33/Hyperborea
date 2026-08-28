import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../../lib/site';

export default function TermsPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">LEGAL</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Terms of service</h1>
        <p className="mt-3 text-sm text-white/40">Last updated: August 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/60">
          <div>
            <h2 className="text-lg font-semibold text-white">Agreement</h2>
            <p className="mt-2">
              By using tradehax.net / tradehaxai.tech or hiring TradeHax, you agree to these terms. Operator:
              Michael O&apos;Flaherty. Contact: {site.email}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Services</h2>
            <p className="mt-2">
              Device repair, data recovery, custom development, automation, retainers, and remote lessons are
              provided under a written scope when engaged. Estimates on the site are ranges only; final price is
              confirmed before work begins.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Payment & scope</h2>
            <p className="mt-2">
              Work starts after agreement on scope and payment terms. Deposits may be required for larger builds.
              Changes outside the written scope may require a change order and additional fees.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Hardware & data</h2>
            <p className="mt-2">
              Repair and recovery involve risk. We take reasonable care but cannot guarantee recovery of all data
              or restoration of every device. Back up critical data before mail-in when possible. You confirm you
              own or are authorized to service devices you send.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Research tools disclaimer</h2>
            <p className="mt-2">
              Market and simulation features are for education and research only. Not a broker. Not investment
              advice. No live order routing. You are solely responsible for any decisions you make.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Limitation of liability</h2>
            <p className="mt-2">
              To the maximum extent permitted by law, liability is limited to fees paid for the specific scoped
              job giving rise to the claim. We are not liable for indirect or consequential damages.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-2">
              Questions: {site.email} · {site.phoneDisplay}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
