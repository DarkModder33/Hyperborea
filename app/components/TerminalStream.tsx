'use client';

import { useEffect, useState } from 'react';

const LINES = [
  '> hyperion.init — operator online',
  '> queue: ACCEPTING',
  '> sla: scope ≤ 24h',
  '> modes: remote · mail-in · local',
  '> surface: repairs · builds · care · lessons',
  '> estimate → scope → ship → retain'
];

export default function TerminalStream() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count >= LINES.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), 420);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div className="mono relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-4 text-[11px] leading-relaxed text-[#00ff9f]/90 sm:text-xs">
      <div className="scan-overlay" />
      {LINES.slice(0, count).map((line) => (
        <div key={line} className="opacity-90">
          {line}
        </div>
      ))}
      {count < LINES.length ? (
        <span className="terminal-cursor" />
      ) : (
        <div className="mt-1 text-white/35">
          ready<span className="terminal-cursor" />
        </div>
      )}
    </div>
  );
}
