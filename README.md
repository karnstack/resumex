# resumex

AI-first resume builder for Claude Code. Clone, talk naturally, ship a beautiful resume.

- ✦ **Local-only.** Filesystem is the source of truth. Your content never leaves your machine.
- ✦ **Conversational.** Edit by talking to Claude Code. Two skills (`writing-resumes`, `designing-templates`) encode the conventions.
- ✦ **Visual.** A live in-browser editor for nitpicks. Live preview as you type.
- ✦ **Print-native.** Cmd+P → Save as PDF. No headless browser, no PDF library.
- ✦ **Two flavors out of the box.** `emerald-twocol` (visual - emerald palette, two-column, fits to one A4) for the "send this to a hiring manager" version. `minimal-mono` (single-column, ATS-friendly) for the "let the parser eat it" version.

## Quickstart

```bash
git clone https://github.com/karnstack/resumex && cd resumex
claude        # then say:  /start
```

`/start` installs Node and pnpm via mise, installs deps, and opens the local app at http://localhost:5173.

After that, just talk:

- *"create a new resume from my linkedin"*
- *"tighten the karnstack bullet in frontend"*
- *"swap backend to two-column-classic"*
- *"make a new bold editorial template"*

Or use the in-browser editor for nitpick edits.

## Files

- `resumes/<variant>.md` - your resumes. One file per variant. See [docs/CONVENTIONS.md](./docs/CONVENTIONS.md).
- `templates/<id>/` - bundled templates. Add your own with `make a new template …`. See [docs/TEMPLATE_GUIDE.md](./docs/TEMPLATE_GUIDE.md).

## Stack

Vite · React 19 · TanStack Router · Tailwind v4 · TypeScript · zod · gray-matter + remark/rehype · CodeMirror 6.

## License

MIT.
