'use client'

import { Check, Clock, AlertCircle, TrendingUp, MessageSquare, FileText, Calendar } from 'lucide-react'

const RECENT_TASKS = [
  { id: 1, title: '4月分郵便物スキャン送付', status: 'done', date: '2025-04-15', type: '郵便管理' },
  { id: 2, title: '取引先メール翻訳（3通）', status: 'done', date: '2025-04-14', type: '翻訳' },
  { id: 3, title: '月次経費レポート作成', status: 'in-progress', date: '2025-04-16', type: '経費管理' },
  { id: 4, title: '商談同行（渋谷 ○○社）', status: 'pending', date: '2025-04-20', type: '対面同行' },
]

const MESSAGES = [
  { from: '田中 恵（担当）', msg: '3通のメール翻訳が完了しました。ご確認ください。', time: '13:20', unread: true },
  { from: '田中 恵（担当）', msg: '今月の郵便物スキャンをお送りしました。', time: '昨日', unread: false },
  { from: 'TOWAYO事務局', msg: '5月のサービスレポートが準備できました。', time: '4/10', unread: false },
]

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; icon: any }> = {
  done: { label: '完了', color: '#2d7a4a', bg: 'rgba(45,122,74,0.1)', icon: Check },
  'in-progress': { label: '進行中', color: '#C8572A', bg: 'rgba(200,87,42,0.1)', icon: Clock },
  pending: { label: '予定', color: '#7a6a5a', bg: 'rgba(122,106,90,0.1)', icon: Calendar },
}

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Welcome */}
      <div style={{ background: '#1a1510', borderRadius: '4px', padding: '1.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', right: '-40px', top: '-40px',
          width: '160px', height: '160px',
          border: '1px solid rgba(200,87,42,0.2)', borderRadius: '50%',
        }} />
        <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>
          2025年4月16日（水）
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 400, color: 'white' }}>
          おはようございます、<em style={{ fontStyle: 'italic', color: '#C8572A' }}>山田様</em>。
        </h1>
        <p style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.3rem' }}>
          担当：田中 恵 ／ スタンダードプラン
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Check, label: '今月完了', value: '12', unit: '件', color: '#2d7a4a' },
          { icon: Clock, label: '進行中', value: '2', unit: '件', color: '#C8572A' },
          { icon: MessageSquare, label: '未読メッセージ', value: '1', unit: '件', color: '#1a1510' },
          { icon: FileText, label: '書類', value: '5', unit: 'ファイル', color: '#7a6a5a' },
        ].map(({ icon: Icon, label, value, unit, color }) => (
          <div key={label} style={{ background: 'white', borderRadius: '4px', padding: '1.25rem 1.5rem', border: '1px solid #E5D9CC' }}>
            <div className="flex items-center justify-between mb-2">
              <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: '#7a6a5a', letterSpacing: '0.08em' }}>{label}</p>
              <Icon size={14} style={{ color }} />
            </div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: '#1a1510', lineHeight: 1 }}>
              {value}<span style={{ fontSize: '0.9rem', fontFamily: 'Noto Sans JP, sans-serif', color: '#7a6a5a', fontWeight: 400, marginLeft: '0.2rem' }}>{unit}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Tasks */}
        <div className="md:col-span-2" style={{ background: 'white', borderRadius: '4px', border: '1px solid #E5D9CC', overflow: 'hidden' }}>
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #E5D9CC' }}>
            <h2 style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.95rem', fontWeight: 500, color: '#1a1510' }}>
              最近の業務
            </h2>
            <span style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: '#C8572A', cursor: 'pointer' }}>
              すべて見る →
            </span>
          </div>
          <div>
            {RECENT_TASKS.map((task, i) => {
              const status = STATUS_CONFIG[task.status]
              const StatusIcon = status.icon
              return (
                <div key={task.id}
                  style={{ padding: '0.9rem 1.25rem', borderBottom: i < RECENT_TASKS.length - 1 ? '1px solid #F0E9DF' : 'none' }}
                  className="flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div style={{ background: status.bg, borderRadius: '4px', padding: '0.3rem', flexShrink: 0 }}>
                      <StatusIcon size={13} style={{ color: status.color }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.85rem', color: '#1a1510' }}>{task.title}</p>
                      <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.7rem', color: '#7a6a5a', marginTop: '0.1rem' }}>
                        {task.type} · {task.date}
                      </p>
                    </div>
                  </div>
                  <span style={{
                    fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.68rem',
                    color: status.color, background: status.bg,
                    padding: '0.15rem 0.6rem', borderRadius: '2px',
                  }}>{status.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Messages */}
        <div style={{ background: 'white', borderRadius: '4px', border: '1px solid #E5D9CC', overflow: 'hidden' }}>
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #E5D9CC' }}>
            <h2 style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.95rem', fontWeight: 500, color: '#1a1510' }}>
              メッセージ
            </h2>
            <span style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: '#C8572A', cursor: 'pointer' }}>
              全て見る →
            </span>
          </div>
          <div>
            {MESSAGES.map((msg, i) => (
              <div key={i}
                style={{
                  padding: '0.9rem 1.25rem',
                  borderBottom: i < MESSAGES.length - 1 ? '1px solid #F0E9DF' : 'none',
                  background: msg.unread ? 'rgba(200,87,42,0.03)' : 'transparent',
                }}>
                <div className="flex items-center justify-between mb-1">
                  <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.78rem', color: '#3d3228', fontWeight: msg.unread ? 600 : 400 }}>
                    {msg.from}
                  </p>
                  <span style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.65rem', color: '#7a6a5a' }}>{msg.time}</span>
                </div>
                <p style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.78rem', color: '#7a6a5a', lineHeight: 1.5 }}>
                  {msg.msg}
                </p>
                {msg.unread && (
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C8572A', marginTop: '0.5rem' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plan info */}
      <div style={{ background: '#F0E9DF', borderRadius: '4px', padding: '1.25rem 1.5rem', border: '1px solid #E5D9CC', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: '#7a6a5a', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>現在のご契約プラン</p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#1a1510', fontWeight: 600 }}>スタンダードプラン <span style={{ fontSize: '1rem', color: '#C8572A' }}>¥40,000/月</span></p>
          <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.75rem', color: '#7a6a5a', marginTop: '0.2rem' }}>
            次回更新：2025年5月1日 ｜ 担当：田中 恵
          </p>
        </div>
        <button style={{
          fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.82rem',
          color: '#C8572A', border: '1px solid #C8572A',
          padding: '0.5rem 1.2rem', borderRadius: '2px', background: 'transparent', cursor: 'pointer',
        }}
          className="hover:bg-orange-50 transition-colors">
          プランを変更する
        </button>
      </div>
    </div>
  )
}
