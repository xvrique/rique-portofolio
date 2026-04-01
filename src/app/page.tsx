import React from 'react'
import { getGithubRepos } from '@/lib/github'
import { HeroSection } from '@/components/hero-section'
import { BentoGrid } from '@/components/bento-grid'
import { Contact } from '@/components/contact'

export default async function Home() {
  // Fetch repos on the server with ISR (revalidate: 3600 is handled in getGithubRepos fetch)
  const repositories = await getGithubRepos('xvrique')

  return (
    <div className="flex flex-col">
      <HeroSection />
      <BentoGrid repositories={repositories} />
      <Contact />
    </div>
  )
}
