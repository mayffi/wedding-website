# Quick Start Guide

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## Customization Checklist

Before deploying, update these files with your actual wedding information:

### 1. Home Page (`src/pages/Home.jsx`)
- [ ] Update `coupleName1` and `coupleName2` with actual names
- [ ] Update `weddingDate` with actual wedding date/time (format: `'YYYY-MM-DDTHH:mm:ss'`)
- [ ] Update ceremony and reception times in the schedule card

### 2. Locations Page (`src/pages/Locations.jsx`)
- [ ] Update `ceremonyAddress` with actual ceremony venue address
- [ ] Update `receptionAddress` with actual reception venue address
- [ ] Get Google Maps embed URLs:
  1. Go to Google Maps and search for your venue
  2. Click "Share" → "Embed a map"
  3. Copy the iframe `src` URL
  4. Replace `ceremonyMapUrl` and `receptionMapUrl`
- [ ] Update driving and public transport directions
- [ ] Update parking information

### 3. Registry Page (`src/pages/Registry.jsx`)
- [ ] Update `registryLink` with your actual registry URL

### 4. Menu Page (`src/pages/Menu.jsx`)
- [ ] Replace `menuItems` array with your actual menu items
- [ ] Update dish names, ingredients, and dietary tags

### 5. Photos Page (`src/pages/Photos.jsx`)
- [ ] Update `photoLink` with your Google Drive/Dropbox/photo sharing link
- [ ] Update `uploadInstructions` if needed

### 6. RSVP Page (`src/pages/RSVP.jsx`)
- [ ] Update `rsvpDeadline` with actual deadline date
- [ ] Update `maxGuests` with actual maximum guests per invitation

### 7. Meta Tags (`index.html`)
- [ ] Update page title
- [ ] Update meta description
- [ ] Update Open Graph tags for social media sharing

### 8. Vite Config (`vite.config.js`)
- [ ] Update `base` path if your repository name is different from `Wedding_web`

## Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized static files ready for deployment.

## Preview Production Build

```bash
npm run preview
```

## Color Palette Reference

- **Primary**: `#2B508E` (Navy Blue)
- **Secondary**: `#82AED1` (Light Blue)
- **Accent (Gold)**: `#D1AB6D` (Use only for buttons, dividers, icons, highlights)

## Project Structure

```
Wedding_web/
├── public/              # Static assets
├── src/
│   ├── components/     # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── CountdownTimer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Locations.jsx
│   │   ├── Registry.jsx
│   │   ├── Menu.jsx
│   │   ├── Photos.jsx
│   │   └── RSVP.jsx
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main app with routing
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Tips

- All styling uses pure CSS (no frameworks)
- The design is mobile-first and fully responsive
- The countdown timer updates every second automatically
- All pages include proper SEO meta tags
- The site is accessibility compliant with skip links and proper ARIA labels

