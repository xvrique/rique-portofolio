import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

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
    icon: '/images/logos/light-logo.png',
    shortcut: '/images/logos/light-logo.png',
    apple: '/images/logos/light-logo.png',
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300 selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <ScrollToTop />
            {/* Theme-Aware Background Grid Pattern */}
            <div 
              className="fixed inset-0 bg-grid-pattern pointer-events-none -z-10"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
              }}
            />
            {/* Fixed Viewport Noise/Grain Overlay (OS Tactile Aesthetic) */}
            <div className="fixed inset-0 bg-noise opacity-[0.035] dark:opacity-[0.04] pointer-events-none z-[99]" />

            <div className="relative flex flex-col min-h-screen">
              <Navbar />

              <main className="flex-grow pt-32 pb-16 px-6 relative z-10 transition-all duration-500">
                {children}
              </main>

              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
