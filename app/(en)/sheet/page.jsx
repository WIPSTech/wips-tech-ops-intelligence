import Sheet from "../../../views/Sheet";
import { sheet } from "../../../content/sheet";
import { pageMeta } from "../../../lib/i18n";

// Unlisted while it is being tested: not in the sitemap or navigation, and not indexed.
export const metadata = { ...pageMeta("en", "/sheet", sheet.en.metaTitle, sheet.en.metaDescription), robots: { index: false, follow: false } };

export default function Page() {
  return <Sheet locale="en" />;
}
