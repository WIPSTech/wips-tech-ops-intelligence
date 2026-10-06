import Services from "../../../../views/Services";
import { getContent, pageMeta } from "../../../../lib/i18n";

const t = getContent("ar");

export const metadata = pageMeta("ar", "/services", t.meta.services.title, t.meta.services.description);

export default function Page() {
  return <Services locale="ar" />;
}
