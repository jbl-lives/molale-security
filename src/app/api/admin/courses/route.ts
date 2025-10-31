// src/app/api/admin/courses/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slug";

type Payload = {
  id?: string;
  title: string;
  code?: string | null;
  level: string;
  duration: string;
  price: string;
  blurb: string;
  starts: string[];
};

// At top of file
function unauthorized() {
  return new NextResponse("Unauthorized", { status: 401 });
}

function getAuth(req: Request) {
  return req.headers.get("authorization")?.replace("Bearer ", "");
}

export async function GET(req: Request) {
  const auth = getAuth(req);
  if (auth !== process.env.ADMIN_TOKEN) return unauthorized();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const slug = searchParams.get("slug");

  if (id || slug) {
    const course = await prisma.course.findUnique({
      where: {
        id: id ?? undefined,
        slug: slug ?? undefined,
      },
      include: { starts: true, applications: { select: { id: true } } },
    });
    if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 });
    return NextResponse.json(course);
  }

  const courses = await prisma.course.findMany({
    include: { starts: true, applications: { select: { id: true } } },
  });
  return NextResponse.json(courses);
}

export async function POST(req: Request) {
  const auth = getAuth(req);
  if (auth !== process.env.ADMIN_TOKEN) return unauthorized();

  const body = (await req.json()) as Partial<Payload>;
  if (
    !body.title ||
    !body.level ||
    !body.duration ||
    !body.price ||
    !body.blurb ||
    !Array.isArray(body.starts) ||
    body.starts.length === 0
  ) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  const base = slugify(body.title);
  let slug = base || "course";
  let i = 1;
  while (await prisma.course.findUnique({ where: { slug } })) {
    slug = `${base}-${i++}`;
  }

  const course = await prisma.course.create({
    data: {
      slug,
      title: body.title.trim(),
      code: body.code?.trim() || null,
      level: body.level.trim(),
      duration: body.duration.trim(),
      price: body.price.trim(),
      blurb: body.blurb.trim(),
      starts: {
        create: body.starts.map((iso) => ({ date: new Date(iso) })),
      },
    },
    include: { starts: true },
  });

  return NextResponse.json(course, { status: 201 });
}

export async function PATCH(req: Request) {
  const auth = getAuth(req);
  if (auth !== process.env.ADMIN_TOKEN) return unauthorized();

  const body = (await req.json()) as Partial<Payload>;
  if (
    !body.id ||
    !body.title ||
    !body.level ||
    !body.duration ||
    !body.price ||
    !body.blurb ||
    !Array.isArray(body.starts) ||
    body.starts.length === 0
  ) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  const base = slugify(body.title);
  let slug = base || "course";
  let i = 1;
  while (await prisma.course.findUnique({ where: { slug } })) {
    slug = `${base}-${i++}`;
  }

  const course = await prisma.course.update({
    where: { id: body.id },
    data: {
      slug,
      title: body.title.trim(),
      code: body.code?.trim() || null,
      level: body.level.trim(),
      duration: body.duration.trim(),
      price: body.price.trim(),
      blurb: body.blurb.trim(),
      starts: {
        deleteMany: {}, // Remove existing dates
        create: body.starts.map((iso) => ({ date: new Date(iso) })),
      },
    },
    include: { starts: true },
  });

  return NextResponse.json(course, { status: 200 });
}

export async function DELETE(req: Request) {
  const auth = req.headers.get("authorization")?.replace("Bearer ", "");
  if (auth !== process.env.ADMIN_TOKEN) return new NextResponse("Unauthorized", { status: 401 });

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return new NextResponse("Missing course ID", { status: 400 });

  await prisma.course.delete({ where: { id } });
  return NextResponse.json({ success: true }, { status: 200 });
}