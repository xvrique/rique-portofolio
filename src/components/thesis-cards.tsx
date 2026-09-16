'use client'

import React from 'react'
import { ShieldAlert, Database, Cpu, FileText, CheckCircle2 } from 'lucide-react'
import { clsx } from 'clsx'
import { SpotlightCard } from './ui/spotlight-card'
import { useLanguage } from '@/context/LanguageContext'

export function ThesisOverviewCard() {
  const { language } = useLanguage()

  return (
    <SpotlightCard className={clsx('h-full', 'min-h-[360px]', 'p-6', 'md:p-8', 'flex', 'flex-col', 'justify-between')}>
      <div className="space-y-6">
        <div className={clsx('flex', 'items-start', 'justify-between', 'gap-4')}>
          <div className={clsx('flex', 'flex-col', 'gap-1')}>
             <div className={clsx('flex', 'items-center', 'gap-2', 'text-zinc-400', 'dark:text-zinc-500', 'font-sans', 'text-xs', 'font-semibold', 'uppercase', 'tracking-widest')}>
               <FileText size={14} />
               <span>{language === 'jp' ? '学部研究 & 卒業論文' : 'Undergraduate Research & Thesis'}</span>
             </div>
             <div className={clsx('flex', 'items-center', 'gap-2', 'text-zinc-500', 'dark:text-zinc-400', 'font-sans', 'text-[10px]')}>
               <CheckCircle2 size={13} className={clsx('text-emerald-600', 'dark:text-emerald-400')} />
               <span className="font-medium">{language === 'jp' ? '論文発表準備完了' : 'Thesis Defense Ready'}</span>
             </div>
          </div>
          <span className={clsx('text-[11px]', 'font-mono', 'text-zinc-400', 'dark:text-zinc-500', 'whitespace-nowrap')}>2025 — 2026</span>
        </div>

        <div className={clsx('space-y-3', 'max-w-3xl')}>
          <h3 className={clsx('text-xl', 'sm:text-2xl', 'md:text-3xl', 'font-semibold', 'text-zinc-900', 'dark:text-zinc-100', 'tracking-tight', 'leading-snug')}>
            {language === 'jp'
              ? 'XGBoostとSHAPを用いたSolanaにおける不正な流動性引き抜きの検知'
              : 'Detecting Malicious Liquidity Removal on Solana using XGBoost and SHAP'}
          </h3>

          <div className={clsx('pt-2', 'font-sans', 'text-xs', 'text-zinc-500', 'dark:text-zinc-400', 'leading-relaxed')}>
            <span className={clsx('text-zinc-400', 'dark:text-zinc-500', 'block', 'font-medium', 'text-[10px]', 'uppercase', 'tracking-wider', 'mb-1')}>
              {language === 'jp' ? '研究題目' : 'Research Title'}
            </span>
            {language === 'jp'
              ? '「オンチェーン特徴量に基づくXGBoostおよびSHAPアルゴリズムを用いたSolanaネットワーク上の疑わしい取引パターンのモデリング」'
              : '&quot;Modeling Suspicious Transaction Patterns on the Solana Network Using XGBoost and SHAP Algorithms Based on On-Chain Features&quot;'}
          </div>

          <p className={clsx('text-zinc-600', 'dark:text-zinc-400', 'text-sm', 'leading-relaxed', 'font-normal')}>
            {language === 'jp'
              ? '分散型取引所全体における高頻度トークン流動性動作と不正な枯渇パターン（ラグプル）をモデリングする実証研究。勾配ブースティングとシャープレイ値の貢献度を組み合わせることで、DeFiプロトコル向けに透明性の高いリスクスコアリングを提供します。'
              : 'An empirical study modeling high-frequency token liquidity behaviors and fraudulent drain patterns (rug pulls) across decentralized exchanges. By combining gradient boosting with Shapley value attributions, this research delivers transparent, human-auditable risk scoring for DeFi protocols.'}
          </p>
        </div>
      </div>

      <div className={clsx('flex', 'flex-wrap', 'items-center', 'gap-4', 'pt-6', 'mt-6', 'border-t', 'border-zinc-200/50', 'dark:border-white/5', 'text-xs', 'text-zinc-500', 'dark:text-zinc-400', 'font-sans')}>
        <div>
          <span className={clsx('text-zinc-400', 'dark:text-zinc-500')}>{language === 'jp' ? '対象: ' : 'Target: '}</span>
          <strong className={clsx('text-zinc-800', 'dark:text-zinc-200', 'font-medium')}>{language === 'jp' ? 'Solana DEX プール' : 'Solana DEX Pools'}</strong>
        </div>
        <span>•</span>
        <div>
          <span className={clsx('text-zinc-400', 'dark:text-zinc-500')}>{language === 'jp' ? '分類器: ' : 'Classifier: '}</span>
          <strong className={clsx('text-zinc-800', 'dark:text-zinc-200', 'font-medium')}>XGBoost & LightGBM</strong>
        </div>
        <span>•</span>
        <div>
          <span className={clsx('text-zinc-400', 'dark:text-zinc-500')}>{language === 'jp' ? '解釈可能性: ' : 'Interpretability: '}</span>
          <strong className={clsx('text-zinc-800', 'dark:text-zinc-200', 'font-medium')}>SHAP (TreeExplainer)</strong>
        </div>
      </div>
    </SpotlightCard>
  )
}

export function ThesisMetricsCard() {
  const { language } = useLanguage()

  return (
    <SpotlightCard className={clsx('h-full', 'min-h-[360px]', 'p-6', 'md:p-8', 'flex', 'flex-col', 'justify-between')}>
      <div className="space-y-6">
        <div className={clsx('flex', 'items-center', 'justify-between', 'text-zinc-700', 'dark:text-zinc-300')}>
          <span className={clsx('text-[10px]', 'font-sans', 'font-semibold', 'uppercase', 'tracking-widest', 'text-zinc-400', 'dark:text-zinc-500')}>
            {language === 'jp' ? '脅威景観' : 'Threat Landscape'}
          </span>
          <ShieldAlert size={16} className="text-zinc-400" />
        </div>

        <div className="space-y-1.5">
          <h3 className={clsx('text-lg', 'font-bold', 'text-zinc-900', 'dark:text-zinc-100', 'tracking-tight')}>
            {language === 'jp' ? 'ラグプル（悪意ある流動性引き抜き）の蔓延' : 'Rug Pull Epidemic'}
          </h3>
          <p className={clsx('text-zinc-500', 'dark:text-zinc-400', 'text-xs', 'leading-relaxed', 'font-normal')}>
            {language === 'jp'
              ? '新規生成されたトークンプールにおける急激な流動性引き抜き（作成から数時間以内）。'
              : 'Rapid liquidity drain on newly deployed token pools, often within hours of creation.'}
          </p>
        </div>

        {/* Clean Data Stack */}
        <div className={clsx('space-y-3', 'pt-2', 'text-xs', 'font-sans')}>
          <div className={clsx('flex', 'justify-between', 'items-center', 'border-b', 'border-zinc-100', 'dark:border-white/5', 'pb-2')}>
            <span className={clsx('text-zinc-500', 'dark:text-zinc-400')}>{language === 'jp' ? 'サンプルプール数' : 'Sample Pools'}</span>
            <span className={clsx('text-zinc-900', 'dark:text-zinc-100', 'font-medium', 'font-mono')}>100,000+</span>
          </div>
          <div className={clsx('flex', 'justify-between', 'items-center', 'border-b', 'border-zinc-100', 'dark:border-white/5', 'pb-2')}>
            <span className={clsx('text-zinc-500', 'dark:text-zinc-400')}>{language === 'jp' ? 'プール平均寿命' : 'Pool Lifespan'}</span>
            <span className={clsx('text-zinc-900', 'dark:text-zinc-100', 'font-medium', 'font-mono')}>&lt; 6 Hours</span>
          </div>
          <div className={clsx('flex', 'justify-between', 'items-center', 'border-b', 'border-zinc-100', 'dark:border-white/5', 'pb-2')}>
            <span className={clsx('text-zinc-500', 'dark:text-zinc-400')}>{language === 'jp' ? '不正・疑わしい割合' : 'Suspicious Rate'}</span>
            <span className={clsx('text-zinc-900', 'dark:text-zinc-100', 'font-medium', 'font-mono')}>~78.4%</span>
          </div>
          <div className={clsx('flex', 'justify-between', 'items-center', 'pt-1')}>
            <span className={clsx('text-zinc-500', 'dark:text-zinc-400')}>{language === 'jp' ? 'モデル精度' : 'Model Accuracy'}</span>
            <span className={clsx('text-emerald-600', 'dark:text-emerald-400', 'font-medium', 'font-mono')}>94.8% F1</span>
          </div>
        </div>
      </div>
    </SpotlightCard>
  )
}

export function ThesisDataCard() {
  const { language } = useLanguage()

  const tags = language === 'jp'
    ? ['LPトークンバーン率', '作成者保有率 %', 'ミント権限放棄済', '初期流動性 USD']
    : ['LP Token Burn Rate', 'Creator Token %', 'Mint Authority Revoked', 'Initial Liquidity USD']

  return (
    <SpotlightCard className={clsx('h-full', 'min-h-[340px]', 'p-6', 'md:p-8', 'flex', 'flex-col', 'justify-between')}>
      <div className="space-y-6">
        <div className={clsx('flex', 'items-center', 'justify-between', 'text-zinc-700', 'dark:text-zinc-300')}>
          <span className={clsx('text-[10px]', 'font-sans', 'font-semibold', 'uppercase', 'tracking-widest', 'text-zinc-400', 'dark:text-zinc-500')}>
            {language === 'jp' ? 'データエンジニアリング' : 'Data Engineering'}
          </span>
          <Database size={16} className="text-zinc-400" />
        </div>

        <div className="space-y-1.5">
          <h3 className={clsx('text-lg', 'md:text-xl', 'font-bold', 'text-zinc-900', 'dark:text-zinc-100', 'tracking-tight')}>
            {language === 'jp' ? 'パイプライン & 特徴量抽出' : 'Pipeline & Feature Extraction'}
          </h3>
          <p className={clsx('text-zinc-500', 'dark:text-zinc-400', 'text-xs', 'md:text-sm', 'leading-relaxed', 'font-normal')}>
            {language === 'jp'
              ? 'Solana RPCノードから直接高粒度の取引ログを抽出し、時系列の流動性特徴量を処理。'
              : 'Extracted high-granularity transaction logs directly from Solana RPC nodes and processed time-series liquidity features.'}
          </p>
        </div>

        <div className={clsx('grid', 'grid-cols-2', 'gap-4', 'pt-2')}>
          <div className={clsx('p-3', 'rounded-xl', 'bg-zinc-50', 'dark:bg-zinc-900/50', 'border', 'border-zinc-200/50', 'dark:border-white/5')}>
            <div className={clsx('text-[10px]', 'text-zinc-400', 'uppercase', 'tracking-wider', 'font-medium', 'mb-1')}>
              {language === 'jp' ? '生データ' : 'Raw Data'}
            </div>
            <div className={clsx('text-xs', 'font-medium', 'text-zinc-800', 'dark:text-zinc-200')}>Bitquery / RPC Nodes</div>
          </div>
          <div className={clsx('p-3', 'rounded-xl', 'bg-zinc-50', 'dark:bg-zinc-900/50', 'border', 'border-zinc-200/50', 'dark:border-white/5')}>
            <div className={clsx('text-[10px]', 'text-zinc-400', 'uppercase', 'tracking-wider', 'font-medium', 'mb-1')}>
              {language === 'jp' ? 'データ処理' : 'Processing'}
            </div>
            <div className={clsx('text-xs', 'font-medium', 'text-zinc-800', 'dark:text-zinc-200')}>Python, Pandas</div>
          </div>
          <div className={clsx('p-3', 'rounded-xl', 'bg-zinc-50', 'dark:bg-zinc-900/50', 'border', 'border-zinc-200/50', 'dark:border-white/5', 'col-span-2')}>
            <div className={clsx('text-[10px]', 'text-zinc-400', 'uppercase', 'tracking-wider', 'font-medium', 'mb-1')}>
              {language === 'jp' ? '主要な抽出特徴量' : 'Key Features Engineered'}
            </div>
            <div className={clsx('flex', 'flex-wrap', 'gap-1.5', 'mt-1.5')}>
              {tags.map(tag => (
                <span key={tag} className={clsx('px-2', 'py-0.5', 'bg-white', 'dark:bg-zinc-800', 'border', 'border-zinc-200', 'dark:border-zinc-700', 'rounded-md', 'text-[10px]', 'text-zinc-600', 'dark:text-zinc-300')}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  )
}

export function ThesisModelCard() {
  const { language } = useLanguage()

  return (
    <SpotlightCard className={clsx('h-full', 'min-h-[340px]', 'p-6', 'md:p-8', 'flex', 'flex-col', 'justify-between')}>
      <div className="space-y-6">
        <div className={clsx('flex', 'items-center', 'justify-between', 'text-zinc-700', 'dark:text-zinc-300')}>
          <span className={clsx('text-[10px]', 'font-sans', 'font-semibold', 'uppercase', 'tracking-widest', 'text-zinc-400', 'dark:text-zinc-500')}>
            {language === 'jp' ? '説明可能AI' : 'Explainable AI'}
          </span>
          <Cpu size={16} className="text-zinc-400" />
        </div>

        <div className="space-y-1.5">
          <h3 className={clsx('text-lg', 'md:text-xl', 'font-bold', 'text-zinc-900', 'dark:text-zinc-100', 'tracking-tight')}>
            {language === 'jp' ? 'SHAPによる解釈可能性' : 'SHAP Interpretability'}
          </h3>
          <p className={clsx('text-zinc-500', 'dark:text-zinc-400', 'text-xs', 'md:text-sm', 'leading-relaxed', 'font-normal')}>
            {language === 'jp'
              ? '勾配ブースティングの「ブラックボックス」を解明。SHAP値により、どのオンチェーン行動がプールリスクスコアに寄与しているかを明確に可視化。'
              : 'Demystifying the &quot;black box&quot; of gradient boosting. SHAP values reveal exactly which on-chain behaviors contribute to a pool&apos;s risk score.'}
          </p>
        </div>

        <div className={clsx('relative', 'h-32', 'w-full', 'rounded-xl', 'overflow-hidden', 'bg-zinc-50', 'dark:bg-zinc-900/30', 'border', 'border-zinc-200/50', 'dark:border-white/5', 'p-4', 'flex', 'flex-col', 'justify-center', 'gap-3')}>
          <div className="space-y-1">
            <div className={clsx('flex', 'justify-between', 'text-[10px]', 'text-zinc-500')}>
              <span>LP_Burn_Percentage</span>
              <span className="text-emerald-500">{language === 'jp' ? '低リスク' : 'Low Risk'}</span>
            </div>
            <div className={clsx('w-full', 'h-1.5', 'bg-zinc-200', 'dark:bg-zinc-800', 'rounded-full', 'overflow-hidden')}>
              <div className={clsx('h-full', 'bg-emerald-500', 'w-[85%]')} />
            </div>
          </div>
          <div className="space-y-1">
            <div className={clsx('flex', 'justify-between', 'text-[10px]', 'text-zinc-500')}>
              <span>Creator_Holding_Ratio</span>
              <span className="text-red-500">{language === 'jp' ? '高リスク' : 'High Risk'}</span>
            </div>
            <div className={clsx('w-full', 'h-1.5', 'bg-zinc-200', 'dark:bg-zinc-800', 'rounded-full', 'overflow-hidden', 'flex', 'justify-end')}>
              <div className={clsx('h-full', 'bg-red-500', 'w-[90%]')} />
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  )
}
