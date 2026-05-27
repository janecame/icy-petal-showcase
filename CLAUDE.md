# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, hot reload)
npm run build      # Production build
npm run lint       # ESLint
npm run test       # Run tests once (Vitest)
npm run test:watch # Run tests in watch mode
npm run preview    # Preview production build locally
```

To run a single test file:
```bash
npx vitest run src/path/to/file.test.ts
```

## Architecture

This is a **single-page personal portfolio** (Rodrigo Cuello) built with Vite + React + TypeScript. It has no routing beyond a single index route and a 404 fallback.

### Page structure

`src/pages/Index.tsx` composes the full page as stacked full-screen sections:

```
Sidebar (fixed, left) + HeroSection + ProjectsSection + ExperienceSection + ContactSection
```

Each section has an `id` attribute (`hero`, `projects`, `experience`, `contact`). The `Sidebar` uses `IntersectionObserver` to track the active section and highlights the corresponding nav icon. On mobile (`<md` breakpoint), the sidebar collapses into a hamburger + `Drawer`.

### UI framework split

There are **two UI libraries** installed but used for different things:

- **MUI (`@mui/material`)** — used for all actual portfolio section components. The custom MUI theme lives in `src/theme.ts` (colors: `#A0B4C8` blue-grey, `#F2D5D9` rose, `#2C3E50` dark, background `#F9F6EF`).
- **shadcn/ui + Radix UI** (`src/components/ui/`) — the full shadcn component library is installed but not used in the portfolio sections. These components are available for future use.

When adding new portfolio UI, use MUI components and follow the existing `sx` prop styling patterns.

### Content data

Portfolio content is centralized in `src/data/portfolio.ts`, which exports `projects`, `experience`, and `education` arrays. **Exception:** `ExperienceSection.tsx` currently defines its own local `experience` array inline (the import from `portfolio.ts` is commented out). The `portfolio.ts` data reflects a placeholder/template profile, while `ExperienceSection.tsx` reflects the real timeline.

### Static assets

`public/rodrigo-cuello-cv.pdf` — the CV file linked by the "Download CV" button in `HeroSection`. Must be present in `public/` for the download to work.

### Testing

Tests live in `src/test/` with setup in `src/test/setup.ts` (imports `@testing-library/jest-dom`). Vitest is configured with `jsdom` environment and `globals: true`. The `@` alias resolves to `src/`.

### Path alias

`@/` maps to `src/` — configured in both `vite.config.ts` and `vitest.config.ts`.
