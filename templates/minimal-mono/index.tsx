import './styles.css'
import type { ResumeTemplate } from '@/lib/template-registry'

const MinimalMono: ResumeTemplate = ({ resume }) => {
  const { meta, sections } = resume
  return (
    <article className="resume-minimal-mono">
      <header className="header">
        <div>
          <h1>{meta.name}</h1>
          {meta.title && <div className="title">{meta.title}</div>}
        </div>
        <div className="contact">
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
      </header>

      {sections.map((s) => (
        <section key={s.key}>
          <h2>{s.name}</h2>
          {s.entries.length > 0
            ? s.entries.map((e, i) => (
                <div key={i} className="entry" data-print-entry="true">
                  <div className="entry-head">
                    <div>
                      <span className="entry-title">{e.title}</span>
                      {e.subtitle && (
                        <>
                          {' '}
                          <span className="entry-subtitle">@ {e.subtitle}</span>
                        </>
                      )}
                    </div>
                    {(e.dateRange || e.location) && (
                      <div className="entry-meta">
                        {e.dateRange}
                        {e.dateRange && e.location ? ' · ' : ''}
                        {e.location}
                      </div>
                    )}
                  </div>
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
          {meta.skills.map((g) => (
            <div key={g.group} className="skills-row">
              <strong>{g.group}:</strong> {g.items.join(', ')}
            </div>
          ))}
        </section>
      )}
    </article>
  )
}

export default MinimalMono
