import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import DotField from '@/components/DotField';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import TechSection from '@/components/TechSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-background">
        <DotField />

        <a
          href="#"
          className="fixed top-6 left-6 z-50 font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          SG<span className="text-accent">//</span>
        </a>

        <LanguageSwitcher />

        <main className="relative">
          <HeroSection />
          <SkillsSection />
          <TechSection />
          <ServicesSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
