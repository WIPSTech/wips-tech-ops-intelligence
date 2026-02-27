'use client';
import React from 'react';
import { useState, useEffect, useRef, useCallback } from "react";
import Image from 'next/image';

/* ═══════════════════════════════════════════════════════════
   WIPS TECH — COMPLETE PRODUCTION WEBSITE
   Brand: Deep Cobalt #1B365D · Emerald #2A9D6F · Gold #C8952A
   Fonts: Cormorant Garamond (display) · Outfit (body)
   ═══════════════════════════════════════════════════════════ */

// ── BRAND TOKENS ──────────────────────────────────────────
const B = {
  navy:    "#1B365D",
  navyD:   "#0F1E35",
  navyL:   "#2A4A7A",
  emerald: "#2A9D6F",
  emeraldD:"#1E7A52",
  emeraldL:"#3DBF8A",
  gold:    "#C8952A",
  goldL:   "#E4AE42",
  smoke:   "#F4F7FA",
  white:   "#FFFFFF",
  text:    "#1A202C",
  textS:   "#4A5568",
  textT:   "#718096",
  border:  "#D1DCE8",
  borderL: "#E8EEF5",
};

// ── GLOBAL STYLES ─────────────────────────────────────────
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: 'Outfit', sans-serif; color: #1A202C; background: #FFFFFF; -webkit-font-smoothing: antialiased; }

.cg { font-family: 'Cormorant Garamond', Georgia, serif; }
.mono { font-family: 'JetBrains Mono', monospace; }

::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: #F4F7FA; }
::-webkit-scrollbar-thumb { background: #1B365D; border-radius: 3px; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes slideRight {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
@keyframes countUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes pulse-soft {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
@keyframes chevronFlow {
  0%   { transform: translateX(0) scaleX(1); opacity: 0.9; }
  50%  { transform: translateX(6px) scaleX(1.04); opacity: 1; }
  100% { transform: translateX(0) scaleX(1); opacity: 0.9; }
}

.fade-up { animation: fadeUp 0.7s ease forwards; }
.fade-in { animation: fadeIn 0.5s ease forwards; }

.nav-link {
  position: relative;
  color: #4A5568;
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0; right: 0;
  height: 1.5px;
  background: #2A9D6F;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}
.nav-link:hover { color: #1B365D; }
.nav-link:hover::after { transform: scaleX(1); }

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #1B365D;
  color: #FFFFFF;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 13px 28px;
  border: 2px solid #1B365D;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;
}
.btn-primary:hover {
  background: #0F1E35;
  border-color: #0F1E35;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(27,54,93,0.25);
}

.btn-emerald {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #2A9D6F;
  color: #FFFFFF;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 13px 28px;
  border: 2px solid #2A9D6F;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;
}
.btn-emerald:hover {
  background: #1E7A52;
  border-color: #1E7A52;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(42,157,111,0.3);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #1B365D;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 12px 26px;
  border: 2px solid #1B365D;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;
}
.btn-outline:hover {
  background: #1B365D;
  color: #FFFFFF;
  transform: translateY(-1px);
}

.btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #C8952A;
  color: #FFFFFF;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 16px 36px;
  border: 2px solid #C8952A;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;
  text-transform: uppercase;
}
.btn-gold:hover {
  background: #A37820;
  border-color: #A37820;
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(200,149,42,0.35);
}

.card {
  background: #FFFFFF;
  border: 1px solid #D1DCE8;
  border-radius: 8px;
  transition: all 0.25s ease;
}
.card:hover {
  border-color: #2A9D6F;
  box-shadow: 0 8px 32px rgba(27,54,93,0.1);
  transform: translateY(-2px);
}

.section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #2A9D6F;
}

.divider-accent {
  width: 48px;
  height: 3px;
  background: linear-gradient(90deg, #2A9D6F, #1B365D);
  border-radius: 2px;
  margin: 16px 0;
}

input, textarea, select {
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  color: #1A202C;
  background: #FFFFFF;
  border: 1.5px solid #D1DCE8;
  border-radius: 4px;
  padding: 11px 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  -webkit-appearance: none;
}
input:focus, textarea:focus, select:focus {
  border-color: #1B365D;
  box-shadow: 0 0 0 3px rgba(27,54,93,0.12);
}
input::placeholder, textarea::placeholder {
  color: #A0AEC0;
}

label {
  font-size: 12.5px;
  font-weight: 600;
  color: #4A5568;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 5px;
  display: block;
}

.range-input {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: #D1DCE8;
  outline: none;
  padding: 0;
  border: none;
  box-shadow: none;
  margin: 8px 0;
}
.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #1B365D;
  cursor: pointer;
  border: 3px solid #FFFFFF;
  box-shadow: 0 2px 8px rgba(27,54,93,0.3);
  transition: transform 0.15s;
}
.range-input::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

.chevron-mark {
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 10px solid currentColor;
}

@media (max-width: 768px) {
  .hide-mobile { display: none !important; }
  .stack-mobile { flex-direction: column !important; }
  .full-mobile { width: 100% !important; }
  .text-center-mobile { text-align: center !important; }
  .pad-mobile { padding: 60px 20px !important; }
}
`;

// ── SVG LOGO (from brand analysis) ────────────────────────
const WIPSLogo = ({ size = 32, withText = true, light = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
    <svg width={size} height={size * 0.7} viewBox="0 0 56 40" fill="none">
      {/* Dots — disconnected state */}
      <circle cx="3" cy="12" r="2" fill={light ? "#FFFFFF60" : "#A0AEC0"} />
      <circle cx="3" cy="20" r="2" fill={light ? "#FFFFFF60" : "#A0AEC0"} />
      <circle cx="3" cy="28" r="2" fill={light ? "#FFFFFF60" : "#A0AEC0"} />
      <circle cx="9" cy="16" r="2" fill={light ? "#FFFFFF50" : "#718096"} />
      <circle cx="9" cy="24" r="2" fill={light ? "#FFFFFF50" : "#718096"} />
      <line x1="3" y1="12" x2="9" y2="16" stroke={light ? "#FFFFFF30" : "#CBD5E0"} strokeWidth="1" strokeDasharray="2,2" />
      <line x1="3" y1="20" x2="9" y2="16" stroke={light ? "#FFFFFF30" : "#CBD5E0"} strokeWidth="1" strokeDasharray="2,2" />
      <line x1="3" y1="20" x2="9" y2="24" stroke={light ? "#FFFFFF30" : "#CBD5E0"} strokeWidth="1" strokeDasharray="2,2" />
      <line x1="3" y1="28" x2="9" y2="24" stroke={light ? "#FFFFFF30" : "#CBD5E0"} strokeWidth="1" strokeDasharray="2,2" />
      {/* Navy chevron */}
      <path d="M14 4 L28 4 L40 20 L28 36 L14 36 L26 20 Z" fill="#1B365D" />
      <circle cx="22" cy="14" r="3.5" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="22" cy="20" r="3.5" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="22" cy="26" r="3.5" fill="none" stroke="white" strokeWidth="1.5" />
      <line x1="22" y1="17.5" x2="22" y2="22.5" stroke="white" strokeWidth="1.5" />
      <line x1="22" y1="23.5" x2="22" y2="28.5" stroke="white" strokeWidth="1.5" />
      {/* Emerald chevron */}
      <path d="M30 4 L44 4 L56 20 L44 36 L30 36 L42 20 Z" fill="#2A9D6F" />
      <circle cx="38" cy="12" r="3" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="38" cy="20" r="3" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="38" cy="28" r="3" fill="none" stroke="white" strokeWidth="1.5" />
      <line x1="38" y1="15" x2="38" y2="17" stroke="white" strokeWidth="1.5" />
      <line x1="38" y1="23" x2="38" y2="25" stroke="white" strokeWidth="1.5" />
      <path d="M35 15 L41 15 M35 20 L41 20 M35 25 L41 25" stroke="white" strokeWidth="1" opacity="0.6" />
    </svg>
    {withText && (
      <div>
        <div style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: size * 0.56,
          fontWeight: 700,
          letterSpacing: "-0.01em",
          lineHeight: 1,
          color: light ? "#FFFFFF" : "#1B365D",
        }}>
          <span>WIPS</span>
          <span style={{ fontWeight: 300, color: light ? "#FFFFFFCC" : "#718096" }}>Tech</span>
        </div>
        {size >= 28 && (
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: size * 0.22,
            letterSpacing: "0.08em",
            color: light ? "#FFFFFF80" : "#718096",
            textTransform: "uppercase",
            marginTop: 1,
          }}>
            Workflows · Intelligence · Performance
          </div>
        )}
      </div>
    )}
  </div>
);

// ── CHEVRON DIVIDER ───────────────────────────────────────
const ChevronDivider = ({ color = B.navy, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ display: "inline-block" }}>
    <path d="M3 2 L10 8 L3 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 2 L15 8 L8 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
  </svg>
);

// ── SCROLL ANIMATION HOOK ─────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── ANIMATED COUNTER ──────────────────────────────────────
function AnimCounter({ end, prefix = "", suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const step = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);
  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

// ─────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────
function Navigation({ onBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const navItems = [
    { label: "Our Approach", href: "#approach" },
    { label: "Industries", href: "#industries" },
    { label: "ROI Calculator", href: "#calculator" },
    { label: "Insights", href: "#insights" },
  ];
  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? `1px solid ${B.borderL}` : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(27,54,93,0.08)" : "none",
        transition: "all 0.3s ease",
        padding: "0 40px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <WIPSLogo size={26} />
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {navItems.map(item => (
              <a key={item.label} className="nav-link" href={item.href}>{item.label}</a>
            ))}
          </div>
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button className="btn-outline" style={{ padding: "9px 18px", fontSize: 13 }}
              onClick={() => document.getElementById("approach")?.scrollIntoView({ behavior: "smooth" })}>
              How It Works
            </button>
            <button className="btn-primary" style={{ padding: "10px 20px", fontSize: 13 }} onClick={onBooking}>
              Book Discovery Session
            </button>
          </div>
          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{
            display: "none", background: "none", border: "none", cursor: "pointer",
            padding: 8, color: B.navy,
          }} className="show-mobile">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen
                ? <><path d="M3 3 L19 19 M19 3 L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>
                : <><path d="M3 6 L19 6 M3 11 L19 11 M3 16 L19 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>
              }
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            borderTop: `1px solid ${B.borderL}`, background: "white",
            padding: "16px 20px",
          }}>
            {navItems.map(item => (
              <a key={item.label} href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "12px 0", color: B.text, fontWeight: 500, borderBottom: `1px solid ${B.borderL}`, textDecoration: "none" }}>
                {item.label}
              </a>
            ))}
            <button className="btn-primary" style={{ width: "100%", marginTop: 16, justifyContent: "center" }} onClick={() => { setMobileOpen(false); onBooking(); }}>
              Book Free Discovery Session
            </button>
          </div>
        )}
      </nav>
      <style>{`.show-mobile { display: none; } @media (max-width: 768px) { .show-mobile { display: flex !important; } }`}</style>
    </>
  );
}

// ─────────────────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────────────────
function Hero({ onBooking }) {
  return (
    <section style={{
      minHeight: "100vh",
      background: `linear-gradient(160deg, ${B.navyD} 0%, ${B.navy} 55%, #1E4A3A 100%)`,
      display: "flex", flexDirection: "column", justifyContent: "center",
      position: "relative", overflow: "hidden",
      padding: "120px 40px 80px",
    }}>
      {/* Background pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      {/* Animated chevrons */}
      <div style={{ position: "absolute", right: "-40px", top: "50%", transform: "translateY(-50%)", opacity: 0.07 }}>
        {[0, 1, 2, 3].map(i => (
          <svg key={i} width={200 - i * 30} height={320 - i * 48} viewBox="0 0 200 320" fill="none"
            style={{ display: "block", marginBottom: -40, animation: `chevronFlow ${2.5 + i * 0.4}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}>
            <path d={`M0 0 L${200 - i * 30} 0 L${320 - i * 48} ${160 - i * 24} L${200 - i * 30} ${320 - i * 48} L0 ${320 - i * 48} L${120 - i * 18} ${160 - i * 24} Z`}
              fill="white" />
          </svg>
        ))}
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 720 }}>
          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32,
            animation: "fadeUp 0.6s ease forwards" }}>
            <div style={{ width: 32, height: 1.5, background: B.emerald }} />
            <span className="section-label" style={{ color: B.emeraldL, letterSpacing: "0.22em" }}>
              Operations Intelligence Platform
            </span>
          </div>

          {/* H1 */}
          <h1 className="cg" style={{
            fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
            fontWeight: 300, color: "#FFFFFF",
            lineHeight: 1.1, letterSpacing: "-0.02em",
            marginBottom: 28,
            animation: "fadeUp 0.7s ease 0.1s both",
          }}>
            Your Operations Are<br />
            <em style={{ fontStyle: "italic", color: B.emeraldL }}>Leaking Revenue</em>{" "}
            Daily.
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7, maxWidth: 580,
            marginBottom: 16,
            animation: "fadeUp 0.7s ease 0.2s both",
          }}>
            Most owners sense the problem exists. Few have the structured clarity to find it, measure it, and fix it permanently.
          </p>
          <p style={{
            fontSize: "0.92rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.6, maxWidth: 520,
            marginBottom: 48,
            animation: "fadeUp 0.7s ease 0.25s both",
            fontStyle: "italic",
          }}>
            Industry benchmark: 3-staff operations lose an average of $1,990/month to unstructured workflows.*
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "fadeUp 0.7s ease 0.3s both" }}>
            <button className="btn-gold" onClick={onBooking}
              style={{ fontSize: 14, padding: "16px 32px" }}>
              Book Free 45-Min Discovery Session
              <ChevronDivider color="white" size={14} />
            </button>
            <button className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.35)", padding: "14px 28px" }}
              onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}>
              Calculate Your Waste
            </button>
          </div>

          {/* Trust indicators */}
          <div style={{
            display: "flex", gap: 32, marginTop: 56, flexWrap: "wrap",
            animation: "fadeUp 0.7s ease 0.45s both",
          }}>
            {[
              { n: "$1,990", l: "Avg. monthly waste recovered*" },
              { n: "11 hrs", l: "Admin time saved per week" },
              { n: "91%", l: "Client retention post-Scan" },
            ].map(s => (
              <div key={s.n} style={{ borderLeft: `2px solid ${B.emerald}`, paddingLeft: 16 }}>
                <div className="cg" style={{ fontSize: "1.7rem", fontWeight: 600, color: "white", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p style={{ fontSize: "10.5px", color: "rgba(255,255,255,0.3)", marginTop: 32, fontStyle: "italic" }}>
            * Calculated based on standard operational averages including appointment no-shows, manual administrative overhead, and disconnected tool usage. Individual results vary by operation size and sector.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        animation: "pulse-soft 2.5s ease-in-out infinite" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="5" y="0" width="6" height="14" rx="3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          <rect x="7" y="3" width="2" height="4" rx="1" fill="rgba(255,255,255,0.5)" style={{ animation: "fadeUp 1.5s ease-in-out infinite" }} />
        </svg>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// POSITIONING STRIP — "What We Are NOT"
// ─────────────────────────────────────────────────────────
function PositioningStrip() {
  const [ref, inView] = useInView();
  const cols = [
    { icon: "✗", label: "Not a Software Vendor", desc: "We don't sell subscriptions or push new tools. We architect systems around what you already have.", no: true },
    { icon: "✗", label: "Not a Business Consultant", desc: "We don't write reports and leave. Implementation and accountability are non-negotiable deliverables.", no: true },
    { icon: "✗", label: "Not a Staffing Agency", desc: "We don't add headcount as the answer to structural problems. We remove the need for excess manual work.", no: true },
    { icon: "✓", label: "Your Operations Intelligence Partner", desc: "We map, build, implement, and stay accountable for measurable performance improvement.", no: false },
  ];
  return (
    <section ref={ref} style={{ background: B.smoke, padding: "64px 40px", borderBottom: `1px solid ${B.borderL}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-label">Category Clarity</span>
          <h2 className="cg" style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 400, color: B.navy, marginTop: 10 }}>
            Understand Precisely What WIPS Is — And Is Not.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {cols.map((c, i) => (
            <div key={c.label} style={{
              background: c.no ? "#FFFFFF" : B.navy,
              border: c.no ? `1px solid ${B.borderL}` : `2px solid ${B.navy}`,
              borderRadius: 8, padding: "28px 24px",
              opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: c.no ? "#FEE2E2" : B.emerald,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 700,
                color: c.no ? "#DC2626" : "white",
                marginBottom: 14,
              }}>{c.icon}</div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem", fontWeight: c.no ? 500 : 600,
                color: c.no ? B.navy : "white",
                marginBottom: 10, lineHeight: 1.3,
              }}>{c.label}</h3>
              <p style={{ fontSize: 13, color: c.no ? B.textT : "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// WASTE CALCULATOR
// ─────────────────────────────────────────────────────────
function WasteCalculator({ onBooking }) {
  const [ref, inView] = useInView();
  const [inputs, setInputs] = useState({
    staff: 3, revenue: 15000, adminHours: 24, noShowRate: 12, toolsMonthly: 800,
  });
  const [showResult, setShowResult] = useState(false);
  useEffect(() => { if (inView) setTimeout(() => setShowResult(true), 600); }, [inView]);

  const calc = useCallback(() => {
    const adminWaste = (inputs.adminHours * 4.33 * (inputs.revenue / (inputs.staff * 160))) * 0.38;
    const noShowWaste = (inputs.revenue * (inputs.noShowRate / 100)) * 0.65;
    const toolWaste = inputs.toolsMonthly * 0.45;
    const total = Math.round(adminWaste + noShowWaste + toolWaste);
    return {
      adminWaste: Math.round(adminWaste),
      noShowWaste: Math.round(noShowWaste),
      toolWaste: Math.round(toolWaste),
      total,
      annualTotal: total * 12,
      qualifies: total >= 500,
      low: Math.round(total * 0.75),
      high: Math.round(total * 1.35),
    };
  }, [inputs]);

  const result = calc();

  const update = (k, v) => setInputs(p => ({ ...p, [k]: v }));

  const pct = (part, total) => total > 0 ? Math.round((part / total) * 100) : 0;

  return (
    <section id="calculator" ref={ref} style={{ padding: "96px 40px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">Interactive ROI Tool</span>
          <div className="divider-accent" style={{ margin: "14px auto 16px" }} />
          <h2 className="cg" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 300, color: B.navy }}>
            Calculate Your Monthly Operational Waste
          </h2>
          <p style={{ color: B.textS, fontSize: "1rem", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.65 }}>
            Adjust the inputs to reflect your operation. The calculator applies sector benchmarks to estimate recoverable waste.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          {/* Inputs */}
          <div style={{ background: B.smoke, borderRadius: 12, padding: "36px 32px", border: `1px solid ${B.borderL}` }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 500, color: B.navy, marginBottom: 28 }}>
              Your Operation
            </h3>

            {[
              { key: "staff", label: "Number of Staff", min: 1, max: 50, step: 1, format: v => `${v} people`, desc: "Including full-time and part-time" },
              { key: "revenue", label: "Monthly Revenue (USD)", min: 2000, max: 200000, step: 1000, format: v => `$${v.toLocaleString()}`, desc: "Gross revenue, all services" },
              { key: "adminHours", label: "Admin Hours Per Week", min: 4, max: 80, step: 2, format: v => `${v} hrs/week`, desc: "Manual data entry, scheduling, follow-ups" },
              { key: "noShowRate", label: "Appointment No-Show Rate", min: 0, max: 40, step: 1, format: v => `${v}%`, desc: "% of booked appointments not attended" },
              { key: "toolsMonthly", label: "Software Subscriptions (USD/mo)", min: 100, max: 5000, step: 100, format: v => `$${v.toLocaleString()}/mo`, desc: "Total monthly tool spend" },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                  <label style={{ marginBottom: 0 }}>{f.label}</label>
                  <span className="mono" style={{ fontSize: 13, fontWeight: 600, color: B.navy }}>
                    {f.format(inputs[f.key])}
                  </span>
                </div>
                <input type="range" className="range-input"
                  min={f.min} max={f.max} step={f.step} value={inputs[f.key]}
                  onChange={e => update(f.key, Number(e.target.value))}
                  style={{ background: `linear-gradient(to right, ${B.navy} ${pct(inputs[f.key] - f.min, f.max - f.min)}%, #D1DCE8 ${pct(inputs[f.key] - f.min, f.max - f.min)}%)` }}
                />
                <p style={{ fontSize: "11px", color: B.textT, marginTop: 3 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Results */}
          <div>
            <div style={{
              background: showResult ? B.navy : "#F4F7FA",
              borderRadius: 12, padding: "36px 32px",
              border: `2px solid ${showResult ? B.navy : B.borderL}`,
              transition: "all 0.5s ease", marginBottom: 20,
            }}>
              {showResult ? (
                <>
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
                      Estimated Monthly Operational Waste
                    </div>
                    <div className="cg" style={{ fontSize: "3.8rem", fontWeight: 300, color: "#FFFFFF", lineHeight: 1, letterSpacing: "-0.02em" }}>
                      ${result.total.toLocaleString()}
                    </div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: 6 }}>
                      Confidence range: ${result.low.toLocaleString()} — ${result.high.toLocaleString()}/month
                    </div>
                  </div>

                  {/* Breakdown bars */}
                  {[
                    { label: "Administrative Overhead", value: result.adminWaste, color: B.emerald },
                    { label: "No-Show & Cancellation Loss", value: result.noShowWaste, color: B.gold },
                    { label: "Underutilized Tool Spend", value: result.toolWaste, color: "#8B9CF4" },
                  ].map(b => (
                    <div key={b.label} style={{ marginBottom: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)" }}>{b.label}</span>
                        <span className="mono" style={{ fontSize: "12px", color: "white", fontWeight: 600 }}>
                          ${b.value.toLocaleString()}
                        </span>
                      </div>
                      <div style={{ height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>
                        <div style={{
                          height: "100%", borderRadius: 2,
                          background: b.color,
                          width: `${pct(b.value, result.total)}%`,
                          transition: "width 0.6s ease",
                        }} />
                      </div>
                    </div>
                  ))}

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 18, marginTop: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>Annual Estimate</span>
                      <span className="cg" style={{ fontSize: "1.4rem", fontWeight: 500, color: B.emeraldL }}>
                        ${result.annualTotal.toLocaleString()}/year
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "32px 0", color: B.textT }}>
                  <div style={{ fontSize: "2rem", marginBottom: 12 }}>⟳</div>
                  <p>Calculating...</p>
                </div>
              )}
            </div>

            {/* Guarantee card */}
            <div style={{
              background: result.qualifies ? "#F0FDF6" : "#FFF7ED",
              border: `2px solid ${result.qualifies ? B.emeraldL : B.goldL}`,
              borderRadius: 8, padding: "20px 24px", marginBottom: 20,
            }}>
              {result.qualifies ? (
                <>
                  <div style={{ fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.14em", textTransform: "uppercase", color: B.emeraldD, marginBottom: 6 }}>
                    ✓ Qualifies for the $500 Guarantee
                  </div>
                  <p style={{ fontSize: "13px", color: B.textS, lineHeight: 1.6 }}>
                    <strong style={{ color: B.emeraldD }}>Our commitment:</strong> If our Operational Scan does not identify at least $500/month in recoverable waste from the first workflow we analyze — you pay nothing.
                  </p>
                </>
              ) : (
                <>
                  <div style={{ fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.14em", textTransform: "uppercase", color: B.gold, marginBottom: 6 }}>
                    Note on Your Inputs
                  </div>
                  <p style={{ fontSize: "13px", color: B.textS, lineHeight: 1.6 }}>
                    At this scale, the Discovery Session will confirm whether a full Scan would produce a positive return. We'll tell you clearly — no obligation either way.
                  </p>
                </>
              )}
            </div>

            <button className="btn-emerald" style={{ width: "100%", justifyContent: "center", padding: "15px 28px", fontSize: 14 }} onClick={onBooking}>
              Book Free Discovery Session — Verify These Numbers
              <ChevronDivider color="white" size={13} />
            </button>
            <p style={{ fontSize: "10.5px", color: B.textT, textAlign: "center", marginTop: 10, fontStyle: "italic" }}>
              * Results are industry benchmark estimates. Actual waste identified in your Scan will reflect your specific workflows.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #calculator > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// APPROACH / METHODOLOGY
// ─────────────────────────────────────────────────────────
function Approach({ onBooking }) {
  const [ref, inView] = useInView();
  const phases = [
    {
      num: "01", phase: "Discovery Session", time: "45 Minutes · Free",
      color: B.emerald, bg: "#F0FDF6",
      title: "Surface the Three Largest Gaps",
      desc: "A structured 45-minute operational diagnostic. We identify your three highest-cost workflow failures, calculate their monthly impact, and determine whether the Operational Scan would deliver measurable ROI for your business.",
      deliverable: "Preliminary waste estimate + specific workflow priorities",
      icon: "⌖",
    },
    {
      num: "02", phase: "Operational Scan", time: "30 Days · $500/task",
      color: B.navy, bg: "#EFF4FA",
      title: "Map, Score, and Quantify Everything",
      desc: "Four-week deep-dive audit. We shadow every manual task, interview every relevant staff member, score automation potential, and calculate the monthly cost of each inefficiency. Week 4 delivers the branded WIPS Scan report.",
      deliverable: "Full workflow cost map + prioritized automation blueprint",
      icon: "▤",
      guarantee: "Guarantee: if first workflow doesn't show $500+/mo waste — you pay nothing.",
    },
    {
      num: "03", phase: "Build System", time: "3 Days – 8 Weeks",
      color: B.gold, bg: "#FFFBEB",
      title: "Precision Implementation",
      desc: "We design, build, and deploy workflow automations in four tiers — from simple single-step triggers ($800–$1,500) to full operational intelligence architectures ($8,000+). Every build includes a 30-day performance report with revision guarantee.",
      deliverable: "Live automations + performance dashboards + team training",
      icon: "⬡",
    },
    {
      num: "04", phase: "Intelligence Partnership", time: "Ongoing Retainer",
      color: "#7C3AED", bg: "#F5F3FF",
      title: "Embedded. Accountable. Permanent.",
      desc: "Monthly performance reviews, continuous workflow optimization, quarterly strategic briefings, and expansion readiness support. We remain present until performance compounds — quarter by quarter, measurably and documentably.",
      deliverable: "Quarterly ROI reports + live optimization + expansion support",
      icon: "◎",
    },
  ];

  return (
    <section id="approach" ref={ref} style={{ padding: "96px 40px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", marginBottom: 64 }}>
          <div>
            <span className="section-label">The Methodology</span>
            <div className="divider-accent" style={{ margin: "14px 0 18px" }} />
            <h2 className="cg" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: B.navy, lineHeight: 1.15 }}>
              Four Phases.<br />
              <em style={{ fontStyle: "italic" }}>One Standard:</em><br />
              Measurable Outcomes.
            </h2>
          </div>
          <div style={{ paddingTop: 12 }}>
            <p style={{ fontSize: "1.05rem", color: B.textS, lineHeight: 1.75, marginBottom: 20 }}>
              Every WIPS engagement follows the same four-phase architecture. The sequence is non-negotiable — because the methodology is what separates a diagnosis from lasting operational improvement.
            </p>
            <p style={{ fontSize: "0.9rem", color: B.textT, lineHeight: 1.7 }}>
              We do not arrive with a framework. We arrive with forensic attention, structured questions, and a mandate to find what your operation is costing you — and then fix it.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 24 }}>
          {phases.map((p, i) => (
            <div key={p.num} style={{
              background: "#FFFFFF", border: `1px solid ${B.borderL}`,
              borderTop: `3px solid ${p.color}`, borderRadius: 8,
              padding: "28px 24px",
              opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <div className="mono" style={{ fontSize: "10px", color: p.color, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 4 }}>
                    Phase {p.num}
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 600, color: B.navy }}>{p.phase}</div>
                </div>
                <span style={{ fontSize: "22px" }}>{p.icon}</span>
              </div>
              <div className="mono" style={{ fontSize: "10px", background: p.bg, color: p.color, padding: "4px 10px", borderRadius: 20, display: "inline-block", marginBottom: 14, fontWeight: 600 }}>
                {p.time}
              </div>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: B.navy, marginBottom: 10 }}>{p.title}</h4>
              <p style={{ fontSize: "13px", color: B.textS, lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
              <div style={{ borderTop: `1px solid ${B.borderL}`, paddingTop: 12 }}>
                <div style={{ fontSize: "10.5px", color: p.color, fontWeight: 600, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Deliverable</div>
                <div style={{ fontSize: "12px", color: B.textT }}>{p.deliverable}</div>
              </div>
              {p.guarantee && (
                <div style={{ background: "#F0FDF6", border: `1px solid ${B.emeraldL}`, borderRadius: 4, padding: "8px 12px", marginTop: 12 }}>
                  <div style={{ fontSize: "11px", color: B.emeraldD, fontWeight: 600 }}>{p.guarantee}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button className="btn-primary" onClick={onBooking} style={{ padding: "15px 36px" }}>
            Start With a Free Discovery Session
          </button>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #approach > div > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// INDUSTRIES SECTION
// ─────────────────────────────────────────────────────────
function Industries({ onBooking }) {
  const [active, setActive] = useState(0);
  const industries = [
    {
      id: "dental", label: "Dental Clinics", icon: "⚕",
      tag: "Current Focus", tagColor: B.emerald,
      h: "Dental Operations Are Uniquely Complex. And Uniquely Improvable.",
      stats: [{ n: "34%", l: "Avg. no-show reduction after automation" }, { n: "11 hrs", l: "Weekly admin time eliminated" }, { n: "3×", l: "Faster patient journey completion" }],
      workflows: ["Appointment confirmation + follow-up automation", "New patient intake & digital forms", "Insurance claim pre-authorization workflow", "Review request automation post-appointment", "Treatment plan follow-up sequences"],
      quote: "Three months after engaging WIPS, our clinic recovered 11 hours of administrative time per week and reduced no-shows by 34%. The numbers were real, and they appeared within weeks.",
      attr: "Medical Director, Multi-Branch Dental Group",
      waste: "$2,140",
    },
    {
      id: "realestate", label: "Real Estate Agencies", icon: "🏢",
      h: "Every Unstructured Listing Cycle Is Revenue You Cannot Recover.",
      stats: [{ n: "22%", l: "Revenue per agent improvement" }, { n: "8 hrs", l: "Weekly admin per agent eliminated" }, { n: "100%", l: "Pipeline visibility achieved" }],
      workflows: ["Lead qualification & CRM entry automation", "Listing document generation workflow", "Client communication sequences", "Viewing coordination & reminder system", "Commission calculation & reporting"],
      quote: "I had convinced myself the problem was staffing. WIPS showed me within 30 days that the problem was structure — specifically four workflows absorbing time and producing errors simultaneously.",
      attr: "Managing Director, Real Estate Agency",
      waste: "$1,830",
    },
    {
      id: "fitness", label: "Multi-Branch Gyms", icon: "◈",
      h: "Member Retention Is an Operations Problem, Not a Marketing One.",
      stats: [{ n: "28%", l: "Member churn reduction" }, { n: "15 hrs", l: "Weekly manual tasks eliminated" }, { n: "Real-time", l: "Multi-branch performance visibility" }],
      workflows: ["Membership renewal & at-risk member alerts", "Class booking & waitlist automation", "Personal trainer scheduling optimization", "Cross-branch performance dashboard", "New member onboarding sequences"],
      quote: "Our multi-branch operation had no coherent performance view. WIPS built dashboards that showed us, for the first time, which location was performing and why.",
      attr: "Operations Director, Fitness Group",
      waste: "$2,380",
    },
    {
      id: "ngo", label: "NGOs & Non-Profits", icon: "⊗",
      h: "Every Hour Spent on Administration Is an Hour Not Spent on Impact.",
      stats: [{ n: "40%", l: "Reduction in program admin overhead" }, { n: "18 hrs", l: "Weekly reporting time recovered" }, { n: "100%", l: "Donor reporting accuracy" }],
      workflows: ["Beneficiary tracking & program reporting", "Donor communication & acknowledgement", "Grant compliance documentation workflow", "Staff timesheet & project allocation", "Impact data collection & visualization"],
      quote: "WIPS is unlike any advisory engagement I've experienced. They remained present until the automations were live and my team could operate the system independently.",
      attr: "Operations Director, Regional NGO",
      waste: "$1,760",
    },
    {
      id: "logistics", label: "Logistics Operations", icon: "⬡",
      h: "Operational Inefficiency in Logistics Compounds Every Delivery.",
      stats: [{ n: "19%", l: "On-time delivery rate improvement" }, { n: "12 hrs", l: "Dispatch admin time eliminated" }, { n: "Zero", l: "Manual status update calls required" }],
      workflows: ["Automated dispatch & route notification", "Driver check-in & delivery confirmation", "Client status update automation", "Invoice generation on delivery completion", "Exception handling & delay communication"],
      quote: "Operational precision in our sector is revenue. WIPS built the workflow intelligence that turned our dispatch from reactive to structured — and the numbers followed.",
      attr: "General Manager, Regional Logistics Operator",
      waste: "$2,650",
    },
  ];
  const ind = industries[active];

  return (
    <section id="industries" style={{ padding: "96px 40px", background: B.smoke }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-label">Sector Coverage</span>
          <div className="divider-accent" style={{ margin: "14px auto 16px" }} />
          <h2 className="cg" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 300, color: B.navy }}>
            We Know Your Industry's Operational Patterns.
          </h2>
          <p style={{ color: B.textS, maxWidth: 480, margin: "12px auto 0", fontSize: "0.95rem", lineHeight: 1.65 }}>
            The methodology is consistent. The application is sector-specific.
          </p>
        </div>

        {/* Industry tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40, justifyContent: "center" }}>
          {industries.map((ind, i) => (
            <button key={ind.id} onClick={() => setActive(i)} style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 18px", borderRadius: 40,
              background: active === i ? B.navy : "#FFFFFF",
              color: active === i ? "white" : B.textS,
              border: `1.5px solid ${active === i ? B.navy : B.borderL}`,
              fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: active === i ? 600 : 400,
              cursor: "pointer", transition: "all 0.2s",
            }}>
              {ind.label}
              {ind.tag && <span style={{ fontSize: "9px", background: B.emerald, color: "white", padding: "2px 7px", borderRadius: 20, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{ind.tag}</span>}
            </button>
          ))}
        </div>

        {/* Industry content */}
        <div key={ind.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, animation: "fadeIn 0.4s ease" }}>
          <div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: B.navy, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "white" }}>
                {ind.icon}
              </div>
              <div>
                <div className="section-label">{ind.label}</div>
                <div className="mono" style={{ fontSize: 10, color: B.textT }}>Average monthly waste benchmark: {ind.waste}</div>
              </div>
            </div>
            <h3 className="cg" style={{ fontSize: "clamp(1.4rem,2.5vw,1.8rem)", fontWeight: 400, color: B.navy, lineHeight: 1.25, marginBottom: 20 }}>
              {ind.h}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 28 }}>
              {ind.stats.map(s => (
                <div key={s.n} style={{ background: "#FFFFFF", border: `1px solid ${B.borderL}`, borderRadius: 6, padding: "14px 12px", textAlign: "center" }}>
                  <div className="cg" style={{ fontSize: "1.5rem", fontWeight: 600, color: B.navy }}>{s.n}</div>
                  <div style={{ fontSize: "11px", color: B.textT, lineHeight: 1.4, marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
            {/* Testimonial */}
            <div style={{ background: B.navy, borderRadius: 8, padding: "20px 24px" }}>
              <div style={{ fontSize: "20px", color: B.emeraldL, marginBottom: 8, fontFamily: "Georgia" }}>"</div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.65, marginBottom: 12 }}>
                {ind.quote}
              </p>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{ind.attr}</div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: B.textT, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18 }}>
              Highest-ROI Workflows We Automate
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {ind.workflows.map((w, i) => (
                <div key={w} style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  background: "#FFFFFF", border: `1px solid ${B.borderL}`,
                  borderLeft: `3px solid ${i === 0 ? B.emerald : i === 1 ? B.navy : B.gold}`,
                  borderRadius: 6, padding: "12px 16px",
                }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: i === 0 ? B.emerald : i === 1 ? B.navy : B.gold,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "9px", fontWeight: 700, color: "white", flexShrink: 0, marginTop: 1,
                  }}>{i + 1}</div>
                  <span style={{ fontSize: "13px", color: B.text, lineHeight: 1.5 }}>{w}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={onBooking}>
              Get a Free {ind.label} Discovery Session
            </button>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #industries > div > div:last-child > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// 12-MONTH ROADMAP
// ─────────────────────────────────────────────────────────
function Roadmap() {
  const [ref, inView] = useInView(0.1);
  const milestones = [
    { m: "Month 0", label: "Discovery Session", desc: "Free 45-min diagnostic. Three gaps identified. Waste estimated.", icon: "⌖", color: B.emerald },
    { m: "Month 1", label: "Operational Scan", desc: "Shadow, map, and score every workflow. Full cost map delivered at day 30.", icon: "▤", color: B.navy },
    { m: "Month 1–2", label: "Tier 1 Builds", desc: "Highest-ROI single-step automations live. First measurable time recovery.", icon: "⬡", color: B.gold },
    { m: "Month 2–3", label: "Tier 2 Builds", desc: "Cross-platform workflow connections. Performance dashboards operational.", icon: "◎", color: "#7C3AED" },
    { m: "Month 3", label: "First Performance Report", desc: "30-day post-deployment metrics. Hours recovered. Revenue protected.", icon: "◑", color: B.emeraldD },
    { m: "Month 4–6", label: "Advanced Builds", desc: "Complex multi-system architectures if required. Full automation coverage.", icon: "⊡", color: B.navyL },
    { m: "Month 6", label: "Mid-Year Strategic Review", desc: "Full ROI analysis. Next phase planning. Expansion readiness assessment.", icon: "★", color: B.gold },
    { m: "Month 7–12", label: "Partnership & Optimization", desc: "Continuous improvement, new workflow requests, quarterly reporting. Performance compounds.", icon: "∞", color: B.emerald },
  ];
  return (
    <section style={{ padding: "96px 40px", background: B.navyD, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20Z'/%3E%3C/g%3E%3C/svg%3E")` }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label" style={{ color: B.emeraldL }}>Engagement Timeline</span>
          <div style={{ width: 48, height: 2, background: `linear-gradient(90deg, ${B.emerald}, transparent)`, margin: "14px auto 18px" }} />
          <h2 className="cg" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 300, color: "white" }}>
            The 12-Month Operational Transformation
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 480, margin: "12px auto 0", fontSize: "0.95rem", lineHeight: 1.65 }}>
            From first conversation to operational intelligence — a structured, accountable timeline with measurable checkpoints.
          </p>
        </div>

        <div ref={ref} style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: "50%", top: 0, bottom: 0,
            width: 2, background: `linear-gradient(to bottom, ${B.emerald}, ${B.navy}60)`,
            transform: "translateX(-50%)",
          }} className="hide-mobile" />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>
            {milestones.map((m, i) => (
              <div key={m.m} style={{
                gridColumn: i % 2 === 0 ? 1 : 2,
                padding: "0 0 36px",
                textAlign: i % 2 === 0 ? "right" : "left",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : `translateX(${i % 2 === 0 ? -20 : 20}px)`,
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: i % 2 === 0 ? "flex-end" : "flex-start", marginBottom: 8 }}>
                  <div className="mono" style={{ fontSize: "9px", color: m.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>{m.m}</div>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: m.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", flexShrink: 0 }}>
                    {m.icon}
                  </div>
                </div>
                <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", fontWeight: 600, color: "white", marginBottom: 6 }}>{m.label}</h4>
                <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #roadmap-grid { grid-template-columns: 1fr !important; } #roadmap-grid > div { text-align: left !important; grid-column: 1 !important; padding-left: 20px !important; border-left: 2px solid ${B.emerald} !important; } }`}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// INSIGHTS SECTION
// ─────────────────────────────────────────────────────────
function Insights({ onBooking }) {
  const insights = [
    {
      type: "The WIPS Brief", time: "4 min read", label: "Operations",
      title: "Why Your Admin Hours Are the Wrong Metric",
      desc: "Most operators count the hours their team spends on administrative tasks. The correct metric is the cost of those hours against the revenue they prevent generating.",
      color: B.emerald,
    },
    {
      type: "Field Note", time: "7 min read", label: "Dental · Case Study",
      title: "How a 3-Chair Clinic Recovered $2,140/Month in 30 Days",
      desc: "An anonymized post-mortem of a WIPS Operational Scan engagement. What we found, what we built, and what the numbers showed at day 30.",
      color: B.navy,
    },
    {
      type: "Operations Report", time: "12 min read", label: "MENA Market",
      title: "The State of SME Operations in Lebanon and Jordan",
      desc: "Aggregated findings from 24 operational audits conducted across Lebanon, Jordan, and Oman in Q4 2025. Pattern analysis, sector benchmarks, and recovery opportunity data.",
      color: B.gold,
    },
  ];
  return (
    <section id="insights" style={{ padding: "96px 40px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
          <div>
            <span className="section-label">Operational Intelligence</span>
            <div className="divider-accent" style={{ margin: "14px 0 0" }} />
            <h2 className="cg" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 300, color: B.navy, marginTop: 14 }}>
              No Theory. No Filler.
            </h2>
          </div>
          <p style={{ maxWidth: 340, color: B.textS, fontSize: "0.9rem", lineHeight: 1.7 }}>
            Every article is built from real operational data — workflows audited, waste quantified, automations deployed, and results measured across WIPS client engagements.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 24 }}>
          {insights.map((ins, i) => (
            <div key={ins.title} className="card" style={{ overflow: "hidden" }}>
              <div style={{ height: 4, background: ins.color }} />
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span className="mono" style={{ fontSize: "9px", background: ins.color, color: "white", padding: "3px 10px", borderRadius: 20, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {ins.type}
                  </span>
                  <span style={{ fontSize: "11px", color: B.textT }}>{ins.time}</span>
                </div>
                <div className="mono" style={{ fontSize: "9px", color: ins.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>{ins.label}</div>
                <h3 className="cg" style={{ fontSize: "1.25rem", fontWeight: 500, color: B.navy, lineHeight: 1.3, marginBottom: 12 }}>{ins.title}</h3>
                <p style={{ fontSize: "13px", color: B.textS, lineHeight: 1.7 }}>{ins.desc}</p>
              </div>
              <div style={{ padding: "0 24px 20px" }}>
                <button style={{
                  background: "none", border: "none", cursor: "pointer", padding: 0,
                  fontFamily: "'Outfit',sans-serif", fontSize: "13px", fontWeight: 600,
                  color: ins.color, display: "flex", alignItems: "center", gap: 6,
                }}>
                  Read →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ fontSize: "12px", color: B.textT, fontStyle: "italic", marginBottom: 16 }}>
            Updated when we have something worth saying. Not on a content calendar.
          </p>
          <button className="btn-outline" onClick={onBooking}>
            The Content Is Useful. Start an Engagement.
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SOCIAL PROOF
// ─────────────────────────────────────────────────────────
function SocialProof() {
  const [ref, inView] = useInView(0.2);
  return (
    <section style={{ padding: "80px 40px", background: B.smoke, borderTop: `1px solid ${B.borderL}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">Measured Outcomes</span>
          <div className="divider-accent" style={{ margin: "14px auto 18px" }} />
          <h2 className="cg" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 300, color: B.navy }}>
            Not Managed Expectations. Documented Results.
          </h2>
        </div>

        {/* Stats row */}
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 24, marginBottom: 56 }}>
          {[
            { end: 1990, pre: "$", suf: "", l: "Average monthly waste recovered", sub: "First 30 days*" },
            { end: 11, pre: "", suf: " hrs", l: "Admin time saved per week", sub: "Phase 1 engagement" },
            { end: 91, pre: "", suf: "%", l: "Client retention post-Scan", sub: "Since inception" },
            { end: 34, pre: "", suf: "%", l: "Average no-show reduction", sub: "Dental sector clients" },
          ].map((s, i) => (
            <div key={s.l} style={{
              background: "#FFFFFF", border: `1px solid ${B.borderL}`, borderTop: `3px solid ${B.navy}`,
              borderRadius: 8, padding: "24px 20px", textAlign: "center",
              opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
            }}>
              <div className="cg" style={{ fontSize: "2.4rem", fontWeight: 300, color: B.navy, lineHeight: 1 }}>
                {inView ? <AnimCounter end={s.end} prefix={s.pre} suffix={s.suf} /> : `${s.pre}0${s.suf}`}
              </div>
              <div style={{ fontSize: "12.5px", color: B.textS, lineHeight: 1.5, margin: "10px 0 6px" }}>{s.l}</div>
              <div className="mono" style={{ fontSize: "9px", color: B.textT, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {[
            {
              q: "The WIPS Scan report was the first time I had seen my own operation documented with this level of precision. Not what I thought we were doing — what we were actually doing, and what each process cost per month. That document alone changed how I run the business.",
              a: "Medical Director, Multi-Branch Dental Network",
              l: "Lebanon",
              c: B.emerald,
            },
            {
              q: "We went through all four phases over six months. By Phase 3, our operations team was running on documented systems for the first time in the company's history. Revenue per staff member improved by 22 percent in the twelve months following Phase 2.",
              a: "General Manager, Regional Logistics Operator",
              l: "Oman",
              c: B.navy,
            },
            {
              q: "I booked the session with low expectations. The WIPS session was structured, specific, and produced three findings about my operation that I had not been able to articulate in two years of running the business. I signed the Operational Scan agreement the same afternoon.",
              a: "Owner, Multi-Branch Dental Clinic",
              l: "Beirut, Lebanon",
              c: B.gold,
            },
          ].map(t => (
            <div key={t.a} style={{
              background: "#FFFFFF", border: `1px solid ${B.borderL}`,
              borderLeft: `3px solid ${t.c}`, borderRadius: 8, padding: "24px",
            }}>
              <div className="cg" style={{ fontSize: "28px", color: t.c, lineHeight: 1, marginBottom: 8 }}>"</div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.05rem", fontStyle: "italic", color: B.text, lineHeight: 1.7, marginBottom: 16 }}>{t.q}</p>
              <div style={{ borderTop: `1px solid ${B.borderL}`, paddingTop: 12 }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: B.navy }}>{t.a}</div>
                <div className="mono" style={{ fontSize: "10px", color: B.textT, marginTop: 2 }}>{t.l}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "10.5px", color: B.textT, textAlign: "center", marginTop: 24, fontStyle: "italic" }}>
          * Industry benchmark for 3-staff operations. Calculated based on standard operational averages (no-shows, manual admin, underutilized tools). Individual engagement results vary.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// RISK REVERSAL / GUARANTEE
// ─────────────────────────────────────────────────────────
function Guarantee({ onBooking }) {
  return (
    <section style={{
      padding: "80px 40px",
      background: `linear-gradient(135deg, ${B.navyD} 0%, #1A4A35 100%)`,
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 72, height: 72, borderRadius: "50%",
          background: `rgba(42,157,111,0.15)`, border: `2px solid ${B.emerald}`,
          fontSize: "28px", marginBottom: 24,
        }}>◎</div>
        <span className="section-label" style={{ color: B.emeraldL, display: "block", marginBottom: 16 }}>The WIPS Guarantee</span>
        <h2 className="cg" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 300, color: "white", marginBottom: 20, lineHeight: 1.2 }}>
          If We Don't Find <em style={{ fontStyle: "italic", color: B.emeraldL }}>$500/Month</em> in Recoverable Waste From the First Workflow — Your Scan Is Free.
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 36px" }}>
          This is not a marketing position. It is a structural accountability clause in every engagement we take. We have one standard: results that you can measure. If the first workflow we analyze does not demonstrate at least $500 per month in recoverable waste, we invoice you nothing.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-gold" onClick={onBooking}>
            Hold Us to That Standard
          </button>
          <button className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.35)" }}
            onClick={() => document.getElementById("approach")?.scrollIntoView({ behavior: "smooth" })}>
            See the Full Methodology
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// DISCOVERY BOOKING FORM
// ─────────────────────────────────────────────────────────
function BookingForm({ onClose, isModal = false }) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "", email: "", phone: "", company: "", role: "", industry: "", staff: "", revenue: "", challenge: "", source: "",
  });
  const upd = (k, v) => setData(p => ({ ...p, [k]: v }));

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const industries = ["Dental / Medical Clinic", "Real Estate Agency", "Fitness / Gym", "NGO / Non-Profit", "Logistics & Distribution", "Professional Services", "Other"];
  const staffRanges = ["1–5 people", "6–15 people", "16–50 people", "51–150 people", "150+ people"];
  const revenues = ["Under $5,000/mo", "$5,000–$20,000/mo", "$20,000–$80,000/mo", "$80,000–$250,000/mo", "Over $250,000/mo"];

  const FieldRow = ({ label, children, required }) => (
    <div style={{ marginBottom: 18 }}>
      <label style={{ marginBottom: 6 }}>{label}{required && <span style={{ color: B.emerald }}> *</span>}</label>
      {children}
    </div>
  );

  const Select = ({ value, onChange, opts, placeholder }) => (
    <select value={value} onChange={e => onChange(e.target.value)} style={{ color: value ? B.text : "#A0AEC0" }}>
      <option value="" disabled>{placeholder}</option>
      {opts.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "48px 32px" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#F0FDF6", border: `2px solid ${B.emerald}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, margin: "0 auto 20px" }}>✓</div>
        <h2 className="cg" style={{ fontSize: "1.9rem", fontWeight: 400, color: B.navy, marginBottom: 14 }}>Session Confirmed</h2>
        <p style={{ fontSize: "1rem", color: B.textS, lineHeight: 1.7, maxWidth: 420, margin: "0 auto 10px" }}>
          Your Discovery Session request has been received. You will receive a calendar invite within 24 hours.
        </p>
        <p style={{ fontSize: "0.875rem", color: B.textT, lineHeight: 1.65, maxWidth: 400, margin: "0 auto 28px", fontStyle: "italic" }}>
          The session is structured, 45 minutes, and produces findings whether or not you proceed to a full engagement.
        </p>
        {isModal && <button className="btn-outline" onClick={onClose}>Close</button>}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 580, margin: "0 auto" }}>
      {/* Progress */}
      <div style={{ display: "flex", gap: 6, marginBottom: 32 }}>
        {[1, 2, 3].map(s => (
          <div key={s} style={{ flex: 1, height: 3, borderRadius: 2, background: step >= s ? B.navy : B.borderL, transition: "background 0.3s" }} />
        ))}
      </div>
      <div className="mono" style={{ fontSize: "10px", color: B.textT, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>Step {step} of 3</div>

      {step === 1 && (
        <div style={{ animation: "fadeIn 0.35s ease" }}>
          <h3 className="cg" style={{ fontSize: "1.5rem", fontWeight: 400, color: B.navy, marginBottom: 6 }}>Your Contact Information</h3>
          <p style={{ fontSize: "13px", color: B.textT, marginBottom: 28, lineHeight: 1.6 }}>No pitch. No obligation. Forty-five minutes of operational clarity.</p>
          <FieldRow label="Full Name" required>
            <input type="text" value={data.name} onChange={e => upd("name", e.target.value)} placeholder="e.g. Karim Mansour" />
          </FieldRow>
          <FieldRow label="Business Email" required>
            <input type="email" value={data.email} onChange={e => upd("email", e.target.value)} placeholder="karim@yourclinic.com" />
          </FieldRow>
          <FieldRow label="Phone Number">
            <input type="tel" value={data.phone} onChange={e => upd("phone", e.target.value)} placeholder="+961 70 000 000" />
          </FieldRow>
          <button className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}
            onClick={() => { if (data.name && data.email) setStep(2); }}
            disabled={!data.name || !data.email}>
            Continue → Operational Context
          </button>
        </div>
      )}

      {step === 2 && (
        <div style={{ animation: "fadeIn 0.35s ease" }}>
          <h3 className="cg" style={{ fontSize: "1.5rem", fontWeight: 400, color: B.navy, marginBottom: 6 }}>Your Organization</h3>
          <p style={{ fontSize: "13px", color: B.textT, marginBottom: 28, lineHeight: 1.6 }}>This helps us prepare sector-specific questions for your session.</p>
          <FieldRow label="Company / Organization Name" required>
            <input type="text" value={data.company} onChange={e => upd("company", e.target.value)} placeholder="Your organization name" />
          </FieldRow>
          <FieldRow label="Your Role">
            <input type="text" value={data.role} onChange={e => upd("role", e.target.value)} placeholder="e.g. Managing Director, Owner" />
          </FieldRow>
          <FieldRow label="Industry / Sector" required>
            <Select value={data.industry} onChange={v => upd("industry", v)} opts={industries} placeholder="Select your sector" />
          </FieldRow>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <FieldRow label="Team Size">
              <Select value={data.staff} onChange={v => upd("staff", v)} opts={staffRanges} placeholder="Staff count" />
            </FieldRow>
            <FieldRow label="Monthly Revenue">
              <Select value={data.revenue} onChange={v => upd("revenue", v)} opts={revenues} placeholder="Revenue range" />
            </FieldRow>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
            <button className="btn-outline" onClick={() => setStep(1)}>← Back</button>
            <button className="btn-primary" style={{ justifyContent: "center" }}
              onClick={() => { if (data.company && data.industry) setStep(3); }}
              disabled={!data.company || !data.industry}>
              Continue →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div style={{ animation: "fadeIn 0.35s ease" }}>
          <h3 className="cg" style={{ fontSize: "1.5rem", fontWeight: 400, color: B.navy, marginBottom: 6 }}>The Operational Picture</h3>
          <p style={{ fontSize: "13px", color: B.textT, marginBottom: 28, lineHeight: 1.6 }}>One question. Be specific — this is what makes the session productive.</p>
          <FieldRow label="Describe your busiest operational challenge in one paragraph" required>
            <textarea value={data.challenge} onChange={e => upd("challenge", e.target.value)}
              placeholder="e.g. We manage appointments manually, have high no-show rates, and our billing system doesn't communicate with our scheduling tool. By end of month we can't tell what we actually produced versus what was missed..."
              style={{ minHeight: 110, resize: "vertical", lineHeight: 1.65 }}
            />
          </FieldRow>
          <FieldRow label="How did you hear about WIPS?">
            <Select value={data.source} onChange={v => upd("source", v)}
              opts={["LinkedIn", "Google Search", "Referral from a colleague", "WIPS content / article", "Other"]}
              placeholder="Optional" />
          </FieldRow>
          {/* Disclaimer */}
          <div style={{ background: B.smoke, border: `1px solid ${B.borderL}`, borderRadius: 6, padding: "12px 16px", marginBottom: 20 }}>
            <p style={{ fontSize: "11.5px", color: B.textT, lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: B.navy }}>What happens next:</strong> We review your submission within one business day. If your operation qualifies for the Discovery Session, you will receive a calendar invite within 24 hours. If it does not, we will tell you directly and point you to the most useful resources for your current stage.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 12 }}>
            <button className="btn-outline" onClick={() => setStep(2)}>← Back</button>
            <button className="btn-gold" onClick={handleSubmit} disabled={!data.challenge || submitting}
              style={{ justifyContent: "center" }}>
              {submitting ? (
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "inline-block", width: 14, height: 14, border: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid white", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                  Submitting…
                </span>
              ) : "Book My Discovery Session →"}
            </button>
          </div>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// BOOKING MODAL
// ─────────────────────────────────────────────────────────
function BookingModal({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(15,30,53,0.85)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "20px", animation: "fadeIn 0.25s ease",
    }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: "#FFFFFF", borderRadius: 12, width: "100%", maxWidth: 640,
        maxHeight: "92vh", overflow: "auto",
        boxShadow: "0 40px 80px rgba(0,0,0,0.35)",
        animation: "fadeUp 0.35s ease",
      }}>
        {/* Modal header */}
        <div style={{
          background: B.navy, padding: "24px 32px",
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          borderRadius: "12px 12px 0 0",
        }}>
          <div>
            <div className="section-label" style={{ color: B.emeraldL, marginBottom: 6 }}>Free · No Obligation · 45 Minutes</div>
            <h2 className="cg" style={{ fontSize: "1.55rem", fontWeight: 300, color: "white" }}>
              Book Your Operational Discovery Session
            </h2>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", padding: 4, fontSize: 20, lineHeight: 1 }}>✕</button>
        </div>
        <div style={{ padding: "36px 32px" }}>
          <BookingForm onClose={onClose} isModal />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// INLINE BOOKING SECTION
// ─────────────────────────────────────────────────────────
function BookingSection() {
  return (
    <section id="book" style={{ padding: "96px 40px", background: B.smoke }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <span className="section-label">Start Here</span>
          <div className="divider-accent" style={{ margin: "14px 0 20px" }} />
          <h2 className="cg" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 300, color: B.navy, lineHeight: 1.2, marginBottom: 20 }}>
            Forty-Five Minutes.<br />
            <em style={{ fontStyle: "italic" }}>Complete</em> Operational Clarity.
          </h2>
          <p style={{ fontSize: "1rem", color: B.textS, lineHeight: 1.75, marginBottom: 28 }}>
            The Discovery Session surfaces the three largest operational gaps in your business, calculates their monthly cost, and determines whether a WIPS engagement would generate a measurable return.
          </p>
          <p style={{ fontSize: "0.92rem", color: B.textS, lineHeight: 1.75, marginBottom: 32 }}>
            No pitch. No sales presentation. No obligation.
          </p>
          {[
            { icon: "◎", label: "Three gaps identified and quantified in the session itself" },
            { icon: "⊡", label: "Specific workflow priorities based on your sector and scale" },
            { icon: "✓", label: "Clear recommendation: proceed, wait, or pursue different support" },
            { icon: "⌖", label: "Free — whether or not you engage us afterward" },
          ].map(f => (
            <div key={f.label} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
              <span style={{ color: B.emerald, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{f.icon}</span>
              <span style={{ fontSize: "14px", color: B.textS, lineHeight: 1.6 }}>{f.label}</span>
            </div>
          ))}
          <div style={{ marginTop: 36, padding: "18px 20px", background: "#FFFFFF", border: `1px solid ${B.borderL}`, borderLeft: `3px solid ${B.gold}`, borderRadius: "0 6px 6px 0" }}>
            <div className="mono" style={{ fontSize: "9px", color: B.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>Availability Notice</div>
            <p style={{ fontSize: "12.5px", color: B.textT, lineHeight: 1.65, margin: 0 }}>
              WIPS accepts a limited number of new Discovery Sessions per month. Sessions are available to qualifying SME operators with 10 or more employees.
            </p>
          </div>
        </div>
        <div style={{ background: "#FFFFFF", borderRadius: 12, padding: "40px 36px", border: `1px solid ${B.borderL}`, boxShadow: "0 8px 40px rgba(27,54,93,0.08)" }}>
          <BookingForm />
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #book > div { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// FAQ SECTION
// ─────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: "Is the Discovery Session genuinely free?",
      a: "Yes. The 45-minute session carries no cost, no obligation, and no follow-up unless you choose to proceed. You receive a preliminary waste estimate, a list of your three highest-ROI workflow priorities, and an honest recommendation on whether a full Scan would produce a positive return for your specific operation."
    },
    {
      q: "Why not hire an internal operations manager instead?",
      a: "An internal hire builds capability over time — typically 6–12 months before they redesign anything. WIPS delivers operational intelligence from day one, with diagnostic methodology, sector-specific workflow experience, and implementation accountability. When the engagement concludes, your internal team inherits a documented, functioning system — not a dependency."
    },
    {
      q: "We already use software. Why isn't that enough?",
      a: "Software does not redesign your workflows. It digitizes the ones you already have — including the inefficient ones. Most WIPS clients are using 30–40% of their software's capability. The problem is not the tool. We architect the system that makes your existing software perform at its potential and automate what has been done manually by habit rather than necessity."
    },
    {
      q: "What makes WIPS different from a management consultant?",
      a: "A consultant diagnoses and recommends. WIPS diagnoses, builds, and stays accountable for the result. The structural difference is implementation. Traditional advisory firms are not resourced or incentivized to execute. WIPS builds the workflows, deploys the automations, and measures performance after delivery. If a build underperforms its projection, we correct it at no additional cost."
    },
    {
      q: "How long before we see measurable results?",
      a: "Week four of Phase 1: your Scan report quantifies every identified inefficiency. You have measurable findings before a single automation is built. Weeks 6–7: first Tier 1 automations are live. You see time and cost recovery within days of deployment. The compounding effect of a structured operational system takes 3–6 months to fully materialize — but initial wins happen in the first 30 days."
    },
    {
      q: "What is the $500 guarantee exactly?",
      a: "If the first workflow we analyze in the Operational Scan does not demonstrate at least $500 per month in recoverable waste, we invoice you nothing for that task. This is a structural accountability clause — not a marketing claim. It reflects our confidence in the methodology and our commitment to engagements that deliver measurable ROI."
    },
    {
      q: "What level of involvement is required from our team?",
      a: "The Scan requires 3–4 hours of your team's time over 30 days — primarily structured observation sessions and workflow interviews. We work around your operation, not through it. During the Build phase, we coordinate with relevant staff on implementation. The Partnership retainer requires one monthly performance review and an open channel for new workflow requests. Beyond that, we operate autonomously."
    },
    {
      q: "We already have operational systems. Can WIPS still add value?",
      a: "Almost always — and often more effectively. Clients with existing systems typically have three problems: they're using 30–40% of the tool's capability, their systems aren't communicating with each other, and they lack a single performance truth across the operation. WIPS audits what you have, identifies unrealized potential, builds the connections, and adds only what is structurally necessary."
    },
  ];
  return (
    <section style={{ padding: "96px 40px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">Due Diligence</span>
          <div className="divider-accent" style={{ margin: "14px auto 16px" }} />
          <h2 className="cg" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 300, color: B.navy }}>
            The Questions Serious Operators Ask Before Engaging.
          </h2>
        </div>
        {faqs.map((f, i) => (
          <div key={f.q} style={{ borderBottom: `1px solid ${B.borderL}` }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{
              width: "100%", textAlign: "left", background: "none", border: "none",
              padding: "20px 0", display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", gap: 16, cursor: "pointer",
            }}>
              <span className="cg" style={{ fontSize: "1.05rem", fontWeight: 500, color: B.navy, lineHeight: 1.4 }}>{f.q}</span>
              <span style={{
                color: B.emerald, fontSize: "18px", flexShrink: 0, marginTop: 2,
                transform: open === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.2s",
              }}>+</span>
            </button>
            <div style={{
              maxHeight: open === i ? "500px" : "0",
              overflow: "hidden", transition: "max-height 0.35s ease",
            }}>
              <p style={{ fontSize: "14px", color: B.textS, lineHeight: 1.75, paddingBottom: 20 }}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────
function Footer({ onBooking }) {
  return (
    <footer style={{ background: B.navyD, borderTop: `1px solid rgba(255,255,255,0.05)` }}>
      {/* Footer CTA band */}
      <div style={{ background: B.navy, padding: "56px 40px", textAlign: "center" }}>
        <h2 className="cg" style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: 300, color: "white", marginBottom: 16 }}>
          If Your Operation Is Producing Less Than It Should —<br />
          <em style={{ fontStyle: "italic", color: B.emeraldL }}>We Will Show You Where. And Then Fix It.</em>
        </h2>
        <button className="btn-gold" onClick={onBooking} style={{ marginTop: 12 }}>
          Book Your Free Discovery Session
          <ChevronDivider color="white" size={13} />
        </button>
      </div>

      {/* Footer content */}
      <div style={{ padding: "56px 40px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <WIPSLogo size={28} light />
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginTop: 20, maxWidth: 320 }}>
              Not a Software Vendor. Not a Business Consultant. Your Operations Intelligence Partner.
            </p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", lineHeight: 1.7, marginTop: 12, maxWidth: 320 }}>
              WIPS Tech works with SME leaders who have decided that operational performance is a strategic priority — not an administrative function.
            </p>
          </div>
          {[
            {
              title: "Services", links: ["Operational Scan", "Workflow Automation", "Performance Dashboards", "Operations Partnership", "ROI Assessment"],
            },
            {
              title: "Industries", links: ["Dental Clinics", "Real Estate Agencies", "Fitness Operations", "NGOs & Non-Profits", "Logistics"],
            },
            {
              title: "Company", links: ["Our Approach", "Insights", "Book Discovery", "Contact Us"],
            },
          ].map(col => (
            <div key={col.title}>
              <div className="mono" style={{ fontSize: "9px", fontWeight: 700, color: B.emeraldL, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>{col.title}</div>
              {col.links.map(l => (
                <div key={l} style={{ marginBottom: 10 }}>
                  <a href="#" style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s", cursor: "pointer" }}
                    onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.8)"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}>{l}</a>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Markets */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <span className="mono" style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Operating In:</span>
            {["🇱🇧 Lebanon", "🇯🇴 Jordan", "🇴🇲 Oman", "🇰🇼 Kuwait"].map(m => (
              <span key={m} style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>{m}</span>
            ))}
          </div>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>© 2026 WIPS Tech. All rights reserved.</span>
        </div>
        <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.18)", marginTop: 16, lineHeight: 1.65, fontStyle: "italic" }}>
          * All performance benchmarks represent industry averages calculated from documented operational audit data. Individual engagement results depend on operation size, sector, and current system maturity. WIPS Tech does not guarantee specific financial outcomes from any engagement.
        </p>
      </div>
      <style>{`@media (max-width: 768px) { footer > div:last-child > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }`}</style>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────
// ROOT APP
// ─────────────────────────────────────────────────────────
export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <>
      <style>{GLOBAL_CSS}</style>

      {/* Header logo */}
      <header>
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
      </header>

      <Navigation onBooking={() => setBookingOpen(true)} />

      <main>
        <Hero onBooking={() => setBookingOpen(true)} />
        <PositioningStrip />
        <WasteCalculator onBooking={() => setBookingOpen(true)} />
        <Approach onBooking={() => setBookingOpen(true)} />
        <Industries onBooking={() => setBookingOpen(true)} />
        <Roadmap />
        <SocialProof />
        <Guarantee onBooking={() => setBookingOpen(true)} />
        <Insights onBooking={() => setBookingOpen(true)} />
        <BookingSection />
        <FAQ />
      </main>

      {/* Footer logo */}
      <footer>
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
      </footer>

      <Footer onBooking={() => setBookingOpen(true)} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
