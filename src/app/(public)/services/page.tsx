// src/app/services/page.tsx
import type { Metadata } from "next";
import ServicesHeroModern from "./ServicesHeroModern";
import IndustriesServed from "./IndustriesServed";
import Process from "./Process";
import ServicesHighlights from "./ServicesHighlights";
import ServicesGrid from "./ServicesGrid";
import ServicesTrust from "./ServicesTrust";
import PrimaryCta from "../home/components/sections/PrimaryCta";

export const metadata: Metadata = {
  title: "Our Services | Molale Security",
  description:
    "Armed response, guarding, VIP protection, CCTV & alarms, screening and investigations—PSIRA-compliant security services across Klerksdorp and surrounds.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroModern />
      <ServicesGrid />
      <ServicesHighlights />
      
      <IndustriesServed />
      <Process />
      <ServicesTrust />
      <PrimaryCta />
    </main>
  );
}
