import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function TraditionalWarm() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-traditional-warm">
      <header className="trw-head" data-print-entry="true">
        <h1 className="trw-name">Avery Park</h1>
        <div className="trw-title">Senior Software Engineer · Platform</div>
      </header>

      <div className="trw-body">
        <aside className="trw-side">
          <section className="trw-side-section" data-print-entry="true">
            <h2 className="trw-side-h">Contact</h2>
            <ul className="trw-contact">
              <li>
                <a href="mailto:avery@example.com">avery@example.com</a>
              </li>
              <li>New York, NY</li>
              <li>
                <a href="https://averypark.dev">averypark.dev</a>
              </li>
              <li>
                <a href="https://github.com/averypark">github.com/averypark</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/averypark">in/averypark</a>
              </li>
            </ul>
          </section>

          <section className="trw-side-section" data-print-entry="true">
            <h2 className="trw-side-h">Skills</h2>
            <div className="trw-skill-group">
              <div className="trw-skill-label">Languages</div>
              <div className="trw-skill-body">Go, TypeScript, Python, Rust</div>
            </div>
            <div className="trw-skill-group">
              <div className="trw-skill-label">Backend</div>
              <div className="trw-skill-body">Postgres, Redis, Kafka, gRPC</div>
            </div>
            <div className="trw-skill-group">
              <div className="trw-skill-label">Frontend</div>
              <div className="trw-skill-body">React, Next.js, Tailwind, Vite</div>
            </div>
            <div className="trw-skill-group">
              <div className="trw-skill-label">Platform</div>
              <div className="trw-skill-body">AWS, Kubernetes, Docker, Terraform</div>
            </div>
          </section>

          <section className="trw-side-section" data-print-entry="true">
            <h2 className="trw-side-h">Education</h2>
            <div className="trw-side-entry">
              <div className="trw-side-title">B.S. Computer Science</div>
              <div className="trw-side-sub">Northern State University</div>
              <div className="trw-side-meta">2014 – 2018</div>
            </div>
          </section>

          <section className="trw-side-section" data-print-entry="true">
            <h2 className="trw-side-h">Projects</h2>
            <div className="trw-side-entry">
              <div className="trw-side-title">Loomroute</div>
              <div className="trw-side-sub">URL routing library · Go</div>
              <p className="trw-side-prose">
                Open-source routing library used by ~200 small SaaS apps.
              </p>
            </div>
            <div className="trw-side-entry">
              <div className="trw-side-title">Tinytrace</div>
              <div className="trw-side-sub">Distributed tracing · Rust</div>
              <p className="trw-side-prose">
                Minimal tracing library — span model, OTLP export, ~3k lines.
              </p>
            </div>
          </section>
        </aside>

        <main className="trw-main">
          <section className="trw-section" data-print-entry="true">
            <h2 className="trw-main-h">Summary</h2>
            <p className="trw-summary">
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software should be boring in production and
              useful to its users.
            </p>
          </section>

          <section className="trw-section" data-print-entry="true">
            <h2 className="trw-main-h">Experience</h2>

            <article className="trw-entry" data-print-entry="true">
              <div className="trw-entry-head">
                <div>
                  <div className="trw-role">Senior Software Engineer</div>
                  <div className="trw-company">Coral Labs · New York, NY</div>
                </div>
                <div className="trw-dates">Mar 2024 – Present</div>
              </div>
              <ul className="trw-bullets">
                <li>
                  Led the migration of the events pipeline to a horizontally-sharded Kafka cluster,
                  cutting p99 latency by 3x.
                </li>
                <li>
                  Owned platform on-call across two quarters; reduced pages 60% with sharper
                  alerting and runbooks.
                </li>
                <li>Mentored four engineers through L4 → L5 promotions.</li>
              </ul>
            </article>

            <article className="trw-entry" data-print-entry="true">
              <div className="trw-entry-head">
                <div>
                  <div className="trw-role">Software Engineer 2</div>
                  <div className="trw-company">Coral Labs · New York, NY</div>
                </div>
                <div className="trw-dates">Aug 2022 – Mar 2024</div>
              </div>
              <ul className="trw-bullets">
                <li>
                  Designed the billing pipeline (12M events/day on Kafka + Postgres) end-to-end.
                </li>
                <li>Built the internal feature-flag service used across 40+ microservices.</li>
                <li>Drove architecture-level reviews for cross-team launches.</li>
              </ul>
            </article>

            <article className="trw-entry" data-print-entry="true">
              <div className="trw-entry-head">
                <div>
                  <div className="trw-role">Software Engineer</div>
                  <div className="trw-company">Acme Inc · Remote</div>
                </div>
                <div className="trw-dates">Jan 2020 – Jul 2022</div>
              </div>
              <ul className="trw-bullets">
                <li>
                  Shipped the company's first public API with rate limiting, OAuth2, and SDKs in
                  three languages.
                </li>
                <li>
                  Migrated the legacy monolith's auth module to a standalone identity service,
                  unblocking SSO.
                </li>
                <li>Cut average build times from 11 minutes to 90 seconds.</li>
              </ul>
            </article>

            <article className="trw-entry" data-print-entry="true">
              <div className="trw-entry-head">
                <div>
                  <div className="trw-role">Software Engineer Intern</div>
                  <div className="trw-company">Bytework · Remote</div>
                </div>
                <div className="trw-dates">May 2018 – Aug 2018</div>
              </div>
              <ul className="trw-bullets">
                <li>
                  Built a small internal log aggregator in Go on top of Kafka, replacing a brittle
                  cron job. Earned a return offer.
                </li>
              </ul>
            </article>
          </section>
        </main>
      </div>
    </PageFrame>
  )
}
