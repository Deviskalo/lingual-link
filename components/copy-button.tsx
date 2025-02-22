"use client"

import { useState } from 'react'

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 
                dark:hover:text-gray-200"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  )
} 