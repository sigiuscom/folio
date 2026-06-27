import { useEffect, useState } from 'react';

/** Тонкая акцентная полоса прогресса скролла вверху страницы. */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-px bg-transparent" aria-hidden="true">
      <div
        className="h-full origin-left bg-accent shadow-glow-sm transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})`, width: '100%' }}
      />
    </div>
  );
};

export default ScrollProgress;
