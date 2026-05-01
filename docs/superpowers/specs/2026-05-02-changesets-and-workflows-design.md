# Changesets + GitHub workflows — design

## Goal

Set the project up for predictable releases: a changeset-driven version + CHANGELOG flow, a CI workflow that catches typecheck/test regressions on PRs, and a release workflow that automates the version-PR + tag dance. Reset version to `0.0.1` to reflect the pre-1.0 reality and remove the stale `v0.1.0-mvp` tag.

## Constraints

- Package is `private: true` — no npm publish, ever (for now). The release workflow must not try.
- Project uses pnpm 10 + Node 24, declared in `mise.toml` and `package.json#engines`. CI must use the same.
- One commit-style: lowercase imperative scope, matches existing history.
- Stay minimal. No format check in CI yet (would require a one-shot prettier pass first), no branch protection rules (configured via GitHub UI), no Slack/email release notifications.

## Components

### 1. Changesets

Install `@changesets/cli` as a devDependency. Run `pnpm changeset init`, which creates:

- `.changeset/config.json` — config (we override two defaults below).
- `.changeset/README.md` — boilerplate, kept as-is.

Config overrides:

```json
{
  "$schema": "https://unpkg.com/@changesets/config@*/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "restricted",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

`access: "restricted"` is the safe default for a private package — it tells changesets not to attempt npm publish. `baseBranch: "main"` matches the repo.

`package.json` scripts added:

```json
"changeset": "changeset",
"version-packages": "changeset version"
```

(`version` is reserved by npm; using `version-packages` to avoid conflict.)

### 2. CI workflow — `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm typecheck
      - run: pnpm test:run
```

Why this shape:
- `pnpm/action-setup@v4` reads the `packageManager` field from `package.json` (`pnpm@10.33.0`) and installs that exact pnpm. No version drift.
- `actions/setup-node@v4` with `cache: pnpm` handles the pnpm store cache for free.
- `--frozen-lockfile` rejects PRs that modify `pnpm-lock.yaml` without a lockfile update.
- `pnpm typecheck` already runs the sync scripts via `pretypecheck` — the generated registries get freshly built in CI.

### 3. Release workflow — `.github/workflows/release.yml`

```yaml
name: Release

on:
  push:
    branches: [main]

concurrency:
  group: release-${{ github.ref }}
  cancel-in-progress: false

permissions:
  contents: write
  pull-requests: write

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - uses: changesets/action@v1
        with:
          version: pnpm changeset version
          commit: "chore: version packages"
          title: "chore: version packages"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Why this shape:
- No `publish:` step. `changesets/action` skips publishing entirely when the input is omitted, which is exactly right for a private package.
- `fetch-depth: 0` is required so the action can compute the changelog diff from history.
- `concurrency` with `cancel-in-progress: false` queues releases instead of cancelling — we never want to abort a half-finished version PR.
- The action will open (or update) a PR titled "chore: version packages" whenever `.changeset/*.md` files exist on main. Merging that PR runs `changeset version` against `main`, which bumps `package.json`, updates `CHANGELOG.md`, deletes consumed `.changeset/*.md` files, then commits and pushes — and (because no publish step ran) creates a `v<version>` git tag automatically.

### 4. Version reset

`package.json` `version: "0.1.0"` → `"0.0.1"`.

Rationale: nothing has actually been released yet. Starting at `0.0.1` lets the first real release decide its own version (`0.1.0`, `0.0.2`, whatever) via a changeset, instead of inheriting an unintentional `0.1.0` baseline.

### 5. Tag cleanup

One local tag exists: `v0.1.0-mvp`. No remote tags. Action: `git tag -d v0.1.0-mvp`. Non-destructive — the commit is still in history, only the named pointer goes away.

## Repo settings (manual, outside this change)

After merging, in GitHub Settings → Actions → General:

- **"Allow GitHub Actions to create and approve pull requests"** must be ON. Without this, `changesets/action` can't open the version PR.

I'll call this out at the end of the implementation message so the user remembers to flip it.

## Edge cases

- **First push to main with no changesets:** the release workflow runs, finds nothing to do, exits clean. No-op.
- **Multiple changesets accumulate:** the action keeps a single rolling "Version Packages" PR up to date. Merging it consumes them all in one bump.
- **Generated registry files (`src/generated/*.ts`):** already covered by `prepare`/`pretypecheck`. CI will regenerate them via `pretypecheck`. Not a concern.
- **`pnpm-lock.yaml` mismatch:** `--frozen-lockfile` will fail CI loudly. Correct behavior.

## Out of scope

- Format check in CI (would require a project-wide `pnpm format` pass first; not the user's ask).
- Branch protection rules (UI-only).
- Publishing to npm or any registry.
- Auto-deploy / hosting (the product is local-only by design).
- `CHANGELOG.md` initial seeding — the file is created by the first release.

## Files touched

- `package.json` — add devDep, add 2 scripts, set version to 0.0.1.
- `pnpm-lock.yaml` — regenerated by `pnpm install`.
- `.changeset/config.json` — new (post `init` + tweak).
- `.changeset/README.md` — new (from `init`, kept as-is).
- `.github/workflows/ci.yml` — new.
- `.github/workflows/release.yml` — new.
- Local tag `v0.1.0-mvp` — deleted.
