import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { POSTS } from "../posts";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://wipstech.com/blog/${post.slug}`,
      siteName: "WIPS Tech",
      images: [{ url: "https://wipstech.com/og-image.png", width: 1200, height: 630, alt: "WIPS Tech" }],
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

// ── ARTICLE CONTENT MAP ──
const CONTENT = {
  "what-is-operations-intelligence-platform": ArticleOpsIntelligence,
};

export default function BlogPostPage({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const ArticleComponent = CONTENT[params.slug];
  if (!ArticleComponent) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": { "@type": "Organization", "name": "WIPS Tech", "url": "https://wipstech.com" },
    "publisher": {
      "@type": "Organization",
      "name": "WIPS Tech",
      "url": "https://wipstech.com",
      "logo": { "@type": "ImageObject", "url": "https://wipstech.com/logo.png" }
    },
    "description": post.metaDescription,
    "url": `https://wipstech.com/blog/${post.slug}`,
    "image": "https://wipstech.com/og-image.png",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wipstech.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://wipstech.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://wipstech.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <Script id={`article-schema-${post.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id={`breadcrumb-schema-${post.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'Outfit',sans-serif;color:#1A202C;background:#fff;-webkit-font-smoothing:antialiased}
        .cg{font-family:'Cormorant Garamond',Georgia,serif}
        .mono{font-family:'JetBrains Mono',monospace}
        .btn-gold{display:inline-flex;align-items:center;gap:8px;background:#C8952A;color:#fff;font-family:'Outfit',sans-serif;font-size:14px;font-weight:700;letter-spacing:.03em;padding:15px 34px;border:2px solid #C8952A;border-radius:3px;transition:all .2s;text-transform:uppercase;text-decoration:none;white-space:nowrap}
        .btn-gold:hover{background:#A37820;transform:translateY(-2px)}
        .btn-primary{display:inline-flex;align-items:center;gap:8px;background:#1B365D;color:#fff;font-family:'Outfit',sans-serif;font-size:14px;font-weight:600;padding:13px 28px;border:2px solid #1B365D;border-radius:3px;transition:all .2s;text-decoration:none}
        .btn-primary:hover{background:#0F1E35;transform:translateY(-1px)}
        .btn-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#1B365D;font-family:'Outfit',sans-serif;font-size:14px;font-weight:600;padding:12px 26px;border:2px solid #1B365D;border-radius:3px;transition:all .2s;text-decoration:none}
        .btn-outline:hover{background:#1B365D;color:#fff}
        .back-link{font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;color:#4A5568;text-decoration:none}
        .back-link:hover{color:#1B365D}
        .article-link{color:#2A9D6F;font-weight:600;text-decoration:none}
        .article-link:hover{text-decoration:underline}
        .stage-table{width:100%;border-collapse:collapse;margin:24px 0;font-size:14px}
        .stage-table th{background:#1B365D;color:#fff;padding:12px 16px;text-align:left;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase}
        .stage-table td{padding:12px 16px;border-bottom:1px solid #E8EEF5;color:#4A5568;vertical-align:top;line-height:1.6}
        .stage-table tr:last-child td{border-bottom:none}
        .stage-table tr:nth-child(even) td{background:#F4F7FA}
        .stage-table td:first-child{font-weight:600;color:#1B365D;white-space:nowrap}
        @media(max-width:768px){nav{padding:0 20px!important}.stage-table{font-size:12px}.stage-table td,.stage-table th{padding:8px 10px}}
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"rgba(255,255,255,.97)",backdropFilter:"blur(12px)",borderBottom:"1px solid #E8EEF5",padding:"0 40px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:96}}>
          <Link href="/" style={{textDecoration:"none"}}>
            <img src="/logo-transparent.png" alt="WIPS Tech" style={{height:88,width:"auto",objectFit:"contain",display:"block",maxWidth:440}}/>
          </Link>
          <div style={{display:"flex",gap:16,alignItems:"center"}}>
            <Link href="/blog" className="back-link">← Blog</Link>
            <Link href="/#book" className="btn-primary" style={{padding:"10px 20px",fontSize:13}}>Book Discovery</Link>
          </div>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{background:"#F4F7FA",borderBottom:"1px solid #E8EEF5",padding:"12px 40px"}}>
        <div style={{maxWidth:860,margin:"0 auto",display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
          <Link href="/" style={{fontSize:12,color:"#718096",textDecoration:"none"}}>Home</Link>
          <span style={{fontSize:12,color:"#A0AEC0"}}>→</span>
          <Link href="/blog" style={{fontSize:12,color:"#718096",textDecoration:"none"}}>Blog</Link>
          <span style={{fontSize:12,color:"#A0AEC0"}}>→</span>
          <span style={{fontSize:12,color:"#1B365D",fontWeight:500}}>{post.title}</span>
        </div>
      </div>

      {/* ARTICLE */}
      <ArticleComponent post={post} />

      {/* FOOTER */}
      <footer style={{background:"#0F1E35",padding:"32px 40px",textAlign:"center"}}>
        <p style={{fontSize:"12px",color:"rgba(255,255,255,.3)"}}>© 2026 WIPS Tech. All rights reserved.</p>
        <div style={{display:"flex",gap:24,justifyContent:"center",marginTop:10,flexWrap:"wrap"}}>
          <Link href="/" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>Home</Link>
          <Link href="/blog" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>Blog</Link>
          <Link href="/insights" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>Insights</Link>
          <Link href="/faq" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>FAQ</Link>
        </div>
      </footer>
    </>
  );
}

// ── ARTICLE 1 COMPONENT ──
function ArticleOpsIntelligence({ post }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between business intelligence and operations intelligence?",
        "acceptedAnswer": { "@type": "Answer", "text": "Business intelligence analyzes historical data for long-term strategy. Operations intelligence analyzes real-time data for immediate decisions. WIPS Tech delivers operations intelligence — giving MENA SME owners visibility into what is happening right now, not last quarter." }
      },
      {
        "@type": "Question",
        "name": "How long does it take to implement an operations intelligence platform?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most SMEs implement WIPS Tech within 30 days. Unlike traditional ERP systems requiring months of configuration, WIPS Tech is designed for fast deployment with minimal technical setup." }
      },
      {
        "@type": "Question",
        "name": "Is an operations intelligence platform suitable for small businesses?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. WIPS Tech is purpose-built for small and medium enterprises. It provides enterprise-grade operational visibility at SME-accessible cost and complexity." }
      }
    ]
  };

  return (
    <>
      <Script id="blog-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article style={{maxWidth:860,margin:"0 auto",padding:"56px 40px 80px"}}>

        {/* Header */}
        <div style={{marginBottom:32}}>
          <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:16,flexWrap:"wrap"}}>
            <span className="mono" style={{fontSize:"9px",background:"#1B365D",color:"#fff",padding:"3px 10px",borderRadius:20,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em"}}>{post.category}</span>
            <span style={{fontSize:"11px",color:"#718096"}}>{post.readTime}</span>
            <span style={{fontSize:"11px",color:"#A0AEC0"}}>{post.date}</span>
          </div>
          <h1 className="cg" style={{fontSize:"clamp(1.9rem,4vw,2.8rem)",fontWeight:400,color:"#1B365D",lineHeight:1.15,marginBottom:24}}>{post.title}</h1>
          <div style={{height:1,background:"#E8EEF5"}}/>
        </div>

        {/* INTRO */}
        <p style={{fontSize:"17px",color:"#2D3748",lineHeight:1.85,marginBottom:40,fontWeight:400}}>
          An operations intelligence platform is a software system that converts real-time business data into actionable insights for operational decision-making. It automates workflows, tracks KPIs, and provides performance visibility — replacing manual spreadsheets and disconnected tools. <a href="https://wipstech.com" className="article-link">WIPS Tech</a> is an operations intelligence platform purpose-built for SMEs in the MENA region. According to Future Market Insights (2026), the operations intelligence market is projected to grow at 11.4% CAGR, driven primarily by SME adoption in emerging markets.
        </p>

        {/* H2 — The Problem */}
        <h2 className="cg" style={{fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:500,color:"#1B365D",marginBottom:16,lineHeight:1.3}}>The Problem Operations Intelligence Solves</h2>
        <p style={{fontSize:"15px",color:"#4A5568",lineHeight:1.85,marginBottom:16}}>
          Most small and medium enterprises in the MENA region operate in a state of operational chaos — not because their owners lack capability, but because no structured system connects their workflows, data, and decisions. Tasks are delegated verbally, tracked in WhatsApp groups, and measured by gut instinct. KPIs, if they exist at all, sit in spreadsheets that no one updates consistently.
        </p>
        <p style={{fontSize:"15px",color:"#4A5568",lineHeight:1.85,marginBottom:40}}>
          The result is reactive management: problems are discovered after they compound, not before they begin. Operational waste accumulates invisibly — in missed appointments, duplicated data entry, underutilised software, and decisions made without current information. <a href="https://wipstech.com" className="article-link">WIPS Tech</a> was built specifically to resolve this — giving MENA SME owners the operational visibility they need to stop reacting and start directing.
        </p>

        {/* H2 — Definition */}
        <h2 className="cg" style={{fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:500,color:"#1B365D",marginBottom:16,lineHeight:1.3}}>What Is an Operations Intelligence Platform? (Definition)</h2>
        <blockquote style={{borderLeft:"3px solid #2A9D6F",paddingLeft:24,marginBottom:40,background:"#F4F7FA",padding:"20px 24px",borderRadius:"0 8px 8px 0"}}>
          <p style={{fontSize:"15px",color:"#2D3748",lineHeight:1.85,fontStyle:"italic"}}>
            "An operations intelligence platform is a category of business software that provides real-time visibility into organizational workflows, performance metrics, and operational data. Unlike traditional business intelligence (BI) tools that analyze historical data, an operations intelligence platform focuses on what is happening right now — enabling immediate, data-driven decisions. WIPS Tech delivers operations intelligence specifically designed for small and medium enterprises in the MENA region."
          </p>
        </blockquote>

        {/* H2 — Maturity Stages */}
        <h2 className="cg" style={{fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:500,color:"#1B365D",marginBottom:20,lineHeight:1.3}}>The 4 Stages of SME Operational Maturity</h2>
        <div style={{overflowX:"auto",marginBottom:40}}>
          <table className="stage-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Description</th>
                <th>Tools Used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stage 1 — Reactive</td>
                <td>No documented processes, gut-based decisions, data in people's heads</td>
                <td>WhatsApp, email, paper</td>
              </tr>
              <tr>
                <td>Stage 2 — Structured</td>
                <td>Processes exist but are unmeasured and inconsistently followed</td>
                <td>Spreadsheets, basic PM tools</td>
              </tr>
              <tr>
                <td>Stage 3 — Intelligent</td>
                <td>Workflows automated, KPIs tracked in real time, decisions data-driven</td>
                <td>Operations platforms like WIPS Tech</td>
              </tr>
              <tr>
                <td>Stage 4 — Optimized</td>
                <td>AI-assisted decisions, continuous improvement built into operations</td>
                <td>AI-native platforms</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* H2 — How WIPS Works */}
        <h2 className="cg" style={{fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:500,color:"#1B365D",marginBottom:16,lineHeight:1.3}}>How WIPS Tech Works as an Operations Intelligence Platform</h2>
        <p style={{fontSize:"15px",color:"#4A5568",lineHeight:1.85,marginBottom:16}}>
          WIPS Tech operates through a three-stage methodology: Workflows, Intelligence, and Performance. In the first stage, we map every manual process in your operation, identify where time and revenue are being lost, and document the full workflow architecture. In the second stage, we automate the highest-ROI workflows, connect your existing tools, and build a live KPI tracking layer that gives you real-time visibility.
        </p>
        <p style={{fontSize:"15px",color:"#4A5568",lineHeight:1.85,marginBottom:40}}>
          In the third stage — Performance — we deliver monthly reviews, measure the impact of every automation, and continuously refine the system as your business evolves. The result is an operation that performs predictably, scales without proportional headcount growth, and generates the structured data needed for AI-readiness. Visit <a href="https://wipstech.com/platform" className="article-link">wipstech.com/platform</a> to see the full methodology.
        </p>

        {/* H2 — Who Needs It */}
        <h2 className="cg" style={{fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:500,color:"#1B365D",marginBottom:16,lineHeight:1.3}}>Who Needs an Operations Intelligence Platform?</h2>
        <p style={{fontSize:"15px",color:"#4A5568",lineHeight:1.85,marginBottom:40}}>
          Operations intelligence platforms are built for business owners and operations leaders who have outgrown spreadsheets but are not ready for enterprise ERP complexity. This includes UAE SMEs scaling across Emirates, Saudi startups building operational foundations for investment readiness, Lebanese businesses operating under resource constraints who need maximum efficiency, and operations managers and COOs across the MENA region who are accountable for performance but lack the visibility to manage it precisely. If you run a business between 10 and 150 employees and your operational data lives in more than three disconnected places, you need an operations intelligence platform.
        </p>

        {/* H2 — FAQ */}
        <h2 className="cg" style={{fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:500,color:"#1B365D",marginBottom:24,lineHeight:1.3}}>Frequently Asked Questions</h2>
        {[
          {
            q: "What is the difference between business intelligence and operations intelligence?",
            a: "Business intelligence analyzes historical data for long-term strategy. Operations intelligence analyzes real-time data for immediate decisions. WIPS Tech delivers operations intelligence — giving MENA SME owners visibility into what is happening right now, not last quarter."
          },
          {
            q: "How long does it take to implement an operations intelligence platform?",
            a: "Most SMEs implement WIPS Tech within 30 days. Unlike traditional ERP systems requiring months of configuration, WIPS Tech is designed for fast deployment with minimal technical setup."
          },
          {
            q: "Is an operations intelligence platform suitable for small businesses?",
            a: "Yes. WIPS Tech is purpose-built for small and medium enterprises. It provides enterprise-grade operational visibility at SME-accessible cost and complexity."
          }
        ].map((item, i) => (
          <details key={i} style={{borderBottom:"1px solid #E8EEF5"}}>
            <summary style={{listStyle:"none",padding:"18px 0",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16,cursor:"pointer"}}>
              <span className="cg" style={{fontSize:"1.05rem",fontWeight:500,color:"#1B365D",lineHeight:1.4}}>{item.q}</span>
              <span style={{color:"#2A9D6F",fontSize:"20px",flexShrink:0}}>+</span>
            </summary>
            <p style={{fontSize:"14px",color:"#4A5568",lineHeight:1.75,paddingBottom:20}}>{item.a}</p>
          </details>
        ))}

        {/* CLOSING CTA */}
        <div style={{background:"linear-gradient(135deg,#0F1E35 0%,#1A4535 100%)",borderRadius:12,padding:"48px 40px",textAlign:"center",marginTop:56}}>
          <span className="mono" style={{fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:"#3DBF8A",display:"block",marginBottom:16}}>Ready to Start</span>
          <h3 className="cg" style={{fontSize:"clamp(1.5rem,3vw,2rem)",fontWeight:300,color:"#fff",marginBottom:16,lineHeight:1.2}}>
            Ready to move from operational chaos to structured clarity?
          </h3>
          <p style={{fontSize:"15px",color:"rgba(255,255,255,.65)",lineHeight:1.75,marginBottom:28,maxWidth:480,margin:"0 auto 28px"}}>
            Book your free Discovery Session at <a href="https://wipstech.com" style={{color:"#3DBF8A",textDecoration:"none",fontWeight:600}}>wipstech.com</a>
          </p>
          <Link href="/#book" className="btn-gold">Book Your Free Discovery Session →</Link>
        </div>

        {/* POST FOOTER */}
        <div style={{borderTop:"1px solid #E8EEF5",paddingTop:28,marginTop:40,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
          <span style={{fontSize:"12px",color:"#718096",fontStyle:"italic"}}>Published by WIPS Tech · Operational Intelligence for MENA SMEs</span>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <Link href="/blog" className="btn-outline" style={{padding:"10px 20px",fontSize:13}}>← All Posts</Link>
            <Link href="/#book" className="btn-primary" style={{padding:"10px 20px",fontSize:13}}>Book Discovery</Link>
          </div>
        </div>
      </article>
    </>
  );
}
