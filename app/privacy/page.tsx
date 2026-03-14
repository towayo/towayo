export default function Privacy() {
  return (
    <div style={{ background: '#FAF6F0', minHeight: '100vh', padding: '8rem 2rem 6rem' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.28em', color: '#C8572A', marginBottom: '1rem' }}>LEGAL</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '3rem', fontWeight: 400, color: '#1a1510', marginBottom: '.5rem' }}>プライバシーポリシー</h1>
        <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.75rem', color: '#9A7A5A', marginBottom: '3rem' }}>개인정보처리방침 / Privacy Policy</p>
        <div style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.9rem', color: '#5A4A3A', lineHeight: 2.1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            ['1. 事業者情報', 'TOWAYO株式会社（以下「当社」）は、お客様の個人情報の保護を重要な責務として捉え、個人情報保護法その他関連法令を遵守しながら、適切に取り扱います。'],
            ['2. 収集する個人情報', 'お問い合わせフォームを通じて、お名前・会社名・メールアドレス・お問い合わせ内容などの情報をご提供いただく場合があります。'],
            ['3. 利用目的', '収集した個人情報は、お問い合わせへの対応、サービスのご案内、およびこれらに付随する業務を行うためにのみ使用します。'],
            ['4. 第三者への提供', '法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。'],
            ['5. 個人情報の管理', '収集した個人情報は、適切な安全管理措置を講じて保管・管理します。'],
            ['6. お問い合わせ', '個人情報に関するお問い合わせは info@towayo.com までご連絡ください。'],
          ].map(([title, body]) => (
            <div key={title as string}>
              <h2 style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.85rem', fontWeight: 600, color: '#1a1510', marginBottom: '.5rem' }}>{title as string}</h2>
              <p>{body as string}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.75rem', color: '#9A7A5A', marginTop: '3rem' }}>制定日：2025年1月</p>
        <a href="/" style={{ display: 'inline-block', marginTop: '2rem', color: '#C8572A', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.78rem', textDecoration: 'none' }}>← ホームに戻る</a>
      </div>
    </div>
  )
}
