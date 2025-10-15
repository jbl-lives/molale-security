// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto, Roboto_Mono} from "next/font/google";
import "./globals.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

// Fonts (use css variable strategy for Tailwind v4 tokens)
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["400", "700"] });
const robotoMono = Roboto_Mono({ variable: "--font-roboto-mono", subsets: ["latin"], weight: ["400", "700"] });

// --- SEO defaults (adjust siteUrl when you deploy) ---
const siteUrl = "https://molalesecurity.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Molale Security",
    template: "%s | Molale Security",
  },
  description:
    "Armed response, guarding, VIP protection, CCTV & alarms, screening, private investigations, and training across North West.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Molale Security",
    url: siteUrl,
    locale: "en_ZA",
    title: "Molale Security",
    description:
      "Armed response, guarding, VIP protection, CCTV & alarms, screening, private investigations, and training across North West.",
  },
  // You can add icons once you have them in /public
  // icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
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
      {/* Keep body markup stable (no dynamic values during SSR) */}
      <body className="min-h-dvh bg-[var(--color-background)] text-[var(--color-foreground)] antialiased" cz-shortcut-listen="true">
        {/* If you add a ThemeProvider (shadcn), mount it here */}
        <Header />
        <div className="h-20" />
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem>{children}</ThemeProvider> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
