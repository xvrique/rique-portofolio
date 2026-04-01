'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Smartphone,
  Rocket,
  Cpu,
  Code2,
  Layers,
  Zap,
  ArrowUpRight,
  ArrowRight,
  User,
  Terminal,
  Activity,
  Box,
  Globe,
  Binary,
  Shield,
  Layers3,
  Server,
  Wrench,
  Search
} from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { TerminalCard } from './terminal'
import { Projects } from './projects'

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

// --- Card 1: High-Density Tech Ecosystem ---
const TechEcosystem = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const { t, language } = useLanguage()

  const categories = [
    {
      id: 'mobile',
      label: 'Mobile',
      icon: <Smartphone size={12} />,
      items: ['Flutter', 'Dart', 'Firebase', 'Android SDK', 'iOS']
    },
    {
      id: 'frontend',
      label: 'Frontend/UI',
      icon: <Layers3 size={12} />,
      items: ['Next.js', 'React', 'TS', 'Tailwind', 'Motion', 'GSAP']
    },
    {
      id: 'web3',
      label: 'Web3/Backend',
      icon: <Shield size={12} />,
      items: ['Solana', 'Rust', 'Node.js', 'PostgreSQL', 'Anchor']
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: <Wrench size={12} />,
      items: ['Git', 'Docker', 'Vercel', 'Figma', 'Linux']
    }
  ]

  return (
    <div className="flex flex-col gap-6 h-full relative">
      {/* Tech Watermark: 技術 (Technology) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <span className="text-8xl font-black">技術</span>
      </div>

      <div className="flex items-center gap-3 text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] relative z-10">
        <Activity size={14} />
        <AnimatePresence mode="wait">
          <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {t('techArsenal')}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-5 mt-2 relative z-10">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onMouseEnter={() => setHoveredCategory(cat.id)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`flex flex-col gap-2 transition-all duration-500
              ${hoveredCategory && hoveredCategory !== cat.id ? 'opacity-20 blur-[1px] grayscale' : 'opacity-100'}
            `}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500">
                {cat.icon}
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                {cat.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item, idx) => (
                <span
                  key={item}
                  className={`px-2 py-1 rounded text-[10px] font-bold border transition-all duration-300
                    ${idx % 2 === 0
                      ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100'
                      : 'bg-transparent border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500'}
                    ${hoveredCategory === cat.id ? 'scale-105' : 'scale-100'}
                  `}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- Card 2: Mobile Mockup Content ---
const MobileProjectContent = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { t, language } = useLanguage()

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col md:flex-row gap-10 items-center justify-between min-h-full w-full py-4 md:py-0"
    >
      {/* Education Watermark: 教育 (Education) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <span className="text-[15rem] font-black leading-none">教育</span>
      </div>

      <div className="flex-1 space-y-6 relative z-10">
        <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-600 font-bold uppercase tracking-[0.2em] text-[10px]">
          <Box size={14} />
          <AnimatePresence mode="wait">
            <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {t('caseStudy')}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="space-y-4 max-w-[15rem] md:max-w-xs lg:max-w-md">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter uppercase leading-[1.1]">
            PONDASI FOUNDATION <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-zinc-300 dark:text-zinc-800 transition-colors duration-700"
              >
                {t('reportingEcosystem')}
              </motion.span>
            </AnimatePresence>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-sm">
            Engineered a comprehensive mobile reporting application for early childhood development using <span className="text-zinc-900 dark:text-zinc-100 font-bold">Flutter and Firebase</span>.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-[10px] font-black uppercase tracking-[0.2em] border border-zinc-200 dark:border-zinc-800 group/btn hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 transition-all">
          <AnimatePresence mode="wait">
            <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {t('interactDeeply')}
            </motion.span>
          </AnimatePresence>
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Modern Smartphone Mockup */}
      <div className="relative md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 pointer-events-none z-10 shrink-0">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1, rotateY: isHovered ? -5 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[160px] h-[320px] md:w-[200px] md:h-[400px] rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 bg-zinc-900 dark:bg-zinc-50 border-[4px] md:border-[6px] border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-8 flex items-center justify-center z-20">
            <div className="w-20 h-4 bg-zinc-900 dark:bg-zinc-50 rounded-full mt-2" />
          </div>

          <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
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
                    className="object-cover grayscale brightness-90"
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
                    className="w-full h-full object-cover grayscale brightness-110 contrast-125"
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

// --- Card 5: Philosophy ---
const PhilosophyCard = () => {
  const { t, language } = useLanguage()
  return (
    <div className="w-full h-full relative group flex flex-col justify-center py-6 md:py-0">
      {/* Watermark: 精神 (Spirit) - Positioned more proportionally */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0 overflow-hidden">
        <span className="text-[10rem] md:text-[15rem] font-black leading-none select-none">精神</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-3 text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] relative z-10 mb-6 md:mb-8">
        <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
          <Zap size={14} />
        </div>
        <AnimatePresence mode="wait">
          <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {t('philSubtitle')}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center relative z-10">
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.h2
              key={language}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-7xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter uppercase leading-[0.8] mb-2"
            >
              {t('philTitle')}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="relative">
          {/* Subtle vertical line for architectural feel */}
          <div className="hidden md:block absolute -left-10 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

          <AnimatePresence mode="wait">
            <motion.p
              key={language}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-zinc-500 dark:text-zinc-400 text-sm md:text-xl leading-relaxed font-medium max-w-md"
            >
              {t('philDescription')}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export function BentoGrid({ repositories }: { repositories: any[] }) {
  const { t, language } = useLanguage()
  const [isGridHovered, setIsGridHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsGridHovered(true)}
      onMouseLeave={() => setIsGridHovered(false)}
      className="relative max-w-6xl mx-auto px-6 w-full flex flex-col gap-12 py-12 scroll-mt-32"
    >
      {/* Interactive Kanji Watermark: 創造 (Creation) */}
      <AnimatePresence>
        {isGridHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden"
          >
            <span className="text-[25rem] md:text-[50rem] font-black text-black dark:text-white opacity-[0.03] dark:opacity-[0.015] transition-colors duration-1000">
              創造
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Row 1: About + Tech */}
        <motion.div
          id="about"
          variants={itemVariants}
          className="md:col-span-2 group relative overflow-hidden bg-white border border-zinc-200 shadow-sm dark:bg-[#0A0A0A] dark:border-zinc-800 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center transition-all hover:border-zinc-300 dark:hover:border-zinc-700 scroll-mt-32"
        >
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-600 font-bold uppercase tracking-[0.2em] text-[10px]">
              <User size={14} />
              <AnimatePresence mode="wait">
                <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{t('aboutSubtitle')}</motion.span>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.h2 key={language} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter uppercase leading-none">{t('aboutTitle')}</motion.h2>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-medium">{t('aboutDescription')}</motion.p>
            </AnimatePresence>
          </div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-zinc-50 dark:border-zinc-800 shadow-lg group-hover:scale-[1.02] transition-transform duration-700 shrink-0">
            <Image src="/images/me.jpg" alt="Thoriq" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" priority sizes="(max-width: 768px) 160px, 224px" />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="md:col-span-1 bg-white border border-zinc-200 shadow-sm dark:bg-[#0A0A0A] dark:border-zinc-800 rounded-[2.5rem] p-8 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 overflow-hidden"
        >
          <TechEcosystem />
        </motion.div>

        {/* Row 2: Philosophy (Full Width) */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-3 min-h-[300px] flex items-center bg-white border border-zinc-200 shadow-sm dark:bg-[#090909] dark:border-zinc-800 rounded-[2.5rem] p-8 md:p-12 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 overflow-hidden"
        >
          <PhilosophyCard />
        </motion.div>

        {/* Row 3: Case Study + Terminal */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 min-h-[850px] md:min-h-0 md:h-[540px] bg-white border border-zinc-200 shadow-sm dark:bg-[#0A0A0A] dark:border-zinc-800 rounded-[2.5rem] p-8 md:p-10 flex transition-all hover:border-zinc-300 dark:hover:border-zinc-700 relative overflow-hidden"
        >
          <MobileProjectContent />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="md:col-span-1 h-[450px] md:h-[540px] bg-white border border-zinc-200 shadow-sm dark:bg-[#0A0A0A] dark:border-zinc-800 rounded-[2.5rem] overflow-hidden transition-all hover:border-zinc-300 dark:hover:border-zinc-700"
        >
          <TerminalCard />
        </motion.div>

        {/* --- FULL WIDTH PROJECTS SECTION --- */}
        <div id="projects" className="md:col-span-3 pt-12 space-y-8 scroll-mt-32">
          <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-600 font-bold uppercase tracking-[0.2em] text-[10px]">
            <Terminal size={14} />
            <AnimatePresence mode="wait">
              <motion.span key={language} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{t('openSourceRepos')}</motion.span>
            </AnimatePresence>
          </div>
          <Projects repositories={repositories} />
        </div>
      </motion.div>
    </div>
  )
}
