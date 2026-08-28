const ITEMS = [
  'Screen repair',
  'Water recovery',
  'Data rescue',
  'Landing pages',
  'Mobile apps',
  'AI bots',
  'Shopify flows',
  'Unbricking',
  'Remote lessons',
  'Care retainers',
  'Mail-in service',
  '24h scope',
  'Web3 hooks',
  'Battery & ports'
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-black/40 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--void)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--void)] to-transparent" />
      <div className="marquee-track gap-8 px-4">
        {row.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="mono shrink-0 text-[11px] tracking-[0.2em] text-white/35"
          >
            <span className="mr-3 text-[#00ff9f]/70">◆</span>
            {label.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
