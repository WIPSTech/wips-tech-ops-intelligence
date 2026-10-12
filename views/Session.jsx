import SessionCompanion from "../components/SessionCompanion";
import { session } from "../content/session";
import { sheet } from "../content/sheet";
import { site } from "../lib/i18n";

export default function Session({ locale }) {
  const k = locale === "ar" ? "ar" : "en";
  const c = session[k];
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>{c.h1}</h1>
          <p className="lede">{c.lede}</p>
        </div>
      </section>
      <section className="section section-white">
        <div className="wrap sheet-wrap">
          <SessionCompanion c={c} sheetText={sheet[k]} whatsapp={site.whatsapp} />
        </div>
      </section>
    </>
  );
}
