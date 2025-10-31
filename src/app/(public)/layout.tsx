// src/app/(public)/layout.tsx
import Header from "../layouts/Header";
import ClientLayout from "../layouts/ClientLayout";
import ProgressBarWrapper from "../layouts/ProgressBarWrapper";
import { Footer } from "react-day-picker";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <ProgressBarWrapper />
      <Header />
      <div className="h-20" />
      <Footer />
      <ClientLayout>{children}</ClientLayout>
    </div>
  );
}