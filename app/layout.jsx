import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../data/site";

const GA_ID = "G-J7XX8W4HBW";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "WIPS Tech | AI and workflow partner for clinics in Lebanon",
    template: "%s | WIPS Tech",
  },
  description: site.description,
  icons: { icon: "/favicon-32.png" },
  alternates: { canonical: "/" },
  openGraph: {
    title: "WIPS Tech | AI and workflow partner for clinics in Lebanon",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_LB",
  },
  twitter: { card: "summary" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: "Workflows Intelligence & Performance Solutions",
  url: site.url,
  logo: `${site.url}/logo-transparent.png`,
  description: site.description,
  foundingDate: site.founded,
  email: site.email,
  areaServed: { "@type": "Country", name: "Lebanon" },
  address: { "@type": "PostalAddress", addressRegion: "Mount Lebanon", addressCountry: "LB" },
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
