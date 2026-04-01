'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ThemeToggle } from './theme-toggle'
import { useLanguage } from '@/context/LanguageContext'

// Helper for Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-300 rounded-full',
        scrolled ? 'glass py-2 px-1' : 'bg-transparent py-4'
      )}
    >
      <div className="container px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-zinc-950 dark:bg-white flex items-center justify-center font-mono font-bold text-white dark:text-black shadow-lg group-hover:scale-110 transition-transform tracking-tighter">
            &gt;_
          </div>
          <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white group-hover:text-neon-purple transition-colors">
            Rique
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 bg-zinc-100/50 dark:bg-zinc-900/50 px-6 py-2 rounded-full border border-zinc-200 dark:border-zinc-800">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors relative group"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={language}
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -2 }}
                    >
                      {t(link.name.toLowerCase() + 'Title')}
                    </motion.span>
                  </AnimatePresence>
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 mx-2" />
          
          {/* Language Toggle */}
          <div className="flex items-center gap-2 mr-2">
            <button 
              onClick={() => setLanguage('en')}
              className={cn(
                "text-[10px] font-mono tracking-tighter transition-all px-1.5 py-0.5 rounded-md",
                language === 'en' 
                  ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-black shadow-sm" 
                  : "text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400"
              )}
            >
              EN
            </button>
            <span className="text-[10px] text-zinc-300 dark:text-zinc-800 font-thin italic">▾</span>
            <button 
              onClick={() => setLanguage('jp')}
              className={cn(
                "text-[10px] font-mono tracking-tighter transition-all px-1.5 py-0.5 rounded-md",
                language === 'jp' 
                  ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-black shadow-sm" 
                  : "text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400"
              )}
            >
              JP
            </button>
          </div>

          <ThemeToggle />
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-black hover:scale-105 active:scale-95 transition-all text-xs font-bold tracking-widest uppercase"
          >
            <AnimatePresence mode="wait">
              <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {t('hireMe')}
              </motion.span>
            </AnimatePresence>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full mt-4 glass rounded-2xl md:hidden overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={language}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        {t(link.name.toLowerCase() + 'Title')}
                      </motion.span>
                    </AnimatePresence>
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Language</span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setLanguage('en')}
                    className={cn(
                      "text-[10px] font-mono tracking-tighter transition-all px-3 py-1.5 rounded-lg border",
                      language === 'en' 
                        ? "bg-zinc-950 dark:bg-white text-white dark:text-black font-black border-transparent" 
                        : "text-zinc-500 dark:text-zinc-600 border-zinc-200 dark:border-zinc-800"
                    )}
                  >
                    EN
                  </button>
                  <button 
                    onClick={() => setLanguage('jp')}
                    className={cn(
                      "text-[10px] font-mono tracking-tighter transition-all px-3 py-1.5 rounded-lg border",
                      language === 'jp' 
                        ? "bg-zinc-950 dark:bg-white text-white dark:text-black font-black border-transparent" 
                        : "text-zinc-500 dark:text-zinc-600 border-zinc-200 dark:border-zinc-800"
                    )}
                  >
                    JP
                  </button>
                </div>
              </li>
              <li className="pt-4">
                <Link
                  href="#contact"
                  className="w-full text-center block px-5 py-3 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-black font-black text-[10px] uppercase tracking-[0.2em]"
                  onClick={() => setIsOpen(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      {t('hireMe')}
                    </motion.span>
                  </AnimatePresence>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
