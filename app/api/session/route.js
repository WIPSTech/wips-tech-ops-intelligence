import nodemailer from "nodemailer";
import { getContent, site } from "../../../lib/i18n";

// Session requests: emails the request to WIPS Tech and a confirmation to the visitor.
//
// Preferred setup, using the existing mailbox (for example Zoho Mail). Set on the host:
//   SMTP_USER  the mailbox address, e.g. info@wipstech.com
//   SMTP_PASS  an app-specific password for that mailbox (never the login password)
//   SMTP_HOST  optional, defaults to smtp.zoho.com (paid Zoho domains use smtppro.zoho.com)
//   SMTP_PORT  optional, defaults to 465
// Alternative: RESEND_API_KEY and SESSION_FROM_EMAIL to send through Resend.
// Optional: SESSION_TO_EMAIL (defaults to info@wipstech.com).
// With neither configured this route answers 501 and the form falls back to Formspree.

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const clean = (value, max) => String(value || "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

function getSender() {
  const { SMTP_USER, SMTP_PASS, RESEND_API_KEY, SESSION_FROM_EMAIL } = process.env;

  if (SMTP_USER && SMTP_PASS) {
    const port = Number(process.env.SMTP_PORT || 465);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.zoho.com",
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    const from = `WIPS Tech <${SMTP_USER}>`;
    return async ({ to, replyTo, subject, text }) => {
      try {
        await transport.sendMail({ from, to, replyTo, subject, text });
        return true;
      } catch {
        return false;
      }
    };
  }

  if (RESEND_API_KEY && SESSION_FROM_EMAIL) {
    return async ({ to, replyTo, subject, text }) => {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({ from: SESSION_FROM_EMAIL, to: [to], reply_to: replyTo, subject, text }),
        });
        return res.ok;
      } catch {
        return false;
      }
    };
  }

  return null;
}

export async function POST(request) {
  const send = getSender();
  if (!send) return Response.json({ error: "not_configured" }, { status: 501 });
  const owner = process.env.SESSION_TO_EMAIL || site.email;

  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  // Bots fill the hidden field. Answer as if it worked and send nothing.
  if (data._gotcha) return Response.json({ ok: true, confirmation: false });

  const name = clean(data.name, 120);
  const clinic = clean(data.clinic, 160);
  const type = clean(data.clinic_type, 80);
  const email = clean(data.email, 200);
  const phone = clean(data.phone, 40);
  const score = clean(data.tifda_score, 200);
  const problem = String(data.problem || "").trim().slice(0, 2000);
  const locale = data.language === "ar" ? "ar" : "en";

  if (!name || !clinic || !type || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const delivered = await send({
    to: owner,
    replyTo: email,
    subject: `Free session request: ${clinic}`,
    text: [
      `Name: ${name}`,
      `Clinic: ${clinic}`,
      `Type: ${type}`,
      `Email: ${email}`,
      `Phone or WhatsApp: ${phone || "-"}`,
      `Language: ${locale}`,
      `TIFDA: ${score || "-"}`,
      "",
      "What is costing the clinic most:",
      problem || "-",
    ].join("\n"),
  });
  if (!delivered) return Response.json({ error: "send_failed" }, { status: 502 });

  const t = getContent(locale);
  const confirmation = await send({
    to: email,
    replyTo: owner,
    subject: t.email.subject,
    text: t.email.body(name),
  });

  return Response.json({ ok: true, confirmation });
}
