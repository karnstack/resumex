import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'academic',
  name: 'Academic',
  description:
    'LaTeX-CV aesthetic. Dense single column, small-caps section heads with ruled underline, italic journal references, hanging indents.',
  tags: ['academic', 'serif', 'single-column', 'dense', 'cv'],
  fonts: {
    serif:
      "'Computer Modern', 'CMU Serif', 'Latin Modern Roman', 'EB Garamond', Georgia, 'Times New Roman', serif",
  },
}
