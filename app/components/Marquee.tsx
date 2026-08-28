const ITEMS = [
  'ACCEPTING WORK',
  'Screen repair',
  'Water recovery',
  'Data rescue',
  'Landing pages',
  'Mobile apps',
  'AI integrations',
  'Shopify / Stripe',
  'Unbricking',
  'Remote guitar',
  'Care retainers $250/mo',
  'Mail-in nationwide',
  'Scope ≤ 24h',
  'Web3 hooks',
  'Battery & ports',
  'Founder-led'
];

type Props = {
  className?: string;
};

export default function Marquee({ className = '' }: Props) {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className={`relative overflow-hidden border-b border-white/8 bg-black/50 ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--void)] to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--void)] to-transparent sm:w-20" />
      <div className="marquee-track gap-8 px-4 py-3">
        {row.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className={`mono shrink-0 text-[11px] tracking-[0.18em] ${
              label === 'ACCEPTING WORK' ? 'text-[#00ff9f]' : 'text-white/40'
            }`}
          >
            <span className="mr-3 text-[#00ff9f]/80">◆</span>
            {label.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
