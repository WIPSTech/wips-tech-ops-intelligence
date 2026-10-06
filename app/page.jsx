import Link from "next/link";
import TifdaScorer from "../components/TifdaScorer";
import Layers from "../components/Layers";
import Closing from "../components/Closing";
import { groups, steps } from "../data/services";
import { sessionCta } from "../data/site";

const questions = [
  "How many WhatsApp enquiries arrived after closing last week, and how many had an answer before morning?",
  "When a patient cancels at nine, who fills the eleven o'clock slot?",
  "How many patients are halfway through a treatment plan or a package and have not booked the next visit?",
  "How much is owed to the clinic today, and who is chasing it?",
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="context">For dental, medical and aesthetic clinics in Lebanon</p>
            <h1>Know what a workflow costs your clinic before you spend on AI.</h1>
            <p className="lede">
              We work out what one manual task costs you each month, fix it with the lightest thing that
              works, and stay responsible for it afterwards. Often the fix is not AI at all.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">
                {sessionCta}
              </Link>
              <Link href="/services" className="btn btn-quiet">
                See what we build
              </Link>
            </div>
          </div>
          <TifdaScorer compact />
        </div>
      </section>

      <section className="section section-white" aria-labelledby="q-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="q-title">Four questions most clinic owners cannot answer today</h2>
            <p className="muted">Each one is money the clinic has already earned or nearly earned.</p>
          </div>
          <ul className="questions">
            {questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="layers-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="layers-title">Three ways to fix a task. Only one of them is AI.</h2>
            <p>
              Every task we look at is fitted to the lightest layer that solves it. Treating a plumbing
              problem as an intelligence problem is the most common way to waste money on AI.
            </p>
          </div>
          <Layers />
        </div>
      </section>

      <section className="section section-white" aria-labelledby="build-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="build-title">What we build for clinics</h2>
          </div>
          <div className="rows">
            {groups.map((g) => (
              <div className="row" key={g.title}>
                <h3>{g.title}</h3>
                <p>{g.items.map((i) => i.name).join(". ")}.</p>
                <span className="tag">{g.recovers}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <Link href="/services" className="textlink">
              Read each service in full
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="start-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="start-title">How it starts</h2>
            <p>One workflow at a time. You can stop after any step.</p>
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

      <section className="section section-white" aria-labelledby="proof-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="proof-title">What we can show you, and what we cannot yet</h2>
          </div>
          <div className="split">
            <div className="prose">
              <h3>One real result</h3>
              <p>
                We restructured the website of a Lebanese contracting company so that AI assistants could
                read it. ChatGPT now names the company when asked about contractors in its area, and it has
                received an enquiry that way. The company is directed by our founder.
              </p>
              <p>
                <Link href="/case-studies" className="textlink">
                  Read the case study
                </Link>
              </p>
            </div>
            <div className="prose">
              <h3>No clinic case study yet</h3>
              <p>
                WIPS Tech was founded in January 2026. We do not have a published clinic result, so you
                will not find clinic testimonials or success figures on this site. What you can judge today
                is the method, and the free session is where you test it on your own numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Closing />
    </>
  );
}
