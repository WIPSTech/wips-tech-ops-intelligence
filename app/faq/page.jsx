import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Operations Intelligence FAQ — WIPS Tech | MENA SME Guide",
  description:
    "Answers to the most common questions about operations intelligence, workflow automation, and SME performance management — from the WIPS Tech team.",
  alternates: {
    canonical: "https://wipstech.com/faq",
    languages: {
      "en": "https://wipstech.com/faq",
      "ar": "https://wipstech.com/faq",
      "x-default": "https://wipstech.com/faq",
    },
  },
  openGraph: {
    title: "Operations Intelligence FAQ — WIPS Tech | MENA SME Guide",
    description: "Answers to the most common questions about operations intelligence, workflow automation, and SME performance management — from the WIPS Tech team.",
    url: "https://wipstech.com/faq",
    siteName: "WIPS Tech",
    images: [{ url: "https://wipstech.com/og-image.png", width: 1200, height: 630, alt: "WIPS Tech" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operations Intelligence FAQ — WIPS Tech | MENA SME Guide",
    description: "Answers to the most common questions about operations intelligence, workflow automation, and SME performance management.",
  },
};

const mergedFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is operations intelligence?",
      "acceptedAnswer": { "@type": "Answer", "text": "Operations intelligence is a discipline that sits at the intersection of operations, data, and practical AI. It focuses on making every workflow in an organization visible as a cost, a decision point, and a payback period. Unlike traditional reporting, it turns fragmented data and chaotic workflows into connected, measurable performance." }
    },
    {
      "@type": "Question",
      "name": "What does WIPS Tech do?",
      "acceptedAnswer": { "@type": "Answer", "text": "WIPS Tech helps SMEs in the MENA region transform operational chaos, fragmented data, and underused software into measurable performance. We are not business consultants or software vendors; we are Operations Intelligence Partners. We identify invisible waste in your daily tasks and implement automated workflows that turn administrative burdens into clear financial returns." }
    },
    {
      "@type": "Question",
      "name": "Who is WIPS Tech built for?",
      "acceptedAnswer": { "@type": "Answer", "text": "WIPS Tech is built for business owners and managers of dental and medical clinics, NGOs, gyms, and other SMEs who feel their administration is busy but not growing. If you have at least 2 staff members and spend hours manually moving data between WhatsApp, Excel, and your software, WIPS Tech is designed to fix your specific bottlenecks." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between WIPS Tech and an ERP?",
      "acceptedAnswer": { "@type": "Answer", "text": "An ERP is a piece of software you buy and then must populate, which often leads to the same data silos. WIPS Tech is a partner that connects the tools you already pay for. Instead of forcing you to move to a new platform, we build the intelligent bridges between your current scheduling, accounting, and communication tools so they finally communicate." }
    },
    {
      "@type": "Question",
      "name": "What is operational chaos in a small business?",
      "acceptedAnswer": { "@type": "Answer", "text": "Operational chaos is when your system lives in people's heads, paper notebooks, or unorganized WhatsApp groups. It manifests as invisible waste — tasks your team does every day simply because they have always done them, such as manually re-typing patient details or chasing payments by hand. This chaos is a primary barrier to scaling businesses in Lebanon and Jordan." }
    },
    {
      "@type": "Question",
      "name": "How does WIPS Tech improve business performance?",
      "acceptedAnswer": { "@type": "Answer", "text": "We improve performance by moving your business from gut feeling to real numbers. Through our 30-Day Ops Scan, we map your manual tasks, calculate their true monthly cost using the WIPS ROI Formula, and then build Automation Blueprints to eliminate that waste. This recovers lost revenue, reduces staff burnout, and gives you total visibility over your performance." }
    },
    {
      "@type": "Question",
      "name": "What is AI-readiness for small businesses?",
      "acceptedAnswer": { "@type": "Answer", "text": "AI-readiness is not about buying a chatbot; it is about having connected and structured data. You cannot apply AI effectively to paper forms or fragmented WhatsApp chats. WIPS Tech builds the digital foundation first — mapping your workflows and structuring your data — so that practical AI can be deployed only where it has a clear, provable ROI." }
    },
    {
      "@type": "Question",
      "name": "Is WIPS Tech available in Arabic?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. While our automation builds often utilize global platforms, our discovery sessions, diagnostic reports, and outreach are fully supported in Arabic. We ensure that every member of your team understands and can easily adopt the new automated systems." }
    },
    {
      "@type": "Question",
      "name": "What results can SMEs expect from operations intelligence?",
      "acceptedAnswer": { "@type": "Answer", "text": "SMEs can expect to recover thousands of dollars in lost revenue, such as from unmanaged no-shows or lapsed members. Beyond the financial gain, you can expect a significant reduction in manual workload — 96.5% of businesses using automation report this result — and a typical payback period of 18 to 50 days for your initial investment." }
    },
    {
      "@type": "Question",
      "name": "Is WIPS Tech suitable for startups?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Startups often outgrow their processes every 12 to 18 months. WIPS Tech helps growth-stage companies bridge the maintenance gap by ensuring your systems are built for the size you are becoming, rather than the smaller version of the company you used to be." }
    },
    {
      "@type": "Question",
      "name": "Is the Discovery Session genuinely free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The 45 to 60-minute session is designed for us to listen and understand your operation's pain points. There is no pitch deck and no commitment; our only goal is to hear about your busiest days and the manual tasks that are holding you back." }
    },
    {
      "@type": "Question",
      "name": "Why not hire an internal operations manager instead?",
      "acceptedAnswer": { "@type": "Answer", "text": "An internal hire builds capability over time but can quickly become part of the normalized waste by accepting existing broken processes. WIPS Tech provides an external, data-driven perspective and delivers a documented system rather than a dependency on a single person." }
    },
    {
      "@type": "Question",
      "name": "We already use software. Why isn't that enough?",
      "acceptedAnswer": { "@type": "Answer", "text": "The gap is usually structural, not a lack of tools. Most organizations have scheduling and accounting software, but data sits in silos and workflows live in people's heads. WIPS Tech connects the tools you already own to ensure they work as a single, intelligent system." }
    },
    {
      "@type": "Question",
      "name": "What makes WIPS different from a management consultant?",
      "acceptedAnswer": { "@type": "Answer", "text": "We do not deliver a one-off report and disappear, nor do we touch market strategy or financial restructuring. We are Operations Intelligence Partners who fix how operations actually run at the workflow level and stay until the results are sustained." }
    },
    {
      "@type": "Question",
      "name": "How long before we see measurable results?",
      "acceptedAnswer": { "@type": "Answer", "text": "You receive a Priority Finding identifying your biggest measurable cost by Day 7. The implementation of primary manual process fixes typically offers a payback period between 18 and 50 days." }
    },
    {
      "@type": "Question",
      "name": "What level of involvement is required from our team?",
      "acceptedAnswer": { "@type": "Answer", "text": "The 30-day scan requires approximately 4 hours of your team's time total. This primarily involves a Shadow & Map morning where we observe your current workflow without interrupting your daily operations." }
    },
    {
      "@type": "Question",
      "name": "We already have operational systems. Can WIPS still add value?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. In almost every engagement, we find processes built for a smaller version of the organization that have never been updated. We specialize in finding these legacy specifications and connecting existing tools to eliminate the manual bridges you are currently paying for." }
    },
    {
      "@type": "Question",
      "name": "What industries does WIPS specialise in?",
      "acceptedAnswer": { "@type": "Answer", "text": "While our methodology is industry-agnostic, our primary verticals are dental and medical clinics, NGOs, gyms, and education centers. We focus on these sectors because their pain is immediate, quantifiable, and their revenue is predictable enough to justify investment in operational clarity." }
    }
  ]
};

const FAQS = [
  // Part A — SEO
  { q: "What is operations intelligence?", a: "Operations intelligence is a discipline that sits at the intersection of operations, data, and practical AI. It focuses on making every workflow in an organization visible as a cost, a decision point, and a payback period. Unlike traditional reporting, it turns fragmented data and chaotic workflows into connected, measurable performance." },
  { q: "What does WIPS Tech do?", a: "WIPS Tech helps SMEs in the MENA region transform operational chaos, fragmented data, and underused software into measurable performance. We are not business consultants or software vendors; we are Operations Intelligence Partners. We identify \"invisible waste\" in your daily tasks and implement automated workflows that turn administrative burdens into clear financial returns." },
  { q: "Who is WIPS Tech built for?", a: "WIPS Tech is built for business owners and managers of dental and medical clinics, NGOs, gyms, and other SMEs who feel their administration is \"busy but not growing\". If you have at least 2 staff members and spend hours manually moving data between WhatsApp, Excel, and your software, WIPS Tech is designed to fix your specific bottlenecks." },
  { q: "What is the difference between WIPS Tech and an ERP?", a: "An ERP is a piece of software you buy and then must populate, which often leads to the same data silos. WIPS Tech is a partner that connects the tools you already pay for. Instead of forcing you to move to a new platform, we build the \"intelligent bridges\" between your current scheduling, accounting, and communication tools so they finally communicate." },
  { q: "What is operational chaos in a small business?", a: "Operational chaos is when your \"system\" lives in people's heads, paper notebooks, or unorganized WhatsApp groups. It manifests as \"invisible waste\" — tasks your team does every day simply because they have always done them, such as manually re-typing patient details or chasing payments by hand. This chaos is a primary barrier to scaling businesses in Lebanon and Jordan." },
  { q: "How does WIPS Tech improve business performance?", a: "We improve performance by moving your business from \"gut feeling\" to \"real numbers\". Through our 30-Day Ops Scan, we map your manual tasks, calculate their true monthly cost using the WIPS ROI Formula, and then build Automation Blueprints to eliminate that waste. This recovers lost revenue, reduces staff burnout, and gives you total visibility over your performance." },
  { q: "What is AI-readiness for small businesses?", a: "AI-readiness is not about buying a chatbot; it is about having connected and structured data. You cannot apply AI effectively to paper forms or fragmented WhatsApp chats. WIPS Tech builds the digital foundation first — mapping your workflows and structuring your data — so that practical AI can be deployed only where it has a clear, provable ROI." },
  { q: "Is WIPS Tech available in Arabic?", a: "Yes. While our automation builds often utilize global platforms, our discovery sessions, diagnostic reports, and outreach are fully supported in Arabic. We ensure that every member of your team understands and can easily adopt the new automated systems." },
  { q: "What results can SMEs expect from operations intelligence?", a: "SMEs can expect to recover thousands of dollars in \"lost\" revenue, such as from unmanaged no-shows or lapsed members. Beyond the financial gain, you can expect a significant reduction in manual workload — 96.5% of businesses using automation report this result — and a typical payback period of 18 to 50 days for your initial investment." },
  { q: "Is WIPS Tech suitable for startups?", a: "Absolutely. Startups often \"outgrow\" their processes every 12 to 18 months. WIPS Tech helps growth-stage companies bridge the \"maintenance gap\" by ensuring your systems are built for the size you are becoming, rather than the smaller version of the company you used to be." },
  // Part B — Sales
  { q: "Is the Discovery Session genuinely free?", a: "Yes. The 45 to 60-minute session is designed for us to listen and understand your operation's pain points. There is no pitch deck and no commitment; our only goal is to hear about your busiest days and the manual tasks that are holding you back." },
  { q: "Why not hire an internal operations manager instead?", a: "An internal hire builds capability over time but can quickly become part of the \"normalized waste\" by accepting existing broken processes. WIPS Tech provides an external, data-driven perspective and delivers a documented system rather than a dependency on a single person." },
  { q: "We already use software. Why isn't that enough?", a: "The gap is usually structural, not a lack of tools. Most organizations have scheduling and accounting software, but data sits in silos and workflows live in people's heads. WIPS Tech connects the tools you already own to ensure they work as a single, intelligent system." },
  { q: "What makes WIPS different from a management consultant?", a: "We do not deliver a one-off report and disappear, nor do we touch market strategy or financial restructuring. We are Operations Intelligence Partners who fix how operations actually run at the workflow level and stay until the results are sustained." },
  { q: "How long before we see measurable results?", a: "You receive a \"Priority Finding\" identifying your biggest measurable cost by Day 7. The implementation of primary manual process fixes typically offers a payback period between 18 and 50 days." },
  { q: "What level of involvement is required from our team?", a: "The 30-day scan requires approximately 4 hours of your team's time total. This primarily involves a \"Shadow & Map\" morning where we observe your current workflow without interrupting your daily operations." },
  { q: "We already have operational systems. Can WIPS still add value?", a: "Yes. In almost every engagement, we find processes built for a smaller version of the organization that have never been updated. We specialize in finding these \"legacy specifications\" and connecting existing tools to eliminate the manual bridges you are currently paying for." },
  { q: "What industries does WIPS specialise in?", a: "While our methodology is industry-agnostic, our primary verticals are dental and medical clinics, NGOs, gyms, and education centers. We focus on these sectors because their pain is immediate, quantifiable, and their revenue is predictable enough to justify investment in operational clarity." },
];

const SEO_COUNT = 10;

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mergedFaqSchema) }}
      />
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'Outfit',sans-serif;color:#1A202C;background:#fff;-webkit-font-smoothing:antialiased}
        .cg{font-family:'Cormorant Garamond',Georgia,serif}
        .mono{font-family:'JetBrains Mono',monospace}
        .btn-gold{display:inline-flex;align-items:center;gap:8px;background:#C8952A;color:#fff;font-family:'Outfit',sans-serif;font-size:14px;font-weight:700;letter-spacing:.03em;padding:15px 34px;border:2px solid #C8952A;border-radius:3px;transition:all .2s;text-transform:uppercase;text-decoration:none;white-space:nowrap}
        .btn-gold:hover{background:#A37820;border-color:#A37820;transform:translateY(-2px)}
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
        .section-divider{border:none;border-top:2px solid #E8EEF5;margin:40px 0 32px}
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
            <Link href="/blog" className="back-link">Blog</Link>
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
            Every question a serious SME operator asks before choosing an operations intelligence partner — answered directly, without sales language.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="faq-body" style={{padding:"72px 40px",background:"#fff"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>

          {/* Part A label */}
          <div style={{marginBottom:32}}>
            <span className="mono" style={{fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:"#2A9D6F"}}>Part A — Search & SEO Questions · Q1–Q10</span>
            <div style={{width:48,height:3,background:"linear-gradient(90deg,#2A9D6F,#1B365D)",borderRadius:2,margin:"14px 0 0"}}/>
          </div>

          {FAQS.slice(0, SEO_COUNT).map((item, i) => (
            <details key={i}>
              <summary>
                <span className="q-text"><span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"#2A9D6F",marginRight:10,fontWeight:700}}>Q{i+1}</span>{item.q}</span>
                <span className="icon">+</span>
              </summary>
              <p className="ans">{item.a}</p>
            </details>
          ))}

          {/* Part B label */}
          <hr className="section-divider"/>
          <div style={{marginBottom:32,marginTop:8}}>
            <span className="mono" style={{fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:"#C8952A"}}>Part B — Sales & Objection Questions · Q11–Q19</span>
            <div style={{width:48,height:3,background:"linear-gradient(90deg,#C8952A,#1B365D)",borderRadius:2,margin:"14px 0 0"}}/>
          </div>

          {FAQS.slice(SEO_COUNT).map((item, i) => (
            <details key={i + SEO_COUNT}>
              <summary>
                <span className="q-text"><span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"#C8952A",marginRight:10,fontWeight:700}}>Q{i+SEO_COUNT+1}</span>{item.q}</span>
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
          <p style={{fontSize:"1rem",color:"rgba(255,255,255,.6)",lineHeight:1.75,maxWidth:520,margin:"0 auto 36px"}}>
            A structured 45 to 60-minute session. No pitch deck. No commitment. We listen to your busiest days and the manual tasks holding you back.
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
          <Link href="/blog" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>Blog</Link>
          <Link href="/#book" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>Book Discovery</Link>
        </div>
      </footer>
    </>
  );
}
