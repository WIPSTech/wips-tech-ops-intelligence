import Home from "../../../views/Home";
import { getContent, pageMeta } from "../../../lib/i18n";

const t = getContent("ar");

export const metadata = pageMeta("ar", "/");

export default function Page() {
  return <Home locale="ar" />;
}
