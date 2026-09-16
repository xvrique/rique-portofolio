'use client'

import React, { useState, useEffect } from 'react'
import { ShieldCheck, Gauge } from 'lucide-react'
import { SpotlightCard } from './ui/spotlight-card'
import { useLanguage } from '@/context/LanguageContext'

export interface MetricItem {
  id: string
  label: string
  score: number
  description?: string
}

const getMetrics = (language: string): MetricItem[] => [
  { id: 'perf', label: language === 'jp' ? 'パフォーマンス' : 'Performance', score: 98, description: 'Core Web Vitals' },
  { id: 'a11y', label: language === 'jp' ? 'アクセシビリティ' : 'Accessibility', score: 100, description: 'WCAG AAA' },
  { id: 'bp', label: language === 'jp' ? 'ベストプラクティス' : 'Best Practices', score: 100, description: language === 'jp' ? '最新標準' : 'Modern Standards' },
  { id: 'seo', label: language === 'jp' ? 'SEO' : 'SEO', score: 100, description: language === 'jp' ? '検索インデックス登録済' : 'Search Indexed' },
]

interface LighthouseMetricsCardProps {
  metrics?: MetricItem[]
  title?: string
  className?: string
}

export function LighthouseMetricsCard({
  metrics,
  title,
  className = '',
}: LighthouseMetricsCardProps) {
  const { t, language } = useLanguage()
  const displayMetrics = metrics || getMetrics(language)
  const displayTitle = title || t('lighthouseVerification')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // SVG Circle Constants
  const radius = 34
  const strokeWidth = 3
  const center = 42
  const circumference = 2 * Math.PI * radius // ≈ 213.628

  return (
    <SpotlightCard
      role="region"
      aria-label="Google Lighthouse Audit Metrics"
      className={`relative w-full h-full bg-white dark:bg-zinc-950/90 border border-zinc-200/50 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm dark:shadow-none overflow-hidden flex flex-col justify-between transition-colors duration-300 ${className}`}
    >
      {/* Subtle Kanji Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none z-0">
        <span className="text-[12rem] font-black leading-none text-zinc-900 dark:text-zinc-100">性能</span>
      </div>

      {/* Minimalist Card Header */}
      <div className="relative z-10 flex items-center justify-between pb-6 border-b border-zinc-100 dark:border-white/5 shrink-0">
        <div className="flex items-center gap-3">
          <div className="text-zinc-400 dark:text-zinc-500">
            <Gauge size={14} />
          </div>
          <div>
            <span className="block text-[10px] font-sans font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">
              {t('performanceAudit')}
            </span>
            <h3 className="text-base md:text-lg font-medium font-sans tracking-tight text-zinc-900 dark:text-zinc-100">
              {displayTitle}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-500 text-[10px] font-sans font-medium uppercase tracking-widest">
          <ShieldCheck size={14} />
          <span className="hidden sm:inline">{t('score100')}</span>
        </div>
      </div>

      {/* Metrics Grid: 2x2 Layout */}
      <div className="relative z-10 grid grid-cols-2 gap-y-8 gap-x-4 md:gap-x-6 items-center justify-items-center mt-8">
        {displayMetrics.map((metric) => {
          const targetOffset = circumference - (metric.score / 100) * circumference
          const currentOffset = mounted ? targetOffset : circumference

          return (
            <div
              key={metric.id}
              className="flex flex-col items-center text-center space-y-3 group/metric w-full"
              role="img"
              aria-label={`${metric.label}: ${metric.score} out of 100`}
            >
              {/* Circular Progress Ring */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 84 84"
                >
                  {/* Background Track Circle */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    className="stroke-zinc-100 dark:stroke-zinc-900/50"
                    strokeWidth={strokeWidth}
                    fill="none"
                  />
                  {/* Animated Progress Circle */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    className="stroke-emerald-500 dark:stroke-emerald-400 transition-all duration-1000 ease-out"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={currentOffset}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                {/* Score Number in Center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-medium font-sans text-zinc-900 dark:text-zinc-100 tracking-tighter">
                    {metric.score}
                  </span>
                </div>
              </div>

              {/* Metric Label */}
              <div className="space-y-1">
                <span className="block text-[10px] font-sans text-zinc-800 dark:text-zinc-200 tracking-wider uppercase font-medium">
                  {metric.label}
                </span>
                {metric.description && (
                  <span className="block text-[10px] font-sans text-zinc-500 dark:text-zinc-500">
                    {metric.description}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </SpotlightCard>
  )
}

export default LighthouseMetricsCard
