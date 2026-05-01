import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Swiss() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-swiss">
      <header className="sw-head">
        <div className="sw-head-rail" aria-hidden="true" />
        <div className="sw-head-body">
          <div className="sw-eyebrow">
            <span className="sw-eyebrow-block" />
            <span>Curriculum Vitae / 01</span>
          </div>
          <h1 className="sw-name">Avery Park</h1>
          <div className="sw-title">Senior Software Engineer — Platform</div>
        </div>
        <div className="sw-contact">
          <div className="sw-contact-row">
            <span className="sw-key">E</span>
            <a href="mailto:avery@example.com">avery@example.com</a>
          </div>
          <div className="sw-contact-row">
            <span className="sw-key">L</span>
            <span>New York, NY</span>
          </div>
          <div className="sw-contact-row">
            <span className="sw-key">W</span>
            <a href="https://averypark.dev">averypark.dev</a>
          </div>
          <div className="sw-contact-row">
            <span className="sw-key">G</span>
            <a href="https://github.com/averypark">github.com/averypark</a>
          </div>
          <div className="sw-contact-row">
            <span className="sw-key">I</span>
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </div>
        </div>
      </header>

      <section className="sw-section" data-print-entry="true">
        <div className="sw-section-label">
          <span className="sw-num">01</span>
          <span>Profile</span>
        </div>
        <div className="sw-section-body">
          <p className="sw-lede">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </div>
      </section>

      <section className="sw-section" data-print-entry="true">
        <div className="sw-section-label">
          <span className="sw-num">02</span>
          <span>Experience</span>
        </div>
        <div className="sw-section-body">
          <div className="sw-entry" data-print-entry="true">
            <div className="sw-entry-head">
              <div className="sw-entry-title">Senior Software Engineer</div>
              <div className="sw-entry-meta">2024 — Present</div>
            </div>
            <div className="sw-entry-sub">
              <span>Coral Labs</span>
              <span className="sw-dot">·</span>
              <span>New York, NY</span>
            </div>
            <ul className="sw-bullets">
              <li>
                Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99
                latency by three.
              </li>
              <li>
                Owned platform on-call across two quarters; reduced pages 60% with sharper alerting
                and runbooks.
              </li>
              <li>Mentored four engineers through L4 → L5 promotions.</li>
            </ul>
          </div>

          <div className="sw-entry" data-print-entry="true">
            <div className="sw-entry-head">
              <div className="sw-entry-title">Software Engineer 2</div>
              <div className="sw-entry-meta">2022 — 2024</div>
            </div>
            <div className="sw-entry-sub">
              <span>Coral Labs</span>
              <span className="sw-dot">·</span>
              <span>New York, NY</span>
            </div>
            <ul className="sw-bullets">
              <li>
                Designed the billing pipeline (12M events / day on Kafka + Postgres) from spec to
                production.
              </li>
              <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            </ul>
          </div>

          <div className="sw-entry" data-print-entry="true">
            <div className="sw-entry-head">
              <div className="sw-entry-title">Software Engineer</div>
              <div className="sw-entry-meta">2020 — 2022</div>
            </div>
            <div className="sw-entry-sub">
              <span>Acme Inc</span>
              <span className="sw-dot">·</span>
              <span>Remote</span>
            </div>
            <ul className="sw-bullets">
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

          <div className="sw-entry" data-print-entry="true">
            <div className="sw-entry-head">
              <div className="sw-entry-title">Software Engineer Intern</div>
              <div className="sw-entry-meta">2018</div>
            </div>
            <div className="sw-entry-sub">
              <span>Bytework</span>
              <span className="sw-dot">·</span>
              <span>Remote</span>
            </div>
            <ul className="sw-bullets">
              <li>
                Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sw-section" data-print-entry="true">
        <div className="sw-section-label">
          <span className="sw-num">03</span>
          <span>Projects</span>
        </div>
        <div className="sw-section-body">
          <div className="sw-entry" data-print-entry="true">
            <div className="sw-entry-head">
              <div className="sw-entry-title">Loomroute</div>
              <div className="sw-entry-meta">Go · OSS</div>
            </div>
            <div className="sw-entry-sub">
              <span>loomroute.dev</span>
            </div>
            <p className="sw-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </div>
          <div className="sw-entry" data-print-entry="true">
            <div className="sw-entry-head">
              <div className="sw-entry-title">Tinytrace</div>
              <div className="sw-entry-meta">Rust · OSS</div>
            </div>
            <div className="sw-entry-sub">
              <span>github.com/averypark/tinytrace</span>
            </div>
            <p className="sw-prose">
              Minimal distributed tracing library — span model, OTLP export, ~3k lines.
            </p>
          </div>
        </div>
      </section>

      <section className="sw-section" data-print-entry="true">
        <div className="sw-section-label">
          <span className="sw-num">04</span>
          <span>Education</span>
        </div>
        <div className="sw-section-body">
          <div className="sw-entry" data-print-entry="true">
            <div className="sw-entry-head">
              <div className="sw-entry-title">B.S. Computer Science</div>
              <div className="sw-entry-meta">2014 — 2018</div>
            </div>
            <div className="sw-entry-sub">
              <span>Northern State University</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section" data-print-entry="true">
        <div className="sw-section-label">
          <span className="sw-num">05</span>
          <span>Skills</span>
        </div>
        <div className="sw-section-body">
          <dl className="sw-skills">
            <div className="sw-skill-row">
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div className="sw-skill-row">
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div className="sw-skill-row">
              <dt>Frontend</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
            </div>
            <div className="sw-skill-row">
              <dt>Platform</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
