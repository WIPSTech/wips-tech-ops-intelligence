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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Discovery Session genuinely free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The 45-minute session carries no cost, no obligation, and no follow-up unless you choose to proceed. You receive a preliminary waste estimate, a list of your three highest-ROI workflow priorities, and an honest recommendation on whether a full Scan would produce a positive return for your specific operation."
      }
    },
    {
      "@type": "Question",
      "name": "Why not hire an internal operations manager instead?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An internal hire builds capability over time — typically 6–12 months before they redesign anything. WIPS delivers operational intelligence from day one, with diagnostic methodology, sector-specific workflow experience, and implementation accountability. When the engagement concludes, your internal team inherits a documented, functioning system — not a dependency."
      }
    },
    {
      "@type": "Question",
      "name": "We already use software. Why isn't that enough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Software does not redesign your workflows. It digitises the ones you already have — including the inefficient ones. Most WIPS clients are using 30–40% of their software's capability. We architect the system that makes your existing software perform at its potential and automate what has been done manually by habit rather than necessity."
      }
    },
    {
      "@type": "Question",
      "name": "What makes WIPS different from a management consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A consultant diagnoses and recommends. WIPS diagnoses, builds, and stays accountable for the result. The structural difference is implementation. Traditional advisory firms are not resourced or incentivised to execute. WIPS builds the workflows, deploys the automations, and measures performance after delivery. If a build underperforms its projection, we correct it at no additional cost."
      }
    },
    {
      "@type": "Question",
      "name": "How long before we see measurable results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Week four of Phase 1: your Scan report quantifies every identified inefficiency — measurable findings before a single automation is built. Weeks 6–7: first Tier 1 automations are live, with time and cost recovery within days of deployment. The compounding effect of a structured operational system takes 3–6 months to fully materialise — but initial wins happen in the first 30 days."
      }
    },
    {
      "@type": "Question",
      "name": "What is the $500 guarantee exactly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If the first workflow we analyse in the Operational Scan does not demonstrate at least $500 per month in recoverable waste, we invoice you nothing for that task. This is a structural accountability clause — not a marketing claim. It reflects our confidence in the methodology and our commitment to engagements that deliver measurable ROI."
      }
    },
    {
      "@type": "Question",
      "name": "What level of involvement is required from our team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Scan requires 3–4 hours of your team's time over 30 days — primarily structured observation sessions and workflow interviews. We work around your operation, not through it. During the Build phase, we coordinate with relevant staff on implementation. The Partnership retainer requires one monthly performance review and an open channel for new workflow requests."
      }
    },
    {
      "@type": "Question",
      "name": "We already have operational systems. Can WIPS still add value?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Almost always — and often more effectively. Clients with existing systems typically use 30–40% of their tool's capability, have systems that don't communicate with each other, and lack a single performance truth across the operation. WIPS audits what you have, builds the connections, and adds only what is structurally necessary."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does WIPS specialise in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dental and medical clinics, real estate agencies, fitness operations, NGOs, contracting and construction firms, and professional services businesses between 10 and 150 employees. The methodology is consistent across sectors. The application is specific to each."
      }
    }
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
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
