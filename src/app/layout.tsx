import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tipatweet.fun",
  description: "tip any tweet on twitter",

  // Favicon
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],

  // Open Graph metadata
  openGraph: {
    title: "tipatweet.fun",
    description: "tip any tweet on twitter",
    url: "https://tipatweet.fun",
    siteName: "tipatweet.fun",
    images: [
      {
        url: "https://tipatweet.fun/icon-blue.jpeg",
        width: 1200,
        height: 630,
        alt: "tipatweet.fun - Tip any tweet on Twitter",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "tipatweet.fun",
    description: "tip any tweet on twitter",
    images: ["https://tipatweet.fun/icon-blue.jpeg"],
    creator: "@yourtwitterhandle",
  },

  // Additional metadata
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  manifest: "/site.webmanifest",

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://tipatweet.fun",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
