"use client";

import { useEffect } from "react";
import { useApplyDialog } from "./ApplyDialogProvider";


export default function TrainingDeepLinkBridge() {
  const { openWithCourse } = useApplyDialog();

  useEffect(() => {
    const openFromLocation = () => {
      const hash = window.location.hash; // e.g. #apply?course=Grade%20E
      if (!hash) return;
      const [route, query] = hash.split("?");
      if (route !== "#apply") return;

      let course: string | undefined;
      if (query) {
        const params = new URLSearchParams(query);
        const c = params.get("course");
        if (c) course = decodeURIComponent(c);
      }
      openWithCourse(course);
    };

    // open on initial load
    openFromLocation();

    // open when hash changes (if user clicks a shared link or you set location.hash)
    const onHashChange = () => openFromLocation();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [openWithCourse]);

  return null;
}
