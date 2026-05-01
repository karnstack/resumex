---
name: writing-resumes
description: Use when the user wants to create, edit, fork, rename, or restructure a resume in this resumex repo. Triggers on requests like "create a new resume from my linkedin", "tighten the karnstack bullet in frontend", "fork frontend as senior-frontend", "rewrite the summary", "swap the look of staff-eng to minimal-mono". Knows the resume folder layout, component contract, and operations.
---

# Writing Resumes

This skill encodes everything you need to know to operate on resume content in a resumex repo.

## File layout

Each resume is a folder: `resumes/<variant>/`. The variant name is kebab-case (`frontend`, `senior-frontend`, `staff-eng`, `default`).

```
resumes/<variant>/
  index.tsx     # default-exports a React component (no props)
  styles.css    # scoped CSS
  meta.ts       # exports `meta: ResumeMeta`
```

Each clone of the repo is one user; multiple variants represent different framings of the same person's career.

## Component contract

`index.tsx` exports a default component that takes no props. Content is hardcoded as JSX. Required wrapper: `<PageFrame>` so fit-to-page and print CSS work.

```tsx
import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Variant() {
  return (
    <PageFrame fitDeps={[]} className="..." innerClassName="...">
      {/* content as JSX */}
    </PageFrame>
  )
}
```

`meta.ts`:

```ts
import type { ResumeMeta } from '@/lib/resume-registry'

export const meta: ResumeMeta = {
  variant: 'staff-eng',
  displayName: 'Staff Engineer',
}
```

## Templates are starters

Resumes start as forks of a template folder. Templates live in `templates/<id>/` and have the same shape as resumes (no props, content baked in). They contain placeholder content that you replace with the user's real content.

Available templates (see `templates/` for the current list, ignoring `_starter`):
- `emerald-twocol` - emerald palette, two-column A4, sidebar with skills/projects/education.
- `minimal-mono` - single-column, monospace, ATS-friendly.
- `_starter` - bare-bones scaffold for new templates.

## Operations

### Create a new resume

The user says *"create a new resume from my linkedin"* or *"new resume named frontend"*.

1. Ask three things in one message:
   - **Source material** - paste content directly, share a PDF/file path, or describe from scratch.
   - **Variant name** - kebab-case (e.g. `frontend`, `staff-eng`). Default `default`.
   - **Template** - list `templates/<id>` folders (skip `_starter`). Default `emerald-twocol`.
2. Copy the chosen template folder to `resumes/<variant>/` via `cp -r templates/<id>/* resumes/<variant>/` (Bash). Verify the destination doesn't exist first.
3. Write `resumes/<variant>/meta.ts` with `{ variant: '<variant>', displayName: '<readable name>' }`.
4. Edit `resumes/<variant>/index.tsx`: replace the placeholder content with the user's real data. Keep the existing structure and class names so `styles.css` keeps working. Be conservative - don't fabricate.
   - Rename the function (e.g. `EmeraldTwocol` → `StaffEng`).
   - Replace the header (name, role pill, contact lines).
   - Replace the about/summary text.
   - Replace skills chips with the user's stack.
   - Rewrite the experience groups: each `<div className="kt-section-group">` is one company; entries within are roles at that company.
   - Update sidebar sections (projects/education/awards) to match the user's content. Drop sections that don't apply.
   - Update the footer's name/title.
5. Briefly confirm what was created and suggest opening `http://localhost:5173/<variant>`.

The dev server's `sync-resumes-plugin` re-generates the registry on folder add. HMR picks up content edits.

### Iterate

The user says *"tighten the karnstack bullet in staff-eng"* or *"rewrite the summary"*.

1. Read `resumes/<variant>/index.tsx` (or `styles.css` for visual tweaks).
2. Apply the change with `Edit` (preferred - surgical) or `Write` (full rewrite).
3. Preserve class names and structure unless the change is intentionally structural.
4. Briefly say what changed.

### Fork

The user says *"fork staff-eng as principal-eng"*.

1. Verify `resumes/<to>/` doesn't exist.
2. `cp -r resumes/<from>/ resumes/<to>/` via Bash.
3. Update `resumes/<to>/meta.ts` to the new variant id and a fitting display name.
4. Suggest an immediate iteration ("want to reframe `principal-eng` for principal-IC roles?").

### Swap look

The user says *"swap the look of staff-eng to minimal-mono"*.

This is a manual rewrite, not a one-line change.

1. Capture the current resume's content (read `resumes/<variant>/index.tsx`).
2. Copy `templates/<new-id>/index.tsx` and `styles.css` over the existing files.
3. Re-port the user's content into the new layout, mapping section-by-section. Different templates have different structural conventions - don't paste blindly.
4. Tell the user this was a rewrite. Suggest they review the diff.

### Delete or rename

`rm -rf resumes/<variant>/` or `mv resumes/<from>/ resumes/<to>/` via Bash. After rename, update the `variant` field in `meta.ts`.

## Verification

After any change, the dev server picks up the edits and reloads `http://localhost:5173/<variant>`. If the dev server isn't running, suggest the user run `/start`.

If TypeScript fails (e.g. you removed a class name that styles.css relies on, or a typo), the dev server's overlay surfaces the error.

## Don't

- Don't fabricate content the user didn't provide. If you need information, ask.
- Don't break the component contract: every resume must default-export a no-prop component, and every page must be wrapped in `<PageFrame>`.
- Don't introduce a parser or markdown layer. Content lives as JSX.
- Don't render the PDF for the user - they print from the browser via the toolbar's print button (or Cmd+P).
- Don't write to `src/generated/resumes.ts` directly - it's auto-regenerated.
