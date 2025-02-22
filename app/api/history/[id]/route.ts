import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

interface RouteParams {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Use the built-in Next.js types for API routes
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    const translation = await prisma.translation.delete({
      where: {
        id: params.id,
      },
    });

    if (!translation) {
      return NextResponse.json(
        { error: "Translation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete translation" },
      { status: 500 }
    );
  }
}
