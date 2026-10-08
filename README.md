# URBAN THREADS — Affiliate Fashion Storefront

A single-page women's and girls' fashion discovery site built with plain HTML, CSS and JavaScript. It doesn't sell anything: every product links out to an affiliate retailer.

> **Placeholders:** all product data, images and affiliate links are placeholders. Product links point to retailer search pages (Amazon / Myntra), and one product deliberately uses `YOUR_AFFILIATE_LINK` to show the "link unavailable" message. Replace everything before going live.

## Run locally
Open `index.html` in a browser. No install or build step. (Google Fonts and Unsplash images need an internet connection; the layout falls back to system fonts and a neutral placeholder tile if they fail.)

## Project structure
```
urban-threads/
├── index.html
├── css/style.css
├── js/app.js
└── README.md
```

## Product data
All products live in the `PRODUCTS` array at the top of `js/app.js`:

```js
{
  id: 1,                          // unique number
  name: "Floral Wrap Midi Dress",
  category: "Dresses",             // must match a name in CATEGORIES
  brand: "Bloom & Co",
  price: 999,
  originalPrice: 1499,            // optional; discount % is calculated
  images: ["url1", "url2"],       // first is the card image; extras become modal thumbnails
  description: "…",
  sizes: ["S", "M", "L"],         // [] hides the size picker (e.g. watches)
  colors: ["White", "Blue"],      // [] hides the colour picker
  highlights: ["…", "…"],
  affiliateUrl: "https://…",
  badge: "NEW",                   // optional: NEW, TRENDING, BESTSELLER
  featured: true,                 // optional: shows in "Featured"
  added: "2026-09-12"             // used by "Newest" sort
}
```

- **Add a product:** copy an object, give it a new `id`, and edit the fields.
- **Replace images:** change the URLs in `images` (category tile images are in `CATEGORIES`, inspiration tiles and hero are in `index.html`).
- **Add affiliate links:** set `affiliateUrl` for each product to your own tracking URL. Only `http(s)` URLs work; anything else (or text containing `YOUR_`) shows a friendly message instead of navigating.
- **Add a category:** add an entry to `CATEGORIES` (name, desc, image). Category cards, filter pills and footer links are generated from it. To also add a nav link, add `<a href="#collection" data-cat="Name">` in `index.html`.
- **Colour swatches:** add unknown colour names to `COLOR_MAP` in `app.js`.
- **Size requirement:** set `REQUIRE_SIZE = false` to allow Shop Now without picking a size.

## How it works
- **Rendering:** one `cardHTML()` function builds every card (collection, featured, trending).
- **Modal:** cards use event delegation. Clicking one calls `openModal(id)`, which fills a single modal from the product data. It closes via the ✕ button, the backdrop, Continue Exploring or Escape. Background scroll is locked, focus is trapped inside and returned to the card afterwards.
- **Shop Now:** `openAffiliate()` validates the size choice and URL, then calls `window.open(url, '_blank', 'noopener,noreferrer')`.
- **Search, filter, sort:** a shared `state` object holds category, query and sort order. `getVisibleProducts()` applies all three together, and `renderCollection()` redraws the grid, result count and empty state.

## Deploy
**GitHub Pages:** push the folder to a repository, then go to *Settings → Pages*, choose the main branch and root folder, and save. Your site appears at `https://<user>.github.io/<repo>/`.
**Netlify / Vercel / Cloudflare Pages:** drag the folder in or connect the repo; no build command is needed, and the publish directory is the project root.

## Disclosure
Keep the affiliate disclosure visible near Shop Now and in the footer. Check your affiliate programme's terms and local regulations for wording requirements.
