import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function TraditionalTight() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-traditional-tight">
      <header className="trt-head" data-print-entry="true">
        <div className="trt-head-row">
          <div>
            <h1 className="trt-name">Avery Park</h1>
            <div className="trt-title">Senior Software Engineer · Platform</div>
          </div>
          <div className="trt-headline">
            Resilient backend systems. Boring in production. Useful to users.
          </div>
        </div>
      </header>

      <div className="trt-body">
        <aside className="trt-side">
          <section className="trt-side-section" data-print-entry="true">
            <h2 className="trt-side-h">Contact</h2>
            <ul className="trt-contact">
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

          <section className="trt-side-section" data-print-entry="true">
            <h2 className="trt-side-h">Skills</h2>
            <div className="trt-skill-group">
              <div className="trt-skill-label">Languages</div>
              <div className="trt-skill-body">Go, TypeScript, Python, Rust</div>
            </div>
            <div className="trt-skill-group">
              <div className="trt-skill-label">Backend</div>
              <div className="trt-skill-body">Postgres, Redis, Kafka, gRPC</div>
            </div>
            <div className="trt-skill-group">
              <div className="trt-skill-label">Frontend</div>
              <div className="trt-skill-body">React, Next.js, Tailwind, Vite</div>
            </div>
            <div className="trt-skill-group">
              <div className="trt-skill-label">Platform</div>
              <div className="trt-skill-body">AWS, Kubernetes, Docker, Terraform</div>
            </div>
          </section>

          <section className="trt-side-section" data-print-entry="true">
            <h2 className="trt-side-h">Education</h2>
            <div className="trt-side-entry">
              <div className="trt-side-title">B.S. Computer Science</div>
              <div className="trt-side-sub">Northern State University</div>
              <div className="trt-side-meta">2014 – 2018</div>
            </div>
          </section>

          <section className="trt-side-section" data-print-entry="true">
            <h2 className="trt-side-h">Projects</h2>
            <div className="trt-side-entry">
              <div className="trt-side-title">Loomroute</div>
              <div className="trt-side-sub">Routing lib · Go</div>
              <p className="trt-side-prose">~200 SaaS apps; live since 2024.</p>
            </div>
            <div className="trt-side-entry">
              <div className="trt-side-title">Tinytrace</div>
              <div className="trt-side-sub">Tracing · Rust</div>
              <p className="trt-side-prose">Span model + OTLP, ~3k lines.</p>
            </div>
          </section>
        </aside>

        <main className="trt-main">
          <section className="trt-section" data-print-entry="true">
            <h2 className="trt-main-h">Summary</h2>
            <p className="trt-summary">
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software should be boring in production and
              useful to its users.
            </p>
          </section>

          <section className="trt-section" data-print-entry="true">
            <h2 className="trt-main-h">Experience</h2>

            <article className="trt-entry" data-print-entry="true">
              <div className="trt-entry-head">
                <div>
                  <div className="trt-role">Senior Software Engineer</div>
                  <div className="trt-company">Coral Labs · New York, NY</div>
                </div>
                <div className="trt-dates">Mar 2024 – Present</div>
              </div>
              <ul className="trt-bullets">
                <li>
                  Led migration of the events pipeline to a horizontally-sharded Kafka cluster; cut
                  p99 latency by 3x.
                </li>
                <li>
                  Owned platform on-call across two quarters; reduced pages 60% with sharper
                  alerting and runbooks.
                </li>
                <li>Mentored four engineers through L4 → L5 promotions.</li>
              </ul>
            </article>

            <article className="trt-entry" data-print-entry="true">
              <div className="trt-entry-head">
                <div>
                  <div className="trt-role">Software Engineer 2</div>
                  <div className="trt-company">Coral Labs · New York, NY</div>
                </div>
                <div className="trt-dates">Aug 2022 – Mar 2024</div>
              </div>
              <ul className="trt-bullets">
                <li>
                  Designed the billing pipeline (12M events/day on Kafka + Postgres) end-to-end.
                </li>
                <li>Built the internal feature-flag service used across 40+ microservices.</li>
                <li>Drove architecture-level reviews for cross-team launches.</li>
              </ul>
            </article>

            <article className="trt-entry" data-print-entry="true">
              <div className="trt-entry-head">
                <div>
                  <div className="trt-role">Software Engineer</div>
                  <div className="trt-company">Acme Inc · Remote</div>
                </div>
                <div className="trt-dates">Jan 2020 – Jul 2022</div>
              </div>
              <ul className="trt-bullets">
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

            <article className="trt-entry" data-print-entry="true">
              <div className="trt-entry-head">
                <div>
                  <div className="trt-role">Software Engineer Intern</div>
                  <div className="trt-company">Bytework · Remote</div>
                </div>
                <div className="trt-dates">May 2018 – Aug 2018</div>
              </div>
              <ul className="trt-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka, replacing a brittle cron
                  job. Earned a return offer.
                </li>
              </ul>
            </article>
          </section>
        </main>
      </div>
    </PageFrame>
  )
}
