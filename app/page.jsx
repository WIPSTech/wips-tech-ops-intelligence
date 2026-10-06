"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import NextImage from "next/image";

const B = {
  navy:"#1B365D", navyD:"#0F1E35", navyL:"#2A4A7A",
  emerald:"#2A9D6F", emeraldD:"#1E7A52", emeraldL:"#3DBF8A",
  gold:"#C8952A", goldL:"#E4AB3F",
  smoke:"#F4F7FA", white:"#FFFFFF",
  text:"#1A202C", textS:"#4A5568", textT:"#718096",
  border:"#D1DCE8", borderL:"#E8EEF5"
};

const WA_NUMBER = "+96170000000"; // Replace with real number

const BASE = "/"; // Files served from Next.js public/ folder
const LOGOS = {
  desktop : BASE + "logo-transparent.png",
  mobile  : BASE + "logo-mobile.png",
};

/* ── helpers ── */
function useInView(threshold=0.12){
  const ref=useRef(null);
  const [inView,setInView]=useState(false);
  useEffect(()=>{
    const el=ref.current; if(!el)return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setInView(true);obs.disconnect();}},{threshold});
    obs.observe(el);
    return()=>obs.disconnect();
  },[threshold]);
  return [ref,inView];
}

function AnimCounter({end,prefix="",suffix="",duration=1800}){
  const [count,setCount]=useState(0);
  const [ref,inView]=useInView(0.3);
  useEffect(()=>{
    if(!inView)return;
    const start=Date.now();
    const step=()=>{
      const p=Math.min((Date.now()-start)/duration,1);
      const e=1-Math.pow(1-p,3);
      setCount(Math.round(e*end));
      if(p<1)requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  },[inView,end,duration]);
  return <span ref={ref} className="stat-num">{prefix}{count.toLocaleString()}{suffix}</span>;
}

function WIPSLogo({light=false, priority=false}){
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    const check = () => setIsMobile(window.innerWidth < 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  },[]);
  const pngSrc = isMobile ? "/logo-mobile.png" : "/logo-transparent.png";
  const webpSrc = isMobile ? "/logo-mobile.webp" : "/logo-transparent.webp";
  const displayH = isMobile ? 48 : 72;
  const displayW = isMobile ? 292 : 440;
  const displayHPx = isMobile ? 96 : 144;
  return(
    <div style={{display:"flex",alignItems:"center",flexShrink:0}}>
      <picture>
        <source srcSet={webpSrc} type="image/webp" width={displayW} height={displayHPx}/>
        <img
          src={pngSrc}
          alt="WIPS Tech — Workflows Intelligence & Performance Solutions"
          width={displayW}
          height={displayHPx}
          fetchPriority="high"
          decoding="async"
          style={{objectFit:"contain", display:"block", width:"auto", height:displayH, maxWidth: isMobile ? 146 : 220}}
        />
      </picture>
    </div>
  );
}


function Navigation({onBooking,onContact}){
  const [scrolled,setScrolled]=useState(false);
  const [mobileOpen,setMobileOpen]=useState(false);
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",h);
    return()=>window.removeEventListener("scroll",h);
  },[]);
  const navItems=[
    {label:"Our Approach",href:"#approach"},
    {label:"Industries",href:"#industries"},
    {label:"ROI Calculator",href:"#calculator"},
    {label:"Insights",href:"#insights"},
  ];
  const scrollTo=(id)=>{ setMobileOpen(false); document.querySelector(id)?.scrollIntoView({behavior:"smooth"}); };
  return(
    <>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:scrolled?"rgba(255,255,255,.97)":"rgba(255,255,255,.95)",backdropFilter:"blur(12px)",borderBottom:scrolled?`1px solid ${B.borderL}`:"1px solid transparent",boxShadow:scrolled?"0 2px 24px rgba(27,54,93,.08)":"none",transition:"all .3s",padding:"0 40px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:96}}>
          <WIPSLogo priority={true}/>
          <div className="hide-mobile" style={{display:"flex",alignItems:"center",gap:34}}>
            {navItems.map(i=><button key={i.label} className="nav-link" onClick={()=>scrollTo(i.href)}>{i.label}</button>)}
            <button className="nav-link" onClick={onContact}>Contact Us</button>
          </div>
          <div className="hide-mobile" style={{display:"flex",gap:10}}>
            <button className="btn-outline" style={{padding:"9px 18px",fontSize:13}} onClick={()=>scrollTo("#approach")}>How It Works</button>
            <button className="btn-primary" style={{padding:"10px 20px",fontSize:13}} onClick={onBooking}>Book Discovery</button>
          </div>
          <button onClick={()=>setMobileOpen(!mobileOpen)} style={{display:"none",background:"none",border:"none",cursor:"pointer",padding:8,color:B.navy}} id="mob-btn" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen?<path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>:<path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>}
            </svg>
          </button>
        </div>
        {mobileOpen&&(
          <div style={{borderTop:`1px solid ${B.borderL}`,background:"#fff",padding:"16px 20px"}}>
            {navItems.map(i=><button key={i.label} onClick={()=>scrollTo(i.href)} style={{display:"block",width:"100%",textAlign:"left",padding:"12px 0",color:B.text,fontWeight:500,background:"none",border:"none",borderBottom:`1px solid ${B.borderL}`,fontFamily:"'Outfit',sans-serif",fontSize:14,cursor:"pointer"}}>{i.label}</button>)}
            <button onClick={()=>{setMobileOpen(false);onContact();}} style={{display:"block",width:"100%",textAlign:"left",padding:"12px 0",color:B.text,fontWeight:500,background:"none",border:"none",borderBottom:`1px solid ${B.borderL}`,fontFamily:"'Outfit',sans-serif",fontSize:14,cursor:"pointer"}}>Contact Us</button>
            <button className="btn-primary" style={{width:"100%",marginTop:14,justifyContent:"center"}} onClick={()=>{setMobileOpen(false);onBooking();}}>Book Free Discovery Session</button>
          </div>
        )}
      </nav>
      <style>{`#mob-btn{display:none!important}@media(max-width:768px){#mob-btn{display:flex!important}}`}</style>
    </>
  );
}

function Hero({onBooking}){
  const scrollTo=(id)=>document.querySelector(id)?.scrollIntoView({behavior:"smooth"});
  return(
    <section style={{minHeight:"100vh",background:`linear-gradient(158deg,${B.navyD} 0%,${B.navy} 52%,#1A4535 100%)`,display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",overflow:"hidden",overflowX:"clip",padding:"120px 40px 80px"}}>
      <div style={{position:"absolute",inset:0,opacity:.04,backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")"}}/>
      {[0,1,2,3].map(i=>(
        <svg key={i} width={220-i*28} height={340-i*44} viewBox="0 0 220 340" fill="none"
          style={{position:"absolute",right:-60+i*10,top:"50%",transform:`translateY(${-50+i*4}%)`,animation:`chevFlow ${2.6+i*.4}s ease-in-out infinite`,animationDelay:`${i*.25}s`,pointerEvents:"none"}}>
          <path d={`M0 0 L${220-i*28} 0 L${340-i*44} ${170-i*22} L${220-i*28} ${340-i*44} L0 ${340-i*44} L${120-i*14} ${170-i*22} Z`} fill="white"/>
        </svg>
      ))}
      <div style={{maxWidth:1200,margin:"0 auto",width:"100%",position:"relative",zIndex:2}}>
        <div style={{maxWidth:760}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:32,animation:"fadeUp .6s ease both"}}>
            <div style={{width:32,height:1.5,background:B.emerald}}/>
            <span className="section-label" style={{color:"#2ebf8a",letterSpacing:".22em"}}>Operations Intelligence Partner</span>
          </div>
          <h1 className="cg" style={{fontSize:"clamp(2.6rem,6vw,4.4rem)",fontWeight:300,color:"#fff",lineHeight:1.08,letterSpacing:"-.02em",marginBottom:28,animation:"fadeUp .7s ease .1s both"}}>
            Your Operations Are<br/><em style={{fontStyle:"italic",color:B.emeraldL}}>Leaking Revenue</em> Daily.
          </h1>
          <p style={{fontSize:"clamp(1rem,2vw,1.18rem)",color:"rgba(255,255,255,.72)",lineHeight:1.75,maxWidth:580,marginBottom:48,animation:"fadeUp .7s ease .2s both"}}>
            Most owners sense the problem exists. Few have the structured clarity to find it, measure it, and fix it permanently.
          </p>
          <div style={{display:"flex",gap:14,flexWrap:"wrap",animation:"fadeUp .7s ease .3s both"}}>
            <button className="btn-gold" onClick={onBooking}>Book Free 45-Min Discovery Session</button>
            <button className="btn-outline" style={{color:"#fff",borderColor:"rgba(255,255,255,.3)",padding:"14px 28px"}} onClick={()=>scrollTo("#calculator")}>Calculate Your Waste</button>
          </div>
        </div>
      </div>
      <div style={{position:"absolute",bottom:32,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:6,animation:"pulseSoft 2.5s ease-in-out infinite"}}>
        <span style={{fontSize:"10px",letterSpacing:".15em",color:"rgba(255,255,255,.3)",textTransform:"uppercase"}}>Scroll</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none"><rect x="4" y="0" width="6" height="13" rx="3" stroke="rgba(255,255,255,.3)" strokeWidth="1.5" fill="none"/><rect x="6" y="3" width="2" height="4" rx="1" fill="rgba(255,255,255,.45)"/></svg>
      </div>
    </section>
  );
}

function NotGrid(){
  const [ref,inView]=useInView();
  const cols=[
    {icon:"✗",label:"Not a Software Vendor",desc:"We don't sell subscriptions or push new tools. We architect systems around what you already have.",no:true},
    {icon:"✗",label:"Not a Business Consultant",desc:"We don't write reports and leave. Implementation and accountability are non-negotiable deliverables.",no:true},
    {icon:"✗",label:"Not a Staffing Agency",desc:"We don't add headcount as the answer to structural problems. We remove the need for excess manual work.",no:true},
    {icon:"✓",label:"Your Operations Intelligence Partner",desc:"We map, build, implement, and stay accountable for measurable performance improvement.",no:false},
  ];
  return(
    <section ref={ref} style={{background:B.smoke,padding:"72px 40px",borderBottom:`1px solid ${B.borderL}`}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:48}}>
          <span className="section-label">Category Clarity</span>
          <h2 className="cg" style={{fontSize:"clamp(1.8rem,3.5vw,2.4rem)",fontWeight:400,color:B.navy,marginTop:10}}>Understand Precisely What WIPS Is — And Is Not.</h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:20}}>
          {cols.map((c,i)=>(
            <div key={c.label} style={{background:c.no?"#fff":B.navy,border:c.no?`1px solid ${B.borderL}`:`2px solid ${B.navy}`,borderRadius:8,padding:"28px 24px",opacity:inView?1:0,transform:inView?"translateY(0)":"translateY(20px)",transition:`opacity .5s ease ${i*.1}s,transform .5s ease ${i*.1}s`}}>
              <div style={{width:36,height:36,borderRadius:"50%",background:c.no?"#FEE2E2":B.emerald,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:700,color:c.no?"#DC2626":"#fff",marginBottom:14}}>{c.icon}</div>
              <h3 className="cg" style={{fontSize:"1.1rem",fontWeight:c.no?500:600,color:c.no?B.navy:"#fff",marginBottom:10,lineHeight:1.3}}>{c.label}</h3>
              <p style={{fontSize:13,color:c.no?B.textT:"rgba(255,255,255,.65)",lineHeight:1.65}}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RangeInput({label,value,min,max,step,format,desc,onChange,icon}){
  const pct=((value-min)/(max-min))*100;
  const trackRef=useRef(null);
  const dragging=useRef(false);
  const getVal=(clientX)=>{
    const rect=trackRef.current.getBoundingClientRect();
    const p=Math.max(0,Math.min(1,(clientX-rect.left)/rect.width));
    const steps=Math.round(p*(max-min)/step);
    return Math.min(max,Math.max(min,min+steps*step));
  };
  const onMouseDown=(e)=>{ dragging.current=true; onChange(getVal(e.clientX)); };
  const onMouseMove=(e)=>{ if(dragging.current)onChange(getVal(e.clientX)); };
  const onMouseUp=()=>{ dragging.current=false; };
  const onTouchStart=(e)=>{ dragging.current=true; onChange(getVal(e.touches[0].clientX)); };
  const onTouchMove=(e)=>{ if(dragging.current)onChange(getVal(e.touches[0].clientX)); };
  useEffect(()=>{
    window.addEventListener("mousemove",onMouseMove);
    window.addEventListener("mouseup",onMouseUp);
    window.addEventListener("touchmove",onTouchMove);
    window.addEventListener("touchend",onMouseUp);
    return()=>{
      window.removeEventListener("mousemove",onMouseMove);
      window.removeEventListener("mouseup",onMouseUp);
      window.removeEventListener("touchmove",onTouchMove);
      window.removeEventListener("touchend",onMouseUp);
    };
  });
  const clampedPct = Math.max(1, Math.min(99, pct));
  return(
    <div style={{background:"#fff",border:`1.5px solid ${B.borderL}`,borderRadius:10,padding:"14px 16px",marginBottom:10,overflow:"hidden",transition:"border-color .2s",cursor:"pointer"}}
      onMouseEnter={e=>e.currentTarget.style.borderColor=B.emerald}
      onMouseLeave={e=>e.currentTarget.style.borderColor=B.borderL}>
      {/* top row: icon + label + big value */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:16}}>{icon}</span>
          <span style={{fontSize:"12px",fontWeight:600,color:B.textS,letterSpacing:".03em"}}>{label}</span>
        </div>
        <span className="mono" style={{fontSize:"1.1rem",fontWeight:700,color:B.navy,background:B.smoke,padding:"3px 10px",borderRadius:6}}>{format(value)}</span>
      </div>
      {/* slider */}
      <div ref={trackRef} className="range-track" onMouseDown={onMouseDown} onTouchStart={onTouchStart}>
        <div className="range-fill" style={{width:`${pct}%`}}/>
        <div className="range-thumb" style={{left:`${clampedPct}%`}}/>
      </div>
      {/* min/max hint */}
      <div style={{display:"flex",justifyContent:"space-between",marginTop:5}}>
        <span style={{fontSize:"10px",color:"#a0aec0"}}>{format(min)}</span>
        <span style={{fontSize:"10px",color:"#a0aec0"}}>{format(max)}</span>
      </div>
    </div>
  );
}

function WasteCalculator({onBooking}){
  const [ref,inView]=useInView();
  const [inp,setInp]=useState({staff:3,revenue:15000,admin:24,noshow:12,tools:800});
  const upd=(k,v)=>setInp(p=>({...p,[k]:v}));
  const r=useCallback(()=>{
    const aw=(inp.admin*4.33*(inp.revenue/(inp.staff*160)))*.38;
    const nw=(inp.revenue*(inp.noshow/100))*.65;
    const tw=inp.tools*.45;
    const total=Math.round(aw+nw+tw);
    return{aw:Math.round(aw),nw:Math.round(nw),tw:Math.round(tw),total,annual:total*12,low:Math.round(total*.75),high:Math.round(total*1.35),ok:total>=500};
  },[inp]);
  const res=r();
  return(
    <section id="calculator" ref={ref} style={{padding:"64px 0",background:"#fff",width:"100%",overflow:"hidden"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 20px",boxSizing:"border-box"}}>
        <div style={{textAlign:"center",marginBottom:40}}>
          <span className="section-label">Interactive ROI Tool</span>
          <div className="divider-accent" style={{margin:"14px auto 16px"}}/>
          <h2 className="cg" style={{fontSize:"clamp(1.6rem,4vw,2.8rem)",fontWeight:300,color:B.navy}}>Calculate Your Monthly Operational Waste</h2>
          <p style={{color:B.textS,fontSize:"1rem",maxWidth:500,margin:"12px auto 0",lineHeight:1.65}}>Adjust the inputs to reflect your operation. Sector benchmarks calculate your estimated recoverable waste.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,alignItems:"start"}} className="grid-1-mobile">
          {/* LEFT — inputs */}
          <div style={{minWidth:0,boxSizing:"border-box"}}>
            {/* header card */}
            <div style={{background:`linear-gradient(135deg,${B.navy} 0%,${B.navyL} 100%)`,borderRadius:10,padding:"16px 18px",marginBottom:10}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4}}>
                <span style={{fontSize:18}}>⚙️</span>
                <span className="cg" style={{fontSize:"1.1rem",fontWeight:500,color:"#fff"}}>Tell us about your operation</span>
              </div>
              <p style={{fontSize:"11px",color:"rgba(255,255,255,.55)",margin:0,lineHeight:1.5}}>Drag each slider — results update instantly on the right.</p>
            </div>
            <RangeInput icon="👥" label="Number of Staff" value={inp.staff} min={1} max={50} step={1} format={v=>`${v} people`} desc="" onChange={v=>upd("staff",v)}/>
            <RangeInput icon="💰" label="Monthly Revenue (USD)" value={inp.revenue} min={2000} max={200000} step={1000} format={v=>`$${v.toLocaleString()}`} desc="" onChange={v=>upd("revenue",v)}/>
            <RangeInput icon="🕐" label="Admin Hours / Week" value={inp.admin} min={4} max={80} step={2} format={v=>`${v} hrs`} desc="" onChange={v=>upd("admin",v)}/>
            <RangeInput icon="📅" label="Appointment No-Show Rate" value={inp.noshow} min={0} max={40} step={1} format={v=>`${v}%`} desc="" onChange={v=>upd("noshow",v)}/>
            <RangeInput icon="🛠️" label="Software Spend / Month" value={inp.tools} min={100} max={5000} step={100} format={v=>`$${v.toLocaleString()}`} desc="" onChange={v=>upd("tools",v)}/>
          </div>
          {/* RIGHT — results */}
          <div style={{minWidth:0,boxSizing:"border-box"}}>
            <div style={{background:inView?B.navy:"#F4F7FA",borderRadius:12,padding:"20px 16px",border:`2px solid ${inView?B.navy:B.borderL}`,transition:"all .5s ease",marginBottom:16,minWidth:0,boxSizing:"border-box"}}>
              {inView?(
                <>
                  <div style={{marginBottom:20}}>
                    <div className="mono" style={{fontSize:"9px",letterSpacing:".12em",textTransform:"uppercase",color:"rgba(255,255,255,.45)",marginBottom:6}}>Est. Monthly Waste</div>
                    <div className="stat-num" style={{fontSize:"clamp(1.8rem,6vw,3.2rem)",fontWeight:300,color:"#fff",lineHeight:1}}>${res.total.toLocaleString()}</div>
                    <div style={{fontSize:"10px",color:"rgba(255,255,255,.4)",marginTop:4}}>${res.low.toLocaleString()} – ${res.high.toLocaleString()}/mo range</div>
                  </div>
                  {[{label:"Admin Overhead",value:res.aw,color:B.emerald},{label:"No-Show Loss",value:res.nw,color:B.gold},{label:"Unused Tools",value:res.tw,color:"#8B9CF4"}].map(b=>(
                    <div key={b.label} style={{marginBottom:12}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                        <span style={{fontSize:"11px",color:"rgba(255,255,255,.65)"}}>{b.label}</span>
                        <span className="mono" style={{fontSize:"11px",color:"#fff",fontWeight:600}}>${b.value.toLocaleString()}</span>
                      </div>
                      <div style={{height:3,background:"rgba(255,255,255,.1)",borderRadius:2}}>
                        <div style={{height:"100%",borderRadius:2,background:b.color,width:res.total>0?`${Math.round(b.value/res.total*100)}%`:"0%",transition:"width .5s ease"}}/>
                      </div>
                    </div>
                  ))}
                  <div style={{borderTop:"1px solid rgba(255,255,255,.1)",paddingTop:14,marginTop:14,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:"11px",color:"rgba(255,255,255,.5)"}}>Annual</span>
                    <span className="stat-num" style={{fontSize:"clamp(.95rem,3vw,1.3rem)",fontWeight:600,color:B.emeraldL}}>${res.annual.toLocaleString()}/yr</span>
                  </div>
                </>
              ):(
                <div style={{textAlign:"center",padding:"24px 0",color:B.textT}}><p>Loading…</p></div>
              )}
            </div>
            <div style={{background:res.ok?"#F0FDF6":"#FFFBEB",border:`1.5px solid ${res.ok?B.emeraldL:B.goldL}`,borderRadius:8,padding:"12px 14px",marginBottom:14,minWidth:0,boxSizing:"border-box"}}>
              {res.ok?(
                <>
                  <div className="mono" style={{fontSize:"9px",color:B.emeraldD,letterSpacing:".1em",textTransform:"uppercase",marginBottom:5}}>Worth a closer look</div>
                  <p style={{fontSize:"12px",color:B.textS,lineHeight:1.6,margin:0}}>This estimate is large enough to justify a free 45-minute session to check it against your real numbers.</p>
                </>
              ):(
                <>
                  <div className="mono" style={{fontSize:"9px",color:B.gold,letterSpacing:".1em",textTransform:"uppercase",marginBottom:5}}>Note on Your Inputs</div>
                  <p style={{fontSize:"12px",color:B.textS,lineHeight:1.6,margin:0}}>The Discovery Session will confirm whether a full Scan would produce a positive return.</p>
                </>
              )}
            </div>
            <button className="btn-emerald" style={{width:"100%",justifyContent:"center",padding:"13px 16px",fontSize:"13px",whiteSpace:"normal",textAlign:"center",lineHeight:1.4}} onClick={onBooking}>
              Book Free Discovery Session →
            </button>
            <p style={{fontSize:"10px",color:B.textT,textAlign:"center",marginTop:8,fontStyle:"italic"}}>* Estimates based on sector benchmarks. Individual results vary.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach({onBooking}){
  const [ref,inView]=useInView(0.1);
  const phases=[
    {num:"01",phase:"Discovery Session",time:"45 Minutes · Free",color:B.emerald,title:"Surface the Three Largest Gaps",desc:"A structured 45-minute operational diagnostic. We identify your three highest-cost workflow failures, calculate their monthly impact, and determine whether the Operational Scan would deliver measurable ROI for your business.",deliverable:"Preliminary waste estimate + specific workflow priorities",icon:"⌖",guarantee:null},
    {num:"02",phase:"Operational Scan",time:"30 Days · $500/task",color:B.navy,title:"Map, Score, and Quantify Everything",desc:"Four-week deep-dive audit. We shadow every manual task, interview every relevant staff member, score automation potential, and calculate the monthly cost of each inefficiency. Week 4 delivers the branded WIPS Scan report.",deliverable:"Full workflow cost map + prioritised automation blueprint",icon:"▤"},
    {num:"03",phase:"Build System",time:"3 Days – 8 Weeks",color:B.gold,title:"Precision Implementation",desc:"We design, build, and deploy workflow automations in four tiers — from simple single-step triggers ($800–$1,500) to full operational intelligence architectures ($8,000+). Every build includes a 30-day performance report.",deliverable:"Live automations + performance dashboards + team training",icon:"⬡",guarantee:null},
    {num:"04",phase:"Intelligence Partnership",time:"Ongoing Retainer",color:"#7C3AED",title:"Embedded. Accountable. Permanent.",desc:"Monthly performance reviews, continuous workflow optimisation, quarterly strategic briefings, and expansion readiness support. We remain present until performance compounds — quarter by quarter, measurably and documentably.",deliverable:"Quarterly ROI reports + live optimisation + expansion support",icon:"◎",guarantee:null},
  ];
  return(
    <section id="approach" style={{padding:"96px 40px",background:"#fff"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"start",marginBottom:64}} className="grid-1-mobile">
          <div>
            <span className="section-label">The Methodology</span>
            <div className="divider-accent"/>
            <h2 className="cg" style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:300,color:B.navy,lineHeight:1.15}}>
              Four Phases.<br/><em style={{fontStyle:"italic"}}>One Standard:</em><br/>Measurable Outcomes.
            </h2>
          </div>
          <div style={{paddingTop:8}}>
            <p style={{fontSize:"1.05rem",color:B.textS,lineHeight:1.75,marginBottom:16}}>Every WIPS engagement follows the same four-phase architecture. The sequence is non-negotiable — because the methodology is what separates a diagnosis from lasting operational improvement.</p>
            <p style={{fontSize:".9rem",color:B.textT,lineHeight:1.7}}>We do not arrive with a framework. We arrive with forensic attention, structured questions, and a mandate to find what your operation is costing you — and then fix it.</p>
          </div>
        </div>
        <div ref={ref} style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:24}}>
          {phases.map((p,i)=>(
            <div key={p.num} style={{background:"#fff",border:`1px solid ${B.borderL}`,borderTop:`3px solid ${p.color}`,borderRadius:8,padding:"28px 24px",opacity:inView?1:0,transform:inView?"translateY(0)":"translateY(24px)",transition:`opacity .6s ease ${i*.12}s,transform .6s ease ${i*.12}s`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
                <div>
                  <div className="mono" style={{fontSize:"10px",color:p.color,letterSpacing:".18em",textTransform:"uppercase",marginBottom:4}}>Phase {p.num}</div>
                  <div className="cg" style={{fontSize:"1.15rem",fontWeight:600,color:B.navy}}>{p.phase}</div>
                </div>
                <span style={{fontSize:"22px"}}>{p.icon}</span>
              </div>
              <div className="mono" style={{fontSize:"10px",background:`${p.color}18`,color:p.color,padding:"4px 10px",borderRadius:20,display:"inline-block",marginBottom:14,fontWeight:600}}>{p.time}</div>
              <h4 style={{fontSize:".95rem",fontWeight:600,color:B.navy,marginBottom:10}}>{p.title}</h4>
              <p style={{fontSize:"13px",color:B.textS,lineHeight:1.7,marginBottom:14}}>{p.desc}</p>
              <div style={{borderTop:`1px solid ${B.borderL}`,paddingTop:12,marginBottom:p.guarantee?12:0}}>
                <div style={{fontSize:"10px",color:p.color,fontWeight:700,marginBottom:4,textTransform:"uppercase",letterSpacing:".06em"}}>Deliverable</div>
                <div style={{fontSize:"12px",color:B.textT}}>{p.deliverable}</div>
              </div>
              {p.guarantee&&<div style={{background:"#F0FDF6",border:`1px solid ${B.emeraldL}`,borderRadius:4,padding:"8px 12px"}}><div style={{fontSize:"11px",color:B.emeraldD,fontWeight:600}}>{p.guarantee}</div></div>}
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:48}}>
          <button className="btn-primary" onClick={onBooking} style={{padding:"15px 36px"}}>Start With a Free Discovery Session</button>
        </div>
      </div>
    </section>
  );
}

function Industries({onBooking}){
  const [active,setActive]=useState(0);
  const sectors=[
    {id:"dental",label:"Dental Clinics",tag:"Current Focus",icon:"⚕",
      h:"Dental Operations Are Uniquely Complex. And Uniquely Improvable.",
      workflows:["Appointment confirmation + follow-up automation","New patient intake & digital forms","Insurance pre-auth workflow","Review request post-appointment","Treatment plan follow-up sequences"]},
    {id:"realestate",label:"Real Estate",tag:null,icon:"🏢",
      h:"Every Unstructured Listing Cycle Is Revenue You Cannot Recover.",
      workflows:["Lead qualification & CRM entry automation","Listing document generation workflow","Client communication sequences","Viewing coordination & reminders","Commission calculation & reporting"]},
    {id:"fitness",label:"Gyms",tag:null,icon:"◈",
      h:"Member Retention Is an Operations Problem, Not a Marketing One.",
      workflows:["Membership renewal & at-risk alerts","Class booking & waitlist automation","PT scheduling optimisation","Cross-branch performance dashboard","New member onboarding sequences"]},
    {id:"ngo",label:"NGOs",tag:null,icon:"⊗",
      h:"Every Hour Spent on Administration Is an Hour Not Spent on Impact.",
      workflows:["Beneficiary tracking & program reporting","Donor communication & acknowledgement","Grant compliance documentation","Staff timesheet & project allocation","Impact data collection & visualisation"]},
    {id:"construction",label:"Contracting & Construction",tag:null,icon:"🏗",
      h:"Your variation claims are under documented. Your retention dates are in someone's head. That is not a project — it is exposure.",
      workflows:["Variation Claim Tracking","Subcontractor Progress Log","Retention Release Calendar","Site Report Automation"]},
  ];
  const ind=sectors[active];
  return(
    <section id="industries" style={{padding:"96px 40px",background:B.smoke}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:48}}>
          <span className="section-label">Sector Coverage</span>
          <div className="divider-accent" style={{margin:"14px auto 16px"}}/>
          <h2 className="cg" style={{fontSize:"clamp(1.8rem,3.5vw,2.6rem)",fontWeight:300,color:B.navy}}>We Know Your Industry's Operational Patterns.</h2>
        </div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:40,justifyContent:"center"}}>
          {sectors.map((s,i)=>(
            <button key={s.id} onClick={()=>setActive(i)} style={{display:"flex",alignItems:"center",gap:8,padding:"10px 18px",borderRadius:40,background:active===i?B.navy:"#fff",color:active===i?"#fff":B.textS,border:`1.5px solid ${active===i?B.navy:B.borderL}`,fontFamily:"'Outfit',sans-serif",fontSize:13,fontWeight:active===i?600:400,cursor:"pointer",transition:"all .2s"}}>
              {s.label}
              {s.tag&&<span style={{fontSize:"9px",background:B.emerald,color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase"}}>{s.tag}</span>}
            </button>
          ))}
        </div>
        <div key={ind.id} style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,animation:"fadeIn .4s ease"}} className="grid-1-mobile">
          <div>
            <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:20}}>
              <div style={{width:44,height:44,borderRadius:8,background:B.navy,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,color:"#fff"}}>{ind.icon}</div>
              <div><div className="section-label">{ind.label}</div></div>
            </div>
            <h3 className="cg" style={{fontSize:"clamp(1.3rem,2.5vw,1.75rem)",fontWeight:400,color:B.navy,lineHeight:1.3,marginBottom:20}}>{ind.h}</h3>
          </div>
          <div>
            <h4 style={{fontSize:".85rem",fontWeight:700,color:B.textT,textTransform:"uppercase",letterSpacing:".12em",marginBottom:18}}>Highest-ROI Workflows We Automate</h4>
            <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:32}}>
              {ind.workflows.map((w,i)=>{
                const c=i===0?B.emerald:i===1?B.navy:B.gold;
                return(
                  <div key={w} style={{display:"flex",alignItems:"flex-start",gap:12,background:"#fff",border:`1px solid ${B.borderL}`,borderLeft:`3px solid ${c}`,borderRadius:6,padding:"12px 16px"}}>
                    <div style={{width:18,height:18,borderRadius:"50%",background:c,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:700,color:"#fff",flexShrink:0,marginTop:1}}>{i+1}</div>
                    <span style={{fontSize:"13px",color:B.text,lineHeight:1.5}}>{w}</span>
                  </div>
                );
              })}
            </div>
            <button className="btn-primary" style={{width:"100%",justifyContent:"center"}} onClick={onBooking}>Get a Free {ind.label} Discovery Session</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap(){
  const [ref,inView]=useInView(0.05);
  const items=[
    {m:"Month 0",label:"Discovery Session",desc:"Free 45-min diagnostic. Three gaps identified. Waste estimated.",color:B.emerald},
    {m:"Month 1",label:"Operational Scan",desc:"Shadow, map, and score every workflow. Full cost map delivered at day 30.",color:B.navy},
    {m:"Month 1–2",label:"Tier 1 Builds",desc:"Highest-ROI single-step automations live. First measurable time recovery.",color:B.gold},
    {m:"Month 2–3",label:"Tier 2 Builds",desc:"Cross-platform workflow connections. Performance dashboards operational.",color:"#7C3AED"},
    {m:"Month 3",label:"First Performance Report",desc:"30-day post-deployment metrics. Hours recovered. Revenue protected.",color:B.emeraldD},
    {m:"Month 4–6",label:"Advanced Builds",desc:"Complex multi-system architectures. Full automation coverage achieved.",color:B.navyL},
    {m:"Month 6",label:"Mid-Year Strategic Review",desc:"Full ROI analysis. Next phase planning. Expansion readiness assessment.",color:B.gold},
    {m:"Month 7–12",label:"Partnership & Optimisation",desc:"Continuous improvement, quarterly reporting. Performance compounds.",color:B.emerald},
  ];
  return(
    <section style={{padding:"96px 40px",background:B.navyD,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,opacity:.03,backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='%23ffffff'/%3E%3C/svg%3E\")"}}/>
      <div style={{maxWidth:1100,margin:"0 auto",position:"relative",zIndex:1}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <span className="section-label" style={{color:B.emeraldL}}>Engagement Timeline</span>
          <div style={{width:48,height:2,background:`linear-gradient(90deg,${B.emerald},transparent)`,margin:"14px auto 18px"}}/>
          <h2 className="cg" style={{fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:300,color:"#fff"}}>The 12-Month Operational Transformation</h2>
          <p style={{color:"rgba(255,255,255,.45)",maxWidth:480,margin:"12px auto 0",fontSize:".95rem",lineHeight:1.65}}>From first conversation to operational intelligence — a structured, accountable timeline with measurable checkpoints at every stage.</p>
        </div>
        <div ref={ref} style={{display:"grid",gridTemplateColumns:"1fr 2px 1fr",gap:"0 0",alignItems:"start"}}>
          <div style={{background:`linear-gradient(to bottom,${B.emerald},rgba(27,54,93,.3))`,gridColumn:"2",gridRow:"1/99",width:2,minHeight:600}}/>
          {items.map((m,i)=>{
            const isLeft=i%2===0;
            return(
              <div key={m.m} style={{gridColumn:isLeft?"1":"3",padding:isLeft?"0 40px 36px 0":"0 0 36px 40px",textAlign:isLeft?"right":"left",opacity:inView?1:0,transform:inView?"translateX(0)":`translateX(${isLeft?-20:20}px)`,transition:`opacity .5s ease ${i*.08}s,transform .5s ease ${i*.08}s`}}>
                <div style={{display:"flex",alignItems:"center",gap:10,justifyContent:isLeft?"flex-end":"flex-start",marginBottom:8}}>
                  <div className="mono" style={{fontSize:"9px",color:m.color,letterSpacing:".15em",textTransform:"uppercase"}}>{m.m}</div>
                  <div style={{width:26,height:26,borderRadius:"50%",background:m.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",flexShrink:0,color:"#fff",fontWeight:700}}>●</div>
                </div>
                <h4 className="cg" style={{fontSize:"1.1rem",fontWeight:600,color:"#fff",marginBottom:6}}>{m.label}</h4>
                <p style={{fontSize:"12.5px",color:"rgba(255,255,255,.48)",lineHeight:1.65}}>{m.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ARTICLES = [
  {
    slug:"why-admin-hours-are-the-wrong-metric",type:"The WIPS Brief",label:"Operations",time:"5 min read",
    title:"Why Your Admin Hours Are the Wrong Metric",color:"#2A9D6F",
    body:[
      {h:"The Question Operators Ask — and Why It's Wrong",p:"Every month, operations managers count how many hours their team spends on administrative tasks. The number sits in a spreadsheet. It grows slightly each quarter. It becomes a talking point in management meetings. And then nothing happens."},
      {h:"The Correct Question",p:"The relevant metric is not how many hours are spent on administration. It is how many revenue-generating hours are displaced by administration. A dental receptionist spending 14 hours per week on manual appointment confirmations is not losing 14 hours. She is losing 14 hours of patient-facing time — which, calculated at the clinic's average hourly rate, represents a specific, documentable monthly revenue cost."},
      {h:"The Practical Fix",p:"The first step is a measurement change, not a system change. Map every administrative task to its opportunity cost: the revenue value of the hour being consumed. Once that calculation is visible, the prioritisation of automation becomes obvious — not a judgment call, but an arithmetic consequence. WIPS Discovery Sessions begin here."},
    ]
  },
];

function ArticleModal({idx,onClose}){
  useEffect(()=>{ document.body.style.overflow="hidden"; return()=>{ document.body.style.overflow=""; }; },[]);
  const art=ARTICLES[idx];
  return(
    <div style={{position:"fixed",inset:0,zIndex:300,background:"rgba(15,30,53,.92)",backdropFilter:"blur(8px)",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"40px 20px",overflowY:"auto",animation:"fadeIn .2s ease"}} onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div style={{background:"#fff",borderRadius:12,width:"100%",maxWidth:760,boxShadow:"0 40px 80px rgba(0,0,0,.4)",animation:"fadeUp .3s ease",marginBottom:40}}>
        <div style={{height:6,background:art.color,borderRadius:"12px 12px 0 0"}}/>
        <div style={{padding:"36px 40px 40px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:24}}>
            <div>
              <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:10}}>
                <span className="mono" style={{fontSize:"9px",background:art.color,color:"#fff",padding:"3px 10px",borderRadius:20,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em"}}>{art.type}</span>
                <span className="mono" style={{fontSize:"9px",color:art.color,letterSpacing:".12em",textTransform:"uppercase"}}>{art.label}</span>
                <span style={{fontSize:"11px",color:B.textT}}>{art.time}</span>
              </div>
              <h2 className="cg" style={{fontSize:"clamp(1.5rem,3vw,2.1rem)",fontWeight:400,color:B.navy,lineHeight:1.2}}>{art.title}</h2>
            </div>
            <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",color:B.textT,fontSize:24,lineHeight:1,flexShrink:0,marginTop:4,padding:"0 0 0 16px"}}>✕</button>
          </div>
          <div style={{height:1,background:B.borderL,marginBottom:28}}/>
          {art.body.map((s,i)=>(
            <div key={i} style={{marginBottom:28}}>
              <h3 className="cg" style={{fontSize:"1.15rem",fontWeight:600,color:B.navy,marginBottom:10,lineHeight:1.3}}>{s.h}</h3>
              <p style={{fontSize:"15px",color:B.textS,lineHeight:1.78}}>{s.p}</p>
            </div>
          ))}
          <div style={{borderTop:`1px solid ${B.borderL}`,paddingTop:24,marginTop:8,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
            <span style={{fontSize:"12px",color:B.textT,fontStyle:"italic"}}>Published by WIPS Tech · Operational Intelligence for MENA SMEs</span>
            <button className="btn-primary" style={{padding:"10px 22px",fontSize:13}} onClick={onClose}>Close Article</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Insights({onArticle}){
  return(
    <section id="insights" style={{padding:"96px 40px",background:"#fff"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:48,flexWrap:"wrap",gap:20}}>
          <div>
            <span className="section-label">Operational Intelligence</span>
            <div className="divider-accent" style={{marginTop:14}}/>
            <h2 className="cg" style={{fontSize:"clamp(1.8rem,3.5vw,2.6rem)",fontWeight:300,color:B.navy,marginTop:14}}>No Theory. No Filler.</h2>
          </div>
          <p style={{maxWidth:340,color:B.textS,fontSize:".9rem",lineHeight:1.7}}>Every article is built from real operational data — workflows audited, waste quantified, automations deployed, and results measured across WIPS client engagements.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24,marginBottom:40}}>
          {ARTICLES.map((c,idx)=>(
            <div key={c.title} className="card" style={{overflow:"hidden"}}>
              <div style={{height:4,background:c.color}}/>
              <div style={{padding:"24px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                  <span className="mono" style={{fontSize:"9px",background:c.color,color:"#fff",padding:"3px 10px",borderRadius:20,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em"}}>{c.type}</span>
                  <span style={{fontSize:"11px",color:B.textT}}>{c.time}</span>
                </div>
                <div className="mono" style={{fontSize:"9px",color:c.color,letterSpacing:".12em",textTransform:"uppercase",marginBottom:10}}>{c.label}</div>
                <h3 className="cg" style={{fontSize:"1.2rem",fontWeight:500,color:B.navy,lineHeight:1.3,marginBottom:12}}>{c.title}</h3>
                <p style={{fontSize:"13px",color:B.textS,lineHeight:1.7,marginBottom:16}}>{c.body[0].p.slice(0,120)}…</p>
                <a href={`/insights/${c.slug}`} style={{fontFamily:"'Outfit',sans-serif",fontSize:"13px",fontWeight:600,color:c.color,display:"inline-flex",alignItems:"center",gap:6,textDecoration:"none"}}>
                  Read Full Article →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center"}}>
          <p style={{fontSize:"12px",color:B.textT,fontStyle:"italic"}}>Updated when we have something worth saying. Not on a content calendar.</p>
        </div>
      </div>
    </section>
  );
}

function BookingForm({onClose,isModal=false}){
  const [step,setStep]=useState(1);
  const [submitting,setSubmitting]=useState(false);
  const [submitted,setSubmitted]=useState(false);
  const [error,setError]=useState("");
  const [data,setData]=useState({name:"",email:"",phone:"",company:"",role:"",industry:"",staff:"",revenue:"",challenge:"",source:""});
  const upd=(k,v)=>setData(p=>({...p,[k]:v}));

  const handleSubmit=async()=>{
    setSubmitting(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("_subject","New Discovery Session Request — WIPS Tech");
      fd.append("name",data.name);
      fd.append("email",data.email);
      fd.append("phone",data.phone||"");
      fd.append("company",data.company||"");
      fd.append("role",data.role||"");
      fd.append("industry",data.industry||"");
      fd.append("staff",data.staff||"");
      fd.append("revenue",data.revenue||"");
      fd.append("challenge",data.challenge||"");
      fd.append("source",data.source||"");
      const res=await fetch("https://formspree.io/f/xkoqgpjb",{
        method:"POST",
        headers:{"Accept":"application/json"},
        body:fd
      });
      if(res.ok){
        setSubmitted(true);
      } else {
        let errMsg="Submission failed. Please try again or email info@wipstech.com directly.";
        try{ const d=await res.json(); if(d.error) errMsg=d.error; }catch(ignored){}
        setError(errMsg);
      }
    } catch(e){
      setError("Network error. Please try again or email info@wipstech.com directly.");
    }
    setSubmitting(false);
  };

  const industries=["Dental / Medical Clinic","Real Estate Agency","Fitness / Gym","NGO / Non-Profit","Contracting & Construction","Professional Services","Other"];
  const staffR=["1–5 people","6–15 people","16–50 people","51–150 people","150+ people"];
  const revR=["Under $5,000/mo","$5,000–$20,000/mo","$20,000–$80,000/mo","$80,000–$250,000/mo","Over $250,000/mo"];

  if(submitted){
    return(
      <div style={{textAlign:"center",padding:"48px 32px"}}>
        <div style={{width:64,height:64,borderRadius:"50%",background:"#F0FDF6",border:`2px solid ${B.emerald}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,margin:"0 auto 20px"}}>✓</div>
        <h2 className="cg" style={{fontSize:"1.9rem",fontWeight:400,color:B.navy,marginBottom:14}}>Session Confirmed</h2>
        <p style={{fontSize:"1rem",color:B.textS,lineHeight:1.7,maxWidth:400,margin:"0 auto 10px"}}>Your Discovery Session request has been received. You will receive a calendar invite within 24 hours.</p>
        <p style={{fontSize:".875rem",color:B.textT,lineHeight:1.65,maxWidth:380,margin:"0 auto 28px",fontStyle:"italic"}}>The session is structured, 45 minutes, and produces findings whether or not you proceed to a full engagement.</p>
        {isModal&&<button className="btn-outline" onClick={onClose}>Close</button>}
      </div>
    );
  }

  return(
    <div style={{maxWidth:560,margin:"0 auto"}}>
      <div style={{display:"flex",gap:6,marginBottom:28}}>
        {[1,2,3].map(s=><div key={s} style={{flex:1,height:3,borderRadius:2,background:step>=s?B.navy:B.borderL,transition:"background .3s"}}/>)}
      </div>
      <div className="mono" style={{fontSize:"10px",color:B.textT,letterSpacing:".15em",textTransform:"uppercase",marginBottom:6}}>Step {step} of 3</div>

      {step===1&&(
        <div style={{animation:"fadeIn .35s ease"}}>
          <h3 className="cg" style={{fontSize:"1.5rem",fontWeight:400,color:B.navy,marginBottom:6}}>Your Contact Information</h3>
          <p style={{fontSize:"13px",color:B.textT,marginBottom:28,lineHeight:1.6}}>No pitch. No obligation. Forty-five minutes of operational clarity.</p>
          <div style={{marginBottom:18}}><label>Full Name <span style={{color:B.emerald}}>*</span></label><input type="text" value={data.name} onChange={e=>upd("name",e.target.value)} placeholder="e.g. Karim Mansour"/></div>
          <div style={{marginBottom:18}}><label>Business Email <span style={{color:B.emerald}}>*</span></label><input type="email" value={data.email} onChange={e=>upd("email",e.target.value)} placeholder="karim@yourclinic.com"/></div>
          <div style={{marginBottom:24}}><label>Phone Number</label><input type="tel" value={data.phone} onChange={e=>upd("phone",e.target.value)} placeholder="+961 70 000 000"/></div>
          {(!data.name||!data.email)&&<p style={{fontSize:"11px",color:B.textT,marginBottom:12}}>Please fill in your name and email to continue.</p>}
          <button className="btn-primary" style={{width:"100%",justifyContent:"center"}} onClick={()=>{if(data.name&&data.email)setStep(2);}} disabled={!data.name||!data.email}>Continue → Operational Context</button>
        </div>
      )}

      {step===2&&(
        <div style={{animation:"fadeIn .35s ease"}}>
          <h3 className="cg" style={{fontSize:"1.5rem",fontWeight:400,color:B.navy,marginBottom:6}}>Your Organisation</h3>
          <p style={{fontSize:"13px",color:B.textT,marginBottom:28,lineHeight:1.6}}>This helps us prepare sector-specific questions for your session.</p>
          <div style={{marginBottom:18}}><label>Company / Organisation Name <span style={{color:B.emerald}}>*</span></label><input type="text" value={data.company} onChange={e=>upd("company",e.target.value)} placeholder="Your organisation name"/></div>
          <div style={{marginBottom:18}}><label>Your Role</label><input type="text" value={data.role} onChange={e=>upd("role",e.target.value)} placeholder="e.g. Managing Director, Owner"/></div>
          <div style={{marginBottom:18}}><label>Industry / Sector <span style={{color:B.emerald}}>*</span></label><select value={data.industry} onChange={e=>upd("industry",e.target.value)}><option value="" disabled>Select your sector</option>{industries.map(o=><option key={o} value={o}>{o}</option>)}</select></div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:24}}>
            <div><label>Team Size</label><select value={data.staff} onChange={e=>upd("staff",e.target.value)}><option value="" disabled>Staff count</option>{staffR.map(o=><option key={o} value={o}>{o}</option>)}</select></div>
            <div><label>Monthly Revenue</label><select value={data.revenue} onChange={e=>upd("revenue",e.target.value)}><option value="" disabled>Revenue range</option>{revR.map(o=><option key={o} value={o}>{o}</option>)}</select></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <button className="btn-outline" onClick={()=>setStep(1)}>← Back</button>
            <button className="btn-primary" style={{justifyContent:"center"}} onClick={()=>{if(data.company&&data.industry)setStep(3);}} disabled={!data.company||!data.industry}>Continue →</button>
          </div>
        </div>
      )}

      {step===3&&(
        <div style={{animation:"fadeIn .35s ease"}}>
          <h3 className="cg" style={{fontSize:"1.5rem",fontWeight:400,color:B.navy,marginBottom:6}}>The Operational Picture</h3>
          <p style={{fontSize:"13px",color:B.textT,marginBottom:28,lineHeight:1.6}}>One question. Be specific — this is what makes the session productive.</p>
          <div style={{marginBottom:18}}>
            <label>Describe your biggest operational challenge <span style={{color:B.emerald}}>*</span></label>
            <textarea value={data.challenge} onChange={e=>upd("challenge",e.target.value)} placeholder="e.g. We manage appointments manually, have high no-show rates, and our billing system doesn't communicate with our scheduling tool..." style={{minHeight:100,resize:"vertical",lineHeight:1.65}}/>
          </div>
          <div style={{marginBottom:20}}>
            <label>How did you hear about WIPS?</label>
            <select value={data.source} onChange={e=>upd("source",e.target.value)}><option value="" disabled>Optional</option>{["LinkedIn","Google Search","Referral from a colleague","WIPS content / article","Other"].map(o=><option key={o} value={o}>{o}</option>)}</select>
          </div>
          <div style={{background:B.smoke,border:`1px solid ${B.borderL}`,borderRadius:6,padding:"12px 16px",marginBottom:20}}>
            <p style={{fontSize:"11.5px",color:B.textT,lineHeight:1.65,margin:0}}><strong style={{color:B.navy}}>What happens next:</strong> We review your submission within one business day. If your operation qualifies, you&apos;ll receive a calendar invite within 24 hours. If not, we&apos;ll tell you directly.</p>
          </div>
          {error&&<div style={{background:"#FEF2F2",border:"1px solid #FCA5A5",borderRadius:6,padding:"10px 14px",marginBottom:16}}><p style={{fontSize:"12px",color:"#DC2626",margin:0}}>{error}</p></div>}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1.6fr",gap:12}}>
            <button className="btn-outline" onClick={()=>setStep(2)}>← Back</button>
            <button className="btn-gold" onClick={handleSubmit} disabled={!data.challenge||submitting} style={{justifyContent:"center"}}>
              {submitting?(
                <span style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{display:"inline-block",width:14,height:14,border:"2px solid rgba(255,255,255,.3)",borderTop:"2px solid #fff",borderRadius:"50%",animation:"spin .8s linear infinite"}}/>
                  Submitting…
                </span>
              ):"Book My Discovery Session →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function BookingModal({open,onClose}){
  useEffect(()=>{ document.body.style.overflow=open?"hidden":""; return()=>{ document.body.style.overflow=""; }; },[open]);
  if(!open)return null;
  return(
    <div style={{position:"fixed",inset:0,zIndex:200,background:"rgba(15,30,53,.88)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,animation:"fadeIn .25s ease"}} onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div style={{background:"#fff",borderRadius:12,width:"100%",maxWidth:640,maxHeight:"92vh",overflow:"auto",boxShadow:"0 40px 80px rgba(0,0,0,.35)",animation:"fadeUp .35s ease"}}>
        <div style={{background:B.navy,padding:"24px 32px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",borderRadius:"12px 12px 0 0"}}>
          <div>
            <div className="section-label" style={{color:B.emeraldL,marginBottom:6}}>Free · No Obligation · 45 Minutes</div>
            <h2 className="cg" style={{fontSize:"1.55rem",fontWeight:300,color:"#fff"}}>Book Your Operational Discovery Session</h2>
          </div>
          <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",color:"rgba(255,255,255,.5)",padding:4,fontSize:22,lineHeight:1}}>✕</button>
        </div>
        <div style={{padding:"36px 32px"}}><BookingForm onClose={onClose} isModal/></div>
      </div>
    </div>
  );
}

function ContactModal({open,onClose}){
  useEffect(()=>{ document.body.style.overflow=open?"hidden":""; return()=>{ document.body.style.overflow=""; }; },[open]);
  if(!open)return null;
  return(
    <div style={{position:"fixed",inset:0,zIndex:200,background:"rgba(15,30,53,.92)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,animation:"fadeIn .25s ease"}} onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div style={{background:"#fff",borderRadius:16,width:"100%",maxWidth:520,boxShadow:"0 40px 80px rgba(0,0,0,.4)",animation:"fadeUp .3s ease",overflow:"hidden"}}>
        <div style={{background:B.navyD,padding:"28px 32px",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div className="section-label" style={{color:B.emeraldL,marginBottom:8}}>Get in Touch</div>
            <h2 className="cg" style={{fontSize:"1.7rem",fontWeight:300,color:"#fff"}}>Contact WIPS Tech</h2>
          </div>
          <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",color:"rgba(255,255,255,.5)",fontSize:22,lineHeight:1,padding:0}}>✕</button>
        </div>
        <div style={{padding:"36px 32px"}}>
          <p style={{fontSize:"15px",color:B.textS,lineHeight:1.75,marginBottom:28}}>We respond to all enquiries within one business day.</p>
          <a href="mailto:info@wipstech.com" style={{display:"flex",alignItems:"center",gap:16,background:B.smoke,border:`1px solid ${B.borderL}`,borderRadius:12,padding:"18px 24px",textDecoration:"none",marginBottom:20,transition:"border-color .2s"}}
            onMouseEnter={e=>e.currentTarget.style.borderColor=B.navy} onMouseLeave={e=>e.currentTarget.style.borderColor=B.borderL}>
            <div style={{width:44,height:44,borderRadius:"50%",background:B.navy,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <div style={{fontFamily:"'Outfit',sans-serif",fontWeight:600,fontSize:"14px",color:B.navy,marginBottom:2}}>Email</div>
              <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:B.textS}}>info@wipstech.com</div>
            </div>
          </a>
          <div style={{borderTop:`1px solid ${B.borderL}`,paddingTop:20,marginTop:4}}>
            <p style={{fontSize:"12px",color:B.textT,lineHeight:1.65,margin:0}}>WIPS Tech operates in Lebanon. We respond to all enquiries within one business day.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingSection(){
  const [bookingOpen,setBookingOpen]=useState(false);
  return(
    <section id="book" style={{padding:"96px 40px",background:B.smoke}}>
      <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"start"}} className="grid-1-mobile">
        <div>
          <span className="section-label">Start Here</span>
          <div className="divider-accent"/>
          <h2 className="cg" style={{fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:300,color:B.navy,lineHeight:1.2,marginBottom:20}}>
            Forty-Five Minutes.<br/><em style={{fontStyle:"italic"}}>Complete</em> Operational Clarity.
          </h2>
          <p style={{fontSize:"1rem",color:B.textS,lineHeight:1.75,marginBottom:14}}>The Discovery Session surfaces the three largest operational gaps in your business, calculates their monthly cost, and determines whether a WIPS engagement would generate a measurable return.</p>
          <p style={{fontSize:".92rem",color:B.textS,lineHeight:1.75,marginBottom:28}}>No pitch. No sales presentation. No obligation.</p>
          {[{icon:"◎",label:"Three gaps identified and quantified in the session itself"},{icon:"⊡",label:"Specific workflow priorities based on your sector and scale"},{icon:"✓",label:"Clear recommendation: proceed, wait, or pursue different support"},{icon:"⌖",label:"Free — whether or not you engage us afterward"}].map(f=>(
            <div key={f.label} style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:12}}>
              <span style={{color:B.emerald,fontWeight:700,flexShrink:0,marginTop:1}}>{f.icon}</span>
              <span style={{fontSize:"14px",color:B.textS,lineHeight:1.6}}>{f.label}</span>
            </div>
          ))}
        </div>
        <div style={{background:"#fff",borderRadius:12,padding:"40px 36px",border:`1px solid ${B.borderL}`,boxShadow:"0 8px 40px rgba(27,54,93,.08)"}}>
          <BookingForm/>
        </div>
      </div>
    </section>
  );
}

function FAQ(){
  const [open,setOpen]=useState(null);
  const faqs=[
    {q:"Is the Discovery Session genuinely free?",a:"Yes. The 45-minute session carries no cost, no obligation, and no follow-up unless you choose to proceed. You receive a preliminary waste estimate, a list of your three highest-ROI workflow priorities, and an honest recommendation on whether a full Scan would produce a positive return for your specific operation."},
    {q:"Why not hire an internal operations manager instead?",a:"An internal hire builds capability over time — typically 6–12 months before they redesign anything. WIPS delivers operational intelligence from day one, with diagnostic methodology, sector-specific workflow experience, and implementation accountability. When the engagement concludes, your internal team inherits a documented, functioning system — not a dependency."},
    {q:"We already use software. Why isn't that enough?",a:"Software does not redesign your workflows. It digitises the ones you already have — including the inefficient ones. Many small businesses use only part of what their software can do. We architect the system that makes your existing software perform at its potential and automate what has been done manually by habit rather than necessity."},
    {q:"What makes WIPS different from a management consultant?",a:"A consultant diagnoses and recommends. WIPS diagnoses, builds, and stays accountable for the result. The structural difference is implementation. Traditional advisory firms are not resourced or incentivised to execute. WIPS builds the workflows, deploys the automations, and measures performance after delivery. If a build underperforms its projection, we correct it at no additional cost."},
    {q:"How long before we see measurable results?",a:"Week four of Phase 1: your Scan report quantifies every identified inefficiency — measurable findings before a single automation is built. Weeks 6–7: first Tier 1 automations are live, with time and cost recovery within days of deployment. The compounding effect of a structured operational system takes 3–6 months to fully materialise — but initial wins happen in the first 30 days."},
    {q:"What level of involvement is required from our team?",a:"The Scan requires 3–4 hours of your team's time over 30 days — primarily structured observation sessions and workflow interviews. We work around your operation, not through it. During the Build phase, we coordinate with relevant staff on implementation. The Partnership retainer requires one monthly performance review and an open channel for new workflow requests."},
    {q:"We already have operational systems. Can WIPS still add value?",a:"Almost always — and often more effectively. Businesses with existing systems often use only part of their tools' capability, have systems that don't communicate with each other, and lack a single performance truth across the operation. WIPS audits what you have, builds the connections, and adds only what is structurally necessary."},
    {q:"What industries does WIPS specialise in?",a:"Dental and medical clinics, real estate agencies, fitness operations, NGOs, contracting and construction firms, and professional services businesses. The methodology is consistent across sectors. The application is specific to each."},
  ];
  return(
    <section style={{padding:"96px 40px",background:"#fff"}}>
      <div style={{maxWidth:820,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:56}}>
          <span className="section-label">Due Diligence</span>
          <div className="divider-accent" style={{margin:"14px auto 16px"}}/>
          <h2 className="cg" style={{fontSize:"clamp(1.8rem,3.5vw,2.6rem)",fontWeight:300,color:B.navy}}>The Questions Serious Operators Ask Before Engaging.</h2>
        </div>
        {faqs.map((f,i)=>(
          <div key={f.q} style={{borderBottom:`1px solid ${B.borderL}`}}>
            <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",textAlign:"left",background:"none",border:"none",padding:"20px 0",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16,cursor:"pointer"}}>
              <span className="cg" style={{fontSize:"1.05rem",fontWeight:500,color:B.navy,lineHeight:1.4}}>{f.q}</span>
              <span style={{color:B.emerald,fontSize:"20px",flexShrink:0,marginTop:2,transform:open===i?"rotate(45deg)":"rotate(0)",transition:"transform .2s",display:"inline-block"}}>+</span>
            </button>
            <div style={{maxHeight:open===i?"500px":"0",overflow:"hidden",transition:"max-height .35s ease"}}>
              <p style={{fontSize:"14px",color:B.textS,lineHeight:1.75,paddingBottom:20}}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer({onBooking,onContact}){
  const scrollTo=(id)=>document.querySelector(id)?.scrollIntoView({behavior:"smooth"});
  const footerLinks={
    "Services":[
      {label:"Operational Scan",action:()=>scrollTo("#approach")},
      {label:"Workflow Automation",action:()=>scrollTo("#approach")},
      {label:"Performance Dashboards",action:()=>scrollTo("#approach")},
      {label:"Operations Partnership",action:()=>scrollTo("#approach")},
      {label:"ROI Assessment",action:()=>scrollTo("#calculator")},
    ],
    "Industries":[
      {label:"Dental Clinics",action:()=>scrollTo("#industries")},
      {label:"Real Estate",action:()=>scrollTo("#industries")},
      {label:"Fitness Operations",action:()=>scrollTo("#industries")},
      {label:"NGOs & Non-Profits",action:()=>scrollTo("#industries")},
      {label:"Contracting & Construction",action:()=>scrollTo("#industries")},
    ],
    "Company":[
      {label:"Our Approach",action:()=>scrollTo("#approach")},
      {label:"Insights",action:()=>scrollTo("#insights")},
      {label:"Book Discovery",action:onBooking},
      {label:"Contact Us",action:onContact},
    ],
  };
  return(
    <footer style={{background:B.navyD}}>
      <div style={{background:B.navy,padding:"56px 40px",textAlign:"center"}}>
        <h2 className="cg" style={{fontSize:"clamp(1.6rem,3.5vw,2.4rem)",fontWeight:300,color:"#fff",marginBottom:16}}>
          If Your Operation Is Producing Less Than It Should —<br/><em style={{fontStyle:"italic",color:B.emeraldL}}>We Will Show You Where. And Then Fix It.</em>
        </h2>
        <button className="btn-gold" onClick={onBooking} style={{marginTop:12}}>Book Your Free Discovery Session →</button>
      </div>
      <div style={{padding:"56px 40px 24px",maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:40,marginBottom:48}} className="footer-grid">
          <div>
            <WIPSLogo light/>
            <p style={{fontSize:"13px",color:"rgba(255,255,255,.4)",lineHeight:1.75,marginTop:20,maxWidth:300}}>Not a Software Vendor. Not a Business Consultant. Your Operations Intelligence Partner.</p>
            <p style={{fontSize:"12px",color:"rgba(255,255,255,.25)",lineHeight:1.7,marginTop:10,maxWidth:300}}>WIPS Tech works with SME leaders who have decided that operational performance is a strategic priority — not an administrative function.</p>
            <div style={{display:"flex",gap:10,marginTop:24,alignItems:"center",flexWrap:"wrap"}}>
              <a href="https://www.linkedin.com/company/wips-tech/" target="_blank" rel="noopener noreferrer"
                style={{width:36,height:36,borderRadius:8,background:"#0A66C2",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",transition:"opacity .2s",flexShrink:0}}
                onMouseEnter={e=>e.currentTarget.style.opacity=".8"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}
                title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title,links])=>(
            <div key={title}>
              <div className="mono" style={{fontSize:"9px",fontWeight:700,color:B.emeraldL,letterSpacing:".18em",textTransform:"uppercase",marginBottom:16}}>{title}</div>
              {links.map(l=>(
                <div key={l.label} style={{marginBottom:10}}>
                  <button onClick={l.action} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,255,255,.4)",textAlign:"left",padding:0,transition:"color .2s"}}
                    onMouseEnter={e=>e.target.style.color="rgba(255,255,255,.8)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.4)"}>
                    {l.label}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,.07)",paddingTop:24,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <div style={{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"}}>
            <span className="mono" style={{fontSize:"9px",color:"rgba(255,255,255,.2)",letterSpacing:".15em",textTransform:"uppercase"}}>Operating In:</span>
            <span style={{fontSize:"12px",color:"rgba(255,255,255,.3)"}}>🇱🇧 Lebanon</span>
          </div>
          <span style={{fontSize:"11px",color:"rgba(255,255,255,.2)"}}>© 2026 WIPS Tech. All rights reserved.</span>
        </div>
        <p style={{fontSize:"10px",color:"rgba(255,255,255,.15)",marginTop:16,lineHeight:1.65,fontStyle:"italic"}}>Results depend on operation size, sector, and current systems. WIPS Tech does not promise specific financial outcomes from any engagement.</p>
      </div>
    </footer>
  );
}

export default function Page(){
  const [bookingOpen,setBookingOpen]=useState(false);
  const [contactOpen,setContactOpen]=useState(false);
  const [articleIdx,setArticleIdx]=useState(null);
  const open=()=>setBookingOpen(true);
  const close=()=>setBookingOpen(false);

  useEffect(()=>{
    setTimeout(()=>{
      const el=document.getElementById("loading");
      if(el){ el.style.opacity="0"; setTimeout(()=>el.remove(),600); }
    },900);
  },[]);

  return(
    <>
      <div id="loading" style={{position:"fixed",inset:0,background:"#0F1E35",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:9999,transition:"opacity 0.6s ease"}}>
        <picture>
          <source srcSet="/logo-transparent.webp" type="image/webp" width={440} height={144}/>
          <img src="/logo-transparent.png" alt="WIPS Tech" width={440} height={144} fetchPriority="high" style={{height:56,width:"auto",opacity:.92,objectFit:"contain"}}/>
        </picture>
        <div style={{display:"flex",gap:8,marginTop:18}}>
          <div className="ldot" style={{background:"#2A9D6F"}}></div>
          <div className="ldot" style={{background:"#C8952A",animationDelay:".2s"}}></div>
          <div className="ldot" style={{background:"#2A9D6F",animationDelay:".4s"}}></div>
        </div>
      </div>
      <Navigation onBooking={open} onContact={()=>setContactOpen(true)}/>
      <main>
        <Hero onBooking={open}/>
        <NotGrid/>
        <WasteCalculator onBooking={open}/>
        <Approach onBooking={open}/>
        <Industries onBooking={open}/>
        <Roadmap/>
        <Insights onArticle={setArticleIdx}/>
        <BookingSection/>
        <FAQ/>
      </main>
      <Footer onBooking={open} onContact={()=>setContactOpen(true)}/>
      <BookingModal open={bookingOpen} onClose={close}/>
      <ContactModal open={contactOpen} onClose={()=>setContactOpen(false)}/>
      {articleIdx!==null&&<ArticleModal idx={articleIdx} onClose={()=>setArticleIdx(null)}/>}
    </>
  );
}
