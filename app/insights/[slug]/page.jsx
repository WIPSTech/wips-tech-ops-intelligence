import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES } from "../articles";

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | WIPS Tech`,
    description: article.metaDescription,
    openGraph: {
      title: `${article.title} | WIPS Tech`,
      description: article.metaDescription,
      url: `https://wipstech.com/insights/${article.slug}`,
      siteName: "WIPS Tech",
      type: "article",
      images: [{ url: "https://wipstech.com/logo.png", width: 400, height: 200, alt: "WIPS Tech" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | WIPS Tech`,
      description: article.metaDescription,
    },
  };
}

export default function ArticlePage({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const currentIndex = ARTICLES.findIndex((a) => a.slug === params.slug);
  const nextArticle = ARTICLES[currentIndex + 1] || ARTICLES[0];

  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'Outfit',sans-serif;color:#1A202C;background:#fff;-webkit-font-smoothing:antialiased}
        .cg{font-family:'Cormorant Garamond',Georgia,serif}
        .mono{font-family:'JetBrains Mono',monospace}
        .btn-primary{display:inline-flex;align-items:center;gap:8px;background:#1B365D;color:#fff;font-family:'Outfit',sans-serif;font-size:14px;font-weight:600;padding:13px 28px;border:2px solid #1B365D;border-radius:3px;transition:all .2s;text-decoration:none;white-space:nowrap}
        .btn-primary:hover{background:#0F1E35;transform:translateY(-1px)}
        .btn-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#1B365D;font-family:'Outfit',sans-serif;font-size:14px;font-weight:600;padding:12px 26px;border:2px solid #1B365D;border-radius:3px;transition:all .2s;text-decoration:none;white-space:nowrap}
        .btn-outline:hover{background:#1B365D;color:#fff;transform:translateY(-1px)}
        .next-card{background:#fff;border:1px solid #D1DCE8;border-radius:8px;transition:all .25s;text-decoration:none;display:block;overflow:hidden;color:inherit}
        .next-card:hover{border-color:#2A9D6F;box-shadow:0 8px 32px rgba(27,54,93,.1);transform:translateY(-2px)}
        .back-link{font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;color:#4A5568;text-decoration:none}
        .back-link:hover{color:#1B365D}
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"rgba(255,255,255,.97)",backdropFilter:"blur(12px)",borderBottom:"1px solid #E8EEF5",padding:"0 40px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:96}}>
          <Link href="/" style={{textDecoration:"none"}}>
            <img src="/logo-transparent.png" alt="WIPS Tech" style={{height:88,width:"auto",objectFit:"contain",display:"block",maxWidth:440}}/>
          </Link>
          <div style={{display:"flex",gap:16,alignItems:"center"}}>
            <Link href="/insights" className="back-link">← All Articles</Link>
            <Link href="/#book" className="btn-primary" style={{padding:"10px 20px",fontSize:13}}>Book Discovery</Link>
          </div>
        </div>
      </nav>

      {/* ARTICLE */}
      <article style={{maxWidth:760,margin:"0 auto",padding:"56px 40px 80px"}}>
        <div style={{height:6,background:article.color,borderRadius:6,marginBottom:36}}/>

        <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:14,flexWrap:"wrap"}}>
          <span className="mono" style={{fontSize:"9px",background:article.color,color:"#fff",padding:"3px 10px",borderRadius:20,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em"}}>{article.type}</span>
          <span className="mono" style={{fontSize:"9px",color:article.color,letterSpacing:".12em",textTransform:"uppercase"}}>{article.label}</span>
          <span style={{fontSize:"11px",color:"#718096"}}>{article.time}</span>
        </div>

        <h1 className="cg" style={{fontSize:"clamp(1.8rem,4vw,2.6rem)",fontWeight:400,color:"#1B365D",lineHeight:1.2,marginBottom:32}}>
          {article.title}
        </h1>

        <div style={{height:1,background:"#E8EEF5",marginBottom:36}}/>

        {article.body.map((section, i) => (
          <div key={i} style={{marginBottom:36}}>
            <h2 className="cg" style={{fontSize:"1.25rem",fontWeight:600,color:"#1B365D",marginBottom:12,lineHeight:1.3}}>{section.h}</h2>
            <p style={{fontSize:"16px",color:"#4A5568",lineHeight:1.85}}>{section.p}</p>
          </div>
        ))}

        <div style={{borderTop:"1px solid #E8EEF5",paddingTop:28,marginTop:16,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
          <span style={{fontSize:"12px",color:"#718096",fontStyle:"italic"}}>Published by WIPS Tech · Operational Intelligence for MENA SMEs</span>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <Link href="/insights" className="btn-outline" style={{padding:"10px 20px",fontSize:13}}>← All Articles</Link>
            <Link href="/#book" className="btn-primary" style={{padding:"10px 20px",fontSize:13}}>Book Discovery</Link>
          </div>
        </div>
      </article>

      {/* NEXT ARTICLE */}
      <section style={{background:"#F4F7FA",padding:"48px 40px",borderTop:"1px solid #E8EEF5"}}>
        <div style={{maxWidth:760,margin:"0 auto"}}>
          <div className="mono" style={{fontSize:"9px",color:"#2A9D6F",letterSpacing:".18em",textTransform:"uppercase",marginBottom:16}}>Read Next</div>
          <Link href={`/insights/${nextArticle.slug}`} className="next-card">
            <div style={{height:4,background:nextArticle.color}}/>
            <div style={{padding:"24px"}}>
              <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:10}}>
                <span className="mono" style={{fontSize:"9px",background:nextArticle.color,color:"#fff",padding:"3px 10px",borderRadius:20,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em"}}>{nextArticle.type}</span>
                <span style={{fontSize:"11px",color:"#718096"}}>{nextArticle.time}</span>
              </div>
              <h3 className="cg" style={{fontSize:"1.2rem",fontWeight:500,color:"#1B365D",lineHeight:1.3,marginBottom:8}}>{nextArticle.title}</h3>
              <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"13px",fontWeight:600,color:nextArticle.color}}>Read Article →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"#0F1E35",padding:"32px 40px",textAlign:"center"}}>
        <p style={{fontSize:"12px",color:"rgba(255,255,255,.3)"}}>© 2026 WIPS Tech. All rights reserved.</p>
        <Link href="/" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none",marginTop:8,display:"inline-block"}}>← Back to wipstech.com</Link>
      </footer>
    </>
  );
}
