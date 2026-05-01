import { describe, it, expect } from 'vitest'
import { parseResume } from './parser'

describe('parseResume — frontmatter + sections', () => {
  it('extracts frontmatter and detects sections by H2', () => {
    const source = `---
template: minimal-mono
name: Karn
---

## Experience

content here

## Education

more content
`
    const result = parseResume(source)
    expect(result.meta.name).toBe('Karn')
    expect(result.meta.template).toBe('minimal-mono')
    expect(result.sections.map((s) => s.key)).toEqual(['experience', 'education'])
    expect(result.sections.map((s) => s.name)).toEqual(['Experience', 'Education'])
  })

  it('throws on missing required frontmatter', () => {
    const source = `---
template: minimal-mono
---

## Experience
`
    expect(() => parseResume(source)).toThrow()
  })

  it('honors sectionOrder when provided', () => {
    const source = `---
template: minimal-mono
name: Karn
sectionOrder: [education, experience]
---

## Experience
foo

## Education
bar
`
    const result = parseResume(source)
    expect(result.sections.map((s) => s.key)).toEqual(['education', 'experience'])
  })
})
