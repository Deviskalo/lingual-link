import { FileTranslator } from "../../components/file-translator";

export default function DocumentTranslationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Document Translation
          </h1>
          <FileTranslator />
        </div>
      </main>
    </div>
  );
}
