import Link from "next/link";
import Closing from "../components/Closing";
import { getArticles, getContent, href, site } from "../lib/i18n";

export function InsightsIndex({ locale }) {
  const t = getContent(locale);
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>{t.insights.h1}</h1>
          <p className="lede">{t.insights.lede}</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="wrap">
          <ul className="article-list">
            {getArticles(locale).map((a) => (
              <li key={a.slug}>
                <Link href={href(locale, `/insights/${a.slug}`)}>
                  <h2>{a.title}</h2>
                  <span className="meta">{a.readTime}</span>
                  <p>{a.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export function InsightsArticle({ locale, article }) {
  const t = getContent(locale);
  const a = article;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: locale,
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    author: { "@type": "Person", name: "Mazen Farhat" },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}${href(locale, `/insights/${a.slug}`)}`,
  };
  const date = new Date(a.date).toLocaleDateString(locale === "ar" ? "ar-LB-u-nu-latn" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  return (
    <>
      <article className="section-tight">
        <div className="wrap article">
          <p>
            <Link href={href(locale, "/insights")} className="textlink">
              {t.insights.all}
            </Link>
          </p>
          <h1>{a.title}</h1>
          <p className="muted byline">
            {date} · {a.readTime}
          </p>
          <p className="answer">{a.answer}</p>
          {a.body.map((section) => (
            <section key={section.h}>
              <h2>{section.h}</h2>
              {section.p.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </section>
          ))}
          <div className="sources">
            <h2>{t.insights.sources}</h2>
            <ul>
              {a.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} className="textlink" rel="noopener noreferrer" target="_blank">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
      <Closing locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
