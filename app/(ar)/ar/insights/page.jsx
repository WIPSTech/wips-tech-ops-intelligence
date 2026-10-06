import { InsightsIndex } from "../../../../views/Insights";
import { getContent, pageMeta } from "../../../../lib/i18n";

const t = getContent("ar");

export const metadata = pageMeta("ar", "/insights", t.meta.insights.title, t.meta.insights.description);

export default function Page() {
  return <InsightsIndex locale="ar" />;
}
