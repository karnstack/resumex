import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { listVariants } from '@/lib/load-resume'
import { isPublic } from '@/lib/mode'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    if (isPublic) {
      window.location.replace('https://github.com/karngyan/resumex')
    }
  },
  component: IndexRoute,
})

function IndexRoute() {
  const [variants, setVariants] = useState<string[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    listVariants()
      .then(setVariants)
      .catch((e) => setError(String(e)))
  }, [])

  return (
    <main className="mx-auto max-w-3xl p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold">resumex</h1>
        <p className="text-sm text-neutral-600">
          your resumes live in <code>resumes/</code>. talk to claude code or edit in the ui.
        </p>
      </header>

      {error && <p className="text-red-700">{error}</p>}

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          your resumes
        </h2>
        {variants === null ? (
          <p>loading…</p>
        ) : variants.length === 0 ? (
          <p className="rounded border border-dashed border-neutral-300 p-6 text-neutral-600">
            no resumes yet. ask claude code:{' '}
            <em>"create a new resume from my linkedin"</em>.
          </p>
        ) : (
          <ul className="space-y-1">
            {variants.map((v) => (
              <li key={v}>
                <Link
                  to="/$variant"
                  params={{ variant: v }}
                  className="block rounded border border-neutral-200 p-3 hover:bg-neutral-100"
                >
                  {v}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer className="mt-10 text-xs text-neutral-500">
        <Link to="/templates">browse templates</Link>
      </footer>
    </main>
  )
}
