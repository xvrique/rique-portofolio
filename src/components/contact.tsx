'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { ArrowUpRight } from 'lucide-react'

// --- SVGs & Components ---

const TopographicLines = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.07] dark:opacity-[0.05] pointer-events-none transition-opacity duration-1000"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="stroke-zinc-900 dark:stroke-white"
      d="M0 100 Q 100 80, 200 100 T 400 100 M0 150 Q 120 130, 250 150 T 400 150 M0 200 Q 80 180, 180 200 T 400 200 M0 250 Q 150 230, 300 250 T 400 250 M0 300 Q 100 280, 220 300 T 400 300"
      strokeWidth="0.5"
      fill="none"
    />
  </svg>
)

export function Contact() {
  const { t, language } = useLanguage()
  const [localTime, setLocalTime] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  // Real-time clock logic
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setLocalTime(now.toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Jakarta',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Construct Mailto Link for Direct Dispatch
    const subject = encodeURIComponent(`DISPATCH from ${name} | Portfolio Inquiry`)
    const body = encodeURIComponent(
      `SENDER_IDENTITY: ${name}\n\nMISSION_PARAMETERS:\n${message}\n\n--- END OF TRANSMISSION ---`
    )
    const mailtoLink = `mailto:thoriqnajmut@gmail.com?subject=${subject}&body=${body}`

    // Trigger local email client
    window.location.href = mailtoLink

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form states
      setName('')
      setMessage('')
    }, 1500)
  }

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 bg-white dark:bg-[#050505] transition-colors duration-1000 scroll-mt-32 overflow-hidden"
    >
      {/* Background Masked Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden sm:block hidden">
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
          }}
        />
      </div>

      {/* Top and Bottom Fades */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white dark:from-[#050505] to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white dark:from-[#050505] to-transparent z-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr items-stretch">

          {/* 1. THE DIRECT DISPATCH FORM (2/3 width, 2 rows tall) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-[#FAFAFA] dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/5 rounded-2xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group shadow-sm dark:shadow-2xl transition-colors duration-1000"
          >
            <div className="relative z-10 space-y-12">
              <div className="flex flex-col gap-12">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-600 font-mono">
                  {language === 'jp' ? '連絡先' : 'CONTACT_PROTOCOL'}
                </span>
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={language}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] max-w-lg uppercase pt-4"
                  >
                    <span className="text-zinc-900 dark:text-white">
                      {language === 'jp' ? '最高の結果を、' : "Let's build something "}
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-800 transition-colors duration-700">
                      {language === 'jp' ? '共に。' : 'exceptional'}
                    </span>
                  </motion.h2>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-10"
                  >
                    <div className="space-y-6">
                      <div className="group relative">
                        <label className="block text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500 group-focus-within:text-zinc-900 dark:group-focus-within:text-white transition-colors duration-500 uppercase">
                          {language === 'jp' ? '01_お名前' : '01_IDENTITY'}
                        </label>
                        <input
                          required
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={language === 'jp' ? '名前を入力してください' : 'NAME / AGENT'}
                          className="w-full bg-transparent border-b border-zinc-200 dark:border-white/20 py-4 text-sm font-medium text-zinc-900 dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-800 focus:outline-none focus:border-zinc-950 dark:focus:border-white transition-all duration-500 tracking-wider"
                        />
                      </div>
                      <div className="group relative">
                        <label className="block text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500 group-focus-within:text-zinc-900 dark:group-focus-within:text-white transition-colors duration-500 uppercase">
                          {language === 'jp' ? '02_メッセージ' : '02_MESSAGE'}
                        </label>
                        <textarea
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={3}
                          placeholder={language === 'jp' ? 'メッセージを入力してください' : 'MISSION PARAMETERS / INQUIRY'}
                          className="w-full bg-transparent border-b border-zinc-200 dark:border-white/20 py-4 text-sm font-medium text-zinc-900 dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-800 focus:outline-none focus:border-zinc-950 dark:focus:border-white transition-all duration-500 tracking-wider resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border border-zinc-200 dark:border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 dark:text-white hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 group/btn"
                    >
                      {isSubmitting
                        ? (language === 'jp' ? '送信中...' : 'DISPATCHING...')
                        : (language === 'jp' ? 'メッセージを送信する ↗' : 'Send Dispatch ↗')}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center md:text-left space-y-6"
                  >
                    <div className="text-zinc-900 dark:text-white text-4xl font-bold tracking-tighter uppercase">TRANSMISSION_SUCCESS</div>
                    <p className="text-zinc-500 text-xs font-mono tracking-widest leading-relaxed max-w-xs">
                      {language === 'jp' ? 'ハンドシェイク完了。応答シーケンス初期化済み。' : 'Handshake complete. Response sequence initialized.'}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-all border-b border-transparent hover:border-zinc-900 dark:hover:border-white pb-1"
                    >
                      {language === 'jp' ? '新しく送信する' : 'New Dispatch'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* 2. THE STATUS NODE (1/3 width, Square-ish) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FAFAFA] dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group transition-colors duration-1000 min-h-[150px] md:min-h-0"
          >

            {/* Kanji Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.02] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-1000">
              <span className="text-[10rem] md:text-[14rem] font-bold select-none leading-none text-zinc-900 dark:text-white">受付中</span>
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-500">{language === 'jp' ? '状態' : 'STATUS'}</span>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-white animate-pulse shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>

            <div className="relative z-10 space-y-4 pt-12">
              <div className="space-y-1">
                <span className="text-xs font-bold text-zinc-900 dark:text-white tracking-widest uppercase">{language === 'jp' ? 'アクティブ・ノード' : 'NODE_ACTIVE'}</span>
                <p className="text-[10px] text-zinc-500 font-medium tracking-[0.2em] uppercase leading-relaxed">
                  {language === 'jp' ? '新しい案件を受け付けています' : 'Available for new challenges'}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-white/10">
                <p className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mb-2">{language === 'jp' ? '直接連絡' : 'DIRECT_HIRE'}</p>
                <a
                  href="mailto:thoriqnajmut@gmail.com"
                  className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-zinc-200 dark:decoration-zinc-800"
                >
                  thoriqnajmut@gmail.com
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 3. SPACE & TIME (1/3 width, below Status, Square-ish) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#FAFAFA] dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group transition-colors duration-1000 min-h-[150px] md:min-h-0"
          >
            {/* Kanji Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.02] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-1000">
              <span className="text-[10rem] md:text-[14rem] font-bold select-none leading-none text-zinc-900 dark:text-white">時空</span>
            </div>

            {/* Topographic Lines */}
            <TopographicLines />

            <div className="relative z-10">
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-500">{language === 'jp' ? '時標' : 'SPACE & TIME'}</span>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-zinc-900 dark:text-white tracking-widest uppercase">Base: Bandung, ID</p>
                <p className="text-[8px] text-zinc-500 font-mono tracking-widest uppercase">UTC+7_BANDUNG</p>
              </div>
              <div className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">
                {localTime || '00:00:00'}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
