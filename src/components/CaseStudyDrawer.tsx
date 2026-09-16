'use client'

import React, { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, AlertCircle, Rocket, Layers } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export interface CaseStudyData {
  id: string
  title: string
  subtitle?: string
  category?: string
  date?: string
  problem: {
    headline: string
    description: string
  }
  action: {
    headline: string
    description: string
    techStack: string[]
    keyHighlights?: string[]
  }
  result: {
    headline: string
    description: string
    metrics?: { label: string; value: string }[]
  }
}

export interface CaseStudyDrawerProps {
  isOpen: boolean
  onClose: () => void
  data?: CaseStudyData | null
}

const getDefaultSampleData = (language: string): CaseStudyData => ({
  id: 'pondasi-case-study',
  title: 'PONDASI FOUNDATION',
  subtitle: language === 'jp'
    ? '幼児発育報告エコシステム'
    : 'Early Childhood Development Reporting Ecosystem',
  category: language === 'jp'
    ? 'モバイルアーキテクチャ & クラウドエンジン'
    : 'MOBILE ARCHITECTURE & CLOUD ENGINE',
  date: '2025 - 2026',
  problem: {
    headline: language === 'jp'
      ? '分断された手動報告と高いレイテンシ'
      : 'Fragmented Manual Reporting & High Latency',
    description:
      language === 'jp'
        ? '手動の紙ベースの評価によるワークフローの深刻なボトルネックに直面し、子供の発育追跡や遠隔ノード間での正確なデータ同期に遅れが生じていました。'
        : 'Educational evaluators faced severe workflow bottlenecks due to manual paper assessments, leading to delayed interventions for child development tracking and inaccurate data synchronization across remote nodes.',
  },
  action: {
    headline: language === 'jp'
      ? 'クロスプラットフォームエンジン & オフラインファースト同期'
      : 'Cross-Platform Engine & Offline-First Sync',
    description:
      language === 'jp'
        ? 'Firebase Cloud Firestoreを搭載した高性能Flutterモバイルアプリを開発。ローカルキャッシュと楽観的UI更新を備えたオフラインファースト状態アーキテクチャを実装。'
        : 'Engineered a high-performance Flutter mobile application powered by Firebase Cloud Firestore. Implemented an offline-first state architecture with local caching and optimistic UI updates to handle remote network drops seamlessly.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'Android SDK', 'Tailwind CSS'],
    keyHighlights: language === 'jp' ? [
      'Firestoreオフライン永続化によるリアルタイム双方向同期の構築',
      '自動PDF出力トリガーを備えた高密度カスタム報告ダッシュボードの設計',
      'モジュール式クリーンアーキテクチャ（データ、ドメイン、プレゼンテーション層）の分離徹底',
    ] : [
      'Architected real-time bi-directional synchronization with Firestore offline persistence',
      'Designed high-density custom reporting dashboards with automated PDF export triggers',
      'Enforced modular clean architecture separation (Data, Domain, Presentation layers)',
    ],
  },
  result: {
    headline: language === 'jp'
      ? '報告速度94%向上 & データ損失ゼロ'
      : '94% Faster Reporting & Zero Data Loss',
    description:
      language === 'jp'
        ? '複数の地域評価チームに正常にデプロイされ、評価レポート作成時間を数日から数分に短縮しつつ、オフライン調査中のデータ損失を解消。'
        : 'Successfully deployed across multiple regional evaluation teams, reducing evaluation report generation time from days to minutes while eliminating data loss during offline remote field trips.',
    metrics: [
      { label: language === 'jp' ? 'レポート同期速度' : 'REPORT SYNC SPEED', value: '+94%' },
      { label: language === 'jp' ? 'データ保持率' : 'DATA RETENTION', value: '100%' },
      { label: language === 'jp' ? '評価者レビュー' : 'EVALUATOR REVIEWS', value: '4.9/5' },
    ],
  },
})

export function CaseStudyDrawer({
  isOpen,
  onClose,
  data,
}: CaseStudyDrawerProps) {
  const { language } = useLanguage()
  const content = data || getDefaultSampleData(language)

  // Lock body scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle ESC key press to close drawer
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Dark Blurred Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="relative z-10 w-full md:w-[50vw] lg:w-[42vw] max-w-3xl h-full bg-zinc-950 text-zinc-100 border-l border-white/10 shadow-2xl flex flex-col overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 bg-zinc-950/90 backdrop-blur-xl border-b border-white/10 shrink-0">
              <div className="space-y-1">
                <span className="text-[9px] font-mono font-black uppercase tracking-[0.3em] text-sky-400">
                  {content.category || (language === 'jp' ? 'ケーススタディ プロトコル' : 'CASE STUDY PROTOCOL')}
                </span>
                <h2
                  id="case-study-title"
                  className="text-lg md:text-xl font-bold font-sans tracking-tight text-white line-clamp-1 uppercase"
                >
                  {content.title}
                </h2>
              </div>

              {/* Prominent Close 'X' Button */}
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                aria-label="Close drawer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content Area - PAR (Problem - Action - Result) Layout */}
            <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8 space-y-12 custom-scrollbar">
              {/* Project Subtitle / Intro Banner */}
              {content.subtitle && (
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                    {language === 'jp' ? 'ミッションパラメータ' : 'MISSION PARAMETERS'}
                  </span>
                  <p className="text-sm font-medium text-zinc-300">
                    {content.subtitle}
                  </p>
                </div>
              )}

              {/* SECTION 1: PROBLEM */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 text-red-400 font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
                  <AlertCircle size={14} />
                  <span>{language === 'jp' ? '01 // 課題 (THE PROBLEM)' : '01 // THE PROBLEM'}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                  {content.problem.headline}
                </h3>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                  {content.problem.description}
                </p>
              </section>

              <div className="h-px bg-white/10 w-full" />

              {/* SECTION 2: ACTION */}
              <section className="space-y-6">
                <div className="flex items-center gap-3 text-sky-400 font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
                  <Layers size={14} />
                  <span>{language === 'jp' ? '02 // 施策とアーキテクチャ' : '02 // THE ACTION & ARCHITECTURE'}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                  {content.action.headline}
                </h3>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                  {content.action.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="space-y-2">
                  <span className="block text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                    {language === 'jp' ? '技術スタック' : 'TECHNOLOGY STACK'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {content.action.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-zinc-900 text-zinc-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables / Highlights */}
                {content.action.keyHighlights && content.action.keyHighlights.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <span className="block text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                      {language === 'jp' ? 'システムハイライト' : 'SYSTEM HIGHLIGHTS'}
                    </span>
                    <ul className="space-y-2.5">
                      {content.action.keyHighlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-xs md:text-sm text-zinc-300 leading-relaxed"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-sky-400 shrink-0 mt-0.5"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              <div className="h-px bg-white/10 w-full" />

              {/* SECTION 3: RESULT */}
              <section className="space-y-6 pb-8">
                <div className="flex items-center gap-3 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
                  <Rocket size={14} />
                  <span>{language === 'jp' ? '03 // 成果とインパクト' : '03 // THE RESULT & IMPACT'}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                  {content.result.headline}
                </h3>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                  {content.result.description}
                </p>

                {/* Metrics Cards */}
                {content.result.metrics && content.result.metrics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {content.result.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col gap-1 items-start"
                      >
                        <span className="text-[9px] font-mono font-black text-zinc-500 uppercase tracking-widest">
                          {metric.label}
                        </span>
                        <span className="text-2xl font-bold font-mono text-emerald-400 tracking-tight">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CaseStudyDrawer
