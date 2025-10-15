// src/components/services/IndustriesServed.tsx
import Image from "next/image";
import {
  Building2,
  Home,
  GraduationCap,
  Factory,
  Store,
  Hammer,
  type LucideIcon,
} from "lucide-react";

type Industry = {
  icon: LucideIcon;
  name: string;
  desc: string;
  img: string; // background image path (public/)
};

const industries: Industry[] = [
  {
    icon: Home,
    name: "Residential",
    desc: "Estates, complexes, standalone homes and farms.",
    img: "/assets/images/industries/residential.jpg",
  },
  {
    icon: Store,
    name: "Retail",
    desc: "Shops, malls and warehousing / distribution.",
    img: "/assets/images/industries/retail.jpg",
  },
  {
    icon: Building2,
    name: "Commercial",
    desc: "Offices, parks, clinics and mixed-use sites.",
    img: "/assets/images/industries/commercial.jpg",
  },
  {
    icon: Factory,
    name: "Industrial",
    desc: "Manufacturing, plant, yards and logistics hubs.",
    img: "/assets/images/industries/industrial.jpg",
  },
  {
    icon: Hammer,
    name: "Construction",
    desc: "Projects, sites and asset protection.",
    img: "/assets/images/industries/construction.jpg",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "Schools, colleges and training venues.",
    img: "/assets/images/industries/education.jpg",
  },
];

export default function IndustriesServed() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 border-y">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Industries we protect</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {industries.map(({ icon: Icon, name, desc, img }) => (
            <article
              key={name}
              className="group relative overflow-hidden rounded-2xl shadow-[0_8px_28px_rgb(0_0_0_/_0.08)]"
            >
              {/* background image */}
              <div className="relative h-56 md:h-64">
                <Image
                  src={img}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-500 will-change-transform group-hover:scale-[1.03]"
                  priority={false}
                />
                {/* subtle dark overlay for readability */}
                <div className="absolute inset-0 bg-black/35 md:bg-black/30" />

                {/* glass panel (title + desc + icon) */}
                <div
                  className="
                    absolute bottom-3 left-3 right-3
                    rounded-xl border border-white/30
                    bg-white/15 backdrop-blur-md
                    p-4 text-white shadow-[0_10px_30px_rgba(0,0,0,.25)]
                  "
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-tight">{name}</h3>
                    <span
                      className="
                        inline-flex h-10 w-10 items-center  justify-center rounded-lg
                        bg-white/25 text-yellow-400 border border-yellow-100
                      "
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    
                  </div>
                  <p className="mt-2 text-sm text-white/90">{desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
