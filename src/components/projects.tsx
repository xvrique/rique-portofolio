'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Star, GitFork, ExternalLink, Code, Terminal, ArrowUpRight } from 'lucide-react'
import type { GithubRepo } from '@/lib/github'

interface ProjectsProps {
  repositories: GithubRepo[]
}

export function Projects({ repositories }: ProjectsProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
    >
      {repositories.slice(0, 6).map((repo) => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          whileHover={{ y: -5, scale: 0.99 }}
          className="group relative flex flex-col justify-between bg-white dark:bg-zinc-900/50 p-6 rounded-[1.5rem] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-none h-[220px] overflow-hidden"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 group-hover:bg-neon-purple/10 group-hover:text-neon-purple transition-colors">
                <Code size={18} />
              </div>
              <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-neon-purple transition-colors truncate">
                {repo.name}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs line-clamp-2 leading-relaxed">
                {repo.description || "Synthesizing future systems."}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-1">
              {repo.language && (
                <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[9px] font-bold uppercase tracking-wider">
                  {repo.language}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 mt-auto border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-yellow-500 transition-colors">
              <Star size={14} fill={repo.stargazers_count > 0 ? "currentColor" : "none"} />
              <span className="text-xs font-medium">{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <GitFork size={14} />
              <span className="text-xs font-medium">{repo.forks_count || 0}</span>
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  )
}
