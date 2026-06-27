import { useEffect, useRef } from 'react';

/**
 * Dot-matrix фон: сетка точек, дышащая волна от центра + дрейф за курсором.
 * Canvas 2D, DPR-aware, останавливается при prefers-reduced-motion.
 */
const DotField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    const isDark = () => document.documentElement.classList.contains('dark');

    const GAP = 30;
    const pointer = { x: -9999, y: -9999, active: false };
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let t = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * 0.42;
      const dark = isDark();
      const baseAlpha = dark ? 0.22 : 0.14;

      for (let x = GAP / 2; x < width; x += GAP) {
        for (let y = GAP / 2; y < height; y += GAP) {
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // дышащая волна, расходящаяся от центра
          const wave = Math.sin(dist * 0.014 - t * 1.4);
          const pulse = (wave + 1) / 2; // 0..1

          // дрейф за курсором
          let ox = 0;
          let oy = 0;
          let near = 0;
          if (pointer.active) {
            const pdx = x - pointer.x;
            const pdy = y - pointer.y;
            const pd = Math.sqrt(pdx * pdx + pdy * pdy);
            if (pd < 160) {
              near = 1 - pd / 160;
              const push = near * 8;
              ox = (pdx / (pd || 1)) * push;
              oy = (pdy / (pd || 1)) * push;
            }
          }

          const r = 0.7 + pulse * 1.1 + near * 1.6;
          const isHot = near > 0.45 || pulse > 0.93;
          const alpha = baseAlpha * (0.35 + pulse * 0.65) + near * 0.5;

          ctx.beginPath();
          ctx.arc(x + ox, y + oy, r, 0, Math.PI * 2);
          ctx.fillStyle = isHot
            ? `hsl(${accent} / ${Math.min(alpha + 0.35, 0.9)})`
            : dark
              ? `hsl(0 0% 100% / ${alpha})`
              : `hsl(0 0% 0% / ${alpha})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      const dark = isDark();
      for (let x = GAP / 2; x < width; x += GAP) {
        for (let y = GAP / 2; y < height; y += GAP) {
          ctx.beginPath();
          ctx.arc(x, y, 0.9, 0, Math.PI * 2);
          ctx.fillStyle = dark ? 'hsl(0 0% 100% / 0.12)' : 'hsl(0 0% 0% / 0.08)';
          ctx.fill();
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onResize = () => {
      resize();
      if (reduced) drawStatic();
    };

    resize();
    if (reduced) {
      drawStatic();
    } else {
      window.addEventListener('pointermove', onMove, { passive: true });
      window.addEventListener('pointerleave', onLeave);
      raf = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full"
    />
  );
};

export default DotField;
