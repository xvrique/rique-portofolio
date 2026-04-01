'use client'

import { useEffect } from 'react'

export function ScrollToTop() {
  useEffect(() => {
    // Force scroll to top on refresh/initial load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
    
    // Clear hash from URL to prevent future jumps on refresh
    if (window.location.hash) {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search)
    }
  }, [])

  return null
}
