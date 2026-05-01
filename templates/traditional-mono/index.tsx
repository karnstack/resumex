import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function TraditionalMono() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-traditional-mono">
      <header className="trm-head" data-print-entry="true">
        <div className="trm-eyebrow">// curriculum vitae</div>
        <h1 className="trm-name">Avery Park</h1>
        <div className="trm-title">Senior Software Engineer · Platform</div>
      </header>

      <div className="trm-body">
        <aside className="trm-side">
          <section className="trm-side-section" data-print-entry="true">
            <h2 className="trm-side-h">Contact</h2>
            <ul className="trm-contact">
              <li>
                <span className="trm-key">e</span>
                <a href="mailto:avery@example.com">avery@example.com</a>
              </li>
              <li>
                <span className="trm-key">l</span>
                <span>New York, NY</span>
              </li>
              <li>
                <span className="trm-key">w</span>
                <a href="https://averypark.dev">averypark.dev</a>
              </li>
              <li>
                <span className="trm-key">g</span>
                <a href="https://github.com/averypark">github.com/averypark</a>
              </li>
              <li>
                <span className="trm-key">i</span>
                <a href="https://linkedin.com/in/averypark">in/averypark</a>
              </li>
            </ul>
          </section>

          <section className="trm-side-section" data-print-entry="true">
            <h2 className="trm-side-h">Skills</h2>
            <div className="trm-skill-group">
              <div className="trm-skill-label">// languages</div>
              <div className="trm-skill-body">Go, TypeScript, Python, Rust</div>
            </div>
            <div className="trm-skill-group">
              <div className="trm-skill-label">// backend</div>
              <div className="trm-skill-body">Postgres, Redis, Kafka, gRPC</div>
            </div>
            <div className="trm-skill-group">
              <div className="trm-skill-label">// frontend</div>
              <div className="trm-skill-body">React, Next.js, Tailwind, Vite</div>
            </div>
            <div className="trm-skill-group">
              <div className="trm-skill-label">// platform</div>
              <div className="trm-skill-body">AWS, Kubernetes, Docker, Terraform</div>
            </div>
          </section>

          <section className="trm-side-section" data-print-entry="true">
            <h2 className="trm-side-h">Education</h2>
            <div className="trm-side-entry">
              <div className="trm-side-title">B.S. Computer Science</div>
              <div className="trm-side-sub">Northern State University</div>
              <div className="trm-side-meta">2014 – 2018</div>
            </div>
          </section>

          <section className="trm-side-section" data-print-entry="true">
            <h2 className="trm-side-h">Projects</h2>
            <div className="trm-side-entry">
              <div className="trm-side-title">Loomroute</div>
              <div className="trm-side-sub">// url routing · go</div>
              <p className="trm-side-prose">
                Open-source routing library used by ~200 small SaaS apps.
              </p>
            </div>
            <div className="trm-side-entry">
              <div className="trm-side-title">Tinytrace</div>
              <div className="trm-side-sub">// distributed tracing · rust</div>
              <p className="trm-side-prose">
                Minimal tracing library — span model, OTLP export, ~3k lines.
              </p>
            </div>
          </section>
        </aside>

        <main className="trm-main">
          <section className="trm-section" data-print-entry="true">
            <h2 className="trm-main-h">Summary</h2>
            <p className="trm-summary">
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software should be boring in production and
              useful to its users.
            </p>
          </section>

          <section className="trm-section" data-print-entry="true">
            <h2 className="trm-main-h">Experience</h2>

            <article className="trm-entry" data-print-entry="true">
              <div className="trm-entry-head">
                <div>
                  <div className="trm-role">Senior Software Engineer</div>
                  <div className="trm-company">Coral Labs · New York, NY</div>
                </div>
                <div className="trm-dates">Mar 2024 – Present</div>
              </div>
              <ul className="trm-bullets">
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

            <article className="trm-entry" data-print-entry="true">
              <div className="trm-entry-head">
                <div>
                  <div className="trm-role">Software Engineer 2</div>
                  <div className="trm-company">Coral Labs · New York, NY</div>
                </div>
                <div className="trm-dates">Aug 2022 – Mar 2024</div>
              </div>
              <ul className="trm-bullets">
                <li>
                  Designed the billing pipeline (12M events/day on Kafka + Postgres) end-to-end.
                </li>
                <li>Built the internal feature-flag service used across 40+ microservices.</li>
                <li>Drove architecture-level reviews for cross-team launches.</li>
              </ul>
            </article>

            <article className="trm-entry" data-print-entry="true">
              <div className="trm-entry-head">
                <div>
                  <div className="trm-role">Software Engineer</div>
                  <div className="trm-company">Acme Inc · Remote</div>
                </div>
                <div className="trm-dates">Jan 2020 – Jul 2022</div>
              </div>
              <ul className="trm-bullets">
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

            <article className="trm-entry" data-print-entry="true">
              <div className="trm-entry-head">
                <div>
                  <div className="trm-role">Software Engineer Intern</div>
                  <div className="trm-company">Bytework · Remote</div>
                </div>
                <div className="trm-dates">May 2018 – Aug 2018</div>
              </div>
              <ul className="trm-bullets">
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
