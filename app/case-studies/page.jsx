import Closing from "../../components/Closing";

export const metadata = {
  title: "Case study: a contracting company named in AI answers",
  description:
    "How a Lebanese contracting company, directed by WIPS Tech's founder, came to be named by ChatGPT for contractor searches. One observation, described with its limits.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudies() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="context">Contracting company, Lebanon</p>
          <h1 style={{ marginTop: 12 }}>Getting a contracting company named in AI answers</h1>
          <p className="lede">
            This is the one result we can show. It is not from a clinic, and it is from a company our
            founder directs.
          </p>
          <p className="note" style={{ marginTop: 32 }}>
            Disclosure: the company in this case study is directed by the founder of WIPS Tech. It was our
            own first test, not an outside client.
          </p>
        </div>
      </section>

      <section className="section-tight section-white">
        <div className="wrap">
          <div className="case">
            <h2>The situation</h2>
            <div className="prose">
              <p>
                A licensed contracting company in Mount Lebanon wins most of its work through referrals.
                More people now ask an AI assistant to suggest a contractor before they ask a friend. When
                we began, the company's website gave those assistants little they could read or repeat.
              </p>
            </div>
          </div>
          <div className="case">
            <h2>What we changed</h2>
            <ul className="ticks">
              <li>Rewrote each service as a plain question with a short, direct answer.</li>
              <li>Added structured business details that search engines and AI tools read directly.</li>
              <li>Published a sitemap and crawler rules that let search and AI crawlers in.</li>
              <li>
                Listed the steps that sit outside the site: Google Search Console, Google Business Profile
                and Bing Webmaster Tools.
              </li>
            </ul>
          </div>
          <div className="case">
            <h2>What happened</h2>
            <div className="prose">
              <p>
                When asked about contracting companies in its area, ChatGPT now names the company. The
                company has received an enquiry that came through that route.
              </p>
            </div>
          </div>
          <div className="case">
            <h2>What this does not show</h2>
            <ul className="ticks">
              <li>It is one company and one observation, made by our founder in 2026.</li>
              <li>AI answers change with the wording of the question and over time.</li>
              <li>We have not measured how often the company is named or how many enquiries follow.</li>
              <li>Contracting is not healthcare. A clinic may see a different result.</li>
            </ul>
          </div>
          <div className="case">
            <h2>Why a clinic might care</h2>
            <div className="prose">
              <p>
                Patients ask the same assistants for a dentist or a skin clinic nearby. The work that made
                a contractor readable to them is the same work for a clinic, and it is small.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Closing
        title="Want to know what an assistant says about your clinic?"
        text="We will check it with you in the free session and show you what it is reading."
      />
    </>
  );
}
