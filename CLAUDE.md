# resumex

AI-first resume builder. Local-only. Filesystem is the source of truth. The user runs `/start` once to bootstrap, then talks naturally.

## Layout

- `resumes/<variant>/` - user resumes. Each is a folder with `index.tsx` + `styles.css` + `meta.ts`.
- `templates/<id>/` - starter blueprints. Same shape as resumes; placeholder content.
- `src/lib/template-registry.ts` / `src/lib/resume-registry.ts` - typed accessors over generated registries.
- `src/lib/sync-{templates,resumes}-plugin.ts` - Vite plugins that auto-generate `src/generated/{templates,resumes}.ts`.
- `scripts/sync-{templates,resumes}.mjs` - standalone equivalents (run on `prepare` and `pretypecheck`).
- `.claude/commands/start.md` - bootstrap command.
- `.claude/skills/writing-resumes/SKILL.md` - resume operations.
- `.claude/skills/designing-templates/SKILL.md` - template authoring.

## Conventions

- Component contract (templates and resumes share it): see `docs/TEMPLATE_GUIDE.md`.
- Project-level rules: see `docs/CONVENTIONS.md`.
- Routes use TanStack file-based routing.
- Mode switching: `VITE_RESUMEX_MODE=public` flips the home page to redirect to GitHub. Default mode is `local`.

## Don't

- Don't add network calls or third-party services. The product is local-only.
- Don't add a database - filesystem is the source of truth.
- Don't reintroduce a markdown / parser content layer. Resumes are TS components.
- Don't ship templates as Tailwind utility classes - use scoped CSS in `styles.css`.
- Don't bypass `<PageFrame>` in any template or resume.

## Common operations

- `pnpm dev` - start the dev server (port 5173).
- `pnpm typecheck` - tsc (re-runs the sync scripts via `pretypecheck`).
- `pnpm test:run` - vitest.
- `pnpm format` - prettier.

## When making changes

- After adding/removing a folder under `templates/` or `resumes/`, the corresponding sync plugin regenerates `src/generated/{templates,resumes}.ts`. HMR picks up content edits inside `index.tsx`.
- Vite config changes: restart the dev server.
