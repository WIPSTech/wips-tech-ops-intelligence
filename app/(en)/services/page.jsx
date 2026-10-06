import Services from "../../../views/Services";
import { getContent, pageMeta } from "../../../lib/i18n";

const t = getContent("en");

export const metadata = pageMeta("en", "/services", t.meta.services.title, t.meta.services.description);

export default function Page() {
  return <Services locale="en" />;
}
