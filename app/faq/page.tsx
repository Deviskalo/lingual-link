export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some common questions and answers to help you get started.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              What is AI Translator?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI Translator is a modern language translation tool that leverages
              advanced artificial intelligence to provide accurate translations
              across multiple languages.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Is my data secure?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we prioritize your privacy and security. All data is
              encrypted and handled with the utmost care.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              How can I provide feedback?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We welcome your feedback! You can reach out to us through the
              contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
