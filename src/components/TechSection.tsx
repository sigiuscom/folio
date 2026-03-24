import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/use-in-view';

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
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="tech" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl">
        <h2 className={`fade-ready text-sm tracking-wide uppercase text-muted-foreground mb-12${inView ? ' in-view' : ''}`}>
          {t('tech.title')}
        </h2>

        <p
          className={`fade-ready text-2xl md:text-3xl font-display font-medium leading-relaxed max-w-4xl${inView ? ' in-view' : ''}`}
          style={{ transitionDelay: inView ? '0.1s' : '0s' }}
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
        </p>
      </div>
    </section>
  );
};

export default TechSection;
