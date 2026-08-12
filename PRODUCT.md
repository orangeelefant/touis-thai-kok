# Product

<!-- impeccable:product-schema 1 -->

> Captured from repository evidence (README, routes, page copy) without a live interview
> — session handed off unattended. `[inferred]` marks code-derived hypotheses.

## Platform

web

## Users

People in Göteborg deciding where to eat Thai food tonight, or which of the three
kitchens is nearest — Vasastan, Hinsholmen or Mölndal. Hungry, on a phone, deciding
within minutes: menu, location, opening hours, phone.

Second audience, unusually: **the restaurant owners themselves**, as the recipients of an
unsolicited demonstration.

## Product Purpose

A proof-of-concept website for Toui´s Thai Kök, built by Webraketen as an unsolicited
demonstration. It has two jobs: work as a real restaurant site for guests, and function
as a sales artefact that shows the owners what a better site would do for them.

## Positioning

"Tre kök" — one family-run Thai restaurant operating three kitchens across Göteborg.
A single site that routes a guest to the right location is the thing the existing web
presence does not do. `[inferred]`

## Operating Context

- **The restaurant has not commissioned this site.** It is a demonstration, not a client
  deliverable. That constrains what may be claimed: no invented prices, no invented menu
  items, no implied endorsement or partnership.
- Guests decide by proximity first, menu second.
- Per-location routing is the core structure (`[location].astro`).

## Capabilities and Constraints

- Astro static site built by Webraketen. Only two routes: `index` and `[location]`.
- Uses a bespoke `mast__*` class vocabulary rather than the shared `wr-*` layer —
  this site has its own visual world.
- Copy is Swedish (sv_SE).
- As a POC the correctness bar on factual content is *higher*, not lower: everything
  shown to the owners must be something they could publish unchanged.

## Brand Commitments

- Name written **Toui´s Thai Kök** (note the acute accent as used in the repo).
- "Tre kök" is the organising idea.
- Voice: warm, direct Swedish; a family kitchen, not a chain.
- The brand belongs to the restaurant, not to Webraketen — visual work must stay
  plausible as *their* identity.

## Evidence on Hand

- Three real locations: Vasastan, Hinsholmen, Mölndal.
- Public domain touisthaigoteborg.se referenced in the README.
- No commissioned photography, no verified menu, no ratings and no owner-approved copy.
  Everything factual is second-hand — do not present unverified detail as fact.

## Product Principles

1. Three kitchens, one decision — get the guest to the right location fast.
2. It is a pitch: the craft of the site is the argument being made.
3. Never claim a relationship that does not exist, and never invent menu or price detail.
4. Food is decided with the eyes; imagery leads.
5. The identity must feel like the restaurant's own, not the agency's.

## Accessibility & Inclusion

Public Swedish restaurant site used on mobile, often in low light and in a hurry: strong
contrast, large tap targets, address and phone reachable without JavaScript, legible
menu typography. No formal standard committed. `[inferred]`
