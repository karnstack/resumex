import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function SwissMirror() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-swiss-mirror">
      <header className="swm-head">
        <div className="swm-head-body">
          <div className="swm-eyebrow">
            <span>01 / Curriculum Vitae</span>
            <span className="swm-eyebrow-block" />
          </div>
          <h1 className="swm-name">Avery Park</h1>
          <div className="swm-title">Senior Software Engineer — Platform</div>
          <div className="swm-contact">
            <div className="swm-contact-row">
              <a href="mailto:avery@example.com">avery@example.com</a>
              <span className="swm-key">— E</span>
            </div>
            <div className="swm-contact-row">
              <span>New York, NY</span>
              <span className="swm-key">— L</span>
            </div>
            <div className="swm-contact-row">
              <a href="https://averypark.dev">averypark.dev</a>
              <span className="swm-key">— W</span>
            </div>
            <div className="swm-contact-row">
              <a href="https://github.com/averypark">github.com/averypark</a>
              <span className="swm-key">— G</span>
            </div>
            <div className="swm-contact-row">
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
              <span className="swm-key">— I</span>
            </div>
          </div>
        </div>
        <div className="swm-rail" aria-hidden="true">
          <span className="swm-rail-tag">CV / 24</span>
        </div>
      </header>

      <section className="swm-section" data-print-entry="true">
        <div className="swm-section-body">
          <p className="swm-lede">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </div>
        <div className="swm-section-label">
          <span>Profile</span>
          <span className="swm-num">01</span>
        </div>
      </section>

      <section className="swm-section" data-print-entry="true">
        <div className="swm-section-body">
          <div className="swm-entry" data-print-entry="true">
            <div className="swm-entry-head">
              <div className="swm-entry-title">Senior Software Engineer</div>
              <div className="swm-entry-meta">2024 — Present</div>
            </div>
            <div className="swm-entry-sub">
              <span>Coral Labs</span>
              <span className="swm-dot">·</span>
              <span>New York, NY</span>
            </div>
            <ul className="swm-bullets">
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

          <div className="swm-entry" data-print-entry="true">
            <div className="swm-entry-head">
              <div className="swm-entry-title">Software Engineer 2</div>
              <div className="swm-entry-meta">2022 — 2024</div>
            </div>
            <div className="swm-entry-sub">
              <span>Coral Labs</span>
              <span className="swm-dot">·</span>
              <span>New York, NY</span>
            </div>
            <ul className="swm-bullets">
              <li>Designed the billing pipeline (12M events / day on Kafka + Postgres).</li>
              <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            </ul>
          </div>

          <div className="swm-entry" data-print-entry="true">
            <div className="swm-entry-head">
              <div className="swm-entry-title">Software Engineer</div>
              <div className="swm-entry-meta">2020 — 2022</div>
            </div>
            <div className="swm-entry-sub">
              <span>Acme Inc</span>
              <span className="swm-dot">·</span>
              <span>Remote</span>
            </div>
            <ul className="swm-bullets">
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

          <div className="swm-entry" data-print-entry="true">
            <div className="swm-entry-head">
              <div className="swm-entry-title">Software Engineer Intern</div>
              <div className="swm-entry-meta">2018</div>
            </div>
            <div className="swm-entry-sub">
              <span>Bytework</span>
              <span className="swm-dot">·</span>
              <span>Remote</span>
            </div>
            <ul className="swm-bullets">
              <li>
                Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
              </li>
            </ul>
          </div>
        </div>
        <div className="swm-section-label">
          <span>Experience</span>
          <span className="swm-num">02</span>
        </div>
      </section>

      <section className="swm-section" data-print-entry="true">
        <div className="swm-section-body">
          <div className="swm-entry" data-print-entry="true">
            <div className="swm-entry-head">
              <div className="swm-entry-title">Loomroute</div>
              <div className="swm-entry-meta">Go · OSS</div>
            </div>
            <div className="swm-entry-sub">
              <span>loomroute.dev</span>
            </div>
            <p className="swm-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </div>
          <div className="swm-entry" data-print-entry="true">
            <div className="swm-entry-head">
              <div className="swm-entry-title">Tinytrace</div>
              <div className="swm-entry-meta">Rust · OSS</div>
            </div>
            <div className="swm-entry-sub">
              <span>github.com/averypark/tinytrace</span>
            </div>
            <p className="swm-prose">
              Minimal distributed tracing library — span model, OTLP export, ~3k lines.
            </p>
          </div>
        </div>
        <div className="swm-section-label">
          <span>Projects</span>
          <span className="swm-num">03</span>
        </div>
      </section>

      <section className="swm-section" data-print-entry="true">
        <div className="swm-section-body">
          <div className="swm-entry" data-print-entry="true">
            <div className="swm-entry-head">
              <div className="swm-entry-title">B.S. Computer Science</div>
              <div className="swm-entry-meta">2014 — 2018</div>
            </div>
            <div className="swm-entry-sub">
              <span>Northern State University</span>
            </div>
          </div>
        </div>
        <div className="swm-section-label">
          <span>Education</span>
          <span className="swm-num">04</span>
        </div>
      </section>

      <section className="swm-section" data-print-entry="true">
        <div className="swm-section-body">
          <dl className="swm-skills">
            <div className="swm-skill-row">
              <dt>Languages</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div className="swm-skill-row">
              <dt>Backend</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div className="swm-skill-row">
              <dt>Frontend</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
            </div>
            <div className="swm-skill-row">
              <dt>Platform</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
        <div className="swm-section-label">
          <span>Skills</span>
          <span className="swm-num">05</span>
        </div>
      </section>
    </PageFrame>
  )
}
