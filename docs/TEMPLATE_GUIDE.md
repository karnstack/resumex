# Template author guide

Each template is a self-contained folder under `templates/`. The folder name is the template id (kebab-case).

```
templates/<id>/
├── index.tsx        - default export: ResumeTemplate
├── styles.css       - scoped CSS + @media print rules
└── meta.ts          - exported `meta: ResumeTemplateMeta`
```

`templates/_starter/` is the canonical starting point. Copy it to scaffold a new template.

## Contract

```ts
import type { ParsedResume } from '@/lib/schema'

export type ResumeTemplate = (props: { resume: ParsedResume }) => JSX.Element
```

A template is a pure function of `ParsedResume`. No state, no network, no browser APIs.

### `<PageFrame>` is mandatory

Every template MUST render through `<PageFrame>`:

```tsx
import { PageFrame } from '@/components/page-frame/PageFrame'

const MyTemplate: ResumeTemplate = ({ resume }) => (
  <PageFrame fitDeps={[resume]} innerClassName="resume-my-template">
    {/* …content… */}
  </PageFrame>
)
```

`PageFrame` owns:

- 210mm × 297mm article box (the printed page).
- `useFitToPage` measurement → `zoom: scale` so content always fits one A4.
- The preview toolbar contract: scale slider (`forcedScale` from `PageFrameContext`), density / padding sliders (re-measured via `fitKey`).
- WYSIWYG: identical layout in screen preview, print preview, and PDF.

Templates that bypass `PageFrame` (rendering a plain `<article>` directly) appear to work but silently break the toolbar slider and produce a preview that does not match the print. Don't.

Pass the template's root class via `innerClassName`. Don't set `max-width: 210mm` or `margin: 0 auto` in your CSS - PageFrame's inner div may be wider than 210mm when content is being scaled down, and a clamp leaves an asymmetric gap on the right.

## What `ParsedResume` looks like

See `src/lib/schema.ts`. The shape:

```ts
type ParsedResume = {
  meta: ResumeFrontmatter         // name, title, links, skills, sectionOrder, ...
  sections: Array<{
    key: string                   // 'experience'
    name: string                  // 'Experience'
    entries: Array<{
      title: string
      subtitle?: string
      dateRange?: string
      location?: string
      bullets: string[]           // pre-rendered HTML
      body?: string               // pre-rendered HTML (non-bullet content after metadata)
    }>
    body?: string                 // pre-rendered HTML - used when entries.length === 0
  }>
}
```

Render `bullets` / `body` with `dangerouslySetInnerHTML`. They are HTML strings produced by the markdown parser (remark + rehype).

## CSS scoping

Use class names rooted at `.resume-<id>` to avoid collisions. Don't use Tailwind utility classes - they may not be available when the template is loaded in an isolated iframe (gallery preview).

For the inner padding (the gutter between content and the page edge), use the `--page-pad-top` / `--page-pad-bot` CSS variables so the preview toolbar's padding sliders can override them:

```css
.resume-my-template {
  padding: var(--page-pad-top, 15mm) 18mm var(--page-pad-bot, 15mm);
}
```

## Print styles

The global `@page { size: a4; margin: 0 }` rule lives in `src/styles/print-base.css` - A4 is the only supported page size. Template `styles.css` should NOT redeclare `@page` (rules cascade across the bundled CSS). Instead, every template's `@media print` block should:

- Use `page-break-inside: avoid` (or modern `break-inside: avoid`) on entry containers.
- Adjust internal padding for print if the on-screen padding doesn't match what you want printed.

Use the `data-print-entry="true"` attribute on entry containers - `print-base.css` has a default rule for it.

The print route (`/<variant>/print`) sets `data-print="true"` on the body; templates can use that to apply print-only adjustments (e.g., hide a "preview" watermark) but should generally not need to.

## Sample data

`.gallery/sample.md` is the canonical sample resume used by `/preview/<id>`. Test your template against it.

If your template needs to show off something specific (e.g., a sidebar timeline that benefits from extra structured data), add a `sample-overrides.md` next to `index.tsx` and the preview route will use that for your template instead. (Note: sample-overrides is a planned extension; v1 uses only the canonical sample.)

## Testing

```bash
pnpm test:run            # snapshot test runs against minimal-mono; add yours if you want one
```

Visual check:

```bash
pnpm dev
# then visit http://localhost:5173/preview/<id>
```

Print check: from the preview route, Cmd+P → "Save as PDF" → verify clean output.
