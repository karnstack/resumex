---
name: designing-templates
description: Use when the user wants to create or modify a resume template in this resumex repo. Triggers on requests like "make a new bold editorial template", "tweak minimal-mono to use a serif", "fix the print style on two-column-classic", "the gallery iframe is cropping — fix the page CSS". Knows the template contract, sample data, and print expectations.
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

`templates/_starter/` is the canonical scaffold source — copy it when creating a new template (the leading `_` excludes it from the registry).

## Contract

```ts
import type { ResumeTemplate, ResumeTemplateMeta } from '@/lib/template-registry'

const MyTemplate: ResumeTemplate = ({ resume }) => {
  // resume: ParsedResume
  return <article className="resume-my-template">…</article>
}

export default MyTemplate
export const meta: ResumeTemplateMeta = {
  id: 'my-template',
  name: 'My Template',
  description: 'short pitch shown in the gallery',
  tags: ['minimal', 'two-column', ...],
  paper: 'letter',           // optional
}
```

`meta` is exported separately from `meta.ts` so the registry plugin can consume it without parsing index.tsx.

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

Bullets and body fields are pre-rendered HTML — render with `dangerouslySetInnerHTML`. The parser sanitizes structurally (no script tags, etc.) but the content is fundamentally trusted (it's the user's own markdown).

## Operations

### Create a new template

The user says *"make a new bold editorial template"* or *"new template called swiss-grid"*.

1. Choose an `<id>` (kebab-case from the user's name).
2. Copy `templates/_starter/` to `templates/<id>/`. Update:
   - `meta.ts`: change `id`, `name`, `description`, `tags`.
   - `styles.css`: change the root class name (e.g., `.resume-<id>`) and adjust styles for the requested aesthetic.
   - `index.tsx`: update the root class name and any structural changes.
3. Vite auto-detects the new folder; the registry regenerates and the template appears at `/preview/<id>` and in `/templates`.
4. Tell the user to open `http://localhost:5173/preview/<id>` to see the baseline. Then iterate.

### Iterate on a template

The user says *"tweak minimal-mono to use a serif"* or *"make two-column-classic bolder in the section headings"*.

1. Read the three files: `index.tsx`, `styles.css`, `meta.ts`.
2. Apply the design change. Often just CSS — touch `index.tsx` only if structure needs to change.
3. Suggest reviewing at `/preview/<id>`.

## Print styles

Every template's `styles.css` MUST include `@media print` rules that:
- Set `@page` size and margins matching the frontmatter `paper` field.
- Apply `page-break-inside: avoid` to entries (use the `data-print-entry="true"` attribute pattern).
- Hide editor chrome via `[data-print-hide="true"] { display: none !important; }` (already in shared `print-base.css`).

Print-base.css handles the common defaults; templates extend it. When creating a new template, copy the print rules from `_starter` and adapt.

## Verification

- Render at `/preview/<id>` against `.gallery/sample.md`.
- Print test: visit `/preview/<id>`, hit Cmd+P, verify the PDF looks clean (no overflow, no chrome, page breaks land between entries).
- Snapshot test: re-run `pnpm test:run` to refresh snapshots if structure changes.

## Don't

- Don't import data from anywhere other than the `resume` prop. Templates are pure functions of `ParsedResume`.
- Don't mutate `resume` — it's shared state during preview.
- Don't add network calls, browser APIs (window, fetch), or stateful hooks. Templates render the same on the local app and on the public preview deploy.
- Don't reference the editor or routing — templates are isolated by design.
- Don't use Tailwind classes inside the resume component. Use scoped CSS in `styles.css` so the design intent travels with the template (and Tailwind utility classes wouldn't work cleanly inside iframes that don't share the parent's CSS context anyway).
