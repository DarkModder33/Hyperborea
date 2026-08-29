const ROWS = [
  { label: 'Price clarity before work', us: true, them: false },
  { label: 'Instant estimate on-site', us: true, them: false },
  { label: 'Founder does the work', us: true, them: false },
  { label: '24h scope target', us: true, them: false },
  { label: 'Mail-in + remote pipeline', us: true, them: false },
  { label: 'Account managers & layers', us: false, them: true },
  { label: 'Open-ended hourly fog', us: false, them: true },
  { label: 'Retainer path after launch', us: true, them: false }
];

export default function CompareMatrix() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <p className="mono text-xs tracking-[0.2em] text-[#00ff9f]">COMPARISON</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        TradeHax vs a typical agency stack.
      </h2>
      <p className="mt-3 max-w-xl text-sm text-white/45">
        Same market. Different operating system.
      </p>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
        <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] gap-px bg-white/10 text-center text-xs font-medium uppercase tracking-wider">
          <div className="bg-black/80 px-4 py-3 text-left text-white/40">Capability</div>
          <div className="bg-[#00ff9f]/15 px-4 py-3 text-[#00ff9f]">TradeHax</div>
          <div className="bg-black/80 px-4 py-3 text-white/40">Typical agency</div>
        </div>
        {ROWS.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[1.4fr_0.8fr_0.8fr] gap-px border-t border-white/5 bg-white/5 text-sm"
          >
            <div className="bg-[var(--void)] px-4 py-3.5 text-left text-white/70">{row.label}</div>
            <div className="bg-[var(--void)] px-4 py-3.5 text-center">
              <span className={row.us ? 'text-[#00ff9f]' : 'text-white/25'}>{row.us ? '●' : '○'}</span>
            </div>
            <div className="bg-[var(--void)] px-4 py-3.5 text-center">
              <span className={row.them ? 'text-white/50' : 'text-white/20'}>{row.them ? '●' : '○'}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
