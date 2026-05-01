import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'letterpress-italics',
  name: 'Letterpress Italics',
  description:
    'Italics-heavy letterpress: italic name, italic section transitions ("in summary,", "and so, the experience"). Reads like a long-form letter.',
  tags: ['serif', 'italic', 'classical', 'centered', 'letterpress'],
  fonts: {
    serif: "'Caslon', 'Garamond', 'EB Garamond', 'Cormorant Garamond', Georgia, serif",
  },
}
