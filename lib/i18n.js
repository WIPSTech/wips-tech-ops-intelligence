import en from "../content/en";
import ar from "../content/ar";
import { articles as articlesEn } from "../content/articles.en";
import { articles as articlesAr } from "../content/articles.ar";

export const site = {
  name: "WIPS Tech",
  url: "https://wipstech.com",
  email: "info@wipstech.com",
  linkedin: "https://www.linkedin.com/company/wips-tech/",
  formEndpoint: "https://formspree.io/f/xkoqgpjb",
  founded: "2026",
};

export const locales = ["en", "ar"];

export function getContent(locale) {
  return locale === "ar" ? ar : en;
}

export function getArticles(locale) {
  return locale === "ar" ? articlesAr : articlesEn;
}

export function getArticle(locale, slug) {
  return getArticles(locale).find((a) => a.slug === slug);
}

// Internal link for a locale: href("ar", "/services") -> "/ar/services"
export function href(locale, path = "/") {
  if (locale !== "ar") return path;
  return path === "/" ? "/ar" : `/ar${path}`;
}

export function pageMeta(locale, path, title, description) {
  const t = getContent(locale);
  const canonical = href(locale, path);
  return {
    title: title || { absolute: t.siteTitle },
    description: description || t.description,
    alternates: {
      canonical,
      languages: { en: href("en", path), ar: href("ar", path), "x-default": href("en", path) },
    },
    openGraph: {
      title: title || t.siteTitle,
      description: description || t.description,
      url: canonical,
      siteName: site.name,
      type: "website",
      locale: locale === "ar" ? "ar_LB" : "en_LB",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "WIPS Tech" }],
    },
    twitter: { card: "summary_large_image", images: ["/og.png"] },
  };
}
