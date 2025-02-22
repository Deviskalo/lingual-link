"use client"

import { useEffect } from 'react'

export function useTranslationEvent(callback: () => void) {
  useEffect(() => {
    const handleTranslationComplete = () => {
      callback()
    }

    window.addEventListener('translation-complete', handleTranslationComplete)
    return () => {
      window.removeEventListener('translation-complete', handleTranslationComplete)
    }
  }, [callback])
} 