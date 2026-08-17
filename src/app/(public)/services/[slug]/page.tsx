// // app/services/[slug]/page.tsx

// import { notFound } from "next/navigation";
// import { servicesFancy } from "@/data/services";
// import Image from "next/image";
// import { CheckCircle2, ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
//   // Find the service that matches the URL slug
//   const service = servicesFancy.find((s) => s.slug === params.slug);

//   // If the service doesn't exist, show the 404 page
//   if (!service) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[40vh] min-h-[300px] w-full bg-black">
//         <Image
//           src={service.img}
//           alt={service.title}
//           fill
//           className="object-cover opacity-60"
//           priority
//         />
//         <div className="absolute inset-0 flex items-center">
//           <div className="mx-auto max-w-7xl px-4 md:px-6 w-full">
//             <Link 
//               href="/services" 
//               className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition"
//             >
//               <ArrowLeft className="h-4 w-4" /> Back to Services
//             </Link>
//             <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">
//               {service.title}
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="py-12 md:py-20">
//         <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-3 gap-12">
          
//           {/* Main Copy */}
//           <div className="md:col-span-2 space-y-6">
//             <h2 className="text-3xl font-bold text-gray-900">Professional {service.title} in South Africa</h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               {service.introduction|| "Molale Security provides top-tier security solutions tailored to your specific needs. Our team is highly trained and PSIRA registered to ensure the safety of your assets and personnel."}
//             </p>
            
//             <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
//               <h3 className="text-xl font-bold mb-4">Key Features of this Service:</h3>
//               <ul className="grid sm:grid-cols-2 gap-4">
//                 {/* You can pull these from your FEATURES record if you export it, or add to your data file */}
//                 {["24/7 Monitoring", "Vetted Personnel", "Rapid Response", "Detailed Reporting"].map((item) => (
//                   <li key={item} className="flex items-center gap-3">
//                     <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
//                     <span className="font-medium text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Sidebar CTA */}
//           <div className="space-y-6">
//             <div className="sticky top-24 p-6 rounded-2xl bg-(--color-primary) text-white shadow-xl">
//               <h3 className="text-xl font-bold mb-2">Secure Your Site</h3>
//               <p className="text-white/80 mb-6 text-sm">
//                 Contact us now for a custom quote on {service.title} services.
//               </p>
//               <div className="flex flex-col gap-3">
//                 <Button asChild className="bg-white text-black hover:bg-gray-100">
//                   <Link href="/contact">Request a Quote</Link>
//                 </Button>
//                 <Button asChild className="bg-[#25D366] hover:bg-[#1ebe57]">
//                   <a href={`https://wa.me/27838874914?text=I%20need%20info%20about%20${service.slug}`}>
//                     WhatsApp Us
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }