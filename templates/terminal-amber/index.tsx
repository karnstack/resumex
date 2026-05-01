import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function TerminalAmber() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-terminal-amber">
      <header className="ta-head" data-print-entry="true">
        <div className="ta-banner">
          <span className="ta-banner-glyph">»</span>
          <span className="ta-banner-text">CRT-AMBER · TTY1 · COLD BOOT OK</span>
        </div>
        <div className="ta-prompt-line">
          <span className="ta-prefix">{'>>'}</span>
          <span className="ta-cmd">load</span>
          <span className="ta-arg">profile.dat</span>
        </div>
        <h1 className="ta-name">
          Avery Park
          <span className="ta-cursor" aria-hidden="true" />
        </h1>
        <div className="ta-title">senior software engineer · platform</div>
        <div className="ta-contact">
          <div className="ta-kv">
            <span className="ta-key">EMAIL</span>
            <span className="ta-arrow">→</span>
            <a className="ta-val ta-link" href="mailto:avery@example.com">
              avery@example.com
            </a>
          </div>
          <div className="ta-kv">
            <span className="ta-key">LOC</span>
            <span className="ta-arrow">→</span>
            <span className="ta-val">New York, NY</span>
          </div>
          <div className="ta-kv">
            <span className="ta-key">SITE</span>
            <span className="ta-arrow">→</span>
            <a className="ta-val ta-link" href="https://averypark.dev">
              averypark.dev
            </a>
          </div>
          <div className="ta-kv">
            <span className="ta-key">GIT</span>
            <span className="ta-arrow">→</span>
            <a className="ta-val ta-link" href="https://github.com/averypark">
              github.com/averypark
            </a>
          </div>
          <div className="ta-kv">
            <span className="ta-key">LNKD</span>
            <span className="ta-arrow">→</span>
            <a className="ta-val ta-link" href="https://linkedin.com/in/averypark">
              in/averypark
            </a>
          </div>
        </div>
      </header>

      <section className="ta-section" data-print-entry="true">
        <div className="ta-prompt">
          <span className="ta-prefix">{'>>'}</span>
          <span className="ta-cmd">read</span>
          <span className="ta-arg">summary.txt</span>
        </div>
        <p className="ta-prose">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="ta-section" data-print-entry="true">
        <div className="ta-prompt">
          <span className="ta-prefix">{'>>'}</span>
          <span className="ta-cmd">read</span>
          <span className="ta-arg">experience.log</span>
        </div>

        <div className="ta-entry" data-print-entry="true">
          <div className="ta-entry-head">
            <span className="ta-role">Senior Software Engineer</span>
            <span className="ta-sep">@</span>
            <span className="ta-company">Coral Labs</span>
            <span className="ta-meta">[2024.03 — PRESENT · NYC]</span>
          </div>
          <ul className="ta-bullets">
            <li>
              <span className="ta-glyph">»</span> migrated events pipeline → sharded Kafka cluster;
              p99 latency cut 3×.
            </li>
            <li>
              <span className="ta-glyph">»</span> owned platform on-call across two quarters;
              reduced pages 60% via better alerting + runbooks.
            </li>
            <li>
              <span className="ta-glyph">»</span> mentored four engineers through L4 → L5
              promotions.
            </li>
          </ul>
        </div>

        <div className="ta-entry" data-print-entry="true">
          <div className="ta-entry-head">
            <span className="ta-role">Software Engineer 2</span>
            <span className="ta-sep">@</span>
            <span className="ta-company">Coral Labs</span>
            <span className="ta-meta">[2022.08 — 2024.03 · NYC]</span>
          </div>
          <ul className="ta-bullets">
            <li>
              <span className="ta-glyph">»</span> designed billing pipeline (12M events/day, Kafka +
              Postgres) from spec to production.
            </li>
            <li>
              <span className="ta-glyph">»</span> built internal feature-flag service consumed by
              40+ microservices.
            </li>
          </ul>
        </div>

        <div className="ta-entry" data-print-entry="true">
          <div className="ta-entry-head">
            <span className="ta-role">Software Engineer</span>
            <span className="ta-sep">@</span>
            <span className="ta-company">Acme Inc</span>
            <span className="ta-meta">[2020.01 — 2022.07 · REMOTE]</span>
          </div>
          <ul className="ta-bullets">
            <li>
              <span className="ta-glyph">»</span> shipped first public API: rate limiting, OAuth2,
              SDKs in three languages.
            </li>
            <li>
              <span className="ta-glyph">»</span> extracted monolith auth → identity service,
              unblocking SSO.
            </li>
            <li>
              <span className="ta-glyph">»</span> cut average build times from 11min → 90s via
              parallel test matrix.
            </li>
          </ul>
        </div>

        <div className="ta-entry" data-print-entry="true">
          <div className="ta-entry-head">
            <span className="ta-role">Software Engineer Intern</span>
            <span className="ta-sep">@</span>
            <span className="ta-company">Bytework</span>
            <span className="ta-meta">[2018.05 — 2018.08 · REMOTE]</span>
          </div>
          <ul className="ta-bullets">
            <li>
              <span className="ta-glyph">»</span> built internal log aggregator in Go on top of
              Kafka. Earned return offer.
            </li>
          </ul>
        </div>
      </section>

      <section className="ta-section" data-print-entry="true">
        <div className="ta-prompt">
          <span className="ta-prefix">{'>>'}</span>
          <span className="ta-cmd">list</span>
          <span className="ta-arg">projects/</span>
        </div>
        <div className="ta-entry" data-print-entry="true">
          <div className="ta-entry-head">
            <span className="ta-role">loomroute</span>
            <span className="ta-sep">·</span>
            <span className="ta-company">URL routing lib · Go · OSS</span>
          </div>
          <p className="ta-prose">
            URL routing library used by ~200 small SaaS apps. Live since 2024.
          </p>
        </div>
        <div className="ta-entry" data-print-entry="true">
          <div className="ta-entry-head">
            <span className="ta-role">tinytrace</span>
            <span className="ta-sep">·</span>
            <span className="ta-company">distributed tracing · Rust · OSS</span>
          </div>
          <p className="ta-prose">
            Minimal distributed tracing library — span model, OTLP export, ~3k lines.
          </p>
        </div>
      </section>

      <section className="ta-section" data-print-entry="true">
        <div className="ta-prompt">
          <span className="ta-prefix">{'>>'}</span>
          <span className="ta-cmd">read</span>
          <span className="ta-arg">education.txt</span>
        </div>
        <div className="ta-entry" data-print-entry="true">
          <div className="ta-entry-head">
            <span className="ta-role">B.S. Computer Science</span>
            <span className="ta-sep">@</span>
            <span className="ta-company">Northern State University</span>
            <span className="ta-meta">[2014 — 2018]</span>
          </div>
        </div>
      </section>

      <section className="ta-section" data-print-entry="true">
        <div className="ta-prompt">
          <span className="ta-prefix">{'>>'}</span>
          <span className="ta-cmd">dump</span>
          <span className="ta-arg">skills.cfg</span>
        </div>
        <dl className="ta-skills">
          <div className="ta-skill-row">
            <dt>LANGUAGES</dt>
            <dd>Go · TypeScript · Python · Rust</dd>
          </div>
          <div className="ta-skill-row">
            <dt>BACKEND</dt>
            <dd>Postgres · Redis · Kafka · gRPC</dd>
          </div>
          <div className="ta-skill-row">
            <dt>FRONTEND</dt>
            <dd>React · Next.js · Tailwind · Vite</dd>
          </div>
          <div className="ta-skill-row">
            <dt>PLATFORM</dt>
            <dd>AWS · Kubernetes · Docker · Terraform</dd>
          </div>
        </dl>
      </section>

      <footer className="ta-footer">
        <span className="ta-prefix">{'>>'}</span>
        <span className="ta-comment">end of file · resume.tsx · v2026.05</span>
      </footer>
    </PageFrame>
  )
}
