import About from "../../../views/About";
import { getContent, pageMeta } from "../../../lib/i18n";

const t = getContent("en");

export const metadata = pageMeta("en", "/about", t.meta.about.title, t.meta.about.description);

export default function Page() {
  return <About locale="en" />;
}
