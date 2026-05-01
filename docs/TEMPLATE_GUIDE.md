# Template & resume component guide

Templates and resumes share the same component contract. Templates contain placeholder content; resumes contain real content. Otherwise they are identical.

## Folder shape

```
templates/<id>/         resumes/<variant>/
├── index.tsx             ├── index.tsx
├── styles.css            ├── styles.css
└── meta.ts               └── meta.ts
```

`templates/_starter/` is the canonical scaffold. Copy it to start a new template; copy any template (`emerald-twocol`, `minimal-mono`, ...) to start a new resume.

## Component contract

```tsx
import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Variant() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-my-template">
      {/* content as JSX */}
    </PageFrame>
  )
}
```

No props. No `ParsedResume`. The component is a fully self-contained page.

`fitDeps={[]}` is correct for standalone components. The outer `PageFrameProvider` (in the route shell) drives re-measurement via `fitKey` when toolbar controls (density, padding) change.

## `<PageFrame>` is mandatory

Every template / resume MUST render through `<PageFrame>`. PageFrame owns:

- 210mm × 297mm article box (A4).
- `useFitToPage` measurement → `zoom: scale` so content always fits one page.
- The preview toolbar contract: scale slider (`forcedScale` via `PageFrameContext`), density / padding sliders (re-measured via `fitKey`).
- WYSIWYG: identical layout on screen, in print preview, and in the PDF.

Bypassing `PageFrame` silently breaks the toolbar and produces previews that don't match print. Don't.

## meta.ts

```ts
// templates/<id>/meta.ts
import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'my-template',
  name: 'My Template',
  description: 'One-line description shown on the gallery card.',
  tags: ['single-column', 'fit-to-page'],
  fonts: { sans: '...', mono: '...' },
}
```

```ts
// resumes/<variant>/meta.ts
import type { ResumeMeta } from '@/lib/resume-registry'

export const meta: ResumeMeta = {
  variant: 'staff-eng',
  displayName: 'Staff Engineer',
}
```

`displayName` is what the home page shows; `variant` must match the folder name.

## CSS scoping

Use class names rooted at `.resume-<id>` (or a stable prefix like `.kt-` for `emerald-twocol`) to avoid collisions across bundled CSS. **Don't** use Tailwind utility classes inside template CSS - templates load in isolated iframes (gallery thumbnails) where Tailwind may not be present.

Don't set `max-width: 210mm` or `margin: 0 auto` on your root - PageFrame's inner div may be wider than 210mm when content is being scaled down, and a clamp produces an asymmetric right gap.

For inner padding, use the `--page-pad-top` / `--page-pad-bot` CSS variables so the preview toolbar's padding sliders can override them:

```css
.resume-my-template {
  padding: var(--page-pad-top, 15mm) 18mm var(--page-pad-bot, 15mm);
}
```

## Print

`@page { size: a4; margin: 0 }` lives in `src/styles/print-base.css`. Don't redeclare `@page` in template CSS - rules cascade across the bundled CSS and the last-loaded one wins regardless of which template is active.

In your `@media print` block:

- `page-break-inside: avoid` (or `break-inside: avoid`) on entry containers.
- Adjust internal padding only if on-screen padding doesn't match what you want printed.

Use the `data-print-entry="true"` attribute on entry containers - `print-base.css` already has a default rule for it.

## Verifying

```bash
pnpm dev
# templates: http://localhost:5173/preview/<id>
# resumes:   http://localhost:5173/<variant>
```

Print check: open the route, click the toolbar's print button (or Cmd+P) → "Save as PDF" → verify clean output.

```bash
pnpm typecheck   # also re-runs the sync scripts
```
