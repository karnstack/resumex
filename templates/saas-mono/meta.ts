import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'saas-mono',
  name: 'SaaS Mono',
  description:
    'SaaS DNA with mono body — Inter for name and headers, JetBrains Mono for prose. Indigo accent.',
  tags: ['saas', 'modern', 'single-column', 'mono', 'chips'],
  fonts: {
    sans: 'Inter, Geist, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
