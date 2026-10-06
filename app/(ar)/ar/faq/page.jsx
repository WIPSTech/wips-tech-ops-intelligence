import Faq from "../../../../views/Faq";
import { getContent, pageMeta } from "../../../../lib/i18n";

const t = getContent("ar");

export const metadata = pageMeta("ar", "/faq", t.meta.faq.title, t.meta.faq.description);

export default function Page() {
  return <Faq locale="ar" />;
}
