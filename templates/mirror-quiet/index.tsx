import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function MirrorQuiet() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-mirror-quiet">
      <header className="mq-head">
        <h1 className="mq-name">Avery Park</h1>
        <div className="mq-title">senior software engineer · platform</div>
      </header>

      <div className="mq-grid">
        <main className="mq-main">
          <section className="mq-section" data-print-entry="true">
            <h2>Summary</h2>
            <p className="mq-lede">
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software should be boring in production and
              useful to its users.
            </p>
          </section>

          <section className="mq-section" data-print-entry="true">
            <h2>Experience</h2>

            <div className="mq-entry" data-print-entry="true">
              <div className="mq-entry-head">
                <div className="mq-entry-title">Senior Software Engineer</div>
                <div className="mq-entry-meta">Mar 2024 — Present</div>
              </div>
              <div className="mq-entry-sub">Coral Labs · New York, NY</div>
              <ul className="mq-bullets">
                <li>
                  Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99
                  latency by three.
                </li>
                <li>
                  Owned platform on-call across two quarters; reduced pages 60% with sharper
                  alerting and runbooks.
                </li>
                <li>Mentored four engineers through L4 → L5 promotions.</li>
              </ul>
            </div>

            <div className="mq-entry" data-print-entry="true">
              <div className="mq-entry-head">
                <div className="mq-entry-title">Software Engineer 2</div>
                <div className="mq-entry-meta">Aug 2022 — Mar 2024</div>
              </div>
              <div className="mq-entry-sub">Coral Labs · New York, NY</div>
              <ul className="mq-bullets">
                <li>
                  Designed the billing pipeline (12M events / day on Kafka + Postgres) from spec to
                  production.
                </li>
                <li>Built the internal feature-flag service used across 40+ microservices.</li>
              </ul>
            </div>

            <div className="mq-entry" data-print-entry="true">
              <div className="mq-entry-head">
                <div className="mq-entry-title">Software Engineer</div>
                <div className="mq-entry-meta">Jan 2020 — Jul 2022</div>
              </div>
              <div className="mq-entry-sub">Acme Inc · Remote</div>
              <ul className="mq-bullets">
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
            </div>

            <div className="mq-entry" data-print-entry="true">
              <div className="mq-entry-head">
                <div className="mq-entry-title">Software Engineer Intern</div>
                <div className="mq-entry-meta">May 2018 — Aug 2018</div>
              </div>
              <div className="mq-entry-sub">Bytework · Remote</div>
              <ul className="mq-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </div>
          </section>
        </main>

        <aside className="mq-side">
          <section className="mq-side-section" data-print-entry="true">
            <h3>Contact</h3>
            <ul className="mq-contact">
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

          <section className="mq-side-section" data-print-entry="true">
            <h3>Skills</h3>
            <dl className="mq-skills">
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
              <dt>Frontend</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
              <dt>Platform</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </dl>
          </section>

          <section className="mq-side-section" data-print-entry="true">
            <h3>Education</h3>
            <div className="mq-side-entry">
              <div className="mq-side-title">B.S. Computer Science</div>
              <div className="mq-side-sub">Northern State University</div>
              <div className="mq-side-meta">2014 — 2018</div>
            </div>
          </section>

          <section className="mq-side-section" data-print-entry="true">
            <h3>Projects</h3>
            <div className="mq-side-entry">
              <div className="mq-side-title">Loomroute</div>
              <div className="mq-side-sub">URL routing library, Go</div>
              <div className="mq-side-meta">loomroute.dev</div>
            </div>
            <div className="mq-side-entry">
              <div className="mq-side-title">Tinytrace</div>
              <div className="mq-side-sub">Distributed tracing, Rust</div>
              <div className="mq-side-meta">github.com/averypark/tinytrace</div>
            </div>
          </section>
        </aside>
      </div>
    </PageFrame>
  )
}
