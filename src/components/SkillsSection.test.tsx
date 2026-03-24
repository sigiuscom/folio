import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SkillsSection from '../components/SkillsSection';
import { renderWithProvider } from '../test/test-utils';

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

  it('renders animated elements', () => {
    renderWithProvider(<SkillsSection />);

    const animatedElements = document.querySelectorAll('.fade-ready');
    expect(animatedElements.length).toBeGreaterThan(0);
  });

  it('applies hover effects correctly', () => {
    renderWithProvider(<SkillsSection />);

    const skillItem = screen.getByText(/DevOps & SRE/i);
    expect(skillItem).toHaveClass('group-hover:text-accent');
  });
});