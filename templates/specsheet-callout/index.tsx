import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function SpecsheetCallout() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-specsheet-callout">
      <header className="ssc-head" data-print-entry="true">
        <div className="ssc-head-left">
          <div className="ssc-eyebrow">PRODUCT SPEC SHEET / CV-AP-2026</div>
          <h1 className="ssc-name">Avery Park</h1>
          <div className="ssc-title">Senior Software Engineer &mdash; Platform</div>
        </div>
        <div className="ssc-head-right">
          <div className="ssc-stamp">
            <span className="ssc-k">REV</span>
            <span className="ssc-v">A</span>
          </div>
          <div className="ssc-stamp">
            <span className="ssc-k">DATE</span>
            <span className="ssc-v">2026.05</span>
          </div>
          <div className="ssc-stamp">
            <span className="ssc-k">OWNER</span>
            <span className="ssc-v">A.PARK</span>
          </div>
          <div className="ssc-stamp">
            <span className="ssc-k">PG</span>
            <span className="ssc-v">1/1</span>
          </div>
        </div>
      </header>

      <section className="ssc-section ssc-info" data-print-entry="true">
        <div className="ssc-section-bar">
          <span className="ssc-bar-label">CONTACT</span>
          <span className="ssc-bar-rule" aria-hidden="true" />
        </div>
        <dl className="ssc-grid">
          <div className="ssc-row">
            <dt>EMAIL</dt>
            <dd>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </dd>
          </div>
          <div className="ssc-row">
            <dt>LOCATION</dt>
            <dd>New York, NY</dd>
          </div>
          <div className="ssc-row">
            <dt>WEB</dt>
            <dd>
              <a href="https://averypark.dev">averypark.dev</a>
            </dd>
          </div>
          <div className="ssc-row">
            <dt>GITHUB</dt>
            <dd>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </dd>
          </div>
          <div className="ssc-row">
            <dt>LINKEDIN</dt>
            <dd>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="ssc-section" data-print-entry="true">
        <div className="ssc-section-bar">
          <span className="ssc-bar-label">SUMMARY</span>
          <span className="ssc-bar-rule" aria-hidden="true" />
        </div>
        <div className="ssc-callout ssc-callout-soft">
          <div className="ssc-callout-tag">
            <span className="ssc-tag-k">NOTE</span>
            <span className="ssc-tag-v">SUMMARY</span>
          </div>
          <p className="ssc-callout-body">
            Builds resilient backend systems and the platforms that run them. Prefers small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </div>
      </section>

      <section className="ssc-section" data-print-entry="true">
        <div className="ssc-section-bar">
          <span className="ssc-bar-label">EXPERIENCE</span>
          <span className="ssc-bar-rule" aria-hidden="true" />
        </div>

        <div className="ssc-callout" data-print-entry="true">
          <div className="ssc-callout-tag">
            <span className="ssc-tag-k">ROLE</span>
            <span className="ssc-tag-v">01</span>
          </div>
          <div className="ssc-callout-body">
            <div className="ssc-entry-head">
              <div>
                <div className="ssc-entry-title">Senior Software Engineer</div>
                <div className="ssc-entry-sub">Coral Labs &middot; New York, NY</div>
              </div>
              <div className="ssc-entry-meta">2024.03 &mdash; PRES</div>
            </div>
            <ul className="ssc-bullets">
              <li>
                <span className="ssc-li-k">THROUGHPUT</span>
                <span className="ssc-li-v">
                  Events pipeline migrated to sharded Kafka; p99 latency cut 3x.
                </span>
              </li>
              <li>
                <span className="ssc-li-k">ON-CALL</span>
                <span className="ssc-li-v">
                  Pages reduced 60% over two quarters via better alerting and runbooks.
                </span>
              </li>
              <li>
                <span className="ssc-li-k">MENTORSHIP</span>
                <span className="ssc-li-v">Four engineers through L4 &rarr; L5 promotions.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="ssc-callout" data-print-entry="true">
          <div className="ssc-callout-tag">
            <span className="ssc-tag-k">ROLE</span>
            <span className="ssc-tag-v">02</span>
          </div>
          <div className="ssc-callout-body">
            <div className="ssc-entry-head">
              <div>
                <div className="ssc-entry-title">Software Engineer 2</div>
                <div className="ssc-entry-sub">Coral Labs &middot; New York, NY</div>
              </div>
              <div className="ssc-entry-meta">2022.08 &mdash; 2024.03</div>
            </div>
            <ul className="ssc-bullets">
              <li>
                <span className="ssc-li-k">BUILT</span>
                <span className="ssc-li-v">
                  Billing pipeline (12M events/day on Kafka + Postgres) spec to prod.
                </span>
              </li>
              <li>
                <span className="ssc-li-k">BUILT</span>
                <span className="ssc-li-v">
                  Internal feature-flag service used across 40+ microservices.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="ssc-callout" data-print-entry="true">
          <div className="ssc-callout-tag">
            <span className="ssc-tag-k">ROLE</span>
            <span className="ssc-tag-v">03</span>
          </div>
          <div className="ssc-callout-body">
            <div className="ssc-entry-head">
              <div>
                <div className="ssc-entry-title">Software Engineer</div>
                <div className="ssc-entry-sub">Acme Inc &middot; Remote</div>
              </div>
              <div className="ssc-entry-meta">2020.01 &mdash; 2022.07</div>
            </div>
            <ul className="ssc-bullets">
              <li>
                <span className="ssc-li-k">SHIPPED</span>
                <span className="ssc-li-v">
                  First public API. Rate limiting, OAuth2, SDKs in three languages.
                </span>
              </li>
              <li>
                <span className="ssc-li-k">MIGRATED</span>
                <span className="ssc-li-v">
                  Legacy auth to standalone identity service; unblocked SSO.
                </span>
              </li>
              <li>
                <span className="ssc-li-k">BUILD TIME</span>
                <span className="ssc-li-v">11 min &rarr; 90s via parallelized test matrix.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="ssc-callout" data-print-entry="true">
          <div className="ssc-callout-tag">
            <span className="ssc-tag-k">ROLE</span>
            <span className="ssc-tag-v">04</span>
          </div>
          <div className="ssc-callout-body">
            <div className="ssc-entry-head">
              <div>
                <div className="ssc-entry-title">Software Engineer Intern</div>
                <div className="ssc-entry-sub">Bytework &middot; Remote</div>
              </div>
              <div className="ssc-entry-meta">2018.05 &mdash; 2018.08</div>
            </div>
            <ul className="ssc-bullets">
              <li>
                <span className="ssc-li-k">BUILT</span>
                <span className="ssc-li-v">
                  Internal log aggregator in Go on top of Kafka. Earned a return offer.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ssc-section" data-print-entry="true">
        <div className="ssc-section-bar">
          <span className="ssc-bar-label">PROJECTS</span>
          <span className="ssc-bar-rule" aria-hidden="true" />
        </div>
        <div className="ssc-callout-row">
          <div className="ssc-callout ssc-callout-half" data-print-entry="true">
            <div className="ssc-callout-tag">
              <span className="ssc-tag-k">PROJ</span>
              <span className="ssc-tag-v">01</span>
            </div>
            <div className="ssc-callout-body">
              <div className="ssc-entry-title">Loomroute</div>
              <div className="ssc-entry-sub">Go &middot; OSS &middot; loomroute.dev</div>
              <p className="ssc-prose">
                URL routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </div>
          </div>
          <div className="ssc-callout ssc-callout-half" data-print-entry="true">
            <div className="ssc-callout-tag">
              <span className="ssc-tag-k">PROJ</span>
              <span className="ssc-tag-v">02</span>
            </div>
            <div className="ssc-callout-body">
              <div className="ssc-entry-title">Tinytrace</div>
              <div className="ssc-entry-sub">Rust &middot; OSS</div>
              <p className="ssc-prose">
                Distributed tracing library. Span model, OTLP export, ~3k LOC.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ssc-section ssc-bottom" data-print-entry="true">
        <div className="ssc-bottom-grid">
          <div className="ssc-bottom-cell">
            <div className="ssc-section-bar">
              <span className="ssc-bar-label">EDUCATION</span>
              <span className="ssc-bar-rule" aria-hidden="true" />
            </div>
            <dl className="ssc-grid">
              <div className="ssc-row">
                <dt>DEGREE</dt>
                <dd>B.S. Computer Science</dd>
              </div>
              <div className="ssc-row">
                <dt>SCHOOL</dt>
                <dd>Northern State University</dd>
              </div>
              <div className="ssc-row">
                <dt>YEARS</dt>
                <dd>2014 &mdash; 2018</dd>
              </div>
            </dl>
          </div>
          <div className="ssc-bottom-cell">
            <div className="ssc-section-bar">
              <span className="ssc-bar-label">SKILLS</span>
              <span className="ssc-bar-rule" aria-hidden="true" />
            </div>
            <dl className="ssc-grid">
              <div className="ssc-row">
                <dt>LANG</dt>
                <dd>Go, TypeScript, Python, Rust</dd>
              </div>
              <div className="ssc-row">
                <dt>BACK</dt>
                <dd>Postgres, Redis, Kafka, gRPC</dd>
              </div>
              <div className="ssc-row">
                <dt>FRNT</dt>
                <dd>React, Next.js, Tailwind, Vite</dd>
              </div>
              <div className="ssc-row">
                <dt>PLAT</dt>
                <dd>AWS, K8s, Docker, Terraform</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
