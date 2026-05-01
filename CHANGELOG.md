# resumex

## 0.1.1

### Patch Changes

- [`a261730`](https://github.com/karnstack/resumex/commit/a26173015e6d04d7b0a2b0aa14b290baa5a0355a) Thanks [@karngyan](https://github.com/karngyan)! - - Fix: allow `localhost` in `frame-ancestors` so the local `/templates` preview iframe works under the Cloudflare Pages `_headers` policy.
  - Docs: README revamp with a fanned paper-stack hero composition, a "build your own" section, and a PR invite for new templates.

## 0.1.0

### Minor Changes

- 5faddad: Initial MVP release. Resumex is an AI-first, local-only resume builder for Claude Code: clone the repo, talk to Claude, ship a beautiful, print-native resume. Your content never leaves your machine.

  **What's in the box**
  - **Conversational editing.** Two bundled skills — `writing-resumes` and `designing-templates` — let Claude create, fork, restructure, and tighten resumes (and templates) without you having to spell out the conventions.
  - **Standalone-component resumes.** Each resume is a self-contained TypeScript component (`resumes/<name>/index.tsx` + `styles.css` + `meta.ts`). No markdown layer, no parser, no database. The filesystem is the source of truth.
  - **Two starter templates.** `emerald-twocol` — visual, two-column, fits a single A4 — for the "send this to a hiring manager" version. `minimal-mono` — single-column, ATS-friendly — for the "let the parser eat it" version. Both share a `<PageFrame>` rendering contract and ship with scoped print CSS.
  - **Print-native.** `Cmd+P → Save as PDF` is the final step. No headless browser, no PDF library — just the browser's print engine plus carefully scoped CSS.
  - **Live preview gallery.** A `/templates` route renders every template at full A4 inside a transform-scaled iframe, so you can see how each one looks before forking it.
  - **Frictionless bootstrap.** `/start` detects an existing `node>=24` + `pnpm>=10` and uses them directly; falls back to `mise` if it's installed; offers to `curl`-install `mise` for users with nothing. Works the same on macOS and Linux/WSL.

  **Stack:** Vite, React 19, TanStack Router, Tailwind v4, TypeScript, Zod.
