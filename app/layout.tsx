import { Libre_Franklin as Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import { NavBar } from "../components/nav-bar";
import { Footer } from "../components/footer";
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import SessionWrapper from "../components/SessionWrapper";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LingualLink | AI Language Translator",
  description: "A modern ai language translation app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <SessionWrapper>
              <NavBar />
              <main className="flex-grow mb-10">{children}</main>
              <Footer />
            </SessionWrapper>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
