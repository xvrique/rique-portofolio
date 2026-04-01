'use client'

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

// Dynamic Geometric Shape
const InteractiveGeometry = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [8, -8]), { stiffness: 50, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-8, 8]), { stiffness: 50, damping: 25 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="relative pointer-events-none z-10 flex items-center justify-center scale-90 md:scale-100">
      <motion.div
        style={{ rotateX, rotateY, perspective: 1200 }}
        className="w-[280px] h-[340px] md:w-[500px] md:h-[600px] flex items-center justify-center relative p-4"
      >
        {/* Simplified Wireframe */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10 stroke-zinc-400 dark:stroke-zinc-500 fill-none stroke-[0.1] scale-150">
          <motion.path
            d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        {/* Hero Image Frame */}
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
            <motion.div 
              style={{ rotate: '-6deg' }}
              className="relative w-[85%] h-[95%] p-1.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-visible backdrop-blur-3xl"
            >
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                      src="/images/hero.jpg"
                      alt="Hero"
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-1000 brightness-[0.98] contrast-125"
                      priority
                      sizes="(max-width: 768px) 240px, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/10 to-transparent pointer-events-none" />
                </div>
            </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export function HeroSection() {
  const { t, language } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const revealVariants: any = {
    hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  }

  return (
    <section 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-center bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-1000 px-6 sm:px-12 lg:px-24 scroll-mt-32"
    >
      
      {/* Background Masked Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.12] dark:opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, #666 1px, transparent 1px), linear-gradient(to bottom, #666 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          }}
        />
      </div>

      {/* Interactive Kanji Watermark: 技術 (Technology) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none"
          >
            <span className="text-[20rem] md:text-[40rem] font-black text-black dark:text-white opacity-[0.03] dark:opacity-[0.02] transition-colors duration-1000">
              技術
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vertical Accent: KODAWARI */}
      <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <p className="text-[10px] font-mono tracking-[0.5em] text-zinc-400 dark:text-zinc-600 opacity-40 [writing-mode:vertical-rl] text-orientation-mixed">
          {t('kodawari')}
        </p>
      </div>

      {/* Unified Grid Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center translate-y-0 md:-translate-y-16 relative z-10">
        
        {/* Left Side: Content Flow */}
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-20 flex flex-col items-start text-left gap-8 md:pl-12 lg:pl-20"
        >
            <div className="space-y-4">
                <motion.h1 
                    layout
                    variants={revealVariants}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-semibold tracking-tighter leading-[1.1] text-zinc-900 dark:text-zinc-50 md:whitespace-nowrap"
                >
                    {t('heroTitle')}
                </motion.h1>
                
                <div className="min-h-[1.5em] md:min-h-[1.8em] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.h2 
                      key={language}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="text-xl md:text-3xl font-bold text-zinc-400 dark:text-zinc-700 tracking-tight"
                    >
                      {t('heroSubtitle')}
                    </motion.h2>
                  </AnimatePresence>
                </div>

                <div className="min-h-[4em] md:min-h-[3em] flex items-start">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={language}
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, filter: 'blur(10px)' }}
                      className="max-w-xl text-lg md:text-xl text-zinc-500 dark:text-zinc-600 leading-relaxed font-medium"
                    >
                      {t('heroDescription')}
                    </motion.p>
                  </AnimatePresence>
                </div>
            </div>

            {/* Action Buttons */}
            <motion.div 
                variants={revealVariants}
                className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
                <Link href="#projects" className="group w-full sm:w-auto px-10 py-5 rounded-2xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:scale-[1.05] active:scale-95 shadow-2xl dark:shadow-none flex items-center justify-center gap-3 min-w-[180px]">
                    <AnimatePresence mode="wait">
                      <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        {t('viewProjects')}
                      </motion.span>
                    </AnimatePresence>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link href="#contact" className="group w-full sm:w-auto px-10 py-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-600 font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center justify-center gap-3 min-w-[180px]">
                    <AnimatePresence mode="wait">
                      <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        {t('letsConnect')}
                      </motion.span>
                    </AnimatePresence>
                    <Mail size={16} className="opacity-50 group-hover:opacity-100" />
                </Link>
            </motion.div>
        </motion.div>

        {/* Right Side: Dynamic Geometry */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center items-center"
        >
            <InteractiveGeometry />
        </motion.div>

      </div>

    </section>
  )
}
