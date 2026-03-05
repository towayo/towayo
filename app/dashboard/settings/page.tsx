'use client'

import { useState } from 'react'
import { Save } from 'lucide-react'

export default function SettingsPage() {
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const inputStyle = {
    width: '100%', padding: '0.7rem 1rem',
    background: '#FAF6F1', border: '1px solid #E5D9CC',
    borderRadius: '2px', color: '#1a1510',
    fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.85rem', outline: 'none',
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 400, color: '#1a1510' }}>
          設定
        </h1>
      </div>

      <div className="space-y-6">
        {/* Company info */}
        <div style={{ background: 'white', border: '1px solid #E5D9CC', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5D9CC', background: '#FAF6F1' }}>
            <h2 style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.92rem', fontWeight: 500, color: '#1a1510' }}>会社情報</h2>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <label style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: '#7a6a5a', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>会社名</label>
              <input style={inputStyle} defaultValue="株式会社Komachi" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: '#7a6a5a', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>担当者名</label>
                <input style={inputStyle} defaultValue="山田 太郎" />
              </div>
              <div>
                <label style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: '#7a6a5a', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>連絡先メール</label>
                <input type="email" style={inputStyle} defaultValue="yamada@komachi.co.jp" />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div style={{ background: 'white', border: '1px solid #E5D9CC', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5D9CC', background: '#FAF6F1' }}>
            <h2 style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.92rem', fontWeight: 500, color: '#1a1510' }}>通知設定</h2>
          </div>
          <div className="p-5 space-y-4">
            {[
              { label: '新しいメッセージを受信したとき', defaultChecked: true },
              { label: '書類・レポートが追加されたとき', defaultChecked: true },
              { label: '月次レポート送付時', defaultChecked: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.85rem', color: '#3d3228' }}>{item.label}</span>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked={item.defaultChecked}
                    style={{ accentColor: '#C8572A', width: '16px', height: '16px' }} />
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Plan */}
        <div style={{ background: '#F0E9DF', border: '1px solid #E5D9CC', borderRadius: '4px', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: '#7a6a5a', marginBottom: '0.2rem' }}>現在のプラン</p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#1a1510' }}>
              スタンダード <span style={{ color: '#C8572A' }}>¥40,000/月</span>
            </p>
          </div>
          <button style={{
            fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.82rem',
            color: '#C8572A', border: '1px solid #C8572A',
            padding: '0.45rem 1.2rem', borderRadius: '2px', background: 'transparent', cursor: 'pointer',
          }}>
            プランを変更する
          </button>
        </div>

        <div className="flex justify-end">
          <button onClick={handleSave}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: saved ? '#2d7a4a' : '#C8572A', color: 'white',
              padding: '0.7rem 2rem', borderRadius: '2px', border: 'none', cursor: 'pointer',
              fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.88rem', letterSpacing: '0.06em',
              transition: 'background 0.3s',
            }}>
            <Save size={15} />
            {saved ? '保存しました' : '変更を保存'}
          </button>
        </div>
      </div>
    </div>
  )
}
