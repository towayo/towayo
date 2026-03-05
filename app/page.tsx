'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight, Check, Mail, Phone, MapPin, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'サービス', href: '#services' },
  { label: '料金プラン', href: '#pricing' },
  { label: '私たちについて', href: '#about' },
  { label: 'お問い合わせ', href: '#contact' },
]

const SERVICES = [
  {
    icon: '📬',
    title: '郵便・メール管理',
    desc: '郵便物の受領・転送・スキャン報告。メール受信本文の翻訳対応。',
  },
  {
    icon: '🗣️',
    title: '顧客対応・翻訳',
    desc: '日韓バイリンガル対応。メール・電話での問い合わせ対応、書類翻訳。',
  },
  {
    icon: '📅',
    title: 'スケジュール管理',
    desc: 'アポイント調整、出張・会議・イベント予約手配、会議室手配。',
  },
  {
    icon: '💴',
    title: '経費管理',
    desc: '経費精算チェック、データ入力・整理、週次レポート作成。',
  },
  {
    icon: '📝',
    title: '資料・文書作成',
    desc: '議事録作成・文字起こし、報告書・書状データ作成、リサーチ対応。',
  },
  {
    icon: '🤝',
    title: '対面同行サポート',
    desc: '現地での商談・打ち合わせへの同行。営業活動サポート（VIPプラン）。',
  },
]

const PLANS = [
  {
    name: 'ライト',
    nameKo: '라이트',
    price: '20,000',
    color: '#E8D5C8',
    services: ['郵便物受領・スキャン・転送', 'メール受信本文の翻訳（内容報告）'],
    note: '担当者とのやり取りなし',
  },
  {
    name: 'スタンダード',
    nameKo: '스탠더드',
    price: '40,000',
    color: '#D4B8A8',
    services: ['ライトの全内容', '翻訳対応（A4 10枚まで）', '顧客管理（メールのやり取り）', 'LINE WORKS連携可'],
    note: '担当者と直接連携可能',
    popular: true,
  },
  {
    name: 'アドバンス',
    nameKo: '어드밴스',
    price: '60,000',
    color: '#C09880',
    services: ['スタンダードの全内容', '経費管理サポート', 'LINE WORKS連携'],
    note: '管理ソリューション費用は顧客負担',
  },
  {
    name: 'プレミアム',
    nameKo: '프리미엄',
    price: '80,000',
    color: '#C8572A',
    services: ['アドバンスの全内容', '対面同行 1回/月', 'LINE WORKS連携'],
    note: '交通費・食事代は別途精算',
    dark: true,
  },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#FAF6F1', color: '#1a1510' }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(250,246,241,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid #E5D9CC' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '1.6rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#C8572A',
            }}>TOWAYO</span>
            <span style={{ fontSize: '0.65rem', color: '#7a6a5a', letterSpacing: '0.1em' }}>또 와요 · 도와요</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href}
                style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.85rem', color: '#3d3228', letterSpacing: '0.05em' }}
                className="hover:text-orange-700 transition-colors">
                {l.label}
              </a>
            ))}
            <Link href="/login"
              style={{
                background: '#C8572A',
                color: 'white',
                padding: '0.4rem 1.2rem',
                borderRadius: '2px',
                fontFamily: 'Noto Sans JP, sans-serif',
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
              }}
              className="hover:opacity-90 transition-opacity">
              ログイン
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: '#FAF6F1', borderTop: '1px solid #E5D9CC' }} className="md:hidden px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.9rem', color: '#3d3228' }}>
                {l.label}
              </a>
            ))}
            <Link href="/login" onClick={() => setMenuOpen(false)}
              style={{ background: '#C8572A', color: 'white', padding: '0.5rem 1rem', textAlign: 'center', borderRadius: '2px', fontSize: '0.9rem' }}>
              ログイン
            </Link>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '4rem' }}>
        {/* Background texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(200,87,42,0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(200,87,42,0.04) 0%, transparent 40%)`,
        }} />

        {/* Decorative elements */}
        <div style={{
          position: 'absolute', top: '15%', right: '8%',
          width: '280px', height: '280px',
          border: '1px solid rgba(200,87,42,0.15)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', top: '20%', right: '10%',
          width: '200px', height: '200px',
          border: '1px solid rgba(200,87,42,0.08)',
          borderRadius: '50%',
        }} />

        <div className="max-w-6xl mx-auto px-6 w-full py-24">
          <div className="max-w-3xl">
            <p style={{
              fontFamily: 'Noto Sans JP, sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              color: '#C8572A',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
            }}>
              Korea × Japan Business Support
            </p>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: '0.5rem',
              color: '#1a1510',
            }}>
              韓国企業の<br />
              <em style={{ fontStyle: 'italic', color: '#C8572A' }}>日本進出</em>を、<br />
              共に。
            </h1>

            <div style={{ height: '2px', width: '60px', background: '#C8572A', margin: '2rem 0' }} />

            <p style={{
              fontFamily: 'Noto Serif JP, Georgia, serif',
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              lineHeight: 1.9,
              color: '#3d3228',
              maxWidth: '520px',
              marginBottom: '2.5rem',
            }}>
              「また来て」「手伝います」——<br />
              TOWAYOは、韓国企業が日本市場に根を張るための<br />
              バックオフィス業務を丸ごとサポートします。
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#services"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: '#C8572A', color: 'white',
                  padding: '0.85rem 2rem', borderRadius: '2px',
                  fontFamily: 'Noto Sans JP, sans-serif',
                  fontSize: '0.9rem', letterSpacing: '0.08em',
                }}
                className="hover:opacity-90 transition-opacity">
                サービスを見る <ArrowRight size={16} />
              </a>
              <a href="#pricing"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  border: '1px solid #C8572A', color: '#C8572A',
                  padding: '0.85rem 2rem', borderRadius: '2px',
                  fontFamily: 'Noto Sans JP, sans-serif',
                  fontSize: '0.9rem', letterSpacing: '0.08em',
                  background: 'transparent',
                }}
                className="hover:bg-orange-50 transition-colors">
                料金プラン
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl">
            {[
              { num: '4', unit: 'プラン', desc: '月額定額制' },
              { num: '1対1', unit: '専属', desc: '担当者制度' },
              { num: '韓日', unit: 'バイリンガル', desc: '在宅スタッフ' },
            ].map((s) => (
              <div key={s.num}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2rem', fontWeight: 600, color: '#C8572A', lineHeight: 1,
                }}>{s.num}</div>
                <div style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.7rem', color: '#7a6a5a', letterSpacing: '0.1em' }}>{s.unit}</div>
                <div style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.8rem', color: '#3d3228', marginTop: '0.25rem' }}>{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: '#C8572A' }}>
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: '#F0E9DF' }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', letterSpacing: '0.25em', color: '#C8572A', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Services
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1a1510' }}>
              サービス内容
            </h2>
            <div style={{ height: '2px', width: '40px', background: '#C8572A', marginTop: '1rem' }} />
            <p style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.95rem', color: '#7a6a5a', marginTop: '1rem', maxWidth: '500px', lineHeight: 1.8 }}>
              日本進出初期の煩雑なバックオフィス業務を、専属の日韓バイリンガルスタッフが代行します。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: '#E5D9CC' }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ background: '#FAF6F1', padding: '2rem' }} className="group hover:bg-orange-50 transition-colors">
                <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '1rem', fontWeight: 500, color: '#1a1510', marginBottom: '0.5rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.82rem', color: '#7a6a5a', lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', letterSpacing: '0.25em', color: '#C8572A', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                About TOWAYO
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1a1510', marginBottom: '1.5rem' }}>
                また来てほしい。<br />
                <em style={{ fontStyle: 'italic', color: '#C8572A' }}>お手伝いします。</em>
              </h2>
              <div style={{ height: '2px', width: '40px', background: '#C8572A', marginBottom: '1.5rem' }} />
              <div style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.95rem', color: '#3d3228', lineHeight: 2 }} className="space-y-4">
                <p>
                  TOWAYO（또 와요・도와요）は、韓国語で「また来て」「手伝います」という意味を持ちます。
                </p>
                <p>
                  韓国企業の日本進出支援に長年携わってきた経験から、法人設立後の郵便対応・顧客応対・経理業務などの実務課題を深く理解しています。
                </p>
                <p>
                  日本在住の韓日バイリンガルの女性スタッフ（子育て後の再就職希望者を積極採用）が、専属担当として企業を継続サポートします。
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Visual element */}
              <div style={{
                background: '#E5D9CC',
                padding: '2.5rem',
                borderRadius: '2px',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: '-10px', left: '-10px',
                  width: '60px', height: '60px',
                  background: '#C8572A', opacity: 0.15,
                }} />
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#C8572A', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  なぜTOWAYOが選ばれるのか
                </h3>
                {[
                  '韓国→日本進出企業に特化',
                  '月額定額で明確な料金体系',
                  '入居契約不要・サービス単独利用可',
                  '専属担当制（社員のような継続サポート）',
                  '在宅バイリンガル人材による雇用創出',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-3">
                    <Check size={15} style={{ color: '#C8572A', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.88rem', color: '#3d3228', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: '#F0E9DF' }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', letterSpacing: '0.25em', color: '#C8572A', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Pricing
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1a1510' }}>
              料金プラン
            </h2>
            <p style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.88rem', color: '#7a6a5a', marginTop: '0.75rem' }}>
              月額定額制。すべて税別表示。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLANS.map((plan) => (
              <div key={plan.name}
                style={{
                  background: plan.dark ? '#C8572A' : '#FAF6F1',
                  border: `1px solid ${plan.dark ? '#C8572A' : '#E5D9CC'}`,
                  padding: '2rem 1.5rem',
                  borderRadius: '2px',
                  position: 'relative',
                }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                    background: '#1a1510', color: 'white',
                    padding: '0.2rem 0.8rem',
                    fontFamily: 'Noto Sans JP, sans-serif',
                    fontSize: '0.65rem', letterSpacing: '0.1em',
                    borderRadius: '2px',
                  }}>人気プラン</div>
                )}

                <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: plan.dark ? 'rgba(255,255,255,0.7)' : '#C8572A', marginBottom: '0.3rem' }}>
                  {plan.nameKo}
                </p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: plan.dark ? 'white' : '#1a1510', marginBottom: '0.5rem' }}>
                  {plan.name}
                </h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 600, color: plan.dark ? 'white' : '#C8572A' }}>
                    ¥{plan.price}
                  </span>
                  <span style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.75rem', color: plan.dark ? 'rgba(255,255,255,0.7)' : '#7a6a5a', marginLeft: '0.25rem' }}>
                    /月
                  </span>
                </div>

                <div style={{ height: '1px', background: plan.dark ? 'rgba(255,255,255,0.2)' : '#E5D9CC', marginBottom: '1.25rem' }} />

                <ul className="space-y-2 mb-4">
                  {plan.services.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={13} style={{ color: plan.dark ? 'rgba(255,255,255,0.8)' : '#C8572A', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.78rem', color: plan.dark ? 'rgba(255,255,255,0.9)' : '#3d3228', lineHeight: 1.5 }}>{s}</span>
                    </li>
                  ))}
                </ul>

                {plan.note && (
                  <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.68rem', color: plan.dark ? 'rgba(255,255,255,0.6)' : '#7a6a5a', marginTop: '0.75rem', borderTop: `1px solid ${plan.dark ? 'rgba(255,255,255,0.15)' : '#E5D9CC'}`, paddingTop: '0.75rem' }}>
                    ※ {plan.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* VIP note */}
          <div style={{ background: '#1a1510', color: 'white', padding: '1.5rem 2rem', marginTop: '1rem', borderRadius: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#C8572A' }}>VIPプラン</span>
              <span style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginLeft: '1rem' }}>プレミアム＋現地営業活動（6ヶ月コース） — 料金は要相談</span>
            </div>
            <a href="#contact" style={{ background: '#C8572A', color: 'white', padding: '0.5rem 1.5rem', fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.82rem', borderRadius: '2px', letterSpacing: '0.06em' }}
              className="hover:opacity-90 transition-opacity">
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', letterSpacing: '0.25em', color: '#C8572A', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              How It Works
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#1a1510' }}>
              ご利用の流れ
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'お問い合わせ', desc: 'フォームまたはメールでご連絡ください。' },
              { step: '02', title: 'ヒアリング', desc: '業務内容・ご要望をオンラインでお伺いします。' },
              { step: '03', title: '専属担当アサイン', desc: '最適なバイリンガルスタッフを選定します。' },
              { step: '04', title: 'サービス開始', desc: 'LINEWORKSなどで連携しながら業務開始。' },
            ].map((s, i) => (
              <div key={i} className="relative text-center">
                {i < 3 && (
                  <div style={{
                    position: 'absolute', top: '1.5rem', left: '60%', right: '-40%',
                    height: '1px', background: '#E5D9CC',
                  }} className="hidden md:block" />
                )}
                <div style={{
                  width: '3rem', height: '3rem',
                  border: '1px solid #C8572A', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#C8572A',
                }}>
                  {s.step}
                </div>
                <h3 style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.95rem', fontWeight: 500, color: '#1a1510', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.8rem', color: '#7a6a5a', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#1a1510' }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', letterSpacing: '0.25em', color: '#C8572A', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Contact
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'white', marginBottom: '1.5rem' }}>
                お問い合わせ
              </h2>
              <div style={{ height: '2px', width: '40px', background: '#C8572A', marginBottom: '2rem' }} />
              <p style={{ fontFamily: 'Noto Serif JP, serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.9, marginBottom: '2rem' }}>
                サービスのご相談、お見積りはお気軽にどうぞ。<br />通常2営業日以内にご返答いたします。
              </p>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'info@towayo.com' },
                  { icon: MapPin, text: '東京都（詳細はお問い合わせ後）' },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon size={16} style={{ color: '#C8572A' }} />
                    <span style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0f0c09', borderTop: '1px solid rgba(200,87,42,0.2)' }} className="py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: '#C8572A' }}>TOWAYO</span>
            <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>
              韓国企業の日本進出をサポートする
            </p>
          </div>
          <div className="flex gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}
                className="hover:text-orange-400 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>
            © 2025 TOWAYO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '', plan: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, connect to actual email service
    console.log('Form submitted:', form)
    setSent(true)
  }

  if (sent) return (
    <div style={{ background: 'rgba(200,87,42,0.1)', border: '1px solid rgba(200,87,42,0.3)', padding: '3rem', borderRadius: '2px', textAlign: 'center' }}>
      <Check size={32} style={{ color: '#C8572A', margin: '0 auto 1rem' }} />
      <p style={{ fontFamily: 'Noto Serif JP, serif', color: 'white', fontSize: '1rem' }}>お問い合わせを受け付けました。<br />2営業日以内にご連絡いたします。</p>
    </div>
  )

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '2px', color: 'white',
    fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.85rem',
    outline: 'none',
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>お名前 *</label>
          <input required style={inputStyle} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="山田 太郎" />
        </div>
        <div>
          <label style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>会社名</label>
          <input style={inputStyle} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="○○株式会社" />
        </div>
      </div>
      <div>
        <label style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>メールアドレス *</label>
        <input required type="email" style={inputStyle} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="email@example.com" />
      </div>
      <div>
        <label style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>ご検討プラン</label>
        <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.plan} onChange={e => setForm({ ...form, plan: e.target.value })}>
          <option value="">選択してください</option>
          <option value="lite">ライト（¥20,000/月）</option>
          <option value="standard">スタンダード（¥40,000/月）</option>
          <option value="advance">アドバンス（¥60,000/月）</option>
          <option value="premium">プレミアム（¥80,000/月）</option>
          <option value="vip">VIPプラン（要相談）</option>
        </select>
      </div>
      <div>
        <label style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>お問い合わせ内容 *</label>
        <textarea required rows={4} style={{ ...inputStyle, resize: 'none' }} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="ご質問・ご要望をご記入ください" />
      </div>
      <button type="submit" style={{
        width: '100%', padding: '0.9rem',
        background: '#C8572A', color: 'white',
        borderRadius: '2px', border: 'none', cursor: 'pointer',
        fontFamily: 'Noto Sans JP, sans-serif', fontSize: '0.9rem', letterSpacing: '0.08em',
      }}
        className="hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
        送信する <ArrowRight size={16} />
      </button>
    </form>
  )
}
