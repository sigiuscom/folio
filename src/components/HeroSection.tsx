import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <p className="animate-enter text-muted-foreground mb-4 text-sm tracking-wide uppercase">
          {t('hero.description')}
        </p>

        <h1
          className="animate-enter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
          style={{ animationDelay: '0.1s' }}
        >
          {t('hero.title')}
        </h1>

        <p
          className="animate-enter text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-light"
          style={{ animationDelay: '0.2s' }}
        >
          {t('hero.subtitle')}
        </p>

        <div className="animate-enter" style={{ animationDelay: '0.3s' }}>
          <a
            href="#contact"
            className="inline-block border-2 border-foreground px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
