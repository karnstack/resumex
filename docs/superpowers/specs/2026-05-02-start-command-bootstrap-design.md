# /start command bootstrap — design

## Goal

Make `/start` work cleanly the first time, for both technical and non-technical users, regardless of what tooling they have installed. Today the command assumes `mise` is on PATH and silently breaks when it isn't.

## Audience and constraints

- A user who already has `node>=24` and `pnpm>=10` should not be told to install another tool.
- A user with nothing installed should get a single, named install step (mise) and a clear consent prompt.
- macOS and Linux/WSL are first class. Windows-native is out of scope — those users get a clean "use WSL" message.
- `/start` must remain idempotent. Re-running on a fully-set-up repo with the dev server already running should be a no-op that just prints the cheat sheet.
- No new scripts. The agent walks the decision tree from `start.md` itself; this matches the rest of the project's agent-first ethos.

## The flow

Four phases. Phase 1 is a single parallel batch; the rest is straight-line with one branch.

```
Phase 1 — Detect (one parallel tool call)
  uname -s                                  → OS family
  command -v mise                           → mise on PATH?
  node --version 2>/dev/null                → node version (or empty)
  pnpm --version 2>/dev/null                → pnpm version (or empty)
  lsof -nP -iTCP:5173 -sTCP:LISTEN          → port already taken?
  test -x "$HOME/.local/bin/mise"           → mise installed but not on PATH?

Phase 2 — Choose runtime path
  IF node >= 24 AND pnpm >= 10              → PATH-A   (use existing)
  ELSE IF mise on PATH                      → PATH-B   (mise install)
  ELSE IF $HOME/.local/bin/mise exists      → PATH-B'  (absolute-path mise + shell-init nudge)
  ELSE IF OS is Windows-native              → PATH-D   (print "use WSL", exit)
  ELSE                                      → PATH-C   (offer to install mise → then PATH-B')

Phase 3 — Install deps
  pnpm install                              (idempotent; uses resolved pnpm)

Phase 4 — Serve
  if port 5173 free: pnpm dev (run_in_background)
  open http://localhost:5173                (macOS) / xdg-open (Linux)
  print cheat sheet
```

**Version comparison:** parse `vX.Y.Z` or `X.Y.Z`, take the major as integer, compare to floor (24 for node, 10 for pnpm). No semver library.

**OS detection:** treat `uname -s` output starting with `MINGW`, `MSYS`, or `CYGWIN` as Windows-native. Anything else (`Darwin`, `Linux`) is supported.

## Per-branch behavior

Each branch has a fixed user-facing message. The agent should say what it's about to do *before* doing it.

### PATH-A — already good
> "I see Node `<x.y.z>` and pnpm `<a.b.c>` on PATH — using those directly. Skipping mise."

Proceed straight to Phase 3.

### PATH-B — mise on PATH
> "Provisioning Node 24 and pnpm 10 via mise (idempotent)."

Run `mise install`. Then Phase 3.

### PATH-B' — mise installed, not on PATH
> "mise is installed at `~/.local/bin/mise` but isn't on your shell's PATH. I'll use the full path for this run.
>
> To make `mise` available in future shells, add this line to your `~/.zshrc` (or `~/.bashrc`) and reopen your terminal:
>
>     eval "$(~/.local/bin/mise activate zsh)"   # or: bash"

Run `~/.local/bin/mise install`. Then Phase 3.

### PATH-C — nothing installed
> "You don't have Node 24 / pnpm 10 or mise installed. The cleanest fix is mise — a small version manager that provisions both in one shot.
>
> I'd like to run:
>
>     curl https://mise.run | sh
>
> Is that okay? (Claude Code will also ask permission before executing it.)"

If the user agrees: run the curl command, then fall through to **PATH-B'** (the install lands at `~/.local/bin/mise`, which won't be on PATH yet for this session).

If the user declines: print:
> "No problem. You can install mise yourself when you're ready: https://mise.jdx.dev/getting-started.html — then re-run `/start`."
>
> Exit without running anything else.

### PATH-D — Windows-native
> "resumex bootstrap requires WSL on Windows. mise doesn't have a clean Windows-native install path, and the dev server uses Unix tools (`lsof`, `open`).
>
> Set up WSL2 with Ubuntu (https://learn.microsoft.com/en-us/windows/wsl/install), clone the repo inside WSL, and run `/start` from there."

Exit without running further commands.

## Phase 4 details

- If `lsof` from Phase 1 reported a listener on 5173, assume the dev server is already running. Skip `pnpm dev`. Still open the browser and print the cheat sheet.
- Open command: `open` on Darwin, `xdg-open` on Linux. Skip on anything else.
- Brief sleep (1–2s) between starting the background `pnpm dev` and opening the browser, so Vite is listening when the page loads.

## Cheat sheet (updated)

The current cheat sheet refers to `resumes/<name>.md`, which no longer matches the standalone-component layout. Replace it with:

> resumex is up at http://localhost:5173.
>
> Just talk to me — try:
>   - "create a new resume from my linkedin"
>   - "tighten the karnstack bullet in frontend"
>   - "make a new bold editorial template"
>
> Or edit the resume files directly under `resumes/<name>/index.tsx`. The dev server hot-reloads.

## Edge cases

- **Mid-flow failure (e.g. `pnpm install` errors):** surface the error verbatim, do not retry, do not start the dev server.
- **Node OK but pnpm missing (or vice versa):** treated identically to "neither installed" — falls into PATH-B / B' / C. Avoids a separate corepack branch.
- **mise on PATH but `mise install` fails (e.g. network):** surface the error, exit. No fallback to PATH-A.
- **User re-runs `/start` after a successful start:** Phase 1 detects the live port; Phase 4 skips `pnpm dev`; cheat sheet still prints.
- **User on Linux without `xdg-open` installed:** print the URL and tell them to open it manually. Don't fail.

## Out of scope

- README revamp (the README still references `resumes/<name>.md` and the dropped editor — separate follow-up task).
- Auto-editing the user's shell rc. We tell them what line to add; we never write to their dotfiles.
- Windows-native support.
- Corepack-based pnpm provisioning.
- Auto-detecting and migrating an existing nvm/asdf/volta setup.

## Files touched

- `.claude/commands/start.md` — full rewrite of the steps section. Frontmatter (`name`, `description`) stays.

That's the only file. No new scripts, no new docs.
