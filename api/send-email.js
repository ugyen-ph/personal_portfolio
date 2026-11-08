// Vercel Serverless Function for the contact form (/api/send-email)
// Vercel invokes this per request — no long-running server needed.
export default async (req, res) => {
  // Prefer JSON bodies for programmatic clients; fall back to form-urlencoded
  let body = [];
  try {
    if (req && req.raw && req.raw.json) {
      body = await req.json();
    }
  } catch (e) {
    body = {};
  }

  // Support both { name, company, email, message } shapes
  const form = req && req.body ? req.body : body;
  const name = form.name || form.name_full || "";
  const company = form.company || "";
  const email = form.email || "";
  const message = form.message || form.msg || "";

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Missing required fields: name, email, message"
    });
  }

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.FOLIO_EMAIL,
      pass: process.env.FOLIO_PASSWORD,
    },
  });

  try {
    await transporter.verify();
    await transporter.sendMail({
      from: `"${name}" <pugyen82@gmail.com>`,
      to: "pugyen82@gmail.com",
      subject: `${name} <${email}>${company ? ` from ${company}` : ""} submitted a contact form`,
      text: message,
    });

    res.status(200).json({ message: "success" });
  } catch (e) {
    console.error("Failed to send email:", e);
    res.status(500).json({ message: "Failed to send email", error: e.message });
  }
};
