import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { renderWithProvider } from '../test/test-utils';

describe('LanguageSwitcher Component', () => {
  it('renders both language options', () => {
    renderWithProvider(<LanguageSwitcher />);
    
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('RU')).toBeInTheDocument();
  });

  it('displays active language with correct styling', () => {
    renderWithProvider(<LanguageSwitcher />);
    
    // Initially English should be active
    const enButton = screen.getByText('EN');
    const ruButton = screen.getByText('RU');
    
    expect(enButton).toHaveClass('text-foreground');
    expect(ruButton).toHaveClass('text-muted-foreground');
  });

  it('switches language between EN and RU', () => {
    renderWithProvider(<LanguageSwitcher />);

    const enButton = screen.getByText('EN');
    const ruButton = screen.getByText('RU');

    // Initially EN is active
    expect(enButton).toHaveClass('text-foreground');
    expect(ruButton).toHaveClass('text-muted-foreground');

    // Click RU to switch
    fireEvent.click(ruButton);

    // RU should now be active
    expect(enButton).toHaveClass('text-muted-foreground');
    expect(ruButton).toHaveClass('text-foreground');

    // Click EN to switch back
    fireEvent.click(enButton);

    // EN should be active again
    expect(enButton).toHaveClass('text-foreground');
    expect(ruButton).toHaveClass('text-muted-foreground');
  });

  it('has correct CSS classes applied', () => {
    renderWithProvider(<LanguageSwitcher />);
    
    const container = screen.getByRole('button', { name: /EN/i }).closest('div');
    expect(container).toHaveClass('fixed', 'top-6', 'right-6', 'z-50', 'flex', 'items-center', 'gap-3');
    
    const enButton = screen.getByText('EN');
    const ruButton = screen.getByText('RU');
    
    expect(enButton).toHaveClass('transition-colors', 'duration-200');
    expect(ruButton).toHaveClass('transition-colors', 'duration-200');
    
    const separator = screen.getByText('/');
    expect(separator).toHaveClass('text-border');
  });

  it('has hover utility classes applied', () => {
    renderWithProvider(<LanguageSwitcher />);

    const ruButton = screen.getByText('RU');

    // Verify hover utility class is present (actual hover behavior requires visual/E2E testing)
    expect(ruButton).toHaveClass('hover:text-foreground');
  });
});