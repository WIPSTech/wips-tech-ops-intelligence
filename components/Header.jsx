"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, sessionCta } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="WIPS Tech home" onClick={() => setOpen(false)}>
          <picture>
            <source srcSet="/logo-transparent.webp" type="image/webp" />
            <img src="/logo-transparent.png" alt="WIPS Tech" width="220" height="72" />
          </picture>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Main">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            {sessionCta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
