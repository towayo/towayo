import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, company, email, inquiry, message } = await req.json()

  const subject = inquiry
    ? `[TOWAYO] ${inquiry} — ${name}`
    : `[TOWAYO] お問い合わせ — ${name}`

  const html = `
    <h2 style="color:#C8572A;">TOWAYO お問い合わせ</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;width:130px;">お名前</td><td style="padding:8px;border:1px solid #eee;">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">会社名</td><td style="padding:8px;border:1px solid #eee;">${company || '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">返信先</td><td style="padding:8px;border:1px solid #eee;">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">種別</td><td style="padding:8px;border:1px solid #eee;">${inquiry || '—'}</td></tr>
    </table>
    <h3 style="margin-top:20px;">お問い合わせ内容</h3>
    <p style="background:#f9f9f9;padding:16px;border-left:3px solid #C8572A;white-space:pre-wrap;">${message}</p>
  `

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'towayo.official@gmail.com',
    reply_to: email,
    subject,
    html,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
