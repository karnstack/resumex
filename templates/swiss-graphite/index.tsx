import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function SwissGraphite() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-swiss-graphite">
      <header className="swg-head">
        <div className="swg-eyebrow">
          <span>Curriculum Vitae</span>
          <span className="swg-eyebrow-sep">/</span>
          <span>Senior Software Engineer</span>
          <span className="swg-eyebrow-sep">/</span>
          <span>Updated 05.2026</span>
        </div>
        <div className="swg-name-row">
          <h1 className="swg-name">Avery Park</h1>
          <div className="swg-mark">A/P</div>
        </div>
        <div className="swg-meta-row">
          <div className="swg-meta-cell">
            <div className="swg-meta-key">Discipline</div>
            <div className="swg-meta-val">Backend &middot; Platform</div>
          </div>
          <div className="swg-meta-cell">
            <div className="swg-meta-key">Location</div>
            <div className="swg-meta-val">New York, NY</div>
          </div>
          <div className="swg-meta-cell">
            <div className="swg-meta-key">Mail</div>
            <div className="swg-meta-val">
              <a href="mailto:avery@example.com">avery@example.com</a>
            </div>
          </div>
          <div className="swg-meta-cell">
            <div className="swg-meta-key">Web</div>
            <div className="swg-meta-val">
              <a href="https://averypark.dev">averypark.dev</a>
            </div>
          </div>
          <div className="swg-meta-cell">
            <div className="swg-meta-key">Code</div>
            <div className="swg-meta-val">
              <a href="https://github.com/averypark">github.com/averypark</a>
            </div>
          </div>
          <div className="swg-meta-cell">
            <div className="swg-meta-key">Network</div>
            <div className="swg-meta-val">
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </div>
          </div>
        </div>
      </header>

      <section className="swg-section" data-print-entry="true">
        <div className="swg-section-head">
          <div className="swg-section-num">§ 01</div>
          <h2 className="swg-section-title">Profile</h2>
        </div>
        <p className="swg-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="swg-section" data-print-entry="true">
        <div className="swg-section-head">
          <div className="swg-section-num">§ 02</div>
          <h2 className="swg-section-title">Experience</h2>
        </div>

        <div className="swg-entry" data-print-entry="true">
          <div className="swg-entry-grid">
            <div className="swg-entry-meta">2024 — Present</div>
            <div className="swg-entry-body">
              <div className="swg-entry-title">Senior Software Engineer</div>
              <div className="swg-entry-sub">Coral Labs, New York</div>
              <ul className="swg-bullets">
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
          </div>
        </div>

        <div className="swg-entry" data-print-entry="true">
          <div className="swg-entry-grid">
            <div className="swg-entry-meta">2022 — 2024</div>
            <div className="swg-entry-body">
              <div className="swg-entry-title">Software Engineer 2</div>
              <div className="swg-entry-sub">Coral Labs, New York</div>
              <ul className="swg-bullets">
                <li>
                  Designed the billing pipeline (12M events / day on Kafka + Postgres) end-to-end.
                </li>
                <li>
                  Built the internal feature-flag service used across forty-plus microservices.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="swg-entry" data-print-entry="true">
          <div className="swg-entry-grid">
            <div className="swg-entry-meta">2020 — 2022</div>
            <div className="swg-entry-body">
              <div className="swg-entry-title">Software Engineer</div>
              <div className="swg-entry-sub">Acme Inc, Remote</div>
              <ul className="swg-bullets">
                <li>
                  Shipped the company's first public API with rate limiting, OAuth2, and SDKs in
                  three languages.
                </li>
                <li>
                  Migrated the legacy monolith's auth module to a standalone identity service,
                  unblocking SSO.
                </li>
                <li>Cut average build times from 11 minutes to 90 seconds.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="swg-entry" data-print-entry="true">
          <div className="swg-entry-grid">
            <div className="swg-entry-meta">2018</div>
            <div className="swg-entry-body">
              <div className="swg-entry-title">Software Engineer Intern</div>
              <div className="swg-entry-sub">Bytework, Remote</div>
              <ul className="swg-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="swg-section" data-print-entry="true">
        <div className="swg-section-head">
          <div className="swg-section-num">§ 03</div>
          <h2 className="swg-section-title">Projects</h2>
        </div>
        <div className="swg-entry" data-print-entry="true">
          <div className="swg-entry-grid">
            <div className="swg-entry-meta">Go · OSS</div>
            <div className="swg-entry-body">
              <div className="swg-entry-title">Loomroute</div>
              <div className="swg-entry-sub">loomroute.dev</div>
              <p className="swg-prose">
                URL routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </div>
          </div>
        </div>
        <div className="swg-entry" data-print-entry="true">
          <div className="swg-entry-grid">
            <div className="swg-entry-meta">Rust · OSS</div>
            <div className="swg-entry-body">
              <div className="swg-entry-title">Tinytrace</div>
              <div className="swg-entry-sub">github.com/averypark/tinytrace</div>
              <p className="swg-prose">
                Minimal distributed tracing library — span model, OTLP export, ~3k lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="swg-section" data-print-entry="true">
        <div className="swg-section-head">
          <div className="swg-section-num">§ 04</div>
          <h2 className="swg-section-title">Education</h2>
        </div>
        <div className="swg-entry" data-print-entry="true">
          <div className="swg-entry-grid">
            <div className="swg-entry-meta">2014 — 2018</div>
            <div className="swg-entry-body">
              <div className="swg-entry-title">B.S. Computer Science</div>
              <div className="swg-entry-sub">Northern State University</div>
            </div>
          </div>
        </div>
      </section>

      <section className="swg-section" data-print-entry="true">
        <div className="swg-section-head">
          <div className="swg-section-num">§ 05</div>
          <h2 className="swg-section-title">Skills</h2>
        </div>
        <dl className="swg-skills">
          <div className="swg-skill-row">
            <dt>Languages</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="swg-skill-row">
            <dt>Backend</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="swg-skill-row">
            <dt>Frontend</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="swg-skill-row">
            <dt>Platform</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
