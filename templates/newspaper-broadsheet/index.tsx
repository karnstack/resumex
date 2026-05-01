import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function NewspaperBroadsheet() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-newspaper-broadsheet">
      <header className="bs-mast">
        <div className="bs-kicker">
          <span>The Career Broadsheet</span>
          <span className="bs-kicker-dot">·</span>
          <span>Edition for May, MMXXVI</span>
        </div>
        <h1 className="bs-name">Avery Park</h1>
        <div className="bs-double-rule" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="bs-deck">A platform engineer, in long form.</div>
        <div className="bs-meta-row">
          <div className="bs-meta-cell">
            <span className="bs-meta-key">Desk</span>
            <span>Senior Software Engineer · Platform</span>
          </div>
          <div className="bs-meta-cell">
            <span className="bs-meta-key">Bureau</span>
            <span>New York, NY</span>
          </div>
          <div className="bs-meta-cell">
            <span className="bs-meta-key">Wire</span>
            <span>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </span>
          </div>
          <div className="bs-meta-cell">
            <span className="bs-meta-key">File</span>
            <span>
              <a href="https://averypark.dev">averypark.dev</a>
            </span>
          </div>
        </div>
      </header>

      <section className="bs-section bs-lede" data-print-entry="true">
        <h2 className="bs-h2">
          <span className="bs-h2-rule" />
          <span className="bs-h2-text">From the Desk</span>
          <span className="bs-h2-rule" />
        </h2>
        <p className="bs-lede-body">
          <span className="bs-dropcap">A</span>
          <strong>VERY PARK</strong> builds resilient backend systems and the platforms that run
          them. They prefer small, reversible changes and clear interfaces. Software, in their
          telling, should be boring in production and useful to its users.
        </p>
      </section>

      <section className="bs-section" data-print-entry="true">
        <h2 className="bs-h2">
          <span className="bs-h2-rule" />
          <span className="bs-h2-text">Experience</span>
          <span className="bs-h2-rule" />
        </h2>

        <article className="bs-entry" data-print-entry="true">
          <div className="bs-entry-head">
            <h3 className="bs-entry-title">Senior Software Engineer</h3>
            <div className="bs-entry-meta">Mar 2024 — Present · New York</div>
          </div>
          <div className="bs-entry-sub">Coral Labs</div>
          <ul className="bs-bullets">
            <li>
              Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99 latency
              by three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages 60% with sharper alerting
              and runbooks.
            </li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </article>

        <article className="bs-entry" data-print-entry="true">
          <div className="bs-entry-head">
            <h3 className="bs-entry-title">Software Engineer 2</h3>
            <div className="bs-entry-meta">Aug 2022 — Mar 2024 · New York</div>
          </div>
          <div className="bs-entry-sub">Coral Labs</div>
          <ul className="bs-bullets">
            <li>
              Designed the billing pipeline (12M events / day on Kafka + Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </article>

        <article className="bs-entry" data-print-entry="true">
          <div className="bs-entry-head">
            <h3 className="bs-entry-title">Software Engineer</h3>
            <div className="bs-entry-meta">Jan 2020 — Jul 2022 · Remote</div>
          </div>
          <div className="bs-entry-sub">Acme Inc</div>
          <ul className="bs-bullets">
            <li>
              Shipped the company's first public API with rate limiting, OAuth2, and SDKs in three
              languages.
            </li>
            <li>
              Migrated the legacy monolith's auth module to a standalone identity service,
              unblocking SSO.
            </li>
            <li>Cut average build times from eleven minutes to ninety seconds.</li>
          </ul>
        </article>

        <article className="bs-entry" data-print-entry="true">
          <div className="bs-entry-head">
            <h3 className="bs-entry-title">Software Engineer Intern</h3>
            <div className="bs-entry-meta">May 2018 — Aug 2018 · Remote</div>
          </div>
          <div className="bs-entry-sub">Bytework</div>
          <ul className="bs-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="bs-section" data-print-entry="true">
        <h2 className="bs-h2">
          <span className="bs-h2-rule" />
          <span className="bs-h2-text">Notable Projects</span>
          <span className="bs-h2-rule" />
        </h2>
        <article className="bs-entry">
          <div className="bs-entry-head">
            <h3 className="bs-entry-title">Loomroute</h3>
            <div className="bs-entry-meta">Go · Open Source</div>
          </div>
          <p>URL routing library used by ~200 small SaaS apps. Live since 2024.</p>
        </article>
        <article className="bs-entry">
          <div className="bs-entry-head">
            <h3 className="bs-entry-title">Tinytrace</h3>
            <div className="bs-entry-meta">Rust · Open Source</div>
          </div>
          <p>Minimal distributed tracing library — span model, OTLP export, ~3k lines.</p>
        </article>
      </section>

      <section className="bs-section bs-foot" data-print-entry="true">
        <div className="bs-foot-col">
          <h2 className="bs-h2 bs-h2-sm">
            <span className="bs-h2-rule" />
            <span className="bs-h2-text">Education</span>
            <span className="bs-h2-rule" />
          </h2>
          <div className="bs-foot-body">
            <strong>B.S. Computer Science</strong>
            <br />
            Northern State University · 2014 — 2018
          </div>
        </div>
        <div className="bs-foot-col bs-foot-col-wide">
          <h2 className="bs-h2 bs-h2-sm">
            <span className="bs-h2-rule" />
            <span className="bs-h2-text">Tools of the Trade</span>
            <span className="bs-h2-rule" />
          </h2>
          <div className="bs-foot-body">
            <em>Languages:</em> Go, TypeScript, Python, Rust. <em>Backend:</em> Postgres, Redis,
            Kafka, gRPC. <em>Frontend:</em> React, Next.js, Tailwind, Vite. <em>Platform:</em> AWS,
            Kubernetes, Docker, Terraform.
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
