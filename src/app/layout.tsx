import "./globals.css";
import { Toaster } from "@/components/ui/sonner";



export const metadata = {
  title: {
    default: "Molale Security Group",
    template: "%s | Molale Security"
  },
  description: "Elite tactical protection and training services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="min-h-dvh bg-white text-slate-900 antialiased font-sans"
        style={{ 
          // High-end sans-serif stack (Inter-like)
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' 
        }}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}