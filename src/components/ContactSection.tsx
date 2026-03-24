import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/use-in-view';

const ContactSection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <h2 className={`fade-ready text-sm tracking-wide uppercase text-muted-foreground mb-8${inView ? ' in-view' : ''}`}>
          {t('contact.title')}
        </h2>

        <p
          className={`fade-ready text-2xl md:text-3xl font-display font-medium mb-12 max-w-2xl${inView ? ' in-view' : ''}`}
          style={{ transitionDelay: inView ? '0.1s' : '0s' }}
        >
          {t('contact.text')}
        </p>

        <div
          className={`fade-ready${inView ? ' in-view' : ''}`}
          style={{ transitionDelay: inView ? '0.2s' : '0s' }}
        >
          <a
            href="mailto:sagolubev@outlook.com"
            className="inline-block text-xl md:text-2xl font-display link-underline hover:text-accent transition-colors duration-200"
          >
            sagolubev@outlook.com
          </a>
        </div>

        <footer
          className={`fade-ready mt-32 pt-8 border-t border-border${inView ? ' in-view' : ''}`}
          style={{ transitionDelay: inView ? '0.4s' : '0s' }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
