export default function Tokusho() {
  const items = [
    ['販売事業者名', 'TOWAYO株式会社'],
    ['代表者', '代表取締役'],
    ['所在地', '東京都（詳細はお問い合わせください）'],
    ['電話番号', 'お問い合わせフォームよりご連絡ください'],
    ['メールアドレス', 'info@towayo.com'],
    ['サービス提供地域', '日本全国（主に東京・関東圏）'],
    ['サービス料金', '初期費用：¥1,000,000〜（内容により異なる）\n月額費用：¥99,000（税抜）'],
    ['支払方法', '銀行振込'],
    ['支払時期', '毎月末日までに翌月分をお支払いいただきます'],
    ['サービス開始時期', 'ご契約後、最短1週間でサービスを開始します'],
    ['返品・解約', '1ヶ月前の書面による通知で解約可能。違約金は発生しません。'],
    ['動作環境', 'LINE WORKS（チャットツール）を使用します'],
  ]
  return (
    <div style={{ background: '#FAF6F0', minHeight: '100vh', padding: '8rem 2rem 6rem' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.28em', color: '#C8572A', marginBottom: '1rem' }}>LEGAL</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.6rem', fontWeight: 400, color: '#1a1510', marginBottom: '.5rem' }}>特定商取引法に基づく表記</h1>
        <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.75rem', color: '#9A7A5A', marginBottom: '3rem' }}>특정상거래법 표기</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Noto Serif JP,serif', fontSize: '.88rem' }}>
          <tbody>
            {items.map(([label, value]) => (
              <tr key={label} style={{ borderBottom: '1px solid #E8DDD4' }}>
                <td style={{ padding: '1rem 1.2rem 1rem 0', color: '#9A7A5A', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.78rem', whiteSpace: 'nowrap', verticalAlign: 'top', width: '180px' }}>{label}</td>
                <td style={{ padding: '1rem 0', color: '#5A4A3A', lineHeight: 1.9, whiteSpace: 'pre-line' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.75rem', color: '#9A7A5A', marginTop: '3rem' }}>最終更新：2025年1月</p>
        <a href="/" style={{ display: 'inline-block', marginTop: '2rem', color: '#C8572A', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.78rem', textDecoration: 'none' }}>← ホームに戻る</a>
      </div>
    </div>
  )
}
