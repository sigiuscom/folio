import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ServicesSection from '../components/ServicesSection';
import { LanguageProvider } from '../contexts/LanguageContext';

// Wrapper to provide context
const renderWithProvider = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ({ children }) => <LanguageProvider>{children}</LanguageProvider> });
};

describe('ServicesSection Component', () => {
  it('renders the section title', () => {
    renderWithProvider(<ServicesSection />);

    expect(screen.getByText(/How I can help/i)).toBeInTheDocument();
  });

  it('renders all service items', () => {
    renderWithProvider(<ServicesSection />);

    expect(screen.getByText(/Design cloud-native architectures/i)).toBeInTheDocument();
    expect(screen.getByText(/Build and scale Kubernetes platforms/i)).toBeInTheDocument();
    expect(screen.getByText(/Improve reliability, performance and security/i)).toBeInTheDocument();
    expect(screen.getByText(/Automate infrastructure and CI\/CD/i)).toBeInTheDocument();
    expect(screen.getByText(/Design AI-ready systems/i)).toBeInTheDocument();
  });

  it('renders numbered service items', () => {
    renderWithProvider(<ServicesSection />);

    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
    expect(screen.getByText('05')).toBeInTheDocument();
  });

  it('has correct CSS classes applied', () => {
    renderWithProvider(<ServicesSection />);

    // Find the section by its ID attribute
    const section = document.querySelector('#services');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('py-24', 'md:py-32', 'border-t');

    const serviceItems = screen.getAllByText(/Design cloud-native|Build and scale|Improve reliability|Automate infrastructure|Design AI-ready/);
    serviceItems.forEach(item => {
      expect(item).toHaveClass('text-xl', 'md:text-2xl', 'font-display', 'font-medium');
    });
  });

  it('applies hover effects correctly', () => {
    renderWithProvider(<ServicesSection />);

    const serviceItem = screen.getByText(/Design cloud-native architectures/i);
    expect(serviceItem).toHaveClass('group-hover:text-accent');
  });

  it('renders motion elements with correct props', () => {
    renderWithProvider(<ServicesSection />);

    // Motion elements should render without errors - look for elements with animation styles
    const motionElements = document.querySelectorAll('[style*="opacity"], [style*="transform"]');
    // At least the heading and service items should be motion elements
    expect(motionElements.length).toBeGreaterThanOrEqual(6); // 1 heading + 5 services
  });

  it('formats numbers correctly', () => {
    renderWithProvider(<ServicesSection />);

    const numberElements = screen.getAllByText(/0\d/);
    expect(numberElements.length).toBe(5);

    numberElements.forEach(num => {
      expect(num).toHaveClass('text-sm', 'font-body', 'tabular-nums');
    });
  });
});