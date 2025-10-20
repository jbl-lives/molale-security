// src/app/page.tsx
import Hero from "./components/Hero";
import ServicesGridFancy from "./components/sections/ServicesGridFancy";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Coverage from "./components/sections/Coverage";
import Testimonials from "./components/sections/Testimonials";
import PrimaryCta from "./components/sections/PrimaryCta";

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
