import { LanguageProvider } from '@/contexts/LanguageContext';
import AnimatedBackground from '@/components/AnimatedBackground';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import TechSection from '@/components/TechSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <LanguageSwitcher />
        
        <main className="relative z-10">
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
