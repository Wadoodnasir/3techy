# Next.js Landing Page

This is a Next.js conversion of the original WordPress/Elementor landing page.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Download assets (images, CSS, JS):
   - Images need to be downloaded from the original site
   - Use the `extract_assets.py` script to get a list of all assets
   - Download images to `public/images/`
   - The script `assets.json` contains all asset URLs

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Header component with navigation
│   ├── Footer.tsx       # Footer component
│   └── Scripts.tsx      # Client-side JavaScript functionality
├── lib/
│   └── analytics-stubs.ts  # Analytics stub functions
├── public/
│   └── images/         # All images (need to be downloaded)
├── styles/
│   └── elementor.css    # Elementor-specific styles
└── package.json
```

## Key Features

- ✅ All `beetechy.com` links replaced with `xyz.com` (paths preserved)
- ✅ Analytics scripts stubbed out (no external calls)
- ✅ Responsive design maintained
- ✅ All interactive elements working (menu toggle, back-to-top, etc.)
- ✅ Lazy loading for background images
- ✅ Sticky header functionality

## Notes

- Images need to be downloaded from the original site and placed in `public/images/`
- All links point to `xyz.com` domain (you can change this later)
- Analytics tracking is stubbed - no external calls are made
- The page structure matches the original HTML exactly

## Building for Production

```bash
npm run build
npm start
```

