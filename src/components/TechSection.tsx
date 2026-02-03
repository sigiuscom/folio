import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const technologies = [
  'Kubernetes', 'Docker', 'Helm', 'Terraform', 'Ansible',
  'AWS', 'Azure', 'GCP',
  'GitHub Actions', 'GitLab CI',
  'Prometheus', 'Grafana', 'Loki',
  'Keycloak', 'OAuth2', 'OIDC',
  'Linux', 'Networking',
  'AI / LLM', 'MLOps',
];

const TechSection = () => {
  const { t } = useLanguage();

  return (
    <section id="tech" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-wide uppercase text-muted-foreground mb-12"
        >
          {t('tech.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl font-display font-medium leading-relaxed max-w-4xl"
        >
          {technologies.map((tech, index) => (
            <span key={tech}>
              <span className="hover:text-accent transition-colors duration-200 cursor-default">
                {tech}
              </span>
              {index < technologies.length - 1 && (
                <span className="text-muted-foreground"> · </span>
              )}
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  );
};

export default TechSection;
