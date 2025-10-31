// src/components/about/AboutHero.tsx
export default function AboutHero() {
  return (
    <section
          className="relative isolate w-full min-h-[70svh] md:min-h-[80svh] overflow-hidden
                      bg-[url('/assets/images/monitoring.jpg')] bg-cover bg-center bg-no-repeat"
          aria-label="Molale Security hero"
          >
          <div className="absolute inset-0 -z-10 bg-black/50 backdrop-blur-[1.5px]" />

          <div className="mx-auto max-w-screen-xl px-4 md:px-6">
              {/* Center vertically & horizontally */}
              <div className="min-h-[70svh] md:min-h-[80svh] flex items-center justify-center">
              <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    About Molale Security
                  </h1>
                  <p className="mt-4 max-w-2xl mx-auto text-white/90">
                    Protecting what matters—armed response, guarding, CCTV &amp; alarms,
                    screening, investigations, and training.
                  </p>
              </div>
              </div>
          </div>
        </section>

  );
}
