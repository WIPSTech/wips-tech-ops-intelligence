import CaseStudy from "../../../../views/CaseStudy";
import { getContent, pageMeta } from "../../../../lib/i18n";

const t = getContent("ar");

export const metadata = pageMeta("ar", "/case-studies", t.meta.case.title, t.meta.case.description);

export default function Page() {
  return <CaseStudy locale="ar" />;
}
