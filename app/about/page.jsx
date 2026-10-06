import Link from "next/link";
import Closing from "../../components/Closing";

export const metadata = {
  title: "About WIPS Tech",
  description:
    "WIPS Tech was founded in January 2026 by Mazen Farhat, a civil engineer in Mount Lebanon. A one-person firm that helps clinics use AI only where it pays.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>A new, one-person firm. Here is exactly who you would be working with.</h1>
        </div>
      </section>

      <section className="section-tight section-white">
        <div className="wrap">
          <div className="case">
            <h2>The founder</h2>
            <div className="prose">
              <p>
                WIPS Tech was founded in January 2026 by Mazen Farhat. He is a civil and environmental
                engineer, a graduate of Beirut Arab University, and has spent more than a decade managing
                infrastructure and contracting projects in Lebanon. He still directs a contracting
                company.
              </p>
              <p>
                Engineering taught him one habit that carries over: measure the load before you design the
                structure. WIPS Tech applies it to clinics. Measure what a workflow costs before deciding
                what to build.
              </p>
            </div>
          </div>
          <div className="case">
            <h2>How the work gets done</h2>
            <div className="prose">
              <p>
                There is no team page because there is no team. Mazen does the sessions, the assessments
                and the builds himself, using AI tools for much of the execution. That keeps the number of
                clinics we can take on small, and it means the person you talk to is the person
                responsible.
              </p>
            </div>
          </div>
          <div className="case">
            <h2>What we believe</h2>
            <ul className="ticks">
              <li>AI is worth paying for only where it helps the business grow and pays back.</li>
              <li>Most fixes are simpler than AI, and we would rather build the simple one.</li>
              <li>A number you calculated yourself is worth more than one a vendor quoted you.</li>
              <li>If we have not done something yet, the site should say so.</li>
            </ul>
          </div>
          <div className="case">
            <h2>What we have not done yet</h2>
            <div className="prose">
              <p>
                We do not have a published clinic case study. The one result we can show comes from the
                contracting company our founder directs, and{" "}
                <Link href="/case-studies" className="textlink">
                  it is described with its limits
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="case">
            <h2>Where we are</h2>
            <div className="prose">
              <p>Mount Lebanon. We work with clinics across Lebanon, in Arabic or English.</p>
            </div>
          </div>
        </div>
      </section>

      <Closing />
    </>
  );
}
