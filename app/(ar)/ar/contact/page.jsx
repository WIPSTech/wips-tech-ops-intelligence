import Contact from "../../../../views/Contact";
import { getContent, pageMeta } from "../../../../lib/i18n";

const t = getContent("ar");

export const metadata = pageMeta("ar", "/contact", t.meta.contact.title, t.meta.contact.description);

export default function Page() {
  return <Contact locale="ar" />;
}
