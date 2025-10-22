import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const take = Number(searchParams.get("take") ?? 25);
  const skip = Number(searchParams.get("skip") ?? 0);

  const apps = await prisma.application.findMany({
    orderBy: { createdAt: "desc" },
    take,
    skip,
    include: {
      course: true,
      // Replace 'courseStart' with the correct relation name from your Prisma schema, e.g.:
      // courseStartId: true,
    },
  });
  return Response.json(apps);
}

// your existing POST stays the same; if you want, add light validation:
export async function POST(req: Request) {
  try {
    const { courseId, startId, fullName, email, phone, notes } = await req.json();
    if (!courseId || !fullName || !phone) {
      return new Response("Missing required fields", { status: 400 });
    }
    const created = await prisma.application.create({
      data: { courseId, fullName, email, phone, notes },
    });
    return Response.json({ ok: true, id: created.id });
  } catch (e) {
    console.error(e);
    return new Response("Server error", { status: 500 });
  }
}
