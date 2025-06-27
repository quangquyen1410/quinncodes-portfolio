import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuinnCodes - Full Stack Developer Portfolio",
  description: "Personal portfolio of Quinn Nguyen, a full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.",
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js", "typescript"],
  authors: [{ name: "Quinn Nguyen" }],
  creator: "Quinn Nguyen",
  openGraph: {
    title: "QuinnCodes - Full Stack Developer Portfolio",
    description: "Personal portfolio of Quinn Nguyen, a full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuinnCodes - Full Stack Developer Portfolio",
    description: "Personal portfolio of Quinn Nguyen, a full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.",
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
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
