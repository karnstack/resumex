#!/usr/bin/env node
// Emits a `New tag: <pkg>@<version>` line for changesets/action so it
// creates a GitHub Release whose body is the matching CHANGELOG.md entry.
// Skips emission when the release already exists, so re-runs on main are no-ops.

import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const tag = `${pkg.name}@${pkg.version}`

const result = spawnSync('gh', ['release', 'view', tag], { stdio: 'ignore' })

if (result.status === 0) {
  process.stderr.write(`Release ${tag} already exists, skipping.\n`)
} else {
  process.stdout.write(`New tag: ${tag}\n`)
}
