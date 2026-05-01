import { useEffect } from 'react'

const DEFAULT_DESCRIPTION =
  'resumex by karnstack.com - AI-first resume builder for Claude Code. Local-only. Beautiful, print-native templates.'

/**
 * Set document.title plus the og:title, twitter:title, og:description,
 * twitter:description, and meta[name=description] tags.
 *
 * The base index.html ships with sensible static meta; this hook overrides
 * them per route so each page has the right title and OG card preview.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = title.includes('resumex') ? title : `${title} - resumex by karnstack.com`
    document.title = fullTitle
    setMeta('property', 'og:title', fullTitle)
    setMeta('name', 'twitter:title', fullTitle)
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }
    return () => {
      // restore the static defaults so back-nav doesn't leave a stale title
      document.title = 'resumex - by karnstack.com'
      setMeta('property', 'og:title', 'resumex - by karnstack.com')
      setMeta('name', 'twitter:title', 'resumex - by karnstack.com')
      setMeta('name', 'description', DEFAULT_DESCRIPTION)
      setMeta('property', 'og:description', DEFAULT_DESCRIPTION)
      setMeta('name', 'twitter:description', DEFAULT_DESCRIPTION)
    }
  }, [title, description])
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}
