import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TOWAYO | 韓国企業の日本進出を、共に。',
  description: '韓国企業の日本進出を包括的にサポートするバックオフィス・ビジネスサービス。郵便物管理、顧客対応、翻訳、経費管理まで。',
  keywords: '韓国企業, 日本進出, バックオフィス, 翻訳, 秘書サービス, TOWAYO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
