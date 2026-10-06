import { getArticles, href, site } from "../lib/i18n";

const paths = ["/", "/services", "/case-studies", "/insights", "/faq", "/about", "/contact"];

function entry(path, lastModified, priority) {
  return {
    url: `${site.url}${href("en", path)}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
    alternates: {
      languages: { en: `${site.url}${href("en", path)}`, ar: `${site.url}${href("ar", path)}` },
    },
  };
}

export default function sitemap() {
  const updated = new Date("2026-10-06");
  const pages = paths.map((p) => entry(p, updated, p === "/" ? 1 : 0.8));
  const posts = getArticles("en").map((a) => entry(`/insights/${a.slug}`, new Date(a.date), 0.6));
  return [...pages, ...posts];
}
