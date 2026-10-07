import Link from "next/link";
import TifdaScorer from "../components/TifdaScorer";
import Layers from "../components/Layers";
import Closing from "../components/Closing";
import { getContent, href } from "../lib/i18n";

export default function Home({ locale }) {
  const t = getContent(locale);
  const h = t.home;
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="context">{h.context}</p>
            <h1>{h.h1}</h1>
            <p className="lede">{h.lede}</p>
            <div className="btn-row">
              <Link href={href(locale, "/contact")} className="btn btn-primary">
                {t.cta}
              </Link>
              <Link href={href(locale, "/services")} className="btn btn-quiet">
                {h.secondary}
              </Link>
            </div>
          </div>
          <TifdaScorer s={t.scorer} compact methodHref={`${href(locale, "/services")}#method`} contactHref={href(locale, "/contact")} />
        </div>
      </section>

      <section className="section section-white" aria-labelledby="q-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="q-title">{h.questionsTitle}</h2>
            <p className="muted">{h.questionsSub}</p>
          </div>
          <ul className="questions">
            {h.questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="layers-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="layers-title">{h.layersTitle}</h2>
            <p>{h.layersText}</p>
          </div>
          <Layers locale={locale} />
        </div>
      </section>

      <section className="section section-white" aria-labelledby="build-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="build-title">{h.buildTitle}</h2>
          </div>
          <div className="rows">
            {t.groups.map((g) => (
              <div className="row" key={g.title}>
                <h3>{g.title}</h3>
                <p>{g.items.map((i) => i.name).join(locale === "ar" ? "، " : ". ")}.</p>
                <span className="tag">{g.recovers}</span>
              </div>
            ))}
          </div>
          <p className="after-rows">
            <Link href={href(locale, "/services")} className="textlink">
              {h.buildLink}
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="start-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="start-title">{h.startTitle}</h2>
            <p>{h.startSub}</p>
          </div>
          <ol className="steps">
            {t.steps.map((s) => (
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
            <h2 id="proof-title">{h.proofTitle}</h2>
          </div>
          <div className="split">
            <div className="prose">
              <h3>{h.proofA.h}</h3>
              <p>{h.proofA.p}</p>
              <p>
                <Link href={href(locale, "/case-studies")} className="textlink">
                  {h.proofA.link}
                </Link>
              </p>
            </div>
            <div className="prose">
              <h3>{h.proofB.h}</h3>
              <p>{h.proofB.p}</p>
            </div>
          </div>
        </div>
      </section>

      <Closing locale={locale} notClinic />
    </>
  );
}
