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
Deployed as a static / autoscale site serving the HTML files. Also targeted for GitHub Pages at `https://shokhersrity.github.io/` (push from the Replit Git pane).

## SEO
All five pages have a full SEO head block:
- Keyword-rich `<title>` and `<meta description>` (brand + service + locations: Bangladesh, Faridpur, Dhaka, Bhanga)
- Comprehensive `<meta keywords>` covering brand variants (incl. Bengali শখের স্মৃতি) and service keywords (bridal, holud, engagement, reception, pre-wedding, baby shoot, cinematography)
- `canonical` URLs pointing to `https://shokhersrity.github.io/<page>`
- `geo.region`, `geo.placename`, `geo.position`, `ICBM` for Bangladesh / Bhanga, Faridpur
- Open Graph + Twitter Card meta for rich previews on Facebook / WhatsApp / X
- `theme-color`, `apple-touch-icon`
- Schema.org JSON-LD per page:
  - `index.html`: `LocalBusiness`/`ProfessionalService` + `WebSite`
  - `contact.html`: `ContactPage` + `FAQPage` (mirrors the on-page FAQ)
  - `gallery.html`: `ImageGallery`
  - `packages.html`: `Service` with `OfferCatalog` (Standard/Premium/Exclusive)
  - `reels.html`: `CollectionPage` referencing wedding cinematography
- `robots.txt` allows all crawlers and points to `sitemap.xml`
- `sitemap.xml` lists all 5 pages with image entry on the homepage
- `.nojekyll` ensures GitHub Pages serves files as-is without Jekyll processing
