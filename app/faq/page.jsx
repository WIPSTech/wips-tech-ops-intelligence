import Closing from "../../components/Closing";
import { faqs } from "../../data/faqs";

export const metadata = {
  title: "Questions clinic owners ask",
  description:
    "Plain answers about WIPS Tech: what it does, whether a clinic needs AI, what the free session covers, what it costs, and what happens to patient information.",
  alternates: { canonical: "/faq" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Questions clinic owners ask</h1>
        </div>
      </section>
      <section className="section-tight">
        <div className="wrap faq" style={{ maxWidth: 860 }}>
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
