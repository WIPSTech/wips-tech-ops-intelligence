"use client";

import { useEffect, useState } from "react";
import CostSheet from "./CostSheet";

const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export default function SessionCompanion({ c, sheetText, whatsapp }) {
  const [step, setStep] = useState(-1); // -1 = start screen, blocks.length = scorecard
  const [startAt, setStartAt] = useState(null);
  const [now, setNow] = useState(Date.now());
  const [showObj, setShowObj] = useState(false);
  const [ticks, setTicks] = useState({});

  useEffect(() => {
    if (!startAt) return undefined;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [startAt]);

  const elapsed = startAt ? Math.floor((now - startAt) / 1000) : 0;
  const blocks = c.blocks;
  const done = step >= blocks.length;
  const b = step >= 0 && !done ? blocks[step] : null;
  const planned = blocks.slice(0, Math.max(step + 1, 0)).reduce((s, x) => s + x.mins, 0);
  const late = b && elapsed > planned * 60;
  const score = Object.values(ticks).filter(Boolean).length;

  const go = (i) => {
    setShowObj(false);
    setStep(i);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (step === -1) {
    return (
      <div className="scorer comp">
        <ol className="comp-plan">
          {blocks.map((x, i) => (
            <li key={x.title}>
              <span>{i + 1}</span> {x.title} <em dir="ltr">{x.mins} {c.min}</em>
            </li>
          ))}
        </ol>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setStartAt(Date.now());
            go(0);
          }}
        >
          {c.start}
        </button>
      </div>
    );
  }

  return (
    <div className="scorer comp">
      <div className="comp-bar">
        <div className="comp-dots" aria-hidden="true">
          {blocks.map((x, i) => (
            <span key={x.title} className={i < step ? "on" : i === step ? "now" : ""} />
          ))}
        </div>
        <span className={late ? "comp-time late" : "comp-time"} dir="ltr">
          {fmt(elapsed)} / {planned || 45}:00
        </span>
      </div>

      {b && (
        <>
          <h2 className="comp-title">
            <span dir="ltr">
              {step + 1}/{blocks.length}
            </span>{" "}
            {b.title} <em dir="ltr">{b.mins} {c.min}</em>
          </h2>
          {b.say && (
            <div className="comp-box say">
              <p className="comp-label">{c.say}</p>
              {b.say.map((t) => (
                <p key={t} className="comp-line">
                  {t}
                </p>
              ))}
            </div>
          )}
          {b.ask && (
            <div className="comp-box">
              <p className="comp-label">{c.ask}</p>
              <ol className="comp-asks">
                {b.ask.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            </div>
          )}
          {b.listen && (
            <p className="comp-small">
              <strong>{c.listen}:</strong> {b.listen.join(" ")}
            </p>
          )}
          {b.rules && (
            <ul className="comp-rules">
              {b.rules.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
          {b.replies && (
            <div className="comp-replies">
              {b.replies.map(([k, v]) => (
                <p key={k}>
                  <strong>{k}</strong> {v}
                </p>
              ))}
            </div>
          )}
          {b.sheet && (
            <div className="comp-sheet">
              <p className="comp-small">{c.openSheet}</p>
              <CostSheet s={sheetText} whatsapp={whatsapp} />
            </div>
          )}

          <div className="btn-row">
            {step > 0 && (
              <button type="button" className="btn btn-quiet" onClick={() => go(step - 1)}>
                {c.back}
              </button>
            )}
            <button type="button" className="btn btn-primary" onClick={() => go(step + 1)}>
              {step === blocks.length - 1 ? c.finish : c.next}
            </button>
            <button type="button" className="btn btn-quiet" onClick={() => setShowObj((v) => !v)} aria-expanded={showObj}>
              {c.objections}
            </button>
          </div>
          {showObj && (
            <div className="comp-obj">
              {c.objectionList.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          )}
        </>
      )}

      {done && (
        <>
          <h2 className="comp-title">{c.scoreTitle}</h2>
          <p className="comp-small">{c.scoreNote}</p>
          <ul className="comp-score">
            {c.scorecard.map((t, i) => (
              <li key={t}>
                <label>
                  <input type="checkbox" checked={!!ticks[i]} onChange={(e) => setTicks((p) => ({ ...p, [i]: e.target.checked }))} />
                  <span>{t}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className="verdict">
            <div className="verdict-score">
              <span dir="ltr">{score}</span> <span className="verdict-sum" dir="ltr">/ 10 · {fmt(elapsed)}</span>
            </div>
          </div>
          <div className="btn-row">
            <button type="button" className="btn btn-quiet" onClick={() => go(blocks.length - 1)}>
              {c.back}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setTicks({});
                setStartAt(null);
                go(-1);
              }}
            >
              {c.restart}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
