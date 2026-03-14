export default function Terms() {
  return (
    <div style={{ background: '#FAF6F0', minHeight: '100vh', padding: '8rem 2rem 6rem' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.28em', color: '#C8572A', marginBottom: '1rem' }}>LEGAL</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '3rem', fontWeight: 400, color: '#1a1510', marginBottom: '.5rem' }}>利用規約</h1>
        <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.75rem', color: '#9A7A5A', marginBottom: '3rem' }}>이용약관 / Terms of Service</p>
        <div style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.9rem', color: '#5A4A3A', lineHeight: 2.1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            ['第1条（適用）', '本規約は、TOWAYO株式会社（以下「当社」）が提供するバックオフィス支援サービス（以下「本サービス」）の利用に関する条件を定めるものです。'],
            ['第2条（契約の成立）', 'サービス契約は、当社が契約申込みを承諾し、契約書に双方が署名した時点をもって成立します。'],
            ['第3条（サービスの内容）', '本サービスの内容は、契約時に合意した業務範囲に従います。業務範囲の変更は書面による合意が必要です。'],
            ['第4条（料金）', '月額費用は契約書に定める金額とし、毎月末日までに翌月分をお支払いいただきます。'],
            ['第5条（契約期間と解約）', '契約期間は月単位とし、1ヶ月前の書面による通知をもって解約できます。解約による違約金は発生しません。'],
            ['第6条（秘密保持）', '当社は、業務上知り得たお客様の情報を第三者に開示・漏洩しないものとします。'],
            ['第7条（免責事項）', '当社は、天災・法令変更・その他当社の責によらない事由による損害について責任を負いません。'],
            ['第8条（準拠法）', '本規約は日本法に準拠し、東京地方裁判所を専属的合意管轄裁判所とします。'],
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
