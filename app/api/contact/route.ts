import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, company, email, inquiry, message } = await req.json()

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }

  const subject = inquiry
    ? `[TOWAYO] ${inquiry} — ${name}`
    : `[TOWAYO] お問い合わせ — ${name}`

  const body = `
お名前: ${name}
会社名: ${company || '—'}
メール: ${email}
種別: ${inquiry || '—'}

---
${message}
  `.trim()

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: 'TOWAYO Contact <noreply@towayo.com>',
      to: ['bhrjapan@gmail.com'],
      reply_to: email,
      subject,
      text: body,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
