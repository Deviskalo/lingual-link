"use client"

import { useState } from 'react'
import { LanguageSelector } from './language-selector'
import { Toast } from "./toast"

const ALLOWED_TYPES = {
  'text/plain': '.txt',
  'application/pdf': '.pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx'
}

export function FileTranslator() {
  const [file, setFile] = useState<File | null>(null)
  const [sourceLang, setSourceLang] = useState("en")
  const [targetLang, setTargetLang] = useState("es")
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && Object.keys(ALLOWED_TYPES).includes(selectedFile.type)) {
      setFile(selectedFile)
    } else {
      setToast({
        message: 'Please select a valid file (.txt, .pdf, or .docx)',
        type: 'error'
      })
    }
  }

  const handleTranslate = async () => {
    if (!file) return

    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('sourceLang', sourceLang)
      formData.append('targetLang', targetLang)
      formData.append('fileType', file.type)

      const response = await fetch('/api/translate-file', {
        method: 'POST',
        body: formData,
      })

      const contentType = response.headers.get('content-type')
      if (contentType?.includes('application/json')) {
        // Handle error response
        const errorData = await response.json()
        throw new Error(errorData.error || 'Translation failed')
      }

      if (!response.ok) {
        throw new Error('Translation failed')
      }

      // Get the translated text
      const translatedText = await response.text()
      if (!translatedText.trim()) {
        throw new Error('No translation received')
      }

      // Create and download the file with original extension
      const extension = ALLOWED_TYPES[file.type as keyof typeof ALLOWED_TYPES]
      const blob = new Blob([translatedText], { type: file.type })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `translated_${file.name.replace(/\.[^/.]+$/, '')}${extension}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)

      setToast({
        message: "File translated successfully!",
        type: "success"
      })
    } catch (error) {
      console.error('File translation error:', error)
      setToast({
        message: error instanceof Error ? error.message : "Failed to translate file",
        type: "error"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="space-y-4 mt-8 p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold">Translate Document</h2>
        
        <div className="flex gap-4">
          <LanguageSelector
            value={sourceLang}
            onChange={setSourceLang}
            label="From"
          />
          <LanguageSelector
            value={targetLang}
            onChange={setTargetLang}
            label="To"
          />
        </div>

        <div className="flex items-center gap-4">
          <input
            type="file"
            accept=".txt,.pdf,.docx"
            onChange={handleFileChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
                     file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100 dark:file:bg-blue-900 dark:file:text-blue-100"
          />
          <button
            onClick={handleTranslate}
            disabled={!file || isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Translating..." : "Translate File"}
          </button>
        </div>

        {file && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Selected file: {file.name}
          </p>
        )}
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