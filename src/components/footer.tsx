'use client'

import React from 'react'
import Link from 'next/link'
import { Heart, Mail, Globe, ExternalLink } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)

import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full py-24 border-t border-zinc-200 dark:border-zinc-800 mt-20 overflow-hidden">
      {/* Soul Watermark: 魂 (Soul) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] dark:opacity-[0.04] z-0">
        <span className="text-[20rem] font-black">魂</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 dark:bg-white flex items-center justify-center font-mono font-bold text-white dark:text-black shadow-sm group-hover:scale-105 transition-transform text-xs">
              &gt;_
            </div>
            <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white group-hover:text-neon-purple transition-colors">
              Rique.
            </span>
          </Link>
          <AnimatePresence mode="wait">
            <motion.p 
              key={language}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-xs font-semibold text-zinc-500 max-w-[200px] leading-relaxed uppercase tracking-widest"
            >
              {t('precisionSoul')}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-8">
          <Link href="https://github.com/xvrique" target="_blank" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all transform hover:scale-110">
            <GithubIcon />
          </Link>
          <Link href="https://x.com/xvrique" target="_blank" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all transform hover:scale-110">
            <TwitterIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/thoriqnajmu/" target="_blank" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all transform hover:scale-110">
            <LinkedinIcon />
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
            <span>Built by</span>
            <span className="text-zinc-900 dark:text-white">xvrique</span>
          </div>
          <span className="text-zinc-400 dark:text-zinc-600 text-[10px] font-mono tracking-tighter">© {currentYear} All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}
