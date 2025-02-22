"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileMenu } from "./mobile-menu";
import Image from "next/image";
import { useTheme } from "next-themes";

export function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    console.log("Toggling menu:", !isMobileMenuOpen); // Debug log
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="h-[64px]" />
      <nav
        className={`fixed top-0 left-0 right-0 z-[90] border-b border-gray-200 w-full dark:border-gray-800
        ${
          scrolled
            ? "bg-white/60  dark:bg-gray-900/60 backdrop-blur-sm shadow-lg"
            : "bg-white dark:bg-gray-900"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/">
                <Image src="/logo.png" width={120} height={30} alt="logo" />
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link
                  href="/text-translation"
                  className={`${
                    isActive("/text-translation")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  } transition-colors`}
                >
                  Text Translation
                </Link>
                <Link
                  href="/document-translation"
                  className={`${
                    isActive("/document-translation")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  } transition-colors`}
                >
                  Document Translation
                </Link>
                <Link
                  href="/speech-tools"
                  className={`${
                    isActive("/speech-tools")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  } transition-colors`}
                >
                  Speech Tools
                </Link>
                <Link
                  href="/about"
                  className={`${
                    isActive("/about")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  } transition-colors`}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`${
                    isActive("/contact")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  } transition-colors`}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="/login"
                className="p-2 font-thin rounded bg-blue-500 text-white"
              >
                Login
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
