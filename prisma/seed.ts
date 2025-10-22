// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();

async function main() {
  // Grade C (already in your file) …
  await p.course.upsert({
    where: { slug: "grade-c" },
    update: {},
    create: {
      slug: "grade-c",
      title: "Grade C (Asset Protection)",
      code: "PSIRA Grade C",
      level: "Core",
      duration: "5 days",
      price: "R2,450",
      blurb: "Guarding of high-value assets, incident handling, emergency responses and legal aspects.",
      starts: { create: [{ date: new Date("2025-11-18") }, { date: new Date("2025-12-09") }] }
    }
  });

  // Grade D
  await p.course.upsert({
    where: { slug: "grade-d" },
    update: {},
    create: {
      slug: "grade-d",
      title: "Grade D (Access Control)",
      code: "PSIRA Grade D",
      level: "Foundation",
      duration: "4 days",
      price: "R1,750",
      blurb: "Access control procedures, searching, visitor management and communication etiquette.",
      starts: { create: [{ date: new Date("2025-11-11") }, { date: new Date("2025-11-25") }] }
    }
  });

  // Grade E
  await p.course.upsert({
    where: { slug: "grade-e" },
    update: {},
    create: {
      slug: "grade-e",
      title: "Grade E (Basic Security)",
      code: "PSIRA Grade E",
      level: "Entry",
      duration: "3 days",
      price: "R1,450",
      blurb: "Introduction to private security, patrolling, observation and basic report writing.",
      starts: { create: [{ date: new Date("2025-11-04") }, { date: new Date("2025-12-02") }] }
    }
  });

  // Control Room Operator
  await p.course.upsert({
    where: { slug: "control-room" },
    update: {},
    create: {
      slug: "control-room",
      title: "Control Room Operator",
      level: "Specialist",
      duration: "5 days",
      price: "R2,950",
      blurb: "Alarm/CCTV monitoring, radio procedure, incident logging and escalation protocols.",
      starts: { create: [{ date: new Date("2025-11-25") }] }
    }
  });
}

main().finally(() => p.$disconnect());
