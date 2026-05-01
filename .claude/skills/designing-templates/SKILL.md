---
name: designing-templates
description: Use when the user wants to create or modify a resume template in this resumex repo. Triggers on requests like "make a new bold editorial template", "tweak minimal-mono to use a serif", "fix the print style on two-column-classic", "the gallery iframe is cropping - fix the page CSS". Knows the template contract, sample data, and print expectations.
---

# Designing Templates

This skill encodes everything you need to know to author or modify resume templates.

## Layout

Each template is a folder under `templates/`:

```
templates/<id>/
├── index.tsx        ← default export: ResumeTemplate
├── styles.css       ← scoped via class names; @media print rules live here
└── meta.ts          ← ResumeTemplateMeta
```

The folder name IS the template id. Use kebab-case.

The Vite plugin auto-discovers templates by scanning `templates/`. No manual registry edits needed.

`templates/_starter/` is the canonical scaffold source - copy it when creating a new template (the leading `_` excludes it from the registry).

## Contract

```ts
import type { ResumeTemplate, ResumeTemplateMeta } from '@/lib/template-registry'
import { PageFrame } from '@/components/page-frame/PageFrame'

const MyTemplate: ResumeTemplate = ({ resume }) => {
  // resume: ParsedResume
  return (
    <PageFrame fitDeps={[resume]} innerClassName="resume-my-template">
      {/* …content… */}
    </PageFrame>
  )
}

export default MyTemplate
export const meta: ResumeTemplateMeta = {
  id: 'my-template',
  name: 'My Template',
  description: 'short pitch shown in the gallery',
  tags: ['minimal', 'two-column', ...],
}
```

`meta` is exported separately from `meta.ts` so the registry plugin can consume it without parsing index.tsx.

### `<PageFrame>` is mandatory

Every template MUST render through `<PageFrame>`. PageFrame owns:

- The 210mm × 297mm article box (`.resumex-page-frame`).
- `useFitToPage` → `zoom: scale` so content always fits exactly one A4 page on screen *and* in print (this is what makes preview match the printed PDF byte-for-byte).
- The preview-toolbar contract: scale slider (`forcedScale` from `PageFrameContext`), density / padding sliders (re-measured via `fitKey`).

A template that renders a plain `<article>` instead will *appear* to work, but:

- The scale slider in the preview toolbar silently does nothing (no `PageFrame` consumes the context).
- The on-screen preview shows one tall card, while print paginates content across multiple A4 pages with cuts that do not match what you saw - i.e., not WYSIWYG.

Pass the template's root class as `innerClassName`. The inner div is what `useFitToPage` measures and zooms. Don't add `max-width: 210mm` or `margin: 0 auto` to that class - PageFrame's inner div is dynamically sized to `${210 / scale}mm` and any clamp produces an asymmetric gap on the right.

Use the `--page-pad-top` / `--page-pad-bot` CSS variables for inner padding so the toolbar's density / padding sliders can override them:

```css
.resume-my-template {
  padding: var(--page-pad-top, 15mm) 18mm var(--page-pad-bot, 15mm);
}
```

## ParsedResume shape (what your component receives)

See `src/lib/schema.ts`. Briefly:

```ts
type ParsedResume = {
  meta: ResumeFrontmatter      // name, title, links, skills, etc.
  sections: Array<{
    key: string                // 'experience'
    name: string               // 'Experience'
    entries: Array<{
      title: string
      subtitle?: string
      dateRange?: string
      location?: string
      bullets: string[]        // each bullet as rendered HTML
      body?: string            // additional non-bullet markdown after metadata
    }>
    body?: string              // freeform section content (when entries.length === 0)
  }>
}
```

Bullets and body fields are pre-rendered HTML - render with `dangerouslySetInnerHTML`. The parser sanitizes structurally (no script tags, etc.) but the content is fundamentally trusted (it's the user's own markdown).

## Operations

### Create a new template

The user says *"make a new bold editorial template"* or *"new template called swiss-grid"*.

1. Choose an `<id>` (kebab-case from the user's name).
2. Copy `templates/_starter/` to `templates/<id>/`. Update:
   - `meta.ts`: change `id`, `name`, `description`, `tags`.
   - `index.tsx`: change the `innerClassName` passed to `<PageFrame>` (e.g., `resume-<id>`); apply any structural changes.
   - `styles.css`: rename the root class to match (e.g., `.resume-<id>`) and adjust styles for the requested aesthetic. Keep the `--page-pad-top` / `--page-pad-bot` vars in the padding declaration; do NOT add `max-width: 210mm` or `margin: 0 auto` (PageFrame owns sizing).
3. Vite auto-detects the new folder; the registry regenerates and the template appears at `/preview/<id>` and in `/templates`.
4. Tell the user to open `http://localhost:5173/preview/<id>` to see the baseline. Then iterate.

### Iterate on a template

The user says *"tweak minimal-mono to use a serif"* or *"make two-column-classic bolder in the section headings"*.

1. Read the three files: `index.tsx`, `styles.css`, `meta.ts`.
2. Apply the design change. Often just CSS - touch `index.tsx` only if structure needs to change.
3. Suggest reviewing at `/preview/<id>`.

## Design principles

Resume templates render on a tiny canvas (one A4 page - A4 is the only supported size) and must survive both screen preview and print. These rules - adapted from Refactoring UI for the resume context - produce templates that look intentional rather than amateur. Apply them when creating *or* iterating.

### Hierarchy: three levers, never all at once

Use **size**, **weight**, and **color** to separate primary content from secondary, but combine them - don't multiply.

| Element | Treatment |
|---|---|
| Name (h1) | Largest type (16–32pt), bold, dark - the *one* place "all three" is allowed. |
| Section heading | Medium type (10–13pt), bold or uppercase-small - pick one, not both. |
| Entry title (role) | Slightly larger than body, semibold; subtitle (company) one tier lighter. |
| Dates / location / labels | Small (8–9pt), muted color, often mono - they support the entry, they don't compete. |
| Body / bullets | Base size (9.5–10.5pt), normal weight, dark-but-not-black (`#111` over pure black). |

The *blur test*: squint at the page. The name should dominate, section labels should read next, entry titles should anchor each block. If everything reads at the same volume, the hierarchy is broken - quiet down dates and metadata first.

### Spacing scale

Pick a constrained scale and stick to it. Two scales work well at A4 scale:

- **Point-based** (good for ATS-style, type-anchored layouts): `2, 4, 8, 12, 16, 24pt`.
- **Millimeter-based** (good for visual two-column A4 layouts): `1, 2, 3, 5, 8, 12mm`.

Spacing within a group (entry title → bullets) should be tighter than spacing between groups (entry → entry → section). Generous whitespace around section headers signals structure; cramped spacing reads as a wall of text. Start with too much space, then remove.

### Type scale

Constrain to ~5 sizes per template. Print resumes live in a narrow band - going outside it reads as broken:

- Body: `9.5–10.5pt`
- Entry title: `10–11pt`
- Section heading: `9–13pt`
- Title meta (date, location): `8.5–9pt`
- Name (h1): `16–32pt`

Line height: `1.45–1.6` for body, `1.05–1.25` for the name and section headings. Avoid weights below `400` for body - they go thready in print.

Use **two font families maximum** (e.g., one sans for body, one mono for meta/eyebrow). More than two reads as visual noise on a one-page document.

### Color

Resume templates are 90% grayscale by necessity. Color is for one or two accents - the name, a section rule, a bullet glyph - not for body text.

- The "darkest" value is `#111` / `oklch(0.14 …)`, **not** pure black. Pure black against white on print looks harsh.
- Muted text (dates, eyebrows, subtitles) should land around `#555–#888` on white. Below 4.5:1 contrast, body text becomes unreadable.
- Saturated grays (cool: blue tint; warm: brown tint) feel more intentional than pure neutral grays. Anchor them to the same hue family as your accent color so they harmonize.
- Design grayscale-first. Add the accent only after the layout works without it.

### Print is a first-class target

This is where most resume templates fall apart. Every template MUST:

1. **Render through `<PageFrame>`.** This is what makes preview = print. PageFrame's `useFitToPage` zooms content to fit one A4 on screen *and* in the printed PDF. A plain `<article>` flows naturally on screen but paginates raw on print, so the user sees one card and prints something different.
2. **Preserve color in print.** Add `print-color-adjust: exact` (and `-webkit-print-color-adjust: exact`) to the root container if the template uses gradient text, colored bullets, chip backgrounds, or any non-grayscale element. Without it, Chrome silently strips them.
3. **Don't redeclare `@page`.** A4 is the only supported size and `@page { size: a4; margin: 0 }` lives in `src/styles/print-base.css`. Templates pad *inside* their root container - `@page` rules in template CSS cascade across the bundle and break sibling templates.
4. **Avoid splitting entries** with `page-break-inside: avoid` (`break-inside: avoid` for modern browsers). Add `data-print-entry="true"` to entry containers - `print-base.css` has the rule.
5. **Hide editor chrome** with `data-print-hide="true"` on any non-resume element (already handled by `print-base.css`).
6. **Avoid screen-only effects in print:** transitions, animations, hover states are stripped automatically, but heavy box-shadows print as muddy gray rectangles - wrap shadows in `@media screen` or remove them in `@media print`.

### Layout

- **Left-align text by default.** Center only the name + tagline if the template is symmetric. Left-aligned columns are easier to scan.
- **Constrain content width.** A4 is 210mm; never let bullets stretch full-width without padding - text becomes hard to track. `12–18mm` page padding works for A4 (use mm, not inches - inches drift on a 210mm page).
- **Two-column layouts** should split sidebar (~30–35%) from main (~65–70%). Going 50/50 makes both columns awkward.
- **Don't center long content.** Names, taglines, short headlines - yes. Bullets, dates, multi-line descriptions - never.

### Common pitfalls (and the fix)

| Symptom | Fix |
|---|---|
| Looks amateurish | Increase whitespace between sections; constrain content width. |
| Body text looks too dark / harsh | Switch pure black to `#111`, muted text to `#555`. |
| Print PDF lost the gradient/colored bullets | Add `print-color-adjust: exact` to the root. |
| Entry split across two pages | Wrap entry container with `data-print-entry="true"`. |
| Everything fights for attention | Quiet down dates, locations, and labels - small + muted + mono. |
| Feels cramped | Increase line-height to 1.55+, gaps between entries to 0.7em+. |
| Inconsistent spacing throughout | Pick a 6-step spacing scale and *only* use those values. |
| Scale slider in preview toolbar does nothing | Template forgot to wrap in `<PageFrame>`. Add it; pass the root class via `innerClassName`. |
| Preview shows one tall card; print paginates differently | Same root cause as above - the template isn't going through PageFrame's fit-to-page. |
| Asymmetric right gap when slider scales content down | Template's CSS clamps width with `max-width: 210mm` or `width: 210mm`. Remove it - PageFrame's inner div sizes itself. |

## Print styles

Page size is fixed at A4 globally - `src/styles/print-base.css` declares `@page { size: a4; margin: 0 }`. Templates do NOT redeclare `@page`; doing so creates cross-template cascade conflicts (the rule that loads last wins regardless of which template is active).

Every template's `@media print` block should:
- Apply `page-break-inside: avoid` to entries (use the `data-print-entry="true"` attribute pattern, which `print-base.css` already handles).
- Adjust internal padding for print if on-screen and printed padding should differ (rare).
- Hide editor chrome via `[data-print-hide="true"] { display: none !important; }` (already in shared `print-base.css`).

When creating a new template, copy the print rules from `_starter` and adapt.

## Verification

- Render at `/preview/<id>` against `.gallery/sample.md`.
- Print test: visit `/preview/<id>`, hit Cmd+P, verify the PDF looks clean (no overflow, no chrome, page breaks land between entries).
- Snapshot test: re-run `pnpm test:run` to refresh snapshots if structure changes.

## Don't

- Don't import data from anywhere other than the `resume` prop. Templates are pure functions of `ParsedResume`.
- Don't mutate `resume` - it's shared state during preview.
- Don't add network calls, browser APIs (window, fetch), or stateful hooks. Templates render the same on the local app and on the public preview deploy.
- Don't reference the editor or routing - templates are isolated by design.
- Don't use Tailwind classes inside the resume component. Use scoped CSS in `styles.css` so the design intent travels with the template (and Tailwind utility classes wouldn't work cleanly inside iframes that don't share the parent's CSS context anyway).
- Don't bypass `<PageFrame>` by rendering a plain `<article>` directly. Even if it looks fine on screen, the toolbar slider becomes a no-op and preview stops matching print.
- Don't set `max-width: 210mm` or `margin: 0 auto` on the template root - PageFrame already sizes the page (210mm × 297mm) and the inner div may be wider than 210mm when content is being scaled down.
