"use client";

import { useEffect, useState } from "react";

// Sends to /api/session, which emails the clinic owner a confirmation.
// If that route is not configured yet, falls back to the Formspree endpoint.
export default function SessionForm({ f, locale, fallbackEndpoint }) {
  const [attached, setAttached] = useState("");
  const [status, setStatus] = useState("idle");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("task") && p.get("score")) {
      setAttached(`${p.get("task")}: ${f.scoreLine} ${p.get("score")}/15 (T-I-F-D-A ${p.get("tifda") || ""})`);
    }
  }, [f.scoreLine]);

  async function send(e) {
    e.preventDefault();
    setStatus("sending");
    setError(false);
    const fd = new FormData(e.currentTarget);
    if (attached) fd.append("tifda_score", attached);
    fd.append("language", locale);

    try {
      const res = await fetch("/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(fd.entries())),
      });
      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        setConfirmed(Boolean(data.confirmation));
        setStatus("sent");
        return;
      }
      if (res.status === 400) throw new Error("invalid");
    } catch (err) {
      if (err.message === "invalid") {
        setStatus("idle");
        setError(true);
        return;
      }
    }

    try {
      fd.append("_subject", "Free session request, WIPS Tech");
      const res = await fetch(fallbackEndpoint, { method: "POST", headers: { Accept: "application/json" }, body: fd });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(true);
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <h2>{f.doneTitle}</h2>
        <p>{f.doneText}</p>
        {confirmed && <p>{f.doneConfirm}</p>}
      </div>
    );
  }

  return (
    <form id="session-form" className="form" onSubmit={send}>
      <div className="form-two">
        <div className="field">
          <label htmlFor="f-name">{f.name}</label>
          <input id="f-name" name="name" type="text" autoComplete="name" maxLength={120} required />
        </div>
        <div className="field">
          <label htmlFor="f-clinic">{f.clinic}</label>
          <input id="f-clinic" name="clinic" type="text" autoComplete="organization" maxLength={160} required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-type">{f.type}</label>
        <select id="f-type" name="clinic_type" required defaultValue="">
          <option value="" disabled>
            {f.choose}
          </option>
          {f.types.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="form-two">
        <div className="field">
          <label htmlFor="f-email">{f.email}</label>
          <input id="f-email" name="email" type="email" autoComplete="email" maxLength={200} dir="ltr" required />
        </div>
        <div className="field">
          <label htmlFor="f-phone">
            {f.phone} <span className="optional">{f.optional}</span>
          </label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} dir="ltr" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-problem">
          {f.problem} <span className="optional">{f.optional}</span>
        </label>
        <textarea id="f-problem" name="problem" maxLength={2000} />
      </div>
      {attached && (
        <p className="attached">
          {f.attached} {attached}
        </p>
      )}
      <input className="hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {error && (
        <p className="form-error" role="alert">
          {f.error}
        </p>
      )}
      <div>
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? f.sending : f.submit}
        </button>
      </div>
    </form>
  );
}
