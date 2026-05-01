import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

type TabsProps = {
  active: string
  items: string[]
}

function Tabs({ active, items }: TabsProps) {
  return (
    <div className="sst-tabs" role="tablist" aria-hidden="true">
      {items.map((label) => {
        const isActive = label === active
        return (
          <span key={label} className={isActive ? 'sst-tab sst-tab-active' : 'sst-tab'} role="tab">
            {label}
          </span>
        )
      })}
    </div>
  )
}

const TAB_ITEMS = ['EXPERIENCE', 'PROJECTS', 'EDUCATION', 'SKILLS']

export default function SpecsheetTab() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-specsheet-tab">
      <header className="sst-head" data-print-entry="true">
        <div className="sst-stamp">
          <div className="sst-stamp-cell">
            <span className="sst-k">REV</span>
            <span className="sst-v">A</span>
          </div>
          <div className="sst-stamp-cell">
            <span className="sst-k">DATE</span>
            <span className="sst-v">2026.05</span>
          </div>
          <div className="sst-stamp-cell">
            <span className="sst-k">OWNER</span>
            <span className="sst-v">A.PARK</span>
          </div>
          <div className="sst-stamp-cell">
            <span className="sst-k">PG</span>
            <span className="sst-v">1/1</span>
          </div>
        </div>
        <div className="sst-head-body">
          <div className="sst-eyebrow">SUBJECT FILE / PRODUCT SPEC SHEET</div>
          <h1 className="sst-name">Avery Park</h1>
          <div className="sst-title">Senior Software Engineer &mdash; Platform</div>
          <dl className="sst-contact">
            <div>
              <dt>EMAIL</dt>
              <dd>
                <a href="mailto:avery@example.com">avery@example.com</a>
              </dd>
            </div>
            <div>
              <dt>LOC</dt>
              <dd>New York, NY</dd>
            </div>
            <div>
              <dt>WEB</dt>
              <dd>
                <a href="https://averypark.dev">averypark.dev</a>
              </dd>
            </div>
            <div>
              <dt>GIT</dt>
              <dd>
                <a href="https://github.com/averypark">github.com/averypark</a>
              </dd>
            </div>
            <div>
              <dt>LIN</dt>
              <dd>
                <a href="https://linkedin.com/in/averypark">in/averypark</a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="sst-section sst-summary" data-print-entry="true">
        <div className="sst-section-bar">
          <span className="sst-bar-label">SUMMARY</span>
          <span className="sst-bar-rule" aria-hidden="true" />
        </div>
        <p className="sst-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="sst-section" data-print-entry="true">
        <Tabs active="EXPERIENCE" items={TAB_ITEMS} />
        <div className="sst-panel">
          <div className="sst-entry" data-print-entry="true">
            <div className="sst-entry-head">
              <div>
                <div className="sst-entry-title">Senior Software Engineer</div>
                <div className="sst-entry-sub">Coral Labs &middot; New York, NY</div>
              </div>
              <div className="sst-entry-meta">2024.03 &mdash; PRES</div>
            </div>
            <ul className="sst-bullets">
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

          <div className="sst-entry" data-print-entry="true">
            <div className="sst-entry-head">
              <div>
                <div className="sst-entry-title">Software Engineer 2</div>
                <div className="sst-entry-sub">Coral Labs &middot; New York, NY</div>
              </div>
              <div className="sst-entry-meta">2022.08 &mdash; 2024.03</div>
            </div>
            <ul className="sst-bullets">
              <li>
                Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
                production.
              </li>
              <li>Built the internal feature-flag service used across 40+ microservices.</li>
            </ul>
          </div>

          <div className="sst-entry" data-print-entry="true">
            <div className="sst-entry-head">
              <div>
                <div className="sst-entry-title">Software Engineer</div>
                <div className="sst-entry-sub">Acme Inc &middot; Remote</div>
              </div>
              <div className="sst-entry-meta">2020.01 &mdash; 2022.07</div>
            </div>
            <ul className="sst-bullets">
              <li>
                Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and SDKs in
                three languages.
              </li>
              <li>Migrated legacy auth to a standalone identity service, unblocking SSO.</li>
              <li>Cut average build times from 11 minutes to 90 seconds.</li>
            </ul>
          </div>

          <div className="sst-entry" data-print-entry="true">
            <div className="sst-entry-head">
              <div>
                <div className="sst-entry-title">Software Engineer Intern</div>
                <div className="sst-entry-sub">Bytework &middot; Remote</div>
              </div>
              <div className="sst-entry-meta">2018.05 &mdash; 2018.08</div>
            </div>
            <ul className="sst-bullets">
              <li>
                Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sst-section" data-print-entry="true">
        <Tabs active="PROJECTS" items={TAB_ITEMS} />
        <div className="sst-panel">
          <div className="sst-entry" data-print-entry="true">
            <div className="sst-entry-head">
              <div>
                <div className="sst-entry-title">Loomroute</div>
                <div className="sst-entry-sub">loomroute.dev &middot; Go</div>
              </div>
              <div className="sst-entry-meta">OSS</div>
            </div>
            <p className="sst-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </div>
          <div className="sst-entry" data-print-entry="true">
            <div className="sst-entry-head">
              <div>
                <div className="sst-entry-title">Tinytrace</div>
                <div className="sst-entry-sub">github.com/averypark/tinytrace &middot; Rust</div>
              </div>
              <div className="sst-entry-meta">OSS</div>
            </div>
            <p className="sst-prose">
              Minimal distributed tracing library. Span model, OTLP export, ~3k lines.
            </p>
          </div>
        </div>
      </section>

      <section className="sst-section" data-print-entry="true">
        <Tabs active="EDUCATION" items={TAB_ITEMS} />
        <div className="sst-panel">
          <dl className="sst-grid">
            <div className="sst-row">
              <dt>DEGREE</dt>
              <dd>B.S. Computer Science</dd>
            </div>
            <div className="sst-row">
              <dt>SCHOOL</dt>
              <dd>Northern State University</dd>
            </div>
            <div className="sst-row">
              <dt>YEARS</dt>
              <dd>2014 &mdash; 2018</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sst-section" data-print-entry="true">
        <Tabs active="SKILLS" items={TAB_ITEMS} />
        <div className="sst-panel">
          <dl className="sst-grid">
            <div className="sst-row">
              <dt>LANGUAGES</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div className="sst-row">
              <dt>BACKEND</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div className="sst-row">
              <dt>FRONTEND</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
            </div>
            <div className="sst-row">
              <dt>PLATFORM</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
