import { NextResponse } from 'next/server'
import { createTranslation, getTranslationHistory, deleteTranslation, clearTranslationHistory } from '../../lib/translations'
import type { TranslationCreate } from '../../lib/translations'

export async function POST(request: Request) {
  try {
    const translation: TranslationCreate = await request.json()
    const result = await createTranslation(translation)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Failed to create translation:', error)
    return NextResponse.json(
      { error: 'Failed to create translation' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const limit = parseInt(searchParams.get('limit') || '10')
    
    const history = await getTranslationHistory(userId || undefined, limit)
    return NextResponse.json(history)
  } catch (error) {
    console.error('Failed to get translation history:', error)
    return NextResponse.json(
      { error: 'Failed to get translation history' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const userId = searchParams.get('userId')
    
    if (id) {
      const success = await deleteTranslation(id)
      if (!success) {
        return NextResponse.json(
          { error: 'Translation not found' },
          { status: 404 }
        )
      }
    } else if (userId) {
      await clearTranslationHistory(userId)
    } else {
      await clearTranslationHistory()
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete translation(s):', error)
    return NextResponse.json(
      { error: 'Failed to delete translation(s)' },
      { status: 500 }
    )
  }
} 