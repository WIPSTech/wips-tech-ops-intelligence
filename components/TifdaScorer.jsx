"use client";

import { useState } from "react";
import Link from "next/link";

// Starting points only. A visitor is expected to change them.
const presets = [
  { id: "confirm", label: "Confirming appointments", t: 4, i: 3, f: 5, d: 1, a: 1, need: "rule" },
  { id: "enquiry", label: "Replying to WhatsApp enquiries", t: 3, i: 5, f: 5, d: 1, a: 1, need: "decision" },
  { id: "retype", label: "Retyping bookings into the schedule", t: 4, i: 2, f: 5, d: 1, a: 1, need: "link" },
  { id: "balances", label: "Chasing unpaid balances", t: 3, i: 4, f: 3, d: 0, a: 1, need: "rule" },
];

const needs = [
  { id: "link", text: "Moving information from one tool to another", layer: "Connect", ai: false },
  { id: "rule", text: "Doing the same thing every time", layer: "Automate", ai: false },
  { id: "decision", text: "Making a decision that changes case by case", layer: "Agent", ai: true },
];

const sliders = [
  { key: "t", name: "Time", hint: "How much time or money it takes each month" },
  { key: "i", name: "Impact", hint: "How much it hurts when it goes wrong or is skipped" },
  { key: "f", name: "Frequency", hint: "How often it happens" },
];

const gates = [
  { key: "d", name: "Is the process written down?" },
  { key: "a", name: "Is the information it needs reachable?" },
];

function reading(score, v) {
  if (score === 0) {
    const missing = [];
    if (!v.d) missing.push("write the process down once, by hand");
    if (!v.a) missing.push("get the information it needs into one reachable place");
    return {
      blocked: true,
      head: "Not ready to build yet",
      text: `However much it hurts, there is nothing repeatable to build on. First ${missing.join(", and ")}. Then score it again.`,
    };
  }
  const need = needs.find((n) => n.id === v.need);
  const fix = need.ai
    ? "This one needs judgment, so an AI agent with written limits may fit."
    : `This looks like a ${need.layer} fix. It does not need AI.`;
  if (score >= 12) return { head: "Fix this one first", text: fix };
  if (score >= 8) return { head: "Worth a closer look", text: fix };
  return { head: "Leave it for now", text: "The score is low. Other tasks probably cost you more." };
}

export default function TifdaScorer({ compact = false }) {
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

  const tif = v.t + v.i + v.f;
  const score = tif * v.d * v.a;
  const r = reading(score, v);
  const taskLabel = active ? presets.find((p) => p.id === active).label : "My own task";
  const href = `/contact?task=${encodeURIComponent(taskLabel)}&score=${score}&tifda=${v.t}-${v.i}-${v.f}-${v.d}-${v.a}`;

  return (
    <div className="scorer">
      <p className="scorer-title">Score a task from your clinic</p>
      <p className="scorer-note">Pick an example, then move the numbers to match your own clinic.</p>

      <div className="chips" role="group" aria-label="Example tasks">
        {presets.map((p) => (
          <button
            key={p.id}
            type="button"
            className="chip"
            aria-pressed={active === p.id}
            onClick={() => choose(p)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {sliders.map((s) => (
        <div className="factor" key={s.key}>
          <label htmlFor={`tifda-${s.key}`}>{s.name}</label>
          <output htmlFor={`tifda-${s.key}`}>{v[s.key]}</output>
          {!compact && <span className="hint">{s.hint}</span>}
          <input
            id={`tifda-${s.key}`}
            type="range"
            min="1"
            max="5"
            step="1"
            value={v[s.key]}
            onChange={(e) => set(s.key, Number(e.target.value))}
          />
        </div>
      ))}

      {gates.map((g) => (
        <div className="factor" key={g.key} role="radiogroup" aria-labelledby={`tifda-${g.key}-q`}>
          <span id={`tifda-${g.key}-q`} className="q">
            {g.name}
          </span>
          <span className="toggle">
            <input
              type="radio"
              id={`tifda-${g.key}-yes`}
              name={`tifda-${g.key}`}
              checked={v[g.key] === 1}
              onChange={() => set(g.key, 1)}
            />
            <label htmlFor={`tifda-${g.key}-yes`}>Yes</label>
            <input
              type="radio"
              id={`tifda-${g.key}-no`}
              name={`tifda-${g.key}`}
              checked={v[g.key] === 0}
              onChange={() => set(g.key, 0)}
            />
            <label htmlFor={`tifda-${g.key}-no`}>No</label>
          </span>
        </div>
      ))}

      {!compact && (
        <div className="factor" role="radiogroup" aria-labelledby="tifda-need-q">
          <span id="tifda-need-q" className="q">
            What does the task mostly involve?
          </span>
          <div className="need">
            {needs.map((n) => (
              <label key={n.id}>
                <input
                  type="radio"
                  name="tifda-need"
                  checked={v.need === n.id}
                  onChange={() => set("need", n.id)}
                />
                <span>{n.text}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className={r.blocked ? "verdict blocked" : "verdict"} aria-live="polite">
        <div className="verdict-sum">
          ({v.t} + {v.i} + {v.f}) × {v.d} × {v.a}
        </div>
        <div className="verdict-score">
          {score} <span className="verdict-sum">out of 15</span>
        </div>
        <p>
          <strong>{r.head}.</strong> {r.text}
        </p>
        {compact ? (
          <Link href="/services#method" className="textlink" style={{ display: "inline-block", marginTop: 12 }}>
            See how the score works
          </Link>
        ) : (
          <Link href={href} className="btn btn-primary">
            Send this score with a session request
          </Link>
        )}
      </div>
    </div>
  );
}
