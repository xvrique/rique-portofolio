'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function PhilosophyCard() {
  const { t, language } = useLanguage()
  return (
    <div className="w-full h-full relative group flex flex-col justify-center py-6 md:py-0 overflow-hidden">
      {/* Subtle Kanji Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none z-0">
        <span className="text-[16rem] font-black leading-none text-zinc-900 dark:text-zinc-100">精神</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 font-medium text-[10px] font-sans uppercase tracking-widest relative z-10 mb-8">
        <Zap size={14} />
        <AnimatePresence mode="wait">
          <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {t('philSubtitle')}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start relative z-10">
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.h2
              key={language}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sans text-zinc-900 dark:text-zinc-100 tracking-tighter leading-tight"
            >
              {t('philTitle')}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="relative pt-2">
          <div className="hidden md:block absolute -left-8 top-0 bottom-0 w-px bg-zinc-100 dark:bg-white/5" />

          <AnimatePresence mode="wait">
            <motion.p
              key={language}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-sans max-w-md"
            >
              {t('philDescription')}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
