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
        <h2 className={`fade-ready text-sm tracking-wide uppercase text-muted-foreground mb-12${inView ? ' in-view' : ''}`}>
          {t('services.title')}
        </h2>

        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`fade-ready py-6 border-b border-border group flex items-baseline gap-6${inView ? ' in-view' : ''}`}
              style={{ transitionDelay: inView ? `${index * 0.08}s` : '0s' }}
            >
              <span className="text-muted-foreground text-sm font-body tabular-nums">
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
