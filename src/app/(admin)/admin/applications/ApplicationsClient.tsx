// src/app/(admin)/admin/applications/ApplicationsClient.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle, Phone, DollarSign } from "lucide-react";
import { AppStatus } from "@prisma/client";
import { updateApplicationStatus, toggleApplicationPaid } from "./actions";

type Application = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string | null;
  status: AppStatus;
  paid: boolean;
  createdAt: string;
  course: { title: string } | null;
};

export default function ApplicationsClient({ initialApplications }: { initialApplications: Application[] }) {
  const [applications, setApplications] = useState(initialApplications);

  const downloadCSV = () => {
    const csv = [
      ["Full Name", "Email", "Phone", "Course", "Notes", "Status", "Paid", "Date"],
      ...applications.map(a => [
        a.fullName,
        a.email,
        a.phone,
        a.course?.title ?? "",
        a.notes ?? "",
        a.status,
        a.paid ? "Yes" : "No",
        new Date(a.createdAt).toLocaleDateString("en-ZA"),
      ])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `molale_applications_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
          <p className="text-sm text-gray-600 mt-1">
            {applications.length} total
          </p>
        </div>
        <Button onClick={downloadCSV} size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applicant</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Paid</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applications.map((app) => (
              <tr key={app.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{app.fullName}</div>
                    <div className="text-sm text-gray-500">{app.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {app.course?.title ?? "—"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                  {app.notes ?? "—"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge
                    variant={
                      app.status === AppStatus.ENROLLED ? "default" :
                      app.status === AppStatus.CONTACTED ? "secondary" :
                      app.status === AppStatus.REJECTED ? "destructive" : "outline"
                    }
                  >
                    {app.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <form action={toggleApplicationPaid.bind(null, app.id, app.paid)}>
                    <Button size="sm" variant={app.paid ? "default" : "outline"}>
                      <DollarSign className="w-4 h-4 mr-1" />
                      {app.paid ? "Paid" : "Unpaid"}
                    </Button>
                  </form>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(app.createdAt).toLocaleDateString("en-ZA")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {app.status === AppStatus.PENDING && (
                    <div className="flex gap-2">
                      <form action={updateApplicationStatus.bind(null, app.id, AppStatus.CONTACTED)}>
                        <Button size="sm" variant="outline">
                          <Phone className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                      </form>
                      <form action={updateApplicationStatus.bind(null, app.id, AppStatus.ENROLLED)}>
                        <Button size="sm">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Enroll
                        </Button>
                      </form>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}