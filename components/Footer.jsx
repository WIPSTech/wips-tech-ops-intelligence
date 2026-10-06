import Link from "next/link";
import { getContent, href, site, whatsappLink } from "../lib/i18n";

export default function Footer({ locale }) {
  const t = getContent(locale);
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <strong>WIPS Tech</strong>
            <p>{t.label}.</p>
            <p>{t.footer.founded}</p>
          </div>
          <nav aria-label={t.menu.footer}>
            <strong>{t.footer.site}</strong>
            <ul>
              {t.nav.map((item) => (
                <li key={item.href}>
                  <Link href={href(locale, item.href)}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href={href(locale, "/contact")}>{t.footer.contact}</Link>
              </li>
              <li>
                <Link href={href(t.other.locale, "/")} lang={t.other.locale} hrefLang={t.other.locale}>
                  {t.other.label}
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <strong>{t.footer.reach}</strong>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={whatsappLink(locale)} rel="noopener noreferrer" target="_blank">
                  {t.whatsapp.label} <span dir="ltr">{site.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a href={site.linkedin} rel="noopener noreferrer" target="_blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-base">{t.footer.base}</p>
      </div>
    </footer>
  );
}
