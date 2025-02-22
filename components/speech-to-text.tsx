"use client"

import { useState } from 'react'

interface SpeechToTextProps {
  onTranscript: (text: string) => void
  language: string
}

export function SpeechToText({ onTranscript, language }: SpeechToTextProps) {
  const [isListening, setIsListening] = useState(false)

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser')
      return
    }

    const recognition = new (window as any).webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = language

    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => setIsListening(false)
    recognition.onerror = () => setIsListening(false)
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      onTranscript(transcript)
    }

    recognition.start()
  }

  return (
    <button
      onClick={startListening}
      disabled={isListening}
      className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 
                dark:hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
      title="Click to speak"
    >
      {isListening ? "🎤 Listening..." : "🎤"}
    </button>
  )
} 