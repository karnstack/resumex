import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function TerminalTabular() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-terminal-tabular">
      <header className="tt-head" data-print-entry="true">
        <div className="tt-head-tag">RECORD · 0001 · resume.tsv</div>
        <h1 className="tt-name">Avery Park</h1>
        <div className="tt-title">senior software engineer · platform</div>
      </header>

      <section className="tt-section tt-section-contact" data-print-entry="true">
        <h2 className="tt-section-label">contact</h2>
        <dl className="tt-table">
          <div className="tt-row">
            <dt>email</dt>
            <dd>
              <a className="tt-link" href="mailto:avery@example.com">
                avery@example.com
              </a>
            </dd>
          </div>
          <div className="tt-row">
            <dt>loc</dt>
            <dd>New York, NY</dd>
          </div>
          <div className="tt-row">
            <dt>site</dt>
            <dd>
              <a className="tt-link" href="https://averypark.dev">
                averypark.dev
              </a>
            </dd>
          </div>
          <div className="tt-row">
            <dt>github</dt>
            <dd>
              <a className="tt-link" href="https://github.com/averypark">
                github.com/averypark
              </a>
            </dd>
          </div>
          <div className="tt-row">
            <dt>linkedin</dt>
            <dd>
              <a className="tt-link" href="https://linkedin.com/in/averypark">
                in/averypark
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="tt-section" data-print-entry="true">
        <h2 className="tt-section-label">summary</h2>
        <dl className="tt-table">
          <div className="tt-row">
            <dt>note</dt>
            <dd>
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software should be boring in production and
              useful to its users.
            </dd>
          </div>
        </dl>
      </section>

      <section className="tt-section" data-print-entry="true">
        <h2 className="tt-section-label">experience</h2>

        <div className="tt-entry" data-print-entry="true">
          <dl className="tt-table">
            <div className="tt-row">
              <dt>role</dt>
              <dd className="tt-strong">Senior Software Engineer</dd>
            </div>
            <div className="tt-row">
              <dt>company</dt>
              <dd>Coral Labs</dd>
            </div>
            <div className="tt-row">
              <dt>tenure</dt>
              <dd>2024-03 — Present</dd>
            </div>
            <div className="tt-row">
              <dt>loc</dt>
              <dd>New York, NY</dd>
            </div>
            <div className="tt-row">
              <dt>notes</dt>
              <dd>
                <ul className="tt-bullets">
                  <li>migrated events pipeline → sharded Kafka cluster; p99 latency cut 3×.</li>
                  <li>
                    owned platform on-call across two quarters; reduced pages 60% via better
                    alerting + runbooks.
                  </li>
                  <li>mentored four engineers through L4 → L5 promotions.</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        <div className="tt-entry" data-print-entry="true">
          <dl className="tt-table">
            <div className="tt-row">
              <dt>role</dt>
              <dd className="tt-strong">Software Engineer 2</dd>
            </div>
            <div className="tt-row">
              <dt>company</dt>
              <dd>Coral Labs</dd>
            </div>
            <div className="tt-row">
              <dt>tenure</dt>
              <dd>2022-08 — 2024-03</dd>
            </div>
            <div className="tt-row">
              <dt>loc</dt>
              <dd>New York, NY</dd>
            </div>
            <div className="tt-row">
              <dt>notes</dt>
              <dd>
                <ul className="tt-bullets">
                  <li>
                    designed billing pipeline (12M events/day, Kafka + Postgres) from spec to
                    production.
                  </li>
                  <li>built internal feature-flag service consumed by 40+ microservices.</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        <div className="tt-entry" data-print-entry="true">
          <dl className="tt-table">
            <div className="tt-row">
              <dt>role</dt>
              <dd className="tt-strong">Software Engineer</dd>
            </div>
            <div className="tt-row">
              <dt>company</dt>
              <dd>Acme Inc</dd>
            </div>
            <div className="tt-row">
              <dt>tenure</dt>
              <dd>2020-01 — 2022-07</dd>
            </div>
            <div className="tt-row">
              <dt>loc</dt>
              <dd>Remote</dd>
            </div>
            <div className="tt-row">
              <dt>notes</dt>
              <dd>
                <ul className="tt-bullets">
                  <li>shipped first public API: rate limiting, OAuth2, SDKs in three languages.</li>
                  <li>extracted monolith auth → identity service, unblocking SSO.</li>
                  <li>cut average build times from 11min → 90s via parallel test matrix.</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        <div className="tt-entry" data-print-entry="true">
          <dl className="tt-table">
            <div className="tt-row">
              <dt>role</dt>
              <dd className="tt-strong">Software Engineer Intern</dd>
            </div>
            <div className="tt-row">
              <dt>company</dt>
              <dd>Bytework</dd>
            </div>
            <div className="tt-row">
              <dt>tenure</dt>
              <dd>2018-05 — 2018-08</dd>
            </div>
            <div className="tt-row">
              <dt>loc</dt>
              <dd>Remote</dd>
            </div>
            <div className="tt-row">
              <dt>notes</dt>
              <dd>
                <ul className="tt-bullets">
                  <li>
                    built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="tt-section" data-print-entry="true">
        <h2 className="tt-section-label">projects</h2>

        <div className="tt-entry" data-print-entry="true">
          <dl className="tt-table">
            <div className="tt-row">
              <dt>name</dt>
              <dd className="tt-strong">loomroute</dd>
            </div>
            <div className="tt-row">
              <dt>kind</dt>
              <dd>URL routing lib · Go · OSS</dd>
            </div>
            <div className="tt-row">
              <dt>notes</dt>
              <dd>URL routing library used by ~200 small SaaS apps. Live since 2024.</dd>
            </div>
          </dl>
        </div>

        <div className="tt-entry" data-print-entry="true">
          <dl className="tt-table">
            <div className="tt-row">
              <dt>name</dt>
              <dd className="tt-strong">tinytrace</dd>
            </div>
            <div className="tt-row">
              <dt>kind</dt>
              <dd>distributed tracing · Rust · OSS</dd>
            </div>
            <div className="tt-row">
              <dt>notes</dt>
              <dd>Minimal distributed tracing library — span model, OTLP export, ~3k lines.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="tt-section" data-print-entry="true">
        <h2 className="tt-section-label">education</h2>
        <div className="tt-entry" data-print-entry="true">
          <dl className="tt-table">
            <div className="tt-row">
              <dt>degree</dt>
              <dd className="tt-strong">B.S. Computer Science</dd>
            </div>
            <div className="tt-row">
              <dt>school</dt>
              <dd>Northern State University</dd>
            </div>
            <div className="tt-row">
              <dt>tenure</dt>
              <dd>2014 — 2018</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="tt-section" data-print-entry="true">
        <h2 className="tt-section-label">skills</h2>
        <dl className="tt-table">
          <div className="tt-row">
            <dt>languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="tt-row">
            <dt>backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="tt-row">
            <dt>frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="tt-row">
            <dt>platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>

      <footer className="tt-footer">
        <span className="tt-comment">// resume.tsx · v2026.05 · EOF</span>
      </footer>
    </PageFrame>
  )
}
