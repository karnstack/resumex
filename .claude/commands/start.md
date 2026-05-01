---
name: start
description: Bootstrap and run the resumex dev server. Detects existing node/pnpm or provisions them via mise, installs deps, starts vite, opens the browser.
---

# /start

Bootstrap the resumex repo for first use (or restart it). Works for users with everything already installed and for users with nothing.

You walk a 4-phase decision tree below. Tell the user in plain language what you're about to do at each step. **Get explicit consent before running any install command.**

---

## Phase 1 — Detect (single parallel batch)

Run these in **one** parallel tool call. Capture each output:

```bash
uname -s                                     # OS family (Darwin / Linux / MINGW*|MSYS*|CYGWIN*)
command -v mise                              # mise on PATH?
node --version 2>/dev/null || true           # node version (or empty)
pnpm --version 2>/dev/null || true           # pnpm version (or empty)
lsof -nP -iTCP:5173 -sTCP:LISTEN >/dev/null 2>&1 && echo busy || echo free
test -x "$HOME/.local/bin/mise" && echo yes || echo no
```

**Version comparison rules:**
- Strip a leading `v`, take the part before the first `.`, parse as integer.
- `node` floor: 24. `pnpm` floor: 10.
- Empty output ⇒ not installed ⇒ does not meet the floor.

**OS rules:**
- `uname -s` starting with `Darwin` or `Linux` (incl. WSL) → supported.
- Starting with `MINGW`, `MSYS`, or `CYGWIN` → Windows-native (PATH-D).

---

## Phase 2 — Choose runtime path

Decide in this order. Stop at the first match.

| Condition | Path |
|---|---|
| node ≥ 24 **and** pnpm ≥ 10 | **PATH-A** — use what they have |
| `mise` on PATH | **PATH-B** — `mise install` |
| `~/.local/bin/mise` exists | **PATH-B′** — absolute-path mise + shell-init nudge |
| OS is Windows-native | **PATH-D** — print "use WSL", **exit** |
| otherwise | **PATH-C** — offer to install mise, then PATH-B′ |

Per-branch behavior below. Always tell the user *what* you're about to do and *why* before doing it.

### PATH-A — already good

Say:

> "I see Node `<x.y.z>` and pnpm `<a.b.c>` on your PATH — using those directly. Skipping mise."

Proceed to Phase 3.

### PATH-B — mise on PATH

Say:

> "Provisioning Node 24 and pnpm 10 via mise. This is idempotent and safe to re-run."

Run:

```bash
mise install
```

Proceed to Phase 3.

### PATH-B′ — mise installed but not on PATH

Say:

> "mise is installed at `~/.local/bin/mise` but isn't on your shell's PATH yet, so I'll use the full path for this run.
>
> To make `mise` available in future shells, add this line to your `~/.zshrc` (or `~/.bashrc`) and reopen your terminal:
>
>     eval \"$($HOME/.local/bin/mise activate zsh)\"   # or 'bash' if you use bash
>
> Once that's set up, `/start` will use `mise` directly next time."

Run:

```bash
"$HOME/.local/bin/mise" install
```

Proceed to Phase 3.

### PATH-C — nothing usable installed

Say:

> "You don't have Node 24 / pnpm 10 or mise installed yet. The cleanest fix is **mise** — a small version manager that handles both in one shot.
>
> I'd like to run this:
>
>     curl https://mise.run | sh
>
> That installs mise to `~/.local/bin/mise`. Want me to go ahead? (Claude Code will also ask permission before executing it.)"

**Wait for the user's answer.**

- If they agree → run `curl https://mise.run | sh`, then **fall through to PATH-B′** (the install lands at `~/.local/bin/mise` and won't be on PATH yet for this session).
- If they decline → say:
  > "No problem. You can install mise yourself when you're ready — see https://mise.jdx.dev/getting-started.html — and then re-run `/start`."

  **Exit.** Do not run anything further.

### PATH-D — Windows-native

Say:

> "resumex bootstrap requires WSL on Windows. mise doesn't have a clean Windows-native install path, and the dev server uses Unix tools like `lsof` and `open`.
>
> Set up WSL2 with Ubuntu (https://learn.microsoft.com/en-us/windows/wsl/install), clone this repo inside WSL, and run `/start` from there."

**Exit.** Do not run anything further.

---

## Phase 3 — Install deps

Run:

```bash
pnpm install
```

(If you came through PATH-B/B′, `pnpm` will be the mise-shimmed one — that's fine.)

If this fails: surface the error verbatim and stop. Don't try to start the dev server.

---

## Phase 4 — Serve

1. If Phase 1 reported the port as **busy**, the dev server is already running. Skip starting it.
2. Otherwise, start the dev server in the background using `run_in_background`:

   ```bash
   pnpm dev
   ```

3. Wait briefly (1–2 seconds), then open the browser:
   - Darwin: `open http://localhost:5173`
   - Linux: `xdg-open http://localhost:5173` (if `xdg-open` isn't installed, just print the URL)

4. Print this cheat sheet:

   > resumex is up at http://localhost:5173.
   >
   > Just talk to me — try:
   >   - "create a new resume from my linkedin"
   >   - "tighten the karnstack bullet in frontend"
   >   - "make a new bold editorial template"
   >
   > Or edit the resume files directly under `resumes/<name>/index.tsx` — the dev server hot-reloads on save.

---

## Notes

- `/start` is idempotent. Re-running on a fully-set-up repo with the dev server already up is a no-op that re-prints the cheat sheet.
- This command never writes to your shell rc files. PATH-B′ tells you what to add; you add it.
- Your resume content lives in `resumes/<name>/index.tsx` and never leaves this machine.
