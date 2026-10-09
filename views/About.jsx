import Closing from "../components/Closing";
import Sections from "./Sections";
import { getContent } from "../lib/i18n";

export default function About({ locale }) {
  const t = getContent(locale);
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>{t.about.h1}</h1>
        </div>
      </section>
      <section className="section-tight section-white">
        <div className="wrap">
          <Sections sections={t.about.sections} locale={locale} />
        </div>
      </section>
      <Closing locale={locale} title={t.closings.about.title} text={t.closings.about.text} />
    </>
  );
}
