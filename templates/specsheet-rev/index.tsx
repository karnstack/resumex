import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function SpecsheetRev() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-specsheet-rev">
      <header className="ssr-head" data-print-entry="true">
        <div className="ssr-head-top">
          <div className="ssr-doctag">
            <span className="ssr-doctag-k">DOC</span>
            <span className="ssr-doctag-v">CV-AP-2026</span>
          </div>
          <div className="ssr-revtag ssr-revtag-current">
            <span className="ssr-revtag-k">REV</span>
            <span className="ssr-revtag-v">D</span>
          </div>
        </div>
        <div className="ssr-head-body">
          <div className="ssr-eyebrow">SUBJECT FILE / PRODUCT SPEC SHEET</div>
          <h1 className="ssr-name">Avery Park</h1>
          <div className="ssr-title">Senior Software Engineer &mdash; Platform</div>
        </div>
        <div className="ssr-head-meta">
          <div className="ssr-kv">
            <span className="ssr-k">DATE</span>
            <span className="ssr-v">2026.05.02</span>
          </div>
          <div className="ssr-kv">
            <span className="ssr-k">OWNER</span>
            <span className="ssr-v">A.PARK</span>
          </div>
          <div className="ssr-kv">
            <span className="ssr-k">PG</span>
            <span className="ssr-v">1/1</span>
          </div>
        </div>
      </header>

      <section className="ssr-history" data-print-entry="true">
        <div className="ssr-section-bar">
          <span className="ssr-bar-label">REVISION HISTORY</span>
          <span className="ssr-bar-rule" aria-hidden="true" />
        </div>
        <table className="ssr-rev-table">
          <thead>
            <tr>
              <th>REV</th>
              <th>DATE</th>
              <th>BY</th>
              <th>NOTE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>2018.08</td>
              <td>A.PARK</td>
              <td>Initial issue. Internship completed at Bytework.</td>
            </tr>
            <tr>
              <td>B</td>
              <td>2020.01</td>
              <td>A.PARK</td>
              <td>Added Acme Inc. role; first public API shipped.</td>
            </tr>
            <tr>
              <td>C</td>
              <td>2022.08</td>
              <td>A.PARK</td>
              <td>Promoted SE2 at Coral Labs; billing pipeline GA.</td>
            </tr>
            <tr className="ssr-rev-current">
              <td>D</td>
              <td>2024.03</td>
              <td>A.PARK</td>
              <td>Promoted Senior; events pipeline migration; on-call ownership.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="ssr-section" data-print-entry="true">
        <div className="ssr-section-bar">
          <span className="ssr-bar-label">CONTACT</span>
          <span className="ssr-bar-rule" aria-hidden="true" />
          <span className="ssr-bar-revtag">REV-D</span>
        </div>
        <dl className="ssr-grid">
          <div className="ssr-row">
            <dt>EMAIL</dt>
            <dd>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </dd>
          </div>
          <div className="ssr-row">
            <dt>LOCATION</dt>
            <dd>New York, NY</dd>
          </div>
          <div className="ssr-row">
            <dt>WEB</dt>
            <dd>
              <a href="https://averypark.dev">averypark.dev</a>
            </dd>
          </div>
          <div className="ssr-row">
            <dt>GITHUB</dt>
            <dd>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </dd>
          </div>
          <div className="ssr-row">
            <dt>LINKEDIN</dt>
            <dd>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="ssr-section" data-print-entry="true">
        <div className="ssr-section-bar">
          <span className="ssr-bar-label">SUMMARY</span>
          <span className="ssr-bar-rule" aria-hidden="true" />
          <span className="ssr-bar-revtag">REV-D</span>
        </div>
        <p className="ssr-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="ssr-section" data-print-entry="true">
        <div className="ssr-section-bar">
          <span className="ssr-bar-label">EXPERIENCE</span>
          <span className="ssr-bar-rule" aria-hidden="true" />
          <span className="ssr-bar-revtag">REV-D</span>
        </div>

        <div className="ssr-entry" data-print-entry="true">
          <div className="ssr-entry-head">
            <div className="ssr-entry-tag">REV-D</div>
            <div className="ssr-entry-body-head">
              <div className="ssr-entry-title">Senior Software Engineer</div>
              <div className="ssr-entry-sub">Coral Labs &middot; New York, NY</div>
            </div>
            <div className="ssr-entry-meta">2024.03 &mdash; PRES</div>
          </div>
          <ul className="ssr-bullets">
            <li>
              Migrated events pipeline to a horizontally-sharded Kafka cluster; cut p99 latency by
              three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages 60% with sharper alerting
              and runbooks.
            </li>
            <li>Mentored four engineers through L4 &rarr; L5 promotions.</li>
          </ul>
        </div>

        <div className="ssr-entry" data-print-entry="true">
          <div className="ssr-entry-head">
            <div className="ssr-entry-tag">REV-C</div>
            <div className="ssr-entry-body-head">
              <div className="ssr-entry-title">Software Engineer 2</div>
              <div className="ssr-entry-sub">Coral Labs &middot; New York, NY</div>
            </div>
            <div className="ssr-entry-meta">2022.08 &mdash; 2024.03</div>
          </div>
          <ul className="ssr-bullets">
            <li>
              Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across 40+ microservices.</li>
          </ul>
        </div>

        <div className="ssr-entry" data-print-entry="true">
          <div className="ssr-entry-head">
            <div className="ssr-entry-tag">REV-B</div>
            <div className="ssr-entry-body-head">
              <div className="ssr-entry-title">Software Engineer</div>
              <div className="ssr-entry-sub">Acme Inc &middot; Remote</div>
            </div>
            <div className="ssr-entry-meta">2020.01 &mdash; 2022.07</div>
          </div>
          <ul className="ssr-bullets">
            <li>
              Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and SDKs in
              three languages.
            </li>
            <li>Migrated legacy auth to a standalone identity service, unblocking SSO.</li>
            <li>Cut average build times from 11 minutes to 90 seconds.</li>
          </ul>
        </div>

        <div className="ssr-entry" data-print-entry="true">
          <div className="ssr-entry-head">
            <div className="ssr-entry-tag">REV-A</div>
            <div className="ssr-entry-body-head">
              <div className="ssr-entry-title">Software Engineer Intern</div>
              <div className="ssr-entry-sub">Bytework &middot; Remote</div>
            </div>
            <div className="ssr-entry-meta">2018.05 &mdash; 2018.08</div>
          </div>
          <ul className="ssr-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="ssr-section" data-print-entry="true">
        <div className="ssr-section-bar">
          <span className="ssr-bar-label">PROJECTS</span>
          <span className="ssr-bar-rule" aria-hidden="true" />
          <span className="ssr-bar-revtag">REV-C</span>
        </div>
        <div className="ssr-entry" data-print-entry="true">
          <div className="ssr-entry-head">
            <div className="ssr-entry-tag">OSS</div>
            <div className="ssr-entry-body-head">
              <div className="ssr-entry-title">Loomroute</div>
              <div className="ssr-entry-sub">loomroute.dev &middot; Go</div>
            </div>
            <div className="ssr-entry-meta">2024 &mdash; PRES</div>
          </div>
          <p className="ssr-prose">
            URL routing library used by ~200 small SaaS apps. Live since 2024.
          </p>
        </div>
        <div className="ssr-entry" data-print-entry="true">
          <div className="ssr-entry-head">
            <div className="ssr-entry-tag">OSS</div>
            <div className="ssr-entry-body-head">
              <div className="ssr-entry-title">Tinytrace</div>
              <div className="ssr-entry-sub">github.com/averypark/tinytrace &middot; Rust</div>
            </div>
            <div className="ssr-entry-meta">2023</div>
          </div>
          <p className="ssr-prose">
            Minimal distributed tracing library. Span model, OTLP export, ~3k lines.
          </p>
        </div>
      </section>

      <section className="ssr-section" data-print-entry="true">
        <div className="ssr-section-bar">
          <span className="ssr-bar-label">EDUCATION</span>
          <span className="ssr-bar-rule" aria-hidden="true" />
          <span className="ssr-bar-revtag">REV-A</span>
        </div>
        <dl className="ssr-grid">
          <div className="ssr-row">
            <dt>DEGREE</dt>
            <dd>B.S. Computer Science</dd>
          </div>
          <div className="ssr-row">
            <dt>SCHOOL</dt>
            <dd>Northern State University</dd>
          </div>
          <div className="ssr-row">
            <dt>YEARS</dt>
            <dd>2014 &mdash; 2018</dd>
          </div>
        </dl>
      </section>

      <section className="ssr-section" data-print-entry="true">
        <div className="ssr-section-bar">
          <span className="ssr-bar-label">SKILLS</span>
          <span className="ssr-bar-rule" aria-hidden="true" />
          <span className="ssr-bar-revtag">REV-D</span>
        </div>
        <dl className="ssr-grid">
          <div className="ssr-row">
            <dt>LANGUAGES</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="ssr-row">
            <dt>BACKEND</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="ssr-row">
            <dt>FRONTEND</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="ssr-row">
            <dt>PLATFORM</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
