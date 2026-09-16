'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SpotlightCard } from './ui/spotlight-card'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export interface SpotlightProject {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  link: string
  image: string
}

const getSpotlightProjects = (language: string): SpotlightProject[] => [
  {
    id: 'kenzan-finance',
    title: 'Kenzan Finance',
    subtitle: language === 'jp' ? 'ラグジュアリーミニマルな資産ダッシュボード' : 'Luxury-Minimalist Wealth Dashboard',
    description:
      language === 'jp'
        ? 'Laravel 12、React、Framer Motionで構築された、高精度な資産追跡のためのラグジュアリーミニマルな財務ダッシュボード。'
        : 'A luxury-minimalist financial dashboard built with Laravel 12, React, and Framer Motion for high-precision wealth tracking.',
    tags: ['Laravel 12', 'React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/xvrique/kenzan-finance',
    image: '/images/project/kenzan.png',
  },
  {
    id: 'blocksage-project',
    title: 'Blocksage Project',
    subtitle: language === 'jp' ? 'リスクインテリジェンス & 教育ハブ' : 'Risk Intelligence & Education Hub',
    description:
      language === 'jp'
        ? 'ラグプル検知、インサイダー追跡、教育ポイントシステムを備えた自律型リスクインテリジェンス＆ゲーミフィケーション教育ハブ。'
        : 'Autonomous Risk Intelligence & Gamified Education Hub featuring rug-pull detection, insider tracking, and Education Points system.',
    tags: ['Solana', 'EVM', 'Rust', 'Next.js'],
    link: 'https://github.com/xvrique/blocksage-project',
    image: '/images/project/blocksage.png',
  },
  {
    id: 'kusanagi-no-tsurugi',
    title: 'Kusanagi-no-Tsurugi',
    subtitle: language === 'jp' ? '神話モチーフのSolanaランディングページ' : 'Mythology-Inspired Solana Landing',
    description:
      language === 'jp'
        ? 'ブルータリズムの構成、滑らかなマイクロインタラクション、レスポンシブなレイアウトを誇る神話モチーフのSolanaトークン紹介ページ。'
        : 'A mythology-inspired Solana token showcase featuring brutalist composition, fluid micro-interactions, and responsive layout.',
    tags: ['Solana', 'React', 'Motion', 'Tailwind'],
    link: 'https://github.com/xvrique/kusanagi-no-tsurugi',
    image: '/images/project/kusanagi-no-tsurugi.png',
  },
  {
    id: 'xenor-site',
    title: 'XENOR Platform',
    subtitle: language === 'jp' ? 'テック・ノワール Webアーキテクチャ' : 'Tech-Noir Web Architecture',
    description:
      language === 'jp'
        ? '動的なマイクロインタラクション、レスポンシブなグリッドレイアウト、ダークモード最適化を備えた高性能Webアプリケーション。'
        : 'High-performance web application architecture featuring dynamic micro-interactions, responsive grid layout, and dark mode optimization.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Motion'],
    link: 'https://github.com/XENOr-god/xenor-site',
    image: '/images/project/xenor.png',
  },
]

interface ProjectSpotlightCardProps {
  className?: string
}

export function ProjectSpotlightCard({ className = '' }: ProjectSpotlightCardProps) {
  const { t, language } = useLanguage()
  const projects = getSpotlightProjects(language)
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id)

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0]

  return (
    <SpotlightCard
      className={`group relative w-full h-full bg-white dark:bg-zinc-950/90 border border-zinc-200/50 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-none flex flex-col transition-colors duration-300 ${className}`}
    >
      {/* Subtle Kanji Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none z-0">
        <span className="text-[16rem] font-black leading-none text-zinc-900 dark:text-zinc-100">作品</span>
      </div>

      {/* Minimalist Card Header & Tabs */}
      <div className="relative z-20 pt-8 px-8 md:pt-10 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shrink-0">
        <div>
          <span className="block text-[10px] font-sans font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">
            {t('projectSpotlight')}
          </span>
          <h3 className="text-lg md:text-xl font-medium font-sans tracking-tight text-zinc-900 dark:text-zinc-100">
            {t('featuredWork')}
          </h3>
        </div>

        {/* Minimalist Text Tabs */}
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {projects.map((project) => {
            const isActive = activeProject.id === project.id
            return (
              <button
                key={project.id}
                onClick={() => setActiveProjectId(project.id)}
                className={`text-[11px] md:text-xs font-sans font-medium tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400'
                }`}
              >
                <span className="relative">
                  {project.title.split(' ')[0]}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-zinc-900 dark:bg-zinc-100"
                    />
                  )}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Content Area: Split Image & Text Display */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row w-full mt-4 gap-8 px-8 md:px-12 pb-8 md:pb-12">
        {/* Left: Text Details */}
        <div className="flex-1 flex flex-col justify-center max-w-xl z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              <div>
                <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-wider">
                  {activeProject.subtitle}
                </span>
                <h4 className="text-2xl md:text-3xl font-semibold font-sans tracking-tight text-zinc-900 dark:text-zinc-100">
                  {activeProject.title}
                </h4>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-sans max-w-md">
                {activeProject.description}
              </p>

              {/* Minimalist Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-sans text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project Action Button */}
              <div className="pt-4">
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 text-xs font-sans font-medium text-zinc-900 dark:text-zinc-100 transition-colors"
                >
                  <span className="border-b border-transparent group-hover/btn:border-zinc-900 dark:group-hover/btn:border-zinc-100 transition-colors pb-0.5">
                    {t('viewProject')}
                  </span>
                  <ArrowUpRight 
                    size={14} 
                    className="text-zinc-400 dark:text-zinc-500 group-hover/btn:text-zinc-900 dark:group-hover/btn:text-zinc-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" 
                  />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Contained Project Preview Image Frame */}
        <div className="w-full lg:w-[48%] aspect-[16/10] sm:aspect-[4/3] lg:aspect-video relative shrink-0 rounded-2xl overflow-hidden border border-zinc-200/50 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50 group-hover:shadow-md transition-all duration-300">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full p-2 md:p-4"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-200/50 dark:border-white/5 shadow-sm">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover object-left-top hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SpotlightCard>
  )
}

export default ProjectSpotlightCard
