import { NextResponse } from "next/server"
import {prisma} from "../../lib/prisma"

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const json = await request.json()
  
  const post = await prisma.post.create({
    data: {
      title: json.title,
      content: json.content,
    },
  })
  
  return NextResponse.json(post)
} 