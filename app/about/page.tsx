import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            About{" "}
            <span className="text-blue-600 dark:text-blue-400">
              LingualLink
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Empowering global communication through advanced AI-powered
            translation technology. Breaking language barriers one conversation
            at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At LingualLink, we believe that language should never be a barrier
              to understanding, connection, or opportunity. Our mission is to
              provide accurate, reliable, and accessible translation services
              that help people and businesses communicate effectively across
              linguistic boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Why Choose <span className="text-blue-500">LingualLink</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div
              className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center 
                         justify-center text-blue-600 dark:text-blue-400 mb-4"
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Advanced Security
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your data is protected with enterprise-grade encryption and secure
              transmission protocols.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div
              className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center 
                         justify-center text-blue-600 dark:text-blue-400 mb-4"
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get instant translations powered by cutting-edge AI technology.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div
              className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center 
                         justify-center text-blue-600 dark:text-blue-400 mb-4"
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
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              High Accuracy
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Industry-leading translation accuracy with context awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
              Our <span className="text-blue-500">Technology</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We leverage the latest advancements in artificial intelligence and
              machine learning to provide accurate translations. Our system
              continuously learns and improves from millions of translations,
              ensuring the highest quality results for our users.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  100+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Languages
                </div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  99%
                </div>
                <div className="text-gray-600 dark:text-gray-300">Accuracy</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Availability
                </div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  1M+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
            Our team of language experts and AI specialists work together to
            bring you the best translation experience possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="text-center">
              <div className="w-32 item-center justify-center flex h-32 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4">
                <Image
                  src="/me.jpg"
                  width={125}
                  height={100}
                  alt="developer image"
                  className="rounded-full relative object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Dev Iskalo
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Founder & Lead Developer
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 item-center justify-center flex rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4">
                <Image
                  src="/team.png"
                  width={125}
                  height={100}
                  alt="team image"
                  className="rounded-full relative object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Iskalo Tech
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI Research Team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
