import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'editorial-pull',
  name: 'Editorial Pull-Quote',
  description:
    'Two-column editorial. The summary lives in a left sidebar pull-quote panel with a hanging quotation mark; main column carries the resume.',
  tags: ['editorial', 'serif', 'two-column', 'magazine', 'pull-quote'],
  fonts: {
    serif: "'Playfair Display', 'Iowan Old Style', 'Palatino', Georgia, serif",
    sans: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
  },
}
