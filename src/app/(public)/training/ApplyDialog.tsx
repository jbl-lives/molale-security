"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useApplyDialog } from "./ApplyDialogProvider";
import ApplyForm from "./ApplyForm";

export default function ApplyDialog() {
  const { open, close, course } = useApplyDialog();

  return (
    <Dialog open={open} onOpenChange={(v) => (!v ? close() : null)}>
      <DialogContent
        className="
          p-0 gap-0
          sm:max-w-2xl
          h-[100svh] sm:h-[85vh]
          sm:rounded-2xl
          overflow-hidden
          flex flex-col
        "
      >
        {/* Fixed header */}
        <div className="bg-[var(--color-primary)] text-white px-6 py-5 sm:rounded-t-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl">Register for a Course</DialogTitle>
            <DialogDescription className="text-white/90">
              Fill in your details and preferred course/date. We’ll confirm your seat shortly.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable body */}
        <div
          className="
            flex-1 overflow-y-auto
            p-6 sm:p-8
            overscroll-contain
          "
        >
          <ApplyForm preselectedCourse={course} onSubmitted={close} />
          {/* extra bottom padding so the last field isn’t under the keyboard on mobile */}
          <div className="h-6 sm:h-0" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
