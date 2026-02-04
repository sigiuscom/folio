import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SkillsSection from '../components/SkillsSection';
import { LanguageProvider } from '../contexts/LanguageContext';

// Wrapper to provide context
const renderWithProvider = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ({ children }) => <LanguageProvider>{children}</LanguageProvider> });
};

describe('SkillsSection Component', () => {
  it('renders the section title', () => {
    renderWithProvider(<SkillsSection />);

    expect(screen.getByText(/Expertise/i)).toBeInTheDocument();
  });

  it('renders all skill items', () => {
    renderWithProvider(<SkillsSection />);

    expect(screen.getByText(/DevOps & SRE/i)).toBeInTheDocument();
    expect(screen.getByText(/Cloud Architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/Kubernetes & Containers/i)).toBeInTheDocument();
    expect(screen.getByText(/CI\/CD & Automation/i)).toBeInTheDocument();
    expect(screen.getByText(/Observability & Monitoring/i)).toBeInTheDocument();
    expect(screen.getByText(/Security & IAM/i)).toBeInTheDocument();
    expect(screen.getByText(/AI \/ LLM Infrastructure/i)).toBeInTheDocument();
    expect(screen.getByText(/Platform Engineering/i)).toBeInTheDocument();
  });

  it('has correct CSS classes applied', () => {
    renderWithProvider(<SkillsSection />);

    // Find the section by its ID attribute
    const section = document.querySelector('#skills');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('py-24', 'md:py-32', 'border-t');

    const skillItems = screen.getAllByText(/DevOps|Cloud|Kubernetes|CI\/CD|Observability|Security|AI|Platform/);
    expect(skillItems.length).toBe(8);

    skillItems.forEach(item => {
      expect(item).toHaveClass('text-lg', 'font-display', 'font-medium');
    });
  });

  it('renders motion elements with correct props', () => {
    renderWithProvider(<SkillsSection />);

    // Motion elements should render without errors - look for elements with animation styles
    const motionElements = document.querySelectorAll('[style*="opacity"], [style*="transform"]');
    // At least the heading and skill items should be motion elements
    expect(motionElements.length).toBeGreaterThanOrEqual(9); // 1 heading + 8 skills
  });

  it('applies hover effects correctly', () => {
    renderWithProvider(<SkillsSection />);

    const skillItem = screen.getByText(/DevOps & SRE/i);
    expect(skillItem).toHaveClass('group-hover:text-accent');
  });
});