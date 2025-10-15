"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";

type Ctx = {
  open: boolean;
  course?: string;
  openWithCourse: (course?: string) => void;
  close: () => void;
};

const ApplyDialogCtx = createContext<Ctx | null>(null);

export function useApplyDialog() {
  const ctx = useContext(ApplyDialogCtx);
  if (!ctx) throw new Error("useApplyDialog must be used within <ApplyDialogProvider>");
  return ctx;
}

export default function ApplyDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState<string | undefined>(undefined);

  const openWithCourse = useCallback((c?: string) => {
    setCourse(c);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <ApplyDialogCtx.Provider value={{ open, course, openWithCourse, close }}>
      {children}
    </ApplyDialogCtx.Provider>
  );
}
