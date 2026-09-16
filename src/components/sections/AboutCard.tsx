'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { SpotlightCard } from '@/components/ui/spotlight-card'

export function AboutCard() {
  const { t, language } = useLanguage()

  return (
    <SpotlightCard
      id="about"
      className="p-0 overflow-hidden scroll-mt-32 h-full md:min-h-[480px]"
    >
      <div className="flex flex-col md:flex-row h-full w-full">
        {/* Subtle Kanji Watermark */}
        <div className="absolute top-0 right-1/4 pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none z-0">
          <span className="text-[12rem] font-black text-zinc-900 dark:text-zinc-100">紹介</span>
        </div>

        {/* Left Side: Typography & Stats */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center space-y-6 md:space-y-8 z-10 relative backdrop-blur-sm md:backdrop-blur-none">
          <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-zinc-500 font-medium">
            <User size={12} />
            <AnimatePresence mode="wait">
              <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {t('aboutSubtitle')}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.h2 key={language} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-4xl font-semibold font-sans tracking-tight text-zinc-900 dark:text-zinc-100">
                {t('aboutTitle')}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans max-w-md">
                {t('aboutDescription')}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Minimalist Stats to balance the vertical space */}
          <div className="pt-4 flex items-center gap-6 md:gap-8">
            <div className="space-y-1">
              <div className="text-xl md:text-2xl font-semibold font-sans text-zinc-900 dark:text-zinc-100">4+</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500">{t('yearsExp')}</div>
            </div>
            <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800" />
            <div className="space-y-1">
              <div className="text-xl md:text-2xl font-semibold font-sans text-zinc-900 dark:text-zinc-100">12+</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500">{t('projects')}</div>
            </div>
            <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800" />
            <div className="space-y-1">
              <div className="text-xl md:text-2xl font-semibold font-sans text-zinc-900 dark:text-zinc-100">ID</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500">{t('based')}</div>
            </div>
          </div>
        </div>

        {/* Right Side: Full-bleed Image */}
        <div className="flex-1 relative min-h-[300px] md:min-h-full overflow-hidden group">
          <Image
            src="/images/person.jpg"
            alt="Thoriq"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Gradient fade overlay to blend image into the text block smoothly on desktop */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent hidden md:block z-10 pointer-events-none" />
        </div>
      </div>
    </SpotlightCard>
  )
}
