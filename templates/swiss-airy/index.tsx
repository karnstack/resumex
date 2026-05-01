import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function SwissAiry() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-swiss-airy">
      <header className="swa-head">
        <div className="swa-eyebrow">
          <span className="swa-mark" aria-hidden="true" />
          <span>Curriculum Vitae</span>
          <span className="swa-eyebrow-spacer" />
          <span>Vol. 24</span>
        </div>

        <h1 className="swa-name">Avery Park</h1>
        <div className="swa-title">Senior Software Engineer — Platform</div>

        <div className="swa-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="swa-pipe">/</span>
          <span>New York, NY</span>
          <span className="swa-pipe">/</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="swa-pipe">/</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="swa-pipe">/</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
        </div>
      </header>

      <section className="swa-section" data-print-entry="true">
        <div className="swa-section-label">
          <span className="swa-num">i</span>
          <span>Profile</span>
        </div>
        <p className="swa-lede">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="swa-section" data-print-entry="true">
        <div className="swa-section-label">
          <span className="swa-num">ii</span>
          <span>Experience</span>
        </div>
        <div className="swa-list">
          <div className="swa-entry" data-print-entry="true">
            <div className="swa-entry-meta">2024 — Present</div>
            <div className="swa-entry-title">Senior Software Engineer, Coral Labs</div>
            <div className="swa-entry-loc">New York, NY</div>
            <ul className="swa-bullets">
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

          <div className="swa-entry" data-print-entry="true">
            <div className="swa-entry-meta">2022 — 2024</div>
            <div className="swa-entry-title">Software Engineer 2, Coral Labs</div>
            <div className="swa-entry-loc">New York, NY</div>
            <ul className="swa-bullets">
              <li>Designed the billing pipeline (12M events / day on Kafka + Postgres).</li>
              <li>Built the internal feature-flag service used across forty-plus microservices.</li>
            </ul>
          </div>

          <div className="swa-entry" data-print-entry="true">
            <div className="swa-entry-meta">2020 — 2022</div>
            <div className="swa-entry-title">Software Engineer, Acme Inc</div>
            <div className="swa-entry-loc">Remote</div>
            <ul className="swa-bullets">
              <li>
                Shipped the first public API with rate limiting, OAuth2, and SDKs in three
                languages.
              </li>
              <li>Migrated the legacy monolith's auth module to a standalone identity service.</li>
              <li>Cut average build times from 11 minutes to 90 seconds.</li>
            </ul>
          </div>

          <div className="swa-entry" data-print-entry="true">
            <div className="swa-entry-meta">2018</div>
            <div className="swa-entry-title">Software Engineer Intern, Bytework</div>
            <div className="swa-entry-loc">Remote</div>
            <ul className="swa-bullets">
              <li>
                Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="swa-section" data-print-entry="true">
        <div className="swa-section-label">
          <span className="swa-num">iii</span>
          <span>Projects</span>
        </div>
        <div className="swa-list">
          <div className="swa-entry" data-print-entry="true">
            <div className="swa-entry-meta">Go · OSS</div>
            <div className="swa-entry-title">Loomroute</div>
            <div className="swa-entry-loc">loomroute.dev</div>
            <p className="swa-prose">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </div>
          <div className="swa-entry" data-print-entry="true">
            <div className="swa-entry-meta">Rust · OSS</div>
            <div className="swa-entry-title">Tinytrace</div>
            <div className="swa-entry-loc">github.com/averypark/tinytrace</div>
            <p className="swa-prose">
              Minimal distributed tracing library — span model, OTLP export, ~3k lines.
            </p>
          </div>
        </div>
      </section>

      <section className="swa-section" data-print-entry="true">
        <div className="swa-section-label">
          <span className="swa-num">iv</span>
          <span>Education</span>
        </div>
        <div className="swa-list">
          <div className="swa-entry" data-print-entry="true">
            <div className="swa-entry-meta">2014 — 2018</div>
            <div className="swa-entry-title">B.S. Computer Science</div>
            <div className="swa-entry-loc">Northern State University</div>
          </div>
        </div>
      </section>

      <section className="swa-section" data-print-entry="true">
        <div className="swa-section-label">
          <span className="swa-num">v</span>
          <span>Skills</span>
        </div>
        <dl className="swa-skills">
          <div className="swa-skill-row">
            <dt>Languages</dt>
            <dd>Go &middot; TypeScript &middot; Python &middot; Rust</dd>
          </div>
          <div className="swa-skill-row">
            <dt>Backend</dt>
            <dd>Postgres &middot; Redis &middot; Kafka &middot; gRPC</dd>
          </div>
          <div className="swa-skill-row">
            <dt>Frontend</dt>
            <dd>React &middot; Next.js &middot; Tailwind &middot; Vite</dd>
          </div>
          <div className="swa-skill-row">
            <dt>Platform</dt>
            <dd>AWS &middot; Kubernetes &middot; Docker &middot; Terraform</dd>
          </div>
        </dl>
      </section>

      <footer className="swa-foot">
        <span>Avery Park</span>
        <span className="swa-foot-rule" aria-hidden="true" />
        <span>Curriculum Vitae</span>
        <span className="swa-foot-rule" aria-hidden="true" />
        <span>Page 01 / 01</span>
      </footer>
    </PageFrame>
  )
}
