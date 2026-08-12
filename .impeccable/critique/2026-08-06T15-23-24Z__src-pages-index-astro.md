> ### ⚠️ Verified 2026-08-06 — read before acting
>
> These findings were re-checked against a **rendered DOM** in a real browser.
> Roughly **39% of non-advisory findings across the portfolio did not survive**.
>
> **Do not trust without opening the page:** `cramped-padding`, `clipped-overflow-container`,
> `gray-on-color`, `low-contrast`, `em-dash-overuse` — these depend on how elements *compose*,
> and the detector reasons about CSS rules, not resolved elements.
>
> **Trustworthy:** `undersized-ui-text`, `skipped-heading`, `layout-transition`, `dark-glow`,
> `marquee`, `overused-font`, `flat-type-hierarchy`, `design-system-*`.
>
> Full corrections: `tasks/impeccable-audits/README.md`.
>
> **This report's two P1s were both wrong.**
> - "Zero `:focus-visible` rules" — it has **3**. My scan read CSS from `dist`, where Astro inlines styles.
> - "`html`/`body` clip positioned children" — the nav `<ul>` is its own scroll container (scrollWidth 375 vs clientWidth 141); links are reachable by swipe. `overflow-x: clip` is deliberate and documented in the repo's AGENTS.md.
> - The 72 `cramped-padding` findings: **0 real**. `.banner` has 0 padding but its `.page` child supplies 16px inset and a max-width.
> - Corrected count: **94 → 14**. This site is in much better shape than scored.

---
target: src/pages/index.astro
total_score: 19
max_score: 32
na_heuristics: 5,7
p0_count: 0
p1_count: 2
timestamp: 2026-08-06T15-23-24Z
slug: src-pages-index-astro
---
⚠️ DEGRADED: single-context (sub-agent use not authorised for this session)

# /impeccable critique — Toui´s Thai Kök

`touisthai` · Persuade · target `src/pages/index.astro` · 2026-08-06

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No feedback anywhere; no focus styles at all |
| 2 | Match System / Real World | 4 | Excellent — 'Tre kök' is exactly the mental model |
| 3 | User Control and Freedom | 2 | No way back once inside a location page |
| 4 | Consistency and Standards | 3 | Bespoke class layer is internally consistent |
| 5 | Error Prevention | n/a | n/a — no ordering flow |
| 6 | Recognition Rather Than Recall | 3 | Locations are visible and named |
| 7 | Flexibility and Efficiency | n/a | n/a — Persuade surface |
| 8 | Aesthetic and Minimalist Design | 2 | 72 cramped-padding findings on 4 pages |
| 9 | Error Recovery | 1 | No error states; overflow clipping may break the picker |
| 10 | Help and Documentation | 2 | No hours or practical info verified |
| **Total** | | **19/32** | **Acceptable** |

_Heuristics 5 and 7 scored `n/a` (Persuade surface); total renormalised to /32._

## Design Specificity Verdict

**LLM assessment.** Partially authored. 'Tre kök' is a genuinely product-specific organising idea — one restaurant, three kitchens, pick yours — and the bespoke `mast__*` layer means this is not a template clone. But the execution undermines it: 18 cramped-padding findings per page and `html`/`body` clipping positioned children suggest the layout was never tested at the edges.

**Deterministic scan.** 94 non-advisory findings across only 4 built pages — 72 cramped-padding (the highest per-page density audited) and 8 clipped-overflow containers, including `html` and `body` clipping positioned children. Zero `:focus-visible` rules and zero `prefers-reduced-motion` handling.

**Visual overlays.** Not available — no browser automation was used in this pass, so no user-visible overlay exists. Findings come from the CLI detector over built HTML/CSS plus source review.

## Overall Impression

The idea is right and the craft is not there yet — which matters more than usual, because this site exists as an unsolicited pitch. It is the argument for hiring Webraketen. A location picker that may clip on mobile and zero keyboard focus are exactly the details the owners' web-savvy nephew will find.

## What's Working

- 'Tre kök' as the organising idea is genuinely specific to this restaurant and immediately understandable.
- 95% lazy-loading across 130 images with complete alt text — the food photography loads well.
- Its own visual world rather than a portfolio template — the right instinct for a client pitch.

## Priority Issues

### 1. [P1] `html` and `body` clip positioned children

**Why it matters.** This is how sticky headers, dropdowns and the location picker silently break on mobile. On a pitch site, a broken picker is the whole demo.

**Fix.** Remove the overflow clipping from the root elements and verify the picker and any sticky nav at 320px.

**Suggested command:** `/impeccable adapt`

### 2. [P1] Zero `:focus-visible` rules and zero reduced-motion handling

**Why it matters.** Keyboard users get no visible focus anywhere, including the location picker. The interactive layer was evidently never keyboard-tested.

**Fix.** Add a focus-visible layer and a reduced-motion path.

**Suggested command:** `/impeccable harden`

### 3. [P2] 72 cramped-padding findings across 4 pages

**Why it matters.** 18 per page. Children flush against filled edges read as unfinished — the single biggest reason this looks like a draft rather than a proposal.

**Fix.** Fix inset rules in the `mast__*` layer's container primitives.

**Suggested command:** `/impeccable layout`

### 4. [P2] No hours, and practical info is unverified

**Why it matters.** Restaurant visitors want to know if it is open now and where. As an uncommissioned POC nothing may be invented — but the *slots* for hours and address should exist and be visibly marked as pending client data.

**Fix.** Add the practical-info block with clearly placeholder content the owners can fill.

**Suggested command:** `/impeccable clarify`

## Persona Red Flags

**Casey (Distracted Mobile)**: Hungry, walking, one hand. Needs the nearest kitchen and a phone number. Overflow clipping puts the location picker at risk, and 8 clipped containers on 4 pages is a high hit rate.
**Jordan (First-Timer)**: Doesn't know the three locations. 'Tre kök' helps, but without hours or a map the page cannot answer 'can I eat there tonight'.
**Sam (Accessibility-Dependent)**: Zero focus styles means the location picker is unusable by keyboard. 3 images with empty alt need checking.

## Minor Observations

- 6 all-caps body passages and 4 hero eyebrow chips.
- No animation at all — a reduced-motion path is trivial to add and currently absent.
- The acute in 'Toui´s' is a typographic apostrophe substitute; confirm the brand's preferred glyph.

## Questions to Consider

- This is a pitch — what is the one screen you would want the owners to see first?
- Would a map with three pins beat any hero image here?
- What happens on a 320px phone when the picker opens?
