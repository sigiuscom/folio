import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/use-in-view';

const ServicesSection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  const services = [
    t('services.1'),
    t('services.2'),
    t('services.3'),
    t('services.4'),
    t('services.5'),
  ];

  return (
    <section ref={ref} id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl">
        <h2 className={`fade-ready font-mono-label text-accent mb-12 flex items-center gap-3${inView ? ' in-view' : ''}`}>
          <span className="text-muted-foreground">//</span>
          {t('services.title')}
        </h2>

        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`fade-ready relative py-6 border-b border-border group flex items-baseline gap-6 transition-colors duration-300 hover:pl-3${inView ? ' in-view' : ''}`}
              style={{ transitionDelay: inView ? `${index * 0.08}s` : '0s' }}
            >
              <span className="absolute left-0 top-1/2 h-0 w-px -translate-y-1/2 bg-accent transition-all duration-300 group-hover:h-2/3" />
              <span className="text-accent text-2xl md:text-3xl font-display font-bold tabular-nums leading-none">
                0{index + 1}
              </span>
              <span className="text-xl md:text-2xl font-display font-medium group-hover:text-accent transition-colors duration-200">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
