export default function Thanks() {
  return (
    <div style={{ background: '#FAF6F0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: 520 }}>
        <div style={{ width: '5rem', height: '5rem', border: '1px solid #C8572A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8572A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <div style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.28em', color: '#C8572A', marginBottom: '1.2rem' }}>THANK YOU</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.8rem', fontWeight: 400, color: '#1a1510', marginBottom: '1.5rem', lineHeight: 1.2 }}>お問い合わせを<br />受け付けました</h1>
        <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.9rem', color: '#7A6A5A', lineHeight: 2, marginBottom: '2.5rem' }}>
          2営業日以内にご連絡いたします。<br />
          문의를 접수했습니다. 2영업일 이내에 연락드리겠습니다.
        </p>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: '#C8572A', color: 'white', padding: '.9rem 2.2rem', borderRadius: '1px', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.82rem', letterSpacing: '.1em', textDecoration: 'none' }}>
          ← ホームに戻る
        </a>
      </div>
    </div>
  )
}
