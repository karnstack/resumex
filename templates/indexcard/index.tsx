import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function IndexCard() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-indexcard">
      <div className="ic-tabband" aria-hidden="true">
        <span className="ic-tab">CATALOG</span>
        <span className="ic-tab-meta">SUBJECT FILE / ENGINEERING</span>
      </div>

      <header className="ic-card">
        <div className="ic-card-corner" aria-hidden="true" />
        <div className="ic-card-row">
          <div className="ic-name-block">
            <div className="ic-eyebrow">PARK, AVERY · CARD 01 OF 01</div>
            <h1 className="ic-name">Avery Park</h1>
            <div className="ic-title">Senior Software Engineer — Platform</div>
          </div>
          <dl className="ic-contact">
            <div className="ic-contact-row">
              <dt>EMAIL</dt>
              <dd>
                <a href="mailto:avery@example.com">avery@example.com</a>
              </dd>
            </div>
            <div className="ic-contact-row">
              <dt>LOC.</dt>
              <dd>New York, NY</dd>
            </div>
            <div className="ic-contact-row">
              <dt>SITE</dt>
              <dd>
                <a href="https://averypark.dev">averypark.dev</a>
              </dd>
            </div>
            <div className="ic-contact-row">
              <dt>GH</dt>
              <dd>
                <a href="https://github.com/averypark">github.com/averypark</a>
              </dd>
            </div>
            <div className="ic-contact-row">
              <dt>IN</dt>
              <dd>
                <a href="https://linkedin.com/in/averypark">in/averypark</a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="ic-section" data-print-entry="true">
        <div className="ic-section-head">
          <span className="ic-section-num">001</span>
          <h2>Subject Summary</h2>
        </div>
        <p className="ic-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="ic-section" data-print-entry="true">
        <div className="ic-section-head">
          <span className="ic-section-num">002</span>
          <h2>Experience</h2>
        </div>

        <div className="ic-entry" data-print-entry="true">
          <div className="ic-entry-head">
            <div>
              <span className="ic-entry-title">Senior Software Engineer</span>
              <span className="ic-entry-org"> · Coral Labs</span>
            </div>
            <span className="ic-entry-date">2024 — PRES.</span>
          </div>
          <div className="ic-entry-meta">New York, NY</div>
          <ul className="ic-bullets">
            <li>
              Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99 latency
              by three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages 60% via sharper alerting and
              runbooks.
            </li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </div>

        <div className="ic-entry" data-print-entry="true">
          <div className="ic-entry-head">
            <div>
              <span className="ic-entry-title">Software Engineer 2</span>
              <span className="ic-entry-org"> · Coral Labs</span>
            </div>
            <span className="ic-entry-date">2022 — 2024</span>
          </div>
          <div className="ic-entry-meta">New York, NY</div>
          <ul className="ic-bullets">
            <li>
              Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </div>

        <div className="ic-entry" data-print-entry="true">
          <div className="ic-entry-head">
            <div>
              <span className="ic-entry-title">Software Engineer</span>
              <span className="ic-entry-org"> · Acme Inc</span>
            </div>
            <span className="ic-entry-date">2020 — 2022</span>
          </div>
          <div className="ic-entry-meta">Remote</div>
          <ul className="ic-bullets">
            <li>
              Shipped the company's first public API with rate limiting, OAuth2, and SDKs in three
              languages.
            </li>
            <li>
              Migrated the legacy monolith's auth module to a standalone identity service,
              unblocking SSO.
            </li>
            <li>Cut average build times from 11 minutes to 90 seconds.</li>
          </ul>
        </div>

        <div className="ic-entry" data-print-entry="true">
          <div className="ic-entry-head">
            <div>
              <span className="ic-entry-title">Software Engineer Intern</span>
              <span className="ic-entry-org"> · Bytework</span>
            </div>
            <span className="ic-entry-date">2018</span>
          </div>
          <div className="ic-entry-meta">Remote</div>
          <ul className="ic-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="ic-section" data-print-entry="true">
        <div className="ic-section-head">
          <span className="ic-section-num">003</span>
          <h2>Cross-References</h2>
        </div>
        <div className="ic-entry" data-print-entry="true">
          <div className="ic-entry-head">
            <div>
              <span className="ic-entry-title">Loomroute</span>
              <span className="ic-entry-org"> · loomroute.dev</span>
            </div>
            <span className="ic-entry-date">GO · OSS</span>
          </div>
          <p className="ic-prose">
            URL routing library used by ~200 small SaaS apps. Live since 2024.
          </p>
        </div>
        <div className="ic-entry" data-print-entry="true">
          <div className="ic-entry-head">
            <div>
              <span className="ic-entry-title">Tinytrace</span>
              <span className="ic-entry-org"> · github.com/averypark/tinytrace</span>
            </div>
            <span className="ic-entry-date">RUST · OSS</span>
          </div>
          <p className="ic-prose">
            Minimal distributed tracing library — span model, OTLP export, ~3k lines.
          </p>
        </div>
      </section>

      <section className="ic-section" data-print-entry="true">
        <div className="ic-section-head">
          <span className="ic-section-num">004</span>
          <h2>Education</h2>
        </div>
        <div className="ic-entry" data-print-entry="true">
          <div className="ic-entry-head">
            <div>
              <span className="ic-entry-title">B.S. Computer Science</span>
              <span className="ic-entry-org"> · Northern State University</span>
            </div>
            <span className="ic-entry-date">2014 — 2018</span>
          </div>
        </div>
      </section>

      <section className="ic-section" data-print-entry="true">
        <div className="ic-section-head">
          <span className="ic-section-num">005</span>
          <h2>Skills</h2>
        </div>
        <dl className="ic-skills">
          <div className="ic-skill-row">
            <dt>LANG</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="ic-skill-row">
            <dt>BACK</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="ic-skill-row">
            <dt>FRONT</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="ic-skill-row">
            <dt>PLAT</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>

      <footer className="ic-footer" aria-hidden="true">
        <span>FILED 2026</span>
        <span>·</span>
        <span>RESUMEX CATALOG</span>
        <span>·</span>
        <span>CARD 01/01</span>
      </footer>
    </PageFrame>
  )
}
