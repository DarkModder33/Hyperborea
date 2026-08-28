'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      el.classList.add('active');
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    const onLeave = () => el.classList.remove('active');

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden />;
}
