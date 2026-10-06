"use client";

import { useEffect, useState } from "react";
import { site } from "../data/site";

export default function SessionForm() {
  const [attached, setAttached] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("task") && p.get("score")) {
      setAttached(`${p.get("task")}: TIFDA score ${p.get("score")} of 15 (T-I-F-D-A ${p.get("tifda") || ""})`);
    }
  }, []);

  async function send(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
    fd.append("_subject", "Free session request, WIPS Tech");
    if (attached) fd.append("tifda_score", attached);
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("idle");
        setError(`The request was not sent. Try again, or email ${site.email}.`);
      }
    } catch {
      setStatus("idle");
      setError(`The request was not sent. Check your connection and try again, or email ${site.email}.`);
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <h2>Request sent</h2>
        <p>We reply within one business day to arrange your session.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={send}>
      <div className="form-two">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="f-clinic">Clinic name</label>
          <input id="f-clinic" name="clinic" type="text" autoComplete="organization" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-type">Type of clinic</label>
        <select id="f-type" name="clinic_type" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          <option>Dental or medical clinic</option>
          <option>Beauty or aesthetic clinic</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="form-two">
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="f-phone">
            Phone or WhatsApp <span className="optional">(optional)</span>
          </label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-problem">
          What is costing the clinic most right now? <span className="optional">(optional)</span>
        </label>
        <textarea id="f-problem" name="problem" />
      </div>
      {attached && <p className="attached">Attached: {attached}</p>}
      <input className="hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <div>
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Request a free session"}
        </button>
      </div>
    </form>
  );
}
