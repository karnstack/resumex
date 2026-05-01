---
name: start
description: Bootstrap and run the resumex dev server. Installs node/pnpm via mise, installs deps, starts vite, opens the browser.
---

# /start

Bootstrap the resumex repo for first use (or restart it).

## Steps

1. Run `mise install` to provision Node 24 + pnpm 10 (idempotent).
2. Run `pnpm install` (idempotent).
3. Check whether port 5173 is already in use:
   ```bash
   lsof -nP -iTCP:5173 -sTCP:LISTEN >/dev/null 2>&1
   ```
   - If in use → skip step 4; proceed to step 5.
   - Otherwise → start the dev server in the background using `run_in_background`:
     ```bash
     pnpm dev
     ```
4. Wait briefly (1–2 seconds), then open the browser:
   - macOS: `open http://localhost:5173`
   - linux: `xdg-open http://localhost:5173`

5. Print this short cheat sheet for the user:

   > resumex is up at http://localhost:5173.
   > you can just talk to me — try:
   >   - "create a new resume from my linkedin"
   >   - "tighten the karnstack bullet in frontend"
   >   - "make a new bold editorial template"
   > or edit directly in the browser ui.

## Notes

- The dev server hot-reloads on filesystem changes — both your edits and any I make are picked up automatically.
- Your resume content lives in `resumes/<name>.md`. It never leaves this machine.
