import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function TerminalGreen() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-terminal-green">
      <header className="tg-head" data-print-entry="true">
        <div className="tg-prompt-line">
          <span className="tg-user">avery</span>
          <span className="tg-at">@</span>
          <span className="tg-host">platform</span>
          <span className="tg-colon">:</span>
          <span className="tg-path">~</span>
          <span className="tg-dollar">$</span>
          <span className="tg-cmd">whoami</span>
        </div>
        <h1 className="tg-name">
          Avery Park
          <span className="tg-cursor" aria-hidden="true" />
        </h1>
        <div className="tg-title">senior software engineer · platform</div>
        <div className="tg-contact">
          <div className="tg-kv">
            <span className="tg-key">email</span>
            <span className="tg-eq">:</span>
            <a className="tg-val tg-link" href="mailto:avery@example.com">
              avery@example.com
            </a>
          </div>
          <div className="tg-kv">
            <span className="tg-key">loc</span>
            <span className="tg-eq">:</span>
            <span className="tg-val">New York, NY</span>
          </div>
          <div className="tg-kv">
            <span className="tg-key">site</span>
            <span className="tg-eq">:</span>
            <a className="tg-val tg-link" href="https://averypark.dev">
              averypark.dev
            </a>
          </div>
          <div className="tg-kv">
            <span className="tg-key">github</span>
            <span className="tg-eq">:</span>
            <a className="tg-val tg-link" href="https://github.com/averypark">
              github.com/averypark
            </a>
          </div>
          <div className="tg-kv">
            <span className="tg-key">linkedin</span>
            <span className="tg-eq">:</span>
            <a className="tg-val tg-link" href="https://linkedin.com/in/averypark">
              in/averypark
            </a>
          </div>
        </div>
      </header>

      <section className="tg-section" data-print-entry="true">
        <div className="tg-prompt">
          <span className="tg-dollar">$</span>
          <span className="tg-cmd">cat</span>
          <span className="tg-arg">summary.md</span>
        </div>
        <p className="tg-prose">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="tg-section" data-print-entry="true">
        <div className="tg-prompt">
          <span className="tg-dollar">$</span>
          <span className="tg-cmd">cat</span>
          <span className="tg-arg">experience.md</span>
        </div>

        <div className="tg-entry" data-print-entry="true">
          <div className="tg-entry-head">
            <span className="tg-role">Senior Software Engineer</span>
            <span className="tg-sep">@</span>
            <span className="tg-company">Coral Labs</span>
            <span className="tg-meta">Mar 2024 — Present · NYC</span>
          </div>
          <ul className="tg-bullets">
            <li>
              <span className="tg-glyph">+</span> migrated events pipeline → sharded Kafka cluster;
              p99 latency cut 3×.
            </li>
            <li>
              <span className="tg-glyph">+</span> owned platform on-call across two quarters;
              reduced pages 60% via better alerting + runbooks.
            </li>
            <li>
              <span className="tg-glyph">+</span> mentored four engineers through L4 → L5
              promotions.
            </li>
          </ul>
        </div>

        <div className="tg-entry" data-print-entry="true">
          <div className="tg-entry-head">
            <span className="tg-role">Software Engineer 2</span>
            <span className="tg-sep">@</span>
            <span className="tg-company">Coral Labs</span>
            <span className="tg-meta">Aug 2022 — Mar 2024 · NYC</span>
          </div>
          <ul className="tg-bullets">
            <li>
              <span className="tg-glyph">+</span> designed billing pipeline (12M events/day, Kafka +
              Postgres) from spec to production.
            </li>
            <li>
              <span className="tg-glyph">+</span> built internal feature-flag service consumed by
              40+ microservices.
            </li>
          </ul>
        </div>

        <div className="tg-entry" data-print-entry="true">
          <div className="tg-entry-head">
            <span className="tg-role">Software Engineer</span>
            <span className="tg-sep">@</span>
            <span className="tg-company">Acme Inc</span>
            <span className="tg-meta">Jan 2020 — Jul 2022 · Remote</span>
          </div>
          <ul className="tg-bullets">
            <li>
              <span className="tg-glyph">+</span> shipped first public API: rate limiting, OAuth2,
              SDKs in three languages.
            </li>
            <li>
              <span className="tg-glyph">+</span> extracted monolith auth → identity service,
              unblocking SSO.
            </li>
            <li>
              <span className="tg-glyph">+</span> cut average build times from 11min → 90s via
              parallel test matrix.
            </li>
          </ul>
        </div>

        <div className="tg-entry" data-print-entry="true">
          <div className="tg-entry-head">
            <span className="tg-role">Software Engineer Intern</span>
            <span className="tg-sep">@</span>
            <span className="tg-company">Bytework</span>
            <span className="tg-meta">May 2018 — Aug 2018 · Remote</span>
          </div>
          <ul className="tg-bullets">
            <li>
              <span className="tg-glyph">+</span> built internal log aggregator in Go on top of
              Kafka. Earned return offer.
            </li>
          </ul>
        </div>
      </section>

      <section className="tg-section" data-print-entry="true">
        <div className="tg-prompt">
          <span className="tg-dollar">$</span>
          <span className="tg-cmd">ls</span>
          <span className="tg-arg">projects/</span>
        </div>
        <div className="tg-entry" data-print-entry="true">
          <div className="tg-entry-head">
            <span className="tg-role">loomroute</span>
            <span className="tg-sep">·</span>
            <span className="tg-company">URL routing lib · Go · OSS</span>
          </div>
          <p className="tg-prose">
            URL routing library used by ~200 small SaaS apps. Live since 2024.
          </p>
        </div>
        <div className="tg-entry" data-print-entry="true">
          <div className="tg-entry-head">
            <span className="tg-role">tinytrace</span>
            <span className="tg-sep">·</span>
            <span className="tg-company">distributed tracing · Rust · OSS</span>
          </div>
          <p className="tg-prose">
            Minimal distributed tracing library — span model, OTLP export, ~3k lines.
          </p>
        </div>
      </section>

      <section className="tg-section" data-print-entry="true">
        <div className="tg-prompt">
          <span className="tg-dollar">$</span>
          <span className="tg-cmd">cat</span>
          <span className="tg-arg">education.md</span>
        </div>
        <div className="tg-entry" data-print-entry="true">
          <div className="tg-entry-head">
            <span className="tg-role">B.S. Computer Science</span>
            <span className="tg-sep">@</span>
            <span className="tg-company">Northern State University</span>
            <span className="tg-meta">2014 — 2018</span>
          </div>
        </div>
      </section>

      <section className="tg-section" data-print-entry="true">
        <div className="tg-prompt">
          <span className="tg-dollar">$</span>
          <span className="tg-cmd">cat</span>
          <span className="tg-arg">skills.yml</span>
        </div>
        <dl className="tg-skills">
          <div className="tg-skill-row">
            <dt>languages</dt>
            <dd>: Go, TypeScript, Python, Rust</dd>
          </div>
          <div className="tg-skill-row">
            <dt>backend</dt>
            <dd>: Postgres, Redis, Kafka, gRPC</dd>
          </div>
          <div className="tg-skill-row">
            <dt>frontend</dt>
            <dd>: React, Next.js, Tailwind, Vite</dd>
          </div>
          <div className="tg-skill-row">
            <dt>platform</dt>
            <dd>: AWS, Kubernetes, Docker, Terraform</dd>
          </div>
        </dl>
      </section>

      <footer className="tg-footer">
        <span className="tg-comment"># resume.tsx · v2026.05</span>
      </footer>
    </PageFrame>
  )
}
