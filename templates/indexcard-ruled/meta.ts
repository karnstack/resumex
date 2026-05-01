import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'indexcard-ruled',
  name: 'Index Card — Ruled',
  description:
    'Library card with prominent ruled-lines. Every body row sits on a horizontal hairline rule, like a notebook page.',
  tags: ['indexcard', 'library', 'ruled', 'single-column'],
  fonts: {
    sans: 'ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, "JetBrains Mono", Menlo, monospace',
  },
}
