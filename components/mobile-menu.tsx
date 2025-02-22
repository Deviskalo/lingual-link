"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${
            isOpen
              ? "opacity-100 z-[100] visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-[101] md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col p-4">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg ${
                isActive("/")
                  ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              href="/text-translation"
              className={`px-4 py-2 rounded-lg ${
                isActive("/text-translation")
                  ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              onClick={onClose}
            >
              Text Translation
            </Link>
            <Link
              href="/document-translation"
              className={`px-4 py-2 rounded-lg ${
                isActive("/document-translation")
                  ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              onClick={onClose}
            >
              Document Translation
            </Link>
            <Link
              href="/speech-tools"
              className={`px-4 py-2 rounded-lg ${
                isActive("/speech-tools")
                  ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              onClick={onClose}
            >
              Speech Tools
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-lg ${
                isActive("/about")
                  ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg ${
                isActive("/contact")
                  ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              onClick={onClose}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
