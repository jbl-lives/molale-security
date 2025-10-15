// "use client";

// import Link from "next/link";
//         // import { services, type Service } from "@/data/services";
// import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
// import {
//   Shield, ShieldCheck, Star, Camera, IdCard, Search, GraduationCap, ArrowRight
// } from "lucide-react";

// const ICONS: Record<Service["icon"], React.ComponentType<{ className?: string }>> = {
//   shield: ShieldCheck,       // for Armed Response
//   userShield: Shield,        // Physical Guarding (fallback to Shield)
//   star: Star,                // VIP
//   camera: Camera,            // CCTV & Alarms
//   id: IdCard,                // Screening
//   search: Search,            // PI
//   cap: GraduationCap,        // Training (optional)
// };

// export default function ServicesGrid() {
//   return (
//     <section className="w-full py-14 md:py-18 bg-white">
//       <div className="mx-auto max-w-screen-xl px-4 md:px-6">
//         <header className="max-w-2xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
//           <p className="mt-2 text-gray-600">
//             Professional security solutions tailored for homes, businesses, and events.
//           </p>
//         </header>

//         <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((s) => {
//             const Icon = ICONS[s.icon] ?? Shield;
//             return (
//               <Link key={s.slug} href={`/services/${s.slug}`} className="group focus:outline-none">
//                 <Card
//                   className=" rounded-xl shadow-sm transition
//                              hover:shadow-md hover:-translate-y-0.5 
//                              focus-within:-translate-y-0.5"
//                 >
//                   <CardHeader className="relative">
//                     {/* subtle brand accent behind icon */}
//                     <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full
//                                     bg-[var(--color-primary)]/10 blur-2 opacity-70
//                                     group-hover:opacity-90 transition" />
//                     <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg
//                                     bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
//                       <Icon className="h-5 w-5" />
//                     </div>

//                     <CardTitle className="mt-3 text-xl">{s.title}</CardTitle>
//                     <CardDescription className="text-gray-600">{s.blurb}</CardDescription>
//                   </CardHeader>

//                   <CardFooter className="pt-0">
//                     <span className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium">
//                       Learn more
//                       <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//                     </span>
//                   </CardFooter>
//                 </Card>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
