import Script from "next/script";
import "./globals.css";

const GA_ID = "G-J7XX8W4HBW";

export const metadata = {
  metadataBase: new URL("https://wipstech.com"),
  title: "Operations Intelligence Partner for MENA SMEs | WIPS Tech",
  description:
    "WIPS Tech turns operational chaos into structured clarity. AI-powered workflows, KPI visibility, and performance intelligence — built for MENA small businesses.",
  icons: { icon: "/favicon-32.png" },
  openGraph: {
    title: "Operations Intelligence Partner for MENA SMEs | WIPS Tech",
    description:
      "WIPS Tech turns operational chaos into structured clarity. AI-powered workflows, KPI visibility, and performance intelligence — built for MENA small businesses.",
    url: "https://wipstech.com",
    siteName: "WIPS Tech",
    images: [{ url: "https://wipstech.com/og-image.png", width: 1200, height: 630, alt: "WIPS Tech" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operations Intelligence Partner for MENA SMEs | WIPS Tech",
    description:
      "WIPS Tech turns operational chaos into structured clarity. AI-powered workflows, KPI visibility, and performance intelligence.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WIPS Tech",
  "legalName": "Workflows Intelligence Performance Solutions",
  "url": "https://wipstech.com",
  "logo": "https://wipstech.com/logo.png",
  "description": "WIPS Tech is a Lebanon-based operations and workflow automation partner for small businesses. We measure what a manual workflow costs, then build and maintain the automation that removes it.",
  "foundingDate": "2026",
  "areaServed": ["LB"],
  "serviceType": "Workflow automation and operations consulting",
  "knowsAbout": ["workflow automation","operations intelligence","KPI dashboards","SME business operations","AI-readiness for business"],
  "sameAs": ["https://www.linkedin.com/company/wipstech"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload LCP image */}
        <link rel="preload" as="image" href="/logo-mobile.png" />
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fonts — display=swap prevents render blocking */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive"
          dangerouslySetInnerHTML={{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}}
        />
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
