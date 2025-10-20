import type { Metadata } from "next";
import TrainingHero from "./TrainingHero";
import ProvideAndCompliance from "./ProvideAndCompliance";
import Courses from "./Courses";
import ProcessStrip from "./ProcessStrip";
import ApplyDialog from "./ApplyDialog";
import ApplyDialogProvider from "./ApplyDialogProvider";
import TrainingDeepLinkBridge from "./TrainingDeepLinkBridge";
import PsiraNextSteps from "./PsiraNextSteps";

export const metadata: Metadata = {
  title: "Training Academy",
  description: "Security training with Molale Security…",
  alternates: { canonical: "/training" },
};

export default function TrainingPage() {
  return (
    <ApplyDialogProvider>
      <ApplyDialog />
      {/* optional: handle #apply deep-links */}
      <TrainingDeepLinkBridge />
      <main className="w-full bg-white">
        <TrainingHero />
        <ProvideAndCompliance />
        <Courses />
        <ProcessStrip />
        <PsiraNextSteps />
      </main>
    </ApplyDialogProvider>
  );
}
