import './styles.css'
import type { ResumeFrontmatter, ParsedEntry, ParsedSection } from '@/lib/schema'
import type { ResumeTemplate } from '@/lib/template-registry'
import { PageFrame } from '@/components/page-frame/PageFrame'

const SIDEBAR_KEYS = new Set(['summary', 'about', 'projects', 'awards', 'education'])
const MAIN_KEYS = new Set(['experience', 'roles'])

const EmeraldTwocol: ResumeTemplate = ({ resume }) => {
  const { meta, sections } = resume
  const summary = sections.find((s) => s.key === 'summary' || s.key === 'about')
  const experience = sections.find((s) => MAIN_KEYS.has(s.key))
  const projects = sections.find((s) => s.key === 'projects')
  const awards = sections.find((s) => s.key === 'awards')
  const education = sections.find((s) => s.key === 'education')

  // anything else (uncommon section) goes into main below experience
  const otherMain = sections.filter(
    (s) => !MAIN_KEYS.has(s.key) && !SIDEBAR_KEYS.has(s.key) && s !== summary,
  )

  return (
    <PageFrame paper="a4" fitDeps={[resume]} className="kt-frame" innerClassName="kt-root">
      <div className="kt-grid">
        <Header meta={meta} />
        {summary && (
          <section className="kt-about">
            <span className="kt-eyebrow">about</span>
            <div dangerouslySetInnerHTML={{ __html: summary.body ?? '' }} />
          </section>
        )}

        <aside className="kt-side">
          {meta.skills && meta.skills.length > 0 && (
            <div className="kt-side-section">
              <span className="kt-eyebrow">stack</span>
              {meta.skills.map((g) => (
                <div key={g.group} className="kt-skill-group">
                  <p className="label">// {g.group.toLowerCase()}</p>
                  <div className="chips">
                    {g.items.map((it, i) => (
                      <span key={`${it}-${i}`} className="kt-chip">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {projects && projects.entries.length > 0 && (
            <div className="kt-side-section">
              <span className="kt-eyebrow">projects</span>
              {projects.entries.map((e, i) => (
                <SideEntry key={i} entry={e} />
              ))}
            </div>
          )}
          {awards && awards.entries.length > 0 && (
            <div className="kt-side-section">
              <span className="kt-eyebrow">awards</span>
              {awards.entries.map((e, i) => (
                <SideEntry key={i} entry={e} compact />
              ))}
            </div>
          )}
          {education && education.entries.length > 0 && (
            <div className="kt-side-section">
              <span className="kt-eyebrow">education</span>
              {education.entries.map((e, i) => (
                <SideEntry key={i} entry={e} compact />
              ))}
            </div>
          )}
        </aside>

        <main className="kt-main">
          {experience && <MainSection section={experience} />}
          {otherMain.map((s) => (
            <MainSection key={s.key} section={s} />
          ))}
        </main>

        <footer className="kt-foot">
          <span>{meta.name.toLowerCase().replace(/\s+/g, '-')}</span>
          <span>{meta.title}</span>
        </footer>
      </div>
    </PageFrame>
  )
}

export default EmeraldTwocol

function Header({ meta }: { meta: ResumeFrontmatter }) {
  const parts = meta.name.trim().split(/\s+/)
  const last = parts[parts.length - 1]
  const rest = parts.slice(0, -1).join(' ')
  return (
    <header className="kt-head">
      <div>
        <h1 className="kt-name">
          {rest && <>{rest} </>}
          <span className="kt-name-grad">{last}</span>.
        </h1>
        {meta.title && (
          <span className="kt-rolepill">
            <span className="dot" />
            {meta.title}
          </span>
        )}
      </div>
      <div className="kt-contact">
        {meta.email && (
          <div>
            <a href={`mailto:${meta.email}`}>{meta.email}</a>
          </div>
        )}
        {meta.phone && <div>{meta.phone}</div>}
        {meta.location && <div>{meta.location}</div>}
        {meta.links?.map((l) => (
          <div key={l.url}>
            <a href={l.url}>{stripScheme(l.url)}</a>
          </div>
        ))}
      </div>
    </header>
  )
}

function stripScheme(url: string): string {
  return url.replace(/^https?:\/\//, '')
}

function SideEntry({ entry, compact = false }: { entry: ParsedEntry; compact?: boolean }) {
  return (
    <div className="kt-side-entry">
      <h4 className="title">{entry.title}</h4>
      {entry.subtitle && <div className="sub">{entry.subtitle}</div>}
      {!compact && entry.body && (
        <div className="kt-side-entry-body" dangerouslySetInnerHTML={{ __html: entry.body }} />
      )}
      {entry.dateRange && <div className="meta-line">{entry.dateRange}</div>}
      {!compact && entry.bullets.length > 0 && (
        <ul className="kt-bullets">
          {entry.bullets.map((b, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
          ))}
        </ul>
      )}
    </div>
  )
}

function MainSection({ section }: { section: ParsedSection }) {
  // group entries by subtitle (≈ company) so multiple roles at the same place stack
  const groups = groupBySubtitle(section.entries)
  let runningIdx = 0
  return (
    <div className="kt-section">
      <div className="kt-section-title">
        <span className="kt-eyebrow">{section.name.toLowerCase()}</span>
      </div>
      {section.entries.length === 0 && section.body && (
        <div dangerouslySetInnerHTML={{ __html: section.body }} />
      )}
      {groups.map((group) => (
        <div key={group.subtitle ?? 'no-sub'} className="kt-section-group">
          <div className="kt-group-head">
            <h3>{group.subtitle ?? group.entries[0]?.title}</h3>
            {group.tenure && <span className="tenure">{group.tenure}</span>}
          </div>
          {group.entries.map((entry) => {
            runningIdx += 1
            return (
              <div key={runningIdx} className="kt-entry">
                <div className="kt-entry-head">
                  <div className="left">
                    <span className="idx">{String(runningIdx).padStart(2, '0')}</span>
                    <span className="role">{entry.title}</span>
                    {entry.location && <span className="team">{entry.location}</span>}
                  </div>
                  {entry.dateRange && <span className="dates">{entry.dateRange}</span>}
                </div>
                {entry.bullets.length > 0 && (
                  <ul className="kt-bullets">
                    {entry.bullets.map((b, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

type Group = {
  subtitle: string | undefined
  entries: ParsedEntry[]
  tenure?: string
}

function groupBySubtitle(entries: ParsedEntry[]): Group[] {
  // Dedup ALL entries with the same subtitle (not just contiguous ones), so
  // non-contiguous roles at the same company merge into one group. Insertion
  // order = first appearance of each company, preserving chronological feel
  // without scattering same-company entries across the page.
  const groups: Group[] = []
  const byKey = new Map<string, Group>()

  for (const entry of entries) {
    const key = entry.subtitle ?? `__no-sub__${groups.length}`
    let g = byKey.get(key)
    if (!g) {
      g = { subtitle: entry.subtitle, entries: [] }
      byKey.set(key, g)
      groups.push(g)
    }
    g.entries.push(entry)
  }

  // Tenure spans the company's earliest start to latest end. Entries are
  // newest-first by markdown convention, so first entry's end ≈ latest end
  // and last entry's start ≈ earliest start.
  for (const g of groups) {
    if (g.entries.length === 0) continue
    const newest = g.entries[0]
    const oldest = g.entries[g.entries.length - 1]
    const start = (oldest.dateRange ?? '').split('–')[0]?.trim()
    const end = (newest.dateRange ?? '').split('–').slice(-1)[0]?.trim()
    if (start || end) {
      g.tenure = start && end ? `${start} – ${end}` : (newest.dateRange ?? oldest.dateRange)
    }
  }

  return groups
}
