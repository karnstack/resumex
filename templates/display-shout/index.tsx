import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function DisplayShout() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-display-shout">
      <div className="dpsh-banner">
        <div className="dpsh-banner-eyebrow">
          <span>Curriculum Vitae</span>
          <span className="dpsh-eb-sep">/</span>
          <span>2026 Edition</span>
          <span className="dpsh-eb-sep">/</span>
          <span>NYC</span>
        </div>
        <h1 className="dpsh-name">AVERY PARK</h1>
        <div className="dpsh-banner-foot">
          <span className="dpsh-bf-role">Senior Software Engineer · Platform</span>
          <span className="dpsh-bf-rule" />
          <span className="dpsh-bf-meta">Backends. Platforms. Boring in production.</span>
        </div>
      </div>

      <div className="dpsh-body">
        <header className="dpsh-contact">
          <a href="mailto:avery@example.com">avery@example.com</a>
          <span className="dpsh-c-sep">·</span>
          <a href="https://averypark.dev">averypark.dev</a>
          <span className="dpsh-c-sep">·</span>
          <a href="https://github.com/averypark">github.com/averypark</a>
          <span className="dpsh-c-sep">·</span>
          <a href="https://linkedin.com/in/averypark">in/averypark</a>
          <span className="dpsh-c-sep">·</span>
          <span>New York, NY</span>
        </header>

        <section className="dpsh-section" data-print-entry="true">
          <h2 className="dpsh-h2">Profile</h2>
          <p className="dpsh-lede">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </section>

        <section className="dpsh-section" data-print-entry="true">
          <h2 className="dpsh-h2">Experience</h2>

          <div className="dpsh-entry" data-print-entry="true">
            <div className="dpsh-entry-head">
              <div className="dpsh-role">Senior Software Engineer</div>
              <div className="dpsh-dates">2024 — Now</div>
            </div>
            <div className="dpsh-org">Coral Labs · New York, NY</div>
            <ul className="dpsh-bullets">
              <li>Sharded the events Kafka cluster. Cut p99 by three.</li>
              <li>Owned platform on-call. Pages down 60% across two quarters.</li>
              <li>Mentored four engineers through L4 to L5 promotions.</li>
            </ul>
          </div>

          <div className="dpsh-entry" data-print-entry="true">
            <div className="dpsh-entry-head">
              <div className="dpsh-role">Software Engineer 2</div>
              <div className="dpsh-dates">2022 — 2024</div>
            </div>
            <div className="dpsh-org">Coral Labs · New York, NY</div>
            <ul className="dpsh-bullets">
              <li>Built the billing pipeline — 12M events / day on Kafka and Postgres.</li>
              <li>Shipped the feature-flag service used by forty-plus services.</li>
            </ul>
          </div>

          <div className="dpsh-entry" data-print-entry="true">
            <div className="dpsh-entry-head">
              <div className="dpsh-role">Software Engineer</div>
              <div className="dpsh-dates">2020 — 2022</div>
            </div>
            <div className="dpsh-org">Acme Inc · Remote</div>
            <ul className="dpsh-bullets">
              <li>Shipped the company's first public API. OAuth2, three SDKs.</li>
              <li>Extracted auth into a standalone identity service. Unblocked SSO.</li>
              <li>Cut average build time from eleven minutes to ninety seconds.</li>
            </ul>
          </div>

          <div className="dpsh-entry" data-print-entry="true">
            <div className="dpsh-entry-head">
              <div className="dpsh-role">Software Engineer Intern</div>
              <div className="dpsh-dates">2018</div>
            </div>
            <div className="dpsh-org">Bytework · Remote</div>
            <ul className="dpsh-bullets">
              <li>Internal log aggregator on Kafka. Earned a return offer.</li>
            </ul>
          </div>
        </section>

        <section className="dpsh-section" data-print-entry="true">
          <h2 className="dpsh-h2">Projects</h2>
          <div className="dpsh-entry" data-print-entry="true">
            <div className="dpsh-entry-head">
              <div className="dpsh-role">Loomroute</div>
              <div className="dpsh-dates">Go · OSS</div>
            </div>
            <div className="dpsh-org">URL routing library used by ~200 small SaaS apps.</div>
          </div>
          <div className="dpsh-entry" data-print-entry="true">
            <div className="dpsh-entry-head">
              <div className="dpsh-role">Tinytrace</div>
              <div className="dpsh-dates">Rust · OSS</div>
            </div>
            <div className="dpsh-org">Minimal distributed tracing — span model, OTLP.</div>
          </div>
        </section>

        <section className="dpsh-section" data-print-entry="true">
          <h2 className="dpsh-h2">Education</h2>
          <div className="dpsh-entry" data-print-entry="true">
            <div className="dpsh-entry-head">
              <div className="dpsh-role">B.S. Computer Science</div>
              <div className="dpsh-dates">2014 — 2018</div>
            </div>
            <div className="dpsh-org">Northern State University</div>
          </div>
        </section>

        <section className="dpsh-section" data-print-entry="true">
          <h2 className="dpsh-h2">Skills</h2>
          <dl className="dpsh-skills">
            <div className="dpsh-skill-row">
              <dt>Languages</dt>
              <dd>Go · TypeScript · Python · Rust</dd>
            </div>
            <div className="dpsh-skill-row">
              <dt>Backend</dt>
              <dd>Postgres · Redis · Kafka · gRPC</dd>
            </div>
            <div className="dpsh-skill-row">
              <dt>Frontend</dt>
              <dd>React · Next.js · Tailwind · Vite</dd>
            </div>
            <div className="dpsh-skill-row">
              <dt>Platform</dt>
              <dd>AWS · Kubernetes · Docker · Terraform</dd>
            </div>
          </dl>
        </section>
      </div>
    </PageFrame>
  )
}
