import Link from "next/link";
import { getContent, href, whatsappLink } from "../lib/i18n";

export default function Closing({ locale, title, text }) {
  const t = getContent(locale);
  return (
    <section className="section-tight section-navy" aria-labelledby="closing-title">
      <div className="wrap closing">
        <div>
          <h2 id="closing-title">{title || t.closing.title}</h2>
          <p>{text || t.closing.text}</p>
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
