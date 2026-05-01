import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function EditorialPull() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-editorial-pull">
      <div className="ep-grid">
        <aside className="ep-side">
          <div className="ep-side-eyebrow">A Profile</div>
          <h1 className="ep-name">
            Avery
            <br />
            Park
          </h1>
          <div className="ep-title">
            <em>Senior Software Engineer</em>
            <br />
            Platform Group
          </div>

          <div className="ep-pullquote" data-print-entry="true">
            <span className="ep-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p>
              I build resilient backend systems and the platforms that run them. I prefer small,
              reversible changes and clear interfaces.
            </p>
            <p className="ep-pullquote-coda">
              <em>Software should be boring in production and useful to its users.</em>
            </p>
          </div>

          <div className="ep-side-block">
            <div className="ep-side-label">Reach</div>
            <ul className="ep-side-list">
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

          <div className="ep-side-block">
            <div className="ep-side-label">Education</div>
            <div className="ep-side-entry">
              <div className="ep-side-title">B.S. Computer Science</div>
              <div className="ep-side-meta">
                <em>Northern State University</em>
              </div>
              <div className="ep-side-meta">2014 &mdash; 2018</div>
            </div>
          </div>

          <div className="ep-side-block">
            <div className="ep-side-label">Stack</div>
            <dl className="ep-skills">
              <div className="ep-skill-row">
                <dt>Languages</dt>
                <dd>Go, TypeScript, Python, Rust</dd>
              </div>
              <div className="ep-skill-row">
                <dt>Backend</dt>
                <dd>Postgres, Redis, Kafka, gRPC</dd>
              </div>
              <div className="ep-skill-row">
                <dt>Frontend</dt>
                <dd>React, Next.js, Tailwind, Vite</dd>
              </div>
              <div className="ep-skill-row">
                <dt>Platform</dt>
                <dd>AWS, Kubernetes, Docker, Terraform</dd>
              </div>
            </dl>
          </div>
        </aside>

        <main className="ep-main">
          <section className="ep-section" data-print-entry="true">
            <div className="ep-section-label">Experience</div>

            <article className="ep-entry" data-print-entry="true">
              <div className="ep-entry-head">
                <h3 className="ep-role">Senior Software Engineer</h3>
                <div className="ep-dates">Mar 2024 &mdash; Present</div>
              </div>
              <div className="ep-meta">
                <em>Coral Labs</em>, New York, NY
              </div>
              <ul className="ep-bullets">
                <li>
                  Migrated the events pipeline to a horizontally-sharded Kafka cluster &mdash; cut
                  p99 latency by three.
                </li>
                <li>
                  Owned platform on-call across two quarters; reduced pages 60% with sharper
                  alerting and runbooks.
                </li>
                <li>Mentored four engineers through L4 to L5 promotions.</li>
              </ul>
            </article>

            <article className="ep-entry" data-print-entry="true">
              <div className="ep-entry-head">
                <h3 className="ep-role">Software Engineer 2</h3>
                <div className="ep-dates">Aug 2022 &mdash; Mar 2024</div>
              </div>
              <div className="ep-meta">
                <em>Coral Labs</em>, New York, NY
              </div>
              <ul className="ep-bullets">
                <li>
                  Designed the billing pipeline (12M events / day on Kafka and Postgres) from spec
                  to production.
                </li>
                <li>
                  Built the internal feature-flag service used across forty-plus microservices.
                </li>
                <li>Drove architecture-level reviews for cross-team launches.</li>
              </ul>
            </article>

            <article className="ep-entry" data-print-entry="true">
              <div className="ep-entry-head">
                <h3 className="ep-role">Software Engineer</h3>
                <div className="ep-dates">Jan 2020 &mdash; Jul 2022</div>
              </div>
              <div className="ep-meta">
                <em>Acme Inc</em>, Remote
              </div>
              <ul className="ep-bullets">
                <li>
                  Shipped the company's first public API with rate limiting, OAuth2, and SDKs in
                  three languages.
                </li>
                <li>
                  Migrated the legacy monolith's auth module to a standalone identity service,
                  unblocking SSO.
                </li>
                <li>Cut average build times from eleven minutes to ninety seconds.</li>
              </ul>
            </article>

            <article className="ep-entry" data-print-entry="true">
              <div className="ep-entry-head">
                <h3 className="ep-role">Software Engineer Intern</h3>
                <div className="ep-dates">May 2018 &mdash; Aug 2018</div>
              </div>
              <div className="ep-meta">
                <em>Bytework</em>, Remote
              </div>
              <ul className="ep-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </article>
          </section>

          <section className="ep-section" data-print-entry="true">
            <div className="ep-section-label">Selected Projects</div>
            <article className="ep-entry-tight" data-print-entry="true">
              <div className="ep-entry-head">
                <h3 className="ep-role-sm">Loomroute</h3>
                <div className="ep-dates">Live since 2024</div>
              </div>
              <div className="ep-meta">
                <em>loomroute.dev</em> &middot; Go &middot; OSS
              </div>
              <p className="ep-prose">URL routing library used by ~200 small SaaS apps.</p>
            </article>
            <article className="ep-entry-tight" data-print-entry="true">
              <div className="ep-entry-head">
                <h3 className="ep-role-sm">Tinytrace</h3>
                <div className="ep-dates">OSS</div>
              </div>
              <div className="ep-meta">
                <em>github.com/averypark/tinytrace</em> &middot; Rust
              </div>
              <p className="ep-prose">
                Minimal distributed tracing library &mdash; span model, OTLP export, ~3k lines.
              </p>
            </article>
          </section>
        </main>
      </div>
    </PageFrame>
  )
}
