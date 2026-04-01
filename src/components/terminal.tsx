'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, Activity, ExternalLink, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

interface LogEntry {
  type: 'system' | 'user' | 'error' | 'success' | 'loading'
  date?: string
  msg: string
  isLink?: boolean
  href?: string
}

const initialBootLogs: LogEntry[] = [
  { type: 'system', date: 'INIT', msg: 'Kernel: Linux version 6.2.0-architect (x86_64)' },
  { type: 'system', date: 'AUTH', msg: 'Identity: xvrique recognized. Handshake initialized.' },
  { type: 'system', date: 'SYNC', msg: 'Establishing connection to decentralized node...' },
  { type: 'success', date: 'DONE', msg: 'The Architect OS v2.0 - System core operational.' },
  { type: 'success', date: 'PROT', msg: '--- TYPE /help TO START (ALL COMMANDS START WITH /) ---' },
];

export function TerminalCard() {
  const { t, language } = useLanguage()
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isBooting, setIsBooting] = useState(true)
  const [latency, setLatency] = useState(24)
  const [uptime, setUptime] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // 1. Auto-Typing Boot Sequence
  useEffect(() => {
    let currentLog = 0
    const interval = setInterval(() => {
      if (currentLog < initialBootLogs.length) {
        const logToAdd = initialBootLogs[currentLog]
        if (logToAdd) {
          setLogs(prev => [...prev, logToAdd])
        }
        currentLog++
      } else {
        setIsBooting(false)
        clearInterval(interval)
      }
    }, 800)
    return () => clearInterval(interval)
  }, [])

  // 2. Dynamic Status Bar Logic
  useEffect(() => {
    const latInterval = setInterval(() => {
      setLatency(Math.floor(Math.random() * (40 - 20 + 1) + 20))
    }, 4000)
    const upInterval = setInterval(() => setUptime(prev => prev + 1), 1000)
    return () => {
      clearInterval(latInterval)
      clearInterval(upInterval)
    }
  }, [])

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [logs])

  const addLog = (entry: LogEntry) => {
    setLogs(prev => [...prev, entry])
  }

  const fetchGitHub = async (endpoint: string) => {
    addLog({ type: 'loading', msg: '[CONNECTING] Establishing handshake with GitHub API...' })
    try {
      const res = await fetch(`https://api.github.com/users/xvrique${endpoint}`)
      if (!res.ok) throw new Error('API unstable')
      return await res.json()
    } catch (err) {
      addLog({ type: 'error', msg: '[ERROR] Connection timeout. System restricted. Try /help.' })
      return null
    }
  }

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const input = inputValue.trim()
    const cmd = input.toLowerCase()

    // Add user input to logs
    addLog({ type: 'user', msg: `Architect@OS:~$ ${input}` })
    setInputValue('')

    if (!cmd.startsWith('/')) {
      addLog({ type: 'error', msg: `Unknown protocol: ${input}. Commands must start with /` })
      return
    }

    switch (cmd) {
      case '/projects': {
        const data = await fetchGitHub('/repos?sort=updated&per_page=5')
        if (data) {
          data.forEach((repo: any) => {
            addLog({
              type: 'system',
              msg: `[REPO] ${repo.name} | ${repo.language || 'Code'} | ⭐ ${repo.stargazers_count}`,
              isLink: true,
              href: repo.html_url
            })
          })
        }
        break
      }
      case '/latest': {
        const data = await fetchGitHub('/events')
        if (data) {
          const pushEvent = data.find((e: any) => e.type === 'PushEvent')
          if (pushEvent) {
            const commit = pushEvent.payload.commits[0]
            addLog({ type: 'system', msg: `[LATEST] Repo: ${pushEvent.repo.name}` })
            addLog({ type: 'success', msg: `>> "${commit.message}"` })
          } else {
            addLog({ type: 'system', msg: '[NULL] No recent push events found.' })
          }
        }
        break
      }
      case '/stats': {
        const data = await fetchGitHub('')
        if (data) {
          addLog({ type: 'system', msg: `[USER] xvrique | Public Repos: ${data.public_repos} | Followers: ${data.followers}` })
        }
        break
      }
      case '/about':
        addLog({ type: 'system', msg: '[IDENTITY] Thoriq Najmu Tsaqib | Undergraduate CS Engineer | Flutter & Web3 Specialist.' })
        break
      case '/skripsi':
        addLog({ type: 'system', msg: '[ACADEMIC] Status: Finalizing Thesis Proposal. Focus: Mobile Data Architecture Optimization. [95% COMPLETED]' })
        break
      case '/research':
        addLog({ type: 'system', msg: '[PROTOCOL] XENØr Protocol Research. Focus: Solana Execution Layers & Incentive Frameworks.' })
        break
      case '/contact':
        addLog({ type: 'system', msg: '[CHANNELS] Digital interaction protocols active:' })
        addLog({ type: 'success', msg: '>> GitHub: github.com/xvrique', isLink: true, href: 'https://github.com/xvrique' })
        addLog({ type: 'success', msg: '>> X (Twitter): @xvrique', isLink: true, href: 'https://x.com/xvrique' })
        break
      case '/help':
        addLog({ type: 'system', msg: 'AVAILABLE COMMANDS: [/projects], [/latest], [/stats], [/about], [/skripsi], [/research], [/contact], [/clear], [/jp]' })
        break
      case '/clear':
        setLogs([])
        break
      case '/jp':
        addLog({ type: 'success', msg: '「徹底的なこだわり」(Kodawari - Extreme Devotion to Detail)' })
        break
      default:
        addLog({ type: 'error', msg: `[DENIED] Instruction sequence ${cmd} not recognized. Try /help.` })
    }
  }

  return (
    <div
      className="group relative flex flex-col h-full bg-zinc-50 dark:bg-[#050505] rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden font-mono selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-black"
      onClick={() => inputRef.current?.focus()}
    >
      {/* CRT Flicker Effect */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.04] dark:opacity-[0.06] bg-[radial-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_100%),linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-pulse" />

      {/* Terminal Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 relative z-20">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <div className="flex items-center gap-2">
          <TerminalIcon size={12} className="text-zinc-400" />
          <AnimatePresence mode="wait">
            <motion.span 
              key={language} 
              initial={{ opacity: 0, x: 5 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -5 }}
              className="text-[10px] font-black text-zinc-500 dark:text-zinc-600 uppercase tracking-[0.2em]"
            >
              {t('theArchitect')}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Main Display */}
      <div
        ref={scrollRef}
        className="flex-1 p-8 overflow-y-auto custom-scrollbar relative z-10 space-y-3 min-h-0"
      >
         {/* Architect Watermark: 建築 (Architecture) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
          <span className="text-8xl font-black">建築</span>
        </div>

        <AnimatePresence mode="popLayout">
          {logs.map((log, i) => {
            if (!log) return null
            return (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className={`text-[11px] leading-relaxed flex items-start gap-3 transition-colors group/item relative z-10
                ${log.type === 'user' ? 'text-zinc-400 dark:text-zinc-500 font-bold' : ''}
                ${log.type === 'error' ? 'text-red-500/80 dark:text-red-400/60' : ''}
                ${log.type === 'success' ? 'text-zinc-900 dark:text-zinc-100 font-black' : 'text-zinc-500 dark:text-zinc-400'}
                ${log.type === 'loading' ? 'text-zinc-400 italic animate-pulse' : ''}
              `}
              >
                {log.date && <span className="opacity-30 whitespace-nowrap text-[9px]">[{log.date}]</span>}

                {log.isLink ? (
                  <a
                    href={log.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline hover:text-zinc-900 dark:hover:text-white"
                  >
                    <span className="break-all">{log.msg}</span>
                    <ExternalLink size={10} className="shrink-0 opacity-50" />
                  </a>
                ) : (
                  <span className="break-all">{log.msg}</span>
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Input Interface */}
        {!isBooting && (
          <form onSubmit={handleCommand} className="flex items-center gap-2 mt-6 text-[11px] relative z-10">
            <span className="text-zinc-900 dark:text-zinc-200 font-black shrink-0">Architect@OS:~$</span>
            <div className="relative flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-zinc-900 dark:text-zinc-100 p-0 placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
                spellCheck={false}
                autoComplete="off"
                placeholder="Try /help..."
              />
              {!inputValue && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="absolute left-0 w-1.5 h-4 bg-zinc-900 dark:bg-zinc-100"
                />
              )}
            </div>
          </form>
        )}
      </div>

      {/* Footer Status Bar */}
      <div className="px-6 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 flex items-center justify-between text-[9px] font-black tracking-[0.2em] text-zinc-500 dark:text-zinc-600 uppercase relative z-20">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 animate-pulse" />
            <span>STATUS: <span className="text-zinc-900 dark:text-zinc-50">ONLINE</span></span>
          </div>
          <span className="hidden md:inline">UPTIME: <span className="text-zinc-900 dark:text-zinc-50">{uptime}s</span></span>
          <span className="hidden md:inline">LATENCY: <span className="text-zinc-900 dark:text-zinc-50">{latency}ms</span></span>
        </div>
        <div className="flex items-center gap-3">
          <Globe size={10} className="text-zinc-400" />
          <span>PORT: 8080</span>
        </div>
      </div>
    </div>
  )
}
