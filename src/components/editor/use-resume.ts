import { useEffect, useRef, useState, useCallback } from 'react'
import matter from 'gray-matter'
import { parseResume } from '@/lib/parser'
import { ResumeFrontmatterSchema, type ResumeFrontmatter, type ParsedResume } from '@/lib/schema'
import { loadVariantSource, saveVariantSource } from '@/lib/load-resume'

type State =
  | { phase: 'loading' }
  | { phase: 'error'; error: string }
  | { phase: 'ready'; source: string; parsed: ParsedResume; saving: boolean }

export function useResume(variant: string) {
  const [state, setState] = useState<State>({ phase: 'loading' })
  const saveTimer = useRef<number | null>(null)

  useEffect(() => {
    setState({ phase: 'loading' })
    loadVariantSource(variant)
      .then((src) => {
        try {
          const parsed = parseResume(src)
          setState({ phase: 'ready', source: src, parsed, saving: false })
        } catch (e) {
          setState({ phase: 'error', error: String(e) })
        }
      })
      .catch((e) => setState({ phase: 'error', error: String(e) }))
  }, [variant])

  const flush = useCallback(
    (newSource: string) => {
      if (saveTimer.current) window.clearTimeout(saveTimer.current)
      saveTimer.current = window.setTimeout(() => {
        setState((s) => (s.phase === 'ready' ? { ...s, saving: true } : s))
        saveVariantSource(variant, newSource)
          .then(() => {
            setState((s) => (s.phase === 'ready' ? { ...s, saving: false } : s))
          })
          .catch((e) => setState({ phase: 'error', error: String(e) }))
      }, 300)
    },
    [variant],
  )

  const setSource = useCallback(
    (newSource: string) => {
      try {
        const parsed = parseResume(newSource)
        setState((s) =>
          s.phase === 'ready' ? { ...s, source: newSource, parsed } : s,
        )
        flush(newSource)
      } catch (e) {
        // keep last good parsed; report error inline (optional UI)
        setState((s) =>
          s.phase === 'ready' ? { ...s, source: newSource } : s,
        )
        flush(newSource)
      }
    },
    [flush],
  )

  const setFrontmatter = useCallback(
    (next: ResumeFrontmatter) => {
      if (state.phase !== 'ready') return
      const validated = ResumeFrontmatterSchema.parse(next)
      const { content } = matter(state.source)
      const newSource = matter.stringify(content, validated)
      setSource(newSource)
    },
    [state, setSource],
  )

  const setBody = useCallback(
    (newBody: string) => {
      if (state.phase !== 'ready') return
      const { data } = matter(state.source)
      const newSource = matter.stringify(newBody, data)
      setSource(newSource)
    },
    [state, setSource],
  )

  return { state, setSource, setFrontmatter, setBody }
}
