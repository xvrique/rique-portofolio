import type { TimelineEntry } from '@/types'

export const getTimelineEntries = (language: string): TimelineEntry[] => [
  {
    id: 'thesis-solana',
    title: language === 'jp' ? '卒業論文 & AIセキュリティ' : 'Undergraduate Thesis & AI Security',
    organization: language === 'jp' ? 'ソラナリサーチ' : 'Solana Research',
    period: language === 'jp' ? '2025 — 現在' : '2025 — Present',
    category: 'research',
    status: 'active',
    iconType: 'research',
    description: language === 'jp' 
      ? 'XGBoostとXAI（SHAP TreeExplainer）を用いた10万以上のSolana DEXプールにおける悪意ある流動性パターン（ラグプル検知）のモデリング。'
      : 'Modeling malicious liquidity patterns (rug-pull detection) across 100,000+ Solana DEX pools using XGBoost and Explainable AI (SHAP TreeExplainer).',
    tags: language === 'jp' ? ['XGBoost', 'SHAP', 'Solana', 'Python', 'オンチェーン'] : ['XGBoost', 'SHAP', 'Solana', 'Python', 'On-Chain'],
  },
  {
    id: 'kenzan-defi',
    title: language === 'jp' ? 'DeFiアーキテクチャ & プロトコルシステム' : 'DeFi Architecture & Protocol Systems',
    organization: language === 'jp' ? 'ケンザンファイナンス' : 'Kenzan Finance',
    period: language === 'jp' ? '2024 — 現在' : '2024 — Present',
    category: 'engineering',
    status: 'active',
    iconType: 'code',
    description: language === 'jp'
      ? 'Solana DeFiエコシステム向けの高級感のあるミニマリストな金融ダッシュボードと高精度な利回り追跡インターフェースの設計。'
      : 'Architected luxury-minimalist financial dashboard and high-precision yield tracking interface for Solana DeFi ecosystem.',
    tags: ['Solana', 'Rust', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'pondasi-mobile',
    title: language === 'jp' ? 'モバイルアーキテクチャエンジニア' : 'Mobile Architecture Engineer',
    organization: language === 'jp' ? 'ポンダシ財団 / APII' : 'Pondasi Foundation / APII',
    period: '2024 — 2025',
    category: 'engineering',
    status: 'completed',
    iconType: 'work',
    description: language === 'jp'
      ? 'Flutter、Firebase、オフラインファーストの状態同期を用いた、幼児発育のためのクロスプラットフォームモバイル報告システムの開発。'
      : 'Engineered cross-platform mobile reporting systems for early childhood development with Flutter, Firebase, and offline-first state synchronization.',
    tags: language === 'jp' ? ['Flutter', 'Firebase', '状態管理', 'Dart', 'Android/iOS'] : ['Flutter', 'Firebase', 'State Mgmt', 'Dart', 'Android/iOS'],
  },
  {
    id: 'blocksage-hub',
    title: language === 'jp' ? '自律型リスクインテリジェンスハブ' : 'Autonomous Risk Intelligence Hub',
    organization: language === 'jp' ? 'ブロックセージネットワーク' : 'BlockSage Network',
    period: '2024',
    category: 'engineering',
    status: 'completed',
    iconType: 'work',
    description: language === 'jp'
      ? 'Solana/EVM向けの自律型リスク評価インターフェース、インサイダーウォレット追跡アルゴリズム、ゲーミフィケーション教育ポイントパイプラインの構築。'
      : 'Built autonomous risk evaluation interfaces, insider wallet tracking algorithms, and gamified education points pipeline for Solana/EVM.',
    tags: ['Web3.js', 'EVM', 'Rust', 'Next.js'],
  },
  {
    id: 'xenor-oss',
    title: language === 'jp' ? 'コアメンテナー & オープンソースシステム' : 'Core Maintainer & Open Source Systems',
    organization: language === 'jp' ? 'XENØR プロジェクト & GitHub OSS' : 'XENØR Project & GitHub OSS',
    period: language === 'jp' ? '2023 — 現在' : '2023 — Present',
    category: 'engineering',
    status: 'active',
    iconType: 'code',
    description: language === 'jp'
      ? '高性能なReact/Next.jsコンポーネントアーキテクチャ、Framer Motionのマイクロインタラクションツールキット、オープンソースユーティリティモジュールの作成。'
      : 'Authoring performant React/Next.js component architectures, Framer Motion micro-interaction toolkits, and open-source utility modules.',
    tags: language === 'jp' ? ['TypeScript', 'Framer Motion', 'React', 'デザインシステム'] : ['TypeScript', 'Framer Motion', 'React', 'Design Systems'],
  },
  {
    id: 'academic-cs',
    title: language === 'jp' ? 'コンピュータサイエンス学士' : 'B.S. in Computer Science',
    organization: 'Xenor Works',
    period: '2021 — 2025',
    category: 'education',
    status: 'completed',
    iconType: 'education',
    description: language === 'jp'
      ? '分散システム、人工知能、モバイルソフトウェアエンジニアリングを専攻。高影響度のWeb3セキュリティに焦点を当てた卒論審査の準備完了。'
      : 'Specialized in Distributed Systems, Artificial Intelligence, and Mobile Software Engineering. Thesis defense ready with high-impact Web3 security focus.',
    tags: language === 'jp' ? ['アルゴリズム', '分散システム', 'ネットワーク', '機械学習'] : ['Algorithms', 'Distributed Systems', 'Networks', 'Machine Learning'],
  },
  {
    id: 'peer-mentor',
    title: language === 'jp' ? '技術メンター（モバイル & アルゴリズム）' : 'Technical Mentor (Mobile & Algorithms)',
    organization: 'Developer Student Circles',
    period: '2023 — 2024',
    category: 'education',
    status: 'completed',
    iconType: 'education',
    description: language === 'jp'
      ? 'Dartの基礎、Flutterのクリーンな状態管理パターン、アルゴリズムによる問題解決において学生開発者を指導。'
      : 'Mentored student developers in Dart fundamentals, Flutter clean state management patterns, and algorithmic problem solving.',
    tags: language === 'jp' ? ['メンターシップ', 'Flutter', 'データ構造'] : ['Mentorship', 'Flutter', 'Data Structures'],
  },
]
