import Session from "../../../../views/Session";
import { session } from "../../../../content/session";
import { pageMeta } from "../../../../lib/i18n";

// Internal tool for WIPS Tech representatives: unlisted and not indexed.
export const metadata = { ...pageMeta("ar", "/session", session.ar.metaTitle, session.ar.metaDescription), robots: { index: false, follow: false } };

export default function Page() {
  return <Session locale="ar" />;
}
