import { NextRequest } from "next/server";
import { prisma } from "@/app/lib/prisma";

export const dynamic = "force-dynamic";

// Delete translation based on route param id
export async function DELETE(
  _request: Request | NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Ensure the route param is extracted properly
    const { id } = params;

    // Proceed with deleting the translation
    const translation = await prisma.translation.delete({
      where: { id },
    });

    // If no translation found, return 404
    if (!translation) {
      return new Response(JSON.stringify({ error: "Translation not found" }), {
        status: 404,
      });
    }

    // Success response
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Delete error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete translation" }),
      { status: 500 }
    );
  }
}
