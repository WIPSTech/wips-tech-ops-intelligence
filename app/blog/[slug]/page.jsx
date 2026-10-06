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
    alternates: {
      canonical: `https://wipstech.com/blog/${post.slug}`,
      languages: {
        "en": `https://wipstech.com/blog/${post.slug}`,
        "x-default": `https://wipstech.com/blog/${post.slug}`,
      },
    },
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

const CONTENT = {
  "what-is-operations-intelligence-platform": ArticleBeyondConsulting,
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
      "@type": "Organization", "name": "WIPS Tech", "url": "https://wipstech.com",
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
        .step-list{list-style:none;padding:0;margin:0 0 28px}
        .step-list li{display:flex;gap:14px;margin-bottom:16px;align-items:flex-start}
        .step-num{min-width:28px;height:28px;border-radius:50%;background:#1B365D;color:#fff;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
        @media(max-width:768px){nav{padding:0 20px!important}article{padding:40px 20px 60px!important}}
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

function ArticleBeyondConsulting({ post }) {
  return (
    <article style={{maxWidth:860,margin:"0 auto",padding:"56px 40px 80px"}}>

      {/* Header */}
      <div style={{marginBottom:32}}>
        <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:16,flexWrap:"wrap"}}>
          <span className="mono" style={{fontSize:"9px",background:"#1B365D",color:"#fff",padding:"3px 10px",borderRadius:20,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em"}}>{post.category}</span>
          <span style={{fontSize:"11px",color:"#718096"}}>{post.readTime}</span>
          <span style={{fontSize:"11px",color:"#A0AEC0"}}>{post.date}</span>
        </div>
        <h1 className="cg" style={{fontSize:"clamp(1.9rem,4vw,2.8rem)",fontWeight:400,color:"#1B365D",lineHeight:1.15,marginBottom:24}}>
          {post.title}
        </h1>
        <div style={{height:1,background:"#E8EEF5"}}/>
      </div>

      {/* INTRO */}
      <p style={{fontSize:"17px",color:"#2D3748",lineHeight:1.85,marginBottom:36}}>
        Many business owners in the MENA region find themselves in a frustrating cycle: they are <strong style={{color:"#1B365D"}}>"busy but not growing."</strong> Despite having a full schedule and a hardworking team, the expected revenue and expansion never seem to materialize. This often happens because the organization is drowning in <strong style={{color:"#1B365D"}}>"invisible waste"</strong> — repetitive manual tasks, fragmented data, and disconnected systems that quietly drain profit every single day.
      </p>

      {/* H2 — The Role */}
      <h2 className="cg" style={{fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:500,color:"#1B365D",marginBottom:16,lineHeight:1.3}}>The Role of an Operations Intelligence Partner</h2>
      <p style={{fontSize:"15px",color:"#4A5568",lineHeight:1.85,marginBottom:16}}>
        WIPS Tech is not a business consultant, a software vendor, or an IT support firm. We are an <strong style={{color:"#1B365D"}}>Operations Intelligence Partner</strong>, a role that sits at the intersection of <strong style={{color:"#1B365D"}}>operations, data, and practical AI</strong>. While consultants deliver reports and software vendors sell you new subscriptions, an operations intelligence partner focuses on <strong>connecting the tools you already own</strong> and staying until your results are sustained.
      </p>
      <p style={{fontSize:"15px",color:"#4A5568",lineHeight:1.85,marginBottom:36}}>
        Our role is to turn <strong>operational and data chaos into connected, measurable, and intelligent performance.</strong> We believe that until you measure the cost of your internal workflows, you are managing your business based on "gut feeling" rather than "real numbers."
      </p>

      {/* H2 — Visible Busy-ness */}
      <h2 className="cg" style={{fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:500,color:"#1B365D",marginBottom:16,lineHeight:1.3}}>Why "Visible Busy-ness" is the Enemy of Growth</h2>
      <p style={{fontSize:"15px",color:"#4A5568",lineHeight:1.85,marginBottom:16}}>
        In most SMEs, manual data entry is treated as "just part of the job." However, research shows that manual transcription is a <strong>"non-value-added" labor crisis</strong> that costs companies an average of <strong>$28,500 per employee annually.</strong> Furthermore, <strong>56% of the workforce</strong> reports feeling burned out by repetitive tasks, which leads to errors and high staff turnover.
      </p>
      <p style={{fontSize:"15px",color:"#4A5568",lineHeight:1.85,marginBottom:36}}>
        An Operations Intelligence Partner identifies these <strong>bottlenecks</strong> — such as a receptionist manually copying WhatsApp bookings into a calendar or a manager spending Sunday evenings compiling revenue reports by hand. We look for <strong>"Shadow Systems,"</strong> which are the manual bridges between tools that should already be talking to each other.
      </p>

      {/* H2 — The Approach */}
      <h2 className="cg" style={{fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:500,color:"#1B365D",marginBottom:20,lineHeight:1.3}}>The WIPS Tech Approach: Structure Before Automation</h2>
      <p style={{fontSize:"15px",color:"#4A5568",lineHeight:1.85,marginBottom:20}}>
        We follow a strict methodology to ensure every operational fix provides a clear <strong>Return on Investment (ROI)</strong>:
      </p>
      <ol className="step-list">
        <li>
          <div className="step-num">1</div>
          <div style={{fontSize:"15px",color:"#4A5568",lineHeight:1.75}}>
            <strong style={{color:"#1B365D"}}>Workflows:</strong> We map every manual process to understand how time and money are being lost.
          </div>
        </li>
        <li>
          <div className="step-num">2</div>
          <div style={{fontSize:"15px",color:"#4A5568",lineHeight:1.75}}>
            <strong style={{color:"#1B365D"}}>Intelligence:</strong> We connect your existing tools to create a <strong>live performance layer</strong>, giving you real-time visibility into your revenue and no-show rates.
          </div>
        </li>
        <li>
          <div className="step-num">3</div>
          <div style={{fontSize:"15px",color:"#4A5568",lineHeight:1.75}}>
            <strong style={{color:"#1B365D"}}>Performance:</strong> We deploy <strong>practical AI</strong> only where it has a clear, provable ROI — ensuring you don't waste money on generic "tech upgrades" that don't move the needle.
          </div>
        </li>
      </ol>

      <p style={{fontSize:"15px",color:"#4A5568",lineHeight:1.85,marginBottom:36}}>
        We believe that administrative waste is no longer a luxury small businesses can afford to ignore; it is a <strong>prerequisite for survival</strong> in the modern economy.
      </p>

      {/* CLOSING CTA */}
      <div style={{background:"linear-gradient(135deg,#0F1E35 0%,#1A4535 100%)",borderRadius:12,padding:"48px 40px",textAlign:"center",marginTop:48}}>
        <span className="mono" style={{fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:"#3DBF8A",display:"block",marginBottom:16}}>Ready to Start</span>
        <h3 className="cg" style={{fontSize:"clamp(1.5rem,3vw,2rem)",fontWeight:300,color:"#fff",marginBottom:16,lineHeight:1.2}}>
          Ready to stop reacting and start directing?
        </h3>
        <p style={{fontSize:"15px",color:"rgba(255,255,255,.65)",lineHeight:1.75,maxWidth:460,margin:"0 auto 28px"}}>
          Book your free 45-minute Discovery Session at <a href="https://wipstech.com" style={{color:"#3DBF8A",textDecoration:"none",fontWeight:600}}>wipstech.com</a>
        </p>
        <Link href="/#book" className="btn-gold">Book Your Free Discovery Session →</Link>
      </div>

      {/* POST FOOTER */}
      <div style={{borderTop:"1px solid #E8EEF5",paddingTop:28,marginTop:40,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
        <span style={{fontSize:"12px",color:"#718096",fontStyle:"italic"}}>© 2026 WIPS Tech — Workflows Intelligence & Performance Solutions</span>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          <Link href="/blog" className="btn-outline" style={{padding:"10px 20px",fontSize:13}}>← All Posts</Link>
          <Link href="/#book" className="btn-primary" style={{padding:"10px 20px",fontSize:13}}>Book Discovery</Link>
        </div>
      </div>
    </article>
  );
}
