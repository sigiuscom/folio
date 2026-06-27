import { useEffect, useRef } from 'react';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Кнопка притягивается к курсору в пределах своей области. */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const reset = () => {
      el.style.transform = '';
    };

    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', reset);
    return () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', reset);
    };
  }, [strength]);

  return ref;
}
