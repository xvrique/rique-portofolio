'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, Reorder } from 'framer-motion'
import { GripVertical } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SpotlightCard } from './ui/spotlight-card'
import type { CardItem, GithubRepo } from '@/types'
import { initialCards } from '@/data/cards'

// --- Section Components ---
import { AboutCard } from './sections/AboutCard'
import { MobileProjectContent } from './sections/MobileProjectContent'
import { PhilosophyCard } from './sections/PhilosophyCard'
import { TerminalCard as ExperienceTimelineCard } from './terminal'
import { CoreTechnologiesCard } from './CoreTechnologiesCard'
import { ProjectSpotlightCard } from './ProjectSpotlightCard'
import { ThesisOverviewCard, ThesisMetricsCard, ThesisDataCard, ThesisModelCard } from './thesis-cards'
import { ContactFormCard, AvailabilityCard, LocationCard } from './contact-cards'
import { EngineeringDomains } from './EngineeringDomains'
import { InteractiveRepoList } from './InteractiveRepoList'
import { LighthouseMetricsCard } from './LighthouseMetricsCard'

export function BentoGrid({ repositories }: { repositories: GithubRepo[] }) {
  const { language } = useLanguage()
  const [isGridHovered, setIsGridHovered] = useState(false)
  const [cards, setCards] = useState<CardItem[]>(initialCards)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const renderCardContent = (id: string) => {
    switch (id) {
      case 'about':
        return <AboutCard />
      case 'domains':
        return <EngineeringDomains />
      case 'thesis-overview':
        return <ThesisOverviewCard />
      case 'thesis-metrics':
        return <ThesisMetricsCard />
      case 'thesis-data':
        return <ThesisDataCard />
      case 'thesis-model':
        return <ThesisModelCard />
      case 'spotlight':
        return <ProjectSpotlightCard />
      case 'core-technologies':
        return <CoreTechnologiesCard />
      case 'open-source':
        return <InteractiveRepoList repositories={repositories} />
      case 'philosophy':
        return (
          <SpotlightCard className="min-h-[300px] flex items-center p-8 md:p-12 h-full">
            <PhilosophyCard />
          </SpotlightCard>
        )
      case 'contact':
        return <ContactFormCard />
      case 'availability':
        return <AvailabilityCard />
      case 'location':
        return <LocationCard />
      case 'case-study':
        return (
          <SpotlightCard className="min-h-[850px] md:min-h-0 md:h-[540px] p-8 md:p-10 flex h-full">
            <MobileProjectContent />
          </SpotlightCard>
        )
      case 'terminal':
        return (
          <div className="h-[520px] md:h-[560px] w-full">
            <ExperienceTimelineCard className="h-full" />
          </div>
        )
      case 'lighthouse':
        return <LighthouseMetricsCard className="h-full min-h-[450px] md:min-h-[540px] flex flex-col justify-between" />
      default:
        return null
    }
  }

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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden"
          >
            <span className="text-[25rem] md:text-[45rem] font-black text-zinc-900 dark:text-zinc-100 opacity-[0.015] dark:opacity-[0.02] cursor-default">
              創造
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reorderable Bento Grid Container */}
      <Reorder.Group
        axis="y"
        values={cards}
        onReorder={setCards}
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-row-dense"
      >
        {cards.map((card) => (
          <Reorder.Item
            key={card.id}
            value={card}
            layout={true}
            drag={!isMobile}
            whileDrag={{
              scale: 1.01,
              zIndex: 50,
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
            }}
            transition={{
              layout: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.15 },
            }}
            className={`relative group/drag cursor-grab active:cursor-grabbing list-none ${card.spanClass}`}
          >
            {/* Subtle Visual Drag Handle */}
            <div className="absolute top-4 right-4 z-30 p-1.5 rounded-xl bg-zinc-100/60 dark:bg-zinc-800/60 text-zinc-400 opacity-20 group-hover/drag:opacity-80 transition-opacity pointer-events-none hidden md:block">
              <GripVertical size={13} />
            </div>

            {renderCardContent(card.id)}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}
