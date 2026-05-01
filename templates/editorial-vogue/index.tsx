import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function EditorialVogue() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-editorial-vogue">
      <header className="ev-head">
        <div className="ev-head-name">
          <div className="ev-eyebrow">The Resume</div>
          <h1 className="ev-name">
            <span>Avery</span>
            <span>Park</span>
          </h1>
        </div>
        <div className="ev-rule" aria-hidden="true" />
        <div className="ev-head-contact">
          <div className="ev-contact-block">
            <div className="ev-contact-key">Title</div>
            <div className="ev-contact-val">
              <em>Senior Software Engineer</em>
              <br />
              Platform Group
            </div>
          </div>
          <div className="ev-contact-block">
            <div className="ev-contact-key">Reach</div>
            <div className="ev-contact-val">
              <a href="mailto:avery@example.com">avery@example.com</a>
              <br />
              <a href="https://averypark.dev">averypark.dev</a>
              <br />
              New York, NY
            </div>
          </div>
          <div className="ev-contact-block">
            <div className="ev-contact-key">Online</div>
            <div className="ev-contact-val">
              <a href="https://github.com/averypark">github / averypark</a>
              <br />
              <a href="https://linkedin.com/in/averypark">in / averypark</a>
            </div>
          </div>
        </div>
      </header>

      <section className="ev-section ev-summary" data-print-entry="true">
        <h2 className="ev-section-label">The Profile</h2>
        <p className="ev-pullquote">
          <span className="ev-quote-mark" aria-hidden="true">
            &ldquo;
          </span>
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be <em>boring in production</em>{' '}
          and useful to its users.
        </p>
      </section>

      <section className="ev-section" data-print-entry="true">
        <h2 className="ev-section-label">The Experience</h2>

        <article className="ev-entry" data-print-entry="true">
          <div className="ev-entry-grid">
            <div className="ev-entry-when">Mar 2024 &mdash; Present</div>
            <div className="ev-entry-body">
              <h3 className="ev-role">Senior Software Engineer</h3>
              <div className="ev-meta">
                <em>Coral Labs</em> &middot; New York, NY
              </div>
              <ul className="ev-bullets">
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
            </div>
          </div>
        </article>

        <article className="ev-entry" data-print-entry="true">
          <div className="ev-entry-grid">
            <div className="ev-entry-when">Aug 2022 &mdash; Mar 2024</div>
            <div className="ev-entry-body">
              <h3 className="ev-role">Software Engineer 2</h3>
              <div className="ev-meta">
                <em>Coral Labs</em> &middot; New York, NY
              </div>
              <ul className="ev-bullets">
                <li>
                  Designed the billing pipeline (12M events / day on Kafka and Postgres) from spec
                  to production.
                </li>
                <li>
                  Built the internal feature-flag service used across forty-plus microservices.
                </li>
                <li>Drove architecture-level reviews for cross-team launches.</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="ev-entry" data-print-entry="true">
          <div className="ev-entry-grid">
            <div className="ev-entry-when">Jan 2020 &mdash; Jul 2022</div>
            <div className="ev-entry-body">
              <h3 className="ev-role">Software Engineer</h3>
              <div className="ev-meta">
                <em>Acme Inc</em> &middot; Remote
              </div>
              <ul className="ev-bullets">
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
            </div>
          </div>
        </article>

        <article className="ev-entry" data-print-entry="true">
          <div className="ev-entry-grid">
            <div className="ev-entry-when">May 2018 &mdash; Aug 2018</div>
            <div className="ev-entry-body">
              <h3 className="ev-role">Software Engineer Intern</h3>
              <div className="ev-meta">
                <em>Bytework</em> &middot; Remote
              </div>
              <ul className="ev-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="ev-section" data-print-entry="true">
        <h2 className="ev-section-label">The Index</h2>
        <div className="ev-index">
          <div className="ev-index-col">
            <div className="ev-index-head">Projects</div>
            <article className="ev-index-entry" data-print-entry="true">
              <div className="ev-index-title">Loomroute</div>
              <div className="ev-meta">
                <em>loomroute.dev</em> &middot; Go &middot; OSS
              </div>
              <p className="ev-prose">
                URL routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </article>
            <article className="ev-index-entry" data-print-entry="true">
              <div className="ev-index-title">Tinytrace</div>
              <div className="ev-meta">
                <em>github.com/averypark/tinytrace</em> &middot; Rust &middot; OSS
              </div>
              <p className="ev-prose">
                Minimal distributed tracing library &mdash; span model, OTLP export, ~3k lines.
              </p>
            </article>
          </div>
          <div className="ev-index-col">
            <div className="ev-index-head">Education</div>
            <article className="ev-index-entry" data-print-entry="true">
              <div className="ev-index-title">B.S. Computer Science</div>
              <div className="ev-meta">
                <em>Northern State University</em> &middot; 2014 &mdash; 2018
              </div>
            </article>
            <div className="ev-index-head">Skills</div>
            <dl className="ev-skills">
              <div className="ev-skill-row">
                <dt>Languages</dt>
                <dd>Go, TypeScript, Python, Rust</dd>
              </div>
              <div className="ev-skill-row">
                <dt>Backend</dt>
                <dd>Postgres, Redis, Kafka, gRPC</dd>
              </div>
              <div className="ev-skill-row">
                <dt>Frontend</dt>
                <dd>React, Next.js, Tailwind, Vite</dd>
              </div>
              <div className="ev-skill-row">
                <dt>Platform</dt>
                <dd>AWS, Kubernetes, Docker, Terraform</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
