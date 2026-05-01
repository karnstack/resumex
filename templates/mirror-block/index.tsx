import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function MirrorBlock() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-mirror-block">
      <header className="mk-banner">
        <div className="mk-banner-inner">
          <div className="mk-banner-id">
            <h1 className="mk-name">Avery Park</h1>
            <div className="mk-title">Senior Software Engineer · Platform</div>
          </div>
          <ul className="mk-banner-rail">
            <li>
              <span className="mk-key">Email</span>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </li>
            <li>
              <span className="mk-key">Loc</span>
              <span>New York, NY</span>
            </li>
            <li>
              <span className="mk-key">Web</span>
              <a href="https://averypark.dev">averypark.dev</a>
            </li>
            <li>
              <span className="mk-key">GitHub</span>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </li>
            <li>
              <span className="mk-key">In</span>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </li>
          </ul>
        </div>
      </header>

      <div className="mk-body">
        <div className="mk-grid">
          <main className="mk-main">
            <section className="mk-section" data-print-entry="true">
              <h2>Summary</h2>
              <p className="mk-lede">
                I build resilient backend systems and the platforms that run them. I prefer small,
                reversible changes and clear interfaces. Software should be boring in production and
                useful to its users.
              </p>
            </section>

            <section className="mk-section" data-print-entry="true">
              <h2>Experience</h2>

              <div className="mk-entry" data-print-entry="true">
                <div className="mk-entry-head">
                  <div className="mk-entry-title">Senior Software Engineer</div>
                  <div className="mk-entry-meta">Mar 2024 — Present</div>
                </div>
                <div className="mk-entry-sub">Coral Labs · New York, NY</div>
                <ul className="mk-bullets">
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

              <div className="mk-entry" data-print-entry="true">
                <div className="mk-entry-head">
                  <div className="mk-entry-title">Software Engineer 2</div>
                  <div className="mk-entry-meta">Aug 2022 — Mar 2024</div>
                </div>
                <div className="mk-entry-sub">Coral Labs · New York, NY</div>
                <ul className="mk-bullets">
                  <li>
                    Designed the billing pipeline (12M events / day on Kafka + Postgres) from spec
                    to production.
                  </li>
                  <li>Built the internal feature-flag service used across 40+ microservices.</li>
                </ul>
              </div>

              <div className="mk-entry" data-print-entry="true">
                <div className="mk-entry-head">
                  <div className="mk-entry-title">Software Engineer</div>
                  <div className="mk-entry-meta">Jan 2020 — Jul 2022</div>
                </div>
                <div className="mk-entry-sub">Acme Inc · Remote</div>
                <ul className="mk-bullets">
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

              <div className="mk-entry" data-print-entry="true">
                <div className="mk-entry-head">
                  <div className="mk-entry-title">Software Engineer Intern</div>
                  <div className="mk-entry-meta">May 2018 — Aug 2018</div>
                </div>
                <div className="mk-entry-sub">Bytework · Remote</div>
                <ul className="mk-bullets">
                  <li>
                    Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                  </li>
                </ul>
              </div>
            </section>
          </main>

          <aside className="mk-side">
            <section className="mk-side-section" data-print-entry="true">
              <h3>Skills</h3>
              <dl className="mk-skills">
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

            <section className="mk-side-section" data-print-entry="true">
              <h3>Education</h3>
              <div className="mk-side-entry">
                <div className="mk-side-title">B.S. Computer Science</div>
                <div className="mk-side-sub">Northern State University</div>
                <div className="mk-side-meta">2014 — 2018</div>
              </div>
            </section>

            <section className="mk-side-section" data-print-entry="true">
              <h3>Projects</h3>
              <div className="mk-side-entry">
                <div className="mk-side-title">Loomroute</div>
                <div className="mk-side-sub">URL routing library, Go</div>
                <div className="mk-side-meta">loomroute.dev</div>
              </div>
              <div className="mk-side-entry">
                <div className="mk-side-title">Tinytrace</div>
                <div className="mk-side-sub">Distributed tracing, Rust</div>
                <div className="mk-side-meta">github.com/averypark/tinytrace</div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </PageFrame>
  )
}
