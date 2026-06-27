import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-28 md:pt-24">
      <div className="max-w-4xl">
        <p
          className="animate-enter font-mono-label text-accent mb-6 flex items-center gap-2.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="accent-cursor text-muted-foreground">{t('hero.description')}</span>
        </p>

        <h1
          className="animate-enter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.05] mb-7 text-glow"
          style={{ animationDelay: '0.1s' }}
        >
          {t('hero.title')}
        </h1>

        <p
          className="animate-enter text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed"
          style={{ animationDelay: '0.2s' }}
        >
          {t('hero.subtitle')}
        </p>

        <div className="animate-enter flex flex-wrap items-center gap-4" style={{ animationDelay: '0.3s' }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-mono-label text-accent-foreground transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
          >
            {t('hero.cta')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
          </a>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-mono-label text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-foreground"
          >
            {t('hero.explore')}
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-6 md:left-12 lg:left-24 hidden items-center gap-3 font-mono-label text-muted-foreground md:flex">
        <span className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
        {t('hero.scroll')}
      </div>
    </section>
  );
};

export default HeroSection;
