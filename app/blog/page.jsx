import Link from "next/link";
import { POSTS } from "./posts";

export const metadata = {
  title: "Operations Intelligence Blog — WIPS Tech",
  description:
    "Practical guides and insights for MENA SMEs on workflow automation, KPI tracking, and operational intelligence. By the WIPS Tech team.",
  openGraph: {
    title: "Operations Intelligence Blog — WIPS Tech",
    description: "Practical guides and insights for MENA SMEs on workflow automation, KPI tracking, and operational intelligence. By the WIPS Tech team.",
    url: "https://wipstech.com/blog",
    siteName: "WIPS Tech",
    images: [{ url: "https://wipstech.com/og-image.png", width: 1200, height: 630, alt: "WIPS Tech" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operations Intelligence Blog — WIPS Tech",
    description: "Practical guides and insights for MENA SMEs on workflow automation, KPI tracking, and operational intelligence.",
  },
};

export default function BlogPage() {
  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'Outfit',sans-serif;color:#1A202C;background:#fff;-webkit-font-smoothing:antialiased}
        .cg{font-family:'Cormorant Garamond',Georgia,serif}
        .mono{font-family:'JetBrains Mono',monospace}
        .post-card{background:#fff;border:1px solid #E8EEF5;border-radius:8px;transition:all .25s;text-decoration:none;display:block;overflow:hidden;color:inherit}
        .post-card:hover{border-color:#2A9D6F;box-shadow:0 8px 32px rgba(27,54,93,.1);transform:translateY(-2px)}
        .btn-primary{display:inline-flex;align-items:center;gap:8px;background:#1B365D;color:#fff;font-family:'Outfit',sans-serif;font-size:14px;font-weight:600;padding:13px 28px;border:2px solid #1B365D;border-radius:3px;transition:all .2s;text-decoration:none}
        .btn-primary:hover{background:#0F1E35;transform:translateY(-1px)}
        .btn-gold{display:inline-flex;align-items:center;gap:8px;background:#C8952A;color:#fff;font-family:'Outfit',sans-serif;font-size:14px;font-weight:700;letter-spacing:.03em;padding:15px 34px;border:2px solid #C8952A;border-radius:3px;transition:all .2s;text-transform:uppercase;text-decoration:none}
        .btn-gold:hover{background:#A37820;transform:translateY(-2px)}
        .back-link{font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;color:#4A5568;text-decoration:none}
        .back-link:hover{color:#1B365D}
        @media(max-width:768px){nav{padding:0 20px!important}.hero{padding:56px 20px 48px!important}.body{padding:48px 20px!important}}
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"rgba(255,255,255,.97)",backdropFilter:"blur(12px)",borderBottom:"1px solid #E8EEF5",padding:"0 40px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:96}}>
          <Link href="/" style={{textDecoration:"none"}}>
            <img src="/logo-transparent.png" alt="WIPS Tech" style={{height:88,width:"auto",objectFit:"contain",display:"block",maxWidth:440}}/>
          </Link>
          <div style={{display:"flex",gap:16,alignItems:"center"}}>
            <Link href="/insights" className="back-link">Insights</Link>
            <Link href="/faq" className="back-link">FAQ</Link>
            <Link href="/" className="back-link">← Home</Link>
            <Link href="/#book" className="btn-primary" style={{padding:"10px 20px",fontSize:13}}>Book Discovery</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" style={{background:"linear-gradient(158deg,#0F1E35 0%,#1B365D 100%)",padding:"72px 40px 64px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <span className="mono" style={{fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:"#3DBF8A"}}>Operations Intelligence Blog</span>
          <div style={{width:48,height:2,background:"linear-gradient(90deg,#2A9D6F,transparent)",margin:"14px 0 20px"}}/>
          <h1 className="cg" style={{fontSize:"clamp(2.2rem,5vw,3.4rem)",fontWeight:300,color:"#fff",lineHeight:1.1,marginBottom:16}}>
            Practical Intelligence.<br/>No Filler.
          </h1>
          <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,.65)",maxWidth:520,lineHeight:1.75}}>
            Guides, frameworks, and field notes for MENA SME owners building smarter operations — written by the WIPS Tech team.
          </p>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="body" style={{padding:"72px 40px",background:"#fff"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))",gap:28}}>
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
                <div style={{height:4,background:"#1B365D"}}/>
                <div style={{padding:"28px 24px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                    <span className="mono" style={{fontSize:"9px",background:"#1B365D",color:"#fff",padding:"3px 10px",borderRadius:20,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em"}}>{post.category}</span>
                    <span style={{fontSize:"11px",color:"#718096"}}>{post.readTime}</span>
                  </div>
                  <h2 className="cg" style={{fontSize:"1.3rem",fontWeight:500,color:"#1B365D",lineHeight:1.3,marginBottom:12}}>{post.title}</h2>
                  <p style={{fontSize:"13px",color:"#4A5568",lineHeight:1.7,marginBottom:18}}>{post.excerpt}</p>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"13px",fontWeight:600,color:"#2A9D6F"}}>Read Article →</span>
                    <span className="mono" style={{fontSize:"10px",color:"#A0AEC0"}}>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{textAlign:"center",marginTop:56,paddingTop:40,borderTop:"1px solid #E8EEF5"}}>
            <p style={{fontSize:"12px",color:"#718096",fontStyle:"italic",marginBottom:24}}>New articles published when we have something worth saying.</p>
            <Link href="/#book" className="btn-primary">Book a Free Discovery Session</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"#0F1E35",padding:"32px 40px",textAlign:"center"}}>
        <p style={{fontSize:"12px",color:"rgba(255,255,255,.3)"}}>© 2026 WIPS Tech. All rights reserved.</p>
        <div style={{display:"flex",gap:24,justifyContent:"center",marginTop:10,flexWrap:"wrap"}}>
          <Link href="/" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>Home</Link>
          <Link href="/insights" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>Insights</Link>
          <Link href="/faq" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none"}}>FAQ</Link>
        </div>
      </footer>
    </>
  );
}
