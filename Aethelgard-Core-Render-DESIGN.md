---
version: "alpha"
name: "Aethelgard Core Render"
description: "Aethelgard Core Dashboard Section is designed for demonstrating application workflows and interface hierarchy. Key features include clear information density, modular panels, and interface rhythm. It is suitable for product showcases, admin panels, and analytics experiences."
colors:
  primary: "#F97316"
  secondary: "#0A0A0A"
  tertiary: "#E6FF1A"
  neutral: "#0A0A0A"
  background: "#F97316"
  surface: "#0A0A0A"
  text-primary: "#71717A"
  text-secondary: "#52525B"
  border: "#27272A"
  accent: "#F97316"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "96px"
    fontWeight: 300
    lineHeight: "96px"
    letterSpacing: "-0.05em"
  body-md:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 300
    lineHeight: "20px"
    letterSpacing: "0.025em"
spacing:
  base: "4px"
  sm: "1px"
  md: "4px"
  lg: "8px"
  xl: "10px"
  gap: "8px"
  card-padding: "20px"
  section-padding: "40px"
components:
  card:
    rounded: "12px"
    padding: "20px"
---

## Overview

- **Composition cues:**
  - Layout: Grid
  - Content Width: Full Bleed
  - Framing: Glassy
  - Grid: Strong

## Colors

The color system uses dark mode with #F97316 as the main accent and #0A0A0A as the neutral foundation.

- **Primary (#F97316):** Main accent and emphasis color.
- **Secondary (#0A0A0A):** Supporting accent for secondary emphasis.
- **Tertiary (#E6FF1A):** Reserved accent for supporting contrast moments.
- **Neutral (#0A0A0A):** Neutral foundation for backgrounds, surfaces, and supporting chrome.

- **Usage:** Background: #F97316; Surface: #0A0A0A; Text Primary: #71717A; Text Secondary: #52525B; Border: #27272A; Accent: #F97316

## Typography

Typography relies on Inter across display, body, and utility text.

- **Display (`display-lg`):** Inter, 96px, weight 300, line-height 96px, letter-spacing -0.05em.
- **Body (`body-md`):** Inter, 14px, weight 300, line-height 20px, letter-spacing 0.025em.

## Layout

Layout follows a grid composition with reusable spacing tokens. Preserve the grid, full bleed structural frame before changing ornament or component styling. Use 4px as the base rhythm and let larger gaps step up from that cadence instead of introducing unrelated spacing values.

Treat the page as a grid / full bleed composition, and keep that framing stable when adding or remixing sections.

- **Layout type:** Grid
- **Content width:** Full Bleed
- **Base unit:** 4px
- **Scale:** 1px, 4px, 8px, 10px, 12px, 20px, 24px, 40px
- **Section padding:** 40px
- **Card padding:** 20px, 40px
- **Gaps:** 8px, 12px, 16px, 20px

## Elevation & Depth

Depth is communicated through glass, border contrast, and reusable shadow or blur treatments. Keep those recipes consistent across hero panels, cards, and controls so the page reads as one material system.

Surfaces should read as glass first, with borders, shadows, and blur only reinforcing that material choice.

- **Surface style:** Glass
- **Borders:** 1px #27272A
- **Shadows:** rgba(1, 1, 0, 0) 0px 0px 0.1379px 0px; rgba(249, 115, 22, 0.8) 0px 0px 10px 0px
- **Blur:** 16px, 8px

### Techniques
- **Gradient border shell:** Use a thin gradient border shell around the main card. Wrap the surface in an outer shell with 20px padding and a 12px radius. Drive the shell with linear-gradient(145deg, rgba(15, 15, 15, 0.7) 0%, rgba(5, 5, 5, 0.9) 100%) so the edge reads like premium depth instead of a flat stroke. Keep the actual stroke understated so the gradient shell remains the hero edge treatment. Inset the real content surface inside the wrapper with a slightly smaller radius so the gradient only appears as a hairline frame.

## Shapes

Shapes rely on a tight radius system anchored by 12px and scaled across cards, buttons, and supporting surfaces. Icon geometry should stay compatible with that soft-to-controlled silhouette.

Use the radius family intentionally: larger surfaces can open up, but controls and badges should stay within the same rounded DNA instead of inventing sharper or pill-only exceptions.

- **Corner radii:** 12px, 9999px
- **Icon treatment:** Linear
- **Icon sets:** Solar

## Components

Reuse the existing card surface recipe for content blocks.

### Cards and Surfaces
- **Card surface:** border 0px solid rgb(229, 231, 235), radius 12px, padding 20px, shadow none, blur 16px.

### Iconography
- **Treatment:** Linear.
- **Sets:** Solar.

## Do's and Don'ts

Use these constraints to keep future generations aligned with the current system instead of drifting into adjacent styles.

### Do
- Do use the primary palette as the main accent for emphasis and action states.
- Do keep spacing aligned to the detected 4px rhythm.
- Do reuse the Glass surface treatment consistently across cards and controls.
- Do keep corner radii within the detected 12px, 9999px family.

### Don't
- Don't introduce extra accent colors outside the core palette roles unless the page needs a new semantic state.
- Don't mix unrelated shadow or blur recipes that break the current depth system.
- Don't exceed the detected minimal motion intensity without a deliberate reason.

## Motion

Motion stays restrained and interface-led across text, layout, and scroll transitions. Timing clusters around 1000ms. Easing favors ease and cubic-bezier(0.4. Hover behavior focuses on opacity changes.

**Motion Level:** minimal

**Durations:** 1000ms

**Easings:** ease, cubic-bezier(0.4, 0, 0.2, 1)

**Hover Patterns:** opacity

## WebGL

Reconstruct the graphics as a full-bleed background field using alpha, custom shaders. The effect should read as retro-futurist, technical, and meditative: dot-matrix particle field with green on black and sparse spacing. Build it from dot particles + soft depth fade so the effect reads clearly. Animate it as slow breathing pulse. Interaction can react to the pointer, but only as a subtle drift. Preserve reduced motion + dom fallback.

**Id:** webgl

**Label:** WebGL

**Stack:** WebGL

**Insights:**
  - **Scene:**
    - **Value:** Full-bleed background field
  - **Effect:**
    - **Value:** Dot-matrix particle field
  - **Primitives:**
    - **Value:** Dot particles + soft depth fade
  - **Motion:**
    - **Value:** Slow breathing pulse
  - **Interaction:**
    - **Value:** Pointer-reactive drift
  - **Render:**
    - **Value:** alpha, custom shaders

**Techniques:** Dot matrix, Breathing pulse, Pointer parallax, Shader gradients, Noise fields

**Code Evidence:**
  - **HTML reference:**
    - **Language:** html
    - **Snippet:**
      ```html
      <!-- WebGL ASCII Canvas -->
      <canvas id="gl-canvas" class="absolute inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true"></canvas>

      <!-- Scanline Overlay -->
      ```
