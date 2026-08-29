'use client';

import { useEffect, useState } from 'react';

const TICKERS = [
  { s: 'SIM-A', c: 0.42, r: 'low' },
  { s: 'SIM-B', c: -1.15, r: 'med' },
  { s: 'SIM-C', c: 2.08, r: 'high' },
  { s: 'SIM-D', c: 0.11, r: 'low' },
  { s: 'SIM-E', c: -0.67, r: 'med' },
  { s: 'SIM-F', c: 1.34, r: 'med' }
];

export default function ScannerDemo() {
  const [rows, setRows] = useState(TICKERS);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setRows((prev) =>
        prev.map((r) => ({
          ...r,
          c: Math.round((r.c + (Math.random() - 0.5) * 0.35) * 100) / 100
        }))
      );
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass-strong relative overflow-hidden rounded-3xl p-5 sm:p-6">
      <div className="scan-overlay" />
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="pulse-dot relative h-2 w-2 rounded-full bg-[#a855f7]" />
          <span className="mono text-[10px] tracking-[0.2em] text-white/50">SCANNER · SIMULATION</span>
        </div>
        <span className="mono text-[10px] text-white/30">tick {tick}</span>
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.s}
            className="flex items-center justify-between rounded-xl border border-white/8 bg-black/40 px-4 py-2.5"
          >
            <span className="mono text-sm text-white/80">{r.s}</span>
            <span className={`mono text-sm ${r.c >= 0 ? 'text-[#00ff9f]' : 'text-rose-400'}`}>
              {r.c >= 0 ? '+' : ''}
              {r.c.toFixed(2)}%
            </span>
            <span className="mono text-[10px] uppercase tracking-wider text-white/30">{r.r}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] text-white/35">
        Synthetic labels only. Not live markets. Not a broker. Research interface preview.
      </p>
    </div>
  );
}
