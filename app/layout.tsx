import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Sarthak Ozha | Digital Marketing, Creative Production & Growth",
  description:
    "Sarthak Ozha builds brochure-inspired digital marketing experiences with social media management, creative production, influencer marketing, SEO, paid ads, branding, and websites.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Sarthak Ozha",
    "digital marketing agency",
    "creative production",
    "social media marketing",
    "influencer marketing",
    "paid advertising",
    "SEO and local marketing",
    "branding and graphic design",
    "website and landing pages",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}