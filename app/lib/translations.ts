import { prisma } from '@/app/lib/prisma'
import type { Translation } from '@prisma/client'

export type TranslationType = 'text' | 'document' | 'speech'

export interface TranslationCreate {
  sourceText: string
  translatedText: string
  sourceLang: string
  targetLang: string
  type: TranslationType
  fileName?: string
  userId?: string
}

export async function createTranslation(data: TranslationCreate): Promise<Translation> {
  return prisma.translation.create({
    data: {
      ...data,
      createdAt: new Date(),
    },
  })
}

export async function getTranslationHistory(
  userId?: string,
  limit: number = 10
): Promise<Translation[]> {
  return prisma.translation.findMany({
    where: userId ? { userId } : {},
    orderBy: {
      createdAt: 'desc',
    },
    take: limit,
  })
}

export async function deleteTranslation(id: string): Promise<boolean> {
  try {
    await prisma.translation.delete({
      where: { id },
    })
    return true
  } catch (error) {
    return false
  }
}

export async function clearTranslationHistory(userId?: string): Promise<boolean> {
  try {
    await prisma.translation.deleteMany({
      where: userId ? { userId } : {},
    })
    return true
  } catch (error) {
    return false
  }
} 