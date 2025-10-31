// src/app/about/page.tsx
import MissionVision from "./MissionVision";
import Values from "./Values";
import Compliance from "./Compliance";
import Leadership from "./Leadership";
import Milestones from "./Milestones";
import Stats from "./Stats";
import PrimaryCta from "../home/components/sections/PrimaryCta";
import AboutHeroModern from "./AboutHeroModern";

export const metadata = {
  title: "About Us",
  description: "Learn more about Molale Security, our mission, values, and leadership team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroModern />
      <MissionVision />
      <Values />
      <Compliance />
      <Leadership />
      <Milestones />
      <Stats />
      
      <PrimaryCta />
    </main>
  );
}
