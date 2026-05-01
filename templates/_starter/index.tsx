import './styles.css'
import type { ResumeTemplate } from '@/lib/template-registry'
import { PageFrame } from '@/components/page-frame/PageFrame'

const Starter: ResumeTemplate = ({ resume }) => {
  const { meta, sections } = resume
  return (
    <PageFrame fitDeps={[resume]} innerClassName="resume-starter">
      <header>
        <div className="header-row">
          <div>
            <h1>{meta.name}</h1>
            {meta.title && <div className="meta">{meta.title}</div>}
          </div>
          <div className="links">
            {meta.email && (
              <div>
                <a href={`mailto:${meta.email}`}>{meta.email}</a>
              </div>
            )}
            {meta.phone && <div>{meta.phone}</div>}
            {meta.location && <div>{meta.location}</div>}
            {meta.links?.map((l) => (
              <div key={l.url}>
                <a href={l.url}>{l.label}</a>
              </div>
            ))}
          </div>
        </div>
      </header>

      {sections.map((s) => (
        <section key={s.key} data-print-entry="true">
          <h2>{s.name}</h2>
          {s.entries.length > 0
            ? s.entries.map((e, i) => (
                <div key={i} data-print-entry="true">
                  <h3>
                    {e.title}
                    {e.subtitle && <span> @ {e.subtitle}</span>}
                  </h3>
                  {(e.dateRange || e.location) && (
                    <div className="meta">
                      {e.dateRange}
                      {e.dateRange && e.location ? ' · ' : ''}
                      {e.location}
                    </div>
                  )}
                  {e.bullets.length > 0 && (
                    <ul>
                      {e.bullets.map((b, j) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
                      ))}
                    </ul>
                  )}
                  {e.body && <div dangerouslySetInnerHTML={{ __html: e.body }} />}
                </div>
              ))
            : s.body && <div dangerouslySetInnerHTML={{ __html: s.body }} />}
        </section>
      ))}

      {meta.skills && meta.skills.length > 0 && (
        <section>
          <h2>Skills</h2>
          <ul>
            {meta.skills.map((g) => (
              <li key={g.group}>
                <strong>{g.group}:</strong> {g.items.join(', ')}
              </li>
            ))}
          </ul>
        </section>
      )}
    </PageFrame>
  )
}

export default Starter
