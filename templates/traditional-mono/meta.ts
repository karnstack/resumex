import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'traditional-mono',
  name: 'Traditional · Mono Labels',
  description:
    'Two-column with sidebar on the left. Mono accents on labels, eyebrows, and dates while body stays in a quiet sans.',
  tags: ['traditional', 'two-column', 'sidebar-left', 'mono-accent'],
  fonts: {
    sans: 'Inter, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
