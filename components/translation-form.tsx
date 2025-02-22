"use client"

import { useState } from "react"
import { LanguageSelector } from "./language-selector"
import { CopyButton } from "./copy-button"
import { SpeechToText } from "./speech-to-text"
import { TextToSpeech } from "./text-to-speech"
import { Toast } from "./toast"

interface TranslationFormProps {
  onTranslationComplete?: () => void;
}

export function TranslationForm({ onTranslationComplete }: TranslationFormProps) {
  const [sourceText, setSourceText] = useState("")
  const [translatedText, setTranslatedText] = useState("")
  const [sourceLang, setSourceLang] = useState("en")
  const [targetLang, setTargetLang] = useState("es")
  const [isLoading, setIsLoading] = useState(false)
  const [isAutoDetecting, setIsAutoDetecting] = useState(false)
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null)

  async function handleTranslate() {
    if (!sourceText.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: sourceText,
          sourceLang,
          targetLang,
        }),
      })
      
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Translation failed')
      }
      
      if (!data.translation) {
        throw new Error('Invalid response from server')
      }

      setTranslatedText(data.translation)
      setToast({
        message: "Translation successful!",
        type: "success"
      })
      
      window.dispatchEvent(new CustomEvent('translation-complete'))
    } catch (error) {
      console.error("Translation error:", error)
      setToast({
        message: error instanceof Error ? error.message : "Translation failed. Please try again.",
        type: "error"
      })
      setTranslatedText('')
    } finally {
      setIsLoading(false)
    }
  }

  async function detectLanguage(text: string) {
    if (!text.trim()) return

    setIsAutoDetecting(true)
    try {
      const response = await fetch("/api/detect-language", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })
      const { language } = await response.json()
      setSourceLang(language)
    } catch (error) {
      console.error("Language detection error:", error)
    } finally {
      setIsAutoDetecting(false)
    }
  }

  return (
    <>
      <div className="space-y-4">
        <div className="flex gap-4">
          <LanguageSelector
            value={sourceLang}
            onChange={setSourceLang}
            label="From"
          />
          <button
            onClick={() => detectLanguage(sourceText)}
            disabled={isAutoDetecting || !sourceText.trim()}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg
                     hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isAutoDetecting ? "Detecting..." : "Auto-detect"}
          </button>
          <LanguageSelector
            value={targetLang}
            onChange={setTargetLang}
            label="To"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600 dark:text-gray-400">Source Text</label>
                <SpeechToText onTranscript={setSourceText} language={sourceLang} />
              </div>
              {sourceText && <CopyButton text={sourceText} />}
            </div>
            <textarea
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              placeholder="Enter text to translate..."
              className="w-full h-40 p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600 dark:text-gray-400">Translation</label>
                {translatedText && <TextToSpeech text={translatedText} language={targetLang} />}
              </div>
              {translatedText && <CopyButton text={translatedText} />}
            </div>
            <textarea
              value={translatedText}
              readOnly
              placeholder="Translation will appear here..."
              className="w-full h-40 p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <button
          onClick={handleTranslate}
          disabled={isLoading || !sourceText.trim()}
          className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 
                   text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Translating..." : "Translate"}
        </button>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
} 