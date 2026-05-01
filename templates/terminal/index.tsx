import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Terminal() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-terminal">
      <header className="tm-head" data-print-entry="true">
        <div className="tm-prompt-line">
          <span className="tm-user">avery</span>
          <span className="tm-at">@</span>
          <span className="tm-host">platform</span>
          <span className="tm-colon">:</span>
          <span className="tm-path">~/resume</span>
          <span className="tm-dollar">$</span>
          <span className="tm-cmd">whoami</span>
        </div>
        <h1 className="tm-name">
          Avery Park
          <span className="tm-cursor" aria-hidden="true" />
        </h1>
        <div className="tm-title">senior software engineer · platform</div>
        <div className="tm-contact">
          <div className="tm-kv">
            <span className="tm-key">email</span>
            <span className="tm-eq">=</span>
            <a className="tm-val tm-link" href="mailto:avery@example.com">
              "avery@example.com"
            </a>
          </div>
          <div className="tm-kv">
            <span className="tm-key">loc</span>
            <span className="tm-eq">=</span>
            <span className="tm-val">"New York, NY"</span>
          </div>
          <div className="tm-kv">
            <span className="tm-key">site</span>
            <span className="tm-eq">=</span>
            <a className="tm-val tm-link" href="https://averypark.dev">
              "averypark.dev"
            </a>
          </div>
          <div className="tm-kv">
            <span className="tm-key">github</span>
            <span className="tm-eq">=</span>
            <a className="tm-val tm-link" href="https://github.com/averypark">
              "github.com/averypark"
            </a>
          </div>
          <div className="tm-kv">
            <span className="tm-key">linkedin</span>
            <span className="tm-eq">=</span>
            <a className="tm-val tm-link" href="https://linkedin.com/in/averypark">
              "in/averypark"
            </a>
          </div>
        </div>
      </header>

      <section className="tm-section" data-print-entry="true">
        <div className="tm-prompt">
          <span className="tm-dollar">$</span>
          <span className="tm-cmd">cat</span>
          <span className="tm-arg">summary.md</span>
        </div>
        <p className="tm-prose">
          I build resilient backend systems and the platforms that run them. I prefer small,
          reversible changes and clear interfaces. Software should be boring in production and
          useful to its users.
        </p>
      </section>

      <section className="tm-section" data-print-entry="true">
        <div className="tm-prompt">
          <span className="tm-dollar">$</span>
          <span className="tm-cmd">cat</span>
          <span className="tm-arg">experience.md</span>
        </div>

        <div className="tm-entry" data-print-entry="true">
          <div className="tm-entry-head">
            <span className="tm-role">Senior Software Engineer</span>
            <span className="tm-sep">@</span>
            <span className="tm-company">Coral Labs</span>
            <span className="tm-meta">Mar 2024 — Present · NYC</span>
          </div>
          <ul className="tm-bullets">
            <li>
              <span className="tm-glyph">#</span> migrated events pipeline → sharded Kafka cluster;
              p99 latency cut 3×.
            </li>
            <li>
              <span className="tm-glyph">#</span> owned platform on-call; reduced pages 60% via
              sharper alerting + runbooks.
            </li>
            <li>
              <span className="tm-glyph">#</span> mentored four engineers through L4 → L5 promos.
            </li>
          </ul>
        </div>

        <div className="tm-entry" data-print-entry="true">
          <div className="tm-entry-head">
            <span className="tm-role">Software Engineer 2</span>
            <span className="tm-sep">@</span>
            <span className="tm-company">Coral Labs</span>
            <span className="tm-meta">Aug 2022 — Mar 2024 · NYC</span>
          </div>
          <ul className="tm-bullets">
            <li>
              <span className="tm-glyph">#</span> designed billing pipeline (12M events/day, Kafka +
              Postgres) from spec to prod.
            </li>
            <li>
              <span className="tm-glyph">#</span> built internal feature-flag service consumed by
              40+ microservices.
            </li>
          </ul>
        </div>

        <div className="tm-entry" data-print-entry="true">
          <div className="tm-entry-head">
            <span className="tm-role">Software Engineer</span>
            <span className="tm-sep">@</span>
            <span className="tm-company">Acme Inc</span>
            <span className="tm-meta">Jan 2020 — Jul 2022 · Remote</span>
          </div>
          <ul className="tm-bullets">
            <li>
              <span className="tm-glyph">#</span> shipped first public API: rate limiting, OAuth2,
              SDKs in 3 languages.
            </li>
            <li>
              <span className="tm-glyph">#</span> extracted monolith auth → identity service,
              unblocking SSO.
            </li>
            <li>
              <span className="tm-glyph">#</span> cut average build times from 11min → 90s via
              parallel test matrix.
            </li>
          </ul>
        </div>

        <div className="tm-entry" data-print-entry="true">
          <div className="tm-entry-head">
            <span className="tm-role">Software Engineer Intern</span>
            <span className="tm-sep">@</span>
            <span className="tm-company">Bytework</span>
            <span className="tm-meta">May 2018 — Aug 2018 · Remote</span>
          </div>
          <ul className="tm-bullets">
            <li>
              <span className="tm-glyph">#</span> built internal log aggregator in Go on top of
              Kafka. Earned return offer.
            </li>
          </ul>
        </div>
      </section>

      <section className="tm-section" data-print-entry="true">
        <div className="tm-prompt">
          <span className="tm-dollar">$</span>
          <span className="tm-cmd">ls</span>
          <span className="tm-arg">projects/</span>
        </div>
        <div className="tm-entry" data-print-entry="true">
          <div className="tm-entry-head">
            <span className="tm-role">loomroute</span>
            <span className="tm-sep">·</span>
            <span className="tm-company">URL routing lib · Go · OSS</span>
          </div>
          <p className="tm-prose">
            URL routing library used by ~200 small SaaS apps. Live since 2024.
          </p>
        </div>
        <div className="tm-entry" data-print-entry="true">
          <div className="tm-entry-head">
            <span className="tm-role">tinytrace</span>
            <span className="tm-sep">·</span>
            <span className="tm-company">distributed tracing · Rust · OSS</span>
          </div>
          <p className="tm-prose">
            Minimal distributed tracing library — span model, OTLP export, ~3k lines.
          </p>
        </div>
      </section>

      <section className="tm-section" data-print-entry="true">
        <div className="tm-prompt">
          <span className="tm-dollar">$</span>
          <span className="tm-cmd">cat</span>
          <span className="tm-arg">education.md</span>
        </div>
        <div className="tm-entry" data-print-entry="true">
          <div className="tm-entry-head">
            <span className="tm-role">B.S. Computer Science</span>
            <span className="tm-sep">@</span>
            <span className="tm-company">Northern State University</span>
            <span className="tm-meta">2014 — 2018</span>
          </div>
        </div>
      </section>

      <section className="tm-section" data-print-entry="true">
        <div className="tm-prompt">
          <span className="tm-dollar">$</span>
          <span className="tm-cmd">cat</span>
          <span className="tm-arg">skills.json</span>
        </div>
        <dl className="tm-skills">
          <div className="tm-skill-row">
            <dt>"languages"</dt>
            <dd>: ["Go", "TypeScript", "Python", "Rust"]</dd>
          </div>
          <div className="tm-skill-row">
            <dt>"backend"</dt>
            <dd>: ["Postgres", "Redis", "Kafka", "gRPC"]</dd>
          </div>
          <div className="tm-skill-row">
            <dt>"frontend"</dt>
            <dd>: ["React", "Next.js", "Tailwind", "Vite"]</dd>
          </div>
          <div className="tm-skill-row">
            <dt>"platform"</dt>
            <dd>: ["AWS", "Kubernetes", "Docker", "Terraform"]</dd>
          </div>
        </dl>
      </section>

      <footer className="tm-footer">
        <span className="tm-comment">// resume.tsx · v2026.05</span>
      </footer>
    </PageFrame>
  )
}
