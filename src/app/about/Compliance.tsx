// src/components/about/Compliance.tsx
import Link from "next/link";
import { certifications } from "@/data/company";
import Image from "next/image";

export default function Compliance() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Compliance & Training</h2>

        {/* Compliance cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {certifications.map((c) => (
            <div
              key={c.label}
              className="p-6 bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]"
            >
              <div className="text-sm uppercase tracking-wide text-gray-500">{c.label}</div>
              <div className="mt-1 text-gray-800">{c.desc}</div>
            </div>
          ))}
        </div>

        {/* Accreditations / logos */}
        <div className="mt-10">
          <h3 className="text-center text-xl font-semibold text-gray-900">Accreditations</h3>

          <div
            className="
              mt-6 grid gap-6 sm:gap-8
              grid-cols-2 sm:grid-cols-3 md:grid-cols-4
              place-items-center
            "
          >
            {/* PSIRA */}
            <div className="w-full max-w-[200px] rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition grid place-items-center">
              <Image
                src="/assets/images/creditations/psira.jpg"
                alt="PSIRA Registered"
                width={200}
                height={120}
                loading="lazy"
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 45vw"
                className="h-20 w-auto object-contain"
              />
            </div>

            {/* QCTO */}
            <div className="w-full max-w-[200px] rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition grid place-items-center">
              <Image
                src="/assets/images/creditations/qcto.png"
                alt="QCTO Registered"
                width={200}
                height={120}
                loading="lazy"
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 45vw"
                className="h-20 w-auto object-contain"
              />
            </div>

            {/* SASSETA */}
            <div className="w-full max-w-[200px] rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition grid place-items-center">
              <Image
                src="/assets/images/creditations/sasseta.png"
                alt="SASSETA Registered"
                width={200}
                height={120}
                loading="lazy"
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 45vw"
                className="h-20 w-auto object-contain"
              />
            </div>

            {/* SETA */}
            <div className="w-full max-w-[200px] rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition grid place-items-center">
              <Image
                src="/assets/images/creditations/seta-logo.png"
                alt="SETA Registered"
                width={200}
                height={120}
                loading="lazy"
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 45vw"
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>

          {/* Optional helper text */}
          <p className="mt-4 text-center text-sm text-gray-500">
            Official registrations and unit standards available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
