"use client";

import { useState } from "react";

const WEEKS = 4.3;
const taskIds = ["enquiry", "noshow", "recall", "balances"];
const needIds = ["link", "rule", "decision"];
const num = (v) => {
  const n = parseFloat(String(v).replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : null;
};
const money = (n) => `$${Math.round(n).toLocaleString("en-US")}`;

// Returns { value, formula } or null when a number is missing.
function work(task, raw) {
  const v = raw.map(num);
  if (v.some((x) => x === null)) return null;
  const ten = (x) => Math.min(x, 10) / 10;
  if (task === "enquiry") {
    return { value: v[0] * ten(v[1]) * v[2] * WEEKS, formula: `${v[0]} × ${Math.min(v[1], 10)}/10 × $${v[2]} × ${WEEKS}` };
  }
  if (task === "noshow") {
    const lost = Math.max(v[0] - v[1], 0);
    return { value: lost * v[2] * WEEKS, formula: `(${v[0]} − ${v[1]}) × $${v[2]} × ${WEEKS}` };
  }
  if (task === "recall") {
    const rest = Math.max(v[0] - v[1], 0);
    return { value: rest * ten(v[2]) * v[3], formula: `(${v[0]} − ${v[1]}) × ${Math.min(v[2], 10)}/10 × $${v[3]}` };
  }
  return { value: Math.min(v[1], v[0]), formula: `$${Math.min(v[1], v[0])}` };
}

const empty = { enquiry: ["", "", ""], noshow: ["", "", ""], recall: ["", "", "", ""], balances: ["", ""] };
const startScore = { t: 3, i: 3, f: 3, d: 1, a: 1, need: "rule" };

export default function CostSheet({ s, whatsapp }) {
  const [task, setTask] = useState("enquiry");
  const [vals, setVals] = useState(empty);
  const [guess, setGuess] = useState({});
  const [sc, setSc] = useState(startScore);
  const [clinic, setClinic] = useState("");

  const raw = vals[task];
  const res = work(task, raw);
  const isBalance = task === "balances";
  const anyGuess = raw.some((_, i) => guess[`${task}${i}`]);

  const score = (sc.t + sc.i + sc.f) * sc.d * sc.a;
  const kind = score === 0 ? "blocked" : score < 8 ? "leave" : sc.need === "link" ? "connect" : sc.need === "rule" ? "automate" : "agent";
  const verdict = s.verdicts[kind];

  const setVal = (i, value) => setVals((p) => ({ ...p, [task]: p[task].map((x, j) => (j === i ? value : x)) }));
  const reset = () => {
    setVals(empty);
    setGuess({});
    setSc(startScore);
    setClinic("");
    setTask("enquiry");
  };

  const resultLine = res ? `${isBalance ? "" : "≈ "}${money(res.value)}${isBalance ? "" : ` ${s.perMonth}`}` : "—";
  const message = [
    `${s.wa.title} — wipstech.com/sheet`,
    clinic ? `${s.wa.clinic}: ${clinic}` : null,
    `${s.wa.task}: ${s.tasks[task]}`,
    `${s.wa.numbers}:`,
    ...s.fields[task].map((label, i) => `- ${label}: ${raw[i] || "?"}${guess[`${task}${i}`] ? ` (${s.guess})` : ""}`),
    `${s.wa.result}: ${resultLine}`,
    `${s.wa.score}: (${sc.t}+${sc.i}+${sc.f})×${sc.d}×${sc.a} = ${score}`,
    `${s.wa.verdict}: ${verdict[0]}`,
  ]
    .filter(Boolean)
    .join("\n");
  const waHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="scorer sheet" id="sheet">
      <p className="sheet-privacy">{s.privacy}</p>

      <h2 className="sheet-step">
        <span>{s.step} 1</span> {s.s1}
      </h2>
      <div className="chips" role="group" aria-label={s.s1}>
        {taskIds.map((id) => (
          <button key={id} type="button" className="chip" aria-pressed={task === id} onClick={() => setTask(id)}>
            {s.tasks[id]}
          </button>
        ))}
      </div>

      <h2 className="sheet-step">
        <span>{s.step} 2</span> {s.s2}
      </h2>
      <p className="scorer-note">{s.s2note}</p>
      {s.fields[task].map((label, i) => (
        <div className="sheet-field" key={`${task}${i}`}>
          <label htmlFor={`sheet-${task}-${i}`}>{label}</label>
          <div className="sheet-input">
            <input
              id={`sheet-${task}-${i}`}
              type="number"
              inputMode="decimal"
              min="0"
              dir="ltr"
              value={raw[i]}
              onChange={(e) => setVal(i, e.target.value)}
            />
            <label className="sheet-guess">
              <input
                type="checkbox"
                checked={!!guess[`${task}${i}`]}
                onChange={(e) => setGuess((p) => ({ ...p, [`${task}${i}`]: e.target.checked }))}
              />
              {s.guess}
            </label>
          </div>
        </div>
      ))}

      <div className="verdict sheet-result" aria-live="polite">
        {!res && <p>{s.resultEmpty}</p>}
        {res && res.value === 0 && <p>{s.resultZero}</p>}
        {res && res.value > 0 && (
          <>
            <p>{isBalance ? s.resultBalance : s.resultMonthly}</p>
            <div className="verdict-score">
              <span dir="ltr">{money(res.value)}</span> {!isBalance && <span className="verdict-sum">{s.perMonth}</span>}
            </div>
            <p className="verdict-sum">
              {s.how}: <span dir="ltr">{res.formula}</span>
            </p>
            {anyGuess && <p>{s.hasGuess}</p>}
          </>
        )}
      </div>

      <h2 className="sheet-step">
        <span>{s.step} 3</span> {s.s3}
      </h2>
      {["t", "i", "f"].map((k) => (
        <div className="factor" key={k}>
          <label htmlFor={`sheet-${k}`}>{s.sliders[k][0]}</label>
          <output htmlFor={`sheet-${k}`}>{sc[k]}</output>
          <span className="hint">{s.sliders[k][1]}</span>
          <input id={`sheet-${k}`} type="range" min="1" max="5" step="1" value={sc[k]} onChange={(e) => setSc((p) => ({ ...p, [k]: Number(e.target.value) }))} />
        </div>
      ))}
      {[
        ["d", s.gateD],
        ["a", s.gateA],
      ].map(([k, q]) => (
        <div className="factor" key={k} role="radiogroup" aria-labelledby={`sheet-${k}-q`}>
          <span id={`sheet-${k}-q`} className="q">
            {q}
          </span>
          <span className="toggle">
            <input type="radio" id={`sheet-${k}-yes`} name={`sheet-${k}`} checked={sc[k] === 1} onChange={() => setSc((p) => ({ ...p, [k]: 1 }))} />
            <label htmlFor={`sheet-${k}-yes`}>{s.yes}</label>
            <input type="radio" id={`sheet-${k}-no`} name={`sheet-${k}`} checked={sc[k] === 0} onChange={() => setSc((p) => ({ ...p, [k]: 0 }))} />
            <label htmlFor={`sheet-${k}-no`}>{s.no}</label>
          </span>
        </div>
      ))}
      <div className="factor" role="radiogroup" aria-labelledby="sheet-need-q">
        <span id="sheet-need-q" className="q">
          {s.needQ}
        </span>
        <div className="need">
          {needIds.map((id) => (
            <label key={id}>
              <input type="radio" name="sheet-need" checked={sc.need === id} onChange={() => setSc((p) => ({ ...p, need: id }))} />
              <span>{s.needs[id]}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={kind === "blocked" ? "verdict blocked" : "verdict"} aria-live="polite">
        <div className="verdict-sum" dir="ltr">
          ({sc.t} + {sc.i} + {sc.f}) × {sc.d} × {sc.a}
        </div>
        <div className="verdict-score">
          <span dir="ltr">{score}</span> <span className="verdict-sum">{s.outOf}</span>
        </div>
        <p>
          <strong>{verdict[0]}</strong> {verdict[1]}
        </p>
      </div>

      <h2 className="sheet-step no-print">
        <span>{s.step} 4</span> {s.s4}
      </h2>
      <div className="sheet-field">
        <label htmlFor="sheet-clinic">{s.clinic}</label>
        <input id="sheet-clinic" type="text" maxLength={80} value={clinic} onChange={(e) => setClinic(e.target.value)} />
      </div>
      <div className="btn-row no-print">
        <a className="btn btn-primary" href={waHref} target="_blank" rel="noopener noreferrer">
          {s.send}
        </a>
        <button type="button" className="btn btn-quiet" onClick={() => window.print()}>
          {s.print}
        </button>
        <button type="button" className="btn btn-quiet" onClick={reset}>
          {s.reset}
        </button>
      </div>
      <p className="scorer-note no-print">{s.sendNote}</p>
    </div>
  );
}
