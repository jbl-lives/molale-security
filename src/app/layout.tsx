// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./layouts/Header";
import ClientLayout from "./layouts/ClientLayout"; // <- client wrapper for transitions

import ProgressBarWrapper from "./layouts/ProgressBarWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// --- SEO defaults ---
const siteUrl = "https://molalesecurity.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Molale Security",
    template: "%s | Molale Security",
  },
  description:
    "Armed response, guarding, VIP protection, CCTV & alarms, screening, investigations, and training across North West.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Molale Security",
    url: siteUrl,
    locale: "en_ZA",
    title: "Molale Security",
    description:
      "Armed response, guarding, VIP protection, CCTV & alarms, screening, investigations, and training across North West.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      {/* keep body classes STATIC to avoid hydration diffs */}
      <body 
        className="min-h-dvh bg-[var(--color-background)] text-[var(--color-foreground)] antialiased"
        suppressHydrationWarning // Add this as a final measure
      >
        {/* top loading bar for route changes - NOW WRAPPED IN CLIENT-ONLY COMPONENT */}
        <ProgressBarWrapper />

        {/* global header (non-animated) */}
        <Header />
        <div className="h-20" />

        {/* animated page content */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
