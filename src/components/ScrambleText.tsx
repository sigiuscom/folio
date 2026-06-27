import { ElementType, useEffect, useRef, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}=+*^?#%';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

interface ScrambleTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
}

/** Текст «декодируется»: символы прокручиваются и слева направо застывают на финале. */
const ScrambleText = ({
  text,
  as: Tag = 'span',
  className,
  style,
  delay = 0,
  duration = 900,
}: ScrambleTextProps) => {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (prefersReduced()) {
      setDisplay(text);
      return;
    }

    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const revealed = Math.floor(progress * text.length);

      let out = '';
      for (let i = 0; i < text.length; i++) {
        if (i < revealed || text[i] === ' ') out += text[i];
        else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setDisplay(out);

      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };

    timerRef.current = setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [text, delay, duration]);

  return (
    <Tag className={className} style={style}>
      {display}
    </Tag>
  );
};

export default ScrambleText;
