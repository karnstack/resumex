import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function MirrorBold() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-mirror-bold">
      <div className="mb-grid">
        <main className="mb-main">
          <header className="mb-main-head">
            <div className="mb-eyebrow">Curriculum Vitae</div>
            <div className="mb-role">Senior Software Engineer · Platform</div>
          </header>

          <section className="mb-section" data-print-entry="true">
            <h2>Summary</h2>
            <p className="mb-lede">
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software should be boring in production and
              useful to its users.
            </p>
          </section>

          <section className="mb-section" data-print-entry="true">
            <h2>Experience</h2>

            <div className="mb-entry" data-print-entry="true">
              <div className="mb-entry-head">
                <div className="mb-entry-title">Senior Software Engineer</div>
                <div className="mb-entry-meta">Mar 2024 — Present</div>
              </div>
              <div className="mb-entry-sub">Coral Labs · New York, NY</div>
              <ul className="mb-bullets">
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

            <div className="mb-entry" data-print-entry="true">
              <div className="mb-entry-head">
                <div className="mb-entry-title">Software Engineer 2</div>
                <div className="mb-entry-meta">Aug 2022 — Mar 2024</div>
              </div>
              <div className="mb-entry-sub">Coral Labs · New York, NY</div>
              <ul className="mb-bullets">
                <li>
                  Designed the billing pipeline (12M events / day on Kafka + Postgres) from spec to
                  production.
                </li>
                <li>Built the internal feature-flag service used across 40+ microservices.</li>
              </ul>
            </div>

            <div className="mb-entry" data-print-entry="true">
              <div className="mb-entry-head">
                <div className="mb-entry-title">Software Engineer</div>
                <div className="mb-entry-meta">Jan 2020 — Jul 2022</div>
              </div>
              <div className="mb-entry-sub">Acme Inc · Remote</div>
              <ul className="mb-bullets">
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

            <div className="mb-entry" data-print-entry="true">
              <div className="mb-entry-head">
                <div className="mb-entry-title">Software Engineer Intern</div>
                <div className="mb-entry-meta">May 2018 — Aug 2018</div>
              </div>
              <div className="mb-entry-sub">Bytework · Remote</div>
              <ul className="mb-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </div>
          </section>
        </main>

        <aside className="mb-side">
          <div className="mb-id">
            <h1 className="mb-name">Avery Park</h1>
            <div className="mb-id-role">Senior Software Engineer</div>
            <div className="mb-id-team">Platform · Backend</div>
          </div>

          <section className="mb-side-section" data-print-entry="true">
            <h3>Contact</h3>
            <ul className="mb-contact">
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

          <section className="mb-side-section" data-print-entry="true">
            <h3>Skills</h3>
            <dl className="mb-skills">
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

          <section className="mb-side-section" data-print-entry="true">
            <h3>Education</h3>
            <div className="mb-side-entry">
              <div className="mb-side-title">B.S. Computer Science</div>
              <div className="mb-side-sub">Northern State University</div>
              <div className="mb-side-meta">2014 — 2018</div>
            </div>
          </section>

          <section className="mb-side-section" data-print-entry="true">
            <h3>Projects</h3>
            <div className="mb-side-entry">
              <div className="mb-side-title">Loomroute</div>
              <div className="mb-side-sub">URL routing library, Go</div>
              <div className="mb-side-meta">loomroute.dev</div>
            </div>
            <div className="mb-side-entry">
              <div className="mb-side-title">Tinytrace</div>
              <div className="mb-side-sub">Distributed tracing, Rust</div>
              <div className="mb-side-meta">github.com/averypark/tinytrace</div>
            </div>
          </section>
        </aside>
      </div>
    </PageFrame>
  )
}
