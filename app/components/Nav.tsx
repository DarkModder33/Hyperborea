import { site } from '../../lib/site';

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#00ff9f] to-[#a855f7] text-sm font-bold text-black">
            H
          </div>
          <span className="text-lg font-semibold tracking-tight">{site.name}</span>
        </a>
        <div className="flex items-center gap-5 text-sm">
          <a href="/services" className="hidden text-white/70 transition hover:text-[#00ff9f] sm:inline">
            Services
          </a>
          <a href="/intelligence" className="hidden text-white/70 transition hover:text-[#00ff9f] sm:inline">
            Intelligence
          </a>
          <a
            href="/contact"
            className="rounded-full bg-[#00ff9f] px-4 py-2 font-semibold text-black transition hover:bg-white"
          >
            Book work
          </a>
        </div>
      </div>
    </nav>
  );
}
