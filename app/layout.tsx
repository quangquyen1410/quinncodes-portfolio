import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "quinncodes | Developer Portfolio",
  description: "The personal portfolio of Quinn Nguyen, a modern developer. Projects, blog, and contact.",
  metadataBase: new URL("https://quinncodes.com"),
  openGraph: {
    title: "quinncodes | Developer Portfolio",
    description: "The personal portfolio of Quinn Nguyen, a modern developer. Projects, blog, and contact.",
    url: "https://quinncodes.com",
    siteName: "quinncodes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "quinncodes | Developer Portfolio",
    description: "The personal portfolio of Quinn Nguyen, a modern developer. Projects, blog, and contact.",
    creator: "@quinncodes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full py-6 px-4 flex justify-between items-center border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
          <Link href="/" className="text-2xl font-bold tracking-tight">quinncodes</Link>
          <nav className="flex gap-6 text-base font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto w-full px-4 py-8 min-h-[80vh]">{children}</main>
        <footer className="w-full py-6 px-4 text-center text-sm text-muted-foreground border-t border-border">© {new Date().getFullYear()} quinncodes. All rights reserved.</footer>
      </body>
    </html>
  );
}
