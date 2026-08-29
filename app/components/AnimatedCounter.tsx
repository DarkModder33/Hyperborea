'use client';

import { useEffect, useRef, useState } from 'react';

/** Displays a static label with a soft count-up when numeric prefix exists */
export default function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(value);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = value.match(/^(\$?)(\d+)(.*)$/);
    if (!match) {
      setShown(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr, 10);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done) return;
        setDone(true);
        const start = performance.now();
        const duration = 900;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = Math.round(target * eased);
          setShown(`${prefix}${current}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
          else setShown(value);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [value, done]);

  return (
    <div ref={ref} className="px-6 py-9 text-center transition hover:bg-white/[0.03]">
      <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{shown}</p>
      <p className="mt-2 mono text-[10px] uppercase tracking-[0.2em] text-white/35">{label}</p>
    </div>
  );
}
