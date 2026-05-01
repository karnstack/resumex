#!/usr/bin/env node
// Custom publish step for changesets/action. Single-package repos: the action
// pushes `v${version}` and creates the GitHub Release at that tag, regardless
// of what we print (it ignores the package name in `New tag:` output and uses
// `v${pkg.packageJson.version}` — see changesets/action src/run.ts). It also
// does NOT create the local tag — `changeset publish` would have, but we
// replaced that, so we create it here before the action's `git push origin
// v${version}` runs.
// Skips when the release already exists, so re-runs on main are no-ops.

import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const gitTag = `v${pkg.version}`
const releaseTag = `${pkg.name}@${pkg.version}`

const existing = spawnSync('gh', ['release', 'view', gitTag], { stdio: 'ignore' })

if (existing.status === 0) {
  process.stderr.write(`Release ${gitTag} already exists, skipping.\n`)
  process.exit(0)
}

const tagResult = spawnSync('git', ['tag', gitTag], { stdio: 'inherit' })
if (tagResult.status !== 0) {
  process.exit(tagResult.status ?? 1)
}

process.stdout.write(`New tag: ${releaseTag}\n`)
