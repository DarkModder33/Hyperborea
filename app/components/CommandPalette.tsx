'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Search, ArrowRight, Wrench, Code2, Shield, BookOpen, Package, Mail } from 'lucide-react';
import { track } from '../../lib/analytics';

const ACTIONS = [
  { id: 'est-screen', label: 'Estimate: iPhone screen broken', href: '/?q=iPhone%20screen%20broken#estimate', icon: Wrench, group: 'Estimate' },
  { id: 'est-water', label: 'Estimate: laptop water damage', href: '/?q=laptop%20water%20damage#estimate', icon: Wrench, group: 'Estimate' },
  { id: 'est-site', label: 'Estimate: need a landing page', href: '/?q=Need%20a%20landing%20page#estimate', icon: Code2, group: 'Estimate' },
  { id: 'est-app', label: 'Estimate: build a mobile app', href: '/?q=Build%20a%20mobile%20app#estimate', icon: Code2, group: 'Estimate' },
  { id: 'nav-services', label: 'Open Services', href: '/services', icon: Code2, group: 'Navigate' },
  { id: 'nav-care', label: 'Open Care retainer', href: '/care', icon: Shield, group: 'Navigate' },
  { id: 'nav-mail', label: 'Mail-in guide', href: '/mail-in', icon: Package, group: 'Navigate' },
  { id: 'nav-insights', label: 'Insights', href: '/insights', icon: BookOpen, group: 'Navigate' },
  { id: 'nav-contact', label: 'Request a scope', href: '/contact', icon: Mail, group: 'Navigate' },
  { id: 'nav-portfolio', label: 'Portfolio', href: '/portfolio', icon: ArrowRight, group: 'Navigate' }
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ACTIONS;
    return ACTIONS.filter((a) => a.label.toLowerCase().includes(q) || a.group.toLowerCase().includes(q));
  }, [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActive(0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
        track('cta_click', { placement: 'command_palette_toggle' });
      }
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  function go(href: string, id: string) {
    track('cta_click', { placement: 'command_palette', id });
    close();
    window.location.href = href;
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          track('cta_click', { placement: 'command_palette_button' });
        }}
        className="fixed bottom-20 right-4 z-50 hidden items-center gap-2 rounded-full border border-white/15 bg-black/80 px-3 py-2 text-xs text-white/50 shadow-lg backdrop-blur-xl transition hover:border-[#00ff9f]/40 hover:text-[#00ff9f] md:bottom-6 md:flex"
        aria-label="Open command palette"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="mono tracking-wide">⌘K</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm" onClick={close}>
      <div
        className="glass-strong glow-ring w-full max-w-lg overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <Search className="h-4 w-4 text-[#00ff9f]" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActive((i) => Math.min(i + 1, filtered.length - 1));
              }
              if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActive((i) => Math.max(i - 1, 0));
              }
              if (e.key === 'Enter' && filtered[active]) {
                e.preventDefault();
                go(filtered[active].href, filtered[active].id);
              }
            }}
            placeholder="Jump to estimate, services, care…"
            className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/35"
          />
          <kbd className="mono hidden rounded border border-white/15 px-1.5 py-0.5 text-[10px] text-white/35 sm:inline">ESC</kbd>
        </div>
        <div className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-white/40">No matches</p>
          )}
          {filtered.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onMouseEnter={() => setActive(i)}
              onClick={() => go(item.href, item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                i === active ? 'bg-[#00ff9f]/12 text-white' : 'text-white/70 hover:bg-white/5'
              }`}
            >
              <item.icon className={`h-4 w-4 shrink-0 ${i === active ? 'text-[#00ff9f]' : 'text-white/35'}`} />
              <span className="flex-1">{item.label}</span>
              <span className="mono text-[10px] text-white/30">{item.group}</span>
            </button>
          ))}
        </div>
        <div className="border-t border-white/8 px-4 py-2 mono text-[10px] tracking-wide text-white/30">
          ↑↓ navigate · enter open · esc close
        </div>
      </div>
    </div>
  );
}
