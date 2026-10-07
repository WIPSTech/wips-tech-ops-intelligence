import Link from "next/link";
import { getContent, href, whatsappLink } from "../lib/i18n";

export default function Closing({ locale, title, text, notClinic = false }) {
  const t = getContent(locale);
  return (
    <section className="section-tight section-navy" aria-labelledby="closing-title">
      <div className="wrap closing">
        <div>
          <h2 id="closing-title">{title || t.closing.title}</h2>
          <p>{text || t.closing.text}</p>
          {notClinic && (
            <p className="closing-other">
              <strong>{t.notClinic.h}</strong> {t.notClinic.before}
              <a href={whatsappLink(locale, "other")} rel="noopener noreferrer" target="_blank">
                {t.notClinic.wa}
              </a>
              {t.notClinic.or}
              <Link href={href(locale, "/contact")}>{t.notClinic.session}</Link>
              {t.notClinic.after}
            </p>
          )}
        </div>
        <div className="closing-actions">
          <Link href={href(locale, "/contact")} className="btn btn-primary">
            {t.cta}
          </Link>
          <a href={whatsappLink(locale)} className="closing-wa" rel="noopener noreferrer" target="_blank">
            {t.whatsapp.closing}
          </a>
        </div>
      </div>
    </section>
  );
}
