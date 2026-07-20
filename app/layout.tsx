import type { Metadata } from "next";
import { Caladea, Carlito } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"   

const caladea = Caladea({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
});

const carlito = Carlito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sarthak oza | Digital Marketing, Creative Production & Growth",
  description:
    "Sarthak oza builds brochure-inspired digital marketing experiences with social media management, creative production, influencer marketing, SEO, paid ads, branding, and websites.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Sarthak oza",
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
      <body className={`${caladea.variable} ${carlito.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}