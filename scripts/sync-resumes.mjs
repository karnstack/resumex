// standalone equivalent of sync-resumes-plugin's syncOnce.
// runs without a Vite context (called from `prepare` and `pretypecheck` hooks)
// so a fresh clone can `pnpm typecheck` immediately, without first running dev/build.

import * as fs from 'node:fs'
import * as path from 'node:path'

const root = process.cwd()
const RESUMES_DIR = path.resolve(root, 'resumes')
const GENERATED = path.resolve(root, 'src/generated/resumes.ts')

function findResumeVariants() {
  if (!fs.existsSync(RESUMES_DIR)) return []
  return fs
    .readdirSync(RESUMES_DIR)
    .filter((name) => !name.startsWith('_') && !name.startsWith('.'))
    .filter((name) => fs.statSync(path.join(RESUMES_DIR, name)).isDirectory())
    .filter((name) => fs.existsSync(path.join(RESUMES_DIR, name, 'index.tsx')))
}

function generateRegistry(variants) {
  const imports = variants
    .map((v) => {
      const safe = v.replace(/-/g, '_')
      return `import _${safe}_default from '../../resumes/${v}/index'\nimport { meta as _${safe}_meta } from '../../resumes/${v}/meta'`
    })
    .join('\n')

  const entries = variants
    .map((v) => {
      const safe = v.replace(/-/g, '_')
      return `  '${v}': { default: _${safe}_default, meta: _${safe}_meta },`
    })
    .join('\n')

  return `// generated - do not edit. see scripts/sync-resumes.mjs and src/lib/sync-resumes-plugin.ts
import type { ResumeModule } from '@/lib/resume-registry'
${imports}

export const resumes: Record<string, ResumeModule> = {
${entries}
}
`
}

const variants = findResumeVariants()

fs.mkdirSync(path.dirname(GENERATED), { recursive: true })
fs.writeFileSync(GENERATED, generateRegistry(variants))

console.log(
  `[sync-resumes] wrote ${variants.length} resume${variants.length === 1 ? '' : 's'}: ${variants.join(', ') || '(none)'}`,
)
