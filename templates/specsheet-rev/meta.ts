import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'specsheet-rev',
  name: 'Specsheet · Revisions',
  description:
    'Spec sheet with prominent REV-A / REV-B section tags and a revision-history aesthetic. Mono labels throughout.',
  tags: ['specsheet', 'technical', 'datasheet', 'revisions', 'mono'],
  fonts: {
    sans: 'Helvetica Neue, Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
