import Shell, { rootMetadata } from "../../../components/Shell";

export const metadata = rootMetadata("ar");

export default function Layout({ children }) {
  return <Shell locale="ar">{children}</Shell>;
}
