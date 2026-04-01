import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SpeedInsights } from '@vercel/speed-insights/next'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/context/LanguageContext'
import { ScrollToTop } from '@/components/scroll-to-top'

export const metadata: Metadata = {
  title: 'Rique Portfolio',
  description: 'Mobile & Full-Stack Developer | The Architect',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300 selection:bg-neon-purple/30 selection:text-neon-purple`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <ScrollToTop />
            {/* Bento Grid Background Layer */}
            <div className="fixed inset-0 bg-grid-pattern dark:bg-grid-pattern-dark pointer-events-none -z-10" />

            <div className="relative flex flex-col min-h-screen">
              <Navbar />

              <main className="flex-grow pt-32 pb-16 px-6 relative z-10 transition-all duration-500">
                {children}
              </main>

              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
