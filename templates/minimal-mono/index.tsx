import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function MinimalMono() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-minimal-mono">
      <header className="header">
        <div>
          <h1>Avery Park</h1>
          <div className="title">senior software engineer · platform</div>
        </div>
        <div className="contact">
          <div>
            <a href="mailto:avery@example.com">avery@example.com</a>
          </div>
          <div>New York, NY</div>
          <div>
            <a href="https://example.com">averypark.dev</a>
          </div>
          <div>
            <a href="https://github.com">github.com/averypark</a>
          </div>
          <div>
            <a href="https://linkedin.com">in/averypark</a>
          </div>
        </div>
      </header>

      <section>
        <h2>Summary</h2>
        <p>
          I build <strong>resilient backend systems and the platforms that run them</strong>. I
          prefer small, reversible changes and clear interfaces. Software should be{' '}
          <em>boring in production</em> and useful to its users.
        </p>
      </section>

      <section>
        <h2>Experience</h2>

        <div className="entry" data-print-entry="true">
          <div className="entry-head">
            <div>
              <span className="entry-title">Senior Software Engineer</span>{' '}
              <span className="entry-subtitle">@ Coral Labs</span>
            </div>
            <div className="entry-meta">Mar 2024 - Present · New York, NY</div>
          </div>
          <ul>
            <li>
              Led the migration of the events pipeline to a{' '}
              <strong>horizontally-sharded Kafka cluster</strong>, reducing p99 latency by 3x.
            </li>
            <li>
              Owned the on-call rotation for the platform team - <strong>reduced pages 60%</strong>{' '}
              over two quarters through better alerting and runbooks.
            </li>
            <li>Mentored four engineers through L4 → L5 promotions.</li>
          </ul>
        </div>

        <div className="entry" data-print-entry="true">
          <div className="entry-head">
            <div>
              <span className="entry-title">Software Engineer 2</span>{' '}
              <span className="entry-subtitle">@ Coral Labs</span>
            </div>
            <div className="entry-meta">Aug 2022 - Mar 2024 · New York, NY</div>
          </div>
          <ul>
            <li>
              Designed and shipped the <strong>billing pipeline</strong> processing 12M events/day
              on Kafka + Postgres.
            </li>
            <li>
              Built the <strong>internal feature-flag service</strong> used across 40+
              microservices.
            </li>
            <li>
              Drove <strong>architecture-level reviews</strong> for cross-team launches.
            </li>
          </ul>
        </div>

        <div className="entry" data-print-entry="true">
          <div className="entry-head">
            <div>
              <span className="entry-title">Software Engineer</span>{' '}
              <span className="entry-subtitle">@ Acme Inc</span>
            </div>
            <div className="entry-meta">Jan 2020 - Jul 2022 · Remote</div>
          </div>
          <ul>
            <li>
              Shipped the company's first <strong>public API</strong> with rate limiting, OAuth2,
              and SDKs in three languages.
            </li>
            <li>
              Migrated the legacy monolith's auth module to a{' '}
              <strong>standalone identity service</strong>, unblocking SSO integrations.
            </li>
            <li>Cut average build times from 11 min to 90s by parallelizing the test matrix.</li>
          </ul>
        </div>

        <div className="entry" data-print-entry="true">
          <div className="entry-head">
            <div>
              <span className="entry-title">Software Engineer Intern</span>{' '}
              <span className="entry-subtitle">@ Bytework</span>
            </div>
            <div className="entry-meta">May 2018 - Aug 2018 · Remote</div>
          </div>
          <ul>
            <li>
              Built a small <strong>internal log aggregator</strong> in Go on top of Kafka.
            </li>
            <li>
              Earned a <strong>return offer</strong> for a full-time role.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="entry" data-print-entry="true">
          <div className="entry-head">
            <div>
              <span className="entry-title">Loomroute</span>{' '}
              <span className="entry-subtitle">@ loomroute.dev</span>
            </div>
            <div className="entry-meta">Live · Go · Postgres · Cloudflare Workers</div>
          </div>
          <p>Open-source URL routing library used by ~200 small SaaS apps. Live since 2024.</p>
        </div>

        <div className="entry" data-print-entry="true">
          <div className="entry-head">
            <div>
              <span className="entry-title">Tinytrace</span>{' '}
              <span className="entry-subtitle">@ github.com/example/tinytrace</span>
            </div>
            <div className="entry-meta">OSS · Rust</div>
          </div>
          <p>Minimal distributed tracing library - span model, OTLP export, ~3k lines.</p>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="entry" data-print-entry="true">
          <div className="entry-head">
            <div>
              <span className="entry-title">B.S. Computer Science</span>{' '}
              <span className="entry-subtitle">@ Northern State University</span>
            </div>
            <div className="entry-meta">2014 - 2018 · Remote, USA</div>
          </div>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills-row">
          <strong>Languages:</strong> Go, TypeScript, Python, Rust
        </div>
        <div className="skills-row">
          <strong>Backend:</strong> Postgres, Redis, Kafka, gRPC, GraphQL
        </div>
        <div className="skills-row">
          <strong>Frontend:</strong> React, Next.js, Tailwind, Vite
        </div>
        <div className="skills-row">
          <strong>Platform:</strong> AWS, Kubernetes, Docker, Terraform, GitHub Actions
        </div>
      </section>
    </PageFrame>
  )
}
