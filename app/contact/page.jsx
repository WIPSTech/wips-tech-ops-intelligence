import SessionForm from "../../components/SessionForm";
import { site } from "../../data/site";

export const metadata = {
  title: "Request a free session",
  description:
    "Request a free 45-minute session with WIPS Tech. We pick one workflow and work out what it costs your clinic each month, using your own numbers.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Request a free session</h1>
          <p className="lede">
            45 minutes, in Arabic or English. We pick one workflow and work out what it costs your clinic
            each month. You keep the calculation.
          </p>
        </div>
      </section>
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap contact-grid">
          <SessionForm />
          <aside className="contact-aside">
            <div>
              <h2>What happens next</h2>
              <p>We reply within one business day to arrange a time. The session is a video or phone call.</p>
            </div>
            <div>
              <h2>Prefer email?</h2>
              <p>
                <a className="textlink" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
            <div>
              <h2>What we ask for</h2>
              <p>
                Only what we need to reply and to know which kind of clinic you run. We do not add you to
                a mailing list.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
