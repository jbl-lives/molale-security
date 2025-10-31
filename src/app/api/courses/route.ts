// src/app/api/courses/route.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const courses = await prisma.course.findMany({
    orderBy: { title: "asc" },
    include: { starts: { orderBy: { date: "asc" } } }, // CourseStart[]
  });
  return Response.json(courses);
}
