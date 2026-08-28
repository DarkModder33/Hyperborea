const ITEMS = [
  { label: 'ACCEPTING WORK', hot: true },
  { label: 'Screen repair', hot: false },
  { label: 'Water recovery', hot: false },
  { label: 'Data rescue', hot: false },
  { label: 'Landing pages', hot: false },
  { label: 'Mobile apps', hot: false },
  { label: 'AI integrations', hot: false },
  { label: 'Shopify / Stripe', hot: false },
  { label: 'Unbricking', hot: false },
  { label: 'Remote guitar', hot: false },
  { label: 'Care $250/mo', hot: true },
  { label: 'Mail-in nationwide', hot: false },
  { label: 'Scope ≤ 24h', hot: true },
  { label: 'Web3 hooks', hot: false },
  { label: 'Battery & ports', hot: false },
  { label: 'Founder-led', hot: false }
];

type Props = { className?: string };

export default function Marquee({ className = '' }: Props) {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className={`relative overflow-hidden border-b border-[#00ff9f]/15 bg-gradient-to-r from-black via-[#00ff9f]/[0.04] to-black ${className}`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--void)] to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--void)] to-transparent sm:w-28" />
      <div className="marquee-track items-center gap-10 px-6 py-4">
        {row.map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            className={`marquee-item shrink-0 tracking-[0.14em] ${
              item.hot ? 'text-[#00ff9f]' : 'text-white/55'
            }`}
          >
            <span className="marquee-diamond" aria-hidden>
              ◆
            </span>
            {item.label.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
