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

**Routing**: `src/App.jsx` uses `BrowserRouter` with `basename="/wedding-website/"`. All routes are wrapped in `<Layout>` which renders `<Navbar>`, `<main>`, and `<Footer>`.

**Pages** (`src/pages/`): Each page is self-contained and imports its own CSS file directly. Wedding-specific data (dates, names, URLs) is hardcoded as constants at the top of each component — there is no shared config file.

**Styles**: Global CSS variables and base styles live in `src/styles/index.css`. Each component/page imports its own scoped CSS file from `src/styles/`.

**CSS variables** (defined in `src/styles/index.css`):
- `--primary: #2B508E` (navy blue)
- `--secondary` / `--blue-accent: #82AED1` (light blue) — primary button color
- `--cream-bg: #F8F3EB`
- `--gold-accent: #D1AB6D` — used sparingly for dividers, icons, highlights

## Deployment

Deploys to GitHub Pages. The `base` in `vite.config.js` and `basename` in `src/App.jsx` must both match the GitHub Pages subpath (`/wedding-website/`). If the repo is renamed, update both. For 404s on direct route access, switching to `HashRouter` in `src/App.jsx` is an alternative.

## Content Locations

Wedding-specific content is hardcoded per-page:

| File | What to update |
|------|---------------|
| `src/pages/Home.jsx` | `weddingDate`, `coupleName1`, `coupleName2`, schedule times |
| `src/pages/Locations.jsx` | Venue addresses, Google Maps embed URLs |
| `src/pages/Registry.jsx` | Gift registry items, cash gift details (Supabase-backed) |
| `src/pages/Menu.jsx` | `menuItems` array |
| `src/pages/Photos.jsx` | Photo sharing link |
| `src/pages/RSVP.jsx` | `googleFormUrl` (Google Form embed), contact number |
| `index.html` | Page title, meta description, Open Graph tags |
