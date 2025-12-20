import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { reducer, toast } from './use-toast';

// Mock setTimeout and clearTimeout
vi.useFakeTimers();

describe('Toast reducer', () => {
  const initialState = { toasts: [] };

  beforeEach(() => {
    vi.clearAllTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  describe('ADD_TOAST action', () => {
    it('should add a toast to empty state', () => {
      const newToast = {
        id: '1',
        title: 'Test Toast',
        description: 'Test Description'
      };

      const action = {
        type: 'ADD_TOAST' as const,
        toast: newToast
      };

      const result = reducer(initialState, action);

      expect(result.toasts).toHaveLength(1);
      expect(result.toasts[0]).toEqual(newToast);
    });

    it('should add toast to beginning of array (respecting TOAST_LIMIT)', () => {
      const existingToast = {
        id: '1',
        title: 'Existing Toast'
      };

      const stateWithToast = { toasts: [existingToast] };

      const newToast = {
        id: '2',
        title: 'New Toast'
      };

      const action = {
        type: 'ADD_TOAST' as const,
        toast: newToast
      };

      const result = reducer(stateWithToast, action);

      // Due to TOAST_LIMIT = 1, only the new toast should remain
      expect(result.toasts).toHaveLength(1);
      expect(result.toasts[0]).toEqual(newToast);
    });

    it('should respect TOAST_LIMIT (1)', () => {
      const existingToast = {
        id: '1',
        title: 'Existing Toast'
      };

      const stateWithToast = { toasts: [existingToast] };

      const newToast = {
        id: '2',
        title: 'New Toast'
      };

      const action = {
        type: 'ADD_TOAST' as const,
        toast: newToast
      };

      const result = reducer(stateWithToast, action);

      expect(result.toasts).toHaveLength(1);
      expect(result.toasts[0]).toEqual(newToast);
    });
  });

  describe('UPDATE_TOAST action', () => {
    it('should update existing toast', () => {
      const existingToast = {
        id: '1',
        title: 'Original Title',
        description: 'Original Description'
      };

      const stateWithToast = { toasts: [existingToast] };

      const action = {
        type: 'UPDATE_TOAST' as const,
        toast: {
          id: '1',
          title: 'Updated Title'
        }
      };

      const result = reducer(stateWithToast, action);

      expect(result.toasts).toHaveLength(1);
      expect(result.toasts[0]).toEqual({
        id: '1',
        title: 'Updated Title',
        description: 'Original Description'
      });
    });

    it('should not update non-existing toast', () => {
      const existingToast = {
        id: '1',
        title: 'Original Title'
      };

      const stateWithToast = { toasts: [existingToast] };

      const action = {
        type: 'UPDATE_TOAST' as const,
        toast: {
          id: '2',
          title: 'Updated Title'
        }
      };

      const result = reducer(stateWithToast, action);

      expect(result.toasts).toHaveLength(1);
      expect(result.toasts[0]).toEqual(existingToast);
    });
  });

  describe('DISMISS_TOAST action', () => {
    it('should dismiss specific toast', () => {
      const toast1 = { id: '1', title: 'Toast 1', open: true };
      const toast2 = { id: '2', title: 'Toast 2', open: true };

      const stateWithToasts = { toasts: [toast1, toast2] };

      const action = {
        type: 'DISMISS_TOAST' as const,
        toastId: '1'
      };

      const result = reducer(stateWithToasts, action);

      expect(result.toasts).toHaveLength(2);
      expect(result.toasts[0].open).toBe(false);
      expect(result.toasts[1].open).toBe(true);
    });

    it('should dismiss all toasts when no toastId provided', () => {
      const toast1 = { id: '1', title: 'Toast 1', open: true };
      const toast2 = { id: '2', title: 'Toast 2', open: true };

      const stateWithToasts = { toasts: [toast1, toast2] };

      const action = {
        type: 'DISMISS_TOAST' as const
      };

      const result = reducer(stateWithToasts, action);

      expect(result.toasts).toHaveLength(2);
      expect(result.toasts[0].open).toBe(false);
      expect(result.toasts[1].open).toBe(false);
    });
  });

  describe('REMOVE_TOAST action', () => {
    it('should remove specific toast', () => {
      const toast1 = { id: '1', title: 'Toast 1' };
      const toast2 = { id: '2', title: 'Toast 2' };

      const stateWithToasts = { toasts: [toast1, toast2] };

      const action = {
        type: 'REMOVE_TOAST' as const,
        toastId: '1'
      };

      const result = reducer(stateWithToasts, action);

      expect(result.toasts).toHaveLength(1);
      expect(result.toasts[0]).toEqual(toast2);
    });

    it('should remove all toasts when no toastId provided', () => {
      const toast1 = { id: '1', title: 'Toast 1' };
      const toast2 = { id: '2', title: 'Toast 2' };

      const stateWithToasts = { toasts: [toast1, toast2] };

      const action = {
        type: 'REMOVE_TOAST' as const
      };

      const result = reducer(stateWithToasts, action);

      expect(result.toasts).toHaveLength(0);
    });
  });
});

describe('toast function', () => {
  beforeEach(() => {
    vi.clearAllTimers();
    // Reset the memory state by clearing all toasts
    const clearAction = { type: 'REMOVE_TOAST' as const };
    // We need to access the internal dispatch function, but since it's not exported,
    // we'll test the toast function behavior instead
  });

  it('should create a toast with generated id', () => {
    const toastProps = {
      title: 'Test Toast',
      description: 'Test Description'
    };

    const result = toast(toastProps);

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('dismiss');
    expect(result).toHaveProperty('update');
    expect(typeof result.id).toBe('string');
    expect(typeof result.dismiss).toBe('function');
    expect(typeof result.update).toBe('function');
  });

  it('should return different ids for multiple toasts', () => {
    const toast1 = toast({ title: 'Toast 1' });
    const toast2 = toast({ title: 'Toast 2' });

    expect(toast1.id).not.toBe(toast2.id);
  });

  it('should provide working dismiss function', () => {
    const testToast = toast({ title: 'Test Toast' });

    expect(() => testToast.dismiss()).not.toThrow();
  });

  it('should provide working update function', () => {
    const testToast = toast({ title: 'Test Toast' });

    expect(() => testToast.update({
      id: testToast.id,
      title: 'Updated Toast'
    })).not.toThrow();
  });
});