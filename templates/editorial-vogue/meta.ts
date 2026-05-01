import type { ResumeTemplateMeta } from '@/lib/template-registry'

export const meta: ResumeTemplateMeta = {
  id: 'editorial-vogue',
  name: 'Editorial Vogue',
  description:
    'Oversized name treatment, all-caps tracked-out section heads, asymmetric grid with vertical rule between name and contact.',
  tags: ['editorial', 'serif', 'asymmetric', 'magazine'],
  fonts: {
    serif: "'Playfair Display', 'Iowan Old Style', 'Palatino', Georgia, serif",
    sans: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
  },
}
