import { Suspense } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ProgressBarWrapper from "../layouts/ProgressBarWrapper";
import ClientLayout from "../layouts/ClientLayout";
import Loading from "./loading"; // We will create this next

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Progress Bar for small movements */}
      <ProgressBarWrapper />
      
      <Header />
      
      {/* Standard Header Spacer */}
      <div className="h-20 md:h-24" />

      <main className="flex-1">
        <ClientLayout>
          {/* The Suspense boundary ensures that when you click a link, 
            Next.js shows the 'loading.tsx' UI immediately while 
            fetching the new page data.
          */}
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </ClientLayout>
      </main>

      <Footer />
    </div>
  );
}