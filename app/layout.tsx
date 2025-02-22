import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libre_franklin = Libre_Franklin({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LingualLink | AI Language Translator",
  description: "A modern ai language translation app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${libre_franklin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
