import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import { listVariants } from '@/lib/load-resume'
import { isPublic } from '@/lib/mode'
import { listTemplates } from '@/lib/template-registry'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Footer } from '@/components/Footer'
import { TemplateCard } from '@/components/TemplateCard'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    if (isPublic) {
      window.location.replace('https://github.com/karnstack/resumex')
    }
  },
  component: IndexRoute,
})

function IndexRoute() {
  const [variants, setVariants] = useState<string[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const templates = useMemo(() => listTemplates(), [])
  useEffect(() => {
    listVariants()
      .then(setVariants)
      .catch((e) => setError(String(e)))
  }, [])

  return (
    <main className="mx-auto max-w-3xl p-8">
      <header className="mb-8">
        <p className="mb-1 font-mono text-xs text-muted-foreground">
          // resumes
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">resumex</h1>
        <p className="text-sm text-muted-foreground">
          your resumes live in <code className="font-mono text-foreground">resumes/</code>. talk to claude code or edit in the ui.
        </p>
      </header>

      {error && (
        <p className="mb-4 rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      )}

      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          your resumes
        </h2>
        {variants === null ? (
          <p className="text-sm text-muted-foreground">loading…</p>
        ) : variants.length === 0 ? (
          <Card className="border-dashed shadow-none">
            <CardContent className="flex flex-col gap-1 py-8 text-center">
              <p className="text-sm text-muted-foreground">
                no resumes yet.
              </p>
              <p className="text-sm text-muted-foreground">
                ask claude code:{' '}
                <em className="text-foreground not-italic">
                  "create a new resume from my linkedin"
                </em>
              </p>
            </CardContent>
          </Card>
        ) : (
          <ul className="space-y-2">
            {variants.map((v) => (
              <li key={v}>
                <Link
                  to="/$variant"
                  params={{ variant: v }}
                  className="block"
                >
                  <Card className="cursor-pointer py-4 shadow-none transition-shadow hover:shadow-derek">
                    <CardContent className="flex items-center justify-between gap-3 px-4">
                      <span className="font-medium">{v}</span>
                      <Badge variant="secondary" className="font-mono text-xs">
                        .md
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-12">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            templates
          </h2>
          <Link
            to="/templates"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            browse all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {templates.map((t) => (
            <TemplateCard key={t.id} meta={t} size="compact" />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
