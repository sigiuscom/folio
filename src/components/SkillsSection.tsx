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
        <h2 className={`fade-ready font-mono-label text-accent mb-12 flex items-center gap-3${inView ? ' in-view' : ''}`}>
          <span className="text-muted-foreground">//</span>
          {t('skills.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((key, index) => (
            <div
              key={key}
              className={`fade-ready glass-shell${inView ? ' in-view' : ''}`}
              style={{ transitionDelay: inView ? `${0.05 + index * 0.05}s` : '0s' }}
            >
              <div className="group h-full glass rounded-[calc(var(--radius)-1px)] p-5 flex flex-col gap-6 transition-colors duration-300">
                <span className="font-mono-label text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-display font-medium group-hover:text-accent transition-colors duration-200">
                  {t(`skills.${key}`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
