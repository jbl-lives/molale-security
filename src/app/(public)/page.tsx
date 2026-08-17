// src/app/page.tsx
import Hero from "./home/components/Hero";
import ServicesGridFancy from "./home/components/sections/ServicesGridFancy";
import WhyChooseUs from "./home/components/sections/WhyChooseUs";
import Coverage from "./home/components/sections/Coverage";
import Testimonials from "./home/components/sections/Testimonials";
import PrimaryCta from "./home/components/sections/PrimaryCta";

export const metadata = {
  title: "Molale Security | Professional Tactical Protection",
  description: "North West's premier security force. Specialist guarding, 24/7 armed response, and K-9 tactical units since 2006.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="min-h-dvh">
      <Hero />
      <ServicesGridFancy />
      <WhyChooseUs />
      <Coverage />
      <Testimonials />
      <PrimaryCta />
    </main>
  );
}
