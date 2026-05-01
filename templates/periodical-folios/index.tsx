import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function PeriodicalFolios() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-periodical-folios">
      <aside className="pdf-gutter pdf-gutter-left" aria-hidden="true">
        <div className="pdf-folio">01</div>
        <div className="pdf-running">Engineering Quarterly · Vol XII</div>
        <div className="pdf-folio-bot">Avery Park</div>
      </aside>
      <aside className="pdf-gutter pdf-gutter-right" aria-hidden="true">
        <div className="pdf-folio">— iii —</div>
        <div className="pdf-running pdf-running-flip">Issue 03 · May MMXXVI</div>
        <div className="pdf-folio-bot">N° 47</div>
      </aside>

      <div className="pdf-page">
        <header className="pdf-masthead">
          <div className="pdf-eyebrow">Engineering Quarterly · Vol XII · Issue 03</div>
          <h1 className="pdf-name">Avery Park</h1>
          <div className="pdf-rule" />
          <div className="pdf-strap-row">
            <div className="pdf-strap">
              Senior Software Engineer working on platforms, pipelines, and the things in between.
            </div>
            <div className="pdf-contact">
              <div>
                <a href="mailto:avery@example.com">avery@example.com</a>
              </div>
              <div>New York, NY</div>
              <div>
                <a href="https://averypark.dev">averypark.dev</a>
              </div>
              <div>
                <a href="https://github.com/averypark">github.com/averypark</a>
              </div>
              <div>
                <a href="https://linkedin.com/in/averypark">in/averypark</a>
              </div>
            </div>
          </div>
        </header>

        <section className="pdf-section" data-print-entry="true">
          <div className="pdf-folio-mark" aria-hidden="true">
            <span>p.</span>
            <span className="pdf-folio-num">01</span>
          </div>
          <h2 className="pdf-h2">Profile</h2>
          <p className="pdf-summary">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </section>

        <section className="pdf-section" data-print-entry="true">
          <div className="pdf-folio-mark" aria-hidden="true">
            <span>p.</span>
            <span className="pdf-folio-num">02</span>
          </div>
          <h2 className="pdf-h2">Experience</h2>

          <article className="pdf-entry" data-print-entry="true">
            <div className="pdf-entry-folio">i.</div>
            <div className="pdf-entry-body">
              <header className="pdf-entry-head">
                <h3 className="pdf-role">Senior Software Engineer</h3>
                <div className="pdf-dates">Mar 2024 — Present</div>
              </header>
              <div className="pdf-org-line">
                <span className="pdf-org">Coral Labs</span>
                <span className="pdf-sep">·</span>
                <span>New York, NY</span>
              </div>
              <ul className="pdf-bullets">
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
            </div>
          </article>

          <article className="pdf-entry" data-print-entry="true">
            <div className="pdf-entry-folio">ii.</div>
            <div className="pdf-entry-body">
              <header className="pdf-entry-head">
                <h3 className="pdf-role">Software Engineer 2</h3>
                <div className="pdf-dates">Aug 2022 — Mar 2024</div>
              </header>
              <div className="pdf-org-line">
                <span className="pdf-org">Coral Labs</span>
                <span className="pdf-sep">·</span>
                <span>New York, NY</span>
              </div>
              <ul className="pdf-bullets">
                <li>
                  Designed the billing pipeline (12M events/day on Kafka and Postgres) from spec to
                  production.
                </li>
                <li>
                  Built the internal feature-flag service used across forty-plus microservices.
                </li>
              </ul>
            </div>
          </article>

          <article className="pdf-entry" data-print-entry="true">
            <div className="pdf-entry-folio">iii.</div>
            <div className="pdf-entry-body">
              <header className="pdf-entry-head">
                <h3 className="pdf-role">Software Engineer</h3>
                <div className="pdf-dates">Jan 2020 — Jul 2022</div>
              </header>
              <div className="pdf-org-line">
                <span className="pdf-org">Acme Inc</span>
                <span className="pdf-sep">·</span>
                <span>Remote</span>
              </div>
              <ul className="pdf-bullets">
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
            </div>
          </article>

          <article className="pdf-entry" data-print-entry="true">
            <div className="pdf-entry-folio">iv.</div>
            <div className="pdf-entry-body">
              <header className="pdf-entry-head">
                <h3 className="pdf-role">Software Engineer Intern</h3>
                <div className="pdf-dates">May 2018 — Aug 2018</div>
              </header>
              <div className="pdf-org-line">
                <span className="pdf-org">Bytework</span>
                <span className="pdf-sep">·</span>
                <span>Remote</span>
              </div>
              <ul className="pdf-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="pdf-section pdf-section-split" data-print-entry="true">
          <div className="pdf-folio-mark" aria-hidden="true">
            <span>p.</span>
            <span className="pdf-folio-num">03</span>
          </div>
          <h2 className="pdf-h2">Projects, Education &amp; Skills</h2>
          <div className="pdf-split-grid">
            <div>
              <h3 className="pdf-subhead">Projects</h3>
              <article className="pdf-mini" data-print-entry="true">
                <h4>Loomroute</h4>
                <div className="pdf-mini-meta">Go · OSS · loomroute.dev</div>
                <p>URL routing library used by ~200 small SaaS apps. Live since 2024.</p>
              </article>
              <article className="pdf-mini" data-print-entry="true">
                <h4>Tinytrace</h4>
                <div className="pdf-mini-meta">Rust · OSS</div>
                <p>Minimal distributed tracing — span model, OTLP export, ~3k lines.</p>
              </article>
            </div>
            <div>
              <h3 className="pdf-subhead">Education</h3>
              <article className="pdf-mini" data-print-entry="true">
                <h4>B.S. Computer Science</h4>
                <div className="pdf-mini-meta">Northern State University · 2014 — 2018</div>
              </article>
              <h3 className="pdf-subhead pdf-subhead-mt">Skills</h3>
              <dl className="pdf-skills">
                <div>
                  <dt>Lang</dt>
                  <dd>Go, TypeScript, Python, Rust</dd>
                </div>
                <div>
                  <dt>Backend</dt>
                  <dd>Postgres, Redis, Kafka, gRPC</dd>
                </div>
                <div>
                  <dt>Frontend</dt>
                  <dd>React, Next.js, Tailwind, Vite</dd>
                </div>
                <div>
                  <dt>Platform</dt>
                  <dd>AWS, Kubernetes, Docker, Terraform</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </PageFrame>
  )
}
