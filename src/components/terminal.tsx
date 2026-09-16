'use client'

import React from 'react'
import { Milestone, Sparkles, GraduationCap, Briefcase, Code } from 'lucide-react'
import { SpotlightCard } from './ui/spotlight-card'
import { useLanguage } from '@/context/LanguageContext'
import { clsx } from 'clsx'
import { getTimelineEntries } from '@/data/timeline'
import type { TimelineEntry } from '@/types'

export function TerminalCard({ className = '' }: { className?: string }) {
  const { language } = useLanguage()
  const timelineEntries = getTimelineEntries(language)

  const renderIcon = (type: TimelineEntry['iconType']) => {
    switch (type) {
      case 'research':
        return <Sparkles size={11} className="text-zinc-400 dark:text-zinc-500" />
      case 'work':
        return <Briefcase size={11} className="text-zinc-400 dark:text-zinc-500" />
      case 'education':
        return <GraduationCap size={11} className="text-zinc-400 dark:text-zinc-500" />
      case 'code':
        return <Code size={11} className="text-zinc-400 dark:text-zinc-500" />
      default:
        return <Milestone size={11} className="text-zinc-400 dark:text-zinc-500" />
    }
  }

  return (
    <SpotlightCard
      className={clsx(
        'group h-[450px] md:h-full w-full',
        'bg-white dark:bg-zinc-950/90 rounded-3xl',
        'border border-zinc-200/50 dark:border-white/5',
        'shadow-sm dark:shadow-none overflow-hidden transition-colors duration-300',
        className
      )}
    >
      <div className="relative flex flex-col h-full w-full">
        {/* Subtle Kanji Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none z-0">
        <span className="text-[14rem] font-black leading-none text-zinc-900 dark:text-zinc-100">経験</span>
      </div>

      {/* Scrollable Container with Masking */}
      <div 
        className="relative z-10 flex-1 overflow-y-auto flex flex-col pr-4 pl-6 md:pl-10 pb-6 md:pb-10 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-200 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:hover:[&::-webkit-scrollbar-thumb]:bg-zinc-700"
        onPointerDownCapture={(e) => e.stopPropagation()}
        onTouchStartCapture={(e) => e.stopPropagation()}
        onWheelCapture={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm pt-6 md:pt-10 pb-4 mb-6 border-b border-zinc-100 dark:border-white/5 shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <span className="block text-[10px] font-sans font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">
                {language === 'jp' ? '経歴と実績' : 'Journey & Milestones'}
              </span>
              <h3 className="text-lg md:text-xl font-medium font-sans tracking-tight text-zinc-900 dark:text-zinc-100">
                {language === 'jp' ? 'エンジニアリングの軌跡' : 'Engineering Timeline'}
              </h3>
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="space-y-8 mt-2">
            {timelineEntries.map((item) => {
              const isActive = item.status === 'active'

              return (
                <div
                  key={item.id}
                  className="relative pl-8 before:absolute before:left-[3.5px] before:top-2 before:bottom-[-2rem] before:w-[1px] before:bg-zinc-100 dark:before:bg-zinc-800 last:before:hidden group/item"
                >
                  {/* Minimal Timeline Dot */}
                  <div className="absolute left-0 top-1.5 flex items-center justify-center w-2 h-2">
                    {isActive ? (
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-zinc-950" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-zinc-950" />
                    )}
                  </div>

                  {/* Card Content Item */}
                  <div className="flex flex-col space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {renderIcon(item.iconType)}
                        <h4 className="text-sm font-medium font-sans text-zinc-900 dark:text-zinc-100">
                          {item.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 shrink-0 uppercase tracking-wider">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-[11px] font-sans text-zinc-500 dark:text-zinc-400">
                      {item.organization}
                    </div>

                    <p className="text-[11px] font-sans text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm mt-1">
                      {item.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded-md text-[9px] font-sans text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </SpotlightCard>
  )
}

export { TerminalCard as ExperienceTimelineCard }
export default TerminalCard
