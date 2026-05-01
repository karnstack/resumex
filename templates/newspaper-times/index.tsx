import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function NewspaperTimes() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-newspaper-times">
      <header className="tms-mast">
        <div className="tms-rule tms-rule-thin" aria-hidden="true" />
        <div className="tms-rule tms-rule-thick" aria-hidden="true" />
        <div className="tms-mast-row">
          <div className="tms-crest" aria-hidden="true">
            <span>·</span>
          </div>
          <h1 className="tms-name">Avery Park</h1>
          <div className="tms-crest" aria-hidden="true">
            <span>·</span>
          </div>
        </div>
        <div className="tms-rule tms-rule-thick" aria-hidden="true" />
        <div className="tms-rule tms-rule-thin" aria-hidden="true" />
        <div className="tms-mast-meta">
          <span>Founded MMXIV</span>
          <span className="tms-mast-tag">Senior Software Engineer · Platform</span>
          <span>New York · Friday, May I, 2026</span>
        </div>
        <div className="tms-rule tms-rule-thin" aria-hidden="true" />
      </header>

      <section className="tms-section tms-lede" data-print-entry="true">
        <div className="tms-anchor">
          <span className="tms-roman">I</span>
          <span className="tms-anchor-label">Profile</span>
        </div>
        <p className="tms-lede-body">
          <span className="tms-place">NEW YORK.</span> I build resilient backend systems and the
          platforms that run them. I prefer small, reversible changes and clear interfaces. Software
          should be boring in production and useful to its users.
        </p>
      </section>

      <section className="tms-section" data-print-entry="true">
        <div className="tms-anchor">
          <span className="tms-roman">II</span>
          <span className="tms-anchor-label">Career in Brief</span>
        </div>
        <div className="tms-cols-3">
          <div className="tms-entry" data-print-entry="true">
            <h3 className="tms-entry-title">Senior Software Engineer</h3>
            <div className="tms-entry-sub">Coral Labs, New York</div>
            <div className="tms-entry-meta">Mar 2024 — Present</div>
            <p>
              Migrated the events pipeline to a horizontally-sharded Kafka cluster, cutting p99
              latency by three. Owned platform on-call across two quarters; reduced pages by sixty
              per cent with sharper alerting. Mentored four engineers through promotion.
            </p>
          </div>
          <div className="tms-entry" data-print-entry="true">
            <h3 className="tms-entry-title">Software Engineer 2</h3>
            <div className="tms-entry-sub">Coral Labs, New York</div>
            <div className="tms-entry-meta">Aug 2022 — Mar 2024</div>
            <p>
              Designed the billing pipeline (twelve million events a day on Kafka and Postgres) from
              spec to production. Built the internal feature-flag service used across forty
              microservices.
            </p>
          </div>
          <div className="tms-entry" data-print-entry="true">
            <h3 className="tms-entry-title">Software Engineer</h3>
            <div className="tms-entry-sub">Acme Inc, Remote</div>
            <div className="tms-entry-meta">Jan 2020 — Jul 2022</div>
            <p>
              Shipped the company's first public API with rate limiting, OAuth2 and SDKs in three
              languages. Migrated the legacy auth module to a standalone identity service. Cut
              average build times from eleven minutes to ninety seconds.
            </p>
          </div>
          <div className="tms-entry" data-print-entry="true">
            <h3 className="tms-entry-title">Software Engineer Intern</h3>
            <div className="tms-entry-sub">Bytework, Remote</div>
            <div className="tms-entry-meta">May 2018 — Aug 2018</div>
            <p>Built an internal log aggregator in Go on top of Kafka. Earned a return offer.</p>
          </div>
          <div className="tms-entry" data-print-entry="true">
            <h3 className="tms-entry-title">Loomroute</h3>
            <div className="tms-entry-sub">Go · Open Source</div>
            <p>URL routing library used by ~200 small SaaS apps. Live since 2024.</p>
          </div>
          <div className="tms-entry" data-print-entry="true">
            <h3 className="tms-entry-title">Tinytrace</h3>
            <div className="tms-entry-sub">Rust · Open Source</div>
            <p>Minimal distributed tracing library — span model, OTLP export, ~3k lines.</p>
          </div>
        </div>
      </section>

      <section className="tms-section tms-foot" data-print-entry="true">
        <div className="tms-foot-block">
          <div className="tms-anchor tms-anchor-sm">
            <span className="tms-roman">III</span>
            <span className="tms-anchor-label">Education</span>
          </div>
          <div className="tms-foot-body">
            <strong>B.S. Computer Science</strong>
            <br />
            Northern State University · 2014 — 2018
          </div>
        </div>
        <div className="tms-foot-block">
          <div className="tms-anchor tms-anchor-sm">
            <span className="tms-roman">IV</span>
            <span className="tms-anchor-label">Skills</span>
          </div>
          <div className="tms-foot-body">
            <span className="tms-skill-key">Languages</span> Go, TypeScript, Python, Rust ·{' '}
            <span className="tms-skill-key">Backend</span> Postgres, Redis, Kafka, gRPC ·{' '}
            <span className="tms-skill-key">Frontend</span> React, Next.js, Tailwind, Vite ·{' '}
            <span className="tms-skill-key">Platform</span> AWS, Kubernetes, Docker, Terraform.
          </div>
        </div>
        <div className="tms-foot-block">
          <div className="tms-anchor tms-anchor-sm">
            <span className="tms-roman">V</span>
            <span className="tms-anchor-label">Address</span>
          </div>
          <div className="tms-foot-body">
            <a href="mailto:avery@example.com">avery@example.com</a> ·{' '}
            <a href="https://averypark.dev">averypark.dev</a>
            <br />
            <a href="https://github.com/averypark">github.com/averypark</a> ·{' '}
            <a href="https://linkedin.com/in/averypark">in/averypark</a>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
