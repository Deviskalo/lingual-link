import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <Image src="/logo.png" alt="logo" width={200} height={20} />
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Breaking language barriers with advanced AI translation
              technology.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Features
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <a href="/text-translation">Text Translation</a>
              </li>
              <li className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <a href="/document-translation">Document Translation</a>
              </li>
              <li className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <a href="/speech-tools">Speech-to-Text</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} LingualLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
