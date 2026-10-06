import Link from "next/link";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <strong>WIPS Tech</strong>
            <p>{site.label}.</p>
            <p>Founded in 2026. Based in Mount Lebanon.</p>
          </div>
          <nav aria-label="Footer">
            <strong>Site</strong>
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div>
            <strong>Reach us</strong>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.linkedin} rel="noopener noreferrer" target="_blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-base">
          Results depend on the clinic, its tools and its patients. WIPS Tech does not promise specific
          financial outcomes. © 2026 WIPS Tech.
        </p>
      </div>
    </footer>
  );
}
