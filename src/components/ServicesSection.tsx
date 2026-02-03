import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    t('services.1'),
    t('services.2'),
    t('services.3'),
    t('services.4'),
    t('services.5'),
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-wide uppercase text-muted-foreground mb-12"
        >
          {t('services.title')}
        </motion.h2>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="py-6 border-b border-border group flex items-baseline gap-6"
            >
              <span className="text-muted-foreground text-sm font-body tabular-nums">
                0{index + 1}
              </span>
              <span className="text-xl md:text-2xl font-display font-medium group-hover:text-accent transition-colors duration-200">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
