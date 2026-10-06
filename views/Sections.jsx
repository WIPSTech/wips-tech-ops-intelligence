import Link from "next/link";
import { href } from "../lib/i18n";

// Label-and-body rows shared by the case study and the about page.
export default function Sections({ sections, locale }) {
  return sections.map((section) => (
    <div className="case" key={section.h}>
      <h2>{section.h}</h2>
      <div className="prose">
        {section.p && section.p.map((para) => <p key={para}>{para}</p>)}
        {section.list && (
          <ul className="ticks">
            {section.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {section.link && (
          <p>
            <Link href={href(locale, section.link.href)} className="textlink">
              {section.link.label}
            </Link>
          </p>
        )}
      </div>
    </div>
  ));
}
