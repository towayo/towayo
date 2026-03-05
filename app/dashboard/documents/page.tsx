'use client'

import { FileText, Download, Eye, Search } from 'lucide-react'

const DOCS = [
  { name: '2025年4月_月次レポート.pdf', type: 'レポート', date: '2025-04-15', size: '240 KB' },
  { name: '4月_郵便物スキャン.zip', type: '郵便', date: '2025-04-15', size: '1.2 MB' },
  { name: '翻訳_メール3通_2025-04-14.pdf', type: '翻訳', date: '2025-04-14', size: '180 KB' },
  { name: '2025年3月_月次レポート.pdf', type: 'レポート', date: '2025-03-31', size: '215 KB' },
  { name: '3月_経費精算チェック.xlsx', type: '経費', date: '2025-03-28', size: '95 KB' },
]

const TYPE_COLORS: Record<string, string> = {
  レポート: '#2d7a4a',
  郵便: '#C8572A',
  翻訳: '#3b6fa0',
  経費: '#8b5cf6',
}

export default function DocumentsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 400, color: '#1a1510' }}>
          書類・レポート
        </h1>
        <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.82rem', color: '#7a6a5a', marginTop: '0.25rem' }}>
          担当者から共有された書類を閲覧・ダウンロードできます。
        </p>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
        <Search size={15} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#7a6a5a' }} />
        <input placeholder="ファイル名で検索..."
          style={{
            width: '100%', paddingLeft: '2.5rem', paddingRight: '1rem', paddingTop: '0.7rem', paddingBottom: '0.7rem',
            background: 'white', border: '1px solid #E5D9CC', borderRadius: '4px',
            fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.85rem', color: '#1a1510', outline: 'none',
          }} />
      </div>

      <div style={{ background: 'white', border: '1px solid #E5D9CC', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ padding: '0.7rem 1.5rem', background: '#FAF6F1', borderBottom: '1px solid #E5D9CC', display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '1rem' }}>
          {['ファイル名', '種別', '日付', ''].map((h, i) => (
            <span key={i} style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.7rem', color: '#7a6a5a', letterSpacing: '0.08em' }}>{h}</span>
          ))}
        </div>
        {DOCS.map((doc, i) => (
          <div key={i} style={{
            padding: '1rem 1.5rem', borderBottom: i < DOCS.length - 1 ? '1px solid #F0E9DF' : 'none',
            display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '1rem', alignItems: 'center',
          }}
            className="hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <FileText size={16} style={{ color: TYPE_COLORS[doc.type] || '#7a6a5a', flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.85rem', color: '#1a1510' }}>{doc.name}</p>
                <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.7rem', color: '#7a6a5a', marginTop: '0.1rem' }}>{doc.size}</p>
              </div>
            </div>
            <span style={{
              fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.7rem',
              color: TYPE_COLORS[doc.type] || '#7a6a5a',
              background: `${TYPE_COLORS[doc.type]}18`,
              padding: '0.15rem 0.6rem', borderRadius: '2px',
            }}>{doc.type}</span>
            <span style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.78rem', color: '#7a6a5a' }}>{doc.date}</span>
            <div className="flex gap-2">
              <button style={{ color: '#7a6a5a', padding: '0.3rem' }} className="hover:text-gray-900 transition-colors">
                <Eye size={15} />
              </button>
              <button style={{ color: '#7a6a5a', padding: '0.3rem' }} className="hover:text-gray-900 transition-colors">
                <Download size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
