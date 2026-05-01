import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Display() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-display">
      <header className="dp-head">
        <div className="dp-eyebrow">
          <span>Curriculum Vitae</span>
          <span className="dp-eyebrow-dot" />
          <span>NYC</span>
          <span className="dp-eyebrow-dot" />
          <span>2026</span>
        </div>
        <h1 className="dp-name">Avery Park</h1>
        <div className="dp-tag">Senior software engineer building boring, useful platforms.</div>
        <div className="dp-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="dp-sep">/</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="dp-sep">/</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="dp-sep">/</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
          <span className="dp-sep">/</span>
          <span>New York, NY</span>
        </div>
      </header>

      <section className="dp-section" data-print-entry="true">
        <h2 className="dp-h2">Profile</h2>
        <p className="dp-lede">
          Resilient backend systems and the platforms that run them. Small, reversible changes.
          Clear interfaces. Boring in production, useful to its users.
        </p>
      </section>

      <section className="dp-section" data-print-entry="true">
        <h2 className="dp-h2">Experience</h2>

        <div className="dp-entry" data-print-entry="true">
          <div className="dp-entry-head">
            <div className="dp-role">Senior Software Engineer</div>
            <div className="dp-dates">2024 — Now</div>
          </div>
          <div className="dp-org">Coral Labs · NYC</div>
          <ul className="dp-bullets">
            <li>Sharded the events Kafka cluster. Cut p99 by three.</li>
            <li>Owned platform on-call. Pages down 60%.</li>
            <li>Mentored four engineers through L4 to L5.</li>
          </ul>
        </div>

        <div className="dp-entry" data-print-entry="true">
          <div className="dp-entry-head">
            <div className="dp-role">Software Engineer 2</div>
            <div className="dp-dates">2022 — 2024</div>
          </div>
          <div className="dp-org">Coral Labs · NYC</div>
          <ul className="dp-bullets">
            <li>Built the billing pipeline — 12M events / day on Kafka and Postgres.</li>
            <li>Shipped the feature-flag service used by forty services.</li>
          </ul>
        </div>

        <div className="dp-entry" data-print-entry="true">
          <div className="dp-entry-head">
            <div className="dp-role">Software Engineer</div>
            <div className="dp-dates">2020 — 2022</div>
          </div>
          <div className="dp-org">Acme Inc · Remote</div>
          <ul className="dp-bullets">
            <li>Shipped the company's first public API. Rate limiting, OAuth2, three SDKs.</li>
            <li>Extracted auth into a standalone identity service. Unblocked SSO.</li>
            <li>Cut build time from eleven minutes to ninety seconds.</li>
          </ul>
        </div>

        <div className="dp-entry" data-print-entry="true">
          <div className="dp-entry-head">
            <div className="dp-role">Software Engineer Intern</div>
            <div className="dp-dates">2018</div>
          </div>
          <div className="dp-org">Bytework · Remote</div>
          <ul className="dp-bullets">
            <li>Internal log aggregator on Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="dp-section" data-print-entry="true">
        <h2 className="dp-h2">Projects</h2>
        <div className="dp-entry" data-print-entry="true">
          <div className="dp-entry-head">
            <div className="dp-role">Loomroute</div>
            <div className="dp-dates">Go · OSS</div>
          </div>
          <div className="dp-org">URL routing library used by ~200 small SaaS apps.</div>
        </div>
        <div className="dp-entry" data-print-entry="true">
          <div className="dp-entry-head">
            <div className="dp-role">Tinytrace</div>
            <div className="dp-dates">Rust · OSS</div>
          </div>
          <div className="dp-org">Minimal distributed tracing — span model, OTLP, ~3k lines.</div>
        </div>
      </section>

      <section className="dp-section" data-print-entry="true">
        <h2 className="dp-h2">Education</h2>
        <div className="dp-entry" data-print-entry="true">
          <div className="dp-entry-head">
            <div className="dp-role">B.S. Computer Science</div>
            <div className="dp-dates">2014 — 2018</div>
          </div>
          <div className="dp-org">Northern State University</div>
        </div>
      </section>

      <section className="dp-section" data-print-entry="true">
        <h2 className="dp-h2">Skills</h2>
        <dl className="dp-skills">
          <div className="dp-skill-row">
            <dt>Languages</dt>
            <dd>Go · TypeScript · Python · Rust</dd>
          </div>
          <div className="dp-skill-row">
            <dt>Backend</dt>
            <dd>Postgres · Redis · Kafka · gRPC</dd>
          </div>
          <div className="dp-skill-row">
            <dt>Frontend</dt>
            <dd>React · Next.js · Tailwind · Vite</dd>
          </div>
          <div className="dp-skill-row">
            <dt>Platform</dt>
            <dd>AWS · Kubernetes · Docker · Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
