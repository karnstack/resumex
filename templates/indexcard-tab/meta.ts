import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'indexcard-tab',
  name: 'Index Card — Tab',
  description:
    'Library card with left-edge tab markers (EXP, EDU, SKL). Each section anchors to its tab in the gutter.',
  tags: ['indexcard', 'library', 'tab', 'sidebar-l'],
  fonts: {
    sans: 'ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, "JetBrains Mono", Menlo, monospace',
  },
}
