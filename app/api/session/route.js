import { getContent, site } from "../../../lib/i18n";

// Session requests. Sends the request to WIPS Tech and a confirmation to the visitor
// through Resend. Needs two environment variables on the host:
//   RESEND_API_KEY      API key from resend.com
//   SESSION_FROM_EMAIL  a sender on a domain verified in Resend, e.g. "WIPS Tech <info@wipstech.com>"
// Optional: SESSION_TO_EMAIL (defaults to info@wipstech.com).
// Until they are set this route answers 501 and the form falls back to Formspree.

export const dynamic = "force-dynamic";

const clean = (value, max) => String(value || "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

async function sendEmail(key, message) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });
  return res.ok;
}

export async function POST(request) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.SESSION_FROM_EMAIL;
  const to = process.env.SESSION_TO_EMAIL || site.email;
  if (!key || !from) {
    return Response.json({ error: "not_configured" }, { status: 501 });
  }

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

  const delivered = await sendEmail(key, {
    from,
    to: [to],
    reply_to: email,
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
  const confirmation = await sendEmail(key, {
    from,
    to: [email],
    reply_to: to,
    subject: t.email.subject,
    text: t.email.body(name),
  });

  return Response.json({ ok: true, confirmation });
}
