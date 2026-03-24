import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from '../components/HeroSection';
import { renderWithProvider } from '../test/test-utils';

describe('HeroSection Component', () => {
  it('renders hero content correctly', () => {
    renderWithProvider(<HeroSection />);

    expect(screen.getByText(/Systems Engineer · DevOps · Cloud Architect/i)).toBeInTheDocument();
    expect(screen.getByText(/I design, build and operate scalable, reliable and secure systems/i)).toBeInTheDocument();
    expect(screen.getByText(/From Kubernetes and CI\/CD to AI-ready cloud platforms/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact me/i)).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    renderWithProvider(<HeroSection />);

    // Find the section element by its unique characteristics
    const sectionElement = document.querySelector('section.min-h-screen.flex.items-center');
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveClass('px-6', 'md:px-12', 'lg:px-24');

    const title = screen.getByText(/Systems Engineer · DevOps · Cloud Architect/i);
    expect(title).toHaveClass('text-4xl', 'sm:text-5xl', 'md:text-6xl', 'lg:text-7xl');
  });

  it('renders animated elements', () => {
    renderWithProvider(<HeroSection />);

    const animatedElements = document.querySelectorAll('.animate-enter');
    expect(animatedElements.length).toBeGreaterThan(0);
  });
});