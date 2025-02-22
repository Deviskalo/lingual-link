import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Break Language Barriers with{" "}
            <span className="text-blue-600 dark:text-blue-400">
              AI Translation
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Translate text, documents, and speech in real-time with our advanced
            AI translation tools. Supporting 100+ languages with high accuracy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/text-translation"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                     transition-colors duration-200 font-semibold"
            >
              Start Translating
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white 
                     rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/text-translation"
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 
                   dark:hover:border-blue-500 transition-colors group hover:shadow-lg"
          >
            <div
              className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center 
                        justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500">
              Text Translation
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Translate text between multiple languages instantly with high
              accuracy and natural-sounding results.
            </p>
          </Link>

          <Link
            href="/document-translation"
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 
                   dark:hover:border-blue-500 transition-colors group hover:shadow-lg"
          >
            <div
              className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center 
                        justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500">
              Document Translation
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Translate PDF, DOCX, and TXT files while maintaining formatting
              and structure.
            </p>
          </Link>

          <Link
            href="/speech-tools"
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 
                   dark:hover:border-blue-500 transition-colors group hover:shadow-lg"
          >
            <div
              className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center 
                        justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500">
              Speech Tools
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Convert speech to text and text to speech with support for
              multiple languages and accents.
            </p>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                100+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Languages Supported
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                99%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Translation Accuracy
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Available Support
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                1M+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Happy Users
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Ready to Break Language Barriers?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Start translating your content today and reach a global audience.
          </p>
          <Link
            href="/text-translation"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg 
                   hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
}
