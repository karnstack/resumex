import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { parseResume } from './parser'
import MinimalMono from '../../templates/minimal-mono/index'
import EmeraldTwocol from '../../templates/emerald-twocol/index'

const sample = fs.readFileSync(path.resolve(__dirname, '../../.gallery/sample.md'), 'utf-8')

describe('templates render against sample.md', () => {
  it('minimal-mono renders without throwing', () => {
    const resume = parseResume(sample)
    // force template since sample frontmatter prefers emerald-twocol
    resume.meta.template = 'minimal-mono'
    const { container } = render(<MinimalMono resume={resume} />)
    expect(container.querySelector('.resume-minimal-mono')).toBeTruthy()
    expect(container.querySelector('h1')?.textContent).toContain('Park')
    expect(container.querySelectorAll('section').length).toBeGreaterThan(0)
    expect(container).toMatchSnapshot()
  })

  it('emerald-twocol renders without throwing', () => {
    const resume = parseResume(sample)
    resume.meta.template = 'emerald-twocol'
    const { container } = render(<EmeraldTwocol resume={resume} />)
    expect(container.querySelector('.kt-grid')).toBeTruthy()
    expect(container.querySelector('.kt-name')?.textContent).toContain('Park')
    expect(container.querySelector('.kt-side')).toBeTruthy()
    expect(container.querySelector('.kt-main')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
