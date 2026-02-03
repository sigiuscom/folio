import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    'hero.title': 'Systems Engineer · DevOps · Cloud Architect',
    'hero.subtitle': 'I design, build and operate scalable, reliable and secure systems',
    'hero.description': 'From Kubernetes and CI/CD to AI-ready cloud platforms',
    'hero.cta': 'Contact me',

    // Skills
    'skills.title': 'Expertise',
    'skills.devops': 'DevOps & SRE',
    'skills.cloud': 'Cloud Architecture',
    'skills.kubernetes': 'Kubernetes & Containers',
    'skills.cicd': 'CI/CD & Automation',
    'skills.observability': 'Observability & Monitoring',
    'skills.security': 'Security & IAM',
    'skills.ai': 'AI / LLM Infrastructure',
    'skills.platform': 'Platform Engineering',

    // Technologies
    'tech.title': 'Technologies',

    // Services
    'services.title': 'How I can help',
    'services.1': 'Design cloud-native architectures',
    'services.2': 'Build and scale Kubernetes platforms',
    'services.3': 'Improve reliability, performance and security',
    'services.4': 'Automate infrastructure and CI/CD',
    'services.5': 'Design AI-ready systems',

    // Contact
    'contact.title': 'Contact',
    'contact.text': 'Open for consulting, architecture reviews and complex systems design',
    'contact.email': 'Get in touch',
  },
  ru: {
    // Hero
    'hero.title': 'Системный инженер · DevOps · Cloud-архитектор',
    'hero.subtitle': 'Проектирую, внедряю и сопровождаю надёжные и масштабируемые системы',
    'hero.description': 'От Kubernetes и CI/CD до облачных и AI-готовых платформ',
    'hero.cta': 'Связаться со мной',

    // Skills
    'skills.title': 'Экспертиза',
    'skills.devops': 'DevOps и SRE',
    'skills.cloud': 'Облачная архитектура',
    'skills.kubernetes': 'Kubernetes и контейнеры',
    'skills.cicd': 'CI/CD и автоматизация',
    'skills.observability': 'Мониторинг и наблюдаемость',
    'skills.security': 'Безопасность и IAM',
    'skills.ai': 'AI / LLM инфраструктура',
    'skills.platform': 'Платформенная инженерия',

    // Technologies
    'tech.title': 'Технологии',

    // Services
    'services.title': 'Чем могу помочь',
    'services.1': 'Проектирование cloud-native архитектур',
    'services.2': 'Построение и масштабирование Kubernetes-платформ',
    'services.3': 'Повышение надёжности, производительности и безопасности',
    'services.4': 'Автоматизация инфраструктуры и CI/CD',
    'services.5': 'Проектирование AI-готовых систем',

    // Contact
    'contact.title': 'Контакты',
    'contact.text': 'Открыт к консалтингу, архитектурным ревью и проектированию сложных систем',
    'contact.email': 'Написать',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
