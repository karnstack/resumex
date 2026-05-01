import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function BrutalistStrip() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-brutalist-strip">
      <div className="bst-grid">
        <main className="bst-main">
          <header className="bst-head">
            <div className="bst-eyebrow">FILE 001 // RESUME</div>
            <h1 className="bst-name">AVERY PARK</h1>
            <div className="bst-title">SENIOR SOFTWARE ENGINEER &mdash; PLATFORM</div>
          </header>

          <section className="bst-section" data-print-entry="true">
            <h2 className="bst-h2">SUMMARY</h2>
            <p className="bst-lede">
              Builds resilient backend systems and the platforms that run them. Prefers small,
              reversible changes and clear interfaces. Software should be boring in production and
              useful to its users.
            </p>
          </section>

          <section className="bst-section" data-print-entry="true">
            <h2 className="bst-h2">EXPERIENCE</h2>

            <div className="bst-entry" data-print-entry="true">
              <div className="bst-entry-head">
                <div>
                  <div className="bst-role">SENIOR SOFTWARE ENGINEER</div>
                  <div className="bst-org">CORAL LABS &mdash; NEW YORK, NY</div>
                </div>
                <div className="bst-date">2024.03 &rarr; PRESENT</div>
              </div>
              <ul className="bst-bullets">
                <li>Migrated events pipeline to a sharded Kafka cluster. p99 down 3x.</li>
                <li>Owned platform on-call. Pages down 60% via better alerting and runbooks.</li>
                <li>Mentored four engineers through L4 to L5 promotions.</li>
              </ul>
            </div>

            <div className="bst-entry" data-print-entry="true">
              <div className="bst-entry-head">
                <div>
                  <div className="bst-role">SOFTWARE ENGINEER 2</div>
                  <div className="bst-org">CORAL LABS &mdash; NEW YORK, NY</div>
                </div>
                <div className="bst-date">2022.08 &rarr; 2024.03</div>
              </div>
              <ul className="bst-bullets">
                <li>Designed billing pipeline. 12M events/day on Kafka and Postgres.</li>
                <li>Built feature-flag service used across 40+ microservices.</li>
                <li>Drove architecture-level reviews for cross-team launches.</li>
              </ul>
            </div>

            <div className="bst-entry" data-print-entry="true">
              <div className="bst-entry-head">
                <div>
                  <div className="bst-role">SOFTWARE ENGINEER</div>
                  <div className="bst-org">ACME INC &mdash; REMOTE</div>
                </div>
                <div className="bst-date">2020.01 &rarr; 2022.07</div>
              </div>
              <ul className="bst-bullets">
                <li>Shipped first public API. Rate limits, OAuth2, SDKs in three languages.</li>
                <li>Extracted auth from monolith. Standalone identity service. Unblocked SSO.</li>
                <li>Cut average build times from 11min to 90s.</li>
              </ul>
            </div>

            <div className="bst-entry" data-print-entry="true">
              <div className="bst-entry-head">
                <div>
                  <div className="bst-role">SOFTWARE ENGINEER INTERN</div>
                  <div className="bst-org">BYTEWORK &mdash; REMOTE</div>
                </div>
                <div className="bst-date">2018.05 &rarr; 2018.08</div>
              </div>
              <ul className="bst-bullets">
                <li>Built an internal log aggregator in Go on Kafka. Earned a return offer.</li>
              </ul>
            </div>
          </section>

          <section className="bst-section" data-print-entry="true">
            <h2 className="bst-h2">PROJECTS</h2>
            <div className="bst-entry" data-print-entry="true">
              <div className="bst-entry-head">
                <div>
                  <div className="bst-role">LOOMROUTE</div>
                  <div className="bst-org">URL ROUTING &mdash; GO &mdash; OSS</div>
                </div>
                <div className="bst-date">LIVE / 2024</div>
              </div>
              <p className="bst-prose">
                Routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </div>
            <div className="bst-entry" data-print-entry="true">
              <div className="bst-entry-head">
                <div>
                  <div className="bst-role">TINYTRACE</div>
                  <div className="bst-org">DISTRIBUTED TRACING &mdash; RUST &mdash; OSS</div>
                </div>
                <div className="bst-date">REPO</div>
              </div>
              <p className="bst-prose">Minimal tracing lib. Span model. OTLP export. ~3k lines.</p>
            </div>
          </section>

          <section className="bst-section" data-print-entry="true">
            <h2 className="bst-h2">EDUCATION</h2>
            <div className="bst-entry" data-print-entry="true">
              <div className="bst-entry-head">
                <div>
                  <div className="bst-role">B.S. COMPUTER SCIENCE</div>
                  <div className="bst-org">NORTHERN STATE UNIVERSITY</div>
                </div>
                <div className="bst-date">2014 &rarr; 2018</div>
              </div>
            </div>
          </section>

          <section className="bst-section" data-print-entry="true">
            <h2 className="bst-h2">SKILLS</h2>
            <dl className="bst-skills">
              <div className="bst-skill-row">
                <dt>LANG</dt>
                <dd>Go, TypeScript, Python, Rust</dd>
              </div>
              <div className="bst-skill-row">
                <dt>BACK</dt>
                <dd>Postgres, Redis, Kafka, gRPC</dd>
              </div>
              <div className="bst-skill-row">
                <dt>FRONT</dt>
                <dd>React, Next.js, Tailwind, Vite</dd>
              </div>
              <div className="bst-skill-row">
                <dt>PLAT</dt>
                <dd>AWS, Kubernetes, Docker, Terraform</dd>
              </div>
            </dl>
          </section>
        </main>

        <aside className="bst-strip" aria-label="contact">
          <div className="bst-strip-top">
            <div className="bst-strip-mark">001</div>
            <div className="bst-strip-stack">
              {'C-O-N-T-A-C-T'.split('-').map((c, i) => (
                <span key={i}>{c}</span>
              ))}
            </div>
          </div>

          <div className="bst-strip-rows">
            <div className="bst-strip-row">
              <div className="bst-strip-key">EML</div>
              <a className="bst-strip-val" href="mailto:avery@example.com">
                avery@example.com
              </a>
            </div>
            <div className="bst-strip-row">
              <div className="bst-strip-key">LOC</div>
              <div className="bst-strip-val">NEW YORK, NY</div>
            </div>
            <div className="bst-strip-row">
              <div className="bst-strip-key">WEB</div>
              <a className="bst-strip-val" href="https://averypark.dev">
                averypark.dev
              </a>
            </div>
            <div className="bst-strip-row">
              <div className="bst-strip-key">GIT</div>
              <a className="bst-strip-val" href="https://github.com/averypark">
                github.com/averypark
              </a>
            </div>
            <div className="bst-strip-row">
              <div className="bst-strip-key">LIN</div>
              <a className="bst-strip-val" href="https://linkedin.com/in/averypark">
                in/averypark
              </a>
            </div>
          </div>

          <div className="bst-strip-foot">
            <div className="bst-strip-bar" />
            <div className="bst-strip-stack bst-strip-vertfoot">
              {'A-V-E-R-Y--P-A-R-K'.split('-').map((c, i) => (
                <span key={i}>{c || ' '}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </PageFrame>
  )
}
