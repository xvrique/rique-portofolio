'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'jp'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    heroTitle: "Thoriq Najmu",
    heroSubtitle: "Mobile Developer & Web3 Explorer",
    heroDescription: "Building seamless mobile experiences with Flutter and exploring the future of decentralized protocols.",
    viewProjects: "View Projects",
    letsConnect: "Let's Connect",
    aboutTitle: "About",
    aboutSubtitle: "Identity",
    aboutDescription: "Software Engineer dedicated to architecting seamless digital experiences through innovative mobile and web development. Specialized expertise in the Flutter ecosystem and Modern Web Stacks.",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    techArsenal: "Tech Arsenal",
    capabilities: "Capabilities.",
    experience: "Research & Deployment",
    kodawari: "KODAWARI — SIMPLE ATTENTION TO DETAIL",
    caseStudy: "Case Study / Reporting",
    theArchitect: "The Architect V.2.0",
    openSourceRepos: "Open Source Repositories / Live Trace",
    statusAvailable: "Status: Available",
    protocol04: "Protocol 04",
    hireMe: "Hire Me",
    reportingEcosystem: "Reporting Ecosystem",
    interactDeeply: "Interact Deeply",
    letsDeployIdeas: "Let's\nDeploy\nIdeas.",
    initiateTransmission: "Initiate Transmission",
    agentIdentity: "Agent Identity",
    commsUplink: "Comms Uplink",
    transmissionData: "Transmission Data",
    directCommsChannel: "Direct Comms Channel",
    nodeLocation: "Node Location",
    localTime: "Local Time",
    precisionSoul: "Engineering digital experiences with precision & soul.",
    philTitle: "Philosophy",
    philSubtitle: "Principles & Core Value",
    philDescription: "Driven by the concept of Kodawari, an uncompromising pursuit of perfection. I believe software is a craft, where invisible details define the soul of the product.",
    stackEcosystem: "Stack & Ecosystem",
    coreTechnologies: "Core Technologies",
    techCount: "Technologies",
    architecturalFocus: "Architectural Focus",
    engineeringDomains: "Engineering Domains",
    disciplinesCount: "Core Disciplines",
    focusArea: "Focus Area",
    projectSpotlight: "Project Spotlight",
    featuredWork: "Featured Work",
    viewProject: "View Project",
    yearsExp: "Years Exp",
    projects: "Projects",
    based: "Based",
    openSource: "Open Source",
    featuredRepos: "Featured Repositories",
    reposCount: "Repositories",
    viewSource: "View Source",
    performanceAudit: "Performance Audit",
    lighthouseVerification: "Lighthouse Verification",
    score100: "100% Score",
    availableStatus: "Available",
    openForChallenges: "Open for New Challenges",
    directEmail: "Direct Email",
    locationTime: "Location & Time",
    baseLocation: "Base",
    bandungIndonesia: "Bandung, Indonesia",
    utc7: "Western Indonesia Time (UTC+7)",
    localTimeLabel: "Local Time",
    remoteCollab: "Remote / Worldwide Collaboration",
    journeyMilestones: "Journey & Milestones",
    engineeringTimeline: "Engineering Timeline",
    languageLabel: "Language",
    builtBy: "Built by",
    allRightsReserved: "All Rights Reserved."
  },
  jp: {
    heroTitle: "Thoriq Najmu",
    heroSubtitle: "モバイル開発者 & Web3 探求者",
    heroDescription: "Flutterを使用してシームレスなモバイル体験を構築し、分散型プロトコルの未来を探求しています。",
    viewProjects: "プロジェクトを見る",
    letsConnect: "つながりましょう",
    aboutTitle: "自己紹介",
    aboutSubtitle: "アイデンティティ",
    aboutDescription: "革新的なモバイルおよびWeb開発を通じて、シームレスなデジタル体験の構築に専念するソフトウェアエンジニア。Flutterエコシステムと最新のWebスタックに特化した専門知識を持っています。",
    projectsTitle: "プロジェクト",
    contactTitle: "お問い合わせ",
    techArsenal: "技術スタック",
    capabilities: "能力.",
    experience: "研究と展開",
    kodawari: "徹底的なこだわり — KODAWARI",
    caseStudy: "ケーススタディ / 報告",
    theArchitect: "ザ・アーキテクト V.2.0",
    openSourceRepos: "オープンソースリポジトリ / ライブトレース",
    statusAvailable: "ステータス: 利用可能",
    protocol04: "プロトコル 04",
    hireMe: "採用する",
    reportingEcosystem: "報告エコシステム",
    interactDeeply: "深く対話する",
    letsDeployIdeas: "アイデアを\nデプロイ\nしましょう。",
    initiateTransmission: "送信を開始する",
    agentIdentity: "エージェント ID",
    commsUplink: "通信アップリンク",
    transmissionData: "送信データ",
    directCommsChannel: "直接通信チャネル",
    nodeLocation: "ノードの場所",
    localTime: "現地時間",
    precisionSoul: "精密さと魂を込めたデジタル体験の施工。",
    philTitle: "哲学.",
    philSubtitle: "原則と核心的価値",
    philDescription: "妥協のない完璧さを追求する「こだわり」の概念に基づいています。ソフトウェアは工芸品であり、目に見えない細部がプロダクトの魂を定義すると信じています。",
    stackEcosystem: "スタック & エコシステム",
    coreTechnologies: "コア技術",
    techCount: "技術",
    architecturalFocus: "アーキテクチャの焦点",
    engineeringDomains: "エンジニアリング領域",
    disciplinesCount: "中核分野",
    focusArea: "重点領域",
    projectSpotlight: "プロジェクトスポットライト",
    featuredWork: "注目プロジェクト",
    viewProject: "プロジェクトを見る",
    yearsExp: "経験年数",
    projects: "プロジェクト",
    based: "拠点",
    openSource: "オープンソース",
    featuredRepos: "注目のリポジトリ",
    reposCount: "リポジトリ",
    viewSource: "ソースコードを見る",
    performanceAudit: "パフォーマンス監査",
    lighthouseVerification: "Lighthouse検証",
    score100: "スコア 100%",
    availableStatus: "利用可能",
    openForChallenges: "新しいチャレンジを歓迎",
    directEmail: "直接メール",
    locationTime: "所在地・時間",
    baseLocation: "拠点",
    bandungIndonesia: "インドネシア、バンドン",
    utc7: "インドネシア西部標準時 (UTC+7)",
    localTimeLabel: "現地時間",
    remoteCollab: "リモート / 世界中とのコラボレーション",
    journeyMilestones: "経歴と実績",
    engineeringTimeline: "エンジニアリングの軌跡",
    languageLabel: "言語",
    builtBy: "制作:",
    allRightsReserved: "無断転載を禁じます。"
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string) => {
    const dict = translations[language] as Record<string, string>
    return dict[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
