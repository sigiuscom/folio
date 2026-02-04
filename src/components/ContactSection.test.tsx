import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactSection from '../components/ContactSection';
import { LanguageProvider } from '../contexts/LanguageContext';

// Wrapper to provide context
const renderWithProvider = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ({ children }) => <LanguageProvider>{children}</LanguageProvider> });
};

describe('ContactSection Component', () => {
  it('renders the section title', () => {
    renderWithProvider(<ContactSection />);

    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('renders contact text', () => {
    renderWithProvider(<ContactSection />);

    expect(screen.getByText(/Open for consulting, architecture reviews and complex systems design/i)).toBeInTheDocument();
  });

  it('renders contact email link', () => {
    renderWithProvider(<ContactSection />);

    const emailLink = screen.getByText('sagolubev@outlook.com');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:sagolubev@outlook.com');
    expect(emailLink).toHaveClass('link-underline', 'hover:text-accent');
  });

  it('has correct CSS classes applied', () => {
    renderWithProvider(<ContactSection />);

    // Find the section by its ID attribute
    const section = document.querySelector('#contact');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('py-24', 'md:py-32', 'border-t');

    const contactText = screen.getByText(/Open for consulting/i);
    expect(contactText).toHaveClass('text-2xl', 'md:text-3xl', 'font-display', 'font-medium');
  });

  it('renders footer with current year', () => {
    renderWithProvider(<ContactSection />);

    const currentYear = new Date().getFullYear();
    const footerText = screen.getByText(new RegExp(`© ${currentYear}`));
    expect(footerText).toBeInTheDocument();
    expect(footerText).toHaveClass('text-sm', 'text-muted-foreground');
  });

  it('renders motion elements with correct props', () => {
    renderWithProvider(<ContactSection />);

    // Motion elements should render without errors - look for elements with animation styles
    const motionElements = document.querySelectorAll('[style*="opacity"], [style*="transform"]');
    // At least the heading, paragraph, div, and footer should be motion elements
    expect(motionElements.length).toBeGreaterThanOrEqual(4);
  });

  it('applies hover effects correctly', () => {
    renderWithProvider(<ContactSection />);

    const emailLink = screen.getByText('sagolubev@outlook.com');
    expect(emailLink).toHaveClass('hover:text-accent');
  });
});