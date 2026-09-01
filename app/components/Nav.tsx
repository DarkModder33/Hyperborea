'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/care', label: 'Care' },
  { href: '/portfolio', label: 'Work' },
  { href: '/insights', label: 'Guides' },
  { href: '/mail-in', label: 'Mail-in' },
  { href: '/about', label: 'About' }
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3" aria-label="Main">
          <a href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00ff9f] to-[#a855f7] text-sm font-bold text-black">
              TH
            </span>
            <span className="text-sm font-semibold tracking-tight">TradeHax</span>
          </a>

          <div className="hidden items-center gap-1 text-sm md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-white/70 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a href="/contact" className="btn-primary !px-4 !py-2">
              Request scope
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a href="/contact" className="btn-primary !px-3 !py-2 text-xs">
              Scope
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl p-3 md:hidden">
            <div className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
                Request a written scope
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
