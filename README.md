# NUU Cafe Website

Three-page static website prepared for **NUU Cafe | Bakery & Brunch**, Soong, Mactan, Lapu-Lapu City.

## Pages
- `index.html` — Home / automatic hero carousel / atmosphere / highlights
- `menu.html` — Filterable menu presentation
- `visit.html` — Location, contact, map and visit details

## Design system
The theme follows the cafe's publicly described nature-inspired Filipino aesthetic:
- Forest green `#1F3A32` — primary brand/background color; communicates calm, nature and premium hospitality.
- Cream `#F7F2E8` — primary canvas; warmer and less harsh than pure white.
- Sand `#E6D6BD` + bamboo `#B98E5A` — references woven/bamboo and natural architectural textures.
- Coffee `#5B3B2D` — sparingly used as a supporting warm tone.
- Leaf `#6F8666` — secondary botanical accent.

The visual rule is roughly **60/30/10**: 60% cream/light neutrals, 30% forest/leaf greens, 10% warm bamboo/coffee accents.

## Images
The prototype intentionally uses remote royalty-free imagery from **Unsplash** and **Pexels** as visual stand-ins. Before production, replace these with NUU Cafe-owned photos exported from the official Facebook/brand archive whenever possible.

Search references used for the visual direction:
- NUU Cafe official Facebook page: https://web.facebook.com/p/NUU-CAFE-61590220351734/
- Public coverage describes bamboo-inspired / banig-style detailing, natural textures, high ceilings, coffee, pastries and brunch.

### Recommended production image structure
Create files under `assets/img/`:
- `hero-01.webp` — strongest exterior/interior 1800×1200
- `hero-02.webp` — seating/interior 1800×1200
- `hero-03.webp` — coffee/food detail 1800×1200
- `menu-coffee.webp` — 1200×900
- `menu-bakery.webp` — 1200×900
- `menu-brunch.webp` — 1200×900

Prefer WebP/AVIF, ~150–350 KB per image where practical.

## Content that MUST be confirmed before public launch
1. Current official opening hours.
2. Exact street address / Google Maps pin.
3. Full official menu item names and prices.
4. Official logo / wordmark.
5. Official social accounts other than Facebook.
6. Final production domain.

The current public listing used during preparation showed `0927 998 2671` and Soong Dos, Mactan, Lapu-Lapu City.

## SEO setup
Already included:
- Unique `<title>` and meta description per page.
- Canonical URLs.
- Open Graph metadata.
- Responsive viewport.
- Semantic headings, nav, main, sections and footer.
- Descriptive image alt text.
- `robots.txt`.
- `sitemap.xml`.
- LocalBusiness / Cafe schema JSON-LD on home.
- Lazy loading for non-critical images.

Before deployment, replace every `YOUR-DOMAIN.vercel.app` with the actual Vercel domain or custom domain in:
- `index.html`
- `menu.html`
- `visit.html`
- `robots.txt`
- `sitemap.xml`

After launch, submit the sitemap to Google Search Console.

## Run locally
No build step is required.

### Option A — VS Code Live Server
1. Open this folder in VS Code.
2. Install the “Live Server” extension.
3. Right-click `index.html` → **Open with Live Server**.

### Option B — Node static server
```bash
npx serve .
```
Open the local URL shown in the terminal.

## Deploy to Vercel — GitHub method (recommended)
1. Create a new GitHub repository, e.g. `nuu-cafe-website`.
2. Put all files from this folder in the repository root.
3. Commit and push:
```bash
git init
git add .
git commit -m "Initial NUU Cafe website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nuu-cafe-website.git
git push -u origin main
```
4. Log in at Vercel.
5. Choose **Add New → Project**.
6. Import the GitHub repository.
7. Framework preset: **Other**.
8. Build command: leave empty.
9. Output directory: leave empty / `.`.
10. Click **Deploy**.
11. Vercel will issue a URL similar to `https://nuu-cafe-website.vercel.app`.
12. Replace `YOUR-DOMAIN.vercel.app` in the SEO files with the real assigned domain and push again.

## Deploy to Vercel — CLI method
Install and login:
```bash
npm install -g vercel
vercel login
```
From the project directory:
```bash
vercel
```
Answer the prompts, then deploy production:
```bash
vercel --prod
```

## Custom domain
In Vercel:
1. Open the project.
2. Go to **Settings → Domains**.
3. Add your domain, e.g. `nuucafe.ph` or `nuucafemactan.com`.
4. Follow Vercel's DNS records exactly.
5. Once verified, update canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml` to the custom domain.
6. Redeploy.

## Updating the theme
All theme colors are in `assets/css/styles.css` under `:root`. Change the CSS variables only; the rest of the site will inherit them.

## Updating the carousel
On `index.html`, edit the three `.hero-slide` blocks. The slider automatically advances every 5.2 seconds. It respects `prefers-reduced-motion` styling.

## Production checklist
- Replace stock images with NUU-owned photography.
- Insert official menu and pricing.
- Confirm business hours and exact address.
- Replace text-only “N” mark with the official optimized SVG/WebP logo if provided.
- Replace all placeholder domain values.
- Test mobile at 320/375/430 px, tablet around 768/1024 px, desktop 1440 px and large screen 1920 px.
- Run Lighthouse and target 90+ for Performance, Accessibility, Best Practices and SEO.
- Connect Google Search Console after domain verification.
