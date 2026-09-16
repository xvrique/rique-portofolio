import type { Variants } from 'framer-motion'

// --- Bento Grid Card Layout ---
export interface CardItem {
  id: string
  spanClass: string
}

// --- Timeline ---
export interface TimelineEntry {
  id: string
  title: string
  organization: string
  period: string
  description: string
  category: 'research' | 'engineering' | 'education'
  tags: string[]
  status: 'active' | 'completed'
  iconType: 'research' | 'work' | 'education' | 'code'
}

// --- Framer Motion Reveal ---
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
}

// --- Re-export GithubRepo for convenience ---
export type { GithubRepo } from '@/lib/github'
