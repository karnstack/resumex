import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Specsheet() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-specsheet">
      <header className="ss-head" data-print-entry="true">
        <div className="ss-head-stamp">
          <span className="ss-stamp-k">REV</span>
          <span className="ss-stamp-v">A</span>
          <span className="ss-stamp-sep" aria-hidden="true">
            ·
          </span>
          <span className="ss-stamp-k">DATE</span>
          <span className="ss-stamp-v">2026.05</span>
          <span className="ss-stamp-sep" aria-hidden="true">
            ·
          </span>
          <span className="ss-stamp-k">OWNER</span>
          <span className="ss-stamp-v">A.PARK</span>
          <span className="ss-stamp-sep" aria-hidden="true">
            ·
          </span>
          <span className="ss-stamp-k">PG</span>
          <span className="ss-stamp-v">1/1</span>
        </div>
        <div className="ss-head-body">
          <div className="ss-eyebrow">PRODUCT SPEC SHEET / CV-2026-05</div>
          <h1 className="ss-name">Avery Park</h1>
          <div className="ss-title">Senior Software Engineer &mdash; Platform</div>
        </div>
      </header>

      <section className="ss-section ss-info" data-print-entry="true">
        <div className="ss-section-bar">
          <span className="ss-bar-tag">A</span>
          <span className="ss-bar-label">SUBJECT INFO</span>
          <span className="ss-bar-rule" aria-hidden="true" />
        </div>
        <dl className="ss-grid">
          <div className="ss-row">
            <dt>NAME</dt>
            <dd>Avery Park</dd>
          </div>
          <div className="ss-row">
            <dt>ROLE</dt>
            <dd>Senior Software Engineer (Platform)</dd>
          </div>
          <div className="ss-row">
            <dt>EMAIL</dt>
            <dd>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </dd>
          </div>
          <div className="ss-row">
            <dt>LOCATION</dt>
            <dd>New York, NY</dd>
          </div>
          <div className="ss-row">
            <dt>WEB</dt>
            <dd>
              <a href="https://averypark.dev">averypark.dev</a>
            </dd>
          </div>
          <div className="ss-row">
            <dt>GITHUB</dt>
            <dd>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </dd>
          </div>
          <div className="ss-row">
            <dt>LINKEDIN</dt>
            <dd>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="ss-section" data-print-entry="true">
        <div className="ss-section-bar">
          <span className="ss-bar-tag">B</span>
          <span className="ss-bar-label">SUMMARY</span>
          <span className="ss-bar-rule" aria-hidden="true" />
        </div>
        <p className="ss-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="ss-section" data-print-entry="true">
        <div className="ss-section-bar">
          <span className="ss-bar-tag">C</span>
          <span className="ss-bar-label">EXPERIENCE</span>
          <span className="ss-bar-rule" aria-hidden="true" />
        </div>

        <div className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div>
              <div className="ss-entry-title">Senior Software Engineer</div>
              <div className="ss-entry-sub">Coral Labs &middot; New York, NY</div>
            </div>
            <div className="ss-entry-meta">2024.03 &mdash; PRES</div>
          </div>
          <dl className="ss-grid ss-grid-tight">
            <div className="ss-row">
              <dt>SCOPE</dt>
              <dd>Events pipeline, on-call platform, mentorship.</dd>
            </div>
            <div className="ss-row">
              <dt>THROUGHPUT</dt>
              <dd>p99 latency reduced 3x via horizontally-sharded Kafka cluster.</dd>
            </div>
            <div className="ss-row">
              <dt>ON-CALL PAGES</dt>
              <dd>&minus;60% over two quarters via sharper alerting and runbooks.</dd>
            </div>
            <div className="ss-row">
              <dt>MENTORSHIP</dt>
              <dd>Four engineers through L4 &rarr; L5 promotions.</dd>
            </div>
          </dl>
        </div>

        <div className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div>
              <div className="ss-entry-title">Software Engineer 2</div>
              <div className="ss-entry-sub">Coral Labs &middot; New York, NY</div>
            </div>
            <div className="ss-entry-meta">2022.08 &mdash; 2024.03</div>
          </div>
          <dl className="ss-grid ss-grid-tight">
            <div className="ss-row">
              <dt>BUILT</dt>
              <dd>Billing pipeline (12M events/day on Kafka + Postgres), spec to prod.</dd>
            </div>
            <div className="ss-row">
              <dt>BUILT</dt>
              <dd>Internal feature-flag service used across 40+ microservices.</dd>
            </div>
          </dl>
        </div>

        <div className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div>
              <div className="ss-entry-title">Software Engineer</div>
              <div className="ss-entry-sub">Acme Inc &middot; Remote</div>
            </div>
            <div className="ss-entry-meta">2020.01 &mdash; 2022.07</div>
          </div>
          <dl className="ss-grid ss-grid-tight">
            <div className="ss-row">
              <dt>SHIPPED</dt>
              <dd>First public API. Rate limiting, OAuth2, SDKs in three languages.</dd>
            </div>
            <div className="ss-row">
              <dt>MIGRATED</dt>
              <dd>Legacy auth to standalone identity service; unblocked SSO.</dd>
            </div>
            <div className="ss-row">
              <dt>BUILD TIME</dt>
              <dd>11 min &rarr; 90s via parallelized test matrix.</dd>
            </div>
          </dl>
        </div>

        <div className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div>
              <div className="ss-entry-title">Software Engineer Intern</div>
              <div className="ss-entry-sub">Bytework &middot; Remote</div>
            </div>
            <div className="ss-entry-meta">2018.05 &mdash; 2018.08</div>
          </div>
          <dl className="ss-grid ss-grid-tight">
            <div className="ss-row">
              <dt>BUILT</dt>
              <dd>Internal log aggregator in Go on top of Kafka. Earned return offer.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ss-section" data-print-entry="true">
        <div className="ss-section-bar">
          <span className="ss-bar-tag">D</span>
          <span className="ss-bar-label">PROJECTS</span>
          <span className="ss-bar-rule" aria-hidden="true" />
        </div>
        <div className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div>
              <div className="ss-entry-title">Loomroute</div>
              <div className="ss-entry-sub">loomroute.dev</div>
            </div>
            <div className="ss-entry-meta">GO &middot; OSS</div>
          </div>
          <dl className="ss-grid ss-grid-tight">
            <div className="ss-row">
              <dt>SCOPE</dt>
              <dd>URL routing library used by ~200 small SaaS apps. Live since 2024.</dd>
            </div>
          </dl>
        </div>
        <div className="ss-entry" data-print-entry="true">
          <div className="ss-entry-head">
            <div>
              <div className="ss-entry-title">Tinytrace</div>
              <div className="ss-entry-sub">github.com/averypark/tinytrace</div>
            </div>
            <div className="ss-entry-meta">RUST &middot; OSS</div>
          </div>
          <dl className="ss-grid ss-grid-tight">
            <div className="ss-row">
              <dt>SCOPE</dt>
              <dd>Minimal distributed tracing library. Span model, OTLP export, ~3k LOC.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ss-section" data-print-entry="true">
        <div className="ss-section-bar">
          <span className="ss-bar-tag">E</span>
          <span className="ss-bar-label">EDUCATION</span>
          <span className="ss-bar-rule" aria-hidden="true" />
        </div>
        <dl className="ss-grid">
          <div className="ss-row">
            <dt>DEGREE</dt>
            <dd>B.S. Computer Science</dd>
          </div>
          <div className="ss-row">
            <dt>SCHOOL</dt>
            <dd>Northern State University</dd>
          </div>
          <div className="ss-row">
            <dt>YEARS</dt>
            <dd>2014 &mdash; 2018</dd>
          </div>
        </dl>
      </section>

      <section className="ss-section" data-print-entry="true">
        <div className="ss-section-bar">
          <span className="ss-bar-tag">F</span>
          <span className="ss-bar-label">SKILLS</span>
          <span className="ss-bar-rule" aria-hidden="true" />
        </div>
        <dl className="ss-grid">
          <div className="ss-row">
            <dt>LANGUAGES</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="ss-row">
            <dt>BACKEND</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="ss-row">
            <dt>FRONTEND</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="ss-row">
            <dt>PLATFORM</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
