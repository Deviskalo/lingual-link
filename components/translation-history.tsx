"use client";

import { useEffect, useState, useCallback } from "react";
import type { Translation } from "@prisma/client";
import { TextToSpeech } from "./text-to-speech";
import { useTranslationEvent } from "../hooks/useTranslationEvent";
import { useSession } from "next-auth/react";

// interface TranslationType {
//   id: string;
//   sourceText: string;
//   translatedText: string;
//   sourceLang: string;
//   targetLang: string;
//   type: string;
//   createdAt: string;
// }

export function TranslationHistory() {
  const { data: session } = useSession();
  const [history, setHistory] = useState<Translation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch("/api/history");

      if (!response.ok) {
        throw new Error("Failed to fetch history");
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid response format");
      }

      setHistory(data);
    } catch (error) {
      console.error("Failed to fetch history:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to load translation history"
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  useTranslationEvent(fetchHistory);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/history/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchHistory();
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  if (!session) {
    return <p>Please log in to view your translation history.</p>;
  }

  if (isLoading)
    return (
      <div className="mt-8 animate-pulse">
        <div className="h-6 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );

  if (error)
    return (
      <div className="mt-8 text-red-500 dark:text-red-400">
        {error}
        <button
          onClick={fetchHistory}
          className="ml-2 underline hover:no-underline"
        >
          Try again
        </button>
      </div>
    );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Recent Translations</h2>
      <div className="space-y-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"
          >
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>
                {item.sourceLang} → {item.targetLang}
              </span>
              <div className="flex items-center gap-2">
                <time>{new Date(item.createdAt).toLocaleString()}</time>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700 dark:text-red-400 
                           dark:hover:text-red-300"
                  title="Delete translation"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p>{item.sourceText}</p>
              <TextToSpeech text={item.sourceText} language={item.sourceLang} />
            </div>
            <div className="flex items-center justify-between text-blue-600 dark:text-blue-400">
              <p>{item.translatedText}</p>
              <TextToSpeech
                text={item.translatedText}
                language={item.targetLang}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
