import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'specsheet-callout',
  name: 'Specsheet · Callout',
  description:
    'Engineering-callout aesthetic. Each experience entry is a bordered callout with a label tag like ROLE · 01. Spec-sheet header.',
  tags: ['specsheet', 'technical', 'datasheet', 'callout', 'boxed'],
  fonts: {
    sans: 'Helvetica Neue, Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
