// src/app/(admin)/admin/applications/actions.ts
"use server";

import { prisma } from "@/lib/prisma";
import { AppStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { ADMIN_SESSION_COOKIE, verifyAdminSession } from "@/lib/admin-session";

async function assertAdminSession() {
  const session = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!(await verifyAdminSession(session))) throw new Error("Unauthorized");
}

export async function updateApplicationStatus(id: string, status: AppStatus) {
  await assertAdminSession();
  await prisma.application.update({
    where: { id },
    data: { status },
  });
  revalidatePath("/admin/applications");
}

export async function toggleApplicationPaid(id: string, paid: boolean) {
  await assertAdminSession();
  await prisma.application.update({
    where: { id },
    data: { paid },
  });
  revalidatePath("/admin/applications");
}
