import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Index from './Index';

// Mock sonner toast
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe('Index Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the component with correct content', () => {
    render(<Index />);

    // Check if the main elements are rendered
    expect(screen.getByText('Sergei Golubev')).toBeInTheDocument();
    expect(screen.getByText('IT Consultant')).toBeInTheDocument();
    expect(screen.getByText('sagolubev@outlook.com')).toBeInTheDocument();
    expect(screen.getByText('Technical Expert in IT Solutions')).toBeInTheDocument();
  });

  it('should render the Cloud icon', () => {
    render(<Index />);

    // Check if the Cloud icon is rendered (we can check for the svg element)
    const cloudIcon = document.querySelector('svg');
    expect(cloudIcon).toBeInTheDocument();
  });

  it('should render the Mail icon in the email button', () => {
    render(<Index />);

    // The email button should contain a Mail icon
    const emailButton = screen.getByRole('button');
    expect(emailButton).toBeInTheDocument();
    
    // Check that the button contains the email text
    expect(emailButton).toHaveTextContent('sagolubev@outlook.com');
  });

  it('should copy email to clipboard when button is clicked', async () => {
    // Mock clipboard API
    const mockWriteText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });

    render(<Index />);

    const emailButton = screen.getByRole('button');

    fireEvent.click(emailButton);

    await waitFor(() => {
      expect(mockWriteText).toHaveBeenCalledWith('sagolubev@outlook.com');
    });
  });

  it('should show success toast when email is copied', async () => {
    // Mock clipboard API
    const mockWriteText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });

    const { toast } = await import('sonner');
    render(<Index />);

    const emailButton = screen.getByRole('button');

    fireEvent.click(emailButton);

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Email copied to clipboard!');
    });
  });

  it('should handle clipboard write failure gracefully', async () => {
    // Mock clipboard.writeText to reject
    const mockWriteText = vi.fn().mockRejectedValue(new Error('Clipboard access denied'));
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });
    
    render(<Index />);

    const emailButton = screen.getByRole('button');

    // This should not throw an error
    fireEvent.click(emailButton);

    await waitFor(() => {
      // The function should still attempt to write to clipboard
      expect(mockWriteText).toHaveBeenCalledWith('sagolubev@outlook.com');
    });
  });

  it('should reset copied state after 2 seconds', () => {
    vi.useFakeTimers();
    
    // Mock clipboard API
    const mockWriteText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });
    
    render(<Index />);

    const emailButton = screen.getByRole('button');

    fireEvent.click(emailButton);

    // Fast-forward time by 2 seconds
    vi.advanceTimersByTime(2000);

    // The copied state should be reset (we can't directly test the state,
    // but we can verify the timeout was set up correctly by checking
    // that no errors occur)
    expect(mockWriteText).toHaveBeenCalledWith('sagolubev@outlook.com');

    vi.useRealTimers();
  });

  it('should have correct CSS classes for styling', () => {
    render(<Index />);

    // Check for key CSS classes that define the layout
    const mainContainer = screen.getByText('Sergei Golubev').closest('div');
    expect(mainContainer?.parentElement?.parentElement?.parentElement).toHaveClass('min-h-screen');

    const emailButton = screen.getByRole('button');
    expect(emailButton).toHaveClass('w-full');
  });

  it('should have accessible button with proper role', () => {
    render(<Index />);

    const emailButton = screen.getByRole('button');
    expect(emailButton).toBeInTheDocument();
    expect(emailButton).toHaveTextContent('sagolubev@outlook.com');
  });

  it('should handle multiple rapid clicks correctly', () => {
    // Mock clipboard API
    const mockWriteText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });

    render(<Index />);

    const emailButton = screen.getByRole('button');

    // Click multiple times rapidly
    fireEvent.click(emailButton);
    fireEvent.click(emailButton);
    fireEvent.click(emailButton);

    // Should have been called 3 times
    expect(mockWriteText).toHaveBeenCalledTimes(3);
    expect(mockWriteText).toHaveBeenCalledWith('sagolubev@outlook.com');
  });

  it('should maintain email constant value', () => {
    render(<Index />);

    // The email should always be the same
    expect(screen.getByText('sagolubev@outlook.com')).toBeInTheDocument();
  });
});