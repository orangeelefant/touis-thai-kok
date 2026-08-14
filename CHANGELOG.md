# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]


- [2026-08-14] chore(deps): `npm audit fix` körd — icke-brytande fixar, inget `--force`, inga majorbumpar. 0 sårbarhet(er) kvarstår och kräver majoruppgraderingar. Dependabot-schema tillagt (npm, veckovis, minor/patch grupperade). Bygget verifierat lokalt.
### Added
- Initial proof-of-concept site for Toui´s Thai Kök Göteborg, replacing three separate
  WordPress installs with one Astro site covering all three restaurants.
- **Protein picker**: choosing kyckling / tofu / vegetarisk / biff / räkor / bläckfisk / mix
  re-prices the entire menu. CSS-only — works with JavaScript disabled, no flash of wrong
  price, correct prices in the HTML for crawlers.
- **Menu filters**: vegetarian, no nuts, no shellfish, spicy. Also CSS-only, via `:has()`.
  The no-shellfish filter hides itself when a shellfish protein is selected.
- Live open/closed status and the current location's phone number pinned to the top of the
  viewport (Hallmark N12 — announcement banner + retracting nav bar).
- Full menu data for both menus: Vasastan (own numbering, own prices) and the shared
  Hinsholmen/Mölndal menu. Dishes defined once and referenced by slug.
- Allergen and dietary tags derived strictly from the restaurant's own ingredient lists.
- `Restaurant` + nested `Menu` JSON-LD per location, with opening hours and geo.
- Sitemap, robots.txt, canonical URLs, Open Graph.
- `DESIGN.md` in Google design.md format; `tokens.css` as the portable token export.

### Changed
- Vasastan's menu order now leads with the photographed sections; the special menu (which
  the restaurant never photographed) moved to the end.

### Performance
- Fonts self-hosted as two variable woff2 files — no third-party requests at all.
- Stylesheet inlined; LCP image preloaded per page.
- Mobile Lighthouse vs. the current site: performance 58 → 93, accessibility 60 → 100,
  best-practices 77 → 100, SEO 92 → 100, LCP 22.0 s → 3.2 s, weight 8 043 KB → 514 KB.

### Accessibility
- axe-core: zero WCAG 2.1 AA / 2.2 AA violations on both page types.
- Verified no horizontal scroll at 320 / 375 / 414 / 768 px.
