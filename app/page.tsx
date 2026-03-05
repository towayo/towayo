'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight, Check, Mail, MapPin, ChevronDown, Star, Shield, Clock, Award, TrendingUp, Globe, Users } from 'lucide-react'

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const NAV_LINKS = [
  { label: 'サービス', href: '#services' },
  { label: '選ばれる理由', href: '#why' },
  { label: '料金プラン', href: '#pricing' },
  { label: '会社について', href: '#about' },
  { label: 'お問い合わせ', href: '#contact' },
]

const SERVICES = [
  { icon: '📬', en: 'Mail Management', title: '郵便・メール管理', desc: '郵便物の受領・スキャン・転送・内容報告。受信メールの翻訳・要約対応。日本語の複雑な書類も丁寧に処理します。' },
  { icon: '🗣️', en: 'Bilingual Support', title: '顧客対応・翻訳', desc: '日韓バイリンガルによるメール・電話対応。契約書・プレスリリース・ビジネス文書の翻訳（A4 10枚/月〜）。' },
  { icon: '📅', en: 'Schedule & Logistics', title: 'スケジュール・手配', desc: 'アポイント調整、出張・会議・展示会の予約手配、会議室・備品手配まで一括管理。' },
  { icon: '💴', en: 'Expense Management', title: '経費管理', desc: '経費精算チェック、データ入力・整理、月次・週次レポート作成。管理ソリューションとの連携も可能。' },
  { icon: '📝', en: 'Document Creation', title: '資料・文書作成', desc: '議事録・文字起こし、報告書・書状データ作成、市場リサーチ・情報収集レポートの作成。' },
  { icon: '🤝', en: 'On-site Support', title: '対面同行・営業支援', desc: '商談・打ち合わせへの通訳同行（月1回〜）。展示会出展サポート、現地営業活動支援（VIPプラン）。' },
  { icon: '🏢', en: 'Virtual Office', title: 'バーチャルオフィス', desc: '法人住所の提供、銀行口座開設サポート。物理的拠点なしで日本法人の運営が可能になります。' },
  { icon: '🌐', en: 'Digital Marketing', title: 'オンラインマーケティング', desc: 'ホームページ構築、SNS（X・Facebook）運営代行、定期プレスリリース配信。日本市場への認知拡大を支援。' },
]

const PLANS = [
  {
    name: 'ライト', nameKo: '라이트', price: '20,000', tag: null,
    services: ['郵便物受領・スキャン・転送', 'メール受信本文の翻訳・内容報告'],
    note: '担当者とのやり取りなし', dark: false,
  },
  {
    name: 'スタンダード', nameKo: '스탠더드', price: '40,000', tag: '人気No.1',
    services: ['ライトの全内容', '翻訳対応（A4 10枚/月）', '顧客対応（メールのやり取り）', 'LINE WORKS連携'],
    note: '担当者と直接連携可能', dark: false,
  },
  {
    name: 'アドバンス', nameKo: '어드밴스', price: '60,000', tag: null,
    services: ['スタンダードの全内容', '経費管理サポート', '週次レポート', 'LINE WORKS連携'],
    note: '管理ソリューション費用は顧客負担', dark: false,
  },
  {
    name: 'プレミアム', nameKo: '프리미엄', price: '80,000', tag: 'おすすめ',
    services: ['アドバンスの全内容', '対面同行 1回/月', '優先対応', 'LINE WORKS連携'],
    note: '交通費・食事代は別途精算', dark: true,
  },
]

const WHY_ITEMS = [
  { icon: Shield, title: '韓国→日本に特化', desc: '一般的な秘書サービスとは異なり、韓国企業が日本進出する際に直面する固有の課題（言語・文化・法制度）を深く理解しています。' },
  { icon: Users, title: '専属担当制', desc: '企業1社に対して1名の担当者が専属で対応。交代なく継続サポートするため、まるで自社社員のような深い関係性が築けます。' },
  { icon: Award, title: '定額・明確な料金', desc: '月額定額制で追加費用の心配なし。入居契約不要でサービス単独利用が可能。スタートアップにも無理のない価格設計。' },
  { icon: Globe, title: '在宅バイリンガル人材', desc: '日本在住の韓日バイリンガル女性（子育て後の再就職希望者を積極採用）。雇用創出にも貢献しながら質の高いサービスを提供。' },
  { icon: TrendingUp, title: '将来の事業拡大も視野に', desc: '基本のバックオフィス支援から、人材紹介・IT専門業務・営業パートナー網の構築まで、成長に合わせてサービスを拡充できます。' },
  { icon: Clock, title: 'すぐに始められる', desc: 'お問い合わせから最短1週間でサービス開始。煩雑な手続きなし。LINEWORKSですぐに担当者と連携できます。' },
]

const STEPS = [
  { num: '01', title: 'お問い合わせ', desc: 'フォームまたはメールでご連絡ください。ご要望・業務内容を簡単にお聞かせください。' },
  { num: '02', title: 'オンライン面談', desc: '担当者がZoomまたはLINEWORKSにてヒアリング。最適なプランをご提案します（30分程度）。' },
  { num: '03', title: '専属担当アサイン', desc: '業務内容・言語スキル・業界知識を考慮して最適なバイリンガルスタッフを選定します。' },
  { num: '04', title: 'サービス開始', desc: 'LINEWORKSで担当者と連携しながら業務スタート。月次レポートで進捗を常に可視化。' },
]

const TESTIMONIALS = [
  { company: '韓国系ITスタートアップ', plan: 'スタンダードプラン', text: '日本法人を設立したばかりで郵便物の処理に困っていました。TOWAYOさんに依頼してから、韓国語での報告が届くので非常に助かっています。' },
  { company: '韓国系コスメブランド', plan: 'アドバンスプラン', text: '展示会の手配から取引先とのメール対応まで、まるで日本に社員がいるような安心感があります。プロフェッショナルな対応に満足しています。' },
  { company: '韓国系食品メーカー', plan: 'プレミアムプラン', text: '商談への同行通訳が特に助かっています。細かいニュアンスまで正確に伝えていただけるので、商談がスムーズに進むようになりました。' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ background: '#FAF6F0', color: '#1a1510', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Noto+Serif+JP:wght@200;300;400;500;600&family=Noto+Sans+JP:wght@300;400;500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes pulse { 0%,100%{opacity:0.35;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.04)} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
        .afu{opacity:0;animation:fadeUp 0.85s ease forwards}
        .d1{animation-delay:0.12s} .d2{animation-delay:0.24s} .d3{animation-delay:0.36s} .d4{animation-delay:0.5s} .d5{animation-delay:0.65s}
        .reveal{opacity:0;transform:translateY(22px);transition:opacity 0.7s ease,transform 0.7s ease}
        .reveal.in{opacity:1;transform:translateY(0)}
        .svc:hover{transform:translateY(-5px);box-shadow:0 18px 48px rgba(26,21,16,0.11)}
        .svc{transition:transform 0.3s,box-shadow 0.3s,background 0.2s}
        .plncard{transition:transform 0.3s,box-shadow 0.3s}
        .plncard:hover{transform:translateY(-5px);box-shadow:0 14px 40px rgba(26,21,16,0.13)}
        .navlnk{position:relative}
        .navlnk::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:#C8572A;transition:width 0.3s}
        .navlnk:hover::after{width:100%}
        .whyrow{transition:padding-left 0.25s ease}
        .whyrow:hover{padding-left:0.6rem}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:#EDE4DA}
        ::-webkit-scrollbar-thumb{background:#C8572A;border-radius:3px}
        input:focus,textarea:focus,select:focus{border-color:#C8572A!important;box-shadow:0 0 0 3px rgba(200,87,42,0.08)}
        @media(max-width:768px){.dsk{display:none!important}.mob{display:block!important}.grid2{grid-template-columns:1fr!important}.grid4{grid-template-columns:1fr 1fr!important}}
        @media(min-width:769px){.mob{display:none!important}}
      `}</style>

      {/* NAV */}
      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:50,transition:'all 0.4s ease',
        background: scrolled ? 'rgba(250,246,240,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,87,42,0.1)' : 'none',
      }}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 2rem',display:'flex',alignItems:'center',justifyContent:'space-between',height:'68px'}}>
          <Link href="/" style={{display:'flex',alignItems:'baseline',gap:'0.6rem',textDecoration:'none'}}>
            <span style={{fontFamily:'Cormorant Garamond,serif',fontSize:'1.8rem',fontWeight:600,color:'#C8572A',letterSpacing:'0.04em',lineHeight:1}}>TOWAYO</span>
            <span style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.58rem',color:'#B09070',letterSpacing:'0.12em'}}>또 와요 · 도와요</span>
          </Link>
          <div className="dsk" style={{display:'flex',alignItems:'center',gap:'2.2rem'}}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="navlnk"
                style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.78rem',color:'#3d3228',letterSpacing:'0.05em',textDecoration:'none'}}>
                {l.label}
              </a>
            ))}
            <Link href="/login" style={{
              background:'#1a1510',color:'#FAF6F0',padding:'0.45rem 1.4rem',borderRadius:'1px',
              fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.78rem',letterSpacing:'0.1em',textDecoration:'none',
              transition:'background 0.2s',
            }}
              onMouseEnter={e=>(e.currentTarget.style.background='#C8572A')}
              onMouseLeave={e=>(e.currentTarget.style.background='#1a1510')}>
              ログイン
            </Link>
          </div>
          <button className="mob" onClick={()=>setMenuOpen(!menuOpen)}
            style={{background:'none',border:'none',cursor:'pointer',color:'#1a1510',display:'none'}}>
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
        {menuOpen && (
          <div style={{background:'#FAF6F0',borderTop:'1px solid #E8DDD4',padding:'1.5rem 2rem',display:'flex',flexDirection:'column',gap:'1.2rem'}}>
            {NAV_LINKS.map(l=>(
              <a key={l.href} href={l.href} onClick={()=>setMenuOpen(false)}
                style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.95rem',color:'#1a1510',textDecoration:'none'}}>{l.label}</a>
            ))}
            <Link href="/login" onClick={()=>setMenuOpen(false)} style={{background:'#C8572A',color:'white',padding:'0.7rem',textAlign:'center',borderRadius:'1px',fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.85rem',textDecoration:'none'}}>ログイン</Link>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{minHeight:'100vh',display:'flex',alignItems:'center',position:'relative',overflow:'hidden',paddingTop:'68px'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,#FAF6F0 0%,#F5EDE3 45%,#FAF6F0 100%)'}}/>
        <div style={{position:'absolute',inset:0,backgroundImage:`radial-gradient(ellipse 80% 60% at 72% 40%,rgba(200,87,42,0.07) 0%,transparent 70%),radial-gradient(ellipse 40% 40% at 15% 75%,rgba(139,69,19,0.04) 0%,transparent 60%)`}}/>
        
        {/* Decorative circles */}
        <div style={{position:'absolute',right:'-130px',top:'3%',width:'620px',height:'620px',border:'1px solid rgba(200,87,42,0.09)',borderRadius:'50%',animation:'float 7s ease-in-out infinite'}}/>
        <div style={{position:'absolute',right:'-50px',top:'10%',width:'460px',height:'460px',border:'1px solid rgba(200,87,42,0.06)',borderRadius:'50%',animation:'pulse 9s ease-in-out infinite'}}/>
        <div style={{position:'absolute',right:'8%',top:'22%',width:'280px',height:'280px',border:'1px solid rgba(200,87,42,0.11)',borderRadius:'50%'}}/>
        
        {/* Big kanji decoration */}
        <div style={{position:'absolute',right:'5%',top:'8%',fontFamily:'Noto Serif JP,serif',fontSize:'14rem',fontWeight:200,color:'rgba(200,87,42,0.035)',lineHeight:1,userSelect:'none',pointerEvents:'none'}}>共</div>
        
        {/* Diagonal line */}
        <div style={{position:'absolute',top:0,right:'33%',width:'1px',height:'100%',background:'linear-gradient(to bottom,transparent,rgba(200,87,42,0.12) 40%,transparent)',transform:'rotate(7deg)',transformOrigin:'top center'}}/>

        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'6rem 2rem',width:'100%',position:'relative',zIndex:1}}>
          <div style={{maxWidth:'700px'}}>
            {/* Eyebrow */}
            <div className="afu" style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'2rem'}}>
              <div style={{width:'2rem',height:'1px',background:'#C8572A'}}/>
              <span style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.68rem',letterSpacing:'0.28em',color:'#C8572A',textTransform:'uppercase'}}>Korea × Japan Business Bridge</span>
            </div>

            <h1 className="afu d1" style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(3.4rem,7.5vw,6.2rem)',fontWeight:300,lineHeight:1.04,color:'#1a1510',marginBottom:'0.25rem'}}>韓国企業の</h1>
            <h1 className="afu d2" style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(3.4rem,7.5vw,6.2rem)',fontWeight:300,lineHeight:1.04,color:'#1a1510',marginBottom:'0.25rem'}}>
              <em style={{fontStyle:'italic',color:'#C8572A',fontWeight:400}}>日本進出</em>を、
            </h1>
            <h1 className="afu d3" style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(3.4rem,7.5vw,6.2rem)',fontWeight:300,lineHeight:1.04,color:'#1a1510',marginBottom:'2rem'}}>共に。</h1>

            <p className="afu d3" style={{fontFamily:'EB Garamond,serif',fontSize:'1.15rem',fontStyle:'italic',color:'#9A7A5A',letterSpacing:'0.04em',marginBottom:'1.75rem'}}>"Support That Brings You Back."</p>

            <p className="afu d4" style={{fontFamily:'Noto Serif JP,serif',fontSize:'clamp(0.88rem,1.5vw,1.02rem)',lineHeight:2.1,color:'#5a4a3a',maxWidth:'530px',marginBottom:'3rem',fontWeight:300}}>
              郵便物管理から顧客対応、翻訳、経費管理まで——<br/>
              日本在住の韓日バイリンガルが<em style={{fontStyle:'italic',color:'#C8572A'}}>専属担当</em>として、<br/>
              あなたの会社の「日本の社員」になります。
            </p>

            <div className="afu d5" style={{display:'flex',flexWrap:'wrap',gap:'1rem',marginBottom:'4rem'}}>
              <a href="#contact" style={{
                display:'flex',alignItems:'center',gap:'0.6rem',
                background:'#C8572A',color:'white',
                padding:'1rem 2.4rem',borderRadius:'1px',
                fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.85rem',letterSpacing:'0.1em',
                textDecoration:'none',transition:'all 0.25s',
                boxShadow:'0 4px 24px rgba(200,87,42,0.32)',
              }}
                onMouseEnter={e=>{e.currentTarget.style.background='#A84420';e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 32px rgba(200,87,42,0.42)'}}
                onMouseLeave={e=>{e.currentTarget.style.background='#C8572A';e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 4px 24px rgba(200,87,42,0.32)'}}>
                無料相談を申し込む <ArrowRight size={15}/>
              </a>
              <a href="#services" style={{
                display:'flex',alignItems:'center',gap:'0.5rem',
                border:'1px solid rgba(26,21,16,0.22)',color:'#3d3228',
                padding:'1rem 2.2rem',borderRadius:'1px',
                fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.85rem',letterSpacing:'0.08em',
                textDecoration:'none',transition:'all 0.25s',background:'transparent',
              }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='#C8572A';e.currentTarget.style.color='#C8572A'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(26,21,16,0.22)';e.currentTarget.style.color='#3d3228'}}>
                サービス詳細
              </a>
            </div>

            {/* Stats */}
            <div className="afu d5" style={{display:'flex',gap:'2rem',flexWrap:'wrap'}}>
              {[
                {num:'5',unit:'プラン',label:'月額定額制'},
                {num:'1対1',unit:'専属制',label:'担当者固定'},
                {num:'韓・日',unit:'バイリンガル',label:'在宅スタッフ'},
                {num:'最短',unit:'1週間',label:'サービス開始'},
              ].map((s,i)=>(
                <div key={i} style={{borderLeft:'2px solid rgba(200,87,42,0.28)',paddingLeft:'1rem'}}>
                  <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'1.6rem',fontWeight:600,color:'#C8572A',lineHeight:1}}>{s.num}</div>
                  <div style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.62rem',color:'#9A7A5A',letterSpacing:'0.08em',marginTop:'0.1rem'}}>{s.unit}</div>
                  <div style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.7rem',color:'#7A6A5A',marginTop:'0.15rem'}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{position:'absolute',bottom:'2.5rem',left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:'0.4rem',animation:'float 3s ease-in-out infinite'}}>
          <span style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.58rem',letterSpacing:'0.22em',color:'#B09070'}}>SCROLL</span>
          <ChevronDown size={13} style={{color:'#C8572A'}}/>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{background:'#1a1510',padding:'0.85rem 0',overflow:'hidden',borderTop:'1px solid rgba(200,87,42,0.18)',borderBottom:'1px solid rgba(200,87,42,0.18)'}}>
        <div style={{display:'flex',gap:'3rem',whiteSpace:'nowrap',animation:'marquee 28s linear infinite'}}>
          {[...Array(3)].map((_,i)=>(
            <span key={i} style={{display:'flex',gap:'3rem'}}>
              {['郵便・メール管理','顧客対応','翻訳','スケジュール管理','経費管理','資料作成','対面同行','バーチャルオフィス','SNS運営','展示会サポート','営業支援'].map((t,j)=>(
                <span key={j} style={{display:'flex',alignItems:'center',gap:'1.5rem',fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.7rem',color:'rgba(255,255,255,0.38)',letterSpacing:'0.14em'}}>
                  <span style={{color:'#C8572A',fontSize:'0.45rem'}}>◆</span>{t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <ServicesSection />

      {/* WHY */}
      <WhySection />

      {/* PROCESS */}
      <ProcessSection />

      {/* PRICING */}
      <PricingSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* ABOUT */}
      <AboutSection />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <footer style={{background:'#0D0A07',borderTop:'1px solid rgba(200,87,42,0.12)'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'4rem 2rem 2rem'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'2.5rem',marginBottom:'3rem'}}>
            <div>
              <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'1.6rem',fontWeight:600,color:'#C8572A',marginBottom:'0.6rem'}}>TOWAYO</div>
              <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.68rem',color:'rgba(255,255,255,0.28)',lineHeight:1.9}}>
                또 와요（また来て）<br/>도와요（お手伝いします）<br/><br/>韓国企業の日本進出を<br/>共に歩むパートナーです。
              </p>
            </div>
            <div>
              <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.6rem',letterSpacing:'0.2em',color:'rgba(255,255,255,0.25)',marginBottom:'0.9rem',textTransform:'uppercase'}}>Services</p>
              {['郵便・メール管理','顧客対応・翻訳','経費管理','資料作成','対面同行','バーチャルオフィス'].map(s=>(
                <p key={s} style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.75rem',color:'rgba(255,255,255,0.42)',marginBottom:'0.45rem'}}>{s}</p>
              ))}
            </div>
            <div>
              <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.6rem',letterSpacing:'0.2em',color:'rgba(255,255,255,0.25)',marginBottom:'0.9rem',textTransform:'uppercase'}}>Plans</p>
              {['ライト ¥20,000/月','スタンダード ¥40,000/月','アドバンス ¥60,000/月','プレミアム ¥80,000/月','VIP 要相談'].map(p=>(
                <p key={p} style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.75rem',color:'rgba(255,255,255,0.42)',marginBottom:'0.45rem'}}>{p}</p>
              ))}
            </div>
            <div>
              <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.6rem',letterSpacing:'0.2em',color:'rgba(255,255,255,0.25)',marginBottom:'0.9rem',textTransform:'uppercase'}}>Contact</p>
              <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.75rem',color:'rgba(255,255,255,0.42)',marginBottom:'0.45rem'}}>info@towayo.com</p>
              <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.75rem',color:'rgba(255,255,255,0.42)',marginBottom:'1.5rem'}}>東京都</p>
              <a href="#contact" style={{border:'1px solid rgba(200,87,42,0.35)',color:'#C8572A',padding:'0.45rem 1.1rem',borderRadius:'1px',fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.72rem',letterSpacing:'0.06em',textDecoration:'none'}}>無料相談を申し込む</a>
            </div>
          </div>
          <div style={{borderTop:'1px solid rgba(255,255,255,0.05)',paddingTop:'1.5rem',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1rem'}}>
            <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.65rem',color:'rgba(255,255,255,0.18)'}}>© 2025 TOWAYO Inc. All rights reserved.</p>
            <p style={{fontFamily:'EB Garamond,serif',fontSize:'0.75rem',fontStyle:'italic',color:'rgba(255,255,255,0.18)'}}>"Support That Brings You Back."</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionHeader({ tag, title, sub, center }: { tag: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div style={{textAlign: center ? 'center' : 'left', marginBottom:'4rem'}}>
      <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'0.75rem',justifyContent: center ? 'center' : 'flex-start'}}>
        <div style={{width:'2rem',height:'1px',background:'#C8572A'}}/>
        <span style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.66rem',letterSpacing:'0.28em',color:'#C8572A',textTransform:'uppercase'}}>{tag}</span>
        {center && <div style={{width:'2rem',height:'1px',background:'#C8572A'}}/>}
      </div>
      <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(2.2rem,4vw,3.4rem)',fontWeight:400,color:'#1a1510',marginBottom: sub ? '0.75rem' : 0}}>{title}</h2>
      {sub && <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.9rem',color:'#7A6A5A',fontWeight:300,maxWidth: center ? '500px' : 'none',margin: center ? '0 auto' : 0}}>{sub}</p>}
    </div>
  )
}

function ServicesSection() {
  const {ref,inView} = useInView()
  return (
    <section id="services" style={{background:'#F5EDE3',padding:'7rem 0'}}>
      <div ref={ref} style={{maxWidth:'1200px',margin:'0 auto',padding:'0 2rem'}}>
        <div className={`reveal ${inView?'in':''}`}>
          <SectionHeader tag="Services" title="サービス内容" sub="日本進出初期に必要なバックオフィス業務を網羅。専属の日韓バイリンガルスタッフが、まるで自社社員のように対応します。"/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(275px,1fr))',gap:'1.5px',background:'#D8CBBF'}}>
          {SERVICES.map((s,i)=>(
            <div key={i} className={`svc reveal ${inView?'in':''}`}
              style={{background:'#FAF6F0',padding:'2.2rem',position:'relative',overflow:'hidden',transitionDelay:`${i*0.055}s`}}>
              <div style={{position:'absolute',top:'1.2rem',right:'1.4rem',fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.58rem',letterSpacing:'0.15em',color:'rgba(200,87,42,0.45)',textTransform:'uppercase'}}>{s.en}</div>
              <div style={{fontSize:'1.55rem',marginBottom:'1rem'}}>{s.icon}</div>
              <h3 style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.98rem',fontWeight:500,color:'#1a1510',marginBottom:'0.65rem',lineHeight:1.4}}>{s.title}</h3>
              <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.78rem',color:'#7A6A5A',lineHeight:1.85}}>{s.desc}</p>
              <div style={{position:'absolute',bottom:0,left:0,height:'2px',background:'#C8572A',width:'0',transition:'width 0.5s ease'}}
                onMouseEnter={e=>(e.currentTarget.style.width='100%')}
                onMouseLeave={e=>(e.currentTarget.style.width='0')}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  const {ref,inView} = useInView()
  return (
    <section id="why" style={{padding:'7rem 0',background:'#FAF6F0'}}>
      <div ref={ref} style={{maxWidth:'1200px',margin:'0 auto',padding:'0 2rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.7fr',gap:'5rem',alignItems:'start'}} className="grid2">
          <div className={`reveal ${inView?'in':''}`} style={{position:'sticky',top:'6rem'}}>
            <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'0.75rem'}}>
              <div style={{width:'2rem',height:'1px',background:'#C8572A'}}/>
              <span style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.66rem',letterSpacing:'0.28em',color:'#C8572A',textTransform:'uppercase'}}>Why TOWAYO</span>
            </div>
            <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(2rem,4vw,3.2rem)',fontWeight:400,color:'#1a1510',lineHeight:1.15,marginBottom:'1.5rem'}}>
              選ばれる<br/><em style={{fontStyle:'italic',color:'#C8572A'}}>6つの理由</em>
            </h2>
            <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.88rem',color:'#7A6A5A',lineHeight:1.9,fontWeight:300,marginBottom:'2rem'}}>
              既存の秘書サービスやバーチャルオフィスとは異なる、TOWAYOならではの価値をご説明します。
            </p>
            <div style={{padding:'1.5rem',background:'#F5EDE3',borderLeft:'3px solid #C8572A'}}>
              <p style={{fontFamily:'EB Garamond,serif',fontSize:'1.08rem',fontStyle:'italic',color:'#5A4A3A',lineHeight:1.75}}>
                "韓国企業が日本市場に根を張るための、最も信頼できるパートナーでありたい。"
              </p>
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
            {WHY_ITEMS.map(({icon:Icon,title,desc},i)=>(
              <div key={i} className={`whyrow reveal ${inView?'in':''}`}
                style={{display:'flex',gap:'1.5rem',padding:'1.8rem 0',borderBottom:i<WHY_ITEMS.length-1?'1px solid #EAE0D6':'none',transitionDelay:`${i*0.07}s`}}>
                <div style={{flexShrink:0,width:'2.4rem',height:'2.4rem',border:'1px solid rgba(200,87,42,0.28)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'0.1rem'}}>
                  <Icon size={13} style={{color:'#C8572A'}}/>
                </div>
                <div>
                  <h3 style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.98rem',fontWeight:500,color:'#1a1510',marginBottom:'0.45rem'}}>{title}</h3>
                  <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.8rem',color:'#7A6A5A',lineHeight:1.85}}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const {ref,inView} = useInView()
  return (
    <section style={{background:'#1a1510',padding:'7rem 0'}}>
      <div ref={ref} style={{maxWidth:'1200px',margin:'0 auto',padding:'0 2rem'}}>
        <div className={`reveal ${inView?'in':''}`} style={{textAlign:'center',marginBottom:'4rem'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1rem',marginBottom:'0.75rem'}}>
            <div style={{width:'2rem',height:'1px',background:'#C8572A'}}/>
            <span style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.66rem',letterSpacing:'0.28em',color:'#C8572A',textTransform:'uppercase'}}>How It Works</span>
            <div style={{width:'2rem',height:'1px',background:'#C8572A'}}/>
          </div>
          <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(2.2rem,4vw,3.4rem)',fontWeight:400,color:'white'}}>ご利用の流れ</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'0'}} className="grid4">
          {STEPS.map((s,i)=>(
            <div key={i} className={`reveal ${inView?'in':''}`}
              style={{padding:'2.5rem 2rem',position:'relative',borderRight:i<STEPS.length-1?'1px solid rgba(200,87,42,0.12)':'none',transitionDelay:`${i*0.1}s`}}>
              <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'5.5rem',fontWeight:300,color:'rgba(200,87,42,0.07)',lineHeight:1,marginBottom:'-1.8rem',userSelect:'none'}}>{s.num}</div>
              <div style={{width:'2px',height:'2rem',background:'rgba(200,87,42,0.4)',marginBottom:'1rem'}}/>
              <h3 style={{fontFamily:'Noto Serif JP,serif',fontSize:'1.02rem',fontWeight:500,color:'white',marginBottom:'0.7rem'}}>{s.title}</h3>
              <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.78rem',color:'rgba(255,255,255,0.48)',lineHeight:1.85}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const {ref,inView} = useInView()
  return (
    <section id="pricing" style={{background:'#F5EDE3',padding:'7rem 0'}}>
      <div ref={ref} style={{maxWidth:'1200px',margin:'0 auto',padding:'0 2rem'}}>
        <div className={`reveal ${inView?'in':''}`}>
          <SectionHeader tag="Pricing" title="料金プラン" sub="すべて月額定額制・税別表示。入居契約不要。" center/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'1rem',marginBottom:'1rem'}}>
          {PLANS.map((plan,i)=>(
            <div key={i} className={`plncard reveal ${inView?'in':''}`}
              style={{background:plan.dark?'#1a1510':'white',border:`1px solid ${plan.dark?'rgba(200,87,42,0.28)':'#E8DDD4'}`,padding:'2.5rem 2rem',position:'relative',overflow:'hidden',transitionDelay:`${i*0.08}s`}}>
              {plan.tag && (
                <div style={{position:'absolute',top:'1.1rem',right:'-2.2rem',background:'#C8572A',color:'white',padding:'0.22rem 2.8rem',fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.6rem',letterSpacing:'0.1em',transform:'rotate(45deg)',transformOrigin:'center',boxShadow:'0 2px 10px rgba(200,87,42,0.4)'}}>
                  {plan.tag}
                </div>
              )}
              <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.6rem',letterSpacing:'0.2em',color:plan.dark?'rgba(255,255,255,0.38)':'#C8572A',marginBottom:'0.25rem'}}>{plan.nameKo}</p>
              <h3 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'1.5rem',fontWeight:600,color:plan.dark?'white':'#1a1510',marginBottom:'1.2rem'}}>{plan.name}</h3>
              <div style={{marginBottom:'1.8rem'}}>
                <span style={{fontFamily:'Cormorant Garamond,serif',fontSize:'2.8rem',fontWeight:500,color:plan.dark?'#E8956A':'#C8572A',lineHeight:1}}>¥{plan.price}</span>
                <span style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.7rem',color:plan.dark?'rgba(255,255,255,0.38)':'#9A8A7A',marginLeft:'0.3rem'}}>/月</span>
              </div>
              <div style={{height:'1px',background:plan.dark?'rgba(255,255,255,0.07)':'#EAE0D6',marginBottom:'1.5rem'}}/>
              <ul style={{listStyle:'none',padding:0,margin:'0 0 1.5rem',display:'flex',flexDirection:'column',gap:'0.6rem'}}>
                {plan.services.map((s,j)=>(
                  <li key={j} style={{display:'flex',alignItems:'flex-start',gap:'0.55rem'}}>
                    <Check size={11} style={{color:plan.dark?'#E8956A':'#C8572A',marginTop:'3px',flexShrink:0}}/>
                    <span style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.77rem',color:plan.dark?'rgba(255,255,255,0.72)':'#5A4A3A',lineHeight:1.55}}>{s}</span>
                  </li>
                ))}
              </ul>
              {plan.note && (
                <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.66rem',color:plan.dark?'rgba(255,255,255,0.28)':'#9A8A7A',borderTop:`1px solid ${plan.dark?'rgba(255,255,255,0.06)':'#EAE0D6'}`,paddingTop:'0.85rem'}}>
                  ※ {plan.note}
                </p>
              )}
              <a href="#contact" style={{
                display:'block',textAlign:'center',marginTop:'1.5rem',padding:'0.68rem',
                background:plan.dark?'#C8572A':'transparent',
                border:`1px solid ${plan.dark?'#C8572A':'rgba(200,87,42,0.38)'}`,
                color:plan.dark?'white':'#C8572A',
                fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.76rem',letterSpacing:'0.08em',
                borderRadius:'1px',textDecoration:'none',transition:'all 0.2s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.background='#C8572A';e.currentTarget.style.color='white';e.currentTarget.style.borderColor='#C8572A'}}
                onMouseLeave={e=>{if(!plan.dark){e.currentTarget.style.background='transparent';e.currentTarget.style.color='#C8572A';e.currentTarget.style.borderColor='rgba(200,87,42,0.38)'}}}>
                このプランで相談する
              </a>
            </div>
          ))}
        </div>

        {/* VIP */}
        <div style={{background:'#1a1510',padding:'1.5rem 2.5rem',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1rem',borderLeft:'3px solid #C8572A',marginBottom:'2.5rem'}}>
          <div>
            <span style={{fontFamily:'Cormorant Garamond,serif',fontSize:'1.3rem',fontWeight:600,color:'#C8572A',marginRight:'1rem'}}>VIPプラン</span>
            <span style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.83rem',color:'rgba(255,255,255,0.48)'}}>プレミアム＋現地営業活動（6ヶ月）・業務担当2名配置・要相談</span>
          </div>
          <a href="#contact" style={{background:'#C8572A',color:'white',padding:'0.6rem 1.8rem',fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.78rem',letterSpacing:'0.08em',borderRadius:'1px',textDecoration:'none'}}>詳細を問い合わせる</a>
        </div>

        {/* Comparison */}
        <div style={{padding:'2rem',background:'rgba(200,87,42,0.04)',border:'1px solid rgba(200,87,42,0.1)'}}>
          <h4 style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.9rem',fontWeight:500,color:'#1a1510',marginBottom:'1.2rem'}}>競合サービスとの比較</h4>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem'}} className="grid2">
            {[
              {name:'一般バーチャルオフィス',items:['住所のみ提供','業務サポートなし','担当者なし'],h:false},
              {name:'一般秘書サービス',items:['日本語のみ対応','韓国語非対応','韓国企業の慣習に不慣れ'],h:false},
              {name:'TOWAYO',items:['韓国企業に完全特化','韓日バイリンガル対応','専属担当制','月額定額・明確料金'],h:true},
            ].map((c,i)=>(
              <div key={i} style={{padding:'1.2rem',background:c.h?'rgba(200,87,42,0.07)':'white',border:`1px solid ${c.h?'rgba(200,87,42,0.25)':'#E8DDD4'}`}}>
                <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.82rem',fontWeight:500,color:c.h?'#C8572A':'#1a1510',marginBottom:'0.6rem'}}>{c.name}</p>
                {c.items.map((item,j)=>(
                  <p key={j} style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.72rem',color:c.h?'#5A4A3A':'#9A8A7A',marginBottom:'0.3rem',display:'flex',alignItems:'center',gap:'0.4rem'}}>
                    {c.h?<Check size={10} style={{color:'#C8572A',flexShrink:0}}/>:<span style={{color:'#CCC',fontSize:'0.55rem'}}>—</span>}
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const {ref,inView} = useInView()
  return (
    <section style={{background:'#FAF6F0',padding:'7rem 0'}}>
      <div ref={ref} style={{maxWidth:'1200px',margin:'0 auto',padding:'0 2rem'}}>
        <div className={`reveal ${inView?'in':''}`}>
          <SectionHeader tag="Testimonials" title="お客様の声" center/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'1.5rem'}}>
          {TESTIMONIALS.map((t,i)=>(
            <div key={i} className={`reveal ${inView?'in':''}`}
              style={{background:'#F5EDE3',padding:'2.5rem',position:'relative',transitionDelay:`${i*0.1}s`}}>
              <div style={{position:'absolute',top:'1.4rem',left:'1.8rem',fontFamily:'Cormorant Garamond,serif',fontSize:'5.5rem',color:'rgba(200,87,42,0.1)',lineHeight:1,fontStyle:'italic',userSelect:'none',pointerEvents:'none'}}>"</div>
              <div style={{display:'flex',gap:'0.25rem',marginBottom:'1rem'}}>
                {[...Array(5)].map((_,j)=><Star key={j} size={11} fill="#C8572A" style={{color:'#C8572A'}}/>)}
              </div>
              <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.87rem',color:'#5A4A3A',lineHeight:1.95,marginBottom:'1.5rem',fontWeight:300,position:'relative',zIndex:1}}>{t.text}</p>
              <div style={{borderTop:'1px solid #DDD0C4',paddingTop:'1rem'}}>
                <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.82rem',fontWeight:500,color:'#1a1510'}}>{t.company}</p>
                <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.66rem',color:'#C8572A',marginTop:'0.2rem',letterSpacing:'0.06em'}}>{t.plan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const {ref,inView} = useInView()
  return (
    <section id="about" style={{background:'#F5EDE3',padding:'7rem 0'}}>
      <div ref={ref} style={{maxWidth:'1200px',margin:'0 auto',padding:'0 2rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'center'}} className="grid2">
          <div className={`reveal ${inView?'in':''}`}>
            <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'0.75rem'}}>
              <div style={{width:'2rem',height:'1px',background:'#C8572A'}}/>
              <span style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.66rem',letterSpacing:'0.28em',color:'#C8572A',textTransform:'uppercase'}}>About</span>
            </div>
            <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(2rem,4vw,3.2rem)',fontWeight:400,color:'#1a1510',lineHeight:1.15,marginBottom:'2rem'}}>
              また来てほしい。<br/><em style={{fontStyle:'italic',color:'#C8572A'}}>お手伝いします。</em>
            </h2>
            <div style={{display:'flex',flexDirection:'column',gap:'1.1rem',fontFamily:'Noto Serif JP,serif',fontSize:'0.88rem',color:'#5A4A3A',lineHeight:2.05,fontWeight:300}}>
              <p>TOWAYO（또 와요・도와요）は、韓国語で<strong style={{fontWeight:500}}>「また来て」「手伝います」</strong>という意味を持ちます。日本に来るたびに安心できる、そんな存在でありたいという想いが込められています。</p>
              <p>設立メンバーは、韓国企業の日本進出支援機関での長年の実務経験を持ちます。法人設立後の現実的な課題——郵便物の処理、顧客対応、経理業務——を現場で見てきたからこそ、的確なサポートが提供できます。</p>
              <p>スタッフは全員、日本在住の韓日バイリンガル女性。特に子育て後の再就職希望者を積極採用し、個人事業主として研修・登録した上で業務を担当します。</p>
            </div>
          </div>
          <div className={`reveal ${inView?'in':''}`} style={{transitionDelay:'0.2s',position:'relative'}}>
            <div style={{position:'absolute',top:'-12px',left:'-12px',width:'100%',height:'100%',border:'1px solid rgba(200,87,42,0.18)',borderRadius:'2px'}}/>
            <div style={{background:'#1a1510',padding:'3rem',position:'relative',zIndex:1}}>
              <p style={{fontFamily:'Cormorant Garamond,serif',fontSize:'1rem',fontStyle:'italic',color:'#C8572A',marginBottom:'1.8rem'}}>Mission</p>
              <p style={{fontFamily:'EB Garamond,serif',fontSize:'1.28rem',color:'rgba(255,255,255,0.82)',lineHeight:1.75,marginBottom:'2.5rem',fontStyle:'italic'}}>
                "韓国企業が日本市場で成功するための、最も身近で信頼できるパートナーになること。"
              </p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.2rem'}}>
                {[{label:'代表取締役',value:'柳・森'},{label:'役員',value:'高・趙'},{label:'事業形態',value:'株式会社'},{label:'拠点',value:'東京'}].map(({label,value},i)=>(
                  <div key={i} style={{borderTop:'1px solid rgba(255,255,255,0.07)',paddingTop:'0.75rem'}}>
                    <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.6rem',color:'rgba(255,255,255,0.28)',letterSpacing:'0.1em',marginBottom:'0.2rem'}}>{label}</p>
                    <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.83rem',color:'rgba(255,255,255,0.72)'}}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{marginTop:'1.2rem',padding:'1.4rem',background:'white',border:'1px solid #E8DDD4'}}>
              <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.8rem',fontWeight:500,color:'#C8572A',marginBottom:'0.6rem'}}>今後の展望</p>
              <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.76rem',color:'#7A6A5A',lineHeight:1.85}}>バックオフィス支援モデルを確立後、韓国→第三国・日本→韓国進出など双方向・グローバル展開を視野に。人材紹介・IT専門業務コミュニティとしてプラットフォーム化も推進します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const {ref,inView} = useInView()
  return (
    <section id="contact" style={{background:'#1a1510',padding:'7rem 0'}}>
      <div ref={ref} style={{maxWidth:'1200px',margin:'0 auto',padding:'0 2rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:'5rem',alignItems:'start'}} className="grid2">
          <div className={`reveal ${inView?'in':''}`}>
            <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'0.75rem'}}>
              <div style={{width:'2rem',height:'1px',background:'#C8572A'}}/>
              <span style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.66rem',letterSpacing:'0.28em',color:'#C8572A',textTransform:'uppercase'}}>Contact</span>
            </div>
            <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(2.2rem,4vw,3.4rem)',fontWeight:400,color:'white',marginBottom:'1.5rem',lineHeight:1.1}}>
              お問い合わせ・<br/><em style={{fontStyle:'italic',color:'#C8572A'}}>無料相談</em>
            </h2>
            <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.88rem',color:'rgba(255,255,255,0.52)',lineHeight:2,fontWeight:300,marginBottom:'2.5rem'}}>
              サービスのご相談・お見積りはお気軽にどうぞ。初回相談は無料です。通常2営業日以内にご返答いたします。
            </p>
            {[{icon:Mail,text:'info@towayo.com',label:'Email'},{icon:MapPin,text:'東京都（詳細はお問い合わせ後）',label:'所在地'}].map(({icon:Icon,text,label},i)=>(
              <div key={i} style={{display:'flex',gap:'1rem',alignItems:'flex-start',marginBottom:'1.2rem'}}>
                <div style={{width:'2.2rem',height:'2.2rem',border:'1px solid rgba(200,87,42,0.28)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <Icon size={12} style={{color:'#C8572A'}}/>
                </div>
                <div>
                  <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.6rem',letterSpacing:'0.14em',color:'rgba(255,255,255,0.28)',marginBottom:'0.2rem'}}>{label}</p>
                  <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.83rem',color:'rgba(255,255,255,0.62)'}}>{text}</p>
                </div>
              </div>
            ))}
            <div style={{marginTop:'2rem',padding:'1.2rem 1.4rem',border:'1px solid rgba(200,87,42,0.18)',background:'rgba(200,87,42,0.04)'}}>
              <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.7rem',color:'rgba(255,255,255,0.42)',lineHeight:1.85}}>
                ご契約後はLINE WORKSで専属担当者と直接やり取りできます。スタンダードプラン以上で利用可能。
              </p>
            </div>
          </div>
          <div className={`reveal ${inView?'in':''}`} style={{transitionDelay:'0.2s'}}>
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [form,setForm] = useState({name:'',company:'',email:'',plan:'',inquiry:'',message:''})
  const [sent,setSent] = useState(false)
  const [loading,setLoading] = useState(false)

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    await new Promise(r=>setTimeout(r,1000))
    setSent(true); setLoading(false)
  }

  if(sent) return (
    <div style={{background:'rgba(200,87,42,0.07)',border:'1px solid rgba(200,87,42,0.22)',padding:'4rem 2.5rem',textAlign:'center'}}>
      <div style={{width:'3.5rem',height:'3.5rem',border:'1px solid #C8572A',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1.5rem'}}>
        <Check size={20} style={{color:'#C8572A'}}/>
      </div>
      <h3 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'1.5rem',color:'white',marginBottom:'0.75rem'}}>送信完了</h3>
      <p style={{fontFamily:'Noto Serif JP,serif',fontSize:'0.86rem',color:'rgba(255,255,255,0.48)',lineHeight:1.85}}>お問い合わせを受け付けました。<br/>2営業日以内にご連絡いたします。</p>
    </div>
  )

  const ib = {width:'100%',padding:'0.78rem 1rem',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.09)',color:'white' as const,fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.83rem',outline:'none',borderRadius:'1px',transition:'border-color 0.2s'}

  return (
    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1.1rem'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        {[{k:'name',l:'お名前 *',p:'山田 太郎',r:true},{k:'company',l:'会社名',p:'○○株式会社',r:false}].map(({k,l,p,r})=>(
          <div key={k}>
            <label style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.65rem',color:'rgba(255,255,255,0.38)',letterSpacing:'0.1em',display:'block',marginBottom:'0.4rem'}}>{l}</label>
            <input required={r} style={ib} placeholder={p} value={(form as any)[k]} onChange={e=>setForm({...form,[k]:e.target.value})}/>
          </div>
        ))}
      </div>
      <div>
        <label style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.65rem',color:'rgba(255,255,255,0.38)',letterSpacing:'0.1em',display:'block',marginBottom:'0.4rem'}}>メールアドレス *</label>
        <input required type="email" style={ib} placeholder="email@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        <div>
          <label style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.65rem',color:'rgba(255,255,255,0.38)',letterSpacing:'0.1em',display:'block',marginBottom:'0.4rem'}}>ご検討プラン</label>
          <select style={{...ib,cursor:'pointer'}} value={form.plan} onChange={e=>setForm({...form,plan:e.target.value})}>
            <option value="" style={{background:'#1a1510'}}>選択してください</option>
            {['ライト（¥20,000/月）','スタンダード（¥40,000/月）','アドバンス（¥60,000/月）','プレミアム（¥80,000/月）','VIPプラン（要相談）','まだ決まっていない'].map(p=>(
              <option key={p} value={p} style={{background:'#1a1510'}}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.65rem',color:'rgba(255,255,255,0.38)',letterSpacing:'0.1em',display:'block',marginBottom:'0.4rem'}}>お問い合わせ種別</label>
          <select style={{...ib,cursor:'pointer'}} value={form.inquiry} onChange={e=>setForm({...form,inquiry:e.target.value})}>
            <option value="" style={{background:'#1a1510'}}>選択してください</option>
            {['サービス詳細を知りたい','料金について','無料相談を申し込む','その他'].map(p=>(
              <option key={p} value={p} style={{background:'#1a1510'}}>{p}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.65rem',color:'rgba(255,255,255,0.38)',letterSpacing:'0.1em',display:'block',marginBottom:'0.4rem'}}>お問い合わせ内容 *</label>
        <textarea required rows={4} style={{...ib,resize:'none'}} placeholder="現在の状況・ご要望・ご質問などをご記入ください" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
      </div>
      <button type="submit" disabled={loading} style={{
        padding:'0.95rem',background:loading?'#7A4A2A':'#C8572A',color:'white',border:'none',
        cursor:loading?'not-allowed':'pointer',fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.86rem',
        letterSpacing:'0.1em',borderRadius:'1px',transition:'all 0.2s',
        display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem',
      }}
        onMouseEnter={e=>{if(!loading)e.currentTarget.style.background='#A84420'}}
        onMouseLeave={e=>{if(!loading)e.currentTarget.style.background='#C8572A'}}>
        {loading?'送信中...':<><span>送信する</span><ArrowRight size={14}/></>}
      </button>
      <p style={{fontFamily:'Noto Sans JP,sans-serif',fontSize:'0.65rem',color:'rgba(255,255,255,0.22)',textAlign:'center',lineHeight:1.6}}>
        送信いただいた情報は、お問い合わせへの対応のみに使用します。
      </p>
    </form>
  )
}
