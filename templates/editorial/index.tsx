import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Editorial() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-editorial">
      <header className="ed-head">
        <div className="ed-eyebrow">Curriculum Vitae &middot; New York</div>
        <h1 className="ed-name">Avery Park</h1>
        <div className="ed-title">
          <em>Senior Software Engineer</em>
          <span className="ed-sep">/</span>
          <span>Platform</span>
        </div>
        <div className="ed-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="ed-bullet">&middot;</span>
          <span>New York, NY</span>
          <span className="ed-bullet">&middot;</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="ed-bullet">&middot;</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="ed-bullet">&middot;</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <section className="ed-section ed-summary" data-print-entry="true">
        <div className="ed-section-label">Profile</div>
        <p className="ed-lede">
          <span className="ed-dropcap">I</span> build resilient backend systems and the platforms
          that run them. I prefer small, reversible changes and clear interfaces. Software should be{' '}
          <em>boring in production</em> and useful to its users.
        </p>
      </section>

      <section className="ed-section" data-print-entry="true">
        <div className="ed-section-label">Experience</div>

        <article className="ed-entry" data-print-entry="true">
          <h3 className="ed-role">Senior Software Engineer</h3>
          <div className="ed-meta">
            <em>Coral Labs</em>
            <span className="ed-bullet">&middot;</span>
            <span>New York, NY</span>
            <span className="ed-bullet">&middot;</span>
            <span>Mar 2024 &mdash; Present</span>
          </div>
          <ul className="ed-bullets">
            <li>
              Led the migration of the events pipeline to a horizontally-sharded Kafka cluster,
              reducing p99 latency by three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages 60% with sharper alerting
              and runbooks.
            </li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </article>

        <article className="ed-entry" data-print-entry="true">
          <h3 className="ed-role">Software Engineer 2</h3>
          <div className="ed-meta">
            <em>Coral Labs</em>
            <span className="ed-bullet">&middot;</span>
            <span>New York, NY</span>
            <span className="ed-bullet">&middot;</span>
            <span>Aug 2022 &mdash; Mar 2024</span>
          </div>
          <ul className="ed-bullets">
            <li>
              Designed the billing pipeline (12M events / day on Kafka and Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            <li>Drove architecture-level reviews for cross-team launches.</li>
          </ul>
        </article>

        <article className="ed-entry" data-print-entry="true">
          <h3 className="ed-role">Software Engineer</h3>
          <div className="ed-meta">
            <em>Acme Inc</em>
            <span className="ed-bullet">&middot;</span>
            <span>Remote</span>
            <span className="ed-bullet">&middot;</span>
            <span>Jan 2020 &mdash; Jul 2022</span>
          </div>
          <ul className="ed-bullets">
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

        <article className="ed-entry" data-print-entry="true">
          <h3 className="ed-role">Software Engineer Intern</h3>
          <div className="ed-meta">
            <em>Bytework</em>
            <span className="ed-bullet">&middot;</span>
            <span>Remote</span>
            <span className="ed-bullet">&middot;</span>
            <span>May 2018 &mdash; Aug 2018</span>
          </div>
          <ul className="ed-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="ed-section ed-twocol" data-print-entry="true">
        <div className="ed-twocol-col">
          <div className="ed-section-label">Selected Projects</div>
          <article className="ed-entry ed-entry-tight" data-print-entry="true">
            <h3 className="ed-role">Loomroute</h3>
            <div className="ed-meta">
              <em>loomroute.dev</em>
              <span className="ed-bullet">&middot;</span>
              <span>Go &middot; OSS</span>
            </div>
            <p className="ed-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </article>
          <article className="ed-entry ed-entry-tight" data-print-entry="true">
            <h3 className="ed-role">Tinytrace</h3>
            <div className="ed-meta">
              <em>github.com/averypark/tinytrace</em>
              <span className="ed-bullet">&middot;</span>
              <span>Rust &middot; OSS</span>
            </div>
            <p className="ed-prose">
              Minimal distributed tracing library &mdash; span model, OTLP export, ~3k lines.
            </p>
          </article>
        </div>
        <div className="ed-twocol-col">
          <div className="ed-section-label">Education</div>
          <article className="ed-entry ed-entry-tight" data-print-entry="true">
            <h3 className="ed-role">B.S. Computer Science</h3>
            <div className="ed-meta">
              <em>Northern State University</em>
              <span className="ed-bullet">&middot;</span>
              <span>2014 &mdash; 2018</span>
            </div>
          </article>
          <div className="ed-section-label ed-section-label-inline">Skills</div>
          <dl className="ed-skills">
            <div className="ed-skill-row">
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div className="ed-skill-row">
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div className="ed-skill-row">
              <dt>Frontend</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
            </div>
            <div className="ed-skill-row">
              <dt>Platform</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
