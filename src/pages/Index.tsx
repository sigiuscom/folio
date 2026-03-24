import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import TechSection from '@/components/TechSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <LanguageSwitcher />

        <main>
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
