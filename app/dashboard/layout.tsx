'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, MessageSquare, FileText, Settings,
  LogOut, Menu, X, Bell, ChevronDown
} from 'lucide-react'

const NAV = [
  { icon: LayoutDashboard, label: 'ダッシュボード', href: '/dashboard' },
  { icon: MessageSquare, label: 'メッセージ', href: '/dashboard/messages', badge: 2 },
  { icon: FileText, label: '書類・レポート', href: '/dashboard/documents' },
  { icon: Settings, label: '設定', href: '/dashboard/settings' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen" style={{ background: '#F7F3EE' }}>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ background: '#1a1510', borderRight: '1px solid rgba(200,87,42,0.15)' }}>

        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/" className="flex items-center gap-2">
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: '#C8572A' }}>TOWAYO</span>
          </Link>
          <button className="lg:hidden text-gray-400" onClick={() => setSidebarOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Company info */}
        <div className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{
            width: '2.2rem', height: '2.2rem', borderRadius: '4px',
            background: 'rgba(200,87,42,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '0.5rem',
          }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#C8572A', fontWeight: 600 }}>K</span>
          </div>
          <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.82rem', color: 'white', fontWeight: 500 }}>
            株式会社Komachi
          </p>
          <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.1rem' }}>
            スタンダードプラン
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          {NAV.map(({ icon: Icon, label, href, badge }) => {
            const active = pathname === href
            return (
              <Link key={href} href={href}
                onClick={() => setSidebarOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-sm transition-colors group"
                style={{
                  background: active ? 'rgba(200,87,42,0.15)' : 'transparent',
                  borderLeft: active ? '2px solid #C8572A' : '2px solid transparent',
                }}>
                <div className="flex items-center gap-3">
                  <Icon size={16} style={{ color: active ? '#C8572A' : 'rgba(255,255,255,0.45)' }} />
                  <span style={{
                    fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.82rem',
                    color: active ? 'white' : 'rgba(255,255,255,0.55)',
                  }}>{label}</span>
                </div>
                {badge && (
                  <span style={{
                    background: '#C8572A', color: 'white',
                    fontSize: '0.65rem', width: '18px', height: '18px',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Noto Sans JP, sans-serif',
                  }}>{badge}</span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="px-4 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-sm"
            style={{ color: 'rgba(255,255,255,0.35)' }}>
            <LogOut size={16} />
            <span style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.82rem' }}>ログアウト</span>
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 lg:ml-64 flex flex-col">
        {/* Topbar */}
        <header style={{ background: 'white', borderBottom: '1px solid #E5D9CC' }}
          className="flex items-center justify-between px-6 h-14 sticky top-0 z-30">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} style={{ color: '#3d3228' }} />
          </button>
          <div className="hidden lg:block" />
          <div className="flex items-center gap-4">
            <button style={{ position: 'relative', color: '#7a6a5a' }}>
              <Bell size={18} />
              <span style={{
                position: 'absolute', top: '-2px', right: '-2px',
                width: '8px', height: '8px', background: '#C8572A', borderRadius: '50%',
              }} />
            </button>
            <div className="flex items-center gap-2" style={{ borderLeft: '1px solid #E5D9CC', paddingLeft: '1rem' }}>
              <div style={{
                width: '1.8rem', height: '1.8rem', borderRadius: '50%',
                background: 'rgba(200,87,42,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem', color: '#C8572A' }}>K</span>
              </div>
              <span style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.8rem', color: '#3d3228' }}>山田様</span>
              <ChevronDown size={14} style={{ color: '#7a6a5a' }} />
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
