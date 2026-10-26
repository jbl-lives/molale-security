import Link from "next/link";

const academies = [
  {
    title: "Security Training (PSIRA)",
    description: "Professional PSIRA grade certification and compliance.",
    href: "/training/security",
    image: "assets/images/training/security-training-pic.jpg", // Add your images to /public/images/
  },
  {
    title: "K9 & Dog Handling",
    description: "Specialized training for security dogs and professional handlers.",
    href: "/training/k9",
    image: "assets/images/training/k9-training.jpg",
  },
  {
    title: "Advanced Tactical",
    description: "Specialized firearm and tactical response training.",
    href: "/training/specialized",
    image: "assets/images/training/tactical-bg.jpg",
  },
];

export default function TrainingHub() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Simple Hero Section */}
      <section className="bg-slate-900 py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Molale Training Academies</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Choose a specialized path to advance your career in the security industry.
        </p>
      </section>

      {/* Academy Selection Grid */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academies.map((academy) => (
            <Link 
              key={academy.href} 
              href={academy.href}
              className="group relative h-[400px] overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2"
            >
              {/* Background Image Container */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${academy.image}')` }}
              />
              
              {/* Dark Overlay (Gradient for text readability) */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-[#d0ad6d] transition-colors">
                  {academy.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4  transition-opacity duration-300">
                  {academy.description}
                </p>
                <div className="inline-block w-fit px-4 py-2 bg-[#8f692b] rounded text-sm font-semibold uppercase tracking-wider">
                  View Academy
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}