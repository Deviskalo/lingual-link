export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Help & Support
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Need assistance? We're here to help you navigate through our
            features and services.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              How do I use the translation feature?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Simply enter the text you want to translate, select the source and
              target languages, and click "Translate".
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              What file formats are supported for document translation?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We support PDF, DOCX, and TXT file formats for document
              translation.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              How can I access my translation history?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your translation history is automatically saved and can be
              accessed from the "History" section of the app.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
