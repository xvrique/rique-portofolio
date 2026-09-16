'use client'

import React, { useRef, useState, useCallback } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface SpotlightCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  spotlightColorDark?: string
  spotlightColorLight?: string
}

export function SpotlightCard({
  children,
  className = '',
  spotlightColorDark = 'rgba(255, 255, 255, 0.08)',
  spotlightColorLight = 'rgba(0, 0, 0, 0.06)',
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-3xl border border-zinc-200/50 dark:border-white/5 bg-white dark:bg-zinc-950/90 shadow-sm dark:shadow-none transition-colors duration-300 group ${className}`}
      {...props}
    >
      {/* Mouse Spotlight Layer - Light Mode */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:hidden"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColorLight}, transparent 70%)`,
        }}
      />

      {/* Mouse Spotlight Layer - Dark Mode */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden dark:block"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColorDark}, transparent 70%)`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  )
}
