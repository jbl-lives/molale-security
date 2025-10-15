export type Course = {
  id: string;
  title: string;
  code?: string;
  level: string;
  duration: string;
  startDates: string[];
  price: string;
  blurb: string;
  img?: string; // optional image override per course
};

export const courses: Course[] = [
  {
    id: "grade-e",
    title: "Grade E (Basic Security)",
    code: "PSIRA Grade E",
    level: "Entry",
    duration: "3 days",
    startDates: ["2025-11-04", "2025-11-18", "2025-12-02"],
    price: "R1,450",
    blurb: "Introduction to private security, patrolling, observation and basic report writing.",
    img: "/assets/images/training.jpg",
  },
  {
    id: "grade-d",
    title: "Grade D (Access Control)",
    code: "PSIRA Grade D",
    level: "Foundation",
    duration: "4 days",
    startDates: ["2025-11-11", "2025-11-25"],
    price: "R1,750",
    blurb: "Access control procedures, searching, visitor management and communication etiquette.",
    img: "/assets/images/training.jpg",
  },
  {
    id: "grade-c",
    title: "Grade C (Asset Protection)",
    code: "PSIRA Grade C",
    level: "Core",
    duration: "5 days",
    startDates: ["2025-11-18", "2025-12-09"],
    price: "R2,450",
    blurb: "Guarding of high-value assets, incident handling, emergency responses and legal aspects.",
    img: "/assets/images/training.jpg",
  },
  {
    id: "control-room",
    title: "Control Room Operator",
    level: "Specialist",
    duration: "5 days",
    startDates: ["2025-11-25"],
    price: "R2,950",
    blurb: "Alarm/CCTV monitoring, radio procedure, incident logging and escalation protocols.",
    img: "/assets/images/training.jpg",
  },
];
