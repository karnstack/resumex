import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'specsheet-grid',
  name: 'Specsheet · Grid',
  description:
    'Strict numbered spec-grid layout. Every row in a tabular grid; bullets become rows in a 2-3 column spec grid.',
  tags: ['specsheet', 'technical', 'datasheet', 'grid', 'tabular'],
  fonts: {
    sans: 'Helvetica Neue, Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
