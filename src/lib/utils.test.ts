import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('should handle conditional classes', () => {
    expect(cn('base', true && 'conditional', false && 'hidden')).toBe('base conditional');
  });

  it('should handle undefined and null values', () => {
    expect(cn('base', undefined, null, 'valid')).toBe('base valid');
  });

  it('should handle empty strings', () => {
    expect(cn('base', '', 'valid')).toBe('base valid');
  });

  it('should merge Tailwind classes correctly (removing duplicates)', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('should handle arrays of classes', () => {
    expect(cn(['class1', 'class2'], 'class3')).toBe('class1 class2 class3');
  });

  it('should handle objects with boolean values', () => {
    expect(cn({
      'base': true,
      'active': true,
      'hidden': false
    })).toBe('base active');
  });

  it('should handle complex combinations', () => {
    expect(cn(
      'base-class',
      { 'conditional': true, 'hidden': false },
      ['array-class1', 'array-class2'],
      undefined,
      'final-class'
    )).toBe('base-class conditional array-class1 array-class2 final-class');
  });

  it('should return empty string for no arguments', () => {
    expect(cn()).toBe('');
  });

  it('should handle Tailwind conflicting classes', () => {
    // twMerge should handle conflicting Tailwind classes
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    expect(cn('p-4', 'px-2')).toBe('p-4 px-2');
    expect(cn('p-4', 'p-2')).toBe('p-2');
  });
});