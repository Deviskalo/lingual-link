import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

interface RouteContext {
  params: {
    id: string;
  };
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
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
