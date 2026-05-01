import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Periodical() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-periodical">
      <div className="pd-runner" aria-hidden="true">
        <span className="pd-runner-name">Avery Park</span>
        <span className="pd-runner-dot">·</span>
        <span className="pd-runner-pub">Engineering Quarterly</span>
        <span className="pd-runner-dot">·</span>
        <span className="pd-runner-vol">Vol XII</span>
        <span className="pd-runner-dot">·</span>
        <span className="pd-runner-iss">Issue 03</span>
        <span className="pd-runner-spacer" />
        <span className="pd-runner-date">May MMXXVI</span>
      </div>

      <header className="pd-masthead">
        <div className="pd-masthead-row">
          <div className="pd-masthead-left">
            <div className="pd-eyebrow">A Curriculum Vitae</div>
            <h1 className="pd-name">Avery Park</h1>
            <div className="pd-strap">
              Senior Software Engineer working on platforms, pipelines, and the things in between.
            </div>
          </div>
          <aside className="pd-masthead-right">
            <div className="pd-meta-row">
              <span className="pd-meta-key">Correspondence</span>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </div>
            <div className="pd-meta-row">
              <span className="pd-meta-key">Bureau</span>
              <span>New York, NY</span>
            </div>
            <div className="pd-meta-row">
              <span className="pd-meta-key">Web</span>
              <a href="https://averypark.dev">averypark.dev</a>
            </div>
            <div className="pd-meta-row">
              <span className="pd-meta-key">GitHub</span>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </div>
            <div className="pd-meta-row">
              <span className="pd-meta-key">LinkedIn</span>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </div>
          </aside>
        </div>
      </header>

      <section className="pd-section pd-lede" data-print-entry="true">
        <div className="pd-section-mark">No. 01 — Profile</div>
        <p className="pd-summary">
          <span className="pd-dropcap">I</span> build resilient backend systems and the platforms
          that run them. I prefer small, reversible changes and clear interfaces. Software should be
          boring in production and useful to its users.
        </p>
      </section>

      <section className="pd-section" data-print-entry="true">
        <div className="pd-section-mark">No. 02 — Experience</div>

        <article className="pd-entry" data-print-entry="true">
          <header className="pd-entry-head">
            <h2 className="pd-entry-role">Senior Software Engineer</h2>
            <div className="pd-entry-meta">
              <span className="pd-org">Coral Labs</span>
              <span className="pd-sep">·</span>
              <span>New York, NY</span>
              <span className="pd-sep">·</span>
              <span className="pd-dates">Mar 2024 — Present</span>
            </div>
          </header>
          <ul className="pd-bullets">
            <li>
              Led migration of the events pipeline to a horizontally-sharded Kafka cluster, cutting
              p99 latency by three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages 60% with sharper alerting
              and runbooks.
            </li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </article>

        <article className="pd-entry" data-print-entry="true">
          <header className="pd-entry-head">
            <h2 className="pd-entry-role">Software Engineer 2</h2>
            <div className="pd-entry-meta">
              <span className="pd-org">Coral Labs</span>
              <span className="pd-sep">·</span>
              <span>New York, NY</span>
              <span className="pd-sep">·</span>
              <span className="pd-dates">Aug 2022 — Mar 2024</span>
            </div>
          </header>
          <ul className="pd-bullets">
            <li>
              Designed the billing pipeline (12M events/day on Kafka and Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
          </ul>
        </article>

        <article className="pd-entry" data-print-entry="true">
          <header className="pd-entry-head">
            <h2 className="pd-entry-role">Software Engineer</h2>
            <div className="pd-entry-meta">
              <span className="pd-org">Acme Inc</span>
              <span className="pd-sep">·</span>
              <span>Remote</span>
              <span className="pd-sep">·</span>
              <span className="pd-dates">Jan 2020 — Jul 2022</span>
            </div>
          </header>
          <ul className="pd-bullets">
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

        <article className="pd-entry" data-print-entry="true">
          <header className="pd-entry-head">
            <h2 className="pd-entry-role">Software Engineer Intern</h2>
            <div className="pd-entry-meta">
              <span className="pd-org">Bytework</span>
              <span className="pd-sep">·</span>
              <span>Remote</span>
              <span className="pd-sep">·</span>
              <span className="pd-dates">May 2018 — Aug 2018</span>
            </div>
          </header>
          <ul className="pd-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="pd-section pd-twocol" data-print-entry="true">
        <div className="pd-section-mark">No. 03 — Projects &amp; Education</div>
        <div className="pd-twocol-grid">
          <div className="pd-col">
            <h3 className="pd-subhead">Projects</h3>
            <article className="pd-entry pd-entry-compact" data-print-entry="true">
              <h4 className="pd-entry-role-sm">Loomroute</h4>
              <div className="pd-entry-meta-sm">Go · OSS · loomroute.dev</div>
              <p className="pd-prose">
                URL routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </article>
            <article className="pd-entry pd-entry-compact" data-print-entry="true">
              <h4 className="pd-entry-role-sm">Tinytrace</h4>
              <div className="pd-entry-meta-sm">Rust · OSS</div>
              <p className="pd-prose">
                Minimal distributed tracing — span model, OTLP export, ~3k lines.
              </p>
            </article>
          </div>
          <div className="pd-col">
            <h3 className="pd-subhead">Education</h3>
            <article className="pd-entry pd-entry-compact" data-print-entry="true">
              <h4 className="pd-entry-role-sm">B.S. Computer Science</h4>
              <div className="pd-entry-meta-sm">Northern State University · 2014 — 2018</div>
            </article>
          </div>
        </div>
      </section>

      <section className="pd-section" data-print-entry="true">
        <div className="pd-section-mark">No. 04 — Skills</div>
        <dl className="pd-skills">
          <div className="pd-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="pd-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="pd-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="pd-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>

      <footer className="pd-colophon" aria-hidden="true">
        <span>Engineering Quarterly</span>
        <span className="pd-sep">·</span>
        <span>Vol XII, Issue 03</span>
        <span className="pd-sep">·</span>
        <span>p. 01 of 01</span>
      </footer>
    </PageFrame>
  )
}
