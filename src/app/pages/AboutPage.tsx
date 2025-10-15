import type { Metadata } from "next";
import Link from "next/link";
import AvatarFallback from "@/app/components/team/AvatarFallback";
import {
  company, mission, vision, values, leadership, milestones, stats, certifications
} from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Molale Security—our mission, vision, values, leadership, and commitment to rapid, ethical protection.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero / intro */}
      <section className="relative isolate w-full bg-[url('/assets/images/monitoring.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 -z-10 bg-black/50 backdrop-blur-[1.5px]" />
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 py-16 md:py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About {company.name}</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            {company.tagline} — founded in {company.founded}, headquartered in {company.hq}. We provide
            armed response, guarding, CCTV & alarms, screening, investigations and training.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">{mission}</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]">
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">{vision}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-gray-50 py-12 md:py-16 border-y">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Values</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]
                           hover:shadow-[0_8px_28px_rgb(0_0_0_/_0.10)] transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications / Compliance */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Compliance & Training</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {certifications.map((c) => (
              <div key={c.label} className="p-6 bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]">
                <div className="text-sm uppercase tracking-wide text-gray-500">{c.label}</div>
                <div className="mt-1 text-gray-800">{c.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-md bg-gray-50 p-4 text-gray-700">
            Interested in upskilling? Visit our{" "}
            <Link href="/training" className="text-[var(--color-primary)] font-medium hover:underline">
              Training Academy
            </Link>{" "}
            for officer and client training options.
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="w-full bg-gray-50 py-12 md:py-16 border-y">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Leadership</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((m) => (
              <article
                key={m.name}
                className="p-6 bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_16px_rgb(0_0_0_/_0.06)] h-full"
              >
                <div className="flex items-center gap-4">
                  <AvatarFallback name={m.name} src={m.avatar} size={72} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                    <p className="text-sm text-gray-600">{m.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h2>
          <ol className="mt-8 relative border-l border-gray-200/70 pl-6">
            {milestones.map((m) => (
              <li key={m.year} className="mb-6 ml-2">
                <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-[var(--color-primary)]" />
                <div className="font-semibold text-gray-900">{m.year} — {m.title}</div>
                <div className="text-gray-600">{m.blurb}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full bg-gray-50 py-12 md:py-16 border-y">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">At a Glance</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="p-6 bg-white text-center shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]">
                <div className="text-3xl font-extrabold text-[var(--color-primary)]">{s.value}</div>
                <div className="mt-1 text-gray-700">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[var(--color-primary)] text-white py-12 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Work with a team that shows up.</h3>
            <p className="mt-2 text-white/90">
              PSIRA compliant • Vetted officers • 24/7 control room
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-white/10 px-5 py-3 font-semibold hover:bg-white/15 transition"
            >
              Request a Quote
            </Link>
            <a
              href={`https://wa.me/27XXXXXXXXX?text=Hi%20${encodeURIComponent(company.name)}%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white text-[var(--color-primary)] px-5 py-3 font-semibold hover:bg-white/90 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD (Organization) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: company.name,
            url: "https://molalesecurity.com",
            description: `${company.tagline} Founded ${company.founded}.`,
            email: company.email,
            telephone: company.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: company.hq,
              addressCountry: "ZA",
            },
            sameAs: [
              "https://www.facebook.com/your-page",
              "https://www.linkedin.com/company/your-company",
            ],
          }),
        }}
      />
    </main>
  );
}
