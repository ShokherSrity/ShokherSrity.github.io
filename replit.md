# ShokherSrity — Wedding Photography Website

## Overview
Static HTML/CSS/JS website for ShokherSrity, a premium wedding photography service in Bangladesh. The site features a homepage, gallery, reels, packages, and contact page, plus an embedded WhatsApp widget.

## Project Layout
- `index.html`, `gallery.html`, `reels.html`, `packages.html`, `contact.html` — page templates
- `style.css` — main stylesheet (Golden Liquid Glass design system)
- `script.js` — main client-side script
- `whatsapp-widget.js` — WhatsApp chat widget
- `pwa.js` — PWA service worker registration + 3-second welcome notification
- `sw.js` — service worker (cache-first strategy, push notification support)
- `manifest.json` — PWA web app manifest
- `image_catalog.js` / `image_catalog.json` — image catalog data
- `attached_assets/` — image assets
- `scripts/` — utility scripts (e.g. cheat sheet generator)

## Replit Setup
- Workflow `Start application` serves the static files via `python3 -m http.server 5000 --bind 0.0.0.0`
- Frontend bound to `0.0.0.0:5000` for the Replit preview proxy
- No backend; pure static site

## Deployment
Deployed as a static / autoscale site serving the HTML files. Also targeted for GitHub Pages at `https://shokhersrity.github.io/` (push from the Replit Git pane).

## Architecture Decisions
- **Glassmorphism token system**: Nav surface uses CSS custom properties (`--nav-bg`, `--nav-blur`, `--nav-border`) so the header and mobile drawer share one unified frosted-glass surface
- **Glass rules by element type**: sticky navbar = blur(12px)/60% opacity/0 radius; cards = blur(8px)/50-60%/preserve radius; modals = blur(20px)/70%/20px radius; full-screen overlays (lightbox, modal backdrop) = blur(40px)/40%; tooltips/small buttons = blur(6px)/85%
- **PWA**: `manifest.json` + `sw.js` (cache-first) + `pwa.js` — notification permission requested 3 seconds after page load
- **Dark mode glass**: Dark-context elements use `rgba(15,15,20,0.65)` bg + `rgba(255,255,255,0.10)` border; light-context elements use `rgba(255,255,255,0.60)` bg + `rgba(255,255,255,0.40)` border

## SEO
All five pages have a full SEO head block:
- Keyword-rich `<title>` and `<meta description>` (brand + service + locations: Bangladesh, Faridpur, Dhaka, Bhanga)
- Comprehensive `<meta keywords>` covering brand variants (incl. Bengali শখের স্মৃতি) and service keywords
- `canonical` URLs pointing to `https://shokhersrity.github.io/<page>`
- Open Graph + Twitter Card meta; Schema.org JSON-LD per page
- `robots.txt`, `sitemap.xml`, `.nojekyll` for GitHub Pages

## Product
- Homepage with hero, about, featured gallery, testimonials, CTA
- Masonry photo gallery with category filters and lightbox
- Immersive vertical-scroll reels/video page
- Packages page with 3 tiers + custom price calculator
- Contact page with cards, hours, FAQ accordion, map
