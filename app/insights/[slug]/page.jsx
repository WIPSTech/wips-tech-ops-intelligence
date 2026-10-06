import Link from "next/link";
import { notFound } from "next/navigation";
import Closing from "../../../components/Closing";
import { articles, getArticle } from "../../../data/articles";
import { site } from "../../../data/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const a = getArticle(params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { title: a.title, description: a.description, type: "article", publishedTime: a.date },
  };
}

export default function Article({ params }) {
  const a = getArticle(params.slug);
  if (!a) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    author: { "@type": "Person", name: "Mazen Farhat" },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/insights/${a.slug}`,
  };

  return (
    <>
      <article className="section-tight">
        <div className="wrap article">
          <p>
            <Link href="/insights" className="textlink">
              All insights
            </Link>
          </p>
          <h1 style={{ marginTop: 24 }}>{a.title}</h1>
          <p className="muted mono" style={{ marginTop: 16 }}>
            {new Date(a.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })},{" "}
            {a.readTime}
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
            <h2 style={{ fontSize: "1.05rem", margin: "0 0 12px" }}>Sources</h2>
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
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
