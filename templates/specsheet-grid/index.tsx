import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function SpecsheetGrid() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-specsheet-grid">
      <header className="ssg-head" data-print-entry="true">
        <div className="ssg-stamp">
          <div className="ssg-stamp-cell">
            <span className="ssg-stamp-k">REV</span>
            <span className="ssg-stamp-v">A</span>
          </div>
          <div className="ssg-stamp-cell">
            <span className="ssg-stamp-k">DATE</span>
            <span className="ssg-stamp-v">2026.05</span>
          </div>
          <div className="ssg-stamp-cell">
            <span className="ssg-stamp-k">OWNER</span>
            <span className="ssg-stamp-v">A.PARK</span>
          </div>
          <div className="ssg-stamp-cell">
            <span className="ssg-stamp-k">DOC</span>
            <span className="ssg-stamp-v">CV-AP-26</span>
          </div>
          <div className="ssg-stamp-cell">
            <span className="ssg-stamp-k">PG</span>
            <span className="ssg-stamp-v">1/1</span>
          </div>
        </div>
        <div className="ssg-head-body">
          <div className="ssg-eyebrow">PRODUCT SPECIFICATION SHEET</div>
          <h1 className="ssg-name">Avery Park</h1>
          <div className="ssg-title">Senior Software Engineer &mdash; Platform</div>
        </div>
      </header>

      <section className="ssg-section" data-print-entry="true">
        <div className="ssg-section-bar">
          <span className="ssg-bar-num">A.00</span>
          <span className="ssg-bar-label">CONTACT</span>
        </div>
        <table className="ssg-table">
          <colgroup>
            <col className="ssg-col-num" />
            <col className="ssg-col-key" />
            <col className="ssg-col-val" />
          </colgroup>
          <tbody>
            <tr>
              <td>A.01</td>
              <td>EMAIL</td>
              <td>
                <a href="mailto:avery@example.com">avery@example.com</a>
              </td>
            </tr>
            <tr>
              <td>A.02</td>
              <td>LOCATION</td>
              <td>New York, NY</td>
            </tr>
            <tr>
              <td>A.03</td>
              <td>WEB</td>
              <td>
                <a href="https://averypark.dev">averypark.dev</a>
              </td>
            </tr>
            <tr>
              <td>A.04</td>
              <td>GITHUB</td>
              <td>
                <a href="https://github.com/averypark">github.com/averypark</a>
              </td>
            </tr>
            <tr>
              <td>A.05</td>
              <td>LINKEDIN</td>
              <td>
                <a href="https://linkedin.com/in/averypark">in/averypark</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="ssg-section" data-print-entry="true">
        <div className="ssg-section-bar">
          <span className="ssg-bar-num">B.00</span>
          <span className="ssg-bar-label">SUMMARY</span>
        </div>
        <table className="ssg-table">
          <colgroup>
            <col className="ssg-col-num" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>B.01</td>
              <td className="ssg-prose">
                Builds resilient backend systems and the platforms that run them. Prefers small,
                reversible changes and clear interfaces. Software should be boring in production and
                useful to its users.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="ssg-section" data-print-entry="true">
        <div className="ssg-section-bar">
          <span className="ssg-bar-num">C.00</span>
          <span className="ssg-bar-label">EXPERIENCE</span>
        </div>
        <table className="ssg-table ssg-xp">
          <colgroup>
            <col className="ssg-col-num" />
            <col className="ssg-col-key" />
            <col className="ssg-col-val" />
            <col className="ssg-col-meta" />
          </colgroup>
          <thead>
            <tr>
              <th>REF</th>
              <th>ROLE</th>
              <th>EMPLOYER / DETAIL</th>
              <th>PERIOD</th>
            </tr>
          </thead>
          <tbody>
            <tr className="ssg-xp-row">
              <td>C.01</td>
              <td>Senior Software Engineer</td>
              <td>Coral Labs &middot; New York, NY</td>
              <td>2024.03 &mdash; PRES</td>
            </tr>
            <tr>
              <td>C.01.1</td>
              <td>THROUGHPUT</td>
              <td>Events pipeline migrated to sharded Kafka; p99 latency cut 3x.</td>
              <td>&middot;</td>
            </tr>
            <tr>
              <td>C.01.2</td>
              <td>ON-CALL</td>
              <td>Pages reduced 60% over two quarters via better alerting.</td>
              <td>&middot;</td>
            </tr>
            <tr>
              <td>C.01.3</td>
              <td>MENTORSHIP</td>
              <td>Four engineers through L4 &rarr; L5 promotions.</td>
              <td>&middot;</td>
            </tr>

            <tr className="ssg-xp-row">
              <td>C.02</td>
              <td>Software Engineer 2</td>
              <td>Coral Labs &middot; New York, NY</td>
              <td>2022.08 &mdash; 2024.03</td>
            </tr>
            <tr>
              <td>C.02.1</td>
              <td>BUILT</td>
              <td>Billing pipeline (12M events/day on Kafka + Postgres) spec to prod.</td>
              <td>&middot;</td>
            </tr>
            <tr>
              <td>C.02.2</td>
              <td>BUILT</td>
              <td>Internal feature-flag service used across 40+ microservices.</td>
              <td>&middot;</td>
            </tr>

            <tr className="ssg-xp-row">
              <td>C.03</td>
              <td>Software Engineer</td>
              <td>Acme Inc &middot; Remote</td>
              <td>2020.01 &mdash; 2022.07</td>
            </tr>
            <tr>
              <td>C.03.1</td>
              <td>SHIPPED</td>
              <td>First public API. Rate limiting, OAuth2, SDKs in three languages.</td>
              <td>&middot;</td>
            </tr>
            <tr>
              <td>C.03.2</td>
              <td>MIGRATED</td>
              <td>Legacy auth to standalone identity service; unblocked SSO.</td>
              <td>&middot;</td>
            </tr>
            <tr>
              <td>C.03.3</td>
              <td>BUILD TIME</td>
              <td>11 min &rarr; 90s via parallelized test matrix.</td>
              <td>&middot;</td>
            </tr>

            <tr className="ssg-xp-row">
              <td>C.04</td>
              <td>Software Engineer Intern</td>
              <td>Bytework &middot; Remote</td>
              <td>2018.05 &mdash; 2018.08</td>
            </tr>
            <tr>
              <td>C.04.1</td>
              <td>BUILT</td>
              <td>Internal log aggregator in Go on top of Kafka. Earned return offer.</td>
              <td>&middot;</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="ssg-section" data-print-entry="true">
        <div className="ssg-section-bar">
          <span className="ssg-bar-num">D.00</span>
          <span className="ssg-bar-label">PROJECTS</span>
        </div>
        <table className="ssg-table">
          <colgroup>
            <col className="ssg-col-num" />
            <col className="ssg-col-key" />
            <col className="ssg-col-val" />
            <col className="ssg-col-meta" />
          </colgroup>
          <thead>
            <tr>
              <th>REF</th>
              <th>NAME</th>
              <th>SCOPE</th>
              <th>STACK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>D.01</td>
              <td>Loomroute</td>
              <td>URL routing library used by ~200 small SaaS apps. Live since 2024.</td>
              <td>Go &middot; OSS</td>
            </tr>
            <tr>
              <td>D.02</td>
              <td>Tinytrace</td>
              <td>Distributed tracing library. Span model, OTLP export, ~3k LOC.</td>
              <td>Rust &middot; OSS</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="ssg-section" data-print-entry="true">
        <div className="ssg-section-bar">
          <span className="ssg-bar-num">E.00</span>
          <span className="ssg-bar-label">EDUCATION</span>
        </div>
        <table className="ssg-table">
          <colgroup>
            <col className="ssg-col-num" />
            <col className="ssg-col-key" />
            <col className="ssg-col-val" />
            <col className="ssg-col-meta" />
          </colgroup>
          <tbody>
            <tr>
              <td>E.01</td>
              <td>B.S. Computer Science</td>
              <td>Northern State University</td>
              <td>2014 &mdash; 2018</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="ssg-section" data-print-entry="true">
        <div className="ssg-section-bar">
          <span className="ssg-bar-num">F.00</span>
          <span className="ssg-bar-label">SKILLS</span>
        </div>
        <table className="ssg-table">
          <colgroup>
            <col className="ssg-col-num" />
            <col className="ssg-col-key" />
            <col className="ssg-col-val" />
          </colgroup>
          <tbody>
            <tr>
              <td>F.01</td>
              <td>LANGUAGES</td>
              <td>Go, TypeScript, Python, Rust</td>
            </tr>
            <tr>
              <td>F.02</td>
              <td>BACKEND</td>
              <td>Postgres, Redis, Kafka, gRPC</td>
            </tr>
            <tr>
              <td>F.03</td>
              <td>FRONTEND</td>
              <td>React, Next.js, Tailwind, Vite</td>
            </tr>
            <tr>
              <td>F.04</td>
              <td>PLATFORM</td>
              <td>AWS, Kubernetes, Docker, Terraform</td>
            </tr>
          </tbody>
        </table>
      </section>
    </PageFrame>
  )
}
