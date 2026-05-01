import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'specsheet-tab',
  name: 'Specsheet · Tabs',
  description:
    'Tabbed-folder spec sheet. Each section gets a row of file-style tabs with one active tab; spec rows below.',
  tags: ['specsheet', 'technical', 'datasheet', 'tabs', 'folder'],
  fonts: {
    sans: 'Helvetica Neue, Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
