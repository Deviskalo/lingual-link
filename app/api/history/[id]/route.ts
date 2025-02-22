import type { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// Use the built-in Next.js types for API routes
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    await prisma.translation.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete translation" },
      { status: 500 }
    );
  }
}
