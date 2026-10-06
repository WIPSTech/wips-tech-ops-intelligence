import Link from "next/link";
import { articles } from "../../data/articles";

export const metadata = {
  title: "Insights for clinic owners",
  description:
    "Short, sourced answers for clinic owners in Lebanon: whether a task needs AI, what a missed appointment costs, and how clinics get named by AI assistants.",
  alternates: { canonical: "/insights" },
};

export default function Insights() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Insights</h1>
          <p className="lede">
            Each article answers one question a clinic owner actually asks. Every figure links to its
            source, and worked examples say when the numbers are made up.
          </p>
        </div>
      </section>
      <section className="section-tight">
        <div className="wrap">
          <ul className="article-list">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link href={`/insights/${a.slug}`}>
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
