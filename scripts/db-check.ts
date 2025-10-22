import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.findMany({ take: 1 });
  console.log("Connected. Sample query OK. Courses:", courses.length);
}

main().catch((e) => {
  console.error("DB check failed:", e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
