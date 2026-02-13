import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Video Editor | Reels, YouTube & Color Grading",
  description:
    "Boost your engagement with high-retention video editing. We specialize in fast-paced Reels, trending audio sync, subtitles, and VFX. Turn casual viewers into followers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistMono.variable} ${geistSans.variable}`}>
        {children}
        <GoogleAnalytics gaId='process.env.NEXT_PUBLIC_GOGGLEA_ID' />
      </body>
    </html>
  );
}
