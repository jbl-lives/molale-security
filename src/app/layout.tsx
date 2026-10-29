import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });



export const metadata = {
  metadataBase: new URL("https://www.molalesecurity.co.za"),
  title: {
    default: "Molale Security Group",
    template: "%s | Molale Security"
  },
  description: "Elite tactical protection and training services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh antialiased" suppressHydrationWarning>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
