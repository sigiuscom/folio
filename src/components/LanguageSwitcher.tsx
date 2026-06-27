import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 rounded-full glass px-2 py-1 font-mono text-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`min-w-[40px] min-h-[36px] rounded-full flex items-center justify-center transition-colors duration-200 ${
          language === 'en'
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <span className="text-border">/</span>
      <button
        onClick={() => setLanguage('ru')}
        className={`min-w-[40px] min-h-[36px] rounded-full flex items-center justify-center transition-colors duration-200 ${
          language === 'ru'
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        RU
      </button>
      <span className="mx-1 h-4 w-px bg-border" />
      <button
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="min-w-[40px] min-h-[36px] rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {mounted && (resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
