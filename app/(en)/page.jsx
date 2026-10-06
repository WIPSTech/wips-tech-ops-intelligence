import Home from "../../views/Home";
import { getContent, pageMeta } from "../../lib/i18n";

const t = getContent("en");

export const metadata = pageMeta("en", "/");

export default function Page() {
  return <Home locale="en" />;
}
