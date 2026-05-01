import sampleSource from '../../.gallery/sample.md?raw'
import { parseResume } from './parser'

export function loadSample() {
  return parseResume(sampleSource)
}
