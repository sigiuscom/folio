import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/use-in-view';

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
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl">
        <h2 className={`fade-ready text-sm tracking-wide uppercase text-muted-foreground mb-12${inView ? ' in-view' : ''}`}>
          {t('skills.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
          {skills.map((key, index) => (
            <div
              key={key}
              className={`fade-ready py-4 border-b border-border group${inView ? ' in-view' : ''}`}
              style={{ transitionDelay: inView ? `${0.05 + index * 0.05}s` : '0s' }}
            >
              <span className="text-lg font-display font-medium group-hover:text-accent transition-colors duration-200">
                {t(`skills.${key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
