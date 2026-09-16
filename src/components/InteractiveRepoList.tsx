'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Star, FolderGit2 } from 'lucide-react'
import { SpotlightCard } from './ui/spotlight-card'
import type { GithubRepo } from '@/lib/github'
import { useLanguage } from '@/context/LanguageContext'

interface InteractiveRepoListProps {
  repositories?: GithubRepo[]
}

interface DisplayRepo {
  id: string | number
  name: string
  fullName: string
  description: string
  url: string
  stars: number
  forks: number
  language: string
  tags: string[]
}

const getFeaturedRepos = (language: string): DisplayRepo[] => [
  {
    id: 'blocksage',
    name: 'blocksage-project',
    fullName: 'xvrique / blocksage-project',
    description:
      language === 'jp'
        ? 'ラグプル検知、インサイダー追跡、教育ポイントシステムを備えたSolana/EVM向けの自律型リスクインテリジェンス＆ゲーミフィケーション教育ハブ。'
        : 'Autonomous Risk Intelligence & Gamified Education Hub for Solana/EVM featuring rug-pull detection, insider tracking, and Education Points system.',
    url: 'https://github.com/xvrique/blocksage-project',
    stars: 12,
    forks: 3,
    language: 'Rust',
    tags: ['Solana', 'EVM', 'Rust', 'Next.js'],
  },
  {
    id: 'xenor',
    name: 'xenor-site',
    fullName: 'xvrique / xenor-site',
    description:
      language === 'jp'
        ? 'ダイナミックなBentoグリッド、滑らかなFramer Motionマイクロインタラクション、ダークモード最適化を備えた高性能テクニカルポートフォリオ。'
        : 'High-performance technical portfolio showcase with dynamic Bento grid, fluid framer-motion micro-interactions, and dark mode optimization.',
    url: 'https://github.com/XENOr-god/xenor-site',
    stars: 8,
    forks: 2,
    language: 'TypeScript',
    tags: ['Next.js', 'React', 'Framer Motion', 'Tailwind'],
  },
  {
    id: 'kenzan',
    name: 'kenzan-finance',
    fullName: 'xvrique / kenzan-finance',
    description:
      language === 'jp'
        ? '高精度な分散型ポートフォリオ管理のために設計された、ラグジュアリーミニマルな財務ダッシュボードと収益追跡インターフェース。'
        : 'A luxury-minimalist financial dashboard and yield tracking interface designed for high-precision decentralized portfolio management.',
    url: 'https://github.com/xvrique/kenzan-finance',
    stars: 15,
    forks: 4,
    language: 'Rust',
    tags: ['Solana', 'Anchor', 'Rust', 'Web3.js'],
  },
  {
    id: 'kusanagi',
    name: 'kusanagi-no-tsurugi',
    fullName: 'xvrique / kusanagi-no-tsurugi',
    description:
      language === 'jp'
        ? 'ブルータリズムデザイン、滑らかなマイクロアニメーション、クリーンなレスポンシブレイアウトを特徴とする神話モチーフのSolanaランディングページ。'
        : 'Mythology-inspired Solana landing page featuring bespoke brutalist design, fluid micro-animations, and clean responsive layout.',
    url: 'https://github.com/xvrique/kusanagi-no-tsurugi',
    stars: 6,
    forks: 1,
    language: 'TypeScript',
    tags: ['Solana', 'Tailwind', 'Motion', 'TypeScript'],
  },
]

export function InteractiveRepoList({ repositories }: InteractiveRepoListProps) {
  const { t, language } = useLanguage()
  const featured = getFeaturedRepos(language)

  const displayRepos: DisplayRepo[] =
    repositories && repositories.length > 0
      ? repositories.map((repo) => {
          const matchFeatured = featured.find((f) =>
            repo.name.toLowerCase().includes(f.name.toLowerCase())
          )

          return {
            id: repo.id,
            name: repo.name,
            fullName: repo.name.includes('/')
              ? repo.name
              : `xvrique / ${repo.name}`,
            description:
              matchFeatured?.description || repo.description || (language === 'jp' ? 'オープンソースソフトウェアおよびシステム。' : 'Open source software and systems.'),
            url: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language || 'TypeScript',
            tags:
              repo.topics && repo.topics.length > 0
                ? repo.topics
                : matchFeatured?.tags || [repo.language || 'Code'],
          }
        })
      : featured

  const [hoveredId, setHoveredId] = useState<string | number | null>(displayRepos[0]?.id ?? null)

  return (
    <SpotlightCard id="projects" className="w-full h-full bg-white dark:bg-zinc-950/90 border border-zinc-200/50 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm dark:shadow-none space-y-6 transition-colors duration-300 overflow-hidden relative scroll-mt-32">
      {/* Subtle Kanji Watermark */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none z-0">
        <span className="text-[14rem] font-black leading-none text-zinc-900 dark:text-zinc-100">開源</span>
      </div>

      {/* Minimalist Header */}
      <div className="relative z-10 flex items-center justify-between pb-6 border-b border-zinc-100 dark:border-white/5">
        <div className="flex items-center gap-3">
          <div className="text-zinc-400 dark:text-zinc-500">
            <FolderGit2 size={14} />
          </div>
          <div>
            <span className="block text-[10px] font-sans font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">
              {t('openSource')}
            </span>
            <h3 className="text-base md:text-lg font-medium font-sans tracking-tight text-zinc-900 dark:text-zinc-100">
              {t('featuredRepos')}
            </h3>
          </div>
        </div>

        <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium">
          {displayRepos.length} {t('reposCount')}
        </span>
      </div>

      {/* Accordion List (Ultra Minimalist) */}
      <div className="flex flex-col w-full">
        {displayRepos.map((repo, idx) => {
          const isExpanded = hoveredId === repo.id

          return (
            <motion.div
              key={repo.id}
              layout
              onMouseEnter={() => setHoveredId(repo.id)}
              onClick={() => setHoveredId(repo.id)}
              className={`border-b border-zinc-100 dark:border-white/5 last:border-b-0 transition-colors duration-200 ${
                isExpanded ? '' : 'hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20'
              }`}
            >
              {/* Row Header */}
              <div className="py-4 min-h-[52px] flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-4 min-w-0">
                  <span className="font-mono text-xs font-medium text-zinc-400 dark:text-zinc-600 transition-colors w-6">
                    0{idx + 1}
                  </span>
                  <span className="font-sans text-sm md:text-base font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors truncate">
                    {repo.name}
                  </span>
                  <span className="hidden md:inline font-mono text-xs text-zinc-400 dark:text-zinc-500">
                    ({repo.fullName})
                  </span>
                </div>

                <div className="flex items-center gap-4 shrink-0 ml-4">
                  {/* Star count */}
                  <span className="hidden sm:flex items-center gap-1 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                    <Star size={12} />
                    {repo.stars}
                  </span>

                  {/* Minimal Icon Indicator */}
                  <div
                    className={`transition-all duration-200 ${
                      isExpanded
                        ? 'text-zinc-900 dark:text-zinc-100 rotate-45'
                        : 'text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100'
                    }`}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Collapsible Expanded Body */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pt-1 space-y-4">
                      <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed max-w-3xl font-normal font-sans ml-10">
                        {repo.description}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 ml-10">
                        <div className="flex flex-wrap gap-1.5">
                          {repo.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-sans text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900/50 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <motion.a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 text-xs font-sans font-medium text-zinc-900 dark:text-zinc-100 transition-colors"
                        >
                          <span className="border-b border-transparent group-hover/btn:border-zinc-900 dark:group-hover/btn:border-zinc-100 transition-colors pb-0.5">
                            {t('viewSource')}
                          </span>
                          <ArrowUpRight size={14} className="text-zinc-400 dark:text-zinc-500 group-hover/btn:text-zinc-900 dark:group-hover/btn:text-zinc-100 group-hover/btn:translate-x-0.5 transition-all" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </SpotlightCard>
  )
}

export default InteractiveRepoList
