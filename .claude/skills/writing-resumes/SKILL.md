---
name: writing-resumes
description: Use when the user wants to create, edit, fork, rename, or restructure a resume in this resumex repo. Triggers on requests like "create a new resume from my linkedin", "tighten the karnstack bullet in frontend", "fork frontend as senior-frontend", "rewrite the summary", "swap the template on backend to two-column-classic". Knows the resume schema, file layout, and operations.
---

# Writing Resumes

This skill encodes everything you need to know to operate on resume *content* in a resumex repo.

## File layout

Each resume is a single file: `resumes/<variant>.md`. The variant name is kebab-case (`frontend`, `senior-frontend`, `default`). Shared assets live in `resumes/assets/`.

There is no per-user nesting. Each clone of the repo is one user; multiple variants represent different *framings* of the same person's career (e.g., `frontend.md`, `staff-eng.md`, `founder.md`).

## Schema (frontmatter)

YAML frontmatter, validated by zod. Fields:

```yaml
---
template: minimal-mono              # required, must match a folder in templates/
name: Karn Goyani                   # required
title: Software Engineer            # optional tagline / role
location: Bangalore, India          # optional
email: mail@karngyan.com            # optional
phone: +91 ...                      # optional
links:                              # optional
  - { label: GitHub, url: https://github.com/... }
  - { label: Website, url: https://... }
skills:                             # optional, grouped tags
  - { group: Languages, items: [Go, TypeScript] }
  - { group: Tools, items: [Postgres, Redis] }
sectionOrder: [experience, projects, education]   # optional override
paper: letter                       # optional, 'letter' | 'a4', default 'letter'
---
```

`template` and `name` are required. Everything else is optional.

## Schema (body)

The body is markdown with conventions. Each `## Heading` is a section. Inside a section, each `### Heading` is an entry, formatted as:

```markdown
### <Title> @ <Subtitle>
*<Date Range> · <Location>*

- bullet 1
- bullet 2
```

- The ` @ ` separator is optional. If absent, the whole heading is the title.
- The metadata line (italic) directly follows the entry heading. Format: `<dateRange>` or `<dateRange> · <location>`. Both pieces are optional.
- Bullets follow the metadata. Markdown formatting (links, bold, etc.) inside bullets is supported.
- Sections that don't fit the entry pattern (e.g., `## Summary`) can have freeform markdown — no `###` headings, just prose.

## Operations

### Create a new resume

The user says something like *"create a new resume named frontend"* or *"new resume from my linkedin"*.

1. Ask the user to either paste their LinkedIn / source material, or describe themselves if they want to build from scratch.
2. Parse the content into the schema above. Be conservative — if a piece of info is ambiguous, leave it out rather than fabricate.
3. Default `template: minimal-mono` unless the user names a different template.
4. Write the file via `Write` tool to `resumes/<variant>.md`. Default variant name is `default` if the user didn't specify.
5. Briefly confirm what was created and suggest the user open `http://localhost:5173/<variant>` in their browser.
6. Vite hot-reloads — the user will see the new resume immediately if the dev server is running.

### Iterate

The user says *"tighten the karnstack bullet in frontend"* or *"rewrite the summary to focus on platform work"*.

1. Read `resumes/<variant>.md` via the `Read` tool.
2. Apply the change with `Edit` (preferred — surgical) or `Write` (only if rewriting wholesale).
3. Preserve the schema conventions. Don't introduce new heading levels, don't break the entry pattern.
4. Briefly say what changed.

### Fork

The user says *"fork frontend as senior-frontend"*.

1. Read `resumes/<from>.md`, write to `resumes/<to>.md` (verify destination doesn't exist).
2. Suggest an immediate iteration: *"want to reframe `senior-frontend` for senior IC roles?"*

### Swap template

The user says *"swap backend to two-column-classic"*.

1. Read `resumes/<variant>.md`.
2. Update only the `template:` field in frontmatter. Use `Edit` for a one-line change.
3. Confirm.

### Delete or rename

These are not skill operations — `rm` and `mv` are the right tools. If the user asks, run those directly via Bash.

## Verification

After any change, the dev server's file watcher picks it up and reloads the preview at `http://localhost:5173/<variant>`. If the dev server isn't running, suggest the user run `/start`.

If the schema validation fails (zod throws on save), the editor UI shows an inline error. When iterating via this skill, you can double-check by reading the file back and ensuring the frontmatter parses cleanly.

## Don't

- Don't fabricate content the user didn't provide. If you need information, ask.
- Don't change the markdown convention — `### Title @ Subtitle` + italic metadata + bullets is the contract templates rely on.
- Don't add fields not in the schema. If a user wants something custom, suggest extending the schema in `src/lib/schema.ts` (a separate task).
- Don't try to render or PDF the resume — the user does that with Cmd+P from `/<variant>/print`.
