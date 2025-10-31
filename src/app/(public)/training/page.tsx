// src/app/training/page.tsx
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import ApplyDialogProvider from "./ApplyDialogProvider";
import ApplyDialog from "./ApplyDialog";
import TrainingHero from "./TrainingHero";
import ProvideAndCompliance from "./ProvideAndCompliance";
import Courses from "./Courses"; // ← Now a separate client component
import ProcessStrip from "./ProcessStrip";
import PsiraNextSteps from "./PsiraNextSteps";
import TrainingDeepLinkBridge from "./TrainingDeepLinkBridge"; // ← Separate client component

export const metadata: Metadata = {
  title: "Training Academy",
  description: "Security training with Molale Security…",
  alternates: { canonical: "/training" },
};

async function getCourses() {
  return prisma.course.findMany({
    include: { starts: true },
    orderBy: { createdAt: "desc" },
  });
}

export default async function TrainingPage() {
  const courses = await getCourses();

  return (
    <ApplyDialogProvider>
      <ApplyDialog />
      <TrainingDeepLinkBridge />
      <main className="w-full bg-white">
        <TrainingHero />
        <ProvideAndCompliance />
        <Courses/>
        <ProcessStrip />
        <PsiraNextSteps />
      </main>
    </ApplyDialogProvider>
  );
}

export const revalidate = 3600; // Revalidate every hour