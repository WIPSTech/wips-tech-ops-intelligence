import Link from "next/link";
import TifdaScorer from "../../components/TifdaScorer";
import Layers from "../../components/Layers";
import Closing from "../../components/Closing";
import { groups, steps, tifda } from "../../data/services";

export const metadata = {
  title: "Services for dental, medical and aesthetic clinics",
  description:
    "What WIPS Tech builds for clinics in Lebanon: enquiry replies, no-show recovery, recalls, invoices and balances, and visibility on Google and AI assistants. Each one is scored before it is built.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>What we build, and how we decide whether to build it</h1>
          <p className="lede">
            Every item below is a workflow we assess and build for clinics. None of it is sold as a package.
            We score the task first, and if the lightest fix is switching on a feature you already pay for,
            that is what we will tell you.
          </p>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="start-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="start-title">The four steps</h2>
            <p>You can stop after any of them.</p>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.detail}</p>
                <span className="price">{s.price}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="build-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="build-title">Workflows we build for clinics</h2>
            <p>
              Grouped by what the clinic gets back. The label on the right is the layer the work usually
              lands in.
            </p>
          </div>
          {groups.map((g) => (
            <div className="group" key={g.title}>
              <div className="group-head">
                <h3>{g.title}</h3>
                <p>{g.recovers}</p>
              </div>
              <div className="rows">
                {g.items.map((item) => (
                  <div className="row" key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.text}</p>
                    <span className={item.layer === "Agent" ? "tag agent" : "tag"}>{item.layer}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-navy" aria-labelledby="layers-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="layers-title">The three layers</h2>
            <p>Each task is fitted to the lightest layer that solves it.</p>
          </div>
          <Layers />
        </div>
      </section>

      <section className="section section-white" id="method" aria-labelledby="method-title">
        <div className="wrap">
          <div className="split">
            <div>
              <h2 id="method-title">TIFDA: which task to fix first</h2>
              <p className="lede" style={{ marginTop: 16 }}>
                Five factors, scored for each task. Three add up to how much the task hurts. Two decide
                whether it can be built on at all.
              </p>
              <div className="table-scroll" style={{ marginTop: 24 }}>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Letter</th>
                      <th scope="col">Factor</th>
                      <th scope="col">What it measures</th>
                      <th scope="col">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tifda.map((f) => (
                      <tr key={f.key}>
                        <td className="key">{f.key}</td>
                        <td>{f.name}</td>
                        <td>{f.what}</td>
                        <td className="mono">{f.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="formula">
                Priority = (T + I + F) × D × A
                <br />
                Highest possible: 15. If D or A is 0, priority is 0.
              </p>
              <p style={{ marginTop: 24, maxWidth: "62ch" }}>
                A task can be painful and still score zero. If nobody has written down how it is done, or
                the information it needs cannot be reached, there is nothing repeatable to build on. That
                is not a reason to give up on it. It is a reason to fix the process or the data first, then
                score it again.
              </p>
            </div>
            <TifdaScorer />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="acc-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="acc-title">What we stay responsible for</h2>
          </div>
          <ul className="ticks">
            <li>
              Acceptance criteria are written and signed off before a build starts, so both of us know
              what "working" means.
            </li>
            <li>We agree in writing which information a build may read before it reads anything.</li>
            <li>
              A person at the clinic approves anything involving money or clinical details before it is
              sent.
            </li>
            <li>The AI does not give medical advice. Clinical questions go to your staff.</li>
            <li>
              Each month we check the workflow, fix what has drifted, and send one page showing what it
              did.
            </li>
          </ul>
          <p style={{ marginTop: 32 }}>
            <Link href="/faq" className="textlink">
              More questions answered
            </Link>
          </p>
        </div>
      </section>

      <Closing />
    </>
  );
}
