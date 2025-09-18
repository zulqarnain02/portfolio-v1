import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body || {}

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Configure transporter via environment variables
    // Recommended: create .env.local with SMTP settings
    // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS

    if (!host || !user || !pass) {
      return NextResponse.json({ error: "Email transport is not configured" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `

    await transporter.sendMail({
      from: `Portfolio Contact <${user}>`,
      to: "zulqarnain4292@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("/api/contact error", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}


