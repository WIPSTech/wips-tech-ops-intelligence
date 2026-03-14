import Script from "next/script";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://wipstech.com"),
  title: "Operations Intelligence Platform for MENA SMEs | WIPS Tech",
  description:
    "WIPS Tech turns operational chaos into structured clarity. AI-powered workflows, KPI visibility, and performance intelligence — built for MENA small businesses.",
  icons: { icon: "/favicon-32.png" },
  openGraph: {
    title: "Operations Intelligence Platform for MENA SMEs | WIPS Tech",
    description:
      "WIPS Tech turns operational chaos into structured clarity. AI-powered workflows, KPI visibility, and performance intelligence — built for MENA small businesses.",
    url: "https://wipstech.com",
    siteName: "WIPS Tech",
    images: [{ url: "https://wipstech.com/og-image.png", width: 1200, height: 630, alt: "WIPS Tech" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operations Intelligence Platform for MENA SMEs | WIPS Tech",
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
  "description": "WIPS Tech is an Operations Intelligence Platform purpose-built for small-to-medium enterprises in the MENA region. It automates workflows, delivers real-time KPI visibility, and enables AI-readiness for SMEs.",
  "foundingDate": "2024",
  "areaServed": ["AE","SA","LB","JO","EG","KW","QA","BH"],
  "serviceType": "Operations Intelligence Platform",
  "knowsAbout": ["workflow automation","operations intelligence","KPI dashboards","SME business operations","AI-readiness for business"],
  "sameAs": ["https://www.linkedin.com/company/wipstech"]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "WIPS Tech Operations Intelligence Platform",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "A cloud-based operations intelligence platform for SMEs in the MENA region. Automates workflows, centralizes KPI tracking, and provides AI-powered performance insights.",
  "url": "https://wipstech.com/platform",
  "publisher": { "@type": "Organization", "name": "WIPS Tech", "url": "https://wipstech.com" },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contact us for SME pricing plans",
    "url": "https://wipstech.com/pricing"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* hreflang — MENA English + Arabic international SEO */}
        <link rel="alternate" hreflang="en" href="https://wipstech.com/" />
        <link rel="alternate" hreflang="ar" href="https://wipstech.com/" />
        <link rel="alternate" hreflang="x-default" href="https://wipstech.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
