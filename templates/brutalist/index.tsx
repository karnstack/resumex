import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Brutalist() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-brutalist">
      <header className="br-head">
        <div className="br-head-name">
          <div className="br-eyebrow">
            <span>FILE / 001</span>
            <span className="br-sep">//</span>
            <span>RESUME</span>
          </div>
          <h1 className="br-name">
            AVERY
            <br />
            PARK.
          </h1>
          <div className="br-title">SENIOR SOFTWARE ENGINEER &mdash; PLATFORM</div>
        </div>
        <div className="br-contact" aria-label="contact">
          <div className="br-contact-row">
            <span className="br-key">EML</span>
            <a href="mailto:avery@example.com">avery@example.com</a>
          </div>
          <div className="br-contact-row">
            <span className="br-key">LOC</span>
            <span>NEW YORK, NY</span>
          </div>
          <div className="br-contact-row">
            <span className="br-key">WEB</span>
            <a href="https://averypark.dev">averypark.dev</a>
          </div>
          <div className="br-contact-row">
            <span className="br-key">GIT</span>
            <a href="https://github.com/averypark">github.com/averypark</a>
          </div>
          <div className="br-contact-row">
            <span className="br-key">LIN</span>
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </div>
        </div>
      </header>

      <section className="br-section" data-print-entry="true">
        <h2 className="br-h2">
          <span className="br-h2-num">[01]</span> SUMMARY
        </h2>
        <div className="br-section-body">
          <p className="br-lede">
            Builds resilient backend systems and the platforms that run them. Prefers small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </div>
      </section>

      <section className="br-section" data-print-entry="true">
        <h2 className="br-h2">
          <span className="br-h2-num">[02]</span> EXPERIENCE
        </h2>
        <div className="br-section-body">
          <div className="br-entry" data-print-entry="true">
            <div className="br-entry-head">
              <div>
                <div className="br-role">SENIOR SOFTWARE ENGINEER</div>
                <div className="br-org">CORAL LABS &mdash; NEW YORK, NY</div>
              </div>
              <div className="br-date">2024 / 03 &rarr; PRESENT</div>
            </div>
            <ul className="br-bullets">
              <li>Migrated events pipeline to a sharded Kafka cluster. Cut p99 latency 3x.</li>
              <li>Owned platform on-call. Pages down 60% via sharper alerts and runbooks.</li>
              <li>Mentored four engineers through L4 to L5.</li>
            </ul>
          </div>

          <div className="br-entry" data-print-entry="true">
            <div className="br-entry-head">
              <div>
                <div className="br-role">SOFTWARE ENGINEER 2</div>
                <div className="br-org">CORAL LABS &mdash; NEW YORK, NY</div>
              </div>
              <div className="br-date">2022 / 08 &rarr; 2024 / 03</div>
            </div>
            <ul className="br-bullets">
              <li>Designed billing pipeline. 12M events/day. Kafka and Postgres.</li>
              <li>Built feature-flag service used across 40+ microservices.</li>
              <li>Drove architecture reviews for cross-team launches.</li>
            </ul>
          </div>

          <div className="br-entry" data-print-entry="true">
            <div className="br-entry-head">
              <div>
                <div className="br-role">SOFTWARE ENGINEER</div>
                <div className="br-org">ACME INC &mdash; REMOTE</div>
              </div>
              <div className="br-date">2020 / 01 &rarr; 2022 / 07</div>
            </div>
            <ul className="br-bullets">
              <li>Shipped first public API. Rate limits, OAuth2, SDKs in three languages.</li>
              <li>Extracted auth from the monolith. Standalone identity service. Unblocked SSO.</li>
              <li>Cut average build times from 11min to 90s.</li>
            </ul>
          </div>

          <div className="br-entry" data-print-entry="true">
            <div className="br-entry-head">
              <div>
                <div className="br-role">SOFTWARE ENGINEER INTERN</div>
                <div className="br-org">BYTEWORK &mdash; REMOTE</div>
              </div>
              <div className="br-date">2018 / 05 &rarr; 2018 / 08</div>
            </div>
            <ul className="br-bullets">
              <li>Built an internal log aggregator in Go on Kafka. Earned a return offer.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="br-section" data-print-entry="true">
        <h2 className="br-h2">
          <span className="br-h2-num">[03]</span> PROJECTS
        </h2>
        <div className="br-section-body">
          <div className="br-entry" data-print-entry="true">
            <div className="br-entry-head">
              <div>
                <div className="br-role">LOOMROUTE</div>
                <div className="br-org">URL ROUTING LIB &mdash; GO &mdash; OSS</div>
              </div>
              <div className="br-date">LIVE / 2024</div>
            </div>
            <p className="br-prose">
              Routing library used by ~200 small SaaS apps. Live since 2024.
            </p>
          </div>
          <div className="br-entry" data-print-entry="true">
            <div className="br-entry-head">
              <div>
                <div className="br-role">TINYTRACE</div>
                <div className="br-org">DISTRIBUTED TRACING &mdash; RUST &mdash; OSS</div>
              </div>
              <div className="br-date">REPO</div>
            </div>
            <p className="br-prose">Minimal tracing lib. Span model. OTLP export. ~3k lines.</p>
          </div>
        </div>
      </section>

      <section className="br-section" data-print-entry="true">
        <h2 className="br-h2">
          <span className="br-h2-num">[04]</span> EDUCATION
        </h2>
        <div className="br-section-body">
          <div className="br-entry" data-print-entry="true">
            <div className="br-entry-head">
              <div>
                <div className="br-role">B.S. COMPUTER SCIENCE</div>
                <div className="br-org">NORTHERN STATE UNIVERSITY</div>
              </div>
              <div className="br-date">2014 &rarr; 2018</div>
            </div>
          </div>
        </div>
      </section>

      <section className="br-section" data-print-entry="true">
        <h2 className="br-h2">
          <span className="br-h2-num">[05]</span> SKILLS
        </h2>
        <div className="br-section-body">
          <dl className="br-skills">
            <div className="br-skill-row">
              <dt>LANGUAGES</dt>
              <dd>Go, TypeScript, Python, Rust</dd>
            </div>
            <div className="br-skill-row">
              <dt>BACKEND</dt>
              <dd>Postgres, Redis, Kafka, gRPC</dd>
            </div>
            <div className="br-skill-row">
              <dt>FRONTEND</dt>
              <dd>React, Next.js, Tailwind, Vite</dd>
            </div>
            <div className="br-skill-row">
              <dt>PLATFORM</dt>
              <dd>AWS, Kubernetes, Docker, Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
