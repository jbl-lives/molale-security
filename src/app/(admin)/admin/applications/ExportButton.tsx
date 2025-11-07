"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ExportButton({ content }: { content: string }) {
  const downloadCSV = () => {
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `applications_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url); // Clean up
  };

  return (
    <Button onClick={downloadCSV} size="sm">
      <Download className="w-4 h-4 mr-2" />
      Export CSV
    </Button>
  );
}