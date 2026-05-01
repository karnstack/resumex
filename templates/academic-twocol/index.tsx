import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function AcademicTwoCol() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-academic-twocol">
      <div className="atc-grid">
        <header className="atc-head" data-print-entry="true">
          <h1 className="atc-name">Avery Park</h1>
          <div className="atc-affil">Senior Software Engineer, Platform &middot; Coral Labs.</div>
          <div className="atc-headrule" aria-hidden="true" />
        </header>

        <aside className="atc-side">
          <section className="atc-side-section" data-print-entry="true">
            <h2 className="atc-h3">Contact</h2>
            <ul className="atc-kv">
              <li>
                <span className="atc-k">e</span>
                <a href="mailto:avery@example.com">avery@example.com</a>
              </li>
              <li>
                <span className="atc-k">w</span>
                <a href="https://averypark.dev">averypark.dev</a>
              </li>
              <li>
                <span className="atc-k">g</span>
                <a href="https://github.com/averypark">github.com/averypark</a>
              </li>
              <li>
                <span className="atc-k">i</span>
                <a href="https://linkedin.com/in/averypark">in/averypark</a>
              </li>
              <li>
                <span className="atc-k">l</span>
                <span>New York, NY</span>
              </li>
            </ul>
          </section>

          <section className="atc-side-section" data-print-entry="true">
            <h2 className="atc-h3">Affiliations</h2>
            <ul className="atc-list">
              <li>
                <em>Coral Labs</em>, Platform Team. <span className="atc-mute">2022&ndash;.</span>
              </li>
              <li>
                <em>USENIX</em>, member. <span className="atc-mute">2021&ndash;.</span>
              </li>
              <li>
                <em>ACM SIGOPS</em>, member. <span className="atc-mute">2020&ndash;.</span>
              </li>
            </ul>
          </section>

          <section className="atc-side-section" data-print-entry="true">
            <h2 className="atc-h3">Education</h2>
            <div className="atc-edu">
              <strong>B.S. Computer Science</strong>
              <div>
                <em>Northern State University</em>
              </div>
              <div className="atc-mute">2014&ndash;2018</div>
            </div>
          </section>

          <section className="atc-side-section" data-print-entry="true">
            <h2 className="atc-h3">Technical Skills</h2>
            <dl className="atc-skills">
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust.</dd>
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC.</dd>
              <dt>Frontend</dt>
              <dd>React, Next.js, Tailwind, Vite.</dd>
              <dt>Platform</dt>
              <dd>AWS, Kubernetes, Docker, Terraform.</dd>
            </dl>
          </section>

          <section className="atc-side-section" data-print-entry="true">
            <h2 className="atc-h3">Awards</h2>
            <ul className="atc-list">
              <li>
                Coral Labs Engineering Excellence. <span className="atc-mute">2024.</span>
              </li>
              <li>
                Outstanding Thesis in Systems. <span className="atc-mute">2018.</span>
              </li>
            </ul>
          </section>
        </aside>

        <main className="atc-main">
          <section className="atc-section" data-print-entry="true">
            <h2 className="atc-h2">Research Statement</h2>
            <p className="atc-prose">
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software should be{' '}
              <em>boring in production</em> and useful to its users.
            </p>
          </section>

          <section className="atc-section" data-print-entry="true">
            <h2 className="atc-h2">Appointments</h2>

            <div className="atc-entry" data-print-entry="true">
              <div className="atc-entry-head">
                <div>
                  <strong>Senior Software Engineer</strong>, Platform.
                </div>
                <div className="atc-date">2024&ndash;present</div>
              </div>
              <div className="atc-entry-sub">
                <em>Coral Labs</em>, New York, NY.
              </div>
              <ul className="atc-bullets">
                <li>
                  Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99
                  latency 3x.
                </li>
                <li>
                  Owned platform on-call across two quarters; reduced page volume 60% via tighter
                  alerting and runbooks.
                </li>
                <li>Mentored four engineers through L4&rarr;L5 promotions.</li>
              </ul>
            </div>

            <div className="atc-entry" data-print-entry="true">
              <div className="atc-entry-head">
                <div>
                  <strong>Software Engineer II</strong>.
                </div>
                <div className="atc-date">2022&ndash;2024</div>
              </div>
              <div className="atc-entry-sub">
                <em>Coral Labs</em>, New York, NY.
              </div>
              <ul className="atc-bullets">
                <li>
                  Designed and shipped the billing pipeline (12M events/day, Kafka + Postgres).
                </li>
                <li>Built the internal feature-flag service used across 40+ microservices.</li>
              </ul>
            </div>

            <div className="atc-entry" data-print-entry="true">
              <div className="atc-entry-head">
                <div>
                  <strong>Software Engineer</strong>.
                </div>
                <div className="atc-date">2020&ndash;2022</div>
              </div>
              <div className="atc-entry-sub">
                <em>Acme Inc.</em>, Remote.
              </div>
              <ul className="atc-bullets">
                <li>Shipped the company&rsquo;s first public API with rate limiting and OAuth2.</li>
                <li>Migrated the monolith&rsquo;s auth module to a standalone identity service.</li>
                <li>Cut average build times from 11 min to 90 s.</li>
              </ul>
            </div>

            <div className="atc-entry" data-print-entry="true">
              <div className="atc-entry-head">
                <div>
                  <strong>Software Engineer Intern</strong>.
                </div>
                <div className="atc-date">2018</div>
              </div>
              <div className="atc-entry-sub">
                <em>Bytework</em>, Remote.
              </div>
              <ul className="atc-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </div>
          </section>

          <section className="atc-section" data-print-entry="true">
            <h2 className="atc-h2">Publications</h2>
            <ol className="atc-refs">
              <li>
                Park, A. (2024). On the legibility of distributed traces.{' '}
                <em>Journal of Observability Studies</em>, 12(4), 213&ndash;229.
              </li>
              <li>
                Park, A., &amp; Liang, S. (2023). Bounded-staleness reads in sharded key-value
                stores. In <em>Proc. PDSW &rsquo;23</em>, 41&ndash;52.
              </li>
              <li>
                Park, A. (2022). A small note on idempotent retries.{' '}
                <em>SIGOPS Operating Systems Review</em>, 56(2), 8&ndash;11.
              </li>
            </ol>
          </section>

          <section className="atc-section" data-print-entry="true">
            <h2 className="atc-h2">Selected Projects</h2>
            <div className="atc-proj">
              <strong>Loomroute</strong> &middot; <em>Go, OSS</em>. URL routing library used by ~200
              small SaaS apps. Live since 2024.
            </div>
            <div className="atc-proj">
              <strong>Tinytrace</strong> &middot; <em>Rust, OSS</em>. Minimal distributed tracing
              library &mdash; span model, OTLP export, ~3k lines.
            </div>
          </section>
        </main>
      </div>
    </PageFrame>
  )
}
