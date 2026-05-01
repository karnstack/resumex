import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo } from 'react'
import { listResumes } from '@/lib/resume-registry'
import { isPublic } from '@/lib/mode'
import { listTemplates } from '@/lib/template-registry'
import { usePageMeta } from '@/lib/use-page-meta'
import { Card, CardContent } from '@/components/ui/card'
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
  usePageMeta('resumex - by karnstack.com')
  const resumes = useMemo(() => listResumes(), [])
  const templates = useMemo(() => listTemplates(), [])

  const featured = templates.slice(0, 4)

  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-muted-foreground mb-1 font-mono text-xs">// resumes</p>
          <h1 className="text-2xl font-semibold tracking-tight">resumex</h1>
          <p className="text-muted-foreground text-sm">
            your resumes live in <code className="text-foreground font-mono">resumes/</code>. talk
            to claude code or edit the files directly.
          </p>
        </header>

        <section>
          <h2 className="text-muted-foreground mb-3 text-xs font-semibold tracking-widest uppercase">
            your resumes
          </h2>
          {resumes.length === 0 ? (
            <Card className="border-dashed shadow-none">
              <CardContent className="flex flex-col gap-1 py-8 text-center">
                <p className="text-muted-foreground text-sm">no resumes yet.</p>
                <p className="text-muted-foreground text-sm">
                  ask claude code:{' '}
                  <em className="text-foreground not-italic">
                    "create a new resume from my linkedin"
                  </em>
                </p>
              </CardContent>
            </Card>
          ) : (
            <ul className="space-y-2">
              {resumes.map((r) => (
                <li key={r.variant}>
                  <Link to="/$variant" params={{ variant: r.variant }} className="block">
                    <Card className="hover:shadow-card-hover cursor-pointer py-4 shadow-none transition-shadow duration-200">
                      <CardContent className="flex items-center justify-between gap-3 px-4">
                        <span className="font-medium">{r.displayName ?? r.variant}</span>
                        <span className="text-muted-foreground font-mono text-xs">
                          /{r.variant}
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <section className="mt-12">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            templates
          </h2>
          <Link
            to="/templates"
            className="text-muted-foreground hover:text-foreground font-mono text-xs transition-colors"
          >
            browse all ({templates.length}) →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((t) => (
            <TemplateCard key={t.id} meta={t} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
