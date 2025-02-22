"use client";

import { useState } from "react";
import { SpeechToText } from "./speech-to-text";
import { TextToSpeech } from "./text-to-speech";
import { LanguageSelector } from "./language-selector";

export function SpeechToolsContent() {
  const [speechLang, setSpeechLang] = useState("en");
  const [textToSpeak, setTextToSpeak] = useState("");
  const [transcribedText, setTranscribedText] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Speech to Text
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Convert your speech into text in multiple languages
        </p>
        <div className="space-y-4">
          <LanguageSelector
            value={speechLang}
            onChange={setSpeechLang}
            label="Language"
          />
          <div className="mt-4">
            <SpeechToText
              onTranscript={setTranscribedText}
              language={speechLang}
            />
            {transcribedText && (
              <div
                className="mt-4 p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                            bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {transcribedText}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Text to Speech
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Convert text into natural-sounding speech
        </p>
        <div className="space-y-4">
          <LanguageSelector
            value={speechLang}
            onChange={setSpeechLang}
            label="Language"
          />
          <textarea
            value={textToSpeak}
            onChange={(e) => setTextToSpeak(e.target.value)}
            className="w-full h-32 p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Enter text to convert to speech..."
          />
          <div className="flex justify-end">
            <TextToSpeech text={textToSpeak} language={speechLang} />
          </div>
        </div>
      </div>
    </div>
  );
}
