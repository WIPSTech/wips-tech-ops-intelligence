import Link from "next/link";

export const metadata = {
  title: "Operations Intelligence FAQ — WIPS Tech | MENA SME Guide",
  description:
    "Answers to the most common questions about operations intelligence, workflow automation, and SME performance management — from the WIPS Tech team.",
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an operations intelligence platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An operations intelligence platform is a software system that converts real-time business data into actionable insights for operational decision-making. It automates workflows, tracks KPIs, and provides performance visibility — replacing manual spreadsheets and disconnected tools. WIPS Tech is an operations intelligence platform purpose-built for SMEs in the MENA region."
      }
    },
    {
      "@type": "Question",
      "name": "What does WIPS Tech do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WIPS Tech gives SMEs in the MENA region a single platform to automate their workflows, track business KPIs in real time, and build the data-driven operations needed for AI-readiness. It translates operational chaos into structured clarity and performance visibility, enabling business owners to make faster, more confident decisions."
      }
    },
    {
      "@type": "Question",
      "name": "Who is WIPS Tech built for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WIPS Tech is built for small and medium enterprises, startups, and growing businesses in the MENA region — including the UAE, Saudi Arabia, Lebanon, Jordan, and Egypt. It is designed for business owners, COOs, and operations managers who need operational visibility without the cost and complexity of enterprise ERP systems."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between WIPS Tech and an ERP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ERP systems are large, expensive, and designed for enterprise-level operations. WIPS Tech is an operations intelligence platform built specifically for SMEs — faster to implement, easier to use, and focused on operational clarity rather than financial back-office functions. Most SMEs get WIPS Tech live within 30 days, not 12 months."
      }
    },
    {
      "@type": "Question",
      "name": "What is operational chaos in a small business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Operational chaos occurs when a small business lacks documented workflows, real-time performance data, and systematic processes. It typically manifests as decisions made from memory, data spread across spreadsheets and messaging apps, and inability to measure business performance consistently. WIPS Tech was built specifically to resolve operational chaos for MENA SMEs."
      }
    },
    {
      "@type": "Question",
      "name": "How does WIPS Tech improve business performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WIPS Tech improves business performance by automating core workflows, centralizing KPI tracking, and delivering real-time operational intelligence. Business owners gain clear visibility into what is happening across their operations, can identify bottlenecks before they escalate, and make decisions based on data rather than instinct."
      }
    },
    {
      "@type": "Question",
      "name": "What is AI-readiness for small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI-readiness means a business has the structured data, documented workflows, and operational infrastructure needed to benefit from artificial intelligence tools. WIPS Tech builds AI-readiness in SMEs by first structuring their operations, automating core workflows, and creating the data foundation that AI systems require to generate useful insights."
      }
    },
    {
      "@type": "Question",
      "name": "Is WIPS Tech available in Arabic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WIPS Tech supports Arabic-language operations and is designed for the MENA regional market. Arabic-language content and interface localization are available for users in the UAE, Saudi Arabia, Lebanon, Jordan, and other MENA markets."
      }
    },
    {
      "@type": "Question",
      "name": "What results can SMEs expect from operations intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SMEs implementing operations intelligence platforms typically report improved decision-making speed, reduced manual work through workflow automation, greater team accountability, and clearer performance visibility. Businesses using integrated digital platforms improve operational efficiency by over 28% on average."
      }
    },
    {
      "@type": "Question",
      "name": "Is WIPS Tech suitable for startups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WIPS Tech is designed for startups as well as established SMEs. For startups, building structured workflows and operational visibility from the beginning prevents the chaos that typically accompanies rapid growth. WIPS Tech helps MENA startups build the operational foundation needed to scale confidently and become investor-ready."
      }
    }
  ]
};

const FAQS = [
  {
    q: "What is an operations intelligence platform?",
    a: <>An operations intelligence platform is a software system that converts real-time business data into actionable insights for operational decision-making. It automates <Link href="/" style={{color:"#2A9D6F",fontWeight:600,textDecoration:"none"}}>workflows</Link>, tracks KPIs, and provides performance visibility — replacing manual spreadsheets and disconnected tools. WIPS Tech is an operations intelligence platform purpose-built for SMEs in the MENA region.</>
  },
  {
    q: "What does WIPS Tech do?",
    a: "WIPS Tech gives SMEs in the MENA region a single platform to automate their workflows, track business KPIs in real time, and build the data-driven operations needed for AI-readiness. It translates operational chaos into structured clarity and performance visibility, enabling business owners to make faster, more confident decisions."
  },
  {
    q: "Who is WIPS Tech built for?",
    a: "WIPS Tech is built for small and medium enterprises, startups, and growing businesses in the MENA region — including the UAE, Saudi Arabia, Lebanon, Jordan, and Egypt. It is designed for business owners, COOs, and operations managers who need operational visibility without the cost and complexity of enterprise ERP systems."
  },
  {
    q: "What is the difference between WIPS Tech and an ERP?",
    a: "ERP systems are large, expensive, and designed for enterprise-level operations. WIPS Tech is an operations intelligence platform built specifically for SMEs — faster to implement, easier to use, and focused on operational clarity rather than financial back-office functions. Most SMEs get WIPS Tech live within 30 days, not 12 months."
  },
  {
    q: "What is operational chaos in a small business?",
    a: "Operational chaos occurs when a small business lacks documented workflows, real-time performance data, and systematic processes. It typically manifests as decisions made from memory, data spread across spreadsheets and messaging apps, and inability to measure business performance consistently. WIPS Tech was built specifically to resolve operational chaos for MENA SMEs."
  },
  {
    q: "How does WIPS Tech improve business performance?",
    a: "WIPS Tech improves business performance by automating core workflows, centralizing KPI tracking, and delivering real-time operational intelligence. Business owners gain clear visibility into what is happening across their operations, can identify bottlenecks before they escalate, and make decisions based on data rather than instinct."
  },
  {
    q: "What is AI-readiness for small businesses?",
    a: "AI-readiness means a business has the structured data, documented workflows, and operational infrastructure needed to benefit from artificial intelligence tools. WIPS Tech builds AI-readiness in SMEs by first structuring their operations, automating core workflows, and creating the data foundation that AI systems require to generate useful insights."
  },
  {
    q: "Is WIPS Tech available in Arabic?",
    a: "Yes. WIPS Tech supports Arabic-language operations and is designed for the MENA regional market. Arabic-language content and interface localization are available for users in the UAE, Saudi Arabia, Lebanon, Jordan, and other MENA markets."
  },
  {
    q: "What results can SMEs expect from operations intelligence?",
    a: <>SMEs implementing operations intelligence platforms typically report improved decision-making speed, reduced manual work through <Link href="/" style={{color:"#2A9D6F",fontWeight:600,textDecoration:"none"}}>workflow automation</Link>, greater team accountability, and clearer performance visibility. Businesses using integrated digital platforms improve operational efficiency by over 28% on average.</>
  },
  {
    q: "Is WIPS Tech suitable for startups?",
    a: "Yes. WIPS Tech is designed for startups as well as established SMEs. For startups, building structured workflows and operational visibility from the beginning prevents the chaos that typically accompanies rapid growth. WIPS Tech helps MENA startups build the operational foundation needed to scale confidently and become investor-ready."
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'Outfit',sans-serif;color:#1A202C;background:#fff;-webkit-font-smoothing:antialiased}
        .cg{font-family:'Cormorant Garamond',Georgia,serif}
        .mono{font-family:'JetBrains Mono',monospace}
        .btn-gold{display:inline-flex;align-items:center;gap:8px;background:#C8952A;color:#fff;font-family:'Outfit',sans-serif;font-size:14px;font-weight:700;letter-spacing:.03em;padding:15px 34px;border:2px solid #C8952A;border-radius:3px;transition:all .2s;text-transform:uppercase;text-decoration:none;white-space:nowrap}
        .btn-gold:hover{background:#A37820;border-color:#A37820;transform:translateY(-2px);box-shadow:0 12px 32px rgba(200,149,42,.35)}
        .btn-primary{display:inline-flex;align-items:center;gap:8px;background:#1B365D;color:#fff;font-family:'Outfit',sans-serif;font-size:14px;font-weight:600;padding:13px 28px;border:2px solid #1B365D;border-radius:3px;transition:all .2s;text-decoration:none}
        .btn-primary:hover{background:#0F1E35;transform:translateY(-1px)}
        .back-link{font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;color:#4A5568;text-decoration:none}
        .back-link:hover{color:#1B365D}
        details{border-bottom:1px solid #E8EEF5}
        details summary{list-style:none;padding:20px 0;display:flex;justify-content:space-between;align-items:flex-start;gap:16px;cursor:pointer;user-select:none}
        details summary::-webkit-details-marker{display:none}
        details summary .icon{color:#2A9D6F;font-size:20px;flex-shrink:0;margin-top:2px;transition:transform .2s;display:inline-block}
        details[open] summary .icon{transform:rotate(45deg)}
        details summary .q-text{font-family:'Cormorant Garamond',Georgia,serif;font-size:1.05rem;font-weight:500;color:#1B365D;line-height:1.4}
        details .ans{font-size:14px;color:#4A5568;line-height:1.75;padding-bottom:20px;padding-right:32px}
        @media(max-width:768px){
          .faq-hero{padding:56px 20px 48px!important}
          .faq-body{padding:48px 20px!important}
          .faq-cta{padding:56px 20px!important}
          nav{padding:0 20px!important}
        }
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"rgba(255,255,255,.97)",backdropFilter:"blur(12px)",borderBottom:"1px solid #E8EEF5",padding:"0 40px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:96}}>
          <Link href="/" style={{textDecoration:"none"}}>
            <img src="/logo-transparent.png" alt="WIPS Tech" style={{height:88,width:"auto",objectFit:"contain",display:"block",maxWidth:440}}/>
          </Link>
          <div style={{display:"flex",gap:16,alignItems:"center"}}>
            <Link href="/insights" className="back-link">Insights</Link>
            <Link href="/" className="back-link">← Home</Link>
            <Link href="/#book" className="btn-primary" style={{padding:"10px 20px",fontSize:13}}>Book Discovery</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="faq-hero" style={{background:"linear-gradient(158deg,#0F1E35 0%,#1B365D 100%)",padding:"72px 40px 64px"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <span className="mono" style={{fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:"#3DBF8A"}}>Operations Intelligence</span>
          <div style={{width:48,height:2,background:"linear-gradient(90deg,#2A9D6F,transparent)",margin:"14px 0 20px"}}/>
          <h1 className="cg" style={{fontSize:"clamp(2rem,5vw,3.2rem)",fontWeight:300,color:"#fff",lineHeight:1.1,marginBottom:20}}>
            Operations Intelligence: Answers for MENA Business Owners
          </h1>
          <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,.65)",maxWidth:580,lineHeight:1.75}}>
            Every question a serious SME operator asks before choosing an operations intelligence platform — answered directly, without sales language.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="faq-body" style={{padding:"72px 40px",background:"#fff"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>

          <div style={{marginBottom:48}}>
            <span className="mono" style={{fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:"#2A9D6F"}}>10 Questions</span>
            <div style={{width:48,height:3,background:"linear-gradient(90deg,#2A9D6F,#1B365D)",borderRadius:2,margin:"14px 0 0"}}/>
          </div>

          {FAQS.map((item, i) => (
            <details key={i}>
              <summary>
                <span className="q-text">{item.q}</span>
                <span className="icon">+</span>
              </summary>
              <p className="ans">{item.a}</p>
            </details>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta" style={{background:"linear-gradient(135deg,#0F1E35 0%,#1A4535 100%)",padding:"80px 40px",textAlign:"center"}}>
        <div style={{maxWidth:660,margin:"0 auto"}}>
          <span className="mono" style={{fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:"#3DBF8A",display:"block",marginBottom:16}}>Start Here</span>
          <h2 className="cg" style={{fontSize:"clamp(1.8rem,4vw,2.6rem)",fontWeight:300,color:"#fff",marginBottom:20,lineHeight:1.2}}>
            Still Have Questions? The Discovery Session Answers All of Them — Free.
          </h2>
          <p style={{fontSize:"1rem",color:"rgba(255,255,255,.6)",lineHeight:1.75,marginBottom:36,maxWidth:520,margin:"0 auto 36px"}}>
            A structured 45-minute session. No pitch. No obligation. We identify your three largest operational gaps and tell you clearly whether WIPS Tech would generate a measurable return for your business.
          </p>
          <Link href="/#book" className="btn-gold">Book Discovery Session →</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"#0F1E35",padding:"32px 40px",textAlign:"center"}}>
        <p style={{fontSize:"12px",color:"rgba(255,255,255,.3)"}}>© 2026 WIPS Tech. All rights reserved.</p>
        <div style={{display:"flex",gap:24,justifyContent:"center",marginTop:10,flexWrap:"wrap"}}>
          <Link href="/" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>Home</Link>
          <Link href="/insights" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>Insights</Link>
          <Link href="/#book" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>Book Discovery</Link>
        </div>
      </footer>
    </>
  );
}
