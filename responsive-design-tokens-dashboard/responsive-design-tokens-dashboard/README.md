# Responsive Design Tokens & Mobile-First CSS Architecture

A clean, modular, zero-dependency web application demonstrating a scalable **Design Token** system and **Mobile-First CSS Grid / Flexbox** dashboard architecture.

## Folder Structure

```text
responsive-design-tokens-dashboard/
├── index.html          # Semantic HTML5 responsive dashboard layout
├── css/
│   ├── tokens.css      # :root CSS custom properties (colors, fluid type, spacing, radii, themes)
│   ├── reset.css       # Modern CSS reset & zero-horizontal-scroll safeguards
│   ├── layout.css      # Mobile-first CSS Grid & Flexbox breakpoints (320px, 768px, 1024px, 1440px)
│   └── components.css  # Glassmorphism cards, buttons, charts & safe responsive tables
├── js/
│   └── app.js          # Light/Dark theme switcher, mobile drawer & live viewport detector
└── README.md           # Documentation
```

## Key Features Implemented
- **Design Token System (`css/tokens.css`)**: Brand color scales, fluid `clamp()` typography, spacing scales, border radii, and `[data-theme="dark"]` variables.
- **Fluid Breakpoints (`css/layout.css`)**: Mobile-first base (`320px+`), Tablet (`768px+`), Desktop (`1024px+`), and Wide Desktop (`1440px+`).
- **Modern Visual Styling (`css/components.css`)**: Glassmorphism (`backdrop-filter: blur(14px)`), soft layered shadows, and smooth hover transitions.
- **Zero Horizontal Scrollbars (`css/reset.css` & `css/layout.css`)**: Enforced via `minmax(0, 1fr)` grid tracks, `min-width: 0` on flex/grid children, and `overflow-x: hidden`.
