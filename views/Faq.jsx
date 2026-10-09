import Closing from "../components/Closing";
import { getContent } from "../lib/i18n";

export default function Faq({ locale }) {
  const t = getContent(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: t.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>{t.faq.h1}</h1>
        </div>
      </section>
      <section className="section-tight">
        <div className="wrap faq">
          {t.faq.items.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <Closing locale={locale} title={t.closings.faq.title} text={t.closings.faq.text} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
