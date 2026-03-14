import "./globals.css";

export const metadata = {
  title: "Operations Intelligence Platform for MENA SMEs | WIPS Tech",
  description:
    "WIPS Tech turns operational chaos into structured clarity. AI-powered workflows, KPI visibility, and performance intelligence — built for MENA small businesses.",
  icons: {
    icon: "/favicon-32.png",
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
  "knowsAbout": [
    "workflow automation",
    "operations intelligence",
    "KPI dashboards",
    "SME business operations",
    "AI-readiness for business"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/wipstech"
  ]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "WIPS Tech Operations Intelligence Platform",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "A cloud-based operations intelligence platform for SMEs in the MENA region. Automates workflows, centralizes KPI tracking, and provides AI-powered performance insights.",
  "url": "https://wipstech.com/platform",
  "publisher": {
    "@type": "Organization",
    "name": "WIPS Tech",
    "url": "https://wipstech.com"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
