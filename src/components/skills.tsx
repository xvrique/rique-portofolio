'use client'

import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'

interface Skill {
  name: string
  category: string
  icon: React.ReactNode
  color: string
}

const skills: Skill[] = [
  {
    name: 'Flutter',
    category: 'Mobile',
    color: 'from-[#02569B] to-[#0175C2]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M14.314 0L2.3 12L6 15.7L21.684 0.0120003L14.314 0ZM21.684 15.732L14.321 23.095L10.606 19.38L21.684 8.291V15.732Z" />
      </svg>
    )
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    color: 'from-white/20 to-white/5',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.75 3c2.479 0 4.5 2.021 4.5 4.5s-2.021 4.5-4.5 4.5-4.5-2.021-4.5-4.5 2.021-4.5 4.5-4.5zm-6.75 4.5c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm11.25 13.5l-3.375-3.375c-.75-.75-1.125-1.125-1.875-1.125s-1.125.375-1.875 1.125l-3.375 3.375c-.75.75-.75 2.25 0 3s2.25.75 3 0l2.25-2.25 2.25 2.25c.75.75 2.25.75 3 0s.75-2.25 0-3z" />
      </svg>
    )
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    color: 'from-[#3178C6] to-[#007ACC]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111v2.111c-.473-.093-.982-.14-1.528-.14-.546 0-.969.111-1.268.334-.299.222-.448.567-.448 1.037 0 .43.149.77.448.991.299.222.753.334 1.36.334.463 0 .885-.037 1.267-.111v1.944c-.416.103-.99.155-1.722.155-1.185 0-2.093-.324-2.713-.972-.63-.648-.945-1.503-.945-2.565 0-1.139.315-2.037.945-2.694.62-.657 1.528-.986 2.722-.986zm-10.741.13c1.074 0 1.954.268 2.64.805s1.028 1.259 1.028 2.167c0 .907-.343 1.63-1.028 2.167-.685.536-1.566.804-2.64.804-.611 0-1.161-.035-1.648-.106v2.106c.487.094 1.01.141 1.565.141 1.676 0 2.94-.407 3.792-1.218.852-.81 1.278-1.898 1.278-3.264 0-1.366-.426-2.454-1.278-3.264-.852-.81-2.116-1.218-3.792-1.218-.555 0-1.078.047-1.565.141v1.944c.487-.071 1.037-.105 1.648-.105z" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    color: 'from-[#06B6D4] to-[#38BDF8]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.975,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.975,12,6.001,12z" />
      </svg>
    )
  },
  {
    name: 'Firebase',
    category: 'Backend',
    color: 'from-[#FFCA28] to-[#FFA000]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M3.89 15.672L6.255.461A.545.545 0 0 1 7.28.283l2.827 5.309 3.197-6.071a.545.545 0 0 1 1.011.194l2.42 15.631 3.518 1.956a.545.545 0 0 1-.027.962L3.89 15.672zM12.133 16.99l-2.023-3.805L3.308 17.51l8.825-4.903z" />
      </svg>
    )
  },
  {
    name: 'Solana',
    category: 'Web3',
    color: 'from-[#14F195] to-[#9945FF]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M1.385 18.17l2.846-2.846h18.384l-2.846 2.846H1.385zm0-7.384l2.846-2.846h18.384l-2.846 2.846H1.385zm18.384-10.786l2.846 2.846H4.23L1.385 0h18.384z" />
      </svg>
    )
  },
  {
    name: 'Research',
    category: 'Web3',
    color: 'from-[#a855f7] to-[#0ea5e9]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    )
  }
]

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "backOut" }
    }
  }

  return (
    <section id="skills" className="w-full py-24 md:py-32 px-6 sm:px-12 bg-zinc-950/50 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full glass border border-white/10 text-[10px] font-black tracking-[0.2em] text-[#14F195] uppercase"
          >
            Technical Arsenal
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            Mastering the <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">Modern Stack.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              animate={{
                opacity: hoveredSkill && hoveredSkill !== skill.name ? 0.4 : 1,
                scale: hoveredSkill === skill.name ? 1.05 : 1,
              }}
              className={`relative group p-8 rounded-[2rem] glass border border-white/5 flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
                hoveredSkill === skill.name ? 'border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : ''
              }`}
            >
              {/* Skill Icon */}
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500`}>
                <div className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name & Category */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#14F195] transition-colors">
                  {skill.name}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  {skill.category}
                </span>
              </div>

              {/* Glowing Background Glow on Hover */}
              {hoveredSkill === skill.name && (
                <motion.div 
                  layoutId="glow"
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 blur-2xl rounded-[2rem] -z-10`}
                />
              )}
            </motion.div>
          ))}

          {/* Call-to-action placeholder in the grid */}
          <motion.div
            variants={skillVariants}
            className="col-span-2 md:col-span-1 lg:col-span-1 p-8 rounded-[2rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center gap-2"
          >
            <span className="text-zinc-500 font-medium text-sm leading-tight">Always learning<br/>new protocols...</span>
          </motion.div>
        </motion.div>

      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#14F195]/5 blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-electric-blue/5 blur-[100px] -z-10 rounded-full" />
    </section>
  )
}
