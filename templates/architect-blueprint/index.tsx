import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ArchitectBlueprint() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-architect-blueprint">
      <div className="bp-sheet">
        <div className="bp-corner bp-corner-tl" aria-hidden="true" />
        <div className="bp-corner bp-corner-tr" aria-hidden="true" />
        <div className="bp-corner bp-corner-bl" aria-hidden="true" />
        <div className="bp-corner bp-corner-br" aria-hidden="true" />

        <header className="bp-head" data-print-entry="true">
          <div className="bp-head-meta">
            <span className="bp-stamp">DWG</span>
            <span className="bp-stamp-num">CV-001</span>
            <span className="bp-stamp">SCALE</span>
            <span className="bp-stamp-num">1:1</span>
            <span className="bp-stamp">DATE</span>
            <span className="bp-stamp-num">2026.05</span>
            <span className="bp-stamp">SHEET</span>
            <span className="bp-stamp-num">01 / 01</span>
          </div>
          <div className="bp-head-body">
            <div className="bp-eyebrow">BLUEPRINT &mdash; CURRICULUM VITAE</div>
            <h1 className="bp-name">Avery Park</h1>
            <div className="bp-title">Senior Software Engineer &mdash; Platform</div>
          </div>
          <div className="bp-head-contact">
            <div className="bp-kv">
              <span className="bp-k">EML</span>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </div>
            <div className="bp-kv">
              <span className="bp-k">LOC</span>
              <span>New York, NY</span>
            </div>
            <div className="bp-kv">
              <span className="bp-k">WEB</span>
              <a href="https://averypark.dev">averypark.dev</a>
            </div>
            <div className="bp-kv">
              <span className="bp-k">GIT</span>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </div>
            <div className="bp-kv">
              <span className="bp-k">LIN</span>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </div>
          </div>
        </header>

        <div className="bp-dim" aria-hidden="true">
          <span className="bp-tick" />
          <span className="bp-dim-line" />
          <span className="bp-dim-label">A &mdash; SUMMARY</span>
          <span className="bp-dim-line" />
          <span className="bp-tick" />
        </div>

        <section className="bp-section" data-print-entry="true">
          <p className="bp-lede">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </section>

        <div className="bp-dim" aria-hidden="true">
          <span className="bp-tick" />
          <span className="bp-dim-line" />
          <span className="bp-dim-label">B &mdash; EXPERIENCE</span>
          <span className="bp-dim-line" />
          <span className="bp-tick" />
        </div>

        <section className="bp-section">
          <div className="bp-entry" data-print-entry="true">
            <div className="bp-entry-num">01</div>
            <div className="bp-entry-body">
              <div className="bp-entry-head">
                <div className="bp-entry-title">Senior Software Engineer</div>
                <div className="bp-entry-meta">2024.03 &mdash; PRES</div>
              </div>
              <div className="bp-entry-sub">Coral Labs &middot; New York, NY</div>
              <ul className="bp-bullets">
                <li>
                  Migrated events pipeline to a horizontally-sharded Kafka cluster; cut p99 latency
                  by three.
                </li>
                <li>
                  Owned platform on-call across two quarters; reduced pages 60% with sharper
                  alerting and runbooks.
                </li>
                <li>Mentored four engineers through L4 &rarr; L5 promotions.</li>
              </ul>
            </div>
          </div>

          <div className="bp-entry" data-print-entry="true">
            <div className="bp-entry-num">02</div>
            <div className="bp-entry-body">
              <div className="bp-entry-head">
                <div className="bp-entry-title">Software Engineer 2</div>
                <div className="bp-entry-meta">2022.08 &mdash; 2024.03</div>
              </div>
              <div className="bp-entry-sub">Coral Labs &middot; New York, NY</div>
              <ul className="bp-bullets">
                <li>
                  Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec to
                  production.
                </li>
                <li>
                  Built the internal feature-flag service used across forty-plus microservices.
                </li>
              </ul>
            </div>
          </div>

          <div className="bp-entry" data-print-entry="true">
            <div className="bp-entry-num">03</div>
            <div className="bp-entry-body">
              <div className="bp-entry-head">
                <div className="bp-entry-title">Software Engineer</div>
                <div className="bp-entry-meta">2020.01 &mdash; 2022.07</div>
              </div>
              <div className="bp-entry-sub">Acme Inc &middot; Remote</div>
              <ul className="bp-bullets">
                <li>
                  Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and SDKs
                  in three languages.
                </li>
                <li>Migrated legacy auth to a standalone identity service, unblocking SSO.</li>
                <li>Cut average build times from 11 minutes to 90 seconds.</li>
              </ul>
            </div>
          </div>

          <div className="bp-entry" data-print-entry="true">
            <div className="bp-entry-num">04</div>
            <div className="bp-entry-body">
              <div className="bp-entry-head">
                <div className="bp-entry-title">Software Engineer Intern</div>
                <div className="bp-entry-meta">2018.05 &mdash; 2018.08</div>
              </div>
              <div className="bp-entry-sub">Bytework &middot; Remote</div>
              <ul className="bp-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bp-dim" aria-hidden="true">
          <span className="bp-tick" />
          <span className="bp-dim-line" />
          <span className="bp-dim-label">C &mdash; PROJECTS</span>
          <span className="bp-dim-line" />
          <span className="bp-tick" />
        </div>

        <section className="bp-section">
          <div className="bp-entry" data-print-entry="true">
            <div className="bp-entry-num">05</div>
            <div className="bp-entry-body">
              <div className="bp-entry-head">
                <div className="bp-entry-title">Loomroute</div>
                <div className="bp-entry-meta">GO &middot; OSS</div>
              </div>
              <div className="bp-entry-sub">loomroute.dev</div>
              <p className="bp-prose">
                URL routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </div>
          </div>

          <div className="bp-entry" data-print-entry="true">
            <div className="bp-entry-num">06</div>
            <div className="bp-entry-body">
              <div className="bp-entry-head">
                <div className="bp-entry-title">Tinytrace</div>
                <div className="bp-entry-meta">RUST &middot; OSS</div>
              </div>
              <div className="bp-entry-sub">github.com/averypark/tinytrace</div>
              <p className="bp-prose">
                Minimal distributed tracing library &mdash; span model, OTLP export, ~3k lines.
              </p>
            </div>
          </div>
        </section>

        <div className="bp-dim" aria-hidden="true">
          <span className="bp-tick" />
          <span className="bp-dim-line" />
          <span className="bp-dim-label">D &mdash; EDUCATION</span>
          <span className="bp-dim-line" />
          <span className="bp-tick" />
        </div>

        <section className="bp-section">
          <div className="bp-entry" data-print-entry="true">
            <div className="bp-entry-num">07</div>
            <div className="bp-entry-body">
              <div className="bp-entry-head">
                <div className="bp-entry-title">B.S. Computer Science</div>
                <div className="bp-entry-meta">2014 &mdash; 2018</div>
              </div>
              <div className="bp-entry-sub">Northern State University</div>
            </div>
          </div>
        </section>

        <div className="bp-dim" aria-hidden="true">
          <span className="bp-tick" />
          <span className="bp-dim-line" />
          <span className="bp-dim-label">E &mdash; SKILLS</span>
          <span className="bp-dim-line" />
          <span className="bp-tick" />
        </div>

        <section className="bp-section bp-skills" data-print-entry="true">
          <dl>
            <div className="bp-skill-row">
              <dt>LANG</dt>
              <dd>Go &middot; TypeScript &middot; Python &middot; Rust</dd>
            </div>
            <div className="bp-skill-row">
              <dt>BACK</dt>
              <dd>Postgres &middot; Redis &middot; Kafka &middot; gRPC</dd>
            </div>
            <div className="bp-skill-row">
              <dt>FRNT</dt>
              <dd>React &middot; Next.js &middot; Tailwind &middot; Vite</dd>
            </div>
            <div className="bp-skill-row">
              <dt>PLAT</dt>
              <dd>AWS &middot; Kubernetes &middot; Docker &middot; Terraform</dd>
            </div>
          </dl>
        </section>
      </div>
    </PageFrame>
  )
}
