import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function EditorialCondensed() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-editorial-condensed">
      <header className="ec-head">
        <div className="ec-head-top">
          <span>The Park Edition</span>
          <span>MMXXVI</span>
        </div>
        <h1 className="ec-name">Avery Park</h1>
        <div className="ec-head-meta">
          <em>Senior Software Engineer</em>
          <span className="ec-bullet" aria-hidden="true">
            &bull;
          </span>
          Platform Group
          <span className="ec-bullet" aria-hidden="true">
            &bull;
          </span>
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="ec-bullet" aria-hidden="true">
            &bull;
          </span>
          New York, NY
          <span className="ec-bullet" aria-hidden="true">
            &bull;
          </span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="ec-bullet" aria-hidden="true">
            &bull;
          </span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="ec-bullet" aria-hidden="true">
            &bull;
          </span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <section className="ec-section ec-summary" data-print-entry="true">
        <div className="ec-section-label">Profile</div>
        <p className="ec-lede">
          <span className="ec-dropcap">I</span> build resilient backend systems and the platforms
          that run them. I prefer small, reversible changes and clear interfaces. Software should be{' '}
          <em>boring in production</em> and useful to its users.
        </p>
      </section>

      <section className="ec-section" data-print-entry="true">
        <div className="ec-section-label">Experience</div>

        <article className="ec-entry" data-print-entry="true">
          <h3 className="ec-role">Senior Software Engineer</h3>
          <div className="ec-meta">
            <em>Coral Labs</em>
            <span className="ec-meta-sep">&middot;</span>
            <span>New York, NY</span>
            <span className="ec-meta-sep">&middot;</span>
            <span>Mar 2024 &mdash; Present</span>
          </div>
          <ul className="ec-bullets">
            <li>
              Migrated the events pipeline to a horizontally-sharded Kafka cluster &mdash; cut p99
              latency by three.
            </li>
            <li>
              Owned platform on-call across two quarters; reduced pages 60% with sharper alerting
              and runbooks.
            </li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </article>

        <article className="ec-entry" data-print-entry="true">
          <h3 className="ec-role">Software Engineer 2</h3>
          <div className="ec-meta">
            <em>Coral Labs</em>
            <span className="ec-meta-sep">&middot;</span>
            <span>New York, NY</span>
            <span className="ec-meta-sep">&middot;</span>
            <span>Aug 2022 &mdash; Mar 2024</span>
          </div>
          <ul className="ec-bullets">
            <li>
              Designed the billing pipeline (12M events / day on Kafka and Postgres) from spec to
              production.
            </li>
            <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            <li>Drove architecture-level reviews for cross-team launches.</li>
          </ul>
        </article>

        <article className="ec-entry" data-print-entry="true">
          <h3 className="ec-role">Software Engineer</h3>
          <div className="ec-meta">
            <em>Acme Inc</em>
            <span className="ec-meta-sep">&middot;</span>
            <span>Remote</span>
            <span className="ec-meta-sep">&middot;</span>
            <span>Jan 2020 &mdash; Jul 2022</span>
          </div>
          <ul className="ec-bullets">
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

        <article className="ec-entry" data-print-entry="true">
          <h3 className="ec-role">Software Engineer Intern</h3>
          <div className="ec-meta">
            <em>Bytework</em>
            <span className="ec-meta-sep">&middot;</span>
            <span>Remote</span>
            <span className="ec-meta-sep">&middot;</span>
            <span>May 2018 &mdash; Aug 2018</span>
          </div>
          <ul className="ec-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="ec-section ec-twocol" data-print-entry="true">
        <div>
          <div className="ec-section-label">Projects</div>
          <article className="ec-entry-tight" data-print-entry="true">
            <h3 className="ec-role-sm">Loomroute</h3>
            <div className="ec-meta">
              <em>loomroute.dev</em>
              <span className="ec-meta-sep">&middot;</span>
              <span>Go &middot; OSS</span>
            </div>
            <p className="ec-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </article>
          <article className="ec-entry-tight" data-print-entry="true">
            <h3 className="ec-role-sm">Tinytrace</h3>
            <div className="ec-meta">
              <em>github.com/averypark/tinytrace</em>
              <span className="ec-meta-sep">&middot;</span>
              <span>Rust &middot; OSS</span>
            </div>
            <p className="ec-prose">
              Minimal distributed tracing library &mdash; span model, OTLP export, ~3k lines.
            </p>
          </article>
        </div>
        <div>
          <div className="ec-section-label">Education</div>
          <article className="ec-entry-tight" data-print-entry="true">
            <h3 className="ec-role-sm">B.S. Computer Science</h3>
            <div className="ec-meta">
              <em>Northern State University</em>
              <span className="ec-meta-sep">&middot;</span>
              <span>2014 &mdash; 2018</span>
            </div>
          </article>
          <div className="ec-section-label ec-section-label-inline">Skills</div>
          <dl className="ec-skills">
            <div className="ec-skill-row">
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div className="ec-skill-row">
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div className="ec-skill-row">
              <dt>Frontend</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
            </div>
            <div className="ec-skill-row">
              <dt>Platform</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
