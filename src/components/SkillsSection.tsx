import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const skills = [
  'devops',
  'cloud',
  'kubernetes',
  'cicd',
  'observability',
  'security',
  'ai',
  'platform',
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-wide uppercase text-muted-foreground mb-12"
        >
          {t('skills.title')}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
          {skills.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="py-4 border-b border-border group"
            >
              <span className="text-lg font-display font-medium group-hover:text-accent transition-colors duration-200">
                {t(`skills.${key}`)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
