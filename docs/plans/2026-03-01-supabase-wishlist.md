# Supabase Shared Wishlist Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace per-browser localStorage purchased state with a shared Supabase database so all guests see the same purchased/available status in real-time.

**Architecture:** A single `purchased_items` table in Supabase stores which items are taken and by which anonymous browser ID. The React page fetches the table on mount and subscribes to real-time changes — any guest marking or unmarking instantly updates every open browser. Each guest's browser ID is a UUID stored in localStorage, giving them identity without requiring login.

**Tech Stack:** React 18, Vite, @supabase/supabase-js, Supabase Postgres + Realtime, GitHub Actions

---

### Codebase conventions

- Pages in `src/pages/`, CSS in `src/styles/`, shared config in `src/config/wedding.js`
- Shared library files go in `src/lib/`
- CSS variables: `--primary: #2B508E`, `--blue-accent: #82AED1`, `--cream-bg: #F8F3EB`, `--text-dark: #2c3e50`
- Dev server: `npm run dev` → http://localhost:5173/wedding-website/wishlist
- No test suite — verification is manual in the browser

---

### Task 1: Create the Supabase project and database table

**This task is manual — no code to write. Do it in the Supabase dashboard.**

**Step 1: Create a Supabase project**

1. Go to https://supabase.com and sign in (or create a free account)
2. Click "New project"
3. Choose a name (e.g. `wedding-website`), set a database password, pick the closest region (Europe West for Finland)
4. Wait ~2 minutes for the project to provision

**Step 2: Create the table**

In the Supabase dashboard: go to **SQL Editor** → **New query**, paste and run:

```sql
create table purchased_items (
  item_id    text        primary key,
  browser_id uuid        not null,
  created_at timestamptz default now()
);

alter table purchased_items enable row level security;

create policy "public read"   on purchased_items for select using (true);
create policy "public insert" on purchased_items for insert with check (true);
create policy "public delete" on purchased_items for delete using (true);
```

Click **Run**. Verify the table appears under **Table Editor → purchased_items**.

**Step 3: Get your credentials**

In the dashboard: go to **Project Settings → API**. Note down:
- **Project URL** (e.g. `https://xyzxyzxyz.supabase.co`)
- **anon / public key** (the long JWT string under "Project API keys")

You'll need these in Task 2.

---

### Task 2: Install the Supabase client and create `.env.local`

**Files:**
- Modify: `package.json` (via npm install)
- Create: `.env.local` (gitignored — never commit this file)

**Step 1: Install the package**

```bash
npm install @supabase/supabase-js
```

Expected: package added to `node_modules` and `package.json` dependencies.

**Step 2: Create `.env.local`**

Create the file `/Users/mayfred/Projects/Wedding_web/.env.local` with your credentials from Task 1:

```
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace the placeholder values with the real ones from the Supabase dashboard.

**Step 3: Verify the file is gitignored**

```bash
git check-ignore -v .env.local
```

Expected output: `.gitignore:12:*.local    .env.local`

If it doesn't appear, stop and do not proceed — the file must never be committed.

**Step 4: Commit the dependency**

```bash
git add package.json package-lock.json
git commit -m "feat: add @supabase/supabase-js dependency"
```

---

### Task 3: Create the Supabase client module

**Files:**
- Create: `src/lib/supabase.js`

**Step 1: Create the file**

```js
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)
```

**Step 2: Verify it loads without errors**

Run `npm run dev` and open http://localhost:5173/wedding-website/wishlist in the browser. Open DevTools → Console. There should be no errors about missing environment variables.

**Step 3: Commit**

```bash
git add src/lib/supabase.js
git commit -m "feat: add Supabase client module"
```

---

### Task 4: Rewrite Wishlist.jsx with Supabase

**Files:**
- Modify: `src/pages/Wishlist.jsx`

Replace the entire file contents with:

```jsx
import { useState, useEffect } from 'react'
import '../styles/Wishlist.css'
import { cashGift, wishlist } from '../config/wedding'
import { supabase } from '../lib/supabase'

const BROWSER_ID_KEY = 'wedding_browser_id'

function getBrowserId() {
  let id = localStorage.getItem(BROWSER_ID_KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(BROWSER_ID_KEY, id)
  }
  return id
}

function Wishlist() {
  const [browserId] = useState(getBrowserId)
  const [purchased, setPurchased] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Wedding Registry - Wedding Celebration'
  }, [])

  useEffect(() => {
    supabase
      .from('purchased_items')
      .select('item_id, browser_id')
      .then(({ data, error }) => {
        if (!error && data) setPurchased(data)
        setLoading(false)
      })

    const channel = supabase
      .channel('purchased_items_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'purchased_items' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setPurchased((prev) => [...prev, payload.new])
          } else if (payload.eventType === 'DELETE') {
            setPurchased((prev) =>
              prev.filter((p) => p.item_id !== payload.old.item_id)
            )
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  async function markPurchased(itemId) {
    await supabase
      .from('purchased_items')
      .insert({ item_id: itemId, browser_id: browserId })
  }

  async function unmarkPurchased(itemId) {
    await supabase
      .from('purchased_items')
      .delete()
      .eq('item_id', itemId)
      .eq('browser_id', browserId)
  }

  return (
    <div className="wishlist-page">
      {/* ── Cash Gift Section ── */}
      <section className="cash-gift-section">
        <div className="container">
          <div className="cash-gift-card">
            <div className="cash-gift-icon">♥</div>
            <h2 className="cash-gift-title">Cash Gift</h2>
            <p className="cash-gift-message">{cashGift.message}</p>
            <div className="cash-gift-details">
              <div className="cash-gift-row">
                <span className="cash-gift-label">MobilePay</span>
                <span className="cash-gift-value">{cashGift.mobilePay}</span>
              </div>
              <div className="cash-gift-divider" />
              <div className="cash-gift-row">
                <span className="cash-gift-label">Bank Transfer (IBAN)</span>
                <span className="cash-gift-value">{cashGift.iban}</span>
              </div>
              <div className="cash-gift-row cash-gift-row--sub">
                <span className="cash-gift-label">Bank</span>
                <span className="cash-gift-value">{cashGift.bankName}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gift Items Section ── */}
      <section className="wishlist-section">
        <div className="container">
          <h1 className="wishlist-page-title">Wedding Registry</h1>
          <p className="wishlist-intro">
            Here are some things we would love to have in our new home together.
            If you'd like to give one of these gifts, please click "Mark as
            Purchased" so other guests know it's been taken.
          </p>

          {loading ? (
            <p className="wishlist-loading">Loading...</p>
          ) : (
            <div className="wishlist-grid">
              {wishlist.items.map((item) => {
                const purchaseRow = purchased.find((p) => p.item_id === item.id)
                const isPurchased = !!purchaseRow
                const isMyPurchase = purchaseRow?.browser_id === browserId

                return (
                  <div
                    key={item.id}
                    className={`gift-card ${isPurchased ? 'gift-card--purchased' : ''}`}
                  >
                    <div className="gift-card__image-wrapper">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="gift-card__image"
                        loading="lazy"
                      />
                      {isPurchased && (
                        <div className="gift-card__purchased-overlay" aria-hidden="true">
                          <span>Purchased</span>
                        </div>
                      )}
                    </div>
                    <div className="gift-card__body">
                      <h3 className="gift-card__name">{item.name}</h3>
                      <p className="gift-card__price">{item.price}</p>
                      <div className="gift-card__actions">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn gift-card__link"
                          aria-label={`View ${item.name}`}
                        >
                          View Item
                        </a>
                        {!isPurchased && (
                          <button
                            className="gift-card__toggle"
                            onClick={() => markPurchased(item.id)}
                            aria-pressed={false}
                          >
                            Mark as Purchased
                          </button>
                        )}
                        {isMyPurchase && (
                          <button
                            className="gift-card__toggle gift-card__toggle--undo"
                            onClick={() => unmarkPurchased(item.id)}
                            aria-pressed={true}
                          >
                            Unmark my selection
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Wishlist
```

**Step 2: Verify in the browser**

With `npm run dev` running, open http://localhost:5173/wedding-website/wishlist

Check:
- [ ] "Loading..." appears briefly then the gift grid renders
- [ ] Clicking "Mark as Purchased" on an item → item greys out, overlay appears, button disappears
- [ ] "Unmark my selection" button appears on cards you marked
- [ ] No "Unmark" button on cards marked by others (test by opening a second browser/incognito tab and marking from there)
- [ ] In the Supabase dashboard → Table Editor → `purchased_items`, rows appear when you mark items
- [ ] Open two browser windows side by side — marking in one instantly updates the other

**Step 3: Commit**

```bash
git add src/pages/Wishlist.jsx
git commit -m "feat: replace localStorage with Supabase real-time purchased state"
```

---

### Task 5: Add `.wishlist-loading` style to Wishlist.css

**Files:**
- Modify: `src/styles/Wishlist.css`

**Step 1: Add the style**

In `src/styles/Wishlist.css`, add the following after the `.wishlist-intro` rule (around line 101):

```css
.wishlist-loading {
  text-align: center;
  color: var(--text-dark);
  opacity: 0.6;
  font-style: italic;
  padding: 40px 0;
}
```

**Step 2: Commit**

```bash
git add src/styles/Wishlist.css
git commit -m "feat: add loading state style for wishlist"
```

---

### Task 6: Create the GitHub Actions deployment workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

**Step 1: Create the directory and file**

```bash
mkdir -p .github/workflows
```

Create `.github/workflows/deploy.yml` with:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci

      - run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - id: deployment
        uses: actions/deploy-pages@v4
```

**Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Actions deployment workflow"
```

---

### Task 7: Configure GitHub repository settings

**This task is manual — done in the GitHub web interface.**

**Step 1: Switch GitHub Pages source to GitHub Actions**

1. Go to https://github.com/mayffi/wedding-website
2. Click **Settings** → **Pages**
3. Under "Build and deployment" → "Source", change from **"Deploy from a branch"** to **"GitHub Actions"**
4. Save

**Step 2: Add repository secrets**

Still in Settings, go to **Secrets and variables → Actions → New repository secret**. Add two secrets:

| Name | Value |
|------|-------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon key |

**Step 3: Push and verify deployment**

```bash
git push origin main
```

Then go to the repository **Actions** tab and watch the workflow run. It should complete in ~1-2 minutes. When done, the live site at `https://mayffi.github.io/wedding-website/` should show the updated registry page.

---

### Summary of files changed

| Action | File |
|--------|------|
| Create | `src/lib/supabase.js` |
| Modify | `src/pages/Wishlist.jsx` |
| Modify | `src/styles/Wishlist.css` |
| Create | `.github/workflows/deploy.yml` |
| Create | `.env.local` (never committed) |

### Key design decisions

- **`getBrowserId` as `useState` lazy initializer** — same pattern as the original `loadPurchased`, called once on mount
- **Real-time via `postgres_changes`** — Supabase channel subscribes to INSERT and DELETE events; the handler updates local state so all open browsers reflect changes instantly
- **No optimistic updates** — the real-time subscription is fast enough (~100ms) that local optimistic state adds complexity without meaningful UX benefit
- **RLS allows all anon operations** — the UI enforces "only unmark your own"; server-side enforcement would require a proper auth system, which is out of scope for a wedding site
