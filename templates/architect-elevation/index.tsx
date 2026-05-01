import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ArchitectElevation() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-architect-elevation">
      <header className="el-head" data-print-entry="true">
        <div className="el-eyebrow">ELEVATION &mdash; CV / 2018 &rarr; PRES</div>
        <div className="el-head-row">
          <div>
            <h1 className="el-name">Avery Park</h1>
            <div className="el-title">Senior Software Engineer &mdash; Platform</div>
          </div>
          <div className="el-head-contact">
            <div className="el-kv">
              <span className="el-k">EML</span>
              <a href="mailto:avery@example.com">avery@example.com</a>
            </div>
            <div className="el-kv">
              <span className="el-k">LOC</span>
              <span>New York, NY</span>
            </div>
            <div className="el-kv">
              <span className="el-k">WEB</span>
              <a href="https://averypark.dev">averypark.dev</a>
            </div>
            <div className="el-kv">
              <span className="el-k">GIT</span>
              <a href="https://github.com/averypark">github.com/averypark</a>
            </div>
            <div className="el-kv">
              <span className="el-k">LIN</span>
              <a href="https://linkedin.com/in/averypark">in/averypark</a>
            </div>
          </div>
        </div>
      </header>

      <section className="el-block el-summary" data-print-entry="true">
        <div className="el-axis">
          <div className="el-axis-cap">LVL</div>
          <div className="el-axis-line" />
        </div>
        <div className="el-block-body">
          <div className="el-cap">A &mdash; SUMMARY</div>
          <p className="el-lede">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </div>
      </section>

      <section className="el-block">
        <div className="el-axis">
          <div className="el-axis-cap">EXP</div>
          <div className="el-axis-line" />
        </div>
        <div className="el-block-body">
          <div className="el-cap">B &mdash; EXPERIENCE</div>

          <div className="el-stack">
            <div className="el-row" data-print-entry="true">
              <div className="el-tick">
                <span className="el-year">2024</span>
                <span className="el-tick-dot" aria-hidden="true" />
              </div>
              <div className="el-entry">
                <div className="el-entry-head">
                  <div className="el-entry-title">Senior Software Engineer</div>
                  <div className="el-entry-meta">2024.03 &mdash; PRES</div>
                </div>
                <div className="el-entry-sub">Coral Labs &middot; New York, NY</div>
                <ul className="el-bullets">
                  <li>
                    Migrated events pipeline to a horizontally-sharded Kafka cluster; cut p99
                    latency by three.
                  </li>
                  <li>
                    Owned platform on-call across two quarters; reduced pages 60% with sharper
                    alerting and runbooks.
                  </li>
                  <li>Mentored four engineers through L4 &rarr; L5 promotions.</li>
                </ul>
              </div>
            </div>

            <div className="el-row" data-print-entry="true">
              <div className="el-tick">
                <span className="el-year">2022</span>
                <span className="el-tick-dot" aria-hidden="true" />
              </div>
              <div className="el-entry">
                <div className="el-entry-head">
                  <div className="el-entry-title">Software Engineer 2</div>
                  <div className="el-entry-meta">2022.08 &mdash; 2024.03</div>
                </div>
                <div className="el-entry-sub">Coral Labs &middot; New York, NY</div>
                <ul className="el-bullets">
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

            <div className="el-row" data-print-entry="true">
              <div className="el-tick">
                <span className="el-year">2020</span>
                <span className="el-tick-dot" aria-hidden="true" />
              </div>
              <div className="el-entry">
                <div className="el-entry-head">
                  <div className="el-entry-title">Software Engineer</div>
                  <div className="el-entry-meta">2020.01 &mdash; 2022.07</div>
                </div>
                <div className="el-entry-sub">Acme Inc &middot; Remote</div>
                <ul className="el-bullets">
                  <li>
                    Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and
                    SDKs in three languages.
                  </li>
                  <li>Migrated legacy auth to a standalone identity service, unblocking SSO.</li>
                  <li>Cut average build times from 11 minutes to 90 seconds.</li>
                </ul>
              </div>
            </div>

            <div className="el-row" data-print-entry="true">
              <div className="el-tick">
                <span className="el-year">2018</span>
                <span className="el-tick-dot" aria-hidden="true" />
              </div>
              <div className="el-entry">
                <div className="el-entry-head">
                  <div className="el-entry-title">Software Engineer Intern</div>
                  <div className="el-entry-meta">2018.05 &mdash; 2018.08</div>
                </div>
                <div className="el-entry-sub">Bytework &middot; Remote</div>
                <ul className="el-bullets">
                  <li>
                    Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="el-block">
        <div className="el-axis">
          <div className="el-axis-cap">PRJ</div>
          <div className="el-axis-line" />
        </div>
        <div className="el-block-body">
          <div className="el-cap">C &mdash; PROJECTS</div>

          <div className="el-stack">
            <div className="el-row" data-print-entry="true">
              <div className="el-tick">
                <span className="el-year">2024</span>
                <span className="el-tick-dot" aria-hidden="true" />
              </div>
              <div className="el-entry">
                <div className="el-entry-head">
                  <div className="el-entry-title">Loomroute</div>
                  <div className="el-entry-meta">GO &middot; OSS</div>
                </div>
                <div className="el-entry-sub">loomroute.dev</div>
                <p className="el-prose">
                  URL routing library used by ~200 small SaaS apps. Live since 2024.
                </p>
              </div>
            </div>

            <div className="el-row" data-print-entry="true">
              <div className="el-tick">
                <span className="el-year">2023</span>
                <span className="el-tick-dot" aria-hidden="true" />
              </div>
              <div className="el-entry">
                <div className="el-entry-head">
                  <div className="el-entry-title">Tinytrace</div>
                  <div className="el-entry-meta">RUST &middot; OSS</div>
                </div>
                <div className="el-entry-sub">github.com/averypark/tinytrace</div>
                <p className="el-prose">
                  Minimal distributed tracing library &mdash; span model, OTLP export, ~3k lines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="el-block">
        <div className="el-axis">
          <div className="el-axis-cap">EDU</div>
          <div className="el-axis-line" />
        </div>
        <div className="el-block-body">
          <div className="el-cap">D &mdash; EDUCATION</div>

          <div className="el-stack">
            <div className="el-row" data-print-entry="true">
              <div className="el-tick">
                <span className="el-year">2014</span>
                <span className="el-tick-dot" aria-hidden="true" />
              </div>
              <div className="el-entry">
                <div className="el-entry-head">
                  <div className="el-entry-title">B.S. Computer Science</div>
                  <div className="el-entry-meta">2014 &mdash; 2018</div>
                </div>
                <div className="el-entry-sub">Northern State University</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="el-block" data-print-entry="true">
        <div className="el-axis">
          <div className="el-axis-cap">SKL</div>
          <div className="el-axis-line" />
        </div>
        <div className="el-block-body">
          <div className="el-cap">E &mdash; SKILLS</div>

          <dl className="el-skills">
            <div className="el-skill-row">
              <dt>LANG</dt>
              <dd>Go &middot; TypeScript &middot; Python &middot; Rust</dd>
            </div>
            <div className="el-skill-row">
              <dt>BACK</dt>
              <dd>Postgres &middot; Redis &middot; Kafka &middot; gRPC</dd>
            </div>
            <div className="el-skill-row">
              <dt>FRNT</dt>
              <dd>React &middot; Next.js &middot; Tailwind &middot; Vite</dd>
            </div>
            <div className="el-skill-row">
              <dt>PLAT</dt>
              <dd>AWS &middot; Kubernetes &middot; Docker &middot; Terraform</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageFrame>
  )
}
