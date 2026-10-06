"use client";

import { useState } from "react";
import Link from "next/link";

// Starting points only. A visitor is expected to change them.
const presets = [
  { id: "confirm", t: 4, i: 3, f: 5, d: 1, a: 1, need: "rule" },
  { id: "enquiry", t: 3, i: 5, f: 5, d: 1, a: 1, need: "decision" },
  { id: "retype", t: 4, i: 2, f: 5, d: 1, a: 1, need: "link" },
  { id: "balances", t: 3, i: 4, f: 3, d: 0, a: 1, need: "rule" },
];
const needIds = ["link", "rule", "decision"];
const sliderKeys = ["t", "i", "f"];
const gateKeys = ["d", "a"];

export default function TifdaScorer({ s, compact = false, methodHref, contactHref }) {
  const [active, setActive] = useState(presets[0].id);
  const [v, setV] = useState(presets[0]);

  const set = (key, value) => {
    setActive(null);
    setV((prev) => ({ ...prev, [key]: value }));
  };
  const choose = (preset) => {
    setActive(preset.id);
    setV(preset);
  };

  const score = (v.t + v.i + v.f) * v.d * v.a;
  const blocked = score === 0;
  const head = blocked ? s.blockedHead : score >= 12 ? s.first : score >= 8 ? s.closer : s.leave;
  const text = blocked ? null : score >= 8 ? s.fixes[v.need] : s.leaveText;
  const taskLabel = active ? s.presets[active] : s.own;
  const sendHref = `${contactHref}?task=${encodeURIComponent(taskLabel)}&score=${score}&tifda=${v.t}-${v.i}-${v.f}-${v.d}-${v.a}`;

  return (
    <div className="scorer">
      <p className="scorer-title">{s.title}</p>
      <p className="scorer-note">{s.note}</p>

      <div className="chips" role="group" aria-label={s.examples}>
        {presets.map((p) => (
          <button
            key={p.id}
            type="button"
            className="chip"
            aria-pressed={active === p.id}
            onClick={() => choose(p)}
          >
            {s.presets[p.id]}
          </button>
        ))}
      </div>

      {sliderKeys.map((key) => (
        <div className="factor" key={key}>
          <label htmlFor={`tifda-${key}`}>{s.sliders[key].name}</label>
          <output htmlFor={`tifda-${key}`}>{v[key]}</output>
          {!compact && <span className="hint">{s.sliders[key].hint}</span>}
          <input
            id={`tifda-${key}`}
            type="range"
            min="1"
            max="5"
            step="1"
            value={v[key]}
            onChange={(e) => set(key, Number(e.target.value))}
          />
        </div>
      ))}

      {gateKeys.map((key) => (
        <div className="factor" key={key} role="radiogroup" aria-labelledby={`tifda-${key}-q`}>
          <span id={`tifda-${key}-q`} className="q">
            {s.gates[key]}
          </span>
          <span className="toggle">
            <input
              type="radio"
              id={`tifda-${key}-yes`}
              name={`tifda-${key}`}
              checked={v[key] === 1}
              onChange={() => set(key, 1)}
            />
            <label htmlFor={`tifda-${key}-yes`}>{s.yes}</label>
            <input
              type="radio"
              id={`tifda-${key}-no`}
              name={`tifda-${key}`}
              checked={v[key] === 0}
              onChange={() => set(key, 0)}
            />
            <label htmlFor={`tifda-${key}-no`}>{s.no}</label>
          </span>
        </div>
      ))}

      {!compact && (
        <div className="factor" role="radiogroup" aria-labelledby="tifda-need-q">
          <span id="tifda-need-q" className="q">
            {s.needQ}
          </span>
          <div className="need">
            {needIds.map((id) => (
              <label key={id}>
                <input type="radio" name="tifda-need" checked={v.need === id} onChange={() => set("need", id)} />
                <span>{s.needs[id]}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className={blocked ? "verdict blocked" : "verdict"} aria-live="polite">
        <div className="verdict-sum" dir="ltr">
          ({v.t} + {v.i} + {v.f}) × {v.d} × {v.a}
        </div>
        <div className="verdict-score">
          <span dir="ltr">{score}</span> <span className="verdict-sum">{s.outOf}</span>
        </div>
        <p>
          <strong>{head}</strong> {text}
        </p>
        {blocked && (
          <>
            <p>{s.blockedIntro}</p>
            <ul className="ticks">
              {!v.d && <li>{s.missingD}</li>}
              {!v.a && <li>{s.missingA}</li>}
            </ul>
            <p>{s.blockedOutro}</p>
          </>
        )}
        {compact ? (
          <Link href={methodHref} className="textlink verdict-link">
            {s.how}
          </Link>
        ) : (
          <Link href={sendHref} className="btn btn-primary">
            {s.send}
          </Link>
        )}
      </div>
    </div>
  );
}
