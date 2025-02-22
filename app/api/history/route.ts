import { NextResponse } from "next/server"
import { prisma } from "@/app/lib/prisma"

export async function GET() {
  try {
    const translations = await prisma.translation.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 10,
      select: {
        id: true,
        sourceText: true,
        translatedText: true,
        sourceLang: true,
        targetLang: true,
        type: true,
        createdAt: true,
      }
    })
    
    return NextResponse.json(translations)
  } catch (error) {
    console.error("History fetch error:", error)
    return NextResponse.json(
      { error: "Failed to fetch translation history" },
      { status: 500 }
    )
  }
} 