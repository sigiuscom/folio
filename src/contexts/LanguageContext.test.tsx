import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';

describe('LanguageContext', () => {
  it('provides default language as English', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LanguageProvider>{children}</LanguageProvider>
    );

    const { result } = renderHook(() => useLanguage(), { wrapper });

    expect(result.current.language).toBe('en');
    expect(typeof result.current.setLanguage).toBe('function');
    expect(typeof result.current.t).toBe('function');
  });

  it('translates content correctly', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LanguageProvider>{children}</LanguageProvider>
    );

    const { result } = renderHook(() => useLanguage(), { wrapper });

    expect(result.current.t('hero.title')).toBe('Systems Engineer · DevOps · Cloud Architect');
    expect(result.current.t('skills.title')).toBe('Expertise');
    expect(result.current.t('nonexistent.key')).toBe('nonexistent.key'); // fallback to key
  });

  it('switches language correctly', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LanguageProvider>{children}</LanguageProvider>
    );

    const { result } = renderHook(() => useLanguage(), { wrapper });

    // Initially in English
    expect(result.current.language).toBe('en');
    expect(result.current.t('hero.title')).toBe('Systems Engineer · DevOps · Cloud Architect');

    // Switch to Russian
    act(() => {
      result.current.setLanguage('ru');
    });

    expect(result.current.language).toBe('ru');
    expect(result.current.t('hero.title')).toBe('Системный инженер · DevOps · Cloud-архитектор');

    // Switch back to English
    act(() => {
      result.current.setLanguage('en');
    });

    expect(result.current.language).toBe('en');
    expect(result.current.t('hero.title')).toBe('Systems Engineer · DevOps · Cloud Architect');
  });

  it('throws error when used outside provider', () => {
    expect(() => {
      renderHook(() => useLanguage());
    }).toThrow('useLanguage must be used within a LanguageProvider');
  });
});