import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function BrutalistGrid() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-brutalist-grid">
      <div className="bg-corner bg-tl">+</div>
      <div className="bg-corner bg-tr">+</div>
      <div className="bg-corner bg-bl">+</div>
      <div className="bg-corner bg-br">+</div>

      <header className="bg-head">
        <div className="bg-head-left">
          <div className="bg-eyebrow">
            <span>GRID 014mm</span>
            <span className="bg-eyebrow-dot" />
            <span>FILE 001</span>
          </div>
          <h1 className="bg-name">AVERY PARK</h1>
          <div className="bg-title">SENIOR SOFTWARE ENGINEER &mdash; PLATFORM</div>
        </div>
        <div className="bg-contact">
          <div>
            <span className="bg-key">EML</span>{' '}
            <a href="mailto:avery@example.com">avery@example.com</a>
          </div>
          <div>
            <span className="bg-key">LOC</span> NEW YORK, NY
          </div>
          <div>
            <span className="bg-key">WEB</span> <a href="https://averypark.dev">averypark.dev</a>
          </div>
          <div>
            <span className="bg-key">GIT</span>{' '}
            <a href="https://github.com/averypark">github.com/averypark</a>
          </div>
          <div>
            <span className="bg-key">LIN</span>{' '}
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </div>
        </div>
      </header>

      <section className="bg-section" data-print-entry="true">
        <h2 className="bg-h2">
          <span className="bg-h2-num">01</span>
          <span>SUMMARY</span>
        </h2>
        <p className="bg-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="bg-section" data-print-entry="true">
        <h2 className="bg-h2">
          <span className="bg-h2-num">02</span>
          <span>EXPERIENCE</span>
        </h2>

        <div className="bg-entry" data-print-entry="true">
          <div className="bg-entry-head">
            <div>
              <div className="bg-role">SENIOR SOFTWARE ENGINEER</div>
              <div className="bg-org">CORAL LABS &mdash; NEW YORK, NY</div>
            </div>
            <div className="bg-date">2024.03 &rarr; PRESENT</div>
          </div>
          <ul className="bg-bullets">
            <li>Migrated events pipeline to a sharded Kafka cluster. p99 down 3x.</li>
            <li>Owned platform on-call. Pages down 60% via better alerting and runbooks.</li>
            <li>Mentored four engineers through L4 to L5.</li>
          </ul>
        </div>

        <div className="bg-entry" data-print-entry="true">
          <div className="bg-entry-head">
            <div>
              <div className="bg-role">SOFTWARE ENGINEER 2</div>
              <div className="bg-org">CORAL LABS &mdash; NEW YORK, NY</div>
            </div>
            <div className="bg-date">2022.08 &rarr; 2024.03</div>
          </div>
          <ul className="bg-bullets">
            <li>Designed billing pipeline. 12M events/day. Kafka and Postgres.</li>
            <li>Built feature-flag service used across 40+ microservices.</li>
            <li>Drove architecture-level reviews for cross-team launches.</li>
          </ul>
        </div>

        <div className="bg-entry" data-print-entry="true">
          <div className="bg-entry-head">
            <div>
              <div className="bg-role">SOFTWARE ENGINEER</div>
              <div className="bg-org">ACME INC &mdash; REMOTE</div>
            </div>
            <div className="bg-date">2020.01 &rarr; 2022.07</div>
          </div>
          <ul className="bg-bullets">
            <li>Shipped first public API. Rate limits, OAuth2, SDKs in three languages.</li>
            <li>Extracted auth from monolith. Standalone identity service. Unblocked SSO.</li>
            <li>Cut average build times from 11min to 90s.</li>
          </ul>
        </div>

        <div className="bg-entry" data-print-entry="true">
          <div className="bg-entry-head">
            <div>
              <div className="bg-role">SOFTWARE ENGINEER INTERN</div>
              <div className="bg-org">BYTEWORK &mdash; REMOTE</div>
            </div>
            <div className="bg-date">2018.05 &rarr; 2018.08</div>
          </div>
          <ul className="bg-bullets">
            <li>Built an internal log aggregator in Go on Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="bg-section" data-print-entry="true">
        <h2 className="bg-h2">
          <span className="bg-h2-num">03</span>
          <span>PROJECTS</span>
        </h2>
        <div className="bg-entry" data-print-entry="true">
          <div className="bg-entry-head">
            <div>
              <div className="bg-role">LOOMROUTE</div>
              <div className="bg-org">URL ROUTING &mdash; GO &mdash; OSS</div>
            </div>
            <div className="bg-date">LIVE / 2024</div>
          </div>
          <p className="bg-prose">Routing library used by ~200 small SaaS apps. Live since 2024.</p>
        </div>
        <div className="bg-entry" data-print-entry="true">
          <div className="bg-entry-head">
            <div>
              <div className="bg-role">TINYTRACE</div>
              <div className="bg-org">DISTRIBUTED TRACING &mdash; RUST &mdash; OSS</div>
            </div>
            <div className="bg-date">REPO</div>
          </div>
          <p className="bg-prose">Minimal tracing lib. Span model. OTLP export. ~3k lines.</p>
        </div>
      </section>

      <section className="bg-section" data-print-entry="true">
        <h2 className="bg-h2">
          <span className="bg-h2-num">04</span>
          <span>EDUCATION</span>
        </h2>
        <div className="bg-entry" data-print-entry="true">
          <div className="bg-entry-head">
            <div>
              <div className="bg-role">B.S. COMPUTER SCIENCE</div>
              <div className="bg-org">NORTHERN STATE UNIVERSITY</div>
            </div>
            <div className="bg-date">2014 &rarr; 2018</div>
          </div>
        </div>
      </section>

      <section className="bg-section" data-print-entry="true">
        <h2 className="bg-h2">
          <span className="bg-h2-num">05</span>
          <span>SKILLS</span>
        </h2>
        <dl className="bg-skills">
          <div className="bg-skill-row">
            <dt>LANGUAGES</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="bg-skill-row">
            <dt>BACKEND</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="bg-skill-row">
            <dt>FRONTEND</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="bg-skill-row">
            <dt>PLATFORM</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
