---
version: alpha
name: Toui´s Thai Kök
description: >-
  Design system for Toui´s Thai Kök Göteborg. The palette is read off the restaurant's own
  photographs — the saturated seamless every dish is shot on, the cobalt rim of the Thai
  porcelain, the sweet chili sauce — so the site and the food are the same object.
colors:
  paper: "oklch(96% 0.012 85)"
  paper-2: "oklch(93.5% 0.017 84)"
  paper-3: "oklch(90% 0.022 83)"
  ink: "oklch(21% 0.035 265)"
  ink-2: "oklch(38% 0.028 265)"
  muted: "oklch(52% 0.022 265)"
  rule: "oklch(84% 0.018 82)"
  rule-2: "oklch(89% 0.014 82)"
  accent: "oklch(55% 0.19 28)"
  accent-ink: "oklch(97% 0.012 85)"
  accent-soft: "oklch(93% 0.045 35)"
  porcelain: "oklch(45% 0.15 258)"
  porcelain-soft: "oklch(92% 0.035 250)"
  yellow: "oklch(88% 0.175 92)"
  focus: "oklch(52% 0.21 258)"
typography:
  display:
    fontFamily: "Bricolage Grotesque"
    fontWeight: "800"
    lineHeight: "1.06"
    letterSpacing: "-0.022em"
  body:
    fontFamily: "Newsreader"
    fontSize: "1.0625rem"
    fontWeight: "400"
    lineHeight: "1.6"
  hero:
    fontFamily: "Bricolage Grotesque"
    fontSize: "clamp(3rem, 11vw, 8.5rem)"
    fontWeight: "800"
    letterSpacing: "-0.022em"
  label:
    fontFamily: "Bricolage Grotesque"
    fontSize: "0.875rem"
    fontWeight: "600"
    letterSpacing: "0.12em"
    lineHeight: "1.05"
rounded:
  sm: "2px"
  md: "4px"
spacing:
  2xs: "0.25rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4.5rem"
  4xl: "7rem"
components:
  button:
    background: "{colors.accent}"
    color: "{colors.accent-ink}"
    rounded: "0px"
    typography: "{typography.label}"
  chip:
    background: "{colors.paper}"
    color: "{colors.ink}"
    borderColor: "{colors.rule}"
    rounded: "0px"
  chipSelected:
    background: "{colors.ink}"
    color: "{colors.paper}"
  dishTile:
    background: "{colors.yellow}"
    rounded: "0px"
  price:
    color: "{colors.accent}"
    typography: "{typography.label}"
  banner:
    background: "{colors.ink}"
    color: "{colors.paper}"
---

# Toui´s Thai Kök — design system

## Overview

Toui´s Thai Kök is a family-run Thai restaurant with three kitchens in Göteborg: Vasastan,
Hinsholmen and Mölndal. The site has one job — get a hungry person from "what shall we eat"
to a phone call, on a phone, in under a minute.

The design system was not invented. Every dish on the menu was photographed by the
restaurant on the same saturated yellow seamless, plated on blue-and-white Thai porcelain,
with sweet chili sauce in the corner of half the shots. That is already a colour system.
The site adopts it rather than imposing a new one, so the photographs sit on the page as if
they belong there instead of as if they were dropped in.

**Hallmark record:** genre editorial · macrostructure Catalogue · nav N12 (announcement
banner + retracting bar) · footer Ft1 (mast-headed) · theme custom (tuned) ·
axes light / display-heavy / warm.

## Design Principles

1. **The photographs set the palette.** Yellow, cobalt and chili come out of their own
   camera roll. Nothing on this site introduces a colour the food does not already contain.
2. **The menu is a catalogue, not a page of prose.** Thirty-plus dishes shot with identical
   framing are a specimen sheet. Treat them as one — uniform tiles, uniform rhythm, the
   variation carried by the food itself.
3. **Never make the guest do arithmetic.** The old site printed the protein prices once at
   the top and then listed the dishes with no price at all. Pick a protein and the entire
   menu re-prices. This is the single most important behaviour on the site.
4. **A restaurant's conversion is a phone call.** The number for the location you are
   looking at is fixed to the top of the viewport at all times, with live open/closed state.
5. **No invented claims.** Every word of copy, every price, every opening hour is
   transcribed from the restaurant's own material. No review counts, no "50 000 nöjda
   gäster", no stock photography.

## Color

`paper` is a warm bone, not white — pure white would make the yellow tiles glare and the
photographs float. `ink` is a cobalt-tinted near-black lifted from the darkest part of the
porcelain rim, which keeps the type family with the plates rather than neutral against them.

`accent` (chili) is the only colour allowed to carry meaning: the call button, prices, the
"stark i grunden" tag, and the selected filter. It stays under 5% of any viewport.

`porcelain` is structural — eyebrows, field labels, the vegetarian tag. It reads as a second
voice without competing with the accent.

`yellow` is deliberately **not** used as a surface colour for text. It appears inside the
photographs, and on the tiles standing in for dishes the restaurant never photographed —
those show the menu number as a chit on the same seamless, so a missing photo reads as part
of the system rather than as a hole.

All neutrals carry chroma; nothing in the palette is a pure grey.

## Typography

Two families. **Bricolage Grotesque** at 800 for display, wordmark, prices, labels and
buttons — a heavy variable grotesque that holds up at poster scale and stays legible at
14px. **Newsreader** for body, dish descriptions and the English translations — a reading
serif with optical sizing, which gives the menu a warmth a UI sans would strip out.

Both are self-hosted as single variable woff2 files (~100 KB total). No third-party font
request: one less connection on the critical path, and no visitor data leaving the site.

Headings are always roman. Emphasis is carried by weight and accent colour, never italic.
Italic exists only as body emphasis. All-caps labels never go below `line-height: 1.05`.

Hero headlines are kept to ≤ 7 words so `--text-display` can run to its full 8.5rem.

## Spacing & Layout

A 4pt scale with semantic names. Page max-width 78rem, gutter `clamp(1rem, 4vw, 3rem)`.

The catalogue grid is `repeat(auto-fill, minmax(min(15rem, 100%), 1fr))` — the `min()`
guard is what keeps a 320px viewport from overflowing. Every image-bearing grid child
carries `min-width: 0`.

`html` and `body` both use `overflow-x: clip`, never `hidden` — `hidden` would break the
sticky nav and sticky picker.

## Components

**Banner + nav (N12).** A dark announcement bar carries live open/closed state and the
current location's phone number; below it a bar that retracts on scroll-down and returns on
scroll-up, so the menu grid gets the full viewport on a phone without losing one-tap
calling.

**Protein picker.** Seven radio chips showing each protein's price for this location, then
four filter chips (vegetarian, no nuts, no shellfish, spicy). Sticky under the nav. The
whole thing works with JavaScript disabled: the real inputs sit as direct siblings of both
the picker and the grid, every price is rendered into the HTML, and CSS reveals the selected
one. That also means no flash of wrong price on load, and correct prices for crawlers.

**Dish tile.** Square photograph, menu number badged into the corner, name and price on one
baseline, Swedish description, English description, then tags. Tags are derived strictly
from the restaurant's own ingredient lists — never inferred.

**Footer (Ft1).** Mast-headed: a large wordmark statement, the tagline, then all three
addresses side by side, so any page ends with every way to reach them.

## Accessibility

Verified with axe-core against WCAG 2.1 AA and 2.2 AA: zero violations on both page types.
Lighthouse accessibility 100.

- `:focus-visible` shows a 3px ring at `{colors.focus}`, never animated and never suppressed.
- Filters and the protein picker are real radio/checkbox inputs with labels — keyboard and
  screen-reader operable without any script.
- `prefers-reduced-motion: reduce` collapses all transitions and disables the nav retraction.
- Every dish image has an alt describing the dish and its ingredients, not just its name.
- Tap targets clear 44px; no clickable text wraps to two lines at any supported width.
- Verified at 320 / 375 / 414 / 768px with no horizontal scroll.
