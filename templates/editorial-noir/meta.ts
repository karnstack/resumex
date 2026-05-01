import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'editorial-noir',
  name: 'Editorial Noir',
  description:
    'Black ink on warm cream paper. Heavy serif headlines, double rule under name, monogrammed footer.',
  tags: ['editorial', 'serif', 'cream', 'magazine'],
  fonts: {
    serif: "'Playfair Display', 'Iowan Old Style', 'Palatino', Georgia, serif",
    sans: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
  },
}
