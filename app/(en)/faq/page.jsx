import Faq from "../../../views/Faq";
import { getContent, pageMeta } from "../../../lib/i18n";

const t = getContent("en");

export const metadata = pageMeta("en", "/faq", t.meta.faq.title, t.meta.faq.description);

export default function Page() {
  return <Faq locale="en" />;
}
