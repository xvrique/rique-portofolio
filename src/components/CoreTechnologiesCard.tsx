'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { SpotlightCard } from './ui/spotlight-card'
import { useLanguage } from '@/context/LanguageContext'

export interface TechItem {
  id: string
  name: string
  color: string
  svg: React.ReactNode
}

const techStack: TechItem[] = [
  {
    id: 'flutter',
    name: 'Flutter',
    color: '#02569B',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zM6 15.7L14.314 24h7.372L13.4 15.7 6 15.7zM9.7 12l3.7 3.7 3.7-3.7-3.7-3.7L9.7 12z" />
      </svg>
    ),
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    color: '#000000',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0c6.627 0 12 5.373 12 12 0 3.584-1.572 6.801-4.062 9.001l-9.08-11.832v.033h-1.92v9.6h1.92v-6.314l7.107 9.19zm-3.065-1.905l-4.71-6.104v-2.09l6.096 7.904c-.43.11-.876.204-1.386.29z" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    color: '#3178C6',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.864 13.51c.78.18 1.4.45 1.86.8.46.36.78.83.95 1.42.17.58.19 1.29.07 2.12-.13.84-.45 1.58-.96 2.22s-1.2 1.13-2.07 1.48c-.87.35-1.92.48-3.15.39-1.02-.08-1.9-.29-2.65-.64-.75-.35-1.34-.84-1.78-1.47l1.74-1.63c.33.47.76.84 1.3 1.1.54.26 1.17.41 1.89.46.72.05 1.34-.04 1.86-.27.52-.23.9-.56 1.13-.98.23-.42.31-.9.23-1.44-.08-.54-.31-.96-.7-1.25-.39-.29-.93-.5-1.63-.63l-1.34-.24c-1.14-.21-2.03-.57-2.67-1.09-.64-.52-1.03-1.2-1.17-2.04-.14-.84.01-1.66.45-2.46.44-.8 1.13-1.42 2.07-1.86.94-.44 2.09-.63 3.45-.57 1.02.04 1.92.23 2.7.57.78.34 1.4.8 1.86 1.38l-1.68 1.63c-.34-.41-.77-.73-1.29-.95-.52-.22-1.13-.34-1.83-.37-.7-.03-1.3.05-1.8.24-.5.19-.87.48-1.11.87-.24.39-.33.84-.27 1.34.06.5.28.89.65 1.17.37.28.91.49 1.62.63l1.32.24zM10.875 6.75v2.25H7.5v11.25H4.875V9H1.5V6.75h9.375z" />
      </svg>
    ),
  },
  {
    id: 'rust',
    name: 'Rust',
    color: '#DEA584',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 3.6c4.64 0 8.4 3.76 8.4 8.4 0 4.64-3.76 8.4-8.4 8.4-4.64 0-8.4-3.76-8.4-8.4 0-4.64 3.76-8.4 8.4-8.4zm-4.2 4.2v8.4h2.4v-3h1.8c1.65 0 3-1.35 3-3s-1.35-3-3-3H7.8zm2.4 2.4h1.8c.33 0 .6.27.6.6s-.27.6-.6.6h-1.8v-1.2z" />
      </svg>
    ),
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    color: '#336791',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M11.966 0C5.358 0 0 5.358 0 11.966c0 6.608 5.358 11.966 11.966 11.966 6.608 0 11.966-5.358 11.966-11.966C23.932 5.358 18.574 0 11.966 0zm.034 3.6a8.366 8.366 0 018.366 8.366A8.366 8.366 0 0112 20.332a8.366 8.366 0 01-8.366-8.366A8.366 8.366 0 0112 3.6zm-1.8 4.2a.9.9 0 00-.9.9v6.6a.9.9 0 001.8 0V12h1.5a2.4 2.4 0 000-4.8H10.2zm.9 1.8h1.5a.6.6 0 010 1.2h-1.5V9.6z" />
      </svg>
    ),
  },
  {
    id: 'firebase',
    name: 'Firebase',
    color: '#FFA611',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M3.89 15.672L6.255.986A.6.6 0 017.34.717l2.585 5.278-6.035 9.677zm16.536-2.528l-2.79-11.758a.6.6 0 00-1.077-.202l-9.98 16.03 6.942 3.914a1.8 1.8 0 001.764 0l5.141-2.901a.6.6 0 00.278-.501V13.144zM12.7 7.42l-2.032-4.148a.6.6 0 00-1.08 0L7.53 7.42 12.7 7.42z" />
      </svg>
    ),
  },
  {
    id: 'reactnative',
    name: 'React Native',
    color: '#61DAFB',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M12 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.8A3.3 3.3 0 1 1 12 3.7a3.3 3.3 0 0 1 0 6.6zm0-5.3c-2.3 0-6.1.5-8.5 1.7-2.6 1.3-3.5 3-3.5 4.8 0 1.8.9 3.5 3.5 4.8 2.4 1.2 6.2 1.7 8.5 1.7s6.1-.5 8.5-1.7c2.6-1.3 3.5-3 3.5-4.8 0-1.8-.9-3.5-3.5-4.8-2.4-1.2-6.2-1.7-8.5-1.7z" />
      </svg>
    ),
  },
  {
    id: 'solana',
    name: 'Solana',
    color: '#14F195',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M4.09 17.55l16.12-4.23-.28-1.05-16.11 4.22.27 1.06zm16.1-5.28L4.09 16.5l.28 1.05 16.1-4.22-.28-1.06zm-16.11-4.23L20.2 3.82l-.28-1.06-16.1 4.23.27 1.05z" />
      </svg>
    ),
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    color: '#339933',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.87 14.51c-1.37.52-2.92.83-4.52.83-4.39 0-8-2.37-8-6.19s3.61-6.19 8-6.19c1.6 0 3.15.31 4.52.83l-1.39 2.58c-1.12-.41-2.2-.6-3.13-.6-3.16 0-5.63 1.51-5.63 4.5 0 2.99 2.47 4.5 5.63 4.5.93 0 2.01-.19 3.13-.6l1.39 2.58z" />
      </svg>
    ),
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    color: '#06B6D4',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  }
]

interface CoreTechnologiesCardProps {
  title?: string
  subtitle?: string
  className?: string
  speed?: number
}

export function CoreTechnologiesCard({
  title,
  subtitle,
  className = '',
  speed = 22,
}: CoreTechnologiesCardProps) {
  const { t } = useLanguage()
  const displayTitle = title || t('coreTechnologies')
  const [isPaused, setIsPaused] = useState(false)

  // Quadruple items to ensure ultra-smooth infinite marquee loop without seams
  const marqueeItems = [...techStack, ...techStack, ...techStack, ...techStack]

  return (
    <SpotlightCard
      className={`group relative w-full h-full bg-white dark:bg-zinc-950/90 border border-zinc-200/50 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm dark:shadow-none overflow-hidden flex flex-col justify-between transition-colors duration-300 ${className}`}
    >
      {/* Subtle Kanji Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none z-0">
        <span className="text-[14rem] font-black leading-none text-zinc-900 dark:text-zinc-100">技術</span>
      </div>

      {/* Minimalist Card Header */}
      <div className="relative z-10 flex items-center justify-between pb-6 border-b border-zinc-100 dark:border-white/5 shrink-0">
        <div className="flex items-center gap-3">
          <div className="text-zinc-400 dark:text-zinc-500">
            <Cpu size={14} />
          </div>
          <div>
            <span className="block text-[10px] font-sans font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">
              {subtitle || t('stackEcosystem')}
            </span>
            <h3 className="text-base md:text-lg font-medium font-sans tracking-tight text-zinc-900 dark:text-zinc-100">
              {displayTitle}
            </h3>
          </div>
        </div>

        <span className="hidden sm:block text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium">
          {techStack.length} {t('techCount')}
        </span>
      </div>

      {/* Infinite Scrolling Marquee Track Container */}
      <div
        className="relative z-10 py-6 overflow-hidden flex-1 flex flex-col justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Fading Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-zinc-950/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-zinc-950/90 to-transparent z-20 pointer-events-none" />

        {/* Marquee Flex Track */}
        <motion.div
          animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: speed,
              ease: 'linear',
            },
          }}
          className="flex items-center gap-10 md:gap-14 w-max"
        >
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.id}-${index}`}
              className="group/logo flex flex-col items-center justify-center gap-3 transition-colors duration-200"
            >
              <div 
                className="transition-all duration-300 transform group-hover/logo:scale-110 drop-shadow-sm"
                style={{ color: tech.color === '#000000' ? 'currentColor' : tech.color }}
              >
                {tech.svg}
              </div>
              <span 
                className="text-[11px] font-sans uppercase tracking-widest font-bold transition-colors duration-300"
                style={{ color: tech.color === '#000000' ? 'currentColor' : tech.color }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </SpotlightCard>
  )
}

export default CoreTechnologiesCard
