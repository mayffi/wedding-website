# Wedding Website

A fully responsive static wedding website built with React, Vite, and React Router.

## Tech Stack

- React 18
- Vite
- React Router v6
- Supabase (registry backend)
- Pure CSS (no frameworks)

## Getting Started

### Prerequisites

- Node.js 24+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Build to dist/
npm run preview  # Preview the production build locally
```

## Deployment

Deploys to GitHub Pages via `.github/workflows/deploy.yml`, triggered manually with `workflow_dispatch`.

The workflow requires two GitHub repository secrets for the build:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

The `base` in `vite.config.js` and `basename` in `src/App.jsx` must match the GitHub Pages serving path (currently `/`). If the site is served from a subpath, update both values.

## Customization

Wedding-specific content is hardcoded per page:

| File | What to update |
|------|----------------|
| `src/pages/Home.jsx` | `weddingDate`, `coupleName1`, `coupleName2`, schedule times |
| `src/pages/Locations.jsx` | Venue addresses, Google Maps embed URLs |
| `src/pages/Menu.jsx` | `menuItems` array |
| `src/pages/Photos.jsx` | Photo sharing link |
| `src/pages/RSVP.jsx` | `googleFormUrl` (Google Form embed), contact number |
| `src/pages/Registry.jsx` | Gift registry items, cash gift details (Supabase-backed) |
| `index.html` | Page title, meta description, Open Graph tags |

## Color Palette

- Primary: `#2B508E` (navy blue)
- Secondary: `#82AED1` (light blue)
- Gold: `#D1AB6D` (dividers, icons, highlights)
