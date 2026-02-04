import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Index from './Index';

describe('Index Page', () => {
  it('renders all main sections', () => {
    render(<Index />);

    // Check that all sections are present
    expect(screen.getByText(/Systems Engineer/i)).toBeInTheDocument(); // Hero section
    expect(screen.getByText(/Expertise/i)).toBeInTheDocument(); // Skills section
    expect(screen.getByText(/Technologies/i)).toBeInTheDocument(); // Tech section
    expect(screen.getByText(/How I can help/i)).toBeInTheDocument(); // Services section

    // Use more specific selectors for Contact since there are multiple "Contact" texts
    expect(screen.getByText('Contact', { selector: 'h2' })).toBeInTheDocument(); // Contact section header
  });

  it('renders the language switcher', () => {
    render(<Index />);
    // Language switcher is a div container with buttons inside, not a combobox
    const langSwitcher = screen.getByText('EN').closest('div');
    expect(langSwitcher).toBeInTheDocument();
    expect(langSwitcher).toHaveClass('fixed', 'top-6', 'right-6');
  });

  it('wraps content with LanguageProvider', () => {
    render(<Index />);

    // Check that translated content is present
    expect(screen.getByText(/I design, build and operate scalable, reliable and secure systems/i))
      .toBeInTheDocument();
  });
});