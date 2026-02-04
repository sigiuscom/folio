import "@testing-library/jest-dom";
import { vi } from "vitest";

// Polyfill for IntersectionObserver (needed for framer-motion)
window.IntersectionObserver = window.IntersectionObserver || class {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  constructor() {}
};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
