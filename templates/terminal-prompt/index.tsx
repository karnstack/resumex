import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function TerminalPrompt() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-terminal-prompt">
      <header className="tp-head" data-print-entry="true">
        <div className="tp-line tp-line-meta">
          <span className="tp-marker">{'>'}</span>
          <span className="tp-meta-text">interactive · readline · 80×24</span>
        </div>
        <div className="tp-name-row">
          <span className="tp-marker tp-marker-lg">{'>'}</span>
          <h1 className="tp-name">
            Avery Park
            <span className="tp-cursor" aria-hidden="true" />
          </h1>
        </div>
        <div className="tp-line tp-title-line">
          <span className="tp-marker">{'>'}</span>
          <span className="tp-title">senior software engineer · platform</span>
        </div>
        <div className="tp-contact">
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-key">email</span>
            <a className="tp-val tp-link" href="mailto:avery@example.com">
              avery@example.com
            </a>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-key">loc</span>
            <span className="tp-val">New York, NY</span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-key">site</span>
            <a className="tp-val tp-link" href="https://averypark.dev">
              averypark.dev
            </a>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-key">github</span>
            <a className="tp-val tp-link" href="https://github.com/averypark">
              github.com/averypark
            </a>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-key">linkedin</span>
            <a className="tp-val tp-link" href="https://linkedin.com/in/averypark">
              in/averypark
            </a>
          </div>
        </div>
      </header>

      <section className="tp-section" data-print-entry="true">
        <h2 className="tp-section-label">
          <span className="tp-marker tp-marker-section">{'>'}</span>
          <span>summary</span>
        </h2>
        <div className="tp-line tp-line-prose">
          <span className="tp-marker">{'>'}</span>
          <p className="tp-prose">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </div>
      </section>

      <section className="tp-section" data-print-entry="true">
        <h2 className="tp-section-label">
          <span className="tp-marker tp-marker-section">{'>'}</span>
          <span>experience</span>
        </h2>

        <div className="tp-entry" data-print-entry="true">
          <div className="tp-line tp-line-head">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-role">Senior Software Engineer</span>
            <span className="tp-sep">·</span>
            <span className="tp-company">Coral Labs</span>
            <span className="tp-meta">Mar 2024 — Present · NYC</span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-bullet">
              migrated events pipeline to a sharded Kafka cluster; p99 latency cut 3×.
            </span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-bullet">
              owned platform on-call across two quarters; reduced pages 60% via better alerting +
              runbooks.
            </span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-bullet">mentored four engineers through L4 → L5 promotions.</span>
          </div>
        </div>

        <div className="tp-entry" data-print-entry="true">
          <div className="tp-line tp-line-head">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-role">Software Engineer 2</span>
            <span className="tp-sep">·</span>
            <span className="tp-company">Coral Labs</span>
            <span className="tp-meta">Aug 2022 — Mar 2024 · NYC</span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-bullet">
              designed billing pipeline (12M events/day on Kafka + Postgres) from spec to
              production.
            </span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-bullet">
              built internal feature-flag service consumed by 40+ microservices.
            </span>
          </div>
        </div>

        <div className="tp-entry" data-print-entry="true">
          <div className="tp-line tp-line-head">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-role">Software Engineer</span>
            <span className="tp-sep">·</span>
            <span className="tp-company">Acme Inc</span>
            <span className="tp-meta">Jan 2020 — Jul 2022 · Remote</span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-bullet">
              shipped first public API with rate limiting, OAuth2, and SDKs in three languages.
            </span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-bullet">
              extracted monolith auth into a standalone identity service, unblocking SSO.
            </span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-bullet">
              cut average build times from 11 minutes to 90 seconds via parallel test matrix.
            </span>
          </div>
        </div>

        <div className="tp-entry" data-print-entry="true">
          <div className="tp-line tp-line-head">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-role">Software Engineer Intern</span>
            <span className="tp-sep">·</span>
            <span className="tp-company">Bytework</span>
            <span className="tp-meta">May 2018 — Aug 2018 · Remote</span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-bullet">
              built an internal log aggregator in Go on top of Kafka. Earned a return offer.
            </span>
          </div>
        </div>
      </section>

      <section className="tp-section" data-print-entry="true">
        <h2 className="tp-section-label">
          <span className="tp-marker tp-marker-section">{'>'}</span>
          <span>projects</span>
        </h2>
        <div className="tp-entry" data-print-entry="true">
          <div className="tp-line tp-line-head">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-role">loomroute</span>
            <span className="tp-sep">·</span>
            <span className="tp-company">URL routing lib · Go · OSS</span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-bullet">
              URL routing library used by ~200 small SaaS apps. Live since 2024.
            </span>
          </div>
        </div>
        <div className="tp-entry" data-print-entry="true">
          <div className="tp-line tp-line-head">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-role">tinytrace</span>
            <span className="tp-sep">·</span>
            <span className="tp-company">distributed tracing · Rust · OSS</span>
          </div>
          <div className="tp-line">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-bullet">
              Minimal distributed tracing library — span model, OTLP export, ~3k lines.
            </span>
          </div>
        </div>
      </section>

      <section className="tp-section" data-print-entry="true">
        <h2 className="tp-section-label">
          <span className="tp-marker tp-marker-section">{'>'}</span>
          <span>education</span>
        </h2>
        <div className="tp-entry" data-print-entry="true">
          <div className="tp-line tp-line-head">
            <span className="tp-marker">{'>'}</span>
            <span className="tp-role">B.S. Computer Science</span>
            <span className="tp-sep">·</span>
            <span className="tp-company">Northern State University</span>
            <span className="tp-meta">2014 — 2018</span>
          </div>
        </div>
      </section>

      <section className="tp-section" data-print-entry="true">
        <h2 className="tp-section-label">
          <span className="tp-marker tp-marker-section">{'>'}</span>
          <span>skills</span>
        </h2>
        <div className="tp-line">
          <span className="tp-marker">{'>'}</span>
          <span className="tp-key tp-skill-key">languages</span>
          <span className="tp-skill-val">Go, TypeScript, Python, Rust</span>
        </div>
        <div className="tp-line">
          <span className="tp-marker">{'>'}</span>
          <span className="tp-key tp-skill-key">backend</span>
          <span className="tp-skill-val">Postgres, Redis, Kafka, gRPC</span>
        </div>
        <div className="tp-line">
          <span className="tp-marker">{'>'}</span>
          <span className="tp-key tp-skill-key">frontend</span>
          <span className="tp-skill-val">React, Next.js, Tailwind, Vite</span>
        </div>
        <div className="tp-line">
          <span className="tp-marker">{'>'}</span>
          <span className="tp-key tp-skill-key">platform</span>
          <span className="tp-skill-val">AWS, Kubernetes, Docker, Terraform</span>
        </div>
      </section>

      <footer className="tp-footer">
        <span className="tp-marker">{'>'}</span>
        <span className="tp-comment">resume.tsx · v2026.05</span>
      </footer>
    </PageFrame>
  )
}
