---
name: designing-templates
description: Use when the user wants to create or modify a resume template in this resumex repo. Triggers on requests like "make a new bold editorial template", "tweak minimal-mono to use a serif", "fix the print style on two-column-classic", "the gallery iframe is cropping - fix the page CSS". Knows the template contract and print expectations.
---

# Designing Templates

This skill encodes everything you need to know to author or modify resume templates.

Templates and resumes share the same component shape. A template is a starter blueprint with placeholder content; a resume is a real instance forked from a template. This skill is about templates - the placeholder blueprints.

## Layout

```
templates/<id>/
├── index.tsx        # default export: a no-prop React component
├── styles.css       # scoped via class names; @media print rules live here
└── meta.ts          # exports `meta: ResumeTemplateMeta`
```

The folder name IS the template id. Use kebab-case.

The Vite plugin auto-discovers templates by scanning `templates/`. No manual registry edits needed.

`templates/_starter/` is the canonical scaffold - copy it when creating a new template (the leading `_` excludes it from the registry).

## Contract

```tsx
import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function MyTemplate() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-my-template">
      {/* …content… */}
    </PageFrame>
  )
}
```

```ts
// meta.ts
import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'my-template',
  name: 'My Template',
  description: 'short pitch shown in the gallery',
  tags: ['minimal', 'two-column'],
}
```

The component takes no props. Placeholder content (typically a fictional "Avery Park" persona, see existing templates for examples) is hardcoded as JSX. When a user forks a template into `resumes/<variant>/`, they replace that content with their own.

### `<PageFrame>` is mandatory

Every template MUST render through `<PageFrame>`. PageFrame owns:

- The 210mm × 297mm article box (`.resumex-page-frame`).
- `useFitToPage` → `zoom: scale` so content always fits exactly one A4 page on screen *and* in print (this is what makes preview match the printed PDF byte-for-byte).
- The preview-toolbar contract: scale slider (`forcedScale` from `PageFrameContext`), density / padding sliders (re-measured via `fitKey`).

A template that renders a plain `<article>` instead will appear to work, but:

- The scale slider in the preview toolbar silently does nothing.
- The on-screen preview shows one tall card while print paginates content across multiple A4 pages with cuts that don't match what you saw - i.e., not WYSIWYG.

Pass the template's root class as `innerClassName`. The inner div is what `useFitToPage` measures and zooms. Don't add `max-width: 210mm` or `margin: 0 auto` to that class - PageFrame's inner div is dynamically sized to `${210 / scale}mm` and any clamp produces an asymmetric gap on the right.

Use the `--page-pad-top` / `--page-pad-bot` CSS variables for inner padding so the toolbar's padding sliders can override them:

```css
.resume-my-template {
  padding: var(--page-pad-top, 15mm) 18mm var(--page-pad-bot, 15mm);
}
```

### Density support (mandatory)

The preview toolbar exposes a density selector with three modes: `tight`, `regular`, `roomy`. The active mode is applied as a class on the page wrapper (`.density-tight` or `.density-roomy`; `regular` is the unstyled default).

Every template MUST own its density overrides in its **own** `styles.css`, scoped to its root class. Don't put new template overrides into `src/components/stage/stage.css` - that file's existing entries are kept for backward compatibility but new templates own their own behavior so they scale independently.

The pattern (model after `emerald-twocol` / `minimal-mono` blocks in `stage.css`):

```css
/* tight - fits more content; reduces type and gaps */
.density-tight .resume-my-template {
  font-size: 9pt;
  line-height: 1.45;
}
.density-tight .resume-my-template .entry { margin-bottom: 0.55em; }
.density-tight .resume-my-template ul { margin-top: 0.3em; }
.density-tight .resume-my-template section { margin-top: 0.85em; }
/* …other tight overrides… */

/* roomy - opens it up; useful when you have less content */
.density-roomy .resume-my-template {
  font-size: 10pt;
  line-height: 1.65;
}
.density-roomy .resume-my-template .entry { margin-bottom: 1.05em; }
.density-roomy .resume-my-template ul { margin-top: 0.5em; }
.density-roomy .resume-my-template section { margin-top: 1.45em; }
/* …other roomy overrides… */
```

Three knobs, in order of leverage: (1) body type size + line-height, (2) structural gaps between entries / groups / sections, (3) inner padding of major regions. You don't need to override every selector — just enough that tight visibly fits more and roomy visibly breathes.

## Operations

### Create a new template

The user says *"make a new bold editorial template"* or *"new template called swiss-grid"*.

1. Choose an `<id>` (kebab-case from the user's name).
2. Copy `templates/_starter/` to `templates/<id>/`. Update:
   - `meta.ts`: change `id`, `name`, `description`, `tags`.
   - `index.tsx`: rename the function, change the `innerClassName` (e.g., `resume-<id>`), apply structural changes.
   - `styles.css`: rename the root class to match (e.g., `.resume-<id>`) and adjust styles for the requested aesthetic. Keep the `--page-pad-top` / `--page-pad-bot` vars in the padding declaration; do NOT add `max-width: 210mm` or `margin: 0 auto`.
3. Vite auto-detects the new folder; the registry regenerates and the template appears at `/preview/<id>` and in `/templates`.
4. Tell the user to open `http://localhost:5173/preview/<id>` to see the baseline. Then iterate.

### Iterate on a template

The user says *"tweak minimal-mono to use a serif"* or *"make two-column-classic bolder in the section headings"*.

1. Read the three files: `index.tsx`, `styles.css`, `meta.ts`.
2. Apply the design change. Often just CSS - touch `index.tsx` only if structure needs to change.
3. Suggest reviewing at `/preview/<id>`.

## Design principles

Resume templates render on a tiny canvas (one A4 page) and must survive both screen preview and print. These rules - adapted from Refactoring UI for the resume context - produce templates that look intentional rather than amateur. Apply them when creating *or* iterating.

### Hierarchy: three levers, never all at once

Use **size**, **weight**, and **color** to separate primary content from secondary, but combine them - don't multiply.

| Element | Treatment |
|---|---|
| Name (h1) | Largest type (16-32pt), bold, dark - the *one* place "all three" is allowed. |
| Section heading | Medium type (10-13pt), bold or uppercase-small - pick one, not both. |
| Entry title (role) | Slightly larger than body, semibold; subtitle (company) one tier lighter. |
| Dates / location / labels | Small (8-9pt), muted color, often mono - they support the entry, they don't compete. |
| Body / bullets | Base size (9.5-10.5pt), normal weight, dark-but-not-black (`#111` over pure black). |

The *blur test*: squint at the page. The name should dominate, section labels should read next, entry titles should anchor each block. If everything reads at the same volume, the hierarchy is broken - quiet down dates and metadata first.

### Spacing scale

Pick a constrained scale and stick to it. Two scales work well at A4:

- **Point-based** (good for ATS-style, type-anchored layouts): `2, 4, 8, 12, 16, 24pt`.
- **Millimeter-based** (good for visual two-column A4 layouts): `1, 2, 3, 5, 8, 12mm`.

Spacing within a group (entry title → bullets) should be tighter than spacing between groups. Generous whitespace around section headers signals structure; cramped spacing reads as a wall of text. Start with too much space, then remove.

### Type scale

Constrain to ~5 sizes per template. Print resumes live in a narrow band:

- Body: `9.5-10.5pt`
- Entry title: `10-11pt`
- Section heading: `9-13pt`
- Title meta (date, location): `8.5-9pt`
- Name (h1): `16-32pt`

Line height: `1.45-1.6` for body, `1.05-1.25` for the name and section headings. Avoid weights below `400` for body - they go thready in print.

Use **two font families maximum** (e.g., one sans for body, one mono for meta/eyebrow).

### Color

Resume templates are 90% grayscale by necessity. Color is for one or two accents - the name, a section rule, a bullet glyph - not for body text.

- The "darkest" value is `#111` / `oklch(0.14 …)`, **not** pure black.
- Muted text (dates, eyebrows, subtitles) should land around `#555-#888` on white.
- Saturated grays (cool: blue tint; warm: brown tint) feel more intentional than pure neutral grays.
- Design grayscale-first. Add the accent only after the layout works without it.

### Print is a first-class target

Every template MUST:

1. **Render through `<PageFrame>`.** This is what makes preview = print.
2. **Preserve color in print.** Add `print-color-adjust: exact` (and `-webkit-print-color-adjust: exact`) to the root container if the template uses gradient text, colored bullets, chip backgrounds, or any non-grayscale element. Without it, Chrome silently strips them.
3. **Don't redeclare `@page`.** A4 is the only supported size and `@page { size: a4; margin: 0 }` lives in `src/styles/print-base.css`. Templates pad *inside* their root container.
4. **Avoid splitting entries** with `page-break-inside: avoid` (`break-inside: avoid` for modern browsers). Add `data-print-entry="true"` to entry containers - `print-base.css` has the rule.
5. **Hide editor chrome** with `data-print-hide="true"` on non-resume elements (already handled by `print-base.css`).
6. **Avoid screen-only effects in print:** heavy box-shadows print as muddy gray rectangles - wrap shadows in `@media screen` or remove them in `@media print`.

### Layout

- **Left-align text by default.** Center only the name + tagline if the template is symmetric.
- **Constrain content width.** `12-18mm` page padding works for A4.
- **Two-column layouts** should split sidebar (~30-35%) from main (~65-70%). Going 50/50 makes both awkward.
- **Don't center long content.** Names, taglines, short headlines - yes. Bullets, dates, multi-line descriptions - never.

### Common pitfalls

| Symptom | Fix |
|---|---|
| Looks amateurish | Increase whitespace between sections; constrain content width. |
| Body text looks too dark / harsh | Switch pure black to `#111`, muted text to `#555`. |
| Print PDF lost the gradient/colored bullets | Add `print-color-adjust: exact` to the root. |
| Entry split across two pages | Wrap entry container with `data-print-entry="true"`. |
| Everything fights for attention | Quiet down dates, locations, and labels - small + muted + mono. |
| Feels cramped | Increase line-height to 1.55+, gaps between entries to 0.7em+. |
| Inconsistent spacing throughout | Pick a 6-step spacing scale and *only* use those values. |
| Scale slider in preview toolbar does nothing | Template forgot to wrap in `<PageFrame>`. |
| Preview shows one tall card; print paginates differently | Same root cause as above. |
| Asymmetric right gap when slider scales content down | Template's CSS clamps width with `max-width: 210mm` or `width: 210mm`. Remove it. |

## Verifying

- Render at `/preview/<id>`.
- Print test: visit `/preview/<id>`, hit the toolbar's print button (or Cmd+P), verify the PDF looks clean (no overflow, no chrome, page breaks land between entries).
- `pnpm typecheck` to catch type drift.

## Don't

- Don't add props to the component - it's a no-prop default export.
- Don't add network calls, browser APIs (window, fetch), or stateful hooks unless they're for layout (e.g., `useFitToPage`).
- Don't import from `src/generated/templates.ts` - it's auto-regenerated.
- Don't use Tailwind classes inside the resume component - use scoped CSS in `styles.css`. Tailwind utilities don't work in iframes that don't share the parent's CSS context.
- Don't bypass `<PageFrame>`. Even if it looks fine on screen, the toolbar slider becomes a no-op and preview stops matching print.
- Don't set `max-width: 210mm` or `margin: 0 auto` on the template root - PageFrame already sizes the page.
