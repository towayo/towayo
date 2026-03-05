'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    // Simulate auth — replace with real NextAuth or Supabase
    await new Promise(r => setTimeout(r, 800))
    if (email && password) {
      router.push('/dashboard')
    } else {
      setError('メールアドレスまたはパスワードが正しくありません。')
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%', padding: '0.8rem 1rem',
    background: '#F7F3EE',
    border: '1px solid #E5D9CC',
    borderRadius: '2px', color: '#1a1510',
    fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <div className="min-h-screen flex" style={{ background: '#FAF6F1' }}>
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 p-12"
        style={{ background: '#1a1510', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative */}
        <div style={{
          position: 'absolute', top: '10%', right: '-80px',
          width: '300px', height: '300px',
          border: '1px solid rgba(200,87,42,0.2)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '15%', left: '-60px',
          width: '200px', height: '200px',
          border: '1px solid rgba(200,87,42,0.15)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(200,87,42,0.08) 0%, transparent 60%)',
        }} />

        <Link href="/" className="flex items-center gap-2 relative z-10">
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, color: '#C8572A' }}>TOWAYO</span>
          <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>또 와요 · 도와요</span>
        </Link>

        <div className="relative z-10">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 300, color: 'white', lineHeight: 1.3, marginBottom: '1.5rem' }}>
            企業ダッシュボードへ<br />
            <em style={{ fontStyle: 'italic', color: '#C8572A' }}>ようこそ。</em>
          </h2>
          <p style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: '360px' }}>
            ご契約企業様専用のポータルです。業務進捗の確認、担当者とのメッセージのやり取り、書類の管理が一画面でできます。
          </p>
        </div>

        <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', position: 'relative', zIndex: 10 }}>
          © 2025 TOWAYO Inc.
        </p>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm">
          <Link href="/" className="flex items-center gap-2 mb-8 text-sm"
            style={{ fontFamily: 'Noto Sans JP, sans-serif', color: '#7a6a5a', fontSize: '0.82rem' }}>
            <ArrowLeft size={14} />
            サイトトップへ
          </Link>

          {/* Mobile logo */}
          <div className="lg:hidden mb-8">
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 600, color: '#C8572A' }}>TOWAYO</span>
          </div>

          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 400, color: '#1a1510', marginBottom: '0.5rem' }}>
            ログイン
          </h1>
          <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.8rem', color: '#7a6a5a', marginBottom: '2rem' }}>
            ご契約企業様専用ポータル
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: '#7a6a5a', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>
                メールアドレス
              </label>
              <input
                type="email" required
                value={email} onChange={e => setEmail(e.target.value)}
                style={inputStyle}
                placeholder="company@example.com"
              />
            </div>

            <div>
              <label style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: '#7a6a5a', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>
                パスワード
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPw ? 'text' : 'password'} required
                  value={password} onChange={e => setPassword(e.target.value)}
                  style={{ ...inputStyle, paddingRight: '2.8rem' }}
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#7a6a5a', background: 'none', border: 'none', cursor: 'pointer' }}>
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.8rem', color: '#C8572A', background: 'rgba(200,87,42,0.08)', padding: '0.6rem 0.8rem', borderRadius: '2px' }}>
                {error}
              </p>
            )}

            <div className="flex justify-end">
              <a href="#" style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.75rem', color: '#C8572A' }}>
                パスワードをお忘れの方
              </a>
            </div>

            <button type="submit" disabled={loading}
              style={{
                width: '100%', padding: '0.85rem',
                background: loading ? '#D4B8A8' : '#C8572A',
                color: 'white', border: 'none', borderRadius: '2px',
                fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.9rem', letterSpacing: '0.08em',
                cursor: loading ? 'not-allowed' : 'pointer', transition: 'opacity 0.2s',
              }}
              className="hover:opacity-90">
              {loading ? 'ログイン中...' : 'ログイン'}
            </button>
          </form>

          <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.78rem', color: '#7a6a5a', textAlign: 'center', marginTop: '2rem' }}>
            アカウントをお持ちでない方は<br />
            <a href="#contact" style={{ color: '#C8572A' }}>お問い合わせください</a>
          </p>
        </div>
      </div>
    </div>
  )
}
