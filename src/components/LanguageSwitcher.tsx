import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 text-sm font-body">
      <button
        onClick={() => setLanguage('en')}
        className={`transition-colors duration-200 ${
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
        className={`transition-colors duration-200 ${
          language === 'ru'
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
