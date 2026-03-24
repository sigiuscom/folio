import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TechSection from '../components/TechSection';
import { renderWithProvider } from '../test/test-utils';

describe('TechSection Component', () => {
  it('renders the section title', () => {
    renderWithProvider(<TechSection />);

    expect(screen.getByText(/Technologies/i)).toBeInTheDocument();
  });

  it('renders key technology items', () => {
    renderWithProvider(<TechSection />);

    // Verify key representative items from each category
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('Prometheus')).toBeInTheDocument();
    expect(screen.getByText('Linux')).toBeInTheDocument();
    expect(screen.getByText('AI / LLM')).toBeInTheDocument();
  });

  it('renders technology items with separators', () => {
    renderWithProvider(<TechSection />);

    // Separators should exist between tech items (at least several)
    const separators = screen.getAllByText(/·/);
    expect(separators.length).toBeGreaterThan(10);
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

  it('renders animated elements', () => {
    renderWithProvider(<TechSection />);

    const animatedElements = document.querySelectorAll('.fade-ready');
    expect(animatedElements.length).toBeGreaterThanOrEqual(2);
  });
});