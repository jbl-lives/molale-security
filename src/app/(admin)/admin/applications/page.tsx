// src/app/(admin)/admin/applications/page.tsx
import { prisma } from "@/lib/prisma";
import ApplicationsClient from "./ApplicationsClient";

export default async function ApplicationsPage() {
  const applications = await prisma.application.findMany({
    include: { course: { select: { title: true } } },
    orderBy: { createdAt: "desc" },
  });

  const serialized = applications.map(app => ({
    ...app,
    createdAt: app.createdAt.toISOString(),
  }));

  return <ApplicationsClient initialApplications={serialized} />;
}