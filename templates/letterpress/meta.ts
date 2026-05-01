import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'letterpress',
  name: 'Letterpress',
  description:
    'Classical correspondence aesthetic. Centered name, hairline rules, italic dates, generous air. Letter-of-recommendation feel in a quiet serif.',
  tags: ['serif', 'classical', 'centered', 'single-column', 'letterpress'],
  fonts: {
    serif: "'Caslon', 'Garamond', 'EB Garamond', 'Cormorant Garamond', Georgia, serif",
  },
}
