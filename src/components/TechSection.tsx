import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const technologies = [
  'Kubernetes',
  'Docker',
  'Helm',
  'Terraform',
  'Ansible',
  'AWS',
  'Azure',
  'GCP',
  'GitHub Actions',
  'GitLab CI',
  'Prometheus',
  'Grafana',
  'Loki',
  'Keycloak',
  'OAuth2',
  'OIDC',
  'Linux',
  'Networking',
  'AI / LLM',
  'MLOps',
];

const TechSection = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="tech" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-gradient"
        >
          {t('tech.title')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              variants={itemVariants}
              className="px-4 py-2 glass rounded-full text-sm font-mono text-foreground/80 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
