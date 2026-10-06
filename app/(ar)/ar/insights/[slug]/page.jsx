import { notFound } from "next/navigation";
import { InsightsArticle } from "../../../../../views/Insights";
import { getArticle, getArticles, pageMeta } from "../../../../../lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles("ar").map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = getArticle("ar", params.slug);
  if (!a) return {};
  return pageMeta("ar", `/insights/${a.slug}`, a.title, a.description);
}

export default function Page({ params }) {
  const a = getArticle("ar", params.slug);
  if (!a) notFound();
  return <InsightsArticle locale="ar" article={a} />;
}
