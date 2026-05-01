import './styles.css'
import { PageFrame } from '@/components/page-frame/PageFrame'

export default function ArchitectTabular() {
  return (
    <PageFrame fitDeps={[]} innerClassName="resume-architect-tabular">
      <div className="tb-sheet">
        <header className="tb-head" data-print-entry="true">
          <div className="tb-eyebrow">SCHEDULE / CURRICULUM VITAE</div>
          <div className="tb-head-row">
            <div>
              <h1 className="tb-name">Avery Park</h1>
              <div className="tb-title">Senior Software Engineer &mdash; Platform</div>
            </div>
            <div className="tb-head-stamps">
              <div className="tb-stamp-row">
                <span>SHEET</span>
                <span>S-001</span>
              </div>
              <div className="tb-stamp-row">
                <span>REV</span>
                <span>A</span>
              </div>
              <div className="tb-stamp-row">
                <span>DATE</span>
                <span>2026.05</span>
              </div>
            </div>
          </div>
        </header>

        <section className="tb-section" data-print-entry="true">
          <div className="tb-cap">
            <span className="tb-cap-mark">A &mdash;</span>
            <span>SUMMARY</span>
          </div>
          <p className="tb-lede">
            I build resilient backend systems and the platforms that run them. I prefer small,
            reversible changes and clear interfaces. Software should be boring in production and
            useful to its users.
          </p>
        </section>

        <section className="tb-section">
          <div className="tb-cap">
            <span className="tb-cap-mark">B &mdash;</span>
            <span>EXPERIENCE SCHEDULE</span>
          </div>
          <table className="tb-table">
            <thead>
              <tr>
                <th className="col-no">NO.</th>
                <th className="col-role">ROLE</th>
                <th className="col-firm">FIRM</th>
                <th className="col-tenure">TENURE</th>
                <th className="col-loc">LOC</th>
              </tr>
            </thead>
            <tbody>
              <tr data-print-entry="true">
                <td className="col-no">01</td>
                <td className="col-role">
                  <div className="tb-role-title">Senior Software Engineer</div>
                  <ul className="tb-row-bullets">
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
                </td>
                <td className="col-firm">Coral Labs</td>
                <td className="col-tenure">2024.03 &mdash; PRES</td>
                <td className="col-loc">NYC</td>
              </tr>
              <tr data-print-entry="true">
                <td className="col-no">02</td>
                <td className="col-role">
                  <div className="tb-role-title">Software Engineer 2</div>
                  <ul className="tb-row-bullets">
                    <li>
                      Designed the billing pipeline (12M events/day on Kafka + Postgres) from spec
                      to production.
                    </li>
                    <li>
                      Built the internal feature-flag service used across forty-plus microservices.
                    </li>
                  </ul>
                </td>
                <td className="col-firm">Coral Labs</td>
                <td className="col-tenure">2022.08 &mdash; 2024.03</td>
                <td className="col-loc">NYC</td>
              </tr>
              <tr data-print-entry="true">
                <td className="col-no">03</td>
                <td className="col-role">
                  <div className="tb-role-title">Software Engineer</div>
                  <ul className="tb-row-bullets">
                    <li>
                      Shipped the company&rsquo;s first public API with rate limiting, OAuth2, and
                      SDKs in three languages.
                    </li>
                    <li>Migrated legacy auth to a standalone identity service, unblocking SSO.</li>
                    <li>Cut average build times from 11 minutes to 90 seconds.</li>
                  </ul>
                </td>
                <td className="col-firm">Acme Inc</td>
                <td className="col-tenure">2020.01 &mdash; 2022.07</td>
                <td className="col-loc">REM</td>
              </tr>
              <tr data-print-entry="true">
                <td className="col-no">04</td>
                <td className="col-role">
                  <div className="tb-role-title">Software Engineer Intern</div>
                  <ul className="tb-row-bullets">
                    <li>
                      Built an internal log aggregator in Go on top of Kafka. Earned a return offer.
                    </li>
                  </ul>
                </td>
                <td className="col-firm">Bytework</td>
                <td className="col-tenure">2018.05 &mdash; 2018.08</td>
                <td className="col-loc">REM</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="tb-section">
          <div className="tb-cap">
            <span className="tb-cap-mark">C &mdash;</span>
            <span>PROJECTS SCHEDULE</span>
          </div>
          <table className="tb-table">
            <thead>
              <tr>
                <th className="col-no">NO.</th>
                <th className="col-role">PROJECT</th>
                <th className="col-firm">URL</th>
                <th className="col-tenure">STACK</th>
                <th className="col-loc">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr data-print-entry="true">
                <td className="col-no">05</td>
                <td className="col-role">
                  <div className="tb-role-title">Loomroute</div>
                  <ul className="tb-row-bullets">
                    <li>URL routing library used by ~200 small SaaS apps. Live since 2024.</li>
                  </ul>
                </td>
                <td className="col-firm">loomroute.dev</td>
                <td className="col-tenure">GO</td>
                <td className="col-loc">LIVE</td>
              </tr>
              <tr data-print-entry="true">
                <td className="col-no">06</td>
                <td className="col-role">
                  <div className="tb-role-title">Tinytrace</div>
                  <ul className="tb-row-bullets">
                    <li>
                      Minimal distributed tracing library &mdash; span model, OTLP export, ~3k
                      lines.
                    </li>
                  </ul>
                </td>
                <td className="col-firm">github.com/averypark/tinytrace</td>
                <td className="col-tenure">RUST</td>
                <td className="col-loc">OSS</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="tb-section" data-print-entry="true">
          <div className="tb-cap">
            <span className="tb-cap-mark">D &mdash;</span>
            <span>EDUCATION SCHEDULE</span>
          </div>
          <table className="tb-table">
            <thead>
              <tr>
                <th className="col-no">NO.</th>
                <th className="col-role">DEGREE</th>
                <th className="col-firm">INSTITUTION</th>
                <th className="col-tenure">YEARS</th>
                <th className="col-loc">LOC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-no">07</td>
                <td className="col-role">
                  <div className="tb-role-title">B.S. Computer Science</div>
                </td>
                <td className="col-firm">Northern State University</td>
                <td className="col-tenure">2014 &mdash; 2018</td>
                <td className="col-loc">REM</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="tb-section" data-print-entry="true">
          <div className="tb-cap">
            <span className="tb-cap-mark">E &mdash;</span>
            <span>SKILLS SCHEDULE</span>
          </div>
          <table className="tb-table tb-skills-table">
            <thead>
              <tr>
                <th className="col-cat">CATEGORY</th>
                <th className="col-detail">DETAIL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-cat">LANG</td>
                <td className="col-detail">Go &middot; TypeScript &middot; Python &middot; Rust</td>
              </tr>
              <tr>
                <td className="col-cat">BACK</td>
                <td className="col-detail">Postgres &middot; Redis &middot; Kafka &middot; gRPC</td>
              </tr>
              <tr>
                <td className="col-cat">FRNT</td>
                <td className="col-detail">
                  React &middot; Next.js &middot; Tailwind &middot; Vite
                </td>
              </tr>
              <tr>
                <td className="col-cat">PLAT</td>
                <td className="col-detail">
                  AWS &middot; Kubernetes &middot; Docker &middot; Terraform
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="tb-section" data-print-entry="true">
          <div className="tb-cap">
            <span className="tb-cap-mark">F &mdash;</span>
            <span>CONTACT</span>
          </div>
          <table className="tb-table tb-skills-table">
            <thead>
              <tr>
                <th className="col-cat">CHANNEL</th>
                <th className="col-detail">ENDPOINT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-cat">EMAIL</td>
                <td className="col-detail">
                  <a href="mailto:avery@example.com">avery@example.com</a>
                </td>
              </tr>
              <tr>
                <td className="col-cat">LOC</td>
                <td className="col-detail">New York, NY</td>
              </tr>
              <tr>
                <td className="col-cat">WEB</td>
                <td className="col-detail">
                  <a href="https://averypark.dev">averypark.dev</a>
                </td>
              </tr>
              <tr>
                <td className="col-cat">GIT</td>
                <td className="col-detail">
                  <a href="https://github.com/averypark">github.com/averypark</a>
                </td>
              </tr>
              <tr>
                <td className="col-cat">LINKEDIN</td>
                <td className="col-detail">
                  <a href="https://linkedin.com/in/averypark">in/averypark</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </PageFrame>
  )
}
