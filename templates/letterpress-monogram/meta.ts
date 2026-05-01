import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'letterpress-monogram',
  name: 'Letterpress Monogram',
  description:
    'Letterpress with an initial monogram block at top center ("AP" inside a thin-rule square). Crested, ceremonial, deliberate.',
  tags: ['serif', 'monogram', 'classical', 'centered', 'letterpress'],
  fonts: {
    serif: "'Caslon', 'Garamond', 'EB Garamond', 'Cormorant Garamond', Georgia, serif",
  },
}
