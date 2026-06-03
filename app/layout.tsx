import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Iqra Angels Learning Academy",
    template: "%s | Iqra Angels Learning Academy"
  },
  description:
    "Iqra Angels Learning Academy offers Quranic Arabic, language, Computer & AI, Learn & Play, fitness, skills, and activity programs for academic session 2026.",
  keywords: [
    "Iqra Angels Learning Academy",
    "Quranic Arabic Classes",
    "Language Classes",
    "Computer AI Classes",
    "Learn and Play",
    "Academic Session 2026"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
