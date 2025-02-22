import { NextResponse } from "next/server"
import { prisma } from "@/app/lib/prisma"

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.translation.delete({
      where: {
        id: params.id
      }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Delete error:", error)
    return NextResponse.json(
      { error: "Failed to delete translation" },
      { status: 500 }
    )
  }
} 