# ShokherSrity — Wedding Photography Website

## Overview
Static HTML/CSS/JS website for ShokherSrity, a premium wedding photography service in Bangladesh. The site features a homepage, gallery, reels, packages, and contact page, plus an embedded WhatsApp widget.

## Project Layout
- `index.html`, `gallery.html`, `reels.html`, `packages.html`, `contact.html` — page templates
- `style.css` — main stylesheet
- `script.js` — main client-side script
- `whatsapp-widget.js` — WhatsApp chat widget
- `image_catalog.js` / `image_catalog.json` — image catalog data
- `attached_assets/` — image assets
- `scripts/` — utility scripts (e.g. cheat sheet generator)

## Replit Setup
- Workflow `Start application` serves the static files via `python3 -m http.server 5000 --bind 0.0.0.0`
- Frontend bound to `0.0.0.0:5000` for the Replit preview proxy
- No backend; pure static site

## Deployment
Deployed as a static / autoscale site serving the HTML files.
