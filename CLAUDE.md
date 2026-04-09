# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Build to dist/
npm run preview  # Preview the production build locally
```

No tests or linting are configured.

## Architecture

React 18 + Vite + React Router v6 SPA. No CSS frameworks — all styling is pure CSS with CSS custom properties.

**Routing**: `src/App.jsx` uses `BrowserRouter` with `basename="/"`. All routes are wrapped in `<Layout>` which renders `<Navbar>`, `<main>`, and `<Footer>`.

**Config**: `src/config/wedding.js` is the single source of truth for all wedding-specific content (names, dates, venues, schedule, menu, registry items, etc.). Pages import from this file rather than hardcoding data.

**Pages** (`src/pages/`): Each page is self-contained and imports its own CSS file directly.

**Components** (`src/components/`): Shared components include `Navbar`, `Footer`, `CountdownTimer`, `Layout`, and `WelcomeAnimation` (canvas-based animated welcome banner on the home page).

**Styles**: Global CSS variables and base styles live in `src/styles/index.css`. Each component/page imports its own scoped CSS file from `src/styles/`.

**CSS variables** (defined in `src/styles/index.css`):
- `--primary: #2B508E` (navy blue)
- `--secondary` / `--blue-accent: #82AED1` (light blue) — primary button color
- `--cream-bg: #FFFDF9` (off-white/cream background)
- `--gold-accent: #D1AB6D` — used sparingly for dividers, icons, highlights

## Deployment

Deploys to GitHub Pages at **samay.wedding** (custom domain). The `base` in `vite.config.js` and `basename` in `src/App.jsx` are both set to `/`. Deployment is triggered via `.github/workflows/deploy.yml` using `workflow_dispatch`.

The workflow requires two GitHub repository secrets:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Analytics

Visitor tracking uses [GoatCounter](https://goatcounter.com) (privacy-friendly, no cookies, GDPR compliant). The script is loaded in `index.html`. Dashboard: https://mayffi.goatcounter.com

## Content Locations

All wedding-specific content is centralized in the config file:

| File | What to update |
|------|---------------|
| `src/config/wedding.js` | Names, dates, venues, directions, schedule, menu items, Tally form URL, registry items, cash gift details, notices |
| `index.html` | Page title, meta description, Open Graph tags, GoatCounter script |
