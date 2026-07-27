# AGENTS.md — Toui´s Thai Kök

Instructions for automation agents (Claude, Codex, …). Read before changing anything.
`CLAUDE.md` is a symlink to this file — one source of truth, no drift between the two.

## What this repo is

A proof-of-concept website for a real restaurant that has **not** commissioned it. That
constrains what you may write more than a normal project does — see Content rules.

Three kitchens: Vasastan, Hinsholmen, Mölndal. Vasastan runs its own menu and its own
(lower) prices; Hinsholmen and Mölndal share a menu with **different numbering for the same
dishes**. That is why `dishes.ts` is keyed by slug and the menu number lives on the menu.

## Stack & layout

Astro 7, static output. No UI framework, no CSS framework, no runtime JS beyond ~20 lines
for the retracting nav and the open-now clock. Deployed to Netlify from `main`.

```
src/data/dishes.ts      every dish, defined once, keyed by slug
src/data/menus.ts       the two menus + protein prices + extras
src/data/locations.ts   the three restaurants, hours, phones, geo
src/components/         DishCard.astro, Catalogue.astro
src/layouts/Base.astro  banner, nav, footer, JSON-LD, open-now script
src/pages/              index.astro, [location].astro
src/styles/site.css     all styling; imports tokens.css
tokens.css              the design system — see DESIGN.md
```

## Commands

```bash
npm install
npm run dev      # dev server
npm run build    # static build to dist/
npm run preview  # serve the build
```

## Content rules (non-negotiable)

1. **Never invent facts about this business.** No review counts, no ratings, no awards, no
   "X nöjda gäster", no founding year, no chef names beyond what their own site states.
   Every price, description, phone number and opening hour must be traceable to
   `~/Claude/data/tuisthai/` (the scrape) or their live site.
2. **Never invent allergen or dietary data.** Tags in `src/data/dishes.ts` come only from
   ingredients the restaurant lists itself. Getting this wrong can hurt someone. If a
   description does not name peanuts, do not tag peanuts.
3. **Never add stock photography.** Only the restaurant's own images.
4. Copy is **Swedish** by default, with the English line kept alongside as their menu does.

## Design rules

Read `DESIGN.md` first — it is the contract. It is in Google `design.md` format: YAML
front matter carries the real token values, the body carries intent.

- Colour and font values live in `tokens.css`. Reference tokens by name; never inline an
  OKLCH or hex value in a component.
- If you change a token, update `DESIGN.md` **in the same commit**.
- The site is built to Hallmark: genre editorial, macrostructure Catalogue, nav N12,
  footer Ft1, custom tuned theme. See `.hallmark/log.json`.

## Hard technical constraints

- **The protein picker and filters must keep working with JavaScript disabled.** They are
  CSS-only by design (real inputs as siblings of the grid + `:has()`). Do not "improve"
  them into a React component.
- `overflow-x: clip` on `html`/`body` — never `hidden`, it breaks the sticky nav.
- No third-party requests. Fonts are self-hosted; keep it that way.
- Grid tracks holding images use `minmax(min(Xrem, 100%), 1fr)`, and children get
  `min-width: 0`.

## Definition of done

- `npm run build` clean.
- No horizontal scroll at 320 / 375 / 414 / 768 px.
- axe-core: zero WCAG 2.1 AA / 2.2 AA violations.
- Lighthouse mobile: performance ≥ 90, accessibility 100, best-practices 100, SEO 100.
- `CHANGELOG.md` updated under `[Unreleased]` and `TODO.md` reconciled, same commit.

## Branching

Commit straight to `main`. No feature branches, no PRs.
