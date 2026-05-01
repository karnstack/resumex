import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'manuscript-script',
  name: 'Manuscript — Script',
  description:
    'Manuscript with a subtle script flourish on the name (Italianno-feel, gracefully falls back to italic serif). Body remains classical.',
  tags: ['manuscript', 'classical', 'script', 'serif'],
  fonts: {
    sans: "'Optima', 'Avenir Next', 'Avenir', 'Albertus', 'Trajan Pro', Georgia, serif",
  },
}
