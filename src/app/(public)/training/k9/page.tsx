"use client";

import React from 'react';
import { ShieldCheck, Target, Award, ArrowRight, Dog, Zap, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';



const K9TrainingPage = () => {
  const courses = [
    {
      title: "DH1: Patrol Dog Handler",
      level: "Level 01",
      description: "Foundational obedience, protection work, and handler-dog bonding for high-visibility security patrols.",
      icon: ShieldCheck,
      details: ["Obedience & Control", "Aggression Handling", "Search & Tracking"]
    },
    {
      title: "DH2: Narcotics Detection",
      level: "Level 02",
      description: "Advanced scent-discrimination training for illegal substance identification in industrial sectors.",
      icon: Target,
      details: ["Passive Indication", "Scent Discrimination", "Industrial Protocol"]
    },
    {
      title: "DH3: Explosives Detection",
      level: "Level 03",
      description: "Specialized high-stakes training for identifying explosive components and chemical precursors.",
      icon: Award,
      details: ["IED Recognition", "Area Clearance", "Zero-Failure Policy"]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Cinematic Hero Section */}
      <section className="relative h-[70svh] flex items-center overflow-hidden bg-slate-950">
        <Image 
          src="/assets/images/training/k9-hero.webp" 
          alt="K-9 Tactical Training" 
          fill 
          priority
          className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/60 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#c29a50]" />
              <span className="text-[#c29a50] text-xs font-bold tracking-[0.4em] uppercase">Elite Academy</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-6">
              K-9 <br />
              <span className="text-slate-400 italic font-light">Tactical Unit.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-lg font-medium leading-relaxed">
              Professional canine handling and training services engineered for 
              high-stakes security environments.
            </p>
          </div>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-10 right-10 hidden md:flex items-center gap-4 text-white/20">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase vertical-text">DH Specialist</span>
          <div className="h-20 w-px bg-white/10" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#8f692b] text-xs font-bold tracking-[0.3em] uppercase">The Molale Standard</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-slate-900 tracking-tight">
              Discipline. Bond. <br /><span className="text-[#c29a50]">Precision.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At Molale Security, our K-9 division is built on the tactical bond between handler and dog. 
              We provide SASSETA-aligned training that meets international detection standards, 
              ensuring our teams are prepared for high-risk industrial and private sectors.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-[#c29a50]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Rapid Response</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-[#c29a50]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Health Audited</span>
               </div>
            </div>
          </div>
          
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
             <Image 
                src="/assets/images/training/k9-action.webp" // Add a gritty action shot here
                alt="Tactical Dog Training" 
                fill 
                className="object-cover"
             />
             <div className="absolute inset-0 border-20 border-white/10 rounded-[3rem]" />
          </div>
        </div>
      </section>

      {/* Courses Section - Tactical Cards */}
      <section className="bg-slate-950 py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">DH Certification <span className="text-slate-500 italic">Levels</span></h3>
            <div className="mt-4 h-1 w-16 bg-[#c29a50] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="group relative bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-14 w-14 bg-slate-900 rounded-2xl flex items-center justify-center text-[#c29a50] shadow-xl border border-white/5">
                    <course.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{course.level}</span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#c29a50] transition-colors">{course.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{course.description}</p>
                
                <ul className="space-y-3 border-t border-white/5 pt-8">
                  {course.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                       <div className="h-1.5 w-1.5 rounded-full bg-[#c29a50]" />
                       {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-slate-900 rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl">
            {/* Background Texture */}
            <Dog className="absolute -right-10 -bottom-10 h-64 w-64 text-white/5 pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
                Ready to Join the <br />
                <span className="text-[#c29a50]">K-9 Division?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Whether you are a civilian looking for career entry or a professional handler 
                seeking DH certification, the next intake is now open. 
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link 
                  href="/register?academy=k9" 
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#c29a50] text-slate-950 px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#c29a50]/20"
                >
                  START ENROLLMENT <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center gap-3">
                   <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Enrollment Active</span>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 inline-block">
                <p className="text-xs text-slate-500 font-medium">
                  <span className="text-[#d0ad6d] font-bold">Requirement:</span> All applicants must hold a valid PSIRA registration for DH certification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default K9TrainingPage;

