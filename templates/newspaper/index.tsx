import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Newspaper() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-newspaper">
      <header className="np-mast">
        <div className="np-mast-rule np-mast-rule-thick" aria-hidden="true" />
        <div className="np-mast-row">
          <div className="np-mast-side np-mast-side-l">
            <span className="np-edition-label">Edition</span>
            <span className="np-edition-val">VOL. XII</span>
          </div>
          <h1 className="np-title">Avery Park</h1>
          <div className="np-mast-side np-mast-side-r">
            <span className="np-edition-label">Number</span>
            <span className="np-edition-val">NO. 03</span>
          </div>
        </div>
        <div className="np-mast-rule" aria-hidden="true" />
        <div className="np-mast-meta">
          <span>NEW YORK · MAY 2026</span>
          <span className="np-mast-tag">Senior Software Engineer · Platform</span>
          <span>FIVE CENTS</span>
        </div>
        <div className="np-mast-rule np-mast-rule-thick" aria-hidden="true" />
      </header>

      <section className="np-section np-lede" data-print-entry="true">
        <span className="np-section-label">From the Desk</span>
        <p className="np-dateline">
          <span className="np-dateline-place">NEW YORK</span>
          <span className="np-dash">—</span>
          <span>
            <span className="np-dropcap">I</span> build resilient backend systems and the platforms
            that run them. I prefer small, reversible changes and clear interfaces. Software should
            be boring in production and useful to its users.
          </span>
        </p>
      </section>

      <section className="np-section" data-print-entry="true">
        <h2 className="np-h2">Experience</h2>
        <div className="np-cols-2">
          <div className="np-entry" data-print-entry="true">
            <h3 className="np-entry-title">Senior Software Engineer</h3>
            <div className="np-entry-sub">Coral Labs · New York, NY</div>
            <div className="np-entry-meta">Mar 2024 — Present</div>
            <p>
              Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99 latency
              by three. Owned platform on-call across two quarters and reduced pages by 60% with
              sharper alerting. Mentored four engineers through L4 to L5 promotions.
            </p>
          </div>
          <div className="np-entry" data-print-entry="true">
            <h3 className="np-entry-title">Software Engineer 2</h3>
            <div className="np-entry-sub">Coral Labs · New York, NY</div>
            <div className="np-entry-meta">Aug 2022 — Mar 2024</div>
            <p>
              Designed the billing pipeline (12M events per day on Kafka and Postgres) from spec to
              production. Built the internal feature-flag service used across forty-plus
              microservices.
            </p>
          </div>
          <div className="np-entry" data-print-entry="true">
            <h3 className="np-entry-title">Software Engineer</h3>
            <div className="np-entry-sub">Acme Inc · Remote</div>
            <div className="np-entry-meta">Jan 2020 — Jul 2022</div>
            <p>
              Shipped the company's first public API with rate limiting, OAuth2, and SDKs in three
              languages. Migrated the legacy monolith's auth module to a standalone identity
              service, unblocking SSO. Cut average build times from eleven minutes to ninety
              seconds.
            </p>
          </div>
          <div className="np-entry" data-print-entry="true">
            <h3 className="np-entry-title">Software Engineer Intern</h3>
            <div className="np-entry-sub">Bytework · Remote</div>
            <div className="np-entry-meta">May 2018 — Aug 2018</div>
            <p>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</p>
          </div>
        </div>
      </section>

      <section className="np-section" data-print-entry="true">
        <h2 className="np-h2">Projects</h2>
        <div className="np-cols-2">
          <div className="np-entry" data-print-entry="true">
            <h3 className="np-entry-title">Loomroute</h3>
            <div className="np-entry-sub">Go · Open Source</div>
            <p>URL routing library used by ~200 small SaaS apps. Live since 2024.</p>
          </div>
          <div className="np-entry" data-print-entry="true">
            <h3 className="np-entry-title">Tinytrace</h3>
            <div className="np-entry-sub">Rust · Open Source</div>
            <p>Minimal distributed tracing library — span model, OTLP export, ~3k lines.</p>
          </div>
        </div>
      </section>

      <section className="np-section np-foot" data-print-entry="true">
        <div className="np-foot-col">
          <h2 className="np-h2">Education</h2>
          <div className="np-entry">
            <h3 className="np-entry-title">B.S. Computer Science</h3>
            <div className="np-entry-sub">Northern State University</div>
            <div className="np-entry-meta">2014 — 2018</div>
          </div>
        </div>
        <div className="np-foot-col">
          <h2 className="np-h2">Skills</h2>
          <dl className="np-skills">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </dl>
        </div>
        <div className="np-foot-col">
          <h2 className="np-h2">Correspondence</h2>
          <ul className="np-contact">
            <li>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </li>
            <li>New York, NY</li>
            <li>
              <a href="https://averypark.dev">averypark.dev</a>
            </li>
            <li>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </li>
          </ul>
        </div>
      </section>
    </PageFrame>
  )
}
