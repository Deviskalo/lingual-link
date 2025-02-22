import { NextResponse } from "next/server";
import { RateLimit } from "../../lib/rate-limit";
import * as mammoth from "mammoth";

const TRANSLATE_API = "https://api.mymemory.translated.net/get";
const rateLimit = new RateLimit(60 * 1000, 10);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const sourceLang = formData.get("sourceLang") as string;
    const targetLang = formData.get("targetLang") as string;
    const fileType = formData.get("fileType") as string;

    if (!file || !sourceLang || !targetLang) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Extract text based on file type
    let text: string;
    try {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      switch (fileType) {
        case "application/pdf":
          // For now, handle PDFs as text files
          text = await file.text();
          break;
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          try {
            const result = await mammoth.extractRawText({
              buffer,
            });
            text = result.value || "";
            if (result.messages.length > 0) {
              console.warn("Mammoth messages:", result.messages);
            }
          } catch (docxError) {
            console.error("DOCX extraction error:", docxError);
            // Fallback to text extraction
            text = await file.text();
          }
          break;
        case "text/plain":
          text = await file.text();
          break;
        default:
          throw new Error("Unsupported file type");
      }

      if (!text?.trim()) {
        throw new Error("No text content found in file");
      }
    } catch (error) {
      console.error("Text extraction error:", error);
      return NextResponse.json(
        {
          error:
            error instanceof Error
              ? error.message
              : "Failed to extract text from file",
        },
        { status: 400 }
      );
    }

    // Split text into smaller chunks (MyMemory has a length limit)
    const maxChunkSize = 500;
    const textChunks =
      text.match(new RegExp(`.{1,${maxChunkSize}}(?:\\s|$)`, "g")) || [];
    let translatedText = "";

    // Translate each chunk
    for (const chunk of textChunks) {
      if (!chunk.trim()) continue;

      try {
        const langPair = `${sourceLang}|${targetLang}`;
        const url = `${TRANSLATE_API}?q=${encodeURIComponent(
          chunk.trim()
        )}&langpair=${encodeURIComponent(langPair)}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Translation API error");
        }

        const data = await response.json();
        if (!data.responseData?.translatedText) {
          throw new Error("Invalid translation response");
        }

        translatedText += data.responseData.translatedText + " ";

        // Add a small delay between requests to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.error("Translation chunk error:", error);
        throw new Error(
          "Translation failed: " +
            (error instanceof Error ? error.message : "Unknown error")
        );
      }
    }

    if (!translatedText.trim()) {
      throw new Error("No text was translated");
    }

    // Return translated text
    return new NextResponse(translatedText.trim(), {
      headers: {
        "Content-Type": "text/plain",
        "Content-Disposition": `attachment; filename="translated_${file.name}"`,
      },
    });
  } catch (error) {
    console.error("File translation error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "File translation failed",
      },
      { status: 500 }
    );
  }
}
