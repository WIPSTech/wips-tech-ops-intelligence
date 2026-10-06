import { articles } from "../data/articles";
import { site } from "../data/site";

export default function sitemap() {
  const pages = ["", "/services", "/case-studies", "/insights", "/faq", "/about", "/contact"].map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified: new Date("2026-10-06"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
  const posts = articles.map((a) => ({
    url: `${site.url}/insights/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
