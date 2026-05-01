import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'architect-section',
  name: 'Architect Section',
  description:
    'Section-cut chevrons between sections. Architectural-drawing title-block in the bottom-right corner.',
  tags: ['architect', 'technical', 'single-column', 'mono'],
  fonts: {
    sans: 'Helvetica Neue, Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
