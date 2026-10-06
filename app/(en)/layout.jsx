import Shell, { rootMetadata } from "../../components/Shell";

export const metadata = rootMetadata("en");

export default function Layout({ children }) {
  return <Shell locale="en">{children}</Shell>;
}
