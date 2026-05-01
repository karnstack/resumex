import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function PeriodicalVolume() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-periodical-volume">
      <header className="pdv-masthead">
        <div className="pdv-volbar">
          <div className="pdv-vol">
            <span className="pdv-vol-label">Volume</span>
            <span className="pdv-vol-num">XII</span>
          </div>
          <div className="pdv-iss">
            <span className="pdv-iss-label">Issue</span>
            <span className="pdv-iss-num">03</span>
          </div>
          <div className="pdv-pub">
            <span className="pdv-pub-name">Engineering Quarterly</span>
            <span className="pdv-pub-tag">Curriculum Vitae · Spring MMXXVI</span>
          </div>
          <div className="pdv-edition">
            <span className="pdv-edition-label">Edition</span>
            <span className="pdv-edition-num">N° 47</span>
          </div>
        </div>
        <div className="pdv-name-row">
          <h1 className="pdv-name">Avery Park</h1>
          <div className="pdv-strap">Senior Software Engineer · Platform</div>
        </div>
        <div className="pdv-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="pdv-sep">·</span>
          <span>New York, NY</span>
          <span className="pdv-sep">·</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="pdv-sep">·</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="pdv-sep">·</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <main className="pdv-body">
        <section className="pdv-section" data-print-entry="true">
          <aside className="pdv-marginal" aria-hidden="true">
            <div className="pdv-marginal-date">May 2026</div>
            <div className="pdv-marginal-rule" />
            <div className="pdv-marginal-tag">§ I</div>
          </aside>
          <div className="pdv-section-body">
            <h2 className="pdv-h2">Profile</h2>
            <p className="pdv-summary">
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces. Software should be boring in production and
              useful to its users.
            </p>
          </div>
        </section>

        <section className="pdv-section" data-print-entry="true">
          <aside className="pdv-marginal" aria-hidden="true">
            <div className="pdv-marginal-date">2024 — present</div>
            <div className="pdv-marginal-rule" />
            <div className="pdv-marginal-tag">§ II</div>
          </aside>
          <div className="pdv-section-body">
            <h2 className="pdv-h2">Experience</h2>

            <article className="pdv-entry" data-print-entry="true">
              <header className="pdv-entry-head">
                <h3 className="pdv-role">Senior Software Engineer</h3>
                <div className="pdv-org-line">
                  <span className="pdv-org">Coral Labs</span>
                  <span className="pdv-sep">·</span>
                  <span>New York, NY</span>
                </div>
                <div className="pdv-dates">Mar 2024 — Present</div>
              </header>
              <ul className="pdv-bullets">
                <li>
                  Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99
                  latency by three.
                </li>
                <li>
                  Owned platform on-call across two quarters; reduced pages 60% with sharper
                  alerting and runbooks.
                </li>
                <li>Mentored four engineers through L4 to L5 promotions.</li>
              </ul>
            </article>

            <article className="pdv-entry" data-print-entry="true">
              <header className="pdv-entry-head">
                <h3 className="pdv-role">Software Engineer 2</h3>
                <div className="pdv-org-line">
                  <span className="pdv-org">Coral Labs</span>
                  <span className="pdv-sep">·</span>
                  <span>New York, NY</span>
                </div>
                <div className="pdv-dates">Aug 2022 — Mar 2024</div>
              </header>
              <ul className="pdv-bullets">
                <li>
                  Designed the billing pipeline (12M events / day on Kafka and Postgres) from spec
                  to production.
                </li>
                <li>
                  Built the internal feature-flag service used across forty-plus microservices.
                </li>
              </ul>
            </article>

            <article className="pdv-entry" data-print-entry="true">
              <header className="pdv-entry-head">
                <h3 className="pdv-role">Software Engineer</h3>
                <div className="pdv-org-line">
                  <span className="pdv-org">Acme Inc</span>
                  <span className="pdv-sep">·</span>
                  <span>Remote</span>
                </div>
                <div className="pdv-dates">Jan 2020 — Jul 2022</div>
              </header>
              <ul className="pdv-bullets">
                <li>
                  Shipped the company's first public API with rate limiting, OAuth2, and SDKs in
                  three languages.
                </li>
                <li>
                  Migrated the legacy monolith's auth module to a standalone identity service,
                  unblocking SSO.
                </li>
                <li>Cut average build times from eleven minutes to ninety seconds.</li>
              </ul>
            </article>

            <article className="pdv-entry" data-print-entry="true">
              <header className="pdv-entry-head">
                <h3 className="pdv-role">Software Engineer Intern</h3>
                <div className="pdv-org-line">
                  <span className="pdv-org">Bytework</span>
                  <span className="pdv-sep">·</span>
                  <span>Remote</span>
                </div>
                <div className="pdv-dates">May 2018 — Aug 2018</div>
              </header>
              <ul className="pdv-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="pdv-section" data-print-entry="true">
          <aside className="pdv-marginal" aria-hidden="true">
            <div className="pdv-marginal-date">2023 — 2026</div>
            <div className="pdv-marginal-rule" />
            <div className="pdv-marginal-tag">§ III</div>
          </aside>
          <div className="pdv-section-body">
            <h2 className="pdv-h2">Projects</h2>
            <article className="pdv-entry" data-print-entry="true">
              <header className="pdv-entry-head">
                <h3 className="pdv-role">Loomroute</h3>
                <div className="pdv-org-line">
                  <span className="pdv-org">loomroute.dev</span>
                  <span className="pdv-sep">·</span>
                  <span>Go · OSS</span>
                </div>
                <div className="pdv-dates">Live since 2024</div>
              </header>
              <p className="pdv-prose">
                URL routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </article>
            <article className="pdv-entry" data-print-entry="true">
              <header className="pdv-entry-head">
                <h3 className="pdv-role">Tinytrace</h3>
                <div className="pdv-org-line">
                  <span className="pdv-org">github.com/averypark/tinytrace</span>
                  <span className="pdv-sep">·</span>
                  <span>Rust · OSS</span>
                </div>
                <div className="pdv-dates">2023 — present</div>
              </header>
              <p className="pdv-prose">
                Minimal distributed tracing — span model, OTLP export, ~3k lines.
              </p>
            </article>
          </div>
        </section>

        <section className="pdv-section" data-print-entry="true">
          <aside className="pdv-marginal" aria-hidden="true">
            <div className="pdv-marginal-date">2014 — 2018</div>
            <div className="pdv-marginal-rule" />
            <div className="pdv-marginal-tag">§ IV</div>
          </aside>
          <div className="pdv-section-body">
            <h2 className="pdv-h2">Education</h2>
            <article className="pdv-entry" data-print-entry="true">
              <header className="pdv-entry-head">
                <h3 className="pdv-role">B.S. Computer Science</h3>
                <div className="pdv-org-line">
                  <span className="pdv-org">Northern State University</span>
                </div>
                <div className="pdv-dates">2014 — 2018</div>
              </header>
            </article>
          </div>
        </section>

        <section className="pdv-section" data-print-entry="true">
          <aside className="pdv-marginal" aria-hidden="true">
            <div className="pdv-marginal-date">Index</div>
            <div className="pdv-marginal-rule" />
            <div className="pdv-marginal-tag">§ V</div>
          </aside>
          <div className="pdv-section-body">
            <h2 className="pdv-h2">Skills</h2>
            <dl className="pdv-skills">
              <div className="pdv-skill-row">
                <dt>Languages</dt>
                <dd>Go, TypeScript, Python, Rust</dd>
              </div>
              <div className="pdv-skill-row">
                <dt>Backend</dt>
                <dd>Postgres, Redis, Kafka, gRPC</dd>
              </div>
              <div className="pdv-skill-row">
                <dt>Frontend</dt>
                <dd>React, Next.js, Tailwind, Vite</dd>
              </div>
              <div className="pdv-skill-row">
                <dt>Platform</dt>
                <dd>AWS, Kubernetes, Docker, Terraform</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </PageFrame>
  )
}
