// src/app/(admin)/admin/applications/actions.ts
"use server";

import { prisma } from "@/lib/prisma";
import { AppStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function updateApplicationStatus(id: string, status: AppStatus) {
  await prisma.application.update({
    where: { id },
    data: { status },
  });
  revalidatePath("/admin/applications");
}

export async function toggleApplicationPaid(id: string, paid: boolean) {
  await prisma.application.update({
    where: { id },
    data: { paid },
  });
  revalidatePath("/admin/applications");
}