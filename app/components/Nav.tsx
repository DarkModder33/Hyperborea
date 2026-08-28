import { site } from '../../lib/site';

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="/" className="flex items-center gap-3">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00ff9f] to-[#a855f7] text-sm font-bold text-black shadow-[0_0_20px_rgba(0,255,159,0.25)]">
              TH
            </span>
            <span className="text-sm font-semibold tracking-tight">
              TradeHax
              <span className="ml-2 hidden text-white/40 sm:inline">/ Hyperion</span>
            </span>
          </a>
          <div className="flex items-center gap-1 text-sm sm:gap-2">
            <a href="/services" className="hidden rounded-full px-3 py-2 text-white/70 transition hover:text-white md:inline">
              Services
            </a>
            <a href="/portfolio" className="hidden rounded-full px-3 py-2 text-white/70 transition hover:text-white md:inline">
              Portfolio
            </a>
            <a href="/about" className="hidden rounded-full px-3 py-2 text-white/70 transition hover:text-white md:inline">
              About
            </a>
            <a href="/intelligence" className="hidden rounded-full px-3 py-2 text-white/70 transition hover:text-white lg:inline">
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
