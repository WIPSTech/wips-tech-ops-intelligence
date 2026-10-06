import Link from "next/link";
import { sessionCta } from "../data/site";

export default function Closing({
  title = "Start with one workflow and one number.",
  text = "45 minutes, free, in Arabic or English. You keep the calculation whether or not you go further.",
}) {
  return (
    <section className="section-tight section-navy" aria-labelledby="closing-title">
      <div className="wrap closing">
        <div>
          <h2 id="closing-title">{title}</h2>
          <p>{text}</p>
        </div>
        <Link href="/contact" className="btn btn-primary">
          {sessionCta}
        </Link>
      </div>
    </section>
  );
}
