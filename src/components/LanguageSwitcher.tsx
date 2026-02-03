import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 glass rounded-full px-3 py-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-sm font-mono transition-all duration-300 rounded ${
          language === 'en'
            ? 'text-primary glow-primary'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground/50">|</span>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-2 py-1 text-sm font-mono transition-all duration-300 rounded ${
          language === 'ru'
            ? 'text-primary glow-primary'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
