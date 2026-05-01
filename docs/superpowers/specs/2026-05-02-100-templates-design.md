# 100 templates - design spec

Date: 2026-05-02
Branch: `feat/100-templates`

## Goal

Ship 100 new high-quality resume templates in a single PR. Each template is a folder under `templates/<id>/` with `index.tsx` + `styles.css` + `meta.ts`, conforming to the contract in `docs/TEMPLATE_GUIDE.md` and `.claude/skills/designing-templates/SKILL.md`.

The 3 existing templates (`_starter`, `emerald-twocol`, `minimal-mono`) are not modified.

## Approach

**20 design DNAs × 5 variants each = 100 templates.**

A "DNA" is a coherent design language (Swiss Grid, Editorial Serif, Brutalist, Terminal CLI, Newspaper, etc). A "variant" is a sibling within that DNA that meaningfully differs along ≥2 of these axes:

- Palette (default / cobalt / amber / rose / graphite / cream / etc)
- Layout topology (single-col / sidebar-L / sidebar-R / banner-top / asymmetric)
- Density (loose / standard / tight)
- Typography pairing (sans body, serif body, mono body, mixed)
- Accent placement (rules, bullets, name, eyebrows, none)

Variants are NOT recolors. Each variant is a deliberately different visual choice within the family. Two variants with the same DNA should still be obviously different at a glance.

## Why this approach (vs alternatives)

- **100 unique unrelated designs**: realistically 30k+ lines of bespoke CSS. Quality drifts in the long tail and the last 30 unintentionally repeat the first 70.
- **Combinatorial axis matrix**: produces "generated"-looking results, not designed ones.
- **20 DNAs × 5 variants** (this spec): each DNA gets careful design attention; variants give meaningful breadth without dilution.

## Constraints (recap)

Every template MUST:

1. Render through `<PageFrame fitDeps={[]} innerClassName="resume-<id>">`. No exceptions.
2. Be a no-prop default-exported React component.
3. Use scoped CSS in `styles.css` (root class `.resume-<id>` or a stable prefix). No Tailwind utility classes inside the component.
4. Use `--page-pad-top` / `--page-pad-bot` CSS variables in the root padding declaration.
5. NOT set `max-width: 210mm` or `margin: 0 auto` on the root.
6. NOT redeclare `@page` (lives in `src/styles/print-base.css`).
7. Add `print-color-adjust: exact` to the root if it uses any non-grayscale element.
8. Wrap entry containers with `data-print-entry="true"` (or use `page-break-inside: avoid` in `@media print`).
9. Pass `pnpm typecheck`.
10. Render at `/preview/<id>` without errors.

## Placeholder content (consistent across all 100)

Use the same fictional persona as existing templates:

- **Name:** Avery Park
- **Title:** senior software engineer · platform
- **Email:** avery@example.com
- **Location:** New York, NY
- **Site:** averypark.dev
- **GitHub:** github.com/averypark
- **LinkedIn:** in/averypark

**Summary:** "I build resilient backend systems and the platforms that run them. I prefer small, reversible changes and clear interfaces. Software should be boring in production and useful to its users."

**Experience entries** (use these companies/titles; tweak bullet phrasing per template's voice):
- **Coral Labs** — Senior Software Engineer (Mar 2024 – Present, NYC); Software Engineer 2 (Aug 2022 – Mar 2024, NYC)
- **Acme Inc** — Software Engineer (Jan 2020 – Jul 2022, Remote)
- **Bytework** — Software Engineer Intern (May 2018 – Aug 2018, Remote)

**Education:** B.S. Computer Science · Northern State University · 2014 – 2018

**Projects:** Loomroute (URL routing lib, Go), Tinytrace (distributed tracing, Rust)

**Skills (group):** Languages: Go, TypeScript, Python, Rust · Backend: Postgres, Redis, Kafka, gRPC · Frontend: React, Next.js, Tailwind, Vite · Platform: AWS, Kubernetes, Docker, Terraform

Reuse content but rephrase / restructure to match each template's voice and density. Some templates (academic, dossier, magazine) may invent additional structured fields like Publications, Awards, Pull Quote, Edition Number, etc.

## The 20 DNAs

Each DNA below specifies: aesthetic, key typography, layout, palette tendency, signature elements, and 5 variant slugs.

### 1. swiss — Swiss / International Style
Akzidenz-Grotesk feel (Helvetica fallback). Strict baseline grid. All-caps tracked-out section labels. Single-color block accent. Generous left-aligned whitespace. Math-precise.
- `swiss` — cool gray + cobalt block accent
- `swiss-rose` — rose accent
- `swiss-graphite` — pure grayscale, no chromatic accent
- `swiss-airy` — looser line-height + larger margins
- `swiss-mirror` — accent block on the right rather than left

### 2. editorial — Magazine editorial
Large serif headlines (Playfair / Domaine fallback to system serif). Italic meta. Body in transitional sans (Inter) or smaller serif. Drop-cap on summary. Multi-column experience block.
- `editorial` — Playfair-feel + Inter body, no color
- `editorial-noir` — black/cream, double-rule under name
- `editorial-vogue` — oversized name, all-caps section heads
- `editorial-condensed` — condensed display serif headlines
- `editorial-pull` — sidebar pull-quote panel with summary

### 3. brutalist — Brutalist
Off-grid. Mixed mono + geometric sans. Hard 2-3px borders. Asymmetric layout. Tight letter-spacing. Raw.
- `brutalist` — mono + sans mix, harsh black rules
- `brutalist-redbar` — red block accent over name
- `brutalist-grid` — overlaid grid lines
- `brutalist-stamp` — date/role rendered as mono caps stamps
- `brutalist-strip` — vertical strip of mono-coded contact info on right edge

### 4. terminal — CLI / terminal
Full mono (JetBrains Mono / IBM Plex Mono / Menlo fallback). Prompt-style sections (`$ cat experience.md`). Syntax-highlight color accents.
- `terminal` — cyan accents on white
- `terminal-amber` — amber accents (CRT amber)
- `terminal-green` — green accents (CRT green phosphor)
- `terminal-prompt` — `>` prompt prefix on every line
- `terminal-tabular` — tabular two-column with mono columns

### 5. newspaper — Old-style newspaper
Old-style masthead with rule + date. Condensed serif headlines. Small-caps section labels. Body in old-style serif. Narrow gutters.
- `newspaper` — masthead + multi-column experience
- `newspaper-tribune` — tabloid-style oversize headline
- `newspaper-times` — Times-feel narrow columns
- `newspaper-broadsheet` — full-width single column with kicker
- `newspaper-gazette` — gazette-style with running header

### 6. architect — Technical drawing
Dimension lines. Monospaced labels. Schedule-style entries (`01 / 02 / 03`). Thin precise rules. Engineering-drawing aesthetic.
- `architect` — base, blueprint white
- `architect-blueprint` — pale blue accent rule
- `architect-section` — section-cut markings (chevrons)
- `architect-tabular` — entries in technical schedule grid
- `architect-elevation` — vertical timeline with level markers

### 7. banker — Conservative / financial
Caslon-feel serif (Garamond/Times fallback). Centered name. Tabular figures. Hairline rules. Restrained.
- `banker` — deep navy headings
- `banker-burgundy` — burgundy accent
- `banker-monogram` — monogram-style initials at top
- `banker-twocol` — two-column variant with classical aesthetic
- `banker-letterhead` — top letterhead bar with name centered

### 8. academic — Academic CV
LaTeX-CV aesthetic. Dense. Italic journal references. Hanging indents. Tight typesetting.
- `academic` — base, generic LaTeX feel
- `academic-tight` — tighter spacing for publication-heavy CVs
- `academic-twocol` — two-col with sidebar for affiliations
- `academic-lmr` — Latin-Modern-feel typography
- `academic-cv` — emphasized publications section, hanging indents

### 9. magazine — Magazine cover
Cover-treatment oversized name. Kicker eyebrow. Pull-quote sidebar. Mixed type sizes for editorial energy.
- `magazine` — base
- `magazine-kicker` — large kicker above name
- `magazine-quote` — large pull-quote in sidebar
- `magazine-issue` — "Issue #07" treatment in masthead
- `magazine-cover` — color-block masthead (no actual image)

### 10. display — Display contrast
Heavy display-sans contrast (Druk/Untitled-Sans-Black feel; fall back to Inter Black 900). Thin body. Bold-light tension.
- `display` — black/thin contrast, base
- `display-cobalt` — cobalt on cream
- `display-noir` — noir variant (cream paper, black ink)
- `display-stack` — stacked-name treatment (one word per line)
- `display-shout` — full-width name banner, edge-to-edge

### 11. saas — Modern tech SaaS
Inter + JetBrains Mono. Soft rounded chips. Single brand accent. Clean modern sans. (Distinct from `emerald-twocol` because `saas-*` are single-column or banner, not two-column.)
- `saas` — base, indigo accent
- `saas-teal` — teal accent
- `saas-violet` — violet accent
- `saas-mono` — mono body variant
- `saas-banner` — colored banner header

### 12. letterpress — Classical correspondence
Centered name. Italic transitions. Hairline rules. Generous air. Classical serif (Caslon/Garamond fallback).
- `letterpress` — base
- `letterpress-cream` — cream paper feel
- `letterpress-italics` — italics-heavy variant
- `letterpress-monogram` — initial monogram block
- `letterpress-correspondence` — letterhead + signature block

### 13. dossier — Field report / classified
Header bar with classification banner ("CONFIDENTIAL — SUBJECT FILE"). Serial numbers. Mono labels. Slate palette.
- `dossier` — base, slate
- `dossier-redact` — redaction-style highlight bars
- `dossier-stamped` — "APPROVED" stamp aesthetic
- `dossier-archive` — archive-folder tab marker
- `dossier-field` — field-report numbered entries

### 14. specsheet — Product spec sheet
Key/value grid. "REV / DATE / OWNER" header. Technical aesthetic.
- `specsheet` — base
- `specsheet-rev` — REV-A / REV-B markings
- `specsheet-grid` — strict spec-grid layout
- `specsheet-callout` — callout boxes per role
- `specsheet-tab` — tabbed sections

### 15. executive — Boardroom executive
Wordmark name. Single accent. Sober corporate restraint. Lots of air. Single-page, calm.
- `executive` — base
- `executive-monogram` — monogram crest
- `executive-graphite` — pure graphite
- `executive-deepblue` — deep blue accent
- `executive-rule` — bold horizontal rule under name

### 16. traditional — Two-column, sidebar L
Practical two-col, sidebar-left (skills/contact/edu), main right (experience). No flair, balanced.
- `traditional` — base
- `traditional-mono` — mono accents on labels
- `traditional-warm` — warm gray palette
- `traditional-tight` — denser
- `traditional-divider` — strong divider rule between cols

### 17. mirror — Two-column, sidebar R
Same role as `traditional` but sidebar on the **right**. Eye-flow differs, body width differs — distinct template.
- `mirror` — base
- `mirror-bold` — bold sidebar header
- `mirror-quiet` — quiet (low contrast)
- `mirror-stack` — sidebar stacks education + skills + interests
- `mirror-block` — sidebar block at top, vertical rules (no photo)

### 18. manuscript — Manuscript / classical
Hand-numbered sections in Roman numerals. Italic dates. Classical sans (Optima/Avenir fallback to Georgia/serif).
- `manuscript` — base
- `manuscript-roman` — Roman numerals on sections
- `manuscript-folio` — folio-page-number style
- `manuscript-ornament` — small typographic ornaments between sections
- `manuscript-script` — subtle script flourishes (avoid heavy script)

### 19. periodical — Periodical
Running header bar with edition number. Date floated to margin. "Vol. / Issue" markings.
- `periodical` — base
- `periodical-volume` — Vol/Issue header
- `periodical-folios` — page-folios in margins
- `periodical-running` — running header per section
- `periodical-byline` — byline-style attribution

### 20. indexcard — Library / index card
Library-card aesthetic. Rule grid (notebook-line feel). Tab markers. Monospaced numerals.
- `indexcard` — base
- `indexcard-ruled` — ruled-line aesthetic
- `indexcard-tab` — tab markers on left
- `indexcard-stamp` — date-stamped
- `indexcard-classified` — Dewey-style classifier numbers

## Implementation strategy

- One agent per DNA. Agent receives: this spec excerpt for its DNA, paths to read (`docs/TEMPLATE_GUIDE.md`, `.claude/skills/designing-templates/SKILL.md`, all 3 existing templates), and an output contract.
- Agents run in parallel where practical (~5–10 concurrent).
- Each agent produces 5 folders under `templates/<id>/` with `index.tsx`, `styles.css`, `meta.ts`.
- Each agent self-verifies by ensuring the file structure matches the contract; cross-template typecheck is run by the orchestrator at the end.
- After all agents complete, orchestrator runs `pnpm typecheck` and `pnpm format`, then spot-checks `/preview/<id>` for ~10 templates in dev server.

## Verification gates

- `pnpm typecheck` passes — sync plugin auto-discovers, registry regenerates, types check.
- All 100 templates show up in `templates/` folder + auto-detected by `scripts/sync-templates.mjs`.
- Spot-check ~10 templates render at `/preview/<id>` without console errors.
- Spot-check 1-2 print to PDF cleanly (Cmd+P).
- `pnpm format` runs cleanly.

## Out of scope (explicit follow-ups)

- **Gallery UX at scale.** With 103 total templates, the `/templates` page rendering 100+ iframes will overwhelm the browser. Needs pagination / virtualization / featured-set in a separate task.
- **Bundle size investigation.** All 100 CSS files are bundled together. Probably fine but unmeasured here.
- **README revamp.** Already queued separately.

## Risks / known limitations

- 100 templates produced via parallel agents will have some quality variance. Acceptable trade-off for ship velocity. Worst offenders can be iterated post-merge.
- Some DNAs (academic, dossier, magazine) invent extra placeholder fields. Those fields aren't part of the canonical Avery Park persona but are needed to demonstrate the template's structure.
- Many templates use ambitious fonts (Playfair, Druk, Caslon). They're declared as families with system serif/sans fallbacks; we don't ship webfonts, so the fallback is what users actually see. Templates should look intentional even with the fallback.
