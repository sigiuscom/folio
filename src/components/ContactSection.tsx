import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/use-in-view';
import { Github, Linkedin } from 'lucide-react';

const SOCIAL_LINKS = [
  { href: 'https://github.com/sagolubev', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/sagolubev', icon: Linkedin, label: 'LinkedIn' },
];

const ContactSection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <h2 className={`fade-ready font-mono-label text-accent mb-8 flex items-center gap-3${inView ? ' in-view' : ''}`}>
          <span className="text-muted-foreground">//</span>
          {t('contact.title')}
        </h2>

        <p
          className={`fade-ready text-2xl md:text-3xl font-display font-medium mb-12 max-w-2xl${inView ? ' in-view' : ''}`}
          style={{ transitionDelay: inView ? '0.1s' : '0s' }}
        >
          {t('contact.text')}
        </p>

        <div
          className={`fade-ready glass-shell inline-block${inView ? ' in-view' : ''}`}
          style={{ transitionDelay: inView ? '0.2s' : '0s' }}
        >
          <div className="glass flex items-center gap-4 rounded-[calc(var(--radius)-1px)] px-7 py-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <a
              href={`mailto:${t('contact.emailAddress')}`}
              className="text-xl md:text-2xl font-display link-underline hover:text-accent transition-colors duration-200"
            >
              {t('contact.emailAddress')}
            </a>
          </div>
        </div>

        <footer
          className={`fade-ready mt-32 pt-8 border-t border-border flex items-center justify-between${inView ? ' in-view' : ''}`}
          style={{ transitionDelay: inView ? '0.4s' : '0s' }}
        >
          <p className="text-sm text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} — Sergey Golubev
          </p>
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
