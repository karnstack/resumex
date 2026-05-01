// standalone equivalent of sync-templates-plugin's syncOnce.
// runs without a Vite context (called from `prepare` and `pretypecheck` hooks)
// so a fresh clone can `pnpm typecheck` immediately, without first running dev/build.

import * as fs from 'node:fs'
import * as path from 'node:path'

const root = process.cwd()
const TEMPLATES_DIR = path.resolve(root, 'templates')
const GENERATED = path.resolve(root, 'src/generated/templates.ts')
const MANIFEST = path.resolve(root, 'public/templates.json')

function findTemplateIds() {
  if (!fs.existsSync(TEMPLATES_DIR)) return []
  return fs
    .readdirSync(TEMPLATES_DIR)
    .filter((name) => !name.startsWith('_') && !name.startsWith('.'))
    .filter((name) => fs.statSync(path.join(TEMPLATES_DIR, name)).isDirectory())
    .filter((name) => fs.existsSync(path.join(TEMPLATES_DIR, name, 'index.tsx')))
}

function generateRegistry(ids) {
  const imports = ids
    .map((id) => {
      const safe = id.replace(/-/g, '_')
      return `import _${safe}_default from '../../templates/${id}/index'\nimport { meta as _${safe}_meta } from '../../templates/${id}/meta'`
    })
    .join('\n')

  const entries = ids
    .map((id) => {
      const safe = id.replace(/-/g, '_')
      return `  '${id}': { default: _${safe}_default, meta: _${safe}_meta },`
    })
    .join('\n')

  return `// generated — do not edit. see scripts/sync-templates.mjs and src/lib/sync-templates-plugin.ts
import type { TemplateModule } from '@/lib/template-registry'
${imports}

export const templates: Record<string, TemplateModule> = {
${entries}
}
`
}

const ids = findTemplateIds()

fs.mkdirSync(path.dirname(GENERATED), { recursive: true })
fs.writeFileSync(GENERATED, generateRegistry(ids))

fs.mkdirSync(path.dirname(MANIFEST), { recursive: true })
fs.writeFileSync(MANIFEST, JSON.stringify(ids.map((id) => ({ id })), null, 2))

console.log(`[sync-templates] wrote ${ids.length} template${ids.length === 1 ? '' : 's'}: ${ids.join(', ') || '(none)'}`)
