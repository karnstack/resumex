import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function Architect() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-architect">
      <div className="ar-sheet">
        <div className="ar-corner ar-corner-tl" aria-hidden="true" />
        <div className="ar-corner ar-corner-tr" aria-hidden="true" />
        <div className="ar-corner ar-corner-bl" aria-hidden="true" />
        <div className="ar-corner ar-corner-br" aria-hidden="true" />

        <header className="ar-head" data-print-entry="true">
          <div className="ar-head-meta">
            <span className="ar-stamp">SHEET</span>
            <span className="ar-stamp-num">A-001</span>
            <span className="ar-stamp">SCALE</span>
            <span className="ar-stamp-num">1:1</span>
            <span className="ar-stamp">REV</span>
            <span className="ar-stamp-num">A</span>
          </div>
          <div className="ar-head-body">
            <div className="ar-eyebrow">PROJECT / CURRICULUM VITAE</div>
            <h1 className="ar-name">Avery Park</h1>
            <div className="ar-title">Senior Software Engineer &mdash; Platform</div>
          </div>
          <div className="ar-head-contact">
            <div className="ar-kv">
              <span className="ar-k">EML</span>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </div>
            <div className="ar-kv">
              <span className="ar-k">LOC</span>
              <span>New York, NY</span>
            </div>
            <div className="ar-kv">
              <span className="ar-k">WEB</span>
              <a href="https://averypark.dev">averypark.dev</a>
            </div>
            <div className="ar-kv">
              <span className="ar-k">GIT</span>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </div>
            <div className="ar-kv">
              <span className="ar-k">LIN</span>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </div>
          </div>
        </header>

        <div className="ar-dim" aria-hidden="true">
          <span className="ar-tick" />
          <span className="ar-dim-line" />
          <span className="ar-dim-label">A &mdash; SUMMARY</span>
          <span className="ar-dim-line" />
          <span className="ar-tick" />
        </div>

        <section className="ar-section" data-print-entry="true">
          <p className="ar-lede">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </section>

        <div className="ar-dim" aria-hidden="true">
          <span className="ar-tick" />
          <span className="ar-dim-line" />
          <span className="ar-dim-label">B &mdash; EXPERIENCE</span>
          <span className="ar-dim-line" />
          <span className="ar-tick" />
        </div>

        <section className="ar-section ar-experience">
          <div className="ar-entry" data-print-entry="true">
            <div className="ar-entry-num">01</div>
            <div className="ar-entry-body">
              <div className="ar-entry-head">
                <div className="ar-entry-title">Senior Software Engineer</div>
                <div className="ar-entry-meta">2024.03 &mdash; PRES</div>
              </div>
              <div className="ar-entry-sub">Coral Labs &middot; New York, NY</div>
              <ul className="ar-bullets">
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

          <div className="ar-entry" data-print-entry="true">
            <div className="ar-entry-num">02</div>
            <div className="ar-entry-body">
              <div className="ar-entry-head">
                <div className="ar-entry-title">Software Engineer 2</div>
                <div className="ar-entry-meta">2022.08 &mdash; 2024.03</div>
              </div>
              <div className="ar-entry-sub">Coral Labs &middot; New York, NY</div>
              <ul className="ar-bullets">
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

          <div className="ar-entry" data-print-entry="true">
            <div className="ar-entry-num">03</div>
            <div className="ar-entry-body">
              <div className="ar-entry-head">
                <div className="ar-entry-title">Software Engineer</div>
                <div className="ar-entry-meta">2020.01 &mdash; 2022.07</div>
              </div>
              <div className="ar-entry-sub">Acme Inc &middot; Remote</div>
              <ul className="ar-bullets">
                <li>
                  Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and SDKs
                  in three languages.
                </li>
                <li>Migrated legacy auth to a standalone identity service, unblocking SSO.</li>
                <li>Cut average build times from 11 minutes to 90 seconds.</li>
              </ul>
            </div>
          </div>

          <div className="ar-entry" data-print-entry="true">
            <div className="ar-entry-num">04</div>
            <div className="ar-entry-body">
              <div className="ar-entry-head">
                <div className="ar-entry-title">Software Engineer Intern</div>
                <div className="ar-entry-meta">2018.05 &mdash; 2018.08</div>
              </div>
              <div className="ar-entry-sub">Bytework &middot; Remote</div>
              <ul className="ar-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="ar-dim" aria-hidden="true">
          <span className="ar-tick" />
          <span className="ar-dim-line" />
          <span className="ar-dim-label">C &mdash; PROJECTS</span>
          <span className="ar-dim-line" />
          <span className="ar-tick" />
        </div>

        <section className="ar-section">
          <div className="ar-entry" data-print-entry="true">
            <div className="ar-entry-num">05</div>
            <div className="ar-entry-body">
              <div className="ar-entry-head">
                <div className="ar-entry-title">Loomroute</div>
                <div className="ar-entry-meta">GO &middot; OSS</div>
              </div>
              <div className="ar-entry-sub">loomroute.dev</div>
              <p className="ar-prose">
                URL routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </div>
          </div>

          <div className="ar-entry" data-print-entry="true">
            <div className="ar-entry-num">06</div>
            <div className="ar-entry-body">
              <div className="ar-entry-head">
                <div className="ar-entry-title">Tinytrace</div>
                <div className="ar-entry-meta">RUST &middot; OSS</div>
              </div>
              <div className="ar-entry-sub">github.com/averypark/tinytrace</div>
              <p className="ar-prose">
                Minimal distributed tracing library &mdash; span model, OTLP export, ~3k lines.
              </p>
            </div>
          </div>
        </section>

        <div className="ar-dim" aria-hidden="true">
          <span className="ar-tick" />
          <span className="ar-dim-line" />
          <span className="ar-dim-label">D &mdash; EDUCATION</span>
          <span className="ar-dim-line" />
          <span className="ar-tick" />
        </div>

        <section className="ar-section">
          <div className="ar-entry" data-print-entry="true">
            <div className="ar-entry-num">07</div>
            <div className="ar-entry-body">
              <div className="ar-entry-head">
                <div className="ar-entry-title">B.S. Computer Science</div>
                <div className="ar-entry-meta">2014 &mdash; 2018</div>
              </div>
              <div className="ar-entry-sub">Northern State University</div>
            </div>
          </div>
        </section>

        <div className="ar-dim" aria-hidden="true">
          <span className="ar-tick" />
          <span className="ar-dim-line" />
          <span className="ar-dim-label">E &mdash; SKILLS</span>
          <span className="ar-dim-line" />
          <span className="ar-tick" />
        </div>

        <section className="ar-section ar-skills" data-print-entry="true">
          <dl>
            <div className="ar-skill-row">
              <dt>LANG</dt>
              <dd>Go &middot; TypeScript &middot; Python &middot; Rust</dd>
            </div>
            <div className="ar-skill-row">
              <dt>BACK</dt>
              <dd>Postgres &middot; Redis &middot; Kafka &middot; gRPC</dd>
            </div>
            <div className="ar-skill-row">
              <dt>FRNT</dt>
              <dd>React &middot; Next.js &middot; Tailwind &middot; Vite</dd>
            </div>
            <div className="ar-skill-row">
              <dt>PLAT</dt>
              <dd>AWS &middot; Kubernetes &middot; Docker &middot; Terraform</dd>
            </div>
          </dl>
        </section>
      </div>
    </PageFrame>
  )
}
