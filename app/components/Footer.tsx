import { site } from '../../lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="text-sm font-semibold text-white">{site.brand}</p>
          <p className="mt-2 text-sm text-white/45">{site.tagline}</p>
          <p className="mt-4 text-sm text-white/35">{site.region}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs uppercase tracking-[0.14em] text-white/35">Contact</p>
          <a className="block text-white/70 transition hover:text-[#00ff9f]" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="block text-white/70 transition hover:text-[#00ff9f]" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs uppercase tracking-[0.14em] text-white/35">Site</p>
          <a className="block text-white/70 transition hover:text-[#00ff9f]" href="/services">
            Services
          </a>
          <a className="block text-white/70 transition hover:text-[#00ff9f]" href="/portfolio">
            Portfolio
          </a>
          <a className="block text-white/70 transition hover:text-[#00ff9f]" href="/about">
            About
          </a>
          <a className="block text-white/70 transition hover:text-[#00ff9f]" href="/contact">
            Contact
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs uppercase tracking-[0.14em] text-white/35">Legal & social</p>
          <a className="block text-white/70 transition hover:text-[#00ff9f]" href="/privacy">
            Privacy
          </a>
          <a className="block text-white/70 transition hover:text-[#00ff9f]" href="/terms">
            Terms
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-white/50">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-[#00ff9f]">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-white/30">
        © {new Date().getFullYear()} TradeHax · Simulation research only · Not a broker · Not investment advice ·
        SSL via Cloudflare
      </div>
    </footer>
  );
}
