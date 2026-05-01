import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function SwissRose() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-swiss-rose">
      <header className="swr-head">
        <div className="swr-head-top">
          <div className="swr-eyebrow">
            <span className="swr-eyebrow-block" />
            <span>Curriculum Vitae / Edition 24</span>
          </div>
          <div className="swr-id">A. P. — NYC</div>
        </div>
        <div className="swr-head-grid">
          <div className="swr-rail" aria-hidden="true" />
          <div className="swr-head-body">
            <h1 className="swr-name">Avery Park</h1>
            <div className="swr-title">Senior Software Engineer — Platform</div>
          </div>
          <div className="swr-contact">
            <div className="swr-contact-row">
              <span className="swr-key">E—</span>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </div>
            <div className="swr-contact-row">
              <span className="swr-key">L—</span>
              <span>New York, NY</span>
            </div>
            <div className="swr-contact-row">
              <span className="swr-key">W—</span>
              <a href="https://averypark.dev">averypark.dev</a>
            </div>
            <div className="swr-contact-row">
              <span className="swr-key">G—</span>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </div>
            <div className="swr-contact-row">
              <span className="swr-key">I—</span>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </div>
          </div>
        </div>
      </header>

      <section className="swr-section" data-print-entry="true">
        <div className="swr-section-label">
          <span className="swr-num">01</span>
          <span>Profile</span>
        </div>
        <div className="swr-section-body">
          <p className="swr-lede">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </div>
      </section>

      <section className="swr-section" data-print-entry="true">
        <div className="swr-section-label">
          <span className="swr-num">02</span>
          <span>Experience</span>
        </div>
        <div className="swr-section-body">
          <div className="swr-entry" data-print-entry="true">
            <div className="swr-entry-head">
              <div className="swr-entry-title">Senior Software Engineer</div>
              <div className="swr-entry-meta">2024 — Present</div>
            </div>
            <div className="swr-entry-sub">
              <span>Coral Labs</span>
              <span className="swr-dot">·</span>
              <span>New York, NY</span>
            </div>
            <ul className="swr-bullets">
              <li>
                Migrated the events pipeline to a horizontally-sharded Kafka cluster; cut p99
                latency by three.
              </li>
              <li>
                Owned platform on-call across two quarters; reduced pages by sixty percent through
                sharper alerting and runbooks.
              </li>
              <li>Mentored four engineers through L4 → L5 promotions.</li>
            </ul>
          </div>

          <div className="swr-entry" data-print-entry="true">
            <div className="swr-entry-head">
              <div className="swr-entry-title">Software Engineer 2</div>
              <div className="swr-entry-meta">2022 — 2024</div>
            </div>
            <div className="swr-entry-sub">
              <span>Coral Labs</span>
              <span className="swr-dot">·</span>
              <span>New York, NY</span>
            </div>
            <ul className="swr-bullets">
              <li>
                Designed the billing pipeline (12M events / day on Kafka + Postgres) end-to-end.
              </li>
              <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            </ul>
          </div>

          <div className="swr-entry" data-print-entry="true">
            <div className="swr-entry-head">
              <div className="swr-entry-title">Software Engineer</div>
              <div className="swr-entry-meta">2020 — 2022</div>
            </div>
            <div className="swr-entry-sub">
              <span>Acme Inc</span>
              <span className="swr-dot">·</span>
              <span>Remote</span>
            </div>
            <ul className="swr-bullets">
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

          <div className="swr-entry" data-print-entry="true">
            <div className="swr-entry-head">
              <div className="swr-entry-title">Software Engineer Intern</div>
              <div className="swr-entry-meta">2018</div>
            </div>
            <div className="swr-entry-sub">
              <span>Bytework</span>
              <span className="swr-dot">·</span>
              <span>Remote</span>
            </div>
            <ul className="swr-bullets">
              <li>
                Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="swr-section" data-print-entry="true">
        <div className="swr-section-label">
          <span className="swr-num">03</span>
          <span>Projects</span>
        </div>
        <div className="swr-section-body">
          <div className="swr-entry" data-print-entry="true">
            <div className="swr-entry-head">
              <div className="swr-entry-title">Loomroute</div>
              <div className="swr-entry-meta">Go · OSS</div>
            </div>
            <div className="swr-entry-sub">
              <span>loomroute.dev</span>
            </div>
            <p className="swr-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </div>
          <div className="swr-entry" data-print-entry="true">
            <div className="swr-entry-head">
              <div className="swr-entry-title">Tinytrace</div>
              <div className="swr-entry-meta">Rust · OSS</div>
            </div>
            <div className="swr-entry-sub">
              <span>github.com/averypark/tinytrace</span>
            </div>
            <p className="swr-prose">
              Minimal distributed tracing library — span model, OTLP export, ~3k lines.
            </p>
          </div>
        </div>
      </section>

      <section className="swr-section" data-print-entry="true">
        <div className="swr-section-label">
          <span className="swr-num">04</span>
          <span>Education</span>
        </div>
        <div className="swr-section-body">
          <div className="swr-entry" data-print-entry="true">
            <div className="swr-entry-head">
              <div className="swr-entry-title">B.S. Computer Science</div>
              <div className="swr-entry-meta">2014 — 2018</div>
            </div>
            <div className="swr-entry-sub">
              <span>Northern State University</span>
            </div>
          </div>
        </div>
      </section>

      <section className="swr-section" data-print-entry="true">
        <div className="swr-section-label">
          <span className="swr-num">05</span>
          <span>Skills</span>
        </div>
        <div className="swr-section-body">
          <dl className="swr-skills">
            <div className="swr-skill-row">
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div className="swr-skill-row">
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div className="swr-skill-row">
              <dt>Frontend</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
            </div>
            <div className="swr-skill-row">
              <dt>Platform</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
