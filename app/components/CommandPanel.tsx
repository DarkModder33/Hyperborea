const ROWS = [
  { k: 'Queue', v: 'ACCEPTING', c: 'text-[#00ff9f]' },
  { k: 'Scope SLA', v: '≤ 24h', c: 'text-white' },
  { k: 'Delivery', v: 'REMOTE · MAIL-IN', c: 'text-[#c084fc]' },
  { k: 'Operator', v: 'FOUNDER-LED', c: 'text-white/80' }
];

export default function CommandPanel() {
  return (
    <div className="glass-strong glow-ring float-soft relative overflow-hidden rounded-3xl p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="pulse-dot relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-[#00ff9f]" />
          </span>
          <span className="mono text-[10px] tracking-[0.2em] text-white/50">HYPERION.OPS</span>
        </div>
        <span className="mono rounded-full border border-[#00ff9f]/25 bg-[#00ff9f]/10 px-2.5 py-0.5 text-[10px] tracking-widest text-[#00ff9f]">
          LIVE
        </span>
      </div>

      <div className="space-y-2.5">
        {ROWS.map((row) => (
          <div
            key={row.k}
            className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/40 px-4 py-3"
          >
            <span className="text-sm text-white/45">{row.k}</span>
            <span className={`mono text-xs tracking-wide ${row.c}`}>{row.v}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          { h: 72, l: 'REPAIR' },
          { h: 48, l: 'BUILD' },
          { h: 88, l: 'CARE' }
        ].map((bar) => (
          <div key={bar.l} className="rounded-xl border border-white/8 bg-black/30 p-3">
            <div className="mb-2 flex h-14 items-end overflow-hidden rounded-md bg-white/5">
              <div
                className="w-full rounded-md bg-gradient-to-t from-[#00ff9f]/50 to-[#a855f7]/25"
                style={{ height: `${bar.h}%` }}
              />
            </div>
            <p className="mono text-[9px] tracking-widest text-white/35">{bar.l}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-white/35">
        Execution desk view. Same standard as client delivery — scoped, tracked, shipped.
      </p>
    </div>
  );
}
