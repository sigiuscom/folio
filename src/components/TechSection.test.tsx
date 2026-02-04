import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TechSection from '../components/TechSection';
import { LanguageProvider } from '../contexts/LanguageContext';

// Wrapper to provide context
const renderWithProvider = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ({ children }) => <LanguageProvider>{children}</LanguageProvider> });
};

describe('TechSection Component', () => {
  it('renders the section title', () => {
    renderWithProvider(<TechSection />);

    expect(screen.getByText(/Technologies/i)).toBeInTheDocument();
  });

  it('renders all technology items', () => {
    renderWithProvider(<TechSection />);

    const techItems = [
      'Kubernetes', 'Docker', 'Helm', 'Terraform', 'Ansible',
      'AWS', 'Azure', 'GCP',
      'GitHub Actions', 'GitLab CI',
      'Prometheus', 'Grafana', 'Loki',
      'Keycloak', 'OAuth2', 'OIDC',
      'Linux', 'Networking',
      'AI / LLM', 'MLOps'
    ];

    techItems.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders technology items with separators', () => {
    renderWithProvider(<TechSection />);

    // Check that separators are present between tech items
    // Using a more flexible matcher since the text might be split across elements
    const separators = screen.getAllByText(/·/);
    expect(separators.length).toBe(19); // 20 items - 1 = 19 separators
  });

  it('has correct CSS classes applied', () => {
    renderWithProvider(<TechSection />);

    // Find the section by its ID attribute
    const section = document.querySelector('#tech');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('py-24', 'md:py-32', 'border-t');

    const techParagraph = screen.getByText(/Kubernetes/).closest('p');
    expect(techParagraph).toHaveClass('text-2xl', 'md:text-3xl', 'font-display');
  });

  it('applies hover effects correctly', () => {
    renderWithProvider(<TechSection />);

    const techItem = screen.getByText('Kubernetes');
    expect(techItem).toHaveClass('hover:text-accent');
  });

  it('renders motion elements with correct props', () => {
    renderWithProvider(<TechSection />);

    // Motion elements should render without errors - look for elements with animation styles
    const motionElements = document.querySelectorAll('[style*="opacity"], [style*="transform"]');
    // At least the heading and paragraph should be motion elements
    expect(motionElements.length).toBeGreaterThanOrEqual(2);
  });
});