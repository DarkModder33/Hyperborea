'use client';

import { useEffect, useState } from 'react';

const LINES = [
  'HYPERION // boot',
  'loading execution surface…',
  'queue: online',
  'estimate engine: ready',
  'operator: connected'
];

export default function BootSequence() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('thx_booted')) return;
      sessionStorage.setItem('thx_booted', '1');
      setShow(true);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    if (step < LINES.length) {
      const t = setTimeout(() => setStep((s) => s + 1), 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShow(false), 520);
    return () => clearTimeout(t);
  }, [show, step]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020203]">
      <div className="mono w-full max-w-md px-6 text-sm text-[#00ff9f]">
        {LINES.slice(0, step).map((line) => (
          <div key={line} className="py-0.5 opacity-90">
            {line}
          </div>
        ))}
        {step < LINES.length && <span className="terminal-cursor" />}
        {step >= LINES.length && (
          <div className="mt-4 text-white/40">surface unlocked</div>
        )}
      </div>
    </div>
  );
}
