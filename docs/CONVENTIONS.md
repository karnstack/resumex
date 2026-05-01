# Resume conventions (C3)

A resume in resumex is a single markdown file: `resumes/<variant>.md`.

It has YAML frontmatter (the structured header) and a markdown body (the structured-but-prose-flavored content).

This document defines exactly what's expected. The parser at `src/lib/parser.ts` is the source of truth; this doc is a reader-friendly companion.

## Frontmatter

```yaml
---
template: minimal-mono              # required, must match a folder in templates/
name: Karn Goyani                   # required
title: Software Engineer            # optional
location: Bangalore, India          # optional
email: mail@karngyan.com            # optional
phone: +91 …                        # optional
links:                              # optional
  - { label: GitHub, url: https://github.com/karngyan }
  - { label: Website, url: https://karngyan.com }
skills:                             # optional, grouped
  - { group: Languages, items: [Go, TypeScript, Python] }
  - { group: Tools, items: [Postgres, Redis] }
sectionOrder: [experience, projects, education]   # optional
---
```

## Body

```markdown
## Section Heading

### Entry Title @ Entry Subtitle
*<Date Range> · <Location>*

- bullet 1
- bullet 2
- bullet 3
```

### Section rules

- `## Heading` opens a new section.
- Section keys are computed from heading text via slugification (`Experience` → `experience`).
- A section without `### Entry` headings is "freeform" — its markdown body is rendered as-is by the template.

### Entry rules

- `### Heading` opens a new entry. Heading text format: `<title>` or `<title> @ <subtitle>`.
- Optional italic line directly after the entry heading is the metadata: `<dateRange>` or `<dateRange> · <location>`.
- Bullets follow. Markdown formatting inside bullets (links, bold, code) is fine.
- Anything after bullets that isn't a bullet falls through to the entry's freeform `body`.

## Common section names

By convention but not requirement:
- `Summary` — short paragraph, freeform.
- `Experience` — entries with date ranges.
- `Projects` — entries, often without subtitles.
- `Education` — entries (degrees / schools).
- `Speaking`, `Publications`, `Patents`, `Awards`, etc. — domain-specific, all use the entry pattern.

## Validation

Frontmatter is validated by zod (`src/lib/schema.ts`). Errors show inline in the editor UI. Body is best-effort parsed: malformed sections fall back to freeform rendering rather than crashing.
