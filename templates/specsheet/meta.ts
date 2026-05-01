import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'specsheet',
  name: 'Specsheet',
  description:
    'Product spec sheet aesthetic. REV / DATE / OWNER header. Key/value spec rows for personal info and section bodies.',
  tags: ['specsheet', 'technical', 'datasheet', 'single-column'],
  fonts: {
    sans: 'Helvetica Neue, Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
