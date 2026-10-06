import Closing from "../components/Closing";
import Sections from "./Sections";
import { getContent } from "../lib/i18n";

export default function CaseStudy({ locale }) {
  const t = getContent(locale);
  const c = t.caseStudy;
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="context">{c.context}</p>
          <h1>{c.h1}</h1>
          <p className="lede">{c.lede}</p>
        </div>
      </section>

      <section className="section-tight evidence-band">
        <div className="wrap evidence">
          <figure>
            <img
              src="/case-ntm-chatgpt.webp"
              alt={c.figAlt}
              width="796"
              height="794"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>{c.figCaption}</figcaption>
          </figure>
          <div className="try">
            <h2>{c.tryH}</h2>
            <p>{c.tryP}</p>
            <p className="query" dir="ltr" lang="en">
              {c.tryQuery}
            </p>
            <p className="muted">{c.tryNote}</p>
          </div>
        </div>
      </section>

      <section className="section-tight section-white">
        <div className="wrap">
          <Sections sections={c.sections} locale={locale} />
        </div>
      </section>

      <Closing locale={locale} title={c.closingTitle} text={c.closingText} />
    </>
  );
}
