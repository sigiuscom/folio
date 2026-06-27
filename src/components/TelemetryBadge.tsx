import { useEffect, useState } from 'react';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const pad = (n: number) => String(n).padStart(2, '0');

/** Мини-телеметрия в углу: пульс, UTC-часы и счётчик FPS. */
const TelemetryBadge = () => {
  const [clock, setClock] = useState('--:--:--');
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const tickClock = () => {
      const d = new Date();
      setClock(`${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`);
    };
    tickClock();
    const id = setInterval(tickClock, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (prefersReduced()) return;
    let raf = 0;
    let frames = 0;
    let last = performance.now();
    const loop = (now: number) => {
      frames++;
      if (now - last >= 1000) {
        setFps(Math.round((frames * 1000) / (now - last)));
        frames = 0;
        last = now;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 hidden items-center gap-2.5 rounded-full glass px-3 py-1.5 font-mono text-[0.62rem] tracking-wider text-muted-foreground md:flex">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      <span className="text-foreground/70">{clock}</span>
      <span className="text-border">UTC</span>
      <span className="h-3 w-px bg-border" />
      <span className="tabular-nums text-accent">{fps}</span>
      <span>FPS</span>
    </div>
  );
};

export default TelemetryBadge;
