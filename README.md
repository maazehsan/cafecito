# Cafecito Cuban Cafe — Landing Page

A React + Vite landing page for Cafecito Cuban Cafe, a Cuban-espresso-meets-tropical-mojito-bar
in Jeddah. Built around the brand's real duality — dark roast vs. beach cooler — rather than a
generic single-mood template.

## Stack

- React 19 + Vite
- Tailwind CSS v3 (palette lives entirely in CSS custom properties — see `src/index.css` — so
  re-theming is a one-file change)
- Framer Motion (scroll reveals, the diagonal hero seam, the pinned horizontal Ritual section, the
  drag-enabled carousel)
- No icon library — every icon in `src/components/icons.jsx` is a hand-built SVG matching the
  palm / bean / citrus motif, per the brief

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Structure

```
src/
  data/content.js        bilingual (EN/AR) copy for every section
  data/menuData.js        coffee + mojito menu items
  data/spotlightData.js   the 4 carousel drinks
  context/LangContext.jsx drives the EN/AR toggle (see below)
  components/
    icons.jsx             all custom SVG icons
    Logo.jsx              palm / flourish / split-color wordmark logo
    Nav.jsx, Footer.jsx
    SplitHero.jsx         the diagonal "two sides" hero
    CafecitoRitual.jsx    pinned scroll-driven horizontal story
    DualMenu.jsx          coffee bar / mojito bar
    SpotlightCarousel.jsx editorial drink carousel
    BrandGallery.jsx      "Fuel Your Day" surreal-art masonry
    LocationVibe.jsx      Jeddah section + boarding-pass hours card
```

## The EN/AR toggle

Click "EN / AR" in the nav. It flips `dir` on the page root and swaps every string pulled from
`content.js`. Tailwind's built-in `rtl:`/`ltr:` variants and the `dir` attribute handle most of the
mirroring automatically (flex `row` reverses direction on its own in RTL — that's normal CSS, not a
bug if you see it).

Menu item names are shown bilingually **all the time** (English + Arabic together), independent of
the toggle — that matches how the brand's real menu boards work. The toggle affects the labels and
prose around it.

**Before this goes in front of the client or real customers:** the Arabic copy was written to be
natural and on-brand, but hasn't been reviewed by a native speaker. Worth a quick pass.

## Placeholder content — swap before launch

- All product photography is a `placehold.co` color block in the brand palette (hero has none by
  design — see note in `SplitHero.jsx`; Menu, Spotlight carousel, and the Gallery panels all have
  image slots ready for the client's real shots).
- Instagram link and WhatsApp number in the footer are placeholders.
- The map in `LocationVibe.jsx` uses the free no-API-key Google Maps embed trick, centered on a
  generic "Al Shatea, Jeddah" query since there's no exact address yet. Once the client confirms
  the unit, update the `q=` param, or move to the official Maps Embed API if you want a
  guaranteed-stable long-term embed.
- Menu prices (SAR) are placeholder boutique-cafe pricing.

## A couple of implementation notes worth knowing

- The hero's diagonal seam is a `clip-path` that idly breathes between two polygons — it's not a
  static image, so it stays crisp at any viewport size.
- The Ritual section measures real pixel widths at runtime to drive the horizontal scroll (rather
  than a guessed `%` value), so it stays correct if you add/remove/resize a step.
- Everything respects `prefers-reduced-motion` — the Ritual section falls back to a plain grid
  instead of the pinned scroll effect; everything else keeps its layout but drops the animation.

## Deploying

Any static host works (`npm run build` → deploy `dist/`). For **GitHub Pages** specifically (if
this follows the same pattern as your other demo builds), set a `base` in `vite.config.js` first:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

Vercel/Netlify need no config — just point either at this repo with the default Vite build command.
