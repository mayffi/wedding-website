# Supabase Shared Wishlist Design

**Goal:** Replace per-browser localStorage purchased state with a shared Supabase database so all guests see the same purchased/available status in real-time.

---

## Database

Table: `purchased_items` (Supabase / Postgres)

| Column | Type | Constraints |
|--------|------|-------------|
| `item_id` | text | PRIMARY KEY |
| `browser_id` | uuid | NOT NULL |
| `created_at` | timestamptz | DEFAULT now() |

Row Level Security: public read, public insert, public delete. UI logic enforces the "only unmark your own" rule — appropriate for a wedding guest list.

## Anonymous Identity

On first visit a UUID is generated and saved to `localStorage` as `wedding_browser_id`. This persists across page refreshes on the same device/browser. If a guest clears storage or uses a different device they get a new identity and cannot unmark their previous selection.

## Client (`src/pages/Wishlist.jsx`)

- On mount: fetch all rows from `purchased_items`; subscribe to real-time INSERT/DELETE events
- Real-time handler updates state instantly for all guests on the page
- Three button states per item:
  - No row → **"Mark as Purchased"** (insert row with own `browser_id`)
  - Row with matching `browser_id` → **"Unmark my selection"** (delete row)
  - Row with different `browser_id` → **button hidden** (item visually purchased)
- Remove the old `wishlist-note` paragraph (the localStorage caveat no longer applies)
- Loading state while initial fetch is in progress

## Environment Variables

| Variable | Where |
|----------|-------|
| `VITE_SUPABASE_URL` | `.env.local` (local), GitHub secret (CI) |
| `VITE_SUPABASE_ANON_KEY` | `.env.local` (local), GitHub secret (CI) |

Supabase anon key is designed to be public-facing — safe to bake into the built JS.

## GitHub Actions Workflow

File: `.github/workflows/deploy.yml`

Trigger: push to `main`

Steps:
1. Checkout repo
2. Set up Node.js
3. Install dependencies (`npm ci`)
4. Build (`npm run build`) with secrets injected as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
5. Deploy `dist/` to GitHub Pages via `actions/deploy-pages`

## New Dependency

`@supabase/supabase-js` — official Supabase JavaScript client

## Files Changed

| Action | File |
|--------|------|
| Create | `src/lib/supabase.js` — initialise and export Supabase client |
| Modify | `src/pages/Wishlist.jsx` — replace localStorage logic with Supabase |
| Create | `.github/workflows/deploy.yml` — CI/CD pipeline |
| Create | `.env.local` — local dev env vars (gitignored) |
