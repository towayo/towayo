'use client'

import { useState } from 'react'
import { Send, Paperclip } from 'lucide-react'

const CONVERSATIONS = [
  {
    id: 1,
    from: '田中 恵（担当）',
    messages: [
      { sender: 'staff', text: 'おはようございます。4月分の郵便物3通をスキャンしてお送りします。', time: '9:00' },
      { sender: 'staff', text: '内容は請求書2通と、金融機関からのお知らせ1通です。', time: '9:01' },
      { sender: 'client', text: 'ありがとうございます。確認しました。請求書の支払い手続きを進めます。', time: '10:30' },
      { sender: 'staff', text: '承知しました。何かご不明点があればいつでもご連絡ください。', time: '10:35' },
      { sender: 'staff', text: '3通のメール翻訳が完了しました。添付ファイルをご確認ください。', time: '13:20' },
    ],
    unread: 1,
  },
]

export default function MessagesPage() {
  const [input, setInput] = useState('')
  const conv = CONVERSATIONS[0]

  const handleSend = () => {
    if (!input.trim()) return
    setInput('')
  }

  return (
    <div className="max-w-4xl mx-auto h-full">
      <div className="mb-6">
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 400, color: '#1a1510' }}>
          メッセージ
        </h1>
        <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.82rem', color: '#7a6a5a', marginTop: '0.25rem' }}>
          担当者とのやり取りを確認・返信できます。
        </p>
      </div>

      <div style={{ background: 'white', border: '1px solid #E5D9CC', borderRadius: '4px', overflow: 'hidden', height: '70vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5D9CC', background: '#FAF6F1' }}>
          <p style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.92rem', fontWeight: 500, color: '#1a1510' }}>
            {conv.from}
          </p>
          <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.7rem', color: '#7a6a5a' }}>
            スタンダードプラン担当
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {conv.messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}>
              <div style={{
                maxWidth: '72%',
                background: msg.sender === 'client' ? '#C8572A' : '#F0E9DF',
                color: msg.sender === 'client' ? 'white' : '#1a1510',
                padding: '0.75rem 1rem',
                borderRadius: msg.sender === 'client' ? '8px 8px 2px 8px' : '8px 8px 8px 2px',
              }}>
                <p style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  {msg.text}
                </p>
                <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.65rem', marginTop: '0.3rem', opacity: 0.65, textAlign: 'right' }}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #E5D9CC', display: 'flex', gap: '0.75rem', alignItems: 'flex-end' }}>
          <button style={{ color: '#7a6a5a', flexShrink: 0, padding: '0.4rem' }}>
            <Paperclip size={18} />
          </button>
          <textarea
            rows={2}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="メッセージを入力..."
            style={{
              flex: 1, resize: 'none',
              background: '#F7F3EE', border: '1px solid #E5D9CC',
              borderRadius: '4px', padding: '0.6rem 0.8rem',
              fontFamily: 'Noto Serif JP, serif', fontSize: '0.85rem',
              color: '#1a1510', outline: 'none',
            }}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
          />
          <button onClick={handleSend}
            style={{
              background: '#C8572A', color: 'white',
              borderRadius: '4px', padding: '0.6rem 0.9rem',
              border: 'none', cursor: 'pointer', flexShrink: 0,
            }}
            className="hover:opacity-90 transition-opacity">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
