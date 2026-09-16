'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { ArrowUpRight, CheckCircle2, Clock, Globe } from 'lucide-react'
import { SpotlightCard } from './ui/spotlight-card'
import { MagneticButton } from './ui/magnetic-button'

export function ContactFormCard() {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}\n`)
    const mailtoLink = `mailto:thoriqnajmut@gmail.com?subject=${subject}&body=${body}`

    window.location.href = mailtoLink

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setName('')
      setMessage('')
    }, 1000)
  }

  return (
    <SpotlightCard id="contact" className="h-full p-8 md:p-12 flex flex-col justify-between relative overflow-hidden scroll-mt-32">
      <div className="relative z-10 space-y-10">
        <div className="space-y-4">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            {language === 'jp' ? 'お問い合わせ' : 'Get in Touch'}
          </span>
          <AnimatePresence mode="wait">
            <motion.h2
              key={language}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              {language === 'jp' ? (
                <>最高の結果を、<span className="text-zinc-400 dark:text-zinc-600">共に創る。</span></>
              ) : (
                <>Let&apos;s build something <span className="text-zinc-400 dark:text-zinc-600">exceptional together.</span></>
              )}
            </motion.h2>
          </AnimatePresence>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-lg font-normal">
            {language === 'jp'
              ? '新しいプロジェクトのご相談やエンジニアリングについて、お気軽にご連絡ください。'
              : 'Have a project in mind or want to discuss engineering and architecture? Feel free to reach out directly.'}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    {language === 'jp' ? 'お名前' : 'Your Name'}
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'jp' ? 'お名前を入力してください' : 'John Doe'}
                    className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    {language === 'jp' ? 'メッセージ' : 'Your Message'}
                  </label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder={
                      language === 'jp'
                        ? 'メッセージを入力してください...'
                        : 'Tell me about your project, timeline, or goals...'
                    }
                    className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all resize-none"
                  />
                </div>
              </div>

              <MagneticButton strength={0.15}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-colors disabled:opacity-50 min-h-[44px]"
                >
                  {isSubmitting
                    ? (language === 'jp' ? '送信中...' : 'Sending...')
                    : (language === 'jp' ? 'メッセージを送信' : 'Send Message')}
                </button>
              </MagneticButton>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="py-10 space-y-4"
            >
              <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={24} />
                <h3 className="text-xl font-bold font-sans text-zinc-900 dark:text-zinc-100">
                  {language === 'jp' ? '送信が完了しました' : 'Message Sent'}
                </h3>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
                {language === 'jp'
                  ? 'ご連絡ありがとうございます。内容を確認のうえ、折り返しご連絡いたします。'
                  : 'Thank you for reaching out. I have received your note and will get back to you shortly.'}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 pt-2"
              >
                {language === 'jp' ? '別のメッセージを送る' : 'Send another note'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SpotlightCard>
  )
}

export function AvailabilityCard() {
  const { language } = useLanguage()
  
  return (
    <SpotlightCard className="h-full p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
      {/* Faint Kanji Watermark: 接続 (Connect) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] dark:opacity-[0.025] pointer-events-none select-none overflow-hidden">
        <span className="text-[12rem] font-bold text-zinc-900 dark:text-zinc-100 leading-none">
          接続
        </span>
      </div>

      <div className="relative z-10 flex justify-between items-center pb-4 border-b border-zinc-200/50 dark:border-white/5">
        <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {language === 'jp' ? 'ステータス' : 'Availability'}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{language === 'jp' ? '利用可能' : 'Available'}</span>
        </span>
      </div>

      <div className="relative z-10 space-y-3 py-6">
        <h4 className="text-base font-bold font-sans text-zinc-900 dark:text-zinc-100">
          {language === 'jp' ? '新しいチャレンジを歓迎' : 'Open for New Challenges'}
        </h4>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {language === 'jp'
            ? 'フリーランス、フルタイム、Web3/モバイルの技術コンサルティングを受け付けています。'
            : 'Currently considering select engineering roles, contract work, and technical advisory in Mobile & Web3.'}
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-zinc-200/50 dark:border-white/5">
        <span className="block text-[10px] font-medium text-zinc-400 dark:text-zinc-500 mb-1">
          {language === 'jp' ? '直接メール' : 'Direct Email'}
        </span>
        <a
          href="mailto:thoriqnajmut@gmail.com"
          className="text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center gap-1"
        >
          thoriqnajmut@gmail.com
          <ArrowUpRight size={13} />
        </a>
      </div>
    </SpotlightCard>
  )
}

export function LocationCard() {
  const { language } = useLanguage()
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setLocalTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <SpotlightCard className="h-full p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
      {/* Faint Kanji Watermark: 時空 (Space & Time) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] dark:opacity-[0.025] pointer-events-none select-none overflow-hidden">
        <span className="text-[12rem] font-bold text-zinc-900 dark:text-zinc-100 leading-none">
          時空
        </span>
      </div>

      <div className="relative z-10 flex justify-between items-center pb-4 border-b border-zinc-200/50 dark:border-white/5">
        <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {language === 'jp' ? '所在地・時間' : 'Location & Time'}
        </span>
        <Clock size={14} className="text-zinc-400" />
      </div>

      <div className="relative z-10 space-y-4 py-4">
        <div>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 block font-medium">
            {language === 'jp' ? '拠点' : 'Base'}
          </span>
          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {language === 'jp' ? 'インドネシア、バンドン' : 'Bandung, Indonesia'}
          </span>
          <span className="block text-[11px] text-zinc-400 dark:text-zinc-500">
            {language === 'jp' ? 'インドネシア西部標準時 (UTC+7)' : 'Western Indonesia Time (UTC+7)'}
          </span>
        </div>

        <div className="pt-2">
          <span className="text-xs text-zinc-400 dark:text-zinc-500 block font-medium">
            {language === 'jp' ? '現地時間' : 'Local Time'}
          </span>
          <div className="text-2xl md:text-3xl font-mono font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
            {localTime || '12:00:00'}
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-4 border-t border-zinc-200/50 dark:border-white/5 flex items-center gap-2 text-[11px] text-zinc-400">
        <Globe size={13} />
        <span>{language === 'jp' ? 'リモート / 世界中とのコラボレーション' : 'Remote / Worldwide Collaboration'}</span>
      </div>
    </SpotlightCard>
  )
}
