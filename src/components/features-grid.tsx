'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Code, Smartphone, Hexagon } from 'lucide-react'

export function FeaturesGrid() {
  const features = [
    {
      title: 'Modern Stack',
      description: 'Building with Next.js, TypeScript, and modern tooling for peak performance.',
      icon: <Code className="text-electric-blue" size={24} />
    },
    {
      title: 'Cross-Platform',
      description: 'Seamless mobile experiences using Flutter, reaching users everywhere.',
      icon: <Smartphone className="text-neon-purple" size={24} />
    },
    {
      title: 'Decentralized',
      description: 'Exploring Web3 and blockchain tech to build the future of ownership.',
      icon: <Hexagon className="text-cyan-400" size={24} />
    }
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
      {features.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group relative flex flex-col gap-5 p-8 glass rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
