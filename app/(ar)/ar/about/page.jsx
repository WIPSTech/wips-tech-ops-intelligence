import About from "../../../../views/About";
import { getContent, pageMeta } from "../../../../lib/i18n";

const t = getContent("ar");

export const metadata = pageMeta("ar", "/about", t.meta.about.title, t.meta.about.description);

export default function Page() {
  return <About locale="ar" />;
}
