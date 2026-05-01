import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Traditional() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-traditional">
      <header className="tr-head" data-print-entry="true">
        <h1 className="tr-name">Avery Park</h1>
        <div className="tr-title">Senior Software Engineer · Platform</div>
      </header>

      <div className="tr-body">
        <aside className="tr-side">
          <section className="tr-side-section" data-print-entry="true">
            <h2 className="tr-side-h">Contact</h2>
            <ul className="tr-contact">
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

          <section className="tr-side-section" data-print-entry="true">
            <h2 className="tr-side-h">Skills</h2>
            <div className="tr-skill-group">
              <div className="tr-skill-label">Languages</div>
              <div className="tr-skill-body">Go, TypeScript, Python, Rust</div>
            </div>
            <div className="tr-skill-group">
              <div className="tr-skill-label">Backend</div>
              <div className="tr-skill-body">Postgres, Redis, Kafka, gRPC</div>
            </div>
            <div className="tr-skill-group">
              <div className="tr-skill-label">Frontend</div>
              <div className="tr-skill-body">React, Next.js, Tailwind, Vite</div>
            </div>
            <div className="tr-skill-group">
              <div className="tr-skill-label">Platform</div>
              <div className="tr-skill-body">AWS, Kubernetes, Docker, Terraform</div>
            </div>
          </section>

          <section className="tr-side-section" data-print-entry="true">
            <h2 className="tr-side-h">Education</h2>
            <div className="tr-side-entry">
              <div className="tr-side-title">B.S. Computer Science</div>
              <div className="tr-side-sub">Northern State University</div>
              <div className="tr-side-meta">2014 – 2018</div>
            </div>
          </section>

          <section className="tr-side-section" data-print-entry="true">
            <h2 className="tr-side-h">Projects</h2>
            <div className="tr-side-entry">
              <div className="tr-side-title">Loomroute</div>
              <div className="tr-side-sub">URL routing library · Go</div>
              <p className="tr-side-prose">
                Open-source routing library used by ~200 small SaaS apps.
              </p>
            </div>
            <div className="tr-side-entry">
              <div className="tr-side-title">Tinytrace</div>
              <div className="tr-side-sub">Distributed tracing · Rust</div>
              <p className="tr-side-prose">
                Minimal tracing library — span model, OTLP export, ~3k lines.
              </p>
            </div>
          </section>
        </aside>

        <main className="tr-main">
          <section className="tr-section" data-print-entry="true">
            <h2 className="tr-main-h">Summary</h2>
            <p className="tr-summary">
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software should be boring in production and
              useful to its users.
            </p>
          </section>

          <section className="tr-section" data-print-entry="true">
            <h2 className="tr-main-h">Experience</h2>

            <article className="tr-entry" data-print-entry="true">
              <div className="tr-entry-head">
                <div>
                  <div className="tr-role">Senior Software Engineer</div>
                  <div className="tr-company">Coral Labs · New York, NY</div>
                </div>
                <div className="tr-dates">Mar 2024 – Present</div>
              </div>
              <ul className="tr-bullets">
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

            <article className="tr-entry" data-print-entry="true">
              <div className="tr-entry-head">
                <div>
                  <div className="tr-role">Software Engineer 2</div>
                  <div className="tr-company">Coral Labs · New York, NY</div>
                </div>
                <div className="tr-dates">Aug 2022 – Mar 2024</div>
              </div>
              <ul className="tr-bullets">
                <li>
                  Designed the billing pipeline (12M events/day on Kafka + Postgres) end-to-end.
                </li>
                <li>Built the internal feature-flag service used across 40+ microservices.</li>
                <li>Drove architecture-level reviews for cross-team launches.</li>
              </ul>
            </article>

            <article className="tr-entry" data-print-entry="true">
              <div className="tr-entry-head">
                <div>
                  <div className="tr-role">Software Engineer</div>
                  <div className="tr-company">Acme Inc · Remote</div>
                </div>
                <div className="tr-dates">Jan 2020 – Jul 2022</div>
              </div>
              <ul className="tr-bullets">
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

            <article className="tr-entry" data-print-entry="true">
              <div className="tr-entry-head">
                <div>
                  <div className="tr-role">Software Engineer Intern</div>
                  <div className="tr-company">Bytework · Remote</div>
                </div>
                <div className="tr-dates">May 2018 – Aug 2018</div>
              </div>
              <ul className="tr-bullets">
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
