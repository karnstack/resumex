# Conventions

resumex is a local-only, AI-first resume builder. Filesystem is the source of truth.

This document covers project-level rules. For the component contract templates and resumes share, see `TEMPLATE_GUIDE.md`.

## Resumes and templates have the same shape

Both live as folders with three files:

```
templates/<id>/         resumes/<variant>/
  index.tsx               index.tsx
  styles.css              styles.css
  meta.ts                 meta.ts
```

A template is a starter blueprint with placeholder content. A resume is a real instance with the user's content. Forking a template = copying its folder into `resumes/<variant>/` and replacing the placeholder content.

There is no parser. There is no markdown content layer. Each `index.tsx` is a no-prop React component that returns JSX with the content baked in.

## Editing happens outside the browser

The browser is a renderer. There is no in-app editor. To change a resume, edit the files - directly, or by asking Claude Code (the `writing-resumes` skill knows the operations).

## Routes

| Route | Renders |
| --- | --- |
| `/` | List of resumes + featured templates |
| `/$variant` | A resume from `resumes/<variant>/` |
| `/preview/$templateId` | A template from `templates/<id>/` |
| `/templates` | The full template gallery |

Both `/$variant` and `/preview/$templateId` use the same shell: `Stage` + `PageFrame` + `PreviewToolbar`. Print = the toolbar's print button (or Cmd+P).

## Generated registries

Two Vite plugins watch their respective folders and regenerate registry files at `src/generated/`:

- `sync-templates-plugin` → `src/generated/templates.ts`
- `sync-resumes-plugin` → `src/generated/resumes.ts`

Equivalent standalone scripts (`scripts/sync-{templates,resumes}.mjs`) run during `prepare` and `pretypecheck` so a fresh clone can `pnpm typecheck` without first booting the dev server.

Don't edit the generated files. Don't import from them in app code - go through `template-registry.ts` / `resume-registry.ts` instead.

## Mode gating

`VITE_RESUMEX_MODE=public` (set by Cloudflare Pages deploys) flips the home page to redirect to GitHub. All other routes work in public mode since resumes/templates are bundled TS.

## Don't

- Don't add network calls or third-party services. The product is local-only.
- Don't add a database. The filesystem is the source of truth.
- Don't reintroduce a markdown / parser content layer.
- Don't ship templates as Tailwind utility classes - use scoped CSS in `styles.css` (the template gallery loads templates in isolated iframes where Tailwind utilities may not be present).
- Don't bypass `<PageFrame>`. See `TEMPLATE_GUIDE.md`.
