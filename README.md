# TOWAYO — 公式ウェブサイト

韓国企業の日本進出を支援するバックオフィスサービス「TOWAYO」のウェブサイトです。

## 🗂 ページ構成

| パス | 説明 |
|------|------|
| `/` | 公開ランディングページ（サービス・料金・お問い合わせ） |
| `/login` | 企業ログインページ |
| `/dashboard` | 企業ダッシュボード（ログイン後） |
| `/dashboard/messages` | 担当者とのメッセージ |
| `/dashboard/documents` | 書類・レポート管理 |
| `/dashboard/settings` | アカウント設定 |

## 🚀 セットアップ

```bash
npm install
npm run dev
```

## 🌐 Vercelへのデプロイ

1. GitHubにプッシュ
2. [vercel.com](https://vercel.com) でプロジェクトをインポート
3. フレームワーク: **Next.js** を選択（自動検出）
4. デプロイ

環境変数は不要（認証を追加する場合は下記参照）。

## 🔐 認証の追加（推奨）

現在はモックログインです。本番では以下を推奨：

### Option A: NextAuth.js + Google/Email
```bash
npm install next-auth
```

### Option B: Supabase Auth
```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

`.env.local` に追加：
```
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=https://towayo.vercel.app
```

## 📩 お問い合わせフォーム連携

`app/page.tsx` の `ContactForm` コンポーネントの `handleSubmit` を編集し、
[Resend](https://resend.com)、[Formspree](https://formspree.io) などに接続してください。

## 🛠 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Cormorant Garamond, Noto Serif JP, Noto Sans JP)
