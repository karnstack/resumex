import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'indexcard-classified',
  name: 'Index Card — Classified',
  description:
    'Catalog-card energy. Dewey-style classifier numbers on each section ("658.4 / EXPERIENCE", "004 / SKILLS").',
  tags: ['indexcard', 'library', 'classified', 'sidebar-l'],
  fonts: {
    sans: 'ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, "JetBrains Mono", Menlo, monospace',
  },
}
