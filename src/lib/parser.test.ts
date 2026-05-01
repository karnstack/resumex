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

describe('parseResume — entries within sections', () => {
  it('parses entries with title @ subtitle pattern', () => {
    const source = `---
template: minimal-mono
name: Karn
---

## Experience

### Senior Engineer @ Karnstack
*Mar 2024 – Present · Remote*

- Led design of X
- Owned Y

### Engineer @ AcmeCo
*Jan 2022 – Feb 2024 · Bengaluru*

- Bullet
`
    const result = parseResume(source)
    const exp = result.sections[0]
    expect(exp.entries).toHaveLength(2)
    expect(exp.entries[0]).toMatchObject({
      title: 'Senior Engineer',
      subtitle: 'Karnstack',
      dateRange: 'Mar 2024 – Present',
      location: 'Remote',
    })
    expect(exp.entries[0].bullets).toHaveLength(2)
    expect(exp.entries[0].bullets[0]).toContain('Led design of X')
    expect(exp.entries[1].title).toBe('Engineer')
    expect(exp.entries[1].subtitle).toBe('AcmeCo')
  })

  it('treats heading without @ as title only', () => {
    const source = `---
template: minimal-mono
name: Karn
---

## Projects

### Canvas — personal website
*2024*

- built it
`
    const result = parseResume(source)
    const proj = result.sections[0]
    expect(proj.entries[0].title).toBe('Canvas — personal website')
    expect(proj.entries[0].subtitle).toBeUndefined()
    expect(proj.entries[0].dateRange).toBe('2024')
    expect(proj.entries[0].location).toBeUndefined()
  })

  it('handles entry with metadata-only and no bullets', () => {
    const source = `---
template: minimal-mono
name: Karn
---

## Education

### B.E. Computer Science @ Some University
*2017 – 2021 · Pune*
`
    const result = parseResume(source)
    expect(result.sections[0].entries[0].bullets).toHaveLength(0)
  })
})
