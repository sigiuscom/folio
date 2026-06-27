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
        <h2 className={`fade-ready font-mono-label text-accent mb-12 flex items-center gap-3${inView ? ' in-view' : ''}`}>
          <span className="text-muted-foreground">//</span>
          {t('tech.title')}
        </h2>

        <div
          className={`fade-ready glass-shell${inView ? ' in-view' : ''}`}
          style={{ transitionDelay: inView ? '0.1s' : '0s' }}
        >
          <div className="glass rounded-[calc(var(--radius)-1px)] p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed max-w-4xl">
              {technologies.map((tech, index) => (
                <span key={tech}>
                  <span className="hover:text-accent transition-colors duration-200 cursor-default">
                    {tech}
                  </span>
                  {index < technologies.length - 1 && (
                    <span className="text-accent/50 font-mono px-1"> · </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
