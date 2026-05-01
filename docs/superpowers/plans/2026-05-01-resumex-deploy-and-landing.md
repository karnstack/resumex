# resumex Plan 2: Public Deploy + karnstack Landing Page

> **Status:** Not yet executed. This plan documents the work needed to ship the public deploy at `resumex.karnstack.com` and the marketing/gallery page at `karnstack.com/resumex`.
>
> **Refreshed 2026-05-02** to match the standalone-component architecture (no markdown layer, no API middleware, no `/$variant/print` route). See `docs/superpowers/specs/2026-05-02-standalone-resumes-design.md` for the underlying refactor.

**Goal:** Make resumex publicly visible. The cloned-repo product itself stays local-only — the public surfaces are (a) a deployed build of resumex serving the home page + template/resume previews + iframe-embeds, and (b) a karnstack landing page that pitches the product and embeds those iframes.

**Architecture recap:**
- Same resumex codebase serves both modes. `VITE_RESUMEX_MODE=public` flips `/` to redirect to GitHub. Other routes (`/$variant`, `/preview/$templateId`, `/templates`) work in public mode because resumes and templates are bundled TS components — there is no per-user API or markdown content layer to gate.
- Local-only constraint preserved by convention: a user's fork lives on their machine. The repo on GitHub (and the deploy) carries no `resumes/<variant>/` content — only templates with placeholder content. Forks are users' personal data.
- Templates and resumes ship as standalone React components (`<id>/{index.tsx, styles.css, meta.ts}`). The `sync-templates` plugin emits `public/templates.json` so external consumers can read the template list.
- The karnstack landing page reads that manifest from the resumex deploy so adding a template doesn't require a karnstack rebuild.

**Tech recap:** Vite 8 · React 19 · TanStack Router · Tailwind v4 · Cloudflare Pages.

---

## File Structure (this plan creates / modifies)

**In `~/code/karnstack/resumex/` (this repo):**

```
.env.example                                     — already exists, document VITE_RESUMEX_MODE=public
wrangler.toml OR pages config in dashboard       — Cloudflare Pages build config
.github/workflows/deploy-resumex.yml             — optional: CI deploy on push to main
src/routes/__root.tsx                            — add a public-mode redirect for unmatched routes (?)
```

**In `~/code/karnstack/karnstack/apps/web/` (the karnstack site):**

```
apps/web/src/routes/resumex/index.tsx            — landing page (hero, how-it-works, gallery)
apps/web/src/routes/resumex/components/Gallery.tsx        — iframe grid with lazy loading
apps/web/src/routes/resumex/components/HowItWorks.tsx     — 3-step code blocks
apps/web/src/routes/resumex/components/Hero.tsx           — title + pitch + primary CTA
apps/web/src/lib/resumex-manifest.ts             — build-time or runtime fetch of templates.json
```

(File names assume karnstack's existing TanStack Router file-based routing convention. Inspect `apps/web/src/routes/` first to match the existing pattern before scaffolding.)

---

## Phasing

- **Phase 1** — Cloudflare Pages deploy of `resumex.karnstack.com` (Tasks 1–4). After this, the public site is live (home redirects to GitHub; templates and previews are browseable + iframe-embeddable).
- **Phase 2** — karnstack landing page route (Tasks 5–9). After this, `karnstack.com/resumex` is live with the gallery.

Each phase produces a working, releasable surface. Phase 2 depends on Phase 1 being live first (the iframe `src` URLs need to resolve).

---

## Phase 1 — Public deploy of `resumex.karnstack.com`

### Task 1: Cloudflare Pages project setup

**Where:** Cloudflare dashboard (manual), then commit any config files locally.

**Steps:**

1. Create a new Cloudflare Pages project:
   - **Project name:** `resumex`
   - **Production branch:** `main`
   - **Source:** GitHub repo `karnstack/resumex` (push the local repo to GitHub first if not already)
2. Build configuration:
   - **Framework preset:** Vite
   - **Build command:** `pnpm install --frozen-lockfile && pnpm build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (default)
   - **Node version:** `24` (set via `NODE_VERSION` env var or `.nvmrc` if Pages requires)
3. Environment variables (production):
   - `VITE_RESUMEX_MODE=public`
   - `NODE_VERSION=24`
4. Save and trigger first deploy. Cloudflare assigns a `<projectname>.pages.dev` URL — verify the build succeeds and the page loads.

**Verification:**

- `curl -fsS https://resumex.pages.dev/preview/minimal-mono` returns 200 with the resume HTML shell.
- `curl -fsS https://resumex.pages.dev/templates.json` returns the manifest JSON (e.g., `[{"id":"minimal-mono"},{"id":"emerald-twocol"}]`).
- Visit `https://resumex.pages.dev/` in a browser — should redirect to GitHub (`/` route's `beforeLoad` calls `window.location.replace('https://github.com/karnstack/resumex')`).
- Visit `https://resumex.pages.dev/templates` and `/preview/<id>` — both render normally. Public mode only redirects the home page; everything else is browseable.

If anything fails: `VITE_RESUMEX_MODE` likely isn't being picked up. Vite reads `VITE_*`-prefixed env vars at build time, so the env var must be set when `pnpm build` runs on Cloudflare's build agent — confirm it's in the project's "Production" env and not just "Preview."

### Task 2: Custom domain `resumex.karnstack.com`

**Where:** Cloudflare dashboard.

**Steps:**

1. In the resumex Pages project → **Custom domains** → Add `resumex.karnstack.com`.
2. Cloudflare will create the necessary DNS record automatically since `karnstack.com` is presumably already on Cloudflare DNS. If not, manually add a `CNAME resumex.karnstack.com → <projectname>.pages.dev`.
3. Wait for SSL provisioning (usually <2 min).

**Verification:**

- `curl -fsS https://resumex.karnstack.com/preview/emerald-twocol -o /dev/null -w "%{http_code}\n"` → `200`
- HTTPS cert is valid (`curl -v` shows the cert chain without `--insecure`).
- The TLS cert covers `resumex.karnstack.com` specifically.

### Task 3: Verify the deploy ships only template content (no personal resumes)

The repo's `main` branch carries no `resumes/<variant>/` content — that's user data and lives on each user's local clone. The deploy bundle should likewise contain only template code.

**Steps:**

1. Confirm `main` does not contain any `resumes/<variant>/` folders. The home page in public mode redirects anyway, so there's no surface that lists them — but better to enforce at the source.
2. Confirm the build's `dist/` only contains compiled template + page code:

```bash
pnpm build
ls dist/                          # expect: index.html, assets/, templates.json
cat dist/templates.json            # expect: [{"id":"emerald-twocol"},{"id":"minimal-mono"}]
```

3. (Optional) Add a CI guard that fails the build if `resumes/` is non-empty when `VITE_RESUMEX_MODE=public`. Future-proofs against accidental commits.

### Task 4: Runtime smoke + monitoring

**Steps:**

1. Visit `https://resumex.karnstack.com/preview/minimal-mono` and `https://resumex.karnstack.com/preview/emerald-twocol` in a real browser. Confirm:
   - Templates render with their bundled placeholder content.
   - Fonts load (Figtree + JetBrains Mono).
   - No console errors.
   - The page is iframe-able (no `X-Frame-Options: DENY` header — Cloudflare Pages default is `SAMEORIGIN` which would BLOCK karnstack.com from iframing). **This is the critical config check.**
2. **`X-Frame-Options` for iframe embedding from karnstack.com:** Add a `_headers` file at the project root (or `public/_headers` so Vite copies it):

   ```
   /preview/*
     X-Frame-Options: ALLOW-FROM https://karnstack.com
     Content-Security-Policy: frame-ancestors https://karnstack.com https://*.karnstack.com
   ```

   Note: `X-Frame-Options: ALLOW-FROM` is deprecated and ignored by modern browsers, but `CSP frame-ancestors` is the correct modern equivalent and is what we actually rely on. Ship both for compatibility.

3. Test iframe embedding from karnstack.com (manually, by adding a temporary test page or via a local karnstack dev server). Confirm the iframe loads without browser security errors.

**Verification:**

- `curl -I https://resumex.karnstack.com/preview/minimal-mono` shows the `Content-Security-Policy: frame-ancestors ...` header.
- An iframe pointed at the URL from a karnstack.com origin loads (visible in browser dev tools, no "refused to display in frame" error).

**Commit any new files:** `public/_headers`, an updated `.env.example` if needed.

```bash
git add public/_headers .env.example
git commit -m "feat(deploy): cloudflare pages deploy + frame-ancestors for karnstack embedding"
```

---

## Phase 2 — karnstack.com/resumex landing page

### Task 5: Survey the existing karnstack site structure

**Where:** `~/code/karnstack/karnstack/apps/web/`

**Steps:**

1. Read `apps/web/src/routes/` to understand the routing convention (file-based or code-based, naming patterns, root layout).
2. Check `apps/web/src/components/` for existing reusable primitives (Hero, CTA, code-block components, etc. — likely shadcn-based given the `packages/ui` workspace package).
3. Note the existing color tokens / design language. The resumex landing page should *match* karnstack's site aesthetic, not copy resumex's emerald-heavy palette.
4. Check `apps/web/package.json` for the deps pattern (`@karnstack/ui` workspace import? Direct shadcn?).

**Output:** mental model of where the new route goes and which existing primitives to reuse. Report back before scaffolding new files.

### Task 6: `/resumex` route scaffold

**Files:**
- `apps/web/src/routes/resumex/index.tsx` — the landing page

**Steps:**

1. Create the file following the karnstack convention surveyed in Task 5.
2. Skeleton: import the three section components (`Hero`, `HowItWorks`, `Gallery`) — to be implemented next. Page layout should be a single column, max-width container, generous padding.
3. Add metadata (title, og image, description) appropriate to the route.

**Commit:** `feat(resumex): /resumex route scaffold`

### Task 7: Hero + How-It-Works sections

**Files:**
- `apps/web/src/routes/resumex/components/Hero.tsx`
- `apps/web/src/routes/resumex/components/HowItWorks.tsx`

**Hero:**
- Title: `resumex`
- Tagline: `AI-first resume builder for Claude Code. Local-only. Beautiful templates.`
- Two CTAs:
  - Primary: `Clone the repo →` (link to `https://github.com/karnstack/resumex`)
  - Secondary: `View templates ↓` (anchor link to gallery section)

**HowItWorks** — three numbered steps with code blocks:

```
1. Clone
   git clone https://github.com/karnstack/resumex && cd resumex

2. Bootstrap
   claude
   # then say: /start

3. Talk to it
   "create a new resume from my linkedin"
   "tighten the karnstack bullet"
   "make a new bold editorial template"
```

Use whatever code-block component karnstack already has. Match karnstack's monospace and color tokens.

**Commit:** `feat(resumex): Hero + HowItWorks sections`

### Task 8: Gallery component (iframe grid + manifest fetch)

**Files:**
- `apps/web/src/lib/resumex-manifest.ts`
- `apps/web/src/routes/resumex/components/Gallery.tsx`

**Manifest fetch — design choice:**

The resumex public deploy emits `https://resumex.karnstack.com/templates.json` (e.g., `[{"id":"emerald-twocol"},{"id":"minimal-mono"}]`). Two ways to consume it:

- **Option A — Build-time fetch.** karnstack's build script fetches the manifest URL during build, bakes the list into the bundle. Adding a new template requires a karnstack redeploy. Pro: zero runtime fetches. Con: adding templates needs karnstack-side deploy.
- **Option B — Runtime fetch.** The Gallery component fetches the manifest in a `useEffect`. Adding a template appears immediately on next page load. Pro: fully decoupled. Con: extra HTTP request.

**Recommendation: B (runtime).** It matches the original design intent ("templates ship and update independently of karnstack"). The fetch is a single small JSON; cache via `Cache-Control` on the resumex deploy. Failure mode: if the fetch fails (e.g., resumex.karnstack.com is down), fall back to a hardcoded list of known templates as a safety net. Also ensures users who hit the page during a brief deploy window still see the gallery.

**`resumex-manifest.ts`:**

```ts
const FALLBACK = [{ id: 'emerald-twocol' }, { id: 'minimal-mono' }]
const MANIFEST_URL = 'https://resumex.karnstack.com/templates.json'

export type ResumexTemplate = { id: string }

export async function fetchResumexManifest(): Promise<ResumexTemplate[]> {
  try {
    const r = await fetch(MANIFEST_URL, { cache: 'force-cache' })
    if (!r.ok) throw new Error(`status ${r.status}`)
    return (await r.json()) as ResumexTemplate[]
  } catch {
    return FALLBACK
  }
}
```

**`Gallery.tsx`:**

- Calls `fetchResumexManifest()` on mount.
- Renders a responsive grid (1 / 2 / 3 columns based on viewport).
- Each cell:
  - `<iframe src="https://resumex.karnstack.com/preview/<id>" loading="lazy" sandbox="allow-scripts" />`
  - Fixed aspect ratio matching A4 portrait (roughly `1 / 1.414`).
  - Caption with template name (looked up from a small inline name map, or `id` formatted as Title Case as a fallback).
  - "Use this template →" link to `https://github.com/karnstack/resumex#quickstart`.
- IntersectionObserver to lazy-load iframes as they enter viewport (in addition to the `loading="lazy"` attribute, which not all browsers honor for iframes the same way).

**Sandbox + security:** the iframe loads from `resumex.karnstack.com` which we control. `sandbox="allow-scripts"` is sufficient. No `allow-same-origin` needed — templates don't need parent-frame access.

**Commit:** `feat(resumex): Gallery (iframe grid + manifest fetch with fallback)`

### Task 9: Polish + deploy

**Steps:**

1. Add a `<title>resumex · AI-first resume builder</title>` and `<meta name="description">` for SEO.
2. Open Graph tags pointing at a screenshot of the gallery (capture once, store in karnstack's public assets).
3. Run karnstack's normal build / lint / typecheck / format passes.
4. Deploy via karnstack's existing pipeline (likely Cloudflare Pages or Vercel — already wired).
5. Smoke test `https://karnstack.com/resumex`:
   - Page loads with hero, how-it-works, gallery
   - Iframes load (open dev tools, confirm no CSP/frame-ancestors errors)
   - Lazy loading works (scroll through the gallery, network panel shows iframes load progressively)
   - Mobile viewport renders sanely (the iframes are A4 — they will be tall on mobile; either accept the scroll or use `transform: scale(...)` to size down)

**Commit:** `feat(resumex): polish + deploy landing page`

---

## Risks & Open Questions

1. **Cloudflare Pages headers behavior.** `_headers` files on Pages have specific syntax requirements. If the file isn't picked up, headers won't apply and iframe embedding will fail. Verify in the Pages dashboard's "Headers" tab after the first deploy.

2. **Cross-origin iframe height.** If the parent (karnstack.com) wants to dynamically size iframes to match content height, that requires postMessage. For v1, fixed aspect-ratio is fine. If we want dynamic heights later, the resumex deploy would need to `postMessage` its height up to the parent — small addition.

3. **Manifest-meta gap.** `templates.json` only contains `{id}` entries. The plan's gallery shows template name + description — currently hardcoded in karnstack. If we want auto-growing names/descriptions, the `sync-templates` plugin needs to also extract `meta.ts` content into the manifest JSON. Small follow-up if/when needed.

4. **Cache invalidation.** The manifest fetch in Gallery.tsx uses `cache: 'force-cache'`. Cloudflare's CDN will cache `templates.json` aggressively. If the user adds a new template and pushes, it can take minutes for the manifest URL to reflect it. Acceptable trade. If urgent, set `Cache-Control: max-age=60` on `templates.json` via a `_headers` rule.

5. **Decoupled deploys mean version skew.** If karnstack deploys a Gallery that expects a manifest field that the live resumex deploy hasn't shipped yet (or vice versa), things break gracefully (fallback list, missing meta) but quietly. Not a blocker for v1; worth noting.

6. **Sandbox vs accessibility.** `sandbox="allow-scripts"` blocks form submissions and pointer-event navigation outside the iframe, which is fine for a passive gallery. If we ever want clickable iframes (e.g., click a template → navigate to clone instructions), we'd add a transparent overlay div with a real link.

---

## Self-Review Summary

**Spec coverage:**
- [x] Cloudflare Pages deploy of `resumex.karnstack.com` (Tasks 1–4)
- [x] Custom domain + SSL (Task 2)
- [x] X-Frame headers for iframe embedding (Task 4)
- [x] Build verification (no resume content leaks; manifest emits) (Task 3)
- [x] karnstack `/resumex` route (Tasks 5–9)
- [x] Hero + how-it-works (Task 7)
- [x] Iframe gallery with manifest fetch + fallback (Task 8)
- [x] Lazy loading + IntersectionObserver (Task 8)

**Out of scope:**
- Adding new templates beyond the 2 in v1 — that's iterative skill-driven work in resumex, not a planning concern here.
- An interactive in-browser demo where users can edit sample data — explicitly rejected during brainstorming as duplicating the local UI.
- Analytics on the landing page — leave to whatever karnstack already uses.
- A "Try It Now" CTA that opens Claude Code with the repo — Claude Code doesn't currently support that kind of invocation flow; skip for now.

**When ready to execute:** Pick up Phase 1, Task 1. Don't start Phase 2 until Phase 1 has a public URL serving iframes.
