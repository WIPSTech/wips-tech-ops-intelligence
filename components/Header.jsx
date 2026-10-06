"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function localise(locale, path) {
  if (locale !== "ar") return path;
  return path === "/" ? "/ar" : `/ar${path}`;
}

export default function Header({ locale, nav, cta, menu, other }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const bare = pathname === "/ar" ? "/" : pathname.replace(/^\/ar(?=\/)/, "");
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href={localise(locale, "/")} className="brand" aria-label="WIPS Tech" onClick={close}>
          <picture>
            <source srcSet="/logo-transparent.webp" type="image/webp" />
            <img src="/logo-transparent.png" alt="WIPS Tech" width="122" height="40" />
          </picture>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? menu.close : menu.open}
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label={menu.main}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={localise(locale, item.href)}
              aria-current={bare.startsWith(item.href) ? "page" : undefined}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={localise(other.locale, bare)}
            className="lang"
            lang={other.locale}
            hrefLang={other.locale}
            onClick={close}
          >
            {other.label}
          </Link>
          <Link href={localise(locale, "/contact")} className="btn btn-primary" onClick={close}>
            {cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
