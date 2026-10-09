import Link from "next/link";
import Layers from "../components/Layers";
import Closing from "../components/Closing";
import { getContent, href } from "../lib/i18n";

export default function Services({ locale }) {
  const t = getContent(locale);
  const s = t.services;
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>{s.h1}</h1>
          <p className="lede">{s.lede}</p>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="start-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="start-title">{s.stepsTitle}</h2>
            <p>{s.stepsSub}</p>
          </div>
          <ol className="steps">
            {t.steps.map((step) => (
              <li key={step.name}>
                <h3>{step.name}</h3>
                <p>{step.detail}</p>
                <span className="price">{step.price}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="build-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="build-title">{s.buildTitle}</h2>
            <p>{s.buildSub}</p>
          </div>
          {t.groups.map((g) => (
            <div className="group" key={g.title}>
              <div className="group-head">
                <h3>{g.title}</h3>
                <p>{g.recovers}</p>
              </div>
              <div className="rows">
                {g.items.map((item) => (
                  <div className="row" key={item.name}>
                    <h4>{item.name}</h4>
                    <p>{item.text}</p>
                    <span className={item.layer === 2 ? "tag agent" : "tag"}>{t.layers[item.layer].name}</span>
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
            <h2 id="layers-title">{s.layersTitle}</h2>
            <p>{s.layersSub}</p>
          </div>
          <Layers locale={locale} />
        </div>
      </section>

      <section className="section section-white" id="method" aria-labelledby="method-title">
        <div className="wrap">
          <div className="split">
            <div>
              <h2 id="method-title">{s.methodTitle}</h2>
              <p className="lede method-lede">{s.methodLede}</p>
              <div className="table-scroll" tabIndex={0} role="region" aria-labelledby="method-title">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">{s.table.letter}</th>
                      <th scope="col">{s.table.factor}</th>
                      <th scope="col">{s.table.what}</th>
                      <th scope="col">{s.table.score}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.tifda.map((f) => (
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
                {s.formula1}
                <br />
                {s.formula2}
              </p>
            </div>
            <div className="prose">
              <p className="method-note">{s.methodNote}</p>
              <p>
                <Link href={`${href(locale, "/")}#scorer`} className="btn btn-primary">
                  {s.scorerLink}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="acc-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="acc-title">{s.accTitle}</h2>
          </div>
          <ul className="ticks">
            {s.acc.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="after-rows">
            <Link href={href(locale, "/faq")} className="textlink">
              {s.faqLink}
            </Link>
          </p>
        </div>
      </section>

      <Closing locale={locale} title={t.closings.services.title} text={t.closings.services.text} />
    </>
  );
}
