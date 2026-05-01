import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'editorial',
  name: 'Editorial',
  description:
    'Magazine editorial. Serif headlines, italic meta, drop-cap on the summary, restrained black and gray on white.',
  tags: ['editorial', 'serif', 'magazine', 'single-column'],
  fonts: {
    serif: "'Playfair Display', 'Iowan Old Style', 'Palatino', Georgia, serif",
    sans: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
  },
}
