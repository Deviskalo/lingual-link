import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { text } = await request.json()
    
    if (!text?.trim()) {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      )
    }

    const language = detectLanguageFromText(text.trim())
    
    return NextResponse.json({
      language,
      confidence: 0.8,
    })
  } catch (error) {
    console.error("Language detection error:", error)
    return NextResponse.json(
      { error: "Language detection failed" },
      { status: 500 }
    )
  }
}

function detectLanguageFromText(text: string): string {
  // Common language patterns
  const patterns = {
    en: /^[a-zA-Z\s.,!?'"-]+$/,  // English
    es: /[áéíóúñ¿¡]/i,           // Spanish
    fr: /[àâçéèêëîïôûùüÿœæ]/i,   // French
    de: /[äöüß]/i,               // German
    it: /[àèéìíîòóùú]/i,         // Italian
    pt: /[áâãàçéêíóôõú]/i,       // Portuguese
    ru: /[\u0400-\u04FF]/,       // Russian (Cyrillic)
    zh: /[\u4E00-\u9FFF]/,       // Chinese
    ja: /[\u3040-\u309F\u30A0-\u30FF]/,  // Japanese
    ko: /[\uAC00-\uD7AF\u1100-\u11FF]/,  // Korean
    ar: /[\u0600-\u06FF]/,       // Arabic
    hi: /[\u0900-\u097F]/,       // Hindi
    th: /[\u0E00-\u0E7F]/,       // Thai
    vi: /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i  // Vietnamese
  }

  // Check for specific character patterns
  for (const [lang, pattern] of Object.entries(patterns)) {
    if (pattern.test(text)) {
      return lang
    }
  }

  // If no specific pattern is found, check word patterns
  const words = text.toLowerCase().split(/\s+/)
  
  // Common words in different languages
  const commonWords = {
    en: ['the', 'is', 'are', 'and', 'in', 'to', 'it'],
    es: ['el', 'la', 'los', 'las', 'es', 'son', 'y'],
    fr: ['le', 'la', 'les', 'est', 'sont', 'et'],
    de: ['der', 'die', 'das', 'ist', 'sind', 'und'],
  }

  for (const [lang, wordList] of Object.entries(commonWords)) {
    if (words.some(word => wordList.includes(word))) {
      return lang
    }
  }

  // Default to English if no pattern is detected
  return 'en'
} 