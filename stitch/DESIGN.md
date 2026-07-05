---
name: Precision Utility Interface
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf2'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e5efff'
  surface-container-high: '#dbe9ff'
  surface-container-highest: '#d4e4fa'
  on-surface: '#0d1c2d'
  on-surface-variant: '#3e484d'
  inverse-surface: '#233143'
  inverse-on-surface: '#e9f1ff'
  outline: '#6e797e'
  outline-variant: '#bdc8ce'
  surface-tint: '#006780'
  primary: '#00647c'
  on-primary: '#ffffff'
  primary-container: '#007f9d'
  on-primary-container: '#fafdff'
  inverse-primary: '#6cd3f7'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#545c72'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c748b'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b7eaff'
  primary-fixed-dim: '#6cd3f7'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e61'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0d1c2d'
  surface-variant: '#d4e4fa'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  sidebar_width: 240px
  topbar_height: 48px
---

## Brand & Style

The design system is engineered for high-stakes operational environments where clarity, speed of cognition, and data density are paramount. The brand personality is **deterministic, reliable, and functional**, eschewing decorative "fluff" in favor of mathematical precision.

The aesthetic follows a **Modern Corporate** direction with a focus on **Utility Minimalism**. It prioritizes a "tool-first" mentality, using a subdued color palette to allow status indicators and primary actions to command immediate attention. The UI should feel like a physical instrument—sturdy, responsive, and unambiguous.

**Key Principles:**
- **Information Density:** Maximum data visibility with minimal scrolling.
- **Operational Calm:** Using neutral slates to reduce visual fatigue during long monitoring sessions.
- **Predictability:** Consistent placement of controls and status patterns to build muscle memory.

## Colors

The color strategy for the design system is rooted in a "Slate & Teal" utility palette. The primary goal is to provide a neutral stage for data while using color strictly for functional signaling.

- **Primary (#0891B2):** A sharp, deep teal used for primary actions, active states, and focus indicators. It provides high contrast against slate backgrounds.
- **Neutral/Surface:** A range of Slates (`#F8FAFC` to `#0F172A`) is used to define hierarchy. Backgrounds use the lightest tints, while text and iconography scale through the darker shades.
- **Semantic Colors:** Success, Warning, and Error colors are used sparingly but with high saturation to ensure they are the first thing a user notices in a dense data grid.
- **Borders:** Crisp, low-contrast borders (`#E2E8F0`) are used to define cells and sections without adding visual weight.

## Typography

Typography in this design system is optimized for legibility in data-heavy contexts. **Inter** is the standard for all UI elements due to its exceptional tall x-height and clarity at small sizes.

- **Scale:** The type scale is intentionally compact. Most operational work happens between 12px and 14px.
- **Data Display:** For metrics, IDs, and sensor readings, a monospaced font (JetBrains Mono) is used to ensure tabular alignment and character differentiation (e.g., distinguishing '0' from 'O').
- **Hierarchy:** Weight (SemiBold/Bold) is used more frequently than size to denote importance, preserving vertical space.
- **Labels:** Small, uppercase labels are used for metadata and table headers to provide a clear visual distinction from live data values.

## Layout & Spacing

This design system utilizes a **Fixed-Fluid Hybrid** layout. A persistent 240px sidebar provides global navigation, while the main content area utilizes a fluid grid that optimizes for wide-screen monitoring.

- **The 4px Grid:** All spacing, padding, and margins are multiples of 4px. This tight rhythm supports the high-density requirement.
- **Density Settings:**
    - **Compact (Default):** 8px cell padding for tables and 12px margins for containers.
    - **Internal Gaps:** Elements within a component (e.g., icon and text) should use 4px or 8px gaps.
- **Sidebar:** A dark-themed sidebar (`#0F172A`) provides a grounded anchor for the application, with navigation items using 32px height for density.
- **Top Navigation:** Reserved for breadcrumbs, global search, and utility actions (profile, settings), fixed at a slim 48px.

## Elevation & Depth

To maintain a clean, professional "Utility" look, the design system avoids heavy shadows and skeuomorphism. Depth is communicated through **Tonal Layering** and **Low-Contrast Outlines**.

- **Level 0 (Background):** Slate-50 (#F8FAFC) for the canvas.
- **Level 1 (Surface):** White (#FFFFFF) for cards and table containers, defined by a 1px Slate-200 border.
- **Level 2 (Popovers/Modals):** These use a very subtle, diffused shadow (0px 4px 12px rgba(0,0,0,0.05)) to separate them from the primary surface without breaking the flat aesthetic.
- **Active State:** Elements being interacted with do not rise; instead, they receive a 2px Primary teal border or a subtle Slate-100 background tint.

## Shapes

The shape language is disciplined and geometric. A **Soft (0.25rem / 4px)** corner radius is applied to almost all elements, including buttons, input fields, and status tiles.

- **Standard Radius:** 4px for primary UI components.
- **Large Radius:** 8px reserved strictly for major container groupings or modals.
- **Sharpness:** The near-sharp corners reinforce the "industrial" and "precise" nature of the tool, distinguishing it from consumer-facing "bubbly" interfaces.

## Components

### Buttons
- **Primary:** Solid Teal (#0891B2) with white text. High contrast.
- **Secondary:** White background with Slate-200 border and Slate-700 text.
- **Ghost:** No border or background until hover. Used for table row actions to reduce visual noise.

### Status Tiles
- Compact containers for real-time metrics.
- Structure: Label (Label-sm), Value (Display-md/Mono), and a 4px left-accent border colored by semantic status (Success/Warning/Error).

### Compact Tables
- **Header:** Slate-50 background, 11px uppercase bold text.
- **Rows:** 32px height. Subtle 1px bottom border. Hover state uses Slate-50 tint.
- **Alignment:** Numbers are right-aligned; text is left-aligned.

### Input Fields
- 32px height. 1px border (#E2E8F0).
- Focused state: 2px Teal border.
- Validation: 12px error text below the field in #EF4444.

### Sidebar Navigation
- Dark background (#0F172A).
- Active state: Left-edge Teal accent (3px) and a subtle background highlight.
- Icons: 18px size, simplified line-art style.

### Chips/Tags
- Small, 20px height. Neutral background for categories, semantic backgrounds for statuses (low opacity with high-contrast text).