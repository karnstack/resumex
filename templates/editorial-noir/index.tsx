import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function EditorialNoir() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-editorial-noir">
      <header className="ed-head">
        <div className="ed-eyebrow">No. 24 &middot; Spring Edition</div>
        <h1 className="ed-name">Avery Park</h1>
        <div className="ed-rule-double" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="ed-title">
          <em>Senior Software Engineer</em> &mdash; <span>Platform Group</span>
        </div>
      </header>

      <div className="ed-contact">
        <div className="ed-contact-col">
          <span className="ed-contact-key">Correspondence</span>
          <a href="mailto:avery@example.com">avery@example.com</a>
        </div>
        <div className="ed-contact-col">
          <span className="ed-contact-key">Residence</span>
          <span>New York, NY</span>
        </div>
        <div className="ed-contact-col">
          <span className="ed-contact-key">Online</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </div>

      <section className="ed-section ed-summary" data-print-entry="true">
        <div className="ed-section-label">
          <span className="ed-section-num">I.</span> Profile
        </div>
        <p className="ed-lede">
          <span className="ed-dropcap">I</span> build resilient backend systems and the platforms
          that run them. I prefer small, reversible changes and clear interfaces. Software should be{' '}
          <em>boring in production</em> and useful to its users.
        </p>
      </section>

      <section className="ed-section" data-print-entry="true">
        <div className="ed-section-label">
          <span className="ed-section-num">II.</span> Experience
        </div>

        <article className="ed-entry" data-print-entry="true">
          <div className="ed-entry-head">
            <h3 className="ed-role">Senior Software Engineer</h3>
            <div className="ed-dates">Mar 2024 &mdash; Present</div>
          </div>
          <div className="ed-meta">
            <em>Coral Labs</em>, New York
          </div>
          <ul className="ed-bullets">
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

        <article className="ed-entry" data-print-entry="true">
          <div className="ed-entry-head">
            <h3 className="ed-role">Software Engineer 2</h3>
            <div className="ed-dates">Aug 2022 &mdash; Mar 2024</div>
          </div>
          <div className="ed-meta">
            <em>Coral Labs</em>, New York
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
          <div className="ed-entry-head">
            <h3 className="ed-role">Software Engineer</h3>
            <div className="ed-dates">Jan 2020 &mdash; Jul 2022</div>
          </div>
          <div className="ed-meta">
            <em>Acme Inc</em>, Remote
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
          <div className="ed-entry-head">
            <h3 className="ed-role">Software Engineer Intern</h3>
            <div className="ed-dates">May 2018 &mdash; Aug 2018</div>
          </div>
          <div className="ed-meta">
            <em>Bytework</em>, Remote
          </div>
          <ul className="ed-bullets">
            <li>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</li>
          </ul>
        </article>
      </section>

      <section className="ed-section" data-print-entry="true">
        <div className="ed-section-label">
          <span className="ed-section-num">III.</span> Selected Works &amp; Education
        </div>
        <div className="ed-twocol">
          <div>
            <article className="ed-entry-tight" data-print-entry="true">
              <h3 className="ed-role-sm">Loomroute</h3>
              <div className="ed-meta">
                <em>loomroute.dev</em> &middot; Go &middot; OSS
              </div>
              <p className="ed-prose">
                URL routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </article>
            <article className="ed-entry-tight" data-print-entry="true">
              <h3 className="ed-role-sm">Tinytrace</h3>
              <div className="ed-meta">
                <em>github.com/averypark/tinytrace</em> &middot; Rust &middot; OSS
              </div>
              <p className="ed-prose">
                Minimal distributed tracing library &mdash; span model, OTLP export, ~3k lines.
              </p>
            </article>
          </div>
          <div>
            <article className="ed-entry-tight" data-print-entry="true">
              <h3 className="ed-role-sm">B.S. Computer Science</h3>
              <div className="ed-meta">
                <em>Northern State University</em> &middot; 2014 &mdash; 2018
              </div>
            </article>
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
        </div>
      </section>

      <footer className="ed-foot">
        <div className="ed-foot-monogram">A&middot;P</div>
        <div className="ed-foot-rule" aria-hidden="true" />
        <div className="ed-foot-meta">Set in Playfair &amp; Inter &middot; Folio I</div>
      </footer>
    </PageFrame>
  )
}
