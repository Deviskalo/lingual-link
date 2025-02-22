import { NextRequest } from "next/server";
import { prisma } from "@/app/lib/prisma";

// Delete translation based on route param id
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Ensure the route param is extracted properly
    const { id } = context.params;

    // Proceed with deleting the translation
    const translation = await prisma.translation.delete({
      where: { id },
    });

    // If no translation found, return 404
    if (!translation) {
      return Response.json({ error: "Translation not found" }, { status: 404 });
    }

    // Success response
    return Response.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return Response.json(
      { error: "Failed to delete translation" },
      { status: 500 }
    );
  }
}
