# Wedding Website

A fully responsive wedding website for Samuel & Mayfred, built with React, Vite, and React Router. Live at **samay.wedding**.

## Tech Stack

- React 18
- Vite
- React Router v6
- Supabase (gift registry backend)
- GoatCounter (privacy-friendly analytics)
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

Deploys to GitHub Pages at **samay.wedding** via `.github/workflows/deploy.yml`, triggered manually with `workflow_dispatch`.

The workflow requires two GitHub repository secrets:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

The `base` in `vite.config.js` and `basename` in `src/App.jsx` must match the serving path (currently `/`).

## Customization

All wedding-specific content lives in one place:

| File | What to update |
|------|----------------|
| `src/config/wedding.js` | Names, dates, venues, directions, schedule, menu, Tally form URL, registry items, cash gift details, notices |
| `index.html` | Page title, meta description, Open Graph tags, GoatCounter script |

## Analytics

Visitor tracking via [GoatCounter](https://goatcounter.com) — no cookies, GDPR compliant. Dashboard: https://mayffi.goatcounter.com

## Color Palette

- Primary: `#2B508E` (navy blue)
- Secondary: `#82AED1` (light blue)
- Background: `#FFFDF9` (cream)
- Gold: `#D1AB6D` (dividers, icons, highlights)
