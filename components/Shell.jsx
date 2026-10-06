import Script from "next/script";
import "../styles.css";
import Header from "./Header";
import Footer from "./Footer";
import { getContent, site } from "../lib/i18n";

const GA_ID = "G-J7XX8W4HBW";

export function rootMetadata(locale) {
  const t = getContent(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: t.siteTitle, template: "%s | WIPS Tech" },
    description: t.description,
    icons: { icon: "/favicon.png", apple: "/apple-icon.png" },
  };
}

export default function Shell({ locale, children }) {
  const t = getContent(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: "Workflows Intelligence & Performance Solutions",
    url: site.url,
    logo: `${site.url}/logo-transparent.png`,
    image: `${site.url}/og.png`,
    description: t.description,
    foundingDate: site.founded,
    email: site.email,
    areaServed: { "@type": "Country", name: "Lebanon" },
    address: { "@type": "PostalAddress", addressRegion: "Mount Lebanon", addressCountry: "LB" },
    availableLanguage: ["en", "ar"],
    founder: {
      "@type": "Person",
      name: "Mazen Farhat",
      jobTitle: "Founder",
      sameAs: ["https://www.linkedin.com/in/mazen-farhat-200b1427/"],
    },
    knowsAbout: [
      "clinic workflow automation",
      "appointment no-shows",
      "AI agents for small businesses",
      "AI search visibility",
    ],
    sameAs: [site.linkedin],
  };

  return (
    <html lang={locale} dir={t.dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {locale === "ar" ? (
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
            rel="stylesheet"
          />
        ) : (
          <>
            <link rel="preconnect" href="https://api.fontshare.com" />
            <link
              href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
              rel="stylesheet"
            />
          </>
        )}
      </head>
      <body>
        <a className="skip" href="#main">
          {t.skip}
        </a>
        <Header locale={locale} nav={t.nav} cta={t.cta} menu={t.menu} other={t.other} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
