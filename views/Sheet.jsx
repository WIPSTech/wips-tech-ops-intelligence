import CostSheet from "../components/CostSheet";
import { sheet } from "../content/sheet";
import { site } from "../lib/i18n";

export default function Sheet({ locale }) {
  const s = sheet[locale === "ar" ? "ar" : "en"];
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>{s.h1}</h1>
          <p className="lede">{s.lede}</p>
        </div>
      </section>
      <section className="section section-white">
        <div className="wrap sheet-wrap">
          <CostSheet s={s} whatsapp={site.whatsapp} />
        </div>
      </section>
    </>
  );
}
