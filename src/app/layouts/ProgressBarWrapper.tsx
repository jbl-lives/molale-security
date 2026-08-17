"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ProgressBarWrapper() {
  return (
    <ProgressBar 
      height="4px" 
      // Using a hardcoded hex for the Gold to ensure it pops
      color="#D4A017" 
      options={{ 
        showSpinner: false,
        trickleSpeed: 200, // Makes it feel faster
      }} 
      shallowRouting 
    />
  );
}