import { InsightsIndex } from "../../../views/Insights";
import { getContent, pageMeta } from "../../../lib/i18n";

const t = getContent("en");

export const metadata = pageMeta("en", "/insights", t.meta.insights.title, t.meta.insights.description);

export default function Page() {
  return <InsightsIndex locale="en" />;
}
