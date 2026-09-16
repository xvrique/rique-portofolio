'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Box } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export function MobileProjectContent() {
  const [isHovered, setIsHovered] = useState(false)
  const { t, language } = useLanguage()

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col md:flex-row gap-8 items-center justify-between h-full w-full py-4 md:py-0 relative overflow-hidden"
    >
      {/* Subtle Kanji Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none z-0">
        <span className="text-[16rem] font-black leading-none text-zinc-900 dark:text-zinc-100">事例</span>
      </div>

      {/* Left Column: Case Study Text */}
      <div className="flex-1 space-y-6 relative z-10 max-w-full md:max-w-[55%]">
        <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 font-medium text-[10px] font-sans uppercase tracking-widest">
          <Box size={14} />
          <AnimatePresence mode="wait">
            <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {t('caseStudy')}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight font-sans">
            Pondasi Foundation <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                className="text-zinc-400 dark:text-zinc-500 transition-colors duration-300 block mt-1"
              >
                {t('reportingEcosystem')}
              </motion.span>
            </AnimatePresence>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-sans font-normal pt-2">
            {language === 'jp' ? (
              <>
                <span className="text-zinc-900 dark:text-zinc-100 font-medium">FlutterとFirebase</span>を活用し、幼児発育のための包括的なモバイル報告アプリケーションを設計・構築。
              </>
            ) : (
              <>
                Engineered a comprehensive mobile reporting application for early childhood development using <span className="text-zinc-900 dark:text-zinc-100 font-medium">Flutter and Firebase</span>.
              </>
            )}
          </p>
        </div>
        <div className="pt-2">
          <button className="group/btn inline-flex items-center gap-2 text-xs font-sans font-medium text-zinc-900 dark:text-zinc-100 transition-colors">
            <AnimatePresence mode="wait">
              <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border-b border-transparent group-hover/btn:border-zinc-900 dark:group-hover/btn:border-zinc-100 transition-colors pb-0.5">
                {t('interactDeeply')}
              </motion.span>
            </AnimatePresence>
            <ArrowRight size={14} className="text-zinc-400 dark:text-zinc-500 group-hover/btn:text-zinc-900 dark:group-hover/btn:text-zinc-100 group-hover/btn:translate-x-0.5 transition-all" />
          </button>
        </div>
      </div>

      {/* Right Column: Modern Smartphone Mockup Frame */}
      <div className="relative shrink-0 z-10 flex items-center justify-center md:pr-2">
        <motion.div
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[160px] h-[320px] md:w-[185px] md:h-[370px] lg:w-[200px] lg:h-[400px] rounded-[2rem] md:rounded-[2.5rem] p-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-white/5 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-7 flex items-center justify-center z-20">
            <div className="w-16 h-3 bg-white dark:bg-zinc-950 rounded-full mt-1.5 border border-zinc-200/50 dark:border-white/5" />
          </div>

          <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-white/5">
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.div
                  key="static"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/apii-static.jpg"
                    alt="APII App"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0"
                >
                  <video
                    src="/images/apii-demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
