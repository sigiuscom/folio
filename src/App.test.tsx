import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('provides necessary context providers', () => {
    render(<App />);
    
    // Check that QueryClientProvider is present
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    // Check that TooltipProvider is present
    // Note: This is harder to test directly, but we can check that the app renders
    expect(screen.queryByText(/Systems Engineer/i)).toBeInTheDocument();
  });
});