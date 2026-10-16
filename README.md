# OpenBuild IDE — Website

Static website (HTML + CSS + vanilla JS) for **OpenBuild IDE**, an Android development environment for building Android apps on a phone. No build step, no npm, no backend.

## Structure
Flat: every file is in the project root, with no folders, so it uploads from a phone to GitHub.
```
index.html  styles.css  script.js  site-config.js  404.html
robots.txt  sitemap.xml  vercel.json
logo.svg  favicon.svg  favicon-48.png  apple-touch-icon.png  openbuild-logo-512.png
openbuild-banner-original.png  openbuild-social-card.jpg
PRD.md  MASTER_PROMPT.md
```

## Preview
Open `index.html` in a browser. For a local server: `python3 -m http.server 8000` (works in Termux), then visit `http://localhost:8000`. Note: `404.html` uses root paths (`/styles.css`), so it renders correctly on a server or Vercel, not by double-clicking.

## Change links (all in `site-config.js`)
- `downloadUrl` → Download buttons. `githubUrl` → "View Source" and footer GitHub link. `documentationUrl` → reserved for a future docs link.
- Use `https://` URLs only. Empty = the button stays visible and shows a "not configured yet" note; nothing navigates.

## Branding
The logo is the OpenBuild app icon (`openbuild-logo-512.png`), also traced as `logo.svg` / `favicon.svg`; PNG favicon and `apple-touch-icon.png` are generated from it. To rebrand, replace these four files. Colors and fonts are CSS variables at the top of `styles.css`. Fonts use system fallbacks (Manrope/Inter/JetBrains Mono apply only if installed) so no external requests are made.

## Social image
Replace `openbuild-social-card.jpg` with a 1200 × 630 JPG (keep the filename or update the `og:image`/`twitter:image` tags).

## Deploy on Vercel
Push this folder to GitHub (the GitHub mobile site works), then in Vercel choose **Add New → Project**, import the repo, framework preset **Other**, no build command, output directory blank. `vercel.json` adds security headers.

## Before public launch
1. Replace `REPLACE-WITH-YOUR-DOMAIN.example` in `index.html`, `robots.txt`, `sitemap.xml`; add a `<link rel="canonical">`.
2. Set `downloadUrl` / `githubUrl` when real.
3. Confirm the open-source/licensing wording once a repository exists. The supplied banner artwork itself says "open-source", and "Download/GitHub" buttons that are not clickable.
4. Review roadmap statuses and the FAQ answers.
