import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'emerald-twocol',
  name: 'Emerald Two-Column',
  description:
    'Visual two-column resume: emerald palette, sidebar with skills/projects/education, main with experience grouped by company. Fits to one A4 page.',
  tags: ['two-column', 'fit-to-page', 'visual', 'a4'],
  fonts: {
    sans: 'Figtree, ui-sans-serif, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
}
