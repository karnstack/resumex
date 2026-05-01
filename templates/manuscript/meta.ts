import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'manuscript',
  name: 'Manuscript',
  description:
    'Refined classical layout — Roman-numeraled sections, italic dates, and a lyrical Optima-feel sans on cream paper.',
  tags: ['manuscript', 'classical', 'serif', 'single-column'],
  fonts: {
    sans: "'Optima', 'Avenir Next', 'Avenir', 'Albertus', 'Trajan Pro', Georgia, serif",
  },
}
