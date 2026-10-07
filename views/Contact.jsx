import SessionForm from "../components/SessionForm";
import { getContent, site, whatsappLink } from "../lib/i18n";

export default function Contact({ locale }) {
  const t = getContent(locale);
  const c = t.contact;
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>{c.h1}</h1>
          <p className="lede">{c.lede}</p>
        </div>
      </section>
      <section className="section-tight contact-section">
        <div className="wrap contact-grid">
          <SessionForm f={t.form} locale={locale} fallbackEndpoint={site.formEndpoint} />
          <aside className="contact-aside">
            <div>
              <h2>{c.nextH}</h2>
              <p>{c.nextP}</p>
            </div>
            <div>
              <h2>{t.whatsapp.h}</h2>
              <p>{t.whatsapp.p}</p>
              <p>
                <a className="textlink" href={whatsappLink(locale)} rel="noopener noreferrer" target="_blank">
                  {t.whatsapp.link}
                </a>{" "}
                <span className="muted" dir="ltr">
                  {site.whatsappDisplay}
                </span>
              </p>
            </div>
            <div>
              <h2>{c.emailH}</h2>
              <p>
                <a className="textlink" href={`mailto:${site.email}`} dir="ltr">
                  {site.email}
                </a>
              </p>
            </div>
            <div>
              <h2>{c.askH}</h2>
              <p>{c.askP}</p>
            </div>
            <div>
              <h2>{t.notClinic.h}</h2>
              <p>
                {t.notClinic.before}
                <a className="textlink" href={whatsappLink(locale, "other")} rel="noopener noreferrer" target="_blank">
                  {t.notClinic.wa}
                </a>
                {t.notClinic.or}
                <a className="textlink" href="#session-form">
                  {t.notClinic.session}
                </a>
                {t.notClinic.after}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
