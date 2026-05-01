import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function BrutalistRedbar() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-brutalist-redbar">
      <header className="bru-head">
        <div className="bru-stamp">
          <span>RESUME</span>
          <span className="bru-stamp-dot" />
          <span>FILE 001</span>
        </div>
        <div className="bru-redslab">
          <span>SUBJECT</span>
        </div>
        <h1 className="bru-name">AVERY PARK</h1>
        <div className="bru-rule-red" aria-hidden="true" />
        <div className="bru-headline">
          <div className="bru-title">SENIOR SOFTWARE ENGINEER &mdash; PLATFORM</div>
          <div className="bru-contact">
            <span>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </span>
            <span className="bru-pipe">|</span>
            <span>NEW YORK, NY</span>
            <span className="bru-pipe">|</span>
            <span>
              <a href="https://averypark.dev">averypark.dev</a>
            </span>
            <span className="bru-pipe">|</span>
            <span>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </span>
            <span className="bru-pipe">|</span>
            <span>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </span>
          </div>
        </div>
      </header>

      <section className="bru-section" data-print-entry="true">
        <h2 className="bru-h2">
          <span className="bru-h2-mark">[ 01 ]</span> SUMMARY
        </h2>
        <p className="bru-lede">
          Builds resilient backend systems and the platforms that run them. Prefers small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="bru-section" data-print-entry="true">
        <h2 className="bru-h2">
          <span className="bru-h2-mark">[ 02 ]</span> EXPERIENCE
        </h2>

        <div className="bru-entry" data-print-entry="true">
          <div className="bru-entry-head">
            <div>
              <div className="bru-role">SENIOR SOFTWARE ENGINEER</div>
              <div className="bru-org">CORAL LABS &mdash; NEW YORK, NY</div>
            </div>
            <div className="bru-date">2024.03 &rarr; PRESENT</div>
          </div>
          <ul className="bru-bullets">
            <li>Migrated events pipeline to a sharded Kafka cluster. p99 down 3x.</li>
            <li>Owned platform on-call. Pages down 60% via better alerting and runbooks.</li>
            <li>Mentored four engineers through L4 to L5 promotions.</li>
          </ul>
        </div>

        <div className="bru-entry" data-print-entry="true">
          <div className="bru-entry-head">
            <div>
              <div className="bru-role">SOFTWARE ENGINEER 2</div>
              <div className="bru-org">CORAL LABS &mdash; NEW YORK, NY</div>
            </div>
            <div className="bru-date">2022.08 &rarr; 2024.03</div>
          </div>
          <ul className="bru-bullets">
            <li>Designed billing pipeline. 12M events/day on Kafka and Postgres.</li>
            <li>Built feature-flag service used across 40+ microservices.</li>
            <li>Drove architecture-level reviews for cross-team launches.</li>
          </ul>
        </div>

        <div className="bru-entry" data-print-entry="true">
          <div className="bru-entry-head">
            <div>
              <div className="bru-role">SOFTWARE ENGINEER</div>
              <div className="bru-org">ACME INC &mdash; REMOTE</div>
            </div>
            <div className="bru-date">2020.01 &rarr; 2022.07</div>
          </div>
          <ul className="bru-bullets">
            <li>Shipped first public API. Rate limits, OAuth2, SDKs in three languages.</li>
            <li>Extracted auth from monolith. Standalone identity service. Unblocked SSO.</li>
            <li>Cut average build times from 11min to 90s.</li>
          </ul>
        </div>

        <div className="bru-entry" data-print-entry="true">
          <div className="bru-entry-head">
            <div>
              <div className="bru-role">SOFTWARE ENGINEER INTERN</div>
              <div className="bru-org">BYTEWORK &mdash; REMOTE</div>
            </div>
            <div className="bru-date">2018.05 &rarr; 2018.08</div>
          </div>
          <ul className="bru-bullets">
            <li>Built an internal log aggregator in Go on Kafka. Earned a return offer.</li>
          </ul>
        </div>
      </section>

      <section className="bru-section" data-print-entry="true">
        <h2 className="bru-h2">
          <span className="bru-h2-mark">[ 03 ]</span> PROJECTS
        </h2>
        <div className="bru-entry" data-print-entry="true">
          <div className="bru-entry-head">
            <div>
              <div className="bru-role">LOOMROUTE</div>
              <div className="bru-org">URL ROUTING &mdash; GO &mdash; OSS</div>
            </div>
            <div className="bru-date">LIVE / 2024</div>
          </div>
          <p className="bru-prose">
            Routing library used by ~200 small SaaS apps. Live since 2024.
          </p>
        </div>
        <div className="bru-entry" data-print-entry="true">
          <div className="bru-entry-head">
            <div>
              <div className="bru-role">TINYTRACE</div>
              <div className="bru-org">DISTRIBUTED TRACING &mdash; RUST &mdash; OSS</div>
            </div>
            <div className="bru-date">REPO</div>
          </div>
          <p className="bru-prose">Minimal tracing lib. Span model. OTLP export. ~3k lines.</p>
        </div>
      </section>

      <section className="bru-section" data-print-entry="true">
        <h2 className="bru-h2">
          <span className="bru-h2-mark">[ 04 ]</span> EDUCATION
        </h2>
        <div className="bru-entry" data-print-entry="true">
          <div className="bru-entry-head">
            <div>
              <div className="bru-role">B.S. COMPUTER SCIENCE</div>
              <div className="bru-org">NORTHERN STATE UNIVERSITY</div>
            </div>
            <div className="bru-date">2014 &rarr; 2018</div>
          </div>
        </div>
      </section>

      <section className="bru-section" data-print-entry="true">
        <h2 className="bru-h2">
          <span className="bru-h2-mark">[ 05 ]</span> SKILLS
        </h2>
        <dl className="bru-skills">
          <div className="bru-skill-row">
            <dt>LANG</dt>
            <dd>Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="bru-skill-row">
            <dt>BACKEND</dt>
            <dd>Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="bru-skill-row">
            <dt>FRONTEND</dt>
            <dd>React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="bru-skill-row">
            <dt>PLATFORM</dt>
            <dd>AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>
    </PageFrame>
  )
}
