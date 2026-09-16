'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, Layers } from 'lucide-react'
import { SpotlightCard } from './ui/spotlight-card'
import { useLanguage } from '@/context/LanguageContext'

export interface DomainItem {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
}

const getDomains = (language: string): DomainItem[] => [
  {
    id: 'mobile',
    title: language === 'jp' ? 'モバイルエンジニアリング' : 'Mobile Engineering',
    subtitle: language === 'jp' ? 'クロスプラットフォームアーキテクチャ' : 'Cross-Platform Architecture',
    description:
      language === 'jp'
        ? '複雑な状態管理、レスポンシブなマイクロインタラクション、オフラインファーストの永続化を備えた、シームレスなクロスプラットフォームアプリの構築。'
        : 'Building fluid, cross-platform applications with complex state management, responsive micro-interactions, and offline-first persistence.',
    tags: ['Flutter', 'Dart', 'Android SDK', 'iOS', 'State Management'],
  },
  {
    id: 'web3',
    title: language === 'jp' ? 'Web3 & 決定論的システム' : 'Web3 & Deterministic Systems',
    subtitle: language === 'jp' ? 'プロトコル実行 & DeFi' : 'Protocol Execution & DeFi',
    description:
      language === 'jp'
        ? 'プロトコル実行メカニズム、オンチェーン状態クエリの研究、SolanaおよびEVM向けのゲーミフィケーション対応インテリジェンスハブの設計。'
        : 'Researching protocol execution mechanics, on-chain state queries, and designing gamified intelligence hubs for Solana and EVM.',
    tags: ['Solana', 'Rust', 'Web3.js', 'EVM', 'Anchor'],
  },
  {
    id: 'ml',
    title: language === 'jp' ? '応用機械学習' : 'Applied Machine Learning',
    subtitle: language === 'jp' ? 'オンチェーン異常検知 & XAI' : 'On-Chain Anomaly & XAI',
    description:
      language === 'jp'
        ? '勾配ブースティングツリーと説明可能AI（SHAP）を使用して、オンチェーンの取引異常や流動性枯渇動作をモデリング。'
        : 'Modeling on-chain transactional anomalies and liquidity drain behaviors using gradient boosted trees and Explainable AI (SHAP).',
    tags: ['XGBoost', 'SHAP', 'Python', 'Feature Engineering'],
  },
]

interface EngineeringDomainsProps {
  className?: string
}

export function EngineeringDomains({ className = '' }: EngineeringDomainsProps) {
  const { t, language } = useLanguage()
  const domainList = getDomains(language)
  const [activeDomainId, setActiveDomainId] = useState<string>(domainList[0].id)

  const activeDomain = domainList.find((d) => d.id === activeDomainId) || domainList[0]

  return (
    <SpotlightCard
      className={`group relative w-full h-full bg-white dark:bg-zinc-950/90 border border-zinc-200/50 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm dark:shadow-none overflow-hidden flex flex-col transition-colors duration-300 ${className}`}
    >
      {/* Subtle Kanji Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none z-0">
        <span className="text-[14rem] font-black leading-none text-zinc-900 dark:text-zinc-100">領域</span>
      </div>

      {/* Minimalist Card Header */}
      <div className="relative z-10 flex items-center justify-between pb-6 border-b border-zinc-100 dark:border-white/5 shrink-0">
        <div className="flex items-center gap-3">
          <div className="text-zinc-400 dark:text-zinc-500">
            <Compass size={14} />
          </div>
          <div>
            <span className="block text-[10px] font-sans font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">
              {t('architecturalFocus')}
            </span>
            <h3 className="text-lg md:text-xl font-medium font-sans tracking-tight text-zinc-900 dark:text-zinc-100">
              {t('engineeringDomains')}
            </h3>
          </div>
        </div>
        <span className="hidden sm:block text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium">
          3 {t('disciplinesCount')}
        </span>
      </div>

      {/* Two-Column Interactive Layout */}
      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 mt-6 flex-1">
        
        {/* Left Column: Domain Navigation */}
        <div className="w-full md:w-1/2 space-y-1 relative flex flex-col justify-center">
          {domainList.map((domain) => {
            const isActive = activeDomain.id === domain.id

            return (
              <div
                key={domain.id}
                onMouseEnter={() => setActiveDomainId(domain.id)}
                onClick={() => setActiveDomainId(domain.id)}
                className="relative cursor-pointer px-4 py-4 flex flex-col justify-center rounded-xl group/item"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDomainBg"
                    className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900/40 rounded-xl"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <div className="relative z-10">
                  <span className={`block text-[10px] font-mono uppercase tracking-wider mb-1.5 transition-colors ${
                    isActive ? 'text-zinc-500 dark:text-zinc-400' : 'text-zinc-400 dark:text-zinc-600 group-hover/item:text-zinc-500 dark:group-hover/item:text-zinc-500'
                  }`}>
                    {domain.subtitle}
                  </span>
                  <h4 className={`text-base font-medium font-sans tracking-tight transition-colors ${
                    isActive ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-400 dark:text-zinc-600 group-hover/item:text-zinc-600 dark:group-hover/item:text-zinc-300'
                  }`}>
                    {domain.title}
                  </h4>
                </div>
              </div>
            )
          })}
        </div>

        {/* Center Vertical Divider (Desktop Only) */}
        <div className="hidden md:block w-px bg-zinc-100 dark:bg-zinc-800/50 my-4" />

        {/* Right Column: Dynamic Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 font-sans text-[10px] uppercase tracking-widest font-medium">
                <Layers size={12} />
                <span>{t('focusArea')}</span>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-sans max-w-sm">
                {activeDomain.description}
              </p>

              {/* Minimalist Skill Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {activeDomain.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-sans text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SpotlightCard>
  )
}

export default EngineeringDomains
