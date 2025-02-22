import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// Use the built-in Next.js types for API routes
type Props = {
  params: { id: string };
};

export async function DELETE(_request: NextRequest, props: Props) {
  try {
    await prisma.translation.delete({
      where: {
        id: props.params.id,
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
