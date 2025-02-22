"use client"

interface TextToSpeechProps {
  text: string
  language: string
}

export function TextToSpeech({ text, language }: TextToSpeechProps) {
  const speak = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in this browser')
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = language
    window.speechSynthesis.speak(utterance)
  }

  return (
    <button
      onClick={speak}
      disabled={!text}
      className="p-2 rounded-full bg-green-100 hover:bg-green-200 dark:bg-green-900 
                dark:hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
      title="Click to listen"
    >
      🔊
    </button>
  )
} 