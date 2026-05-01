import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function MirrorStack() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-mirror-stack">
      <header className="ms-head">
        <h1 className="ms-name">Avery Park</h1>
        <div className="ms-title">Senior Software Engineer · Platform</div>
      </header>

      <div className="ms-grid">
        <main className="ms-main">
          <section className="ms-section" data-print-entry="true">
            <h2>Summary</h2>
            <p className="ms-lede">
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software should be boring in production and
              useful to its users.
            </p>
          </section>

          <section className="ms-section" data-print-entry="true">
            <h2>Experience</h2>

            <div className="ms-entry" data-print-entry="true">
              <div className="ms-entry-head">
                <div className="ms-entry-title">Senior Software Engineer</div>
                <div className="ms-entry-meta">Mar 2024 — Present</div>
              </div>
              <div className="ms-entry-sub">Coral Labs · New York, NY</div>
              <ul className="ms-bullets">
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

            <div className="ms-entry" data-print-entry="true">
              <div className="ms-entry-head">
                <div className="ms-entry-title">Software Engineer 2</div>
                <div className="ms-entry-meta">Aug 2022 — Mar 2024</div>
              </div>
              <div className="ms-entry-sub">Coral Labs · New York, NY</div>
              <ul className="ms-bullets">
                <li>
                  Designed the billing pipeline (12M events / day on Kafka + Postgres) from spec to
                  production.
                </li>
                <li>Built the internal feature-flag service used across 40+ microservices.</li>
              </ul>
            </div>

            <div className="ms-entry" data-print-entry="true">
              <div className="ms-entry-head">
                <div className="ms-entry-title">Software Engineer</div>
                <div className="ms-entry-meta">Jan 2020 — Jul 2022</div>
              </div>
              <div className="ms-entry-sub">Acme Inc · Remote</div>
              <ul className="ms-bullets">
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

            <div className="ms-entry" data-print-entry="true">
              <div className="ms-entry-head">
                <div className="ms-entry-title">Software Engineer Intern</div>
                <div className="ms-entry-meta">May 2018 — Aug 2018</div>
              </div>
              <div className="ms-entry-sub">Bytework · Remote</div>
              <ul className="ms-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </div>
          </section>
        </main>

        <aside className="ms-side">
          <div className="ms-block" data-print-entry="true">
            <div className="ms-block-label">
              <span className="ms-block-num">01</span>
              <span>Contact</span>
            </div>
            <div className="ms-block-body">
              <ul className="ms-contact">
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
            </div>
          </div>

          <div className="ms-block" data-print-entry="true">
            <div className="ms-block-label">
              <span className="ms-block-num">02</span>
              <span>Education</span>
            </div>
            <div className="ms-block-body">
              <div className="ms-side-entry">
                <div className="ms-side-title">B.S. Computer Science</div>
                <div className="ms-side-sub">Northern State University</div>
                <div className="ms-side-meta">2014 — 2018</div>
              </div>
            </div>
          </div>

          <div className="ms-block" data-print-entry="true">
            <div className="ms-block-label">
              <span className="ms-block-num">03</span>
              <span>Skills</span>
            </div>
            <div className="ms-block-body">
              <dl className="ms-skills">
                <dt>Languages</dt>
                <dd>Go, TypeScript, Python, Rust</dd>
                <dt>Backend</dt>
                <dd>Postgres, Redis, Kafka, gRPC</dd>
                <dt>Frontend</dt>
                <dd>React, Next.js, Tailwind, Vite</dd>
                <dt>Platform</dt>
                <dd>AWS, Kubernetes, Docker, Terraform</dd>
              </dl>
            </div>
          </div>

          <div className="ms-block" data-print-entry="true">
            <div className="ms-block-label">
              <span className="ms-block-num">04</span>
              <span>Projects</span>
            </div>
            <div className="ms-block-body">
              <div className="ms-side-entry">
                <div className="ms-side-title">Loomroute</div>
                <div className="ms-side-sub">URL routing library, Go</div>
                <div className="ms-side-meta">loomroute.dev</div>
              </div>
              <div className="ms-side-entry">
                <div className="ms-side-title">Tinytrace</div>
                <div className="ms-side-sub">Distributed tracing, Rust</div>
                <div className="ms-side-meta">github.com/averypark/tinytrace</div>
              </div>
            </div>
          </div>

          <div className="ms-block" data-print-entry="true">
            <div className="ms-block-label">
              <span className="ms-block-num">05</span>
              <span>Interests</span>
            </div>
            <div className="ms-block-body">
              <p className="ms-prose">
                Distributed systems, programming-language design, mechanical keyboards, long-form
                technical writing, kettlebells.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </PageFrame>
  )
}
