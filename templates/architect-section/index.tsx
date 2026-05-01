import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ArchitectSection() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-architect-section">
      <div className="sc-sheet">
        <header className="sc-head" data-print-entry="true">
          <div className="sc-eyebrow">
            <span className="sc-chev">&#9656;</span>
            <span>SECTION VIEW &mdash; CV / A-A</span>
          </div>
          <h1 className="sc-name">Avery Park</h1>
          <div className="sc-title">Senior Software Engineer &mdash; Platform</div>
          <div className="sc-head-contact">
            <span>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </span>
            <span className="sc-sep">/</span>
            <span>New York, NY</span>
            <span className="sc-sep">/</span>
            <span>
              <a href="https://averypark.dev">averypark.dev</a>
            </span>
            <span className="sc-sep">/</span>
            <span>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </span>
            <span className="sc-sep">/</span>
            <span>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </span>
          </div>
        </header>

        <div className="sc-cut" aria-hidden="true">
          <span className="sc-cut-chev">&#9662;</span>
          <span className="sc-cut-line" />
          <span className="sc-cut-label">SECTION A &mdash; SUMMARY</span>
          <span className="sc-cut-line" />
          <span className="sc-cut-chev">&#9662;</span>
        </div>

        <section className="sc-section" data-print-entry="true">
          <p className="sc-lede">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </section>

        <div className="sc-cut" aria-hidden="true">
          <span className="sc-cut-chev">&#9656;</span>
          <span className="sc-cut-line" />
          <span className="sc-cut-label">SECTION B &mdash; EXPERIENCE</span>
          <span className="sc-cut-line" />
          <span className="sc-cut-chev">&#9666;</span>
        </div>

        <section className="sc-section">
          <div className="sc-entry" data-print-entry="true">
            <span className="sc-entry-marker">&#9656;</span>
            <div className="sc-entry-num">01</div>
            <div className="sc-entry-body">
              <div className="sc-entry-head">
                <div className="sc-entry-title">Senior Software Engineer</div>
                <div className="sc-entry-meta">2024.03 &mdash; PRES</div>
              </div>
              <div className="sc-entry-sub">Coral Labs &middot; New York, NY</div>
              <ul className="sc-bullets">
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

          <div className="sc-entry" data-print-entry="true">
            <span className="sc-entry-marker">&#9656;</span>
            <div className="sc-entry-num">02</div>
            <div className="sc-entry-body">
              <div className="sc-entry-head">
                <div className="sc-entry-title">Software Engineer 2</div>
                <div className="sc-entry-meta">2022.08 &mdash; 2024.03</div>
              </div>
              <div className="sc-entry-sub">Coral Labs &middot; New York, NY</div>
              <ul className="sc-bullets">
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

          <div className="sc-entry" data-print-entry="true">
            <span className="sc-entry-marker">&#9656;</span>
            <div className="sc-entry-num">03</div>
            <div className="sc-entry-body">
              <div className="sc-entry-head">
                <div className="sc-entry-title">Software Engineer</div>
                <div className="sc-entry-meta">2020.01 &mdash; 2022.07</div>
              </div>
              <div className="sc-entry-sub">Acme Inc &middot; Remote</div>
              <ul className="sc-bullets">
                <li>
                  Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and SDKs
                  in three languages.
                </li>
                <li>Migrated legacy auth to a standalone identity service, unblocking SSO.</li>
                <li>Cut average build times from 11 minutes to 90 seconds.</li>
              </ul>
            </div>
          </div>

          <div className="sc-entry" data-print-entry="true">
            <span className="sc-entry-marker">&#9656;</span>
            <div className="sc-entry-num">04</div>
            <div className="sc-entry-body">
              <div className="sc-entry-head">
                <div className="sc-entry-title">Software Engineer Intern</div>
                <div className="sc-entry-meta">2018.05 &mdash; 2018.08</div>
              </div>
              <div className="sc-entry-sub">Bytework &middot; Remote</div>
              <ul className="sc-bullets">
                <li>
                  Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="sc-cut" aria-hidden="true">
          <span className="sc-cut-chev">&#9656;</span>
          <span className="sc-cut-line" />
          <span className="sc-cut-label">SECTION C &mdash; PROJECTS</span>
          <span className="sc-cut-line" />
          <span className="sc-cut-chev">&#9666;</span>
        </div>

        <section className="sc-section">
          <div className="sc-entry" data-print-entry="true">
            <span className="sc-entry-marker">&#9656;</span>
            <div className="sc-entry-num">05</div>
            <div className="sc-entry-body">
              <div className="sc-entry-head">
                <div className="sc-entry-title">Loomroute</div>
                <div className="sc-entry-meta">GO &middot; OSS</div>
              </div>
              <div className="sc-entry-sub">loomroute.dev</div>
              <p className="sc-prose">
                URL routing library used by ~200 small SaaS apps. Live since 2024.
              </p>
            </div>
          </div>

          <div className="sc-entry" data-print-entry="true">
            <span className="sc-entry-marker">&#9656;</span>
            <div className="sc-entry-num">06</div>
            <div className="sc-entry-body">
              <div className="sc-entry-head">
                <div className="sc-entry-title">Tinytrace</div>
                <div className="sc-entry-meta">RUST &middot; OSS</div>
              </div>
              <div className="sc-entry-sub">github.com/averypark/tinytrace</div>
              <p className="sc-prose">
                Minimal distributed tracing library &mdash; span model, OTLP export, ~3k lines.
              </p>
            </div>
          </div>
        </section>

        <div className="sc-cut" aria-hidden="true">
          <span className="sc-cut-chev">&#9656;</span>
          <span className="sc-cut-line" />
          <span className="sc-cut-label">SECTION D &mdash; EDUCATION</span>
          <span className="sc-cut-line" />
          <span className="sc-cut-chev">&#9666;</span>
        </div>

        <section className="sc-section">
          <div className="sc-entry" data-print-entry="true">
            <span className="sc-entry-marker">&#9656;</span>
            <div className="sc-entry-num">07</div>
            <div className="sc-entry-body">
              <div className="sc-entry-head">
                <div className="sc-entry-title">B.S. Computer Science</div>
                <div className="sc-entry-meta">2014 &mdash; 2018</div>
              </div>
              <div className="sc-entry-sub">Northern State University</div>
            </div>
          </div>
        </section>

        <div className="sc-cut" aria-hidden="true">
          <span className="sc-cut-chev">&#9656;</span>
          <span className="sc-cut-line" />
          <span className="sc-cut-label">SECTION E &mdash; SKILLS</span>
          <span className="sc-cut-line" />
          <span className="sc-cut-chev">&#9666;</span>
        </div>

        <section className="sc-section sc-skills" data-print-entry="true">
          <dl>
            <div className="sc-skill-row">
              <dt>LANG</dt>
              <dd>Go &middot; TypeScript &middot; Python &middot; Rust</dd>
            </div>
            <div className="sc-skill-row">
              <dt>BACK</dt>
              <dd>Postgres &middot; Redis &middot; Kafka &middot; gRPC</dd>
            </div>
            <div className="sc-skill-row">
              <dt>FRNT</dt>
              <dd>React &middot; Next.js &middot; Tailwind &middot; Vite</dd>
            </div>
            <div className="sc-skill-row">
              <dt>PLAT</dt>
              <dd>AWS &middot; Kubernetes &middot; Docker &middot; Terraform</dd>
            </div>
          </dl>
        </section>

        <div className="sc-titleblock" data-print-entry="true">
          <div className="sc-tb-row sc-tb-head">
            <span>TITLE BLOCK</span>
          </div>
          <div className="sc-tb-row">
            <span className="sc-tb-k">PROJ</span>
            <span className="sc-tb-v">CURRICULUM VITAE</span>
          </div>
          <div className="sc-tb-row">
            <span className="sc-tb-k">DRWN</span>
            <span className="sc-tb-v">A. PARK</span>
          </div>
          <div className="sc-tb-row">
            <span className="sc-tb-k">SHEET</span>
            <span className="sc-tb-v">A-001 / 01</span>
          </div>
          <div className="sc-tb-row">
            <span className="sc-tb-k">REV</span>
            <span className="sc-tb-v">B</span>
          </div>
          <div className="sc-tb-row">
            <span className="sc-tb-k">DATE</span>
            <span className="sc-tb-v">2026.05</span>
          </div>
        </div>
      </div>
    </PageFrame>
  )
}
