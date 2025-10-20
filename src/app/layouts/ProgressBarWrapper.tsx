"use client";

import { useState, useEffect } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

// This component ensures the ProgressBar is only rendered on the client after mounting.
export default function ProgressBarWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true once the component mounts on the client
  }, []);

  if (!isMounted) {
    return null; // Don't render anything on the server or before mounting
  }

  return (
    <ProgressBar 
      height="3px" 
      color="var(--color-primary)" 
      options={{ showSpinner: false }} 
      shallowRouting 
    />
  );
}