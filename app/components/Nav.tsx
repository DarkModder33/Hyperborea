import { site } from '../../lib/site';

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00ff9f] to-[#a855f7] text-sm font-bold text-black">
              H
            </span>
            <span className="text-sm font-semibold tracking-tight">
              {site.name}
              <span className="ml-2 hidden text-white/40 sm:inline">/ TradeHax</span>
            </span>
          </a>
          <div className="flex items-center gap-2 text-sm">
            <a href="/services" className="hidden rounded-full px-3 py-2 text-white/70 transition hover:text-white md:inline">
              Services
            </a>
            <a href="/intelligence" className="hidden rounded-full px-3 py-2 text-white/70 transition hover:text-white md:inline">
              Intelligence
            </a>
            <a href="/contact" className="btn-primary !px-4 !py-2">
              Book work
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
