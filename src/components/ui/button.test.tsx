import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './button';

describe('Button Component', () => {
  it('renders button with default variant', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary', 'text-primary-foreground');
  });

  it('applies different variants correctly', () => {
    const { rerender } = render(<Button variant="default">Default</Button>);

    let button = screen.getByRole('button', { name: /default/i });
    expect(button).toHaveClass('bg-primary');

    rerender(<Button variant="destructive">Destructive</Button>);
    button = screen.getByRole('button', { name: /destructive/i });
    expect(button).toHaveClass('bg-destructive', 'text-destructive-foreground');

    rerender(<Button variant="outline">Outline</Button>);
    button = screen.getByRole('button', { name: /outline/i });
    expect(button).toHaveClass('border', 'border-input', 'bg-background');

    rerender(<Button variant="secondary">Secondary</Button>);
    button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toHaveClass('bg-secondary', 'text-secondary-foreground');

    rerender(<Button variant="ghost">Ghost</Button>);
    button = screen.getByRole('button', { name: /ghost/i });
    expect(button).toHaveClass('hover:bg-accent', 'hover:text-accent-foreground');

    rerender(<Button variant="link">Link</Button>);
    button = screen.getByRole('button', { name: /link/i });
    expect(button).toHaveClass('text-primary', 'underline-offset-4', 'hover:underline');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Button size="default">Default Size</Button>);

    let button = screen.getByRole('button', { name: /default size/i });
    expect(button).toHaveClass('h-10', 'px-4', 'py-2');

    rerender(<Button size="sm">Small Size</Button>);
    button = screen.getByRole('button', { name: /small size/i });
    expect(button).toHaveClass('h-9', 'rounded-md', 'px-3');

    rerender(<Button size="lg">Large Size</Button>);
    button = screen.getByRole('button', { name: /large size/i });
    expect(button).toHaveClass('h-11', 'rounded-md', 'px-8');

    rerender(<Button size="icon">Icon</Button>);
    button = screen.getByRole('button', { name: /icon/i });
    expect(button).toHaveClass('h-10', 'w-10');
  });

  it('handles click events', () => {
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick}>Click Me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50');
  });

  it('renders as child element when asChild prop is true', () => {
    // Testing the asChild functionality requires wrapping with a child element
    const LinkComponent = ({ children, ...props }: any) => (
      <a {...props}>{children}</a>
    );

    const { container } = render(
      <Button asChild {...{ as: "a", href: "/test" }}>
        <LinkComponent>Child Button</LinkComponent>
      </Button>
    );

    // Check that the button renders as a link
    const linkElement = container.querySelector('a');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test');
    expect(linkElement?.textContent).toBe('Child Button');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);

    const button = screen.getByRole('button', { name: /custom button/i });
    expect(button).toHaveClass('custom-class');
  });
});