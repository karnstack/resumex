import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function IndexCardStamp() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-indexcard-stamp">
      <header className="ics-head">
        <div className="ics-head-inner">
          <div className="ics-head-left">
            <div className="ics-eyebrow">PARK, AVERY · CAT. NO. 658.4</div>
            <h1 className="ics-name">Avery Park</h1>
            <div className="ics-title">Senior Software Engineer — Platform</div>
          </div>
          <div className="ics-stamp" aria-hidden="true">
            <span className="ics-stamp-line ics-stamp-bracket-l">[</span>
            <span className="ics-stamp-mid">
              <span>ENT'D</span>
              <span>MAY 2026</span>
            </span>
            <span className="ics-stamp-line ics-stamp-bracket-r">]</span>
          </div>
        </div>
        <div className="ics-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="ics-sep">·</span>
          <span>New York, NY</span>
          <span className="ics-sep">·</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="ics-sep">·</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="ics-sep">·</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <section className="ics-section" data-print-entry="true">
        <h2>Subject Summary</h2>
        <p className="ics-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
        <div className="ics-mini-stamp" aria-hidden="true">
          FILED 02·MAY·26
        </div>
      </section>

      <section className="ics-section" data-print-entry="true">
        <h2>Experience</h2>

        <div className="ics-entry" data-print-entry="true">
          <div className="ics-entry-head">
            <div>
              <span className="ics-role">Senior Software Engineer</span>
              <span className="ics-org"> · Coral Labs · NYC</span>
            </div>
            <span className="ics-date">2024 — PRES.</span>
          </div>
          <ul className="ics-bullets">
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
          <div className="ics-mini-stamp" aria-hidden="true">
            RECVD MAR·24
          </div>
        </div>

        <div className="ics-entry" data-print-entry="true">
          <div className="ics-entry-head">
            <div>
              <span className="ics-role">Software Engineer 2</span>
              <span className="ics-org"> · Coral Labs · NYC</span>
            </div>
            <span className="ics-date">2022 — 2024</span>
          </div>
          <ul className="ics-bullets">
            <li>
              Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
          <div className="ics-mini-stamp" aria-hidden="true">
            RECVD AUG·22
          </div>
        </div>

        <div className="ics-entry" data-print-entry="true">
          <div className="ics-entry-head">
            <div>
              <span className="ics-role">Software Engineer</span>
              <span className="ics-org"> · Acme Inc · Remote</span>
            </div>
            <span className="ics-date">2020 — 2022</span>
          </div>
          <ul className="ics-bullets">
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
          <div className="ics-mini-stamp" aria-hidden="true">
            RECVD JAN·20
          </div>
        </div>

        <div className="ics-entry" data-print-entry="true">
          <div className="ics-entry-head">
            <div>
              <span className="ics-role">Software Engineer Intern</span>
              <span className="ics-org"> · Bytework · Remote</span>
            </div>
            <span className="ics-date">2018</span>
          </div>
          <ul className="ics-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
          <div className="ics-mini-stamp" aria-hidden="true">
            RECVD MAY·18
          </div>
        </div>
      </section>

      <section className="ics-section" data-print-entry="true">
        <h2>Cross-References</h2>
        <div className="ics-entry" data-print-entry="true">
          <div className="ics-entry-head">
            <div>
              <span className="ics-role">Loomroute</span>
              <span className="ics-org"> · loomroute.dev</span>
            </div>
            <span className="ics-date">GO · OSS</span>
          </div>
          <p className="ics-prose">
            URL routing library used by ~200 small SaaS apps. Live since 2024.
          </p>
        </div>
        <div className="ics-entry" data-print-entry="true">
          <div className="ics-entry-head">
            <div>
              <span className="ics-role">Tinytrace</span>
              <span className="ics-org"> · github.com/averypark/tinytrace</span>
            </div>
            <span className="ics-date">RUST · OSS</span>
          </div>
          <p className="ics-prose">
            Minimal distributed tracing library — span model, OTLP export, ~3k lines.
          </p>
        </div>
      </section>

      <section className="ics-section" data-print-entry="true">
        <h2>Education</h2>
        <div className="ics-entry" data-print-entry="true">
          <div className="ics-entry-head">
            <div>
              <span className="ics-role">B.S. Computer Science</span>
              <span className="ics-org"> · Northern State University</span>
            </div>
            <span className="ics-date">2014 — 2018</span>
          </div>
        </div>
      </section>

      <section className="ics-section" data-print-entry="true">
        <h2>Skills</h2>
        <dl className="ics-skills">
          <div className="ics-skill-row">
            <dt>LANG</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="ics-skill-row">
            <dt>BACK</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="ics-skill-row">
            <dt>FRONT</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="ics-skill-row">
            <dt>PLAT</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
