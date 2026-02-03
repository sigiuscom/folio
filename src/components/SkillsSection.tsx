import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Server, 
  Cloud, 
  Container, 
  GitBranch, 
  Activity, 
  Shield, 
  Brain, 
  Layers 
} from 'lucide-react';

const skills = [
  { key: 'devops', icon: Server },
  { key: 'cloud', icon: Cloud },
  { key: 'kubernetes', icon: Container },
  { key: 'cicd', icon: GitBranch },
  { key: 'observability', icon: Activity },
  { key: 'security', icon: Shield },
  { key: 'ai', icon: Brain },
  { key: 'platform', icon: Layers },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-gradient"
        >
          {t('skills.title')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map(({ key, icon: Icon }) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="glass rounded-xl p-6 card-hover group cursor-default"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground/90 text-sm md:text-base">
                  {t(`skills.${key}`)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
