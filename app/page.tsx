'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight, Check, Mail, MapPin, ChevronDown, Star, Shield, Clock, Award, TrendingUp, Globe, Users, Building2, CreditCard, FileText, Briefcase } from 'lucide-react'

/* ── i18n ── */
const T = {
  ja: {
    lang: '日本語', langCode: 'ja',
    nav: ['サービス', '進出サポート', '料金', '会社について', 'お問い合わせ'],
    login: 'ログイン',
    heroEyebrow: 'Korea × Japan Business Bridge',
    heroH1a: '韓国企業の',
    heroH1b: '日本進出',
    heroH1c: 'を、共に。',
    heroSlogan: '"Support That Brings You Back."',
    heroDesc: '法人設立から日常のバックオフィス業務まで——\n日本在住の韓日バイリンガルが専属担当として、\nあなたの会社の「日本の社員」になります。',
    heroCta1: '無料相談を申し込む',
    heroCta2: 'サービス詳細',
    stats: [
      { num: '', unit: 'プラン', label: 'すべて込み' },
      { num: '1対1', unit: '専属制', label: '担当者固定' },
      { num: '韓・日', unit: 'バイリンガル', label: '在宅スタッフ' },
      { num: '最短', unit: '1週間', label: 'サービス開始' },
    ],
    svcTag: 'Services',
    svcTitle: 'サービス内容',
    svcDesc: '日本進出の準備から日常業務まで、必要なことをすべて一括サポートします。',
    setupTag: '進出サポート',
    setupTitle: '法人設立から\n始められます',
    setupDesc: '「日本に会社を作りたいが、何から始めればいいかわからない」——そんな方のために、進出準備の最初のステップからサポートします。',
    setupItems: [
      { icon: Building2, title: '法人設立サポート', desc: '株式会社・合同会社の設立手続き全般をサポート。司法書士・税理士のご紹介も行います。' },
      { icon: MapPin, title: '事務所・バーチャルオフィス', desc: '事業内容・予算に合わせた事務所またはバーチャルオフィスの選定・契約をサポート。' },
      { icon: CreditCard, title: '法人銀行口座開設', desc: '日本の法人口座開設は外国企業には特に複雑。必要書類の準備から手続き同行まで対応。' },
      { icon: FileText, title: '各種届出・手続き', desc: '税務署・年金事務所などへの届出、印鑑証明取得など、設立後の煩雑な手続きをサポート。' },
      { icon: Briefcase, title: '専門家ネットワーク', desc: '税理士・司法書士・社労士など、日韓ビジネスに精通した専門家をご紹介します。' },
      { icon: Globe, title: 'ビザ・在留資格', desc: '経営管理ビザの取得サポート。在留資格に関する基本的な情報提供と専門家へのつなぎ役。' },
    ],
    pricingTag: '料金プラン',
    pricingTitle: 'シンプルな\nワンプラン',
    pricingDesc: 'すべてのサービスが含まれた月額定額制。複雑な料金体系は一切ありません。',
    initialFee: '初期費用',
    initialPrice: '¥1,000,000〜',
    initialNote: '法人設立・事務所探し・口座開設などの進出準備費用。内容により異なります。',
    monthlyFee: '月額費用',
    monthlyPrice: '¥99,000',
    monthlyNote: '税抜・月額定額制',
    planIncludes: 'すべて含まれるサービス',
    planItems: [
      '郵便物受領・スキャン・転送・内容報告',
      '日韓バイリンガル顧客対応（メール・電話）',
      '翻訳対応（ビジネス文書・契約書等）',
      'スケジュール管理・アポイント調整',
      '出張・会議・展示会の予約手配',
      '経費精算チェック・月次レポート',
      '資料・議事録・報告書作成',
      '対面同行（月1回）',
      'LINE WORKS連携',
      '専属担当者固定制',
    ],
    planCta: '無料相談・お見積り',
    planConsult: '初期費用は内容により異なります。まずはお気軽にご相談ください。',
    whyTag: '選ばれる理由',
    whyTitle: '6つの理由',
    whyItems: [
      { icon: Shield, title: '韓国→日本に特化', desc: '韓国企業が日本進出する際の固有の課題（言語・文化・法制度）を深く理解しています。' },
      { icon: Users, title: '専属担当制', desc: '企業1社に対して1名が専属対応。まるで自社社員のような継続的サポートが可能です。' },
      { icon: Award, title: '定額・明確な料金', desc: '月額¥99,000（税抜）のみ。追加費用なし・入居契約不要。' },
      { icon: Globe, title: 'バイリンガル人材', desc: '日本在住の韓日バイリンガル女性スタッフ。日韓両文化を深く理解した対応が可能。' },
      { icon: TrendingUp, title: '進出準備から一貫対応', desc: '法人設立・口座開設などの準備段階から、日常のバックオフィス業務まで一貫してサポート。' },
      { icon: Clock, title: 'すぐに始められる', desc: 'お問い合わせから最短1週間でサービス開始。LINEWORKSで担当者とすぐ連携。' },
    ],
    stepsTag: 'ご利用の流れ',
    stepsTitle: 'ご利用の流れ',
    steps: [
      { num: '01', title: 'お問い合わせ', desc: 'フォームまたはメールでご連絡ください。' },
      { num: '02', title: 'オンライン面談', desc: 'ご要望をヒアリングし、最適なプランをご提案します（30分程度）。' },
      { num: '03', title: '担当者アサイン', desc: '業務内容に合わせた専属バイリンガルスタッフを選定します。' },
      { num: '04', title: 'サービス開始', desc: 'LINE WORKSで連携しながら業務スタート。月次レポートで進捗を可視化。' },
    ],
    voiceTag: 'お客様の声',
    voiceTitle: 'お客様の声',
    voices: [
      { company: '韓国系ITスタートアップ', text: '法人設立から口座開設まで丁寧にサポートしていただきました。日本語が全くわからない状態でも安心して手続きを進めることができました。' },
      { company: '韓国系コスメブランド', text: '展示会の手配から取引先とのメール対応まで、まるで日本に社員がいるような安心感があります。専属担当制なので細かいニュアンスも伝わります。' },
      { company: '韓国系食品メーカー', text: '商談への同行通訳が特に助かっています。月額定額なので予算管理もしやすく、スタートアップには非常にありがたいサービスです。' },
    ],
    aboutTag: 'About',
    aboutTitle: 'また来てほしい。\nお手伝いします。',
    aboutName: '"Support That Brings You Back."',
    aboutDesc1: 'TOWAYO（또 와요・도와요）は、韓国語で「また来て」「手伝います」という意味を持ちます。',
    aboutDesc2: '設立メンバーは韓国企業の日本進出支援機関での長年の実務経験を持ち、現場で見てきた課題に対して的確なサポートを提供します。',
    aboutDesc3: 'スタッフは全員、日本在住の韓日バイリンガル女性。子育て後の再就職希望者を積極採用し、雇用創出にも貢献しています。',
    contactTag: 'Contact',
    contactTitle: 'お問い合わせ・\n無料相談',
    contactDesc: '初回相談は無料です。法人設立のご相談から月額サービスのお見積りまで、お気軽にどうぞ。2営業日以内にご返答します。',
    formName: 'お名前 *', formCo: '会社名', formEmail: 'メールアドレス *',
    formInquiry: 'お問い合わせ種別',
    formInquiryOpts: ['法人設立サポートについて', '月額サービスについて', '料金・お見積りについて', '無料相談を申し込む', 'その他'],
    formMsg: 'お問い合わせ内容 *',
    formMsgPh: '現在の状況・ご要望・ご質問などをご記入ください',
    formSubmit: '送信する',
    formSending: '送信中...',
    formDone: '送信完了',
    formDoneMsg: 'お問い合わせを受け付けました。\n2営業日以内にご連絡いたします。',
    formPrivacy: '送信いただいた情報は、お問い合わせへの対応のみに使用します。',
    footerDesc: '韓国企業の日本進出を\n共に歩むパートナーです。',
    copyright: '© 2025 TOWAYO Inc. All rights reserved.',
  },

  ko: {
    lang: '한국어', langCode: 'ko',
    nav: ['서비스', '진출 지원', '요금', '회사 소개', '문의'],
    login: '로그인',
    heroEyebrow: 'Korea × Japan Business Bridge',
    heroH1a: '한국 기업의',
    heroH1b: '일본 진출',
    heroH1c: '을, 함께.',
    heroSlogan: '"Support That Brings You Back."',
    heroDesc: '법인 설립부터 일상 백오피스 업무까지——\n일본 거주 한일 바이링구얼이 전담으로,\n여러분 회사의 「일본 직원」이 됩니다.',
    heroCta1: '무료 상담 신청',
    heroCta2: '서비스 상세',
    stats: [
      { num: '', unit: '플랜', label: '모두 포함' },
      { num: '1:1', unit: '전담제', label: '담당자 고정' },
      { num: '한·일', unit: '바이링구얼', label: '재택 스태프' },
      { num: '최단', unit: '1주일', label: '서비스 시작' },
    ],
    svcTag: 'Services',
    svcTitle: '서비스 내용',
    svcDesc: '일본 진출 준비부터 일상 업무까지, 필요한 모든 것을 일괄 지원합니다.',
    setupTag: '진출 지원',
    setupTitle: '법인 설립부터\n시작할 수 있습니다',
    setupDesc: '「일본에 회사를 만들고 싶은데 무엇부터 시작해야 할지 모르겠다」——그런 분들을 위해 진출 준비의 첫 단계부터 지원합니다.',
    setupItems: [
      { icon: Building2, title: '법인 설립 지원', desc: '주식회사・합동회사 설립 절차 전반을 지원. 세무사・사법서사 소개도 진행합니다.' },
      { icon: MapPin, title: '사무소・가상오피스', desc: '사업 내용과 예산에 맞는 사무소 또는 가상오피스 선정・계약을 지원합니다.' },
      { icon: CreditCard, title: '법인 은행 계좌 개설', desc: '외국 기업에게 특히 복잡한 일본 법인 계좌 개설. 필요 서류 준비부터 절차 동행까지 대응.' },
      { icon: FileText, title: '각종 신고・절차', desc: '세무서・연금 사무소 신고, 인감 증명 취득 등 설립 후의 복잡한 절차를 지원합니다.' },
      { icon: Briefcase, title: '전문가 네트워크', desc: '세무사・사법서사・사회보험노무사 등 한일 비즈니스에 정통한 전문가를 소개합니다.' },
      { icon: Globe, title: '비자・재류 자격', desc: '경영관리 비자 취득 지원. 재류 자격에 관한 기본 정보 제공 및 전문가 연결.' },
    ],
    pricingTag: '요금 플랜',
    pricingTitle: '심플한\n원 플랜',
    pricingDesc: '모든 서비스가 포함된 월정액제. 복잡한 요금 체계는 일절 없습니다.',
    initialFee: '초기 비용',
    initialPrice: '¥1,000,000~',
    initialNote: '법인 설립・사무소 탐색・계좌 개설 등 진출 준비 비용. 내용에 따라 다릅니다.',
    monthlyFee: '월정액',
    monthlyPrice: '¥99,000',
    monthlyNote: '세금 별도・월정액제',
    planIncludes: '포함된 서비스 전체',
    planItems: [
      '우편물 수령・스캔・전달・내용 보고',
      '한일 바이링구얼 고객 응대（메일・전화）',
      '번역 대응（비즈니스 문서・계약서 등）',
      '스케줄 관리・약속 조정',
      '출장・회의・전시회 예약 수배',
      '경비 정산 확인・월간 리포트',
      '자료・의사록・보고서 작성',
      '대면 동행（월 1회）',
      'LINE WORKS 연동',
      '전담 담당자 고정제',
    ],
    planCta: '무료 상담・견적 문의',
    planConsult: '초기 비용은 내용에 따라 달라집니다. 먼저 편하게 상담해 주세요.',
    whyTag: '선택받는 이유',
    whyTitle: '6가지 이유',
    whyItems: [
      { icon: Shield, title: '한국→일본에 특화', desc: '한국 기업이 일본 진출 시 직면하는 고유한 과제（언어・문화・법제도）를 깊이 이해합니다.' },
      { icon: Users, title: '전담 담당제', desc: '기업 1사에 1명이 전담 대응. 마치 자사 직원과 같은 지속적인 지원이 가능합니다.' },
      { icon: Award, title: '정액・명확한 요금', desc: '월정액 ¥99,000（세금 별도）만. 추가 비용 없음・입주 계약 불필요.' },
      { icon: Globe, title: '바이링구얼 인재', desc: '일본 거주 한일 바이링구얼 여성 스태프. 양국 문화를 깊이 이해한 대응 가능.' },
      { icon: TrendingUp, title: '진출 준비부터 일관 대응', desc: '법인 설립・계좌 개설 등 준비 단계부터 일상 백오피스 업무까지 일관 지원.' },
      { icon: Clock, title: '바로 시작 가능', desc: '문의 후 최단 1주일 만에 서비스 시작. LINE WORKS로 담당자와 즉시 연동.' },
    ],
    stepsTag: '이용 방법',
    stepsTitle: '이용 방법',
    steps: [
      { num: '01', title: '문의', desc: '폼 또는 이메일로 연락해 주세요.' },
      { num: '02', title: '온라인 상담', desc: '요구 사항을 파악하고 최적의 플랜을 제안합니다（약 30분）.' },
      { num: '03', title: '담당자 배정', desc: '업무 내용에 맞는 전담 바이링구얼 스태프를 선정합니다.' },
      { num: '04', title: '서비스 시작', desc: 'LINE WORKS로 연동하며 업무 시작. 월간 리포트로 진행 상황 가시화.' },
    ],
    voiceTag: '고객의 목소리',
    voiceTitle: '고객의 목소리',
    voices: [
      { company: '한국계 IT 스타트업', text: '법인 설립부터 계좌 개설까지 꼼꼼하게 지원해 주셨습니다. 일본어를 전혀 모르는 상태에서도 안심하고 절차를 진행할 수 있었습니다.' },
      { company: '한국계 코스메 브랜드', text: '전시회 수배부터 거래처와의 메일 응대까지, 마치 일본에 직원이 있는 것 같은 안심감이 있습니다. 전담 담당제라 세밀한 뉘앙스도 잘 전달됩니다.' },
      { company: '한국계 식품 제조사', text: '상담 동행 통역이 특히 도움이 됩니다. 월정액이라 예산 관리도 쉽고, 스타트업에게 매우 고마운 서비스입니다.' },
    ],
    aboutTag: 'About',
    aboutTitle: '또 와요.\n도와요.',
    aboutName: '"Support That Brings You Back."',
    aboutDesc1: 'TOWAYO（또 와요・도와요）는 한국어로 「또 와요」「도와요」라는 의미를 가집니다.',
    aboutDesc2: '창립 멤버는 한국 기업의 일본 진출 지원 기관에서 오랜 실무 경험을 보유하고 있으며, 현장에서 본 과제에 정확한 지원을 제공합니다.',
    aboutDesc3: '스태프는 전원 일본 거주 한일 바이링구얼 여성. 육아 후 재취업 희망자를 적극 채용하여 고용 창출에도 기여하고 있습니다.',
    contactTag: 'Contact',
    contactTitle: '문의・\n무료 상담',
    contactDesc: '첫 상담은 무료입니다. 법인 설립 상담부터 월정액 서비스 견적까지, 편하게 연락해 주세요. 2영업일 이내에 답변드립니다.',
    formName: '이름 *', formCo: '회사명', formEmail: '이메일 주소 *',
    formInquiry: '문의 종류',
    formInquiryOpts: ['법인 설립 지원에 대해', '월정액 서비스에 대해', '요금・견적에 대해', '무료 상담 신청', '기타'],
    formMsg: '문의 내용 *',
    formMsgPh: '현재 상황・요청 사항・질문 등을 입력해 주세요',
    formSubmit: '전송',
    formSending: '전송 중...',
    formDone: '전송 완료',
    formDoneMsg: '문의를 접수했습니다.\n2영업일 이내에 연락드리겠습니다.',
    formPrivacy: '제출하신 정보는 문의 대응에만 사용됩니다.',
    footerDesc: '한국 기업의 일본 진출을\n함께 걷는 파트너입니다.',
    copyright: '© 2025 TOWAYO Inc. All rights reserved.',
  },

  en: {
    lang: 'English', langCode: 'en',
    nav: ['Services', 'Setup Support', 'Pricing', 'About', 'Contact'],
    login: 'Login',
    heroEyebrow: 'Korea × Japan Business Bridge',
    heroH1a: 'Your Korean Business,',
    heroH1b: 'Expanding to Japan',
    heroH1c: '— Together.',
    heroSlogan: '"Support That Brings You Back."',
    heroDesc: 'From company incorporation to daily back-office operations——\nour dedicated Japanese-Korean bilingual staff\nbecomes your company\'s "Japan employee".',
    heroCta1: 'Book a Free Consultation',
    heroCta2: 'View Services',
    stats: [
      { num: '', unit: 'Plan', label: 'All-inclusive' },
      { num: '1:1', unit: 'Dedicated', label: 'Fixed contact' },
      { num: 'KO/JA', unit: 'Bilingual', label: 'Remote staff' },
      { num: 'From', unit: '1 week', label: 'To start' },
    ],
    svcTag: 'Services',
    svcTitle: 'Our Services',
    svcDesc: 'We cover everything from Japan entry preparation to daily back-office operations — all in one place.',
    setupTag: 'Setup Support',
    setupTitle: 'We\'ll Guide You\nFrom Day One',
    setupDesc: '"I want to set up a company in Japan, but I don\'t know where to start." — We support you from the very first step of your Japan entry journey.',
    setupItems: [
      { icon: Building2, title: 'Company Incorporation', desc: 'Full support for setting up a KK or GK corporation. We also introduce qualified lawyers and accountants.' },
      { icon: MapPin, title: 'Office & Virtual Office', desc: 'We help you find and contract a physical office or virtual office suited to your business needs and budget.' },
      { icon: CreditCard, title: 'Corporate Bank Account', desc: 'Opening a Japanese corporate account is particularly complex for foreign companies. We handle paperwork and accompany you.' },
      { icon: FileText, title: 'Registrations & Filings', desc: 'Tax office registrations, pension filings, seal certificates — we handle all the post-incorporation paperwork.' },
      { icon: Briefcase, title: 'Expert Network', desc: 'We connect you with tax accountants, judicial scriveners, and labor consultants experienced in Japan-Korea business.' },
      { icon: Globe, title: 'Visa & Residency', desc: 'Support for Business Manager visa applications. We provide guidance and connect you with specialists.' },
    ],
    pricingTag: 'Pricing',
    pricingTitle: 'Simple.\nOne Plan.',
    pricingDesc: 'A flat monthly fee with everything included. No complex tiers, no hidden costs.',
    initialFee: 'Initial Fee',
    initialPrice: '¥1,000,000~',
    initialNote: 'Covers company setup, office search, bank account opening, and related preparation. Varies by scope.',
    monthlyFee: 'Monthly Fee',
    monthlyPrice: '¥99,000',
    monthlyNote: 'Excl. tax · Flat monthly rate',
    planIncludes: 'Everything Included',
    planItems: [
      'Mail & postal management (scan, forward, report)',
      'Bilingual customer support (email & phone)',
      'Translation (business documents, contracts, etc.)',
      'Schedule management & appointment coordination',
      'Travel, meeting & exhibition arrangements',
      'Expense processing & monthly reports',
      'Document, minutes & report preparation',
      'In-person accompaniment (once/month)',
      'LINE WORKS integration',
      'Dedicated fixed contact person',
    ],
    planCta: 'Get a Free Quote',
    planConsult: 'Initial fees vary by scope. Contact us for a free consultation.',
    whyTag: 'Why TOWAYO',
    whyTitle: '6 Reasons\nClients Choose Us',
    whyItems: [
      { icon: Shield, title: 'Specialized in Korea→Japan', desc: 'We deeply understand the unique challenges Korean companies face entering Japan — language, culture, and legal systems.' },
      { icon: Users, title: 'Dedicated Contact Person', desc: 'One dedicated staff member per company, no rotation — building a working relationship as close as an in-house employee.' },
      { icon: Award, title: 'Flat & Transparent Pricing', desc: '¥99,000/month (excl. tax). No hidden fees, no tenancy required.' },
      { icon: Globe, title: 'Bilingual Professionals', desc: 'Japan-based Korean-Japanese bilingual women, deeply familiar with both cultures.' },
      { icon: TrendingUp, title: 'End-to-End Support', desc: 'From incorporation and bank accounts to daily back-office work — we stay with you throughout your Japan journey.' },
      { icon: Clock, title: 'Start in as Little as 1 Week', desc: 'Reach out today and be operational within a week. Coordinate instantly via LINE WORKS.' },
    ],
    stepsTag: 'How It Works',
    stepsTitle: 'How It Works',
    steps: [
      { num: '01', title: 'Contact Us', desc: 'Reach out via form or email with a brief overview of your needs.' },
      { num: '02', title: 'Online Consultation', desc: 'We listen to your goals and recommend the best approach (approx. 30 min).' },
      { num: '03', title: 'Staff Assignment', desc: 'We match you with the best-fit bilingual staff based on your industry and needs.' },
      { num: '04', title: 'Service Begins', desc: 'Start collaborating via LINE WORKS. Monthly reports keep everything transparent.' },
    ],
    voiceTag: 'Testimonials',
    voiceTitle: 'What Our Clients Say',
    voices: [
      { company: 'Korean IT Startup', text: 'They supported us through the entire incorporation process, from filing paperwork to opening our bank account. Even with no Japanese, we felt completely at ease.' },
      { company: 'Korean Cosmetics Brand', text: 'From trade show logistics to email correspondence with partners — it feels like having a real employee in Japan. The dedicated contact person makes all the difference.' },
      { company: 'Korean Food Manufacturer', text: 'The in-person accompaniment for business meetings is invaluable. The flat fee makes budgeting easy — a great service for startups.' },
    ],
    aboutTag: 'About',
    aboutTitle: '"Come Back Again.\nWe\'ll Help You."',
    aboutName: '"Support That Brings You Back."',
    aboutDesc1: 'TOWAYO (또 와요・도와요) means "Come back again" and "We\'ll help you" in Korean.',
    aboutDesc2: 'Our founding team brings years of hands-on experience supporting Korean companies entering Japan — we\'ve seen the challenges firsthand.',
    aboutDesc3: 'All staff are Japan-based Korean-Japanese bilingual women. We actively hire mothers returning to the workforce, contributing to employment as we grow.',
    contactTag: 'Contact',
    contactTitle: 'Contact Us\nfor a Free Consultation',
    contactDesc: 'First consultations are free. From incorporation inquiries to monthly service quotes — we\'re happy to help. We respond within 2 business days.',
    formName: 'Name *', formCo: 'Company', formEmail: 'Email *',
    formInquiry: 'Inquiry Type',
    formInquiryOpts: ['Company Incorporation Support', 'Monthly Service Inquiry', 'Pricing & Quote', 'Book Free Consultation', 'Other'],
    formMsg: 'Message *',
    formMsgPh: 'Please describe your current situation, needs, or questions',
    formSubmit: 'Send Message',
    formSending: 'Sending...',
    formDone: 'Message Sent',
    formDoneMsg: 'We\'ve received your inquiry.\nWe\'ll be in touch within 2 business days.',
    formPrivacy: 'Your information will only be used to respond to your inquiry.',
    footerDesc: 'Your trusted partner for\nKorean business expansion into Japan.',
    copyright: '© 2025 TOWAYO Inc. All rights reserved.',
  },
} as const

type Lang = keyof typeof T

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el); return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const SERVICES_ICONS = ['📬', '🗣️', '📅', '💴', '📝', '🤝', '🏢', '🌐']
const SERVICES_EN = ['Mail Management', 'Bilingual Support', 'Schedule & Logistics', 'Expense Management', 'Document Creation', 'On-site Support', 'Virtual Office', 'Digital Marketing']

export default function Home() {
  const [lang, setLang] = useState<Lang>('ja')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  // Auto-detect language by geo
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(d => {
        if (d.country_code === 'KR') setLang('ko')
        else if (d.country_code === 'JP') setLang('ja')
        else setLang('en')
      })
      .catch(() => setLang('ja'))
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn)
  }, [])

  const t = T[lang]

  return (
    <div style={{ background: '#FAF6F0', color: '#1a1510', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Noto+Serif+JP:wght@200;300;400;500;600&family=Noto+Sans+JP:wght@300;400;500&family=Noto+Serif+KR:wght@300;400;500&family=EB+Garamond:ital,wght@0,400;1,400&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes pulse{0%,100%{opacity:0.35;transform:scale(1)}50%{opacity:0.6;transform:scale(1.04)}}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-33.33%)}}
        .afu{opacity:0;animation:fadeUp 0.85s ease forwards}
        .d1{animation-delay:.12s}.d2{animation-delay:.24s}.d3{animation-delay:.36s}.d4{animation-delay:.5s}.d5{animation-delay:.65s}
        .reveal{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}
        .reveal.in{opacity:1;transform:translateY(0)}
        .svc{transition:transform .3s,box-shadow .3s}.svc:hover{transform:translateY(-5px);box-shadow:0 18px 48px rgba(26,21,16,.11)}
        .plncard{transition:transform .3s,box-shadow .3s}.plncard:hover{transform:translateY(-4px);box-shadow:0 14px 40px rgba(26,21,16,.13)}
        .navlnk{position:relative}.navlnk::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:#C8572A;transition:width .3s}.navlnk:hover::after{width:100%}
        .whyrow{transition:padding-left .25s}.whyrow:hover{padding-left:.6rem}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#EDE4DA}::-webkit-scrollbar-thumb{background:#C8572A;border-radius:3px}
        input:focus,textarea:focus,select:focus{border-color:#C8572A!important;box-shadow:0 0 0 3px rgba(200,87,42,.08)}
        @media(max-width:768px){.dsk{display:none!important}.mob{display:flex!important}.grid2{grid-template-columns:1fr!important}.grid4{grid-template-columns:1fr 1fr!important}}
        @media(min-width:769px){.mob{display:none!important}}
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'all .4s', background: scrolled ? 'rgba(250,246,240,.96)' : 'transparent', backdropFilter: scrolled ? 'blur(18px)' : 'none', borderBottom: scrolled ? '1px solid rgba(200,87,42,.1)' : 'none' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'baseline', gap: '.6rem', textDecoration: 'none' }}>
            <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.8rem', fontWeight: 600, color: '#C8572A', letterSpacing: '.04em', lineHeight: 1 }}>TOWAYO</span>
            <span style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.58rem', color: '#B09070', letterSpacing: '.12em' }}>또 와요 · 도와요</span>
          </Link>

          <div className="dsk" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {t.nav.map((label, i) => (
              <a key={i} href={`#${['services', 'setup', 'pricing', 'about', 'contact'][i]}`} className="navlnk"
                style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.78rem', color: '#3d3228', letterSpacing: '.05em', textDecoration: 'none' }}>
                {label}
              </a>
            ))}

            {/* Language switcher */}
            <div style={{ position: 'relative' }}>
              <button onClick={() => setLangMenuOpen(!langMenuOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: '.4rem', background: 'transparent', border: '1px solid rgba(200,87,42,.3)', borderRadius: '1px', padding: '.35rem .8rem', cursor: 'pointer', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.72rem', color: '#C8572A' }}>
                <Globe size={13} />{t.lang}
              </button>
              {langMenuOpen && (
                <div style={{ position: 'absolute', top: '110%', right: 0, background: 'white', border: '1px solid #E8DDD4', borderRadius: '2px', boxShadow: '0 8px 24px rgba(26,21,16,.1)', zIndex: 100, minWidth: '120px' }}>
                  {(['ja', 'ko', 'en'] as Lang[]).map(l => (
                    <button key={l} onClick={() => { setLang(l); setLangMenuOpen(false) }}
                      style={{ display: 'block', width: '100%', padding: '.6rem 1rem', textAlign: 'left', background: lang === l ? 'rgba(200,87,42,.06)' : 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.78rem', color: lang === l ? '#C8572A' : '#3d3228' }}>
                      {T[l].lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href="/login" style={{ background: '#1a1510', color: '#FAF6F0', padding: '.45rem 1.4rem', borderRadius: '1px', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.78rem', letterSpacing: '.1em', textDecoration: 'none', transition: 'background .2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#C8572A')}
              onMouseLeave={e => (e.currentTarget.style.background = '#1a1510')}>
              {t.login}
            </Link>
          </div>

          <div className="mob" style={{ display: 'none', alignItems: 'center', gap: '1rem' }}>
            <button onClick={() => setLangMenuOpen(!langMenuOpen)}
              style={{ display: 'flex', alignItems: 'center', gap: '.3rem', background: 'transparent', border: '1px solid rgba(200,87,42,.3)', borderRadius: '1px', padding: '.3rem .6rem', cursor: 'pointer', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.7rem', color: '#C8572A' }}>
              <Globe size={12} />{t.langCode.toUpperCase()}
            </button>
            {langMenuOpen && (
              <div style={{ position: 'absolute', top: 68, right: '4rem', background: 'white', border: '1px solid #E8DDD4', borderRadius: '2px', boxShadow: '0 8px 24px rgba(26,21,16,.1)', zIndex: 100 }}>
                {(['ja', 'ko', 'en'] as Lang[]).map(l => (
                  <button key={l} onClick={() => { setLang(l); setLangMenuOpen(false) }}
                    style={{ display: 'block', width: '100%', padding: '.6rem 1.2rem', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.78rem', color: lang === l ? '#C8572A' : '#3d3228' }}>
                    {T[l].lang}
                  </button>
                ))}
              </div>
            )}
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1a1510' }}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div style={{ background: '#FAF6F0', borderTop: '1px solid #E8DDD4', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {t.nav.map((label, i) => (
              <a key={i} href={`#${['services', 'setup', 'pricing', 'about', 'contact'][i]}`} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.95rem', color: '#1a1510', textDecoration: 'none' }}>{label}</a>
            ))}
            <Link href="/login" onClick={() => setMenuOpen(false)}
              style={{ background: '#C8572A', color: 'white', padding: '.7rem', textAlign: 'center', borderRadius: '1px', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.85rem', textDecoration: 'none' }}>
              {t.login}
            </Link>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 68 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#FAF6F0 0%,#F5EDE3 45%,#FAF6F0 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 80% 60% at 72% 40%,rgba(200,87,42,.07) 0%,transparent 70%)' }} />
        <div style={{ position: 'absolute', right: -130, top: '3%', width: 620, height: 620, border: '1px solid rgba(200,87,42,.09)', borderRadius: '50%', animation: 'float 7s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', right: -50, top: '10%', width: 460, height: 460, border: '1px solid rgba(200,87,42,.06)', borderRadius: '50%', animation: 'pulse 9s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', right: '8%', top: '22%', width: 280, height: 280, border: '1px solid rgba(200,87,42,.11)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', right: '5%', top: '8%', fontFamily: 'Noto Serif JP,serif', fontSize: '14rem', fontWeight: 200, color: 'rgba(200,87,42,.035)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>共</div>
        <div style={{ position: 'absolute', top: 0, right: '33%', width: 1, height: '100%', background: 'linear-gradient(to bottom,transparent,rgba(200,87,42,.12) 40%,transparent)', transform: 'rotate(7deg)', transformOrigin: 'top center' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 2rem', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 700 }}>
            <div className="afu" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '2rem', height: 1, background: '#C8572A' }} />
              <span style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.68rem', letterSpacing: '.28em', color: '#C8572A', textTransform: 'uppercase' }}>{t.heroEyebrow}</span>
            </div>
            <h1 className="afu d1" style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(3rem,7vw,5.8rem)', fontWeight: 300, lineHeight: 1.05, color: '#1a1510', marginBottom: '.2rem' }}>{t.heroH1a}</h1>
            <h1 className="afu d2" style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(3rem,7vw,5.8rem)', fontWeight: 300, lineHeight: 1.05, marginBottom: '.2rem' }}>
              <em style={{ fontStyle: 'italic', color: '#C8572A', fontWeight: 400 }}>{t.heroH1b}</em>
            </h1>
            <h1 className="afu d3" style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(3rem,7vw,5.8rem)', fontWeight: 300, lineHeight: 1.05, color: '#1a1510', marginBottom: '2rem' }}>{t.heroH1c}</h1>
            <p className="afu d3" style={{ fontFamily: 'EB Garamond,serif', fontSize: '1.1rem', fontStyle: 'italic', color: '#9A7A5A', letterSpacing: '.04em', marginBottom: '1.5rem' }}>{t.heroSlogan}</p>
            <p className="afu d4" style={{ fontFamily: 'Noto Serif JP,serif', fontSize: 'clamp(.88rem,1.5vw,1.02rem)', lineHeight: 2.1, color: '#5a4a3a', maxWidth: 530, marginBottom: '3rem', fontWeight: 300, whiteSpace: 'pre-line' }}>{t.heroDesc}</p>
            <div className="afu d5" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
              <a href="#contact" style={{ display: 'flex', alignItems: 'center', gap: '.6rem', background: '#C8572A', color: 'white', padding: '1rem 2.4rem', borderRadius: '1px', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.85rem', letterSpacing: '.1em', textDecoration: 'none', transition: 'all .25s', boxShadow: '0 4px 24px rgba(200,87,42,.32)' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#A84420'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#C8572A'; e.currentTarget.style.transform = '' }}>
                {t.heroCta1} <ArrowRight size={15} />
              </a>
              <a href="#services" style={{ display: 'flex', alignItems: 'center', gap: '.5rem', border: '1px solid rgba(26,21,16,.22)', color: '#3d3228', padding: '1rem 2.2rem', borderRadius: '1px', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.85rem', letterSpacing: '.08em', textDecoration: 'none', transition: 'all .25s', background: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8572A'; e.currentTarget.style.color = '#C8572A' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(26,21,16,.22)'; e.currentTarget.style.color = '#3d3228' }}>
                {t.heroCta2}
              </a>
            </div>
            <div className="afu d5" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {t.stats.map((s, i) => (
                <div key={i} style={{ borderLeft: '2px solid rgba(200,87,42,.28)', paddingLeft: '1rem' }}>
                  {s.num && <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.6rem', fontWeight: 600, color: '#C8572A', lineHeight: 1 }}>{s.num}</div>}
                  <div style={{ fontFamily: s.num ? 'Noto Sans JP,sans-serif' : 'Cormorant Garamond,serif', fontSize: s.num ? '.62rem' : '1.4rem', fontWeight: s.num ? 400 : 600, color: s.num ? '#9A7A5A' : '#C8572A', letterSpacing: '.08em', marginTop: '.1rem' }}>{s.unit}</div>
                  <div style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.7rem', color: '#7A6A5A', marginTop: '.15rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem', animation: 'float 3s ease-in-out infinite' }}>
          <span style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.58rem', letterSpacing: '.22em', color: '#B09070' }}>SCROLL</span>
          <ChevronDown size={13} style={{ color: '#C8572A' }} />
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: '#1a1510', padding: '.85rem 0', overflow: 'hidden', borderTop: '1px solid rgba(200,87,42,.18)', borderBottom: '1px solid rgba(200,87,42,.18)' }}>
        <div style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', animation: 'marquee 28s linear infinite' }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} style={{ display: 'flex', gap: '3rem' }}>
              {t.planItems.map((item, j) => (
                <span key={j} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.7rem', color: 'rgba(255,255,255,.38)', letterSpacing: '.12em' }}>
                  <span style={{ color: '#C8572A', fontSize: '.45rem' }}>◆</span>{item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <ServicesSection t={t} />

      {/* SETUP SUPPORT */}
      <SetupSection t={t} />

      {/* PRICING */}
      <PricingSection t={t} />

      {/* WHY */}
      <WhySection t={t} />

      {/* STEPS */}
      <StepsSection t={t} />

      {/* VOICES */}
      <VoicesSection t={t} />

      {/* ABOUT */}
      <AboutSection t={t} />

      {/* CONTACT */}
      <ContactSection t={t} />

      {/* FOOTER */}
      <footer style={{ background: '#0D0A07', borderTop: '1px solid rgba(200,87,42,.12)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 2rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.6rem', fontWeight: 600, color: '#C8572A', marginBottom: '.6rem' }}>TOWAYO</div>
              <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.68rem', color: 'rgba(255,255,255,.28)', lineHeight: 1.9, whiteSpace: 'pre-line' }}>{'또 와요（また来て）\n도와요（お手伝いします）\n\n'}{t.footerDesc}</p>
            </div>
            <div>
              <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.6rem', letterSpacing: '.2em', color: 'rgba(255,255,255,.25)', marginBottom: '.9rem', textTransform: 'uppercase' }}>Services</p>
              {t.planItems.slice(0, 6).map(s => (
                <p key={s} style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.75rem', color: 'rgba(255,255,255,.42)', marginBottom: '.4rem' }}>{s}</p>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.6rem', letterSpacing: '.2em', color: 'rgba(255,255,255,.25)', marginBottom: '.9rem', textTransform: 'uppercase' }}>Pricing</p>
              <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.82rem', color: 'rgba(255,255,255,.5)', marginBottom: '.4rem' }}>{t.initialFee}: {t.initialPrice}</p>
              <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.82rem', color: 'rgba(255,255,255,.5)', marginBottom: '.4rem' }}>{t.monthlyFee}: {t.monthlyPrice}/mo</p>
            </div>
            <div>
              <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.6rem', letterSpacing: '.2em', color: 'rgba(255,255,255,.25)', marginBottom: '.9rem', textTransform: 'uppercase' }}>Contact</p>
              <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.75rem', color: 'rgba(255,255,255,.42)', marginBottom: '.45rem' }}>info@towayo.com</p>
              <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.75rem', color: 'rgba(255,255,255,.42)', marginBottom: '1.5rem' }}>Tokyo, Japan</p>
              <a href="#contact" style={{ border: '1px solid rgba(200,87,42,.35)', color: '#C8572A', padding: '.45rem 1.1rem', borderRadius: '1px', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.72rem', textDecoration: 'none' }}>{t.heroCta1}</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,.05)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.65rem', color: 'rgba(255,255,255,.18)' }}>{t.copyright}</p>
            <p style={{ fontFamily: 'EB Garamond,serif', fontSize: '.75rem', fontStyle: 'italic', color: 'rgba(255,255,255,.18)' }}>{t.heroSlogan}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SH({ tag, title, sub, center, dark }: { tag: string; title: string; sub?: string; center?: boolean; dark?: boolean }) {
  const c = dark ? 'rgba(255,255,255,.7)' : '#1a1510'
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.75rem', justifyContent: center ? 'center' : 'flex-start' }}>
        <div style={{ width: '2rem', height: 1, background: '#C8572A' }} />
        <span style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.28em', color: '#C8572A', textTransform: 'uppercase' }}>{tag}</span>
        {center && <div style={{ width: '2rem', height: 1, background: '#C8572A' }} />}
      </div>
      <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2.2rem,4vw,3.4rem)', fontWeight: 400, color: c, whiteSpace: 'pre-line', marginBottom: sub ? '.75rem' : 0 }}>{title}</h2>
      {sub && <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.9rem', color: dark ? 'rgba(255,255,255,.5)' : '#7A6A5A', fontWeight: 300, maxWidth: center ? '520px' : 'none', margin: center ? '0 auto' : 0 }}>{sub}</p>}
    </div>
  )
}

function ServicesSection({ t }: { t: typeof T[keyof typeof T] }) {
  const { ref, inView } = useInView()
  const svcTitles = [t.planItems[0], t.planItems[1], t.planItems[2], t.planItems[3], t.planItems[4], t.planItems[5], t.planItems[6] ?? '', t.planItems[7] ?? '']
  const svcDescs: Record<string, string[]> = {
    ja: ['郵便物の受領・スキャン・転送・内容報告。日本語の複雑な書類も丁寧に処理します。', '日韓バイリンガルによるメール・電話対応。契約書・プレスリリースなどの翻訳。', 'アポイント調整、出張・会議・展示会の予約手配を一括管理。', '経費精算チェック、データ入力・整理、月次・週次レポート作成。', '議事録・文字起こし、報告書・書状データ作成、市場リサーチ対応。', '商談・打ち合わせへの通訳同行（月1回）。展示会出展サポート。', '法人住所の提供、銀行口座開設サポート。物理的拠点なしで運営可能。', 'ホームページ構築、SNS運営代行、定期プレスリリース配信。'],
    ko: ['우편물 수령・스캔・전달・내용 보고. 복잡한 일본어 서류도 꼼꼼히 처리.', '한일 바이링구얼 메일・전화 응대. 계약서・프레스 릴리스 등 번역.', '약속 조정, 출장・회의・전시회 예약 수배를 일괄 관리.', '경비 정산 확인, 데이터 입력・정리, 월간・주간 리포트 작성.', '의사록・받아쓰기, 보고서 작성, 시장 리서치 대응.', '상담・미팅 통역 동행（월 1회）. 전시회 출전 지원.', '법인 주소 제공, 은행 계좌 개설 지원. 물리적 거점 없이 운영 가능.', '홈페이지 구축, SNS 운영 대행, 정기 프레스 릴리스 배포.'],
    en: ['Mail receipt, scanning, forwarding, and reporting. We handle complex Japanese documents carefully.', 'Korean-Japanese bilingual email and phone support. Translation of contracts, press releases, and more.', 'Appointment coordination, travel, meeting, and exhibition arrangements — all managed for you.', 'Expense processing, data entry, and monthly/weekly report creation.', 'Minutes, transcription, report writing, and market research support.', 'In-person interpretation for meetings (once/month). Trade show support.', 'Corporate address provision and bank account opening support. Operate without a physical office.', 'Website building, SNS management, regular press release distribution.'],
  }
  const langKey = t.langCode === 'ko' ? 'ko' : t.langCode === 'en' ? 'en' : 'ja'
  const descs = svcDescs[langKey]

  return (
    <section id="services" style={{ background: '#F5EDE3', padding: '7rem 0' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className={`reveal ${inView ? 'in' : ''}`}><SH tag={t.svcTag} title={t.svcTitle} sub={t.svcDesc} /></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(270px,1fr))', gap: '1.5px', background: '#D8CBBF' }}>
          {SERVICES_ICONS.map((icon, i) => (
            <div key={i} className={`svc reveal ${inView ? 'in' : ''}`}
              style={{ background: '#FAF6F0', padding: '2.2rem', position: 'relative', overflow: 'hidden', transitionDelay: `${i * .055}s` }}>
              <div style={{ position: 'absolute', top: '1.2rem', right: '1.4rem', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.58rem', letterSpacing: '.15em', color: 'rgba(200,87,42,.45)', textTransform: 'uppercase' }}>{SERVICES_EN[i]}</div>
              <div style={{ fontSize: '1.55rem', marginBottom: '1rem' }}>{icon}</div>
              <h3 style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.95rem', fontWeight: 500, color: '#1a1510', marginBottom: '.65rem', lineHeight: 1.4 }}>{svcTitles[i]}</h3>
              <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.78rem', color: '#7A6A5A', lineHeight: 1.85 }}>{descs[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SetupSection({ t }: { t: typeof T[keyof typeof T] }) {
  const { ref, inView } = useInView()
  return (
    <section id="setup" style={{ background: '#FAF6F0', padding: '7rem 0' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: '5rem', alignItems: 'start' }} className="grid2">
          <div className={`reveal ${inView ? 'in' : ''}`} style={{ position: 'sticky', top: '6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.75rem' }}>
              <div style={{ width: '2rem', height: 1, background: '#C8572A' }} />
              <span style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.28em', color: '#C8572A', textTransform: 'uppercase' }}>{t.setupTag}</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, color: '#1a1510', lineHeight: 1.15, marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>{t.setupTitle}</h2>
            <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.9rem', color: '#7A6A5A', lineHeight: 1.95, fontWeight: 300, marginBottom: '2rem' }}>{t.setupDesc}</p>
            <div style={{ padding: '1.5rem', background: '#F5EDE3', borderLeft: '3px solid #C8572A' }}>
              <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.85rem', color: '#5A4A3A', lineHeight: 1.8 }}>
                {t.langCode === 'ko' ? '초기 비용은 내용・규모에 따라 달라집니다.\n먼저 무료로 상담해 주세요。' : t.langCode === 'en' ? 'Initial fees vary depending on scope.\nBook a free consultation to get started.' : '初期費用は内容・規模により異なります。\nまずは無料でご相談ください。'}
              </p>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', marginTop: '1rem', background: '#C8572A', color: 'white', padding: '.6rem 1.4rem', borderRadius: '1px', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.78rem', letterSpacing: '.08em', textDecoration: 'none' }}>
                {t.heroCta1} <ArrowRight size={13} />
              </a>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }} className="grid2">
            {t.setupItems.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className={`reveal ${inView ? 'in' : ''}`}
                style={{ background: '#F5EDE3', padding: '1.8rem', border: '1px solid #E8DDD4', transitionDelay: `${i * .07}s` }}>
                <div style={{ width: '2.4rem', height: '2.4rem', border: '1px solid rgba(200,87,42,.28)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Icon size={14} style={{ color: '#C8572A' }} />
                </div>
                <h3 style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.92rem', fontWeight: 500, color: '#1a1510', marginBottom: '.5rem' }}>{title}</h3>
                <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.76rem', color: '#7A6A5A', lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingSection({ t }: { t: typeof T[keyof typeof T] }) {
  const { ref, inView } = useInView()
  return (
    <section id="pricing" style={{ background: '#1a1510', padding: '7rem 0' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className={`reveal ${inView ? 'in' : ''}`}><SH tag={t.pricingTag} title={t.pricingTitle} sub={t.pricingDesc} center dark /></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }} className="grid2">
          {/* Initial fee */}
          <div className={`reveal ${inView ? 'in' : ''}`}
            style={{ border: '1px solid rgba(200,87,42,.2)', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,transparent,rgba(200,87,42,.4),transparent)' }} />
            <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.2em', color: 'rgba(255,255,255,.4)', marginBottom: '.5rem', textTransform: 'uppercase' }}>{t.initialFee}</p>
            <div style={{ marginBottom: '1.2rem' }}>
              <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '3rem', fontWeight: 500, color: 'rgba(255,255,255,.85)', lineHeight: 1 }}>{t.initialPrice}</span>
            </div>
            <div style={{ height: 1, background: 'rgba(255,255,255,.07)', marginBottom: '1.2rem' }} />
            <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.83rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.85 }}>{t.initialNote}</p>
            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(200,87,42,.07)', border: '1px solid rgba(200,87,42,.15)' }}>
              <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.72rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.7 }}>{t.planConsult}</p>
            </div>
          </div>

          {/* Monthly fee */}
          <div className={`plncard reveal ${inView ? 'in' : ''}`}
            style={{ border: '1px solid rgba(200,87,42,.4)', padding: '2.5rem', position: 'relative', overflow: 'hidden', transitionDelay: '.1s', background: 'rgba(200,87,42,.06)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#C8572A' }} />
            <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: '#C8572A', color: 'white', padding: '.2rem .8rem', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.6rem', letterSpacing: '.1em', borderRadius: '1px' }}>
              {t.langCode === 'ko' ? '모두 포함' : t.langCode === 'en' ? 'All Inclusive' : 'すべて込み'}
            </div>
            <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.2em', color: 'rgba(255,255,255,.5)', marginBottom: '.5rem', textTransform: 'uppercase' }}>{t.monthlyFee}</p>
            <div style={{ marginBottom: '.3rem' }}>
              <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '3.5rem', fontWeight: 500, color: '#E8956A', lineHeight: 1 }}>{t.monthlyPrice}</span>
            </div>
            <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.7rem', color: 'rgba(255,255,255,.4)', marginBottom: '1.5rem' }}>{t.monthlyNote}</p>
            <div style={{ height: 1, background: 'rgba(255,255,255,.07)', marginBottom: '1.5rem' }} />
            <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.15em', color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.planIncludes}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
              {t.planItems.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '.55rem' }}>
                  <Check size={11} style={{ color: '#E8956A', marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.78rem', color: 'rgba(255,255,255,.75)', lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', background: '#C8572A', color: 'white', padding: '.9rem', borderRadius: '1px', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.85rem', letterSpacing: '.1em', textDecoration: 'none', transition: 'all .2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#A84420')}
              onMouseLeave={e => (e.currentTarget.style.background = '#C8572A')}>
              {t.planCta} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhySection({ t }: { t: typeof T[keyof typeof T] }) {
  const { ref, inView } = useInView()
  return (
    <section id="why" style={{ background: '#F5EDE3', padding: '7rem 0' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: '5rem', alignItems: 'start' }} className="grid2">
          <div className={`reveal ${inView ? 'in' : ''}`} style={{ position: 'sticky', top: '6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.75rem' }}>
              <div style={{ width: '2rem', height: 1, background: '#C8572A' }} />
              <span style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.28em', color: '#C8572A', textTransform: 'uppercase' }}>{t.whyTag}</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, color: '#1a1510', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              <em style={{ fontStyle: 'italic', color: '#C8572A' }}>{t.whyTitle}</em>
            </h2>
            <div style={{ padding: '1.5rem', background: 'white', borderLeft: '3px solid #C8572A' }}>
              <p style={{ fontFamily: 'EB Garamond,serif', fontSize: '1.05rem', fontStyle: 'italic', color: '#5A4A3A', lineHeight: 1.75 }}>
                {t.langCode === 'ko' ? '"한국 기업이 일본 시장에 뿌리내릴 수 있도록, 가장 신뢰할 수 있는 파트너가 되고 싶습니다."' : t.langCode === 'en' ? '"We want to be the most trusted partner for Korean companies establishing roots in the Japanese market."' : '"韓国企業が日本市場に根を張るための、最も信頼できるパートナーでありたい。"'}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {t.whyItems.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className={`whyrow reveal ${inView ? 'in' : ''}`}
                style={{ display: 'flex', gap: '1.5rem', padding: '1.8rem 0', borderBottom: i < t.whyItems.length - 1 ? '1px solid #EAE0D6' : 'none', transitionDelay: `${i * .07}s` }}>
                <div style={{ flexShrink: 0, width: '2.4rem', height: '2.4rem', border: '1px solid rgba(200,87,42,.28)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '.1rem' }}>
                  <Icon size={13} style={{ color: '#C8572A' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.98rem', fontWeight: 500, color: '#1a1510', marginBottom: '.45rem' }}>{title}</h3>
                  <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.8rem', color: '#7A6A5A', lineHeight: 1.85 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepsSection({ t }: { t: typeof T[keyof typeof T] }) {
  const { ref, inView } = useInView()
  return (
    <section style={{ background: '#1a1510', padding: '7rem 0' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className={`reveal ${inView ? 'in' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '.75rem' }}>
            <div style={{ width: '2rem', height: 1, background: '#C8572A' }} />
            <span style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.28em', color: '#C8572A', textTransform: 'uppercase' }}>{t.stepsTag}</span>
            <div style={{ width: '2rem', height: 1, background: '#C8572A' }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2.2rem,4vw,3.4rem)', fontWeight: 400, color: 'white' }}>{t.stepsTitle}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }} className="grid4">
          {t.steps.map((s, i) => (
            <div key={i} className={`reveal ${inView ? 'in' : ''}`}
              style={{ padding: '2.5rem 2rem', borderRight: i < t.steps.length - 1 ? '1px solid rgba(200,87,42,.12)' : 'none', transitionDelay: `${i * .1}s` }}>
              <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '5.5rem', fontWeight: 300, color: 'rgba(200,87,42,.07)', lineHeight: 1, marginBottom: '-1.8rem', userSelect: 'none' }}>{s.num}</div>
              <div style={{ width: 2, height: '2rem', background: 'rgba(200,87,42,.4)', marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '1.02rem', fontWeight: 500, color: 'white', marginBottom: '.7rem' }}>{s.title}</h3>
              <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.78rem', color: 'rgba(255,255,255,.48)', lineHeight: 1.85 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VoicesSection({ t }: { t: typeof T[keyof typeof T] }) {
  const { ref, inView } = useInView()
  return (
    <section style={{ background: '#FAF6F0', padding: '7rem 0' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className={`reveal ${inView ? 'in' : ''}`}><SH tag={t.voiceTag} title={t.voiceTitle} center /></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
          {t.voices.map((v, i) => (
            <div key={i} className={`reveal ${inView ? 'in' : ''}`}
              style={{ background: '#F5EDE3', padding: '2.5rem', position: 'relative', transitionDelay: `${i * .1}s` }}>
              <div style={{ position: 'absolute', top: '1.4rem', left: '1.8rem', fontFamily: 'Cormorant Garamond,serif', fontSize: '5.5rem', color: 'rgba(200,87,42,.1)', lineHeight: 1, fontStyle: 'italic', userSelect: 'none', pointerEvents: 'none' }}>"</div>
              <div style={{ display: 'flex', gap: '.25rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, j) => <Star key={j} size={11} fill="#C8572A" style={{ color: '#C8572A' }} />)}
              </div>
              <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.87rem', color: '#5A4A3A', lineHeight: 1.95, marginBottom: '1.5rem', fontWeight: 300, position: 'relative', zIndex: 1 }}>{v.text}</p>
              <div style={{ borderTop: '1px solid #DDD0C4', paddingTop: '1rem' }}>
                <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.82rem', fontWeight: 500, color: '#1a1510' }}>{v.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection({ t }: { t: typeof T[keyof typeof T] }) {
  const { ref, inView } = useInView()
  return (
    <section id="about" style={{ background: '#F5EDE3', padding: '7rem 0' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="grid2">
          <div className={`reveal ${inView ? 'in' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.75rem' }}>
              <div style={{ width: '2rem', height: 1, background: '#C8572A' }} />
              <span style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.28em', color: '#C8572A', textTransform: 'uppercase' }}>{t.aboutTag}</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, color: '#1a1510', lineHeight: 1.15, marginBottom: '2rem', whiteSpace: 'pre-line' }}>
              {t.aboutTitle.split('\n')[0]}<br /><em style={{ fontStyle: 'italic', color: '#C8572A' }}>{t.aboutTitle.split('\n')[1]}</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontFamily: 'Noto Serif JP,serif', fontSize: '.88rem', color: '#5A4A3A', lineHeight: 2.05, fontWeight: 300 }}>
              <p>{t.aboutDesc1}</p>
              <p>{t.aboutDesc2}</p>
              <p>{t.aboutDesc3}</p>
            </div>
          </div>
          <div className={`reveal ${inView ? 'in' : ''}`} style={{ transitionDelay: '.2s', position: 'relative' }}>
            <div style={{ position: 'absolute', top: -12, left: -12, width: '100%', height: '100%', border: '1px solid rgba(200,87,42,.18)', borderRadius: '2px' }} />
            <div style={{ background: '#1a1510', padding: '3rem', position: 'relative', zIndex: 1 }}>
              <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1rem', fontStyle: 'italic', color: '#C8572A', marginBottom: '1.8rem' }}>Mission</p>
              <p style={{ fontFamily: 'EB Garamond,serif', fontSize: '1.28rem', color: 'rgba(255,255,255,.82)', lineHeight: 1.75, marginBottom: '2.5rem', fontStyle: 'italic' }}>{t.aboutName}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                {[
                  { label: t.langCode === 'ko' ? '대표이사' : t.langCode === 'en' ? 'CEO' : '代表取締役', value: '柳・森' },
                  { label: t.langCode === 'ko' ? '사업 형태' : t.langCode === 'en' ? 'Entity' : '事業形態', value: t.langCode === 'en' ? 'KK (Corp.)' : '株式会社' },
                  { label: t.langCode === 'ko' ? '거점' : t.langCode === 'en' ? 'Location' : '拠点', value: 'Tokyo' },
                ].map(({ label, value }, i) => (
                  <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: '.75rem' }}>
                    <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.6rem', color: 'rgba(255,255,255,.28)', letterSpacing: '.1em', marginBottom: '.2rem' }}>{label}</p>
                    <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.83rem', color: 'rgba(255,255,255,.72)' }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection({ t }: { t: typeof T[keyof typeof T] }) {
  const { ref, inView } = useInView()
  return (
    <section id="contact" style={{ background: '#1a1510', padding: '7rem 0' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'start' }} className="grid2">
          <div className={`reveal ${inView ? 'in' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.75rem' }}>
              <div style={{ width: '2rem', height: 1, background: '#C8572A' }} />
              <span style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.66rem', letterSpacing: '.28em', color: '#C8572A', textTransform: 'uppercase' }}>{t.contactTag}</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2.2rem,4vw,3.4rem)', fontWeight: 400, color: 'white', marginBottom: '1.5rem', lineHeight: 1.1, whiteSpace: 'pre-line' }}>{t.contactTitle}</h2>
            <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.88rem', color: 'rgba(255,255,255,.52)', lineHeight: 2, fontWeight: 300, marginBottom: '2.5rem' }}>{t.contactDesc}</p>
            {[{ icon: Mail, text: 'info@towayo.com', label: 'Email' }, { icon: MapPin, text: 'Tokyo, Japan', label: t.langCode === 'ko' ? '소재지' : t.langCode === 'en' ? 'Location' : '所在地' }].map(({ icon: Icon, text, label }, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                <div style={{ width: '2.2rem', height: '2.2rem', border: '1px solid rgba(200,87,42,.28)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={12} style={{ color: '#C8572A' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.6rem', letterSpacing: '.14em', color: 'rgba(255,255,255,.28)', marginBottom: '.2rem' }}>{label}</p>
                  <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.83rem', color: 'rgba(255,255,255,.62)' }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={`reveal ${inView ? 'in' : ''}`} style={{ transitionDelay: '.2s' }}>
            <ContactForm t={t} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactForm({ t }: { t: typeof T[keyof typeof T] }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', inquiry: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSent(true)
      else alert('送信に失敗しました。しばらく後にお試しください。')
    } catch {
      alert('送信に失敗しました。しばらく後にお試しください。')
    }
    setLoading(false)
  }

  if (sent) return (
    <div style={{ background: 'rgba(200,87,42,.07)', border: '1px solid rgba(200,87,42,.22)', padding: '4rem 2.5rem', textAlign: 'center' }}>
      <div style={{ width: '3.5rem', height: '3.5rem', border: '1px solid #C8572A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
        <Check size={20} style={{ color: '#C8572A' }} />
      </div>
      <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.5rem', color: 'white', marginBottom: '.75rem' }}>{t.formDone}</h3>
      <p style={{ fontFamily: 'Noto Serif JP,serif', fontSize: '.86rem', color: 'rgba(255,255,255,.48)', lineHeight: 1.85, whiteSpace: 'pre-line' }}>{t.formDoneMsg}</p>
    </div>
  )

  const ib = { width: '100%', padding: '.78rem 1rem', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.09)', color: 'white' as const, fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.83rem', outline: 'none', borderRadius: '1px', transition: 'border-color .2s' }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {[{ k: 'name', l: t.formName, p: t.langCode === 'ko' ? '홍길동' : t.langCode === 'en' ? 'John Smith' : '山田 太郎', r: true }, { k: 'company', l: t.formCo, p: t.langCode === 'ko' ? '○○주식회사' : t.langCode === 'en' ? 'ACME Corp.' : '○○株式会社', r: false }].map(({ k, l, p, r }) => (
          <div key={k}>
            <label style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.65rem', color: 'rgba(255,255,255,.38)', letterSpacing: '.1em', display: 'block', marginBottom: '.4rem' }}>{l}</label>
            <input required={r} style={ib} placeholder={p} value={(form as any)[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} />
          </div>
        ))}
      </div>
      <div>
        <label style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.65rem', color: 'rgba(255,255,255,.38)', letterSpacing: '.1em', display: 'block', marginBottom: '.4rem' }}>{t.formEmail}</label>
        <input required type="email" style={ib} placeholder="email@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      </div>
      <div>
        <label style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.65rem', color: 'rgba(255,255,255,.38)', letterSpacing: '.1em', display: 'block', marginBottom: '.4rem' }}>{t.formInquiry}</label>
        <select style={{ ...ib, cursor: 'pointer' }} value={form.inquiry} onChange={e => setForm({ ...form, inquiry: e.target.value })}>
          <option value="" style={{ background: '#1a1510' }}>—</option>
          {t.formInquiryOpts.map(o => <option key={o} value={o} style={{ background: '#1a1510' }}>{o}</option>)}
        </select>
      </div>
      <div>
        <label style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.65rem', color: 'rgba(255,255,255,.38)', letterSpacing: '.1em', display: 'block', marginBottom: '.4rem' }}>{t.formMsg}</label>
        <textarea required rows={4} style={{ ...ib, resize: 'none' }} placeholder={t.formMsgPh} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
      </div>
      <button type="submit" disabled={loading} style={{ padding: '.95rem', background: loading ? '#7A4A2A' : '#C8572A', color: 'white', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.86rem', letterSpacing: '.1em', borderRadius: '1px', transition: 'all .2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem' }}
        onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#A84420' }}
        onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#C8572A' }}>
        {loading ? t.formSending : <><span>{t.formSubmit}</span><ArrowRight size={14} /></>}
      </button>
      <p style={{ fontFamily: 'Noto Sans JP,sans-serif', fontSize: '.65rem', color: 'rgba(255,255,255,.22)', textAlign: 'center', lineHeight: 1.6 }}>{t.formPrivacy}</p>
    </form>
  )
}
