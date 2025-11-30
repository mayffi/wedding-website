# GitHub Pages Deployment Guide

This guide will help you deploy your wedding website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `Wedding_web` (or update the `base` path in `vite.config.js` if you use a different name)
3. Make sure it's set to **Public** (required for free GitHub Pages)

## Step 2: Update Repository Name in Config

If your repository name is different from `Wedding_web`, update the `base` path in `vite.config.js`:

```javascript
base: '/Your-Repository-Name/',
```

## Step 3: Initialize Git and Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Wedding website"

# Add your GitHub repository as remote (replace with your username)
git remote add origin https://github.com/YOUR_USERNAME/Wedding_web.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Build the Project

```bash
npm install
npm run build
```

This creates a `dist` folder with all the static files.

## Step 5: Deploy to GitHub Pages

### Option A: Using GitHub Actions (Recommended)

1. Create a `.github/workflows` directory:
```bash
mkdir -p .github/workflows
```

2. Create a file `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. Commit and push:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

4. Go to your repository Settings → Pages
5. Under "Source", select "GitHub Actions"
6. Your site will be available at: `https://YOUR_USERNAME.github.io/Wedding_web/`

### Option B: Manual Deployment (gh-pages branch)

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add deploy script to package.json
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## Step 6: Customize Your Content

Before deploying, make sure to update:

1. **Home.jsx**: Couple names, wedding date
2. **Locations.jsx**: Actual addresses and Google Maps embed URLs
3. **Registry.jsx**: Registry link
4. **Menu.jsx**: Actual menu items
5. **Photos.jsx**: Photo sharing link
6. **RSVP.jsx**: RSVP deadline and max guests

## Getting Google Maps Embed URLs

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your venue address
3. Click "Share" → "Embed a map"
4. Copy the iframe `src` URL
5. Replace the `ceremonyMapUrl` and `receptionMapUrl` in `Locations.jsx`

## Troubleshooting

### 404 Errors on Routes

If you get 404 errors when navigating to routes:
- Make sure the `base` path in `vite.config.js` matches your repository name
- If issues persist, you can switch to HashRouter:
  1. In `src/App.jsx`, change `BrowserRouter` to `HashRouter`:
     ```javascript
     import { HashRouter as Router, Routes, Route } from 'react-router-dom'
     ```
  2. Routes will then use hash-based URLs (e.g., `/#/locations`)

### Images Not Loading

- Use relative paths for images
- Place images in `public` folder and reference as `/image-name.jpg`

### Build Errors

- Make sure all dependencies are installed: `npm install`
- Check Node.js version (should be 16+)

## Updating Your Site

After making changes:

1. Commit and push to main branch
2. GitHub Actions will automatically rebuild and deploy
3. Wait a few minutes for the changes to appear

## Custom Domain (Optional)

1. Go to repository Settings → Pages
2. Enter your custom domain
3. Follow GitHub's instructions for DNS configuration

