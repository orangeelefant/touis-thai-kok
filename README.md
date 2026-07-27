# Toui´s Thai Kök — Göteborg

Proof-of-concept website for [Toui´s Thai Kök](https://touisthaigoteborg.se), a family-run
Thai restaurant with three kitchens in Göteborg. Built by [Webraketen](https://webraketen.se)
as an unsolicited demonstration — the restaurant has not commissioned it.

**Live:** https://touisthai.netlify.app

## What it does differently

The current site is three separate WordPress installs that print the protein prices once at
the top and then list 30+ dishes with no price at all — the guest does the arithmetic.

Here you **pick your protein once and the whole menu re-prices**, with filters for
vegetarian / no nuts / no shellfish / spicy. All of it works with JavaScript disabled.
One site covers all three restaurants, with live open-now status and one-tap calling.

| | Current site | This |
|---|---|---|
| Lighthouse performance (mobile) | 58 | 93 |
| Lighthouse accessibility | 60 | 100 |
| Largest Contentful Paint | 22.0 s | 3.2 s |
| Page weight | 8 043 KB | 514 KB |

## Content provenance

Every dish, description, price, phone number and opening hour is transcribed from the
restaurant's own pages. Photography is theirs. Nothing is invented — no review counts, no
stock imagery, no marketing claims they did not make.

## Stack

Astro 7, no framework runtime, no CSS framework. Two self-hosted variable fonts, no
third-party requests at all. Static output, deployed to Netlify.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # serve the build
```

## Layout

```
src/data/dishes.ts     every dish, defined once
src/data/menus.ts      the two menus (Vasastan / shared Hinsholmen+Mölndal)
src/data/locations.ts  the three restaurants
src/components/        DishCard, Catalogue
src/layouts/Base.astro nav, footer, schema, open-now
src/pages/             index + [location]
tokens.css             the design system, see DESIGN.md
```
