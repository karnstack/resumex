# resumex

AI-first resume builder. Local-only. Filesystem is the source of truth. The user runs `/start` once to bootstrap, then talks naturally.

## Layout

- `resumes/<variant>.md` — user content (frontmatter + structured markdown)
- `templates/<id>/` — React templates (default export + meta + styles.css)
- `src/lib/parser.ts` — markdown → ParsedResume (the contract templates consume)
- `src/lib/schema.ts` — zod schemas + types
- `src/components/editor/` — the local in-browser editor UI
- `.claude/commands/start.md` — bootstrap command
- `.claude/skills/writing-resumes/SKILL.md` — content operations
- `.claude/skills/designing-templates/SKILL.md` — template authoring

## Conventions

- Resume schema: see `docs/CONVENTIONS.md`. Skills duplicate the key bits inline.
- Template contract: see `docs/TEMPLATE_GUIDE.md`. Skills duplicate the key bits inline.
- Routes use TanStack file-based routing. Adding a new public-API endpoint = a Vite middleware plugin (see `src/lib/save-middleware.ts`, `src/lib/list-middleware.ts`).
- Mode switching: `VITE_RESUMEX_MODE=public` gates editor surfaces (set by Cloudflare Pages deploy in Plan 2). Default mode is `local`.

## Don't

- Don't add network calls or third-party services. The product is local-only.
- Don't add a database — filesystem is the source of truth.
- Don't break the resume schema or template contract without bumping a version note in CONVENTIONS / TEMPLATE_GUIDE.
- Don't ship templates as Tailwind utility classes — use scoped CSS in `templates/<id>/styles.css`.

## Common operations

- `pnpm dev` — start the dev server (port 5173).
- `pnpm test` / `pnpm test:run` — vitest.
- `pnpm typecheck` — tsc.
- `pnpm format` — prettier.

## When making changes

- After editing `templates/`, the sync-templates plugin regenerates `src/generated/templates.ts` automatically.
- After editing schemas, run typecheck across templates and editor — type changes ripple.
- Frontend changes: dev server hot-reloads. Server middleware changes (save / list): restart the dev server.
