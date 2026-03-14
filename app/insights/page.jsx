import Link from "next/link";
import { ARTICLES } from "./articles";

export const metadata = {
  title: "Operations Intelligence Insights | WIPS Tech",
  description:
    "Practical guides, frameworks, and insights for MENA SMEs on workflow automation, KPI tracking, and operational intelligence. By the WIPS Tech team.",
};

const B = {
  navy: "#1B365D",
  navyD: "#0F1E35",
  emerald: "#2A9D6F",
  emeraldL: "#3DBF8A",
  gold: "#C8952A",
  smoke: "#F4F7FA",
  text: "#1A202C",
  textS: "#4A5568",
  textT: "#718096",
  border: "#D1DCE8",
  borderL: "#E8EEF5",
};

export default function InsightsPage() {
  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'Outfit',sans-serif;color:#1A202C;background:#fff;-webkit-font-smoothing:antialiased}
        .cg{font-family:'Cormorant Garamond',Georgia,serif}
        .mono{font-family:'JetBrains Mono',monospace}
        .card{background:#fff;border:1px solid #D1DCE8;border-radius:8px;transition:all .25s;text-decoration:none;display:block}
        .card:hover{border-color:#2A9D6F;box-shadow:0 8px 32px rgba(27,54,93,.1);transform:translateY(-2px)}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#2A9D6F}
        .divider-accent{width:48px;height:3px;background:linear-gradient(90deg,#2A9D6F,#1B365D);border-radius:2px;margin:14px 0}
        .btn-primary{display:inline-flex;align-items:center;gap:8px;background:#1B365D;color:#fff;font-family:'Outfit',sans-serif;font-size:14px;font-weight:600;padding:13px 28px;border:2px solid #1B365D;border-radius:3px;cursor:pointer;transition:all .2s;text-decoration:none}
        .btn-primary:hover{background:#0F1E35;transform:translateY(-1px);box-shadow:0 8px 24px rgba(27,54,93,.25)}
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"rgba(255,255,255,.97)",backdropFilter:"blur(12px)",borderBottom:`1px solid ${B.borderL}`,padding:"0 40px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:96}}>
          <Link href="/" style={{textDecoration:"none"}}>
            <img
              src="/logo-transparent.png"
              alt="WIPS Tech"
              style={{height:88,width:"auto",objectFit:"contain",display:"block",maxWidth:440}}
              onError={(e)=>{e.target.style.display="none";}}
            />
          </Link>
          <div style={{display:"flex",gap:16,alignItems:"center"}}>
            <Link href="/" style={{fontFamily:"'Outfit',sans-serif",fontSize:13,fontWeight:500,color:B.textS,textDecoration:"none"}}>← Back to Home</Link>
            <Link href="/#book" className="btn-primary" style={{padding:"10px 20px",fontSize:13}}>Book Discovery</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{background:`linear-gradient(158deg,${B.navyD} 0%,${B.navy} 100%)`,padding:"72px 40px 64px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <span className="section-label" style={{color:B.emeraldL}}>Operational Intelligence</span>
          <div style={{width:48,height:2,background:`linear-gradient(90deg,${B.emerald},transparent)`,margin:"14px 0 20px"}}/>
          <h1 className="cg" style={{fontSize:"clamp(2.2rem,5vw,3.6rem)",fontWeight:300,color:"#fff",lineHeight:1.1,marginBottom:16}}>
            No Theory. No Filler.
          </h1>
          <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,.65)",maxWidth:520,lineHeight:1.75}}>
            Every article is built from real operational data — workflows audited, waste quantified, automations deployed, and results measured across WIPS client engagements.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section style={{padding:"72px 40px",background:"#fff"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:28}}>
            {ARTICLES.map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="card" style={{overflow:"hidden"}}>
                <div style={{height:4,background:article.color}}/>
                <div style={{padding:"28px 24px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                    <span className="mono" style={{fontSize:"9px",background:article.color,color:"#fff",padding:"3px 10px",borderRadius:20,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em"}}>{article.type}</span>
                    <span style={{fontSize:"11px",color:B.textT}}>{article.time}</span>
                  </div>
                  <div className="mono" style={{fontSize:"9px",color:article.color,letterSpacing:".12em",textTransform:"uppercase",marginBottom:10}}>{article.label}</div>
                  <h2 className="cg" style={{fontSize:"1.3rem",fontWeight:500,color:B.navy,lineHeight:1.3,marginBottom:12}}>{article.title}</h2>
                  <p style={{fontSize:"13px",color:B.textS,lineHeight:1.7,marginBottom:18}}>{article.body[0].p.slice(0,130)}…</p>
                  <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"13px",fontWeight:600,color:article.color,display:"inline-flex",alignItems:"center",gap:6}}>
                    Read Full Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{textAlign:"center",marginTop:56,paddingTop:40,borderTop:`1px solid ${B.borderL}`}}>
            <p style={{fontSize:"12px",color:B.textT,fontStyle:"italic",marginBottom:24}}>Updated when we have something worth saying. Not on a content calendar.</p>
            <Link href="/#book" className="btn-primary">Book a Free Discovery Session</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:B.navyD,padding:"32px 40px",textAlign:"center"}}>
        <p style={{fontSize:"12px",color:"rgba(255,255,255,.3)"}}>© 2026 WIPS Tech. All rights reserved.</p>
        <Link href="/" style={{fontSize:"12px",color:"rgba(255,255,255,.4)",textDecoration:"none",marginTop:8,display:"inline-block"}}>← Back to wipstech.com</Link>
      </footer>
    </>
  );
}
