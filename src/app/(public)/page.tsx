// src/app/page.tsx
import Hero from "./home/components/Hero";
import ServicesGridFancy from "./home/components/sections/ServicesGridFancy";
import WhyChooseUs from "./home/components/sections/WhyChooseUs";
import Coverage from "./home/components/sections/Coverage";
import Testimonials from "./home/components/sections/Testimonials";
import PrimaryCta from "./home/components/sections/PrimaryCta";

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
