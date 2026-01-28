"use client";
import { useEffect } from "react";
import Link from "next/link";
import './planners.css';

export default function PlannerProductPage() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] pt-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center px-6">
        
        {/* CONTAINER A: THE TEXT (Top Layer) */}
        <div className="reveal anim-slide-up text-center mb-12 relative z-30 opacity-0 translate-y-5">
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4">Tactile Excellence</p>
          <h1 className="font-serif text-6xl md:text-8xl font-extralight tracking-tighter italic">
            Balanced By <span className="not-italic font-normal">Design</span>
          </h1>
        </div>

        {/* CONTAINER B: THE LIGHT (Middle Layer) */}
        {/* Spacer creates the gap for the light to shine onto the planner */}
        <div className="hidden md:block relative w-full max-w-lg h-32 pointer-events-none z-10 overflow-visible">
          <div className="absolute top-8 left-0 w-full h-72">
            <img
              src="/lightbeam.png"
              alt=""
              className="w-full h-full object-contain opacity-30 mix-blend-screen"
            />
          </div>
        </div>

        {/* CONTAINER C: THE IMAGE (Base Layer) */}
        <div className="relative w-full max-w-lg">
          <div className="reveal anim-scale-in relative z-20 w-full bg-neutral-900 border border-white/5 rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] group overflow-hidden opacity-0 scale-95 transition-all">
            <img 
              src="/planner.png" 
              alt="Luxury Planner Mockup"
              className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />

            {/* Signature Shimmer Effect */}
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
              <div 
                className="absolute inset-0 w-full h-full -translate-x-full group-hover:animate-shimmer" 
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.02) 60%, transparent 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT DETAILS */}
      <section className="max-w-5xl mx-auto py-40 px-10 grid grid-cols-1 md:grid-cols-2 gap-24 relative z-40">
        <div className="reveal anim-slide-up flex flex-col gap-8 opacity-0 translate-y-5">
          <h2 className="text-xs uppercase tracking-[0.5em] text-white/30">The Philosophy</h2>
          <p className="text-2xl font-extralight leading-relaxed tracking-tight">
            A sanctuary for your most ambitious intentions. Designed to hold the weight of your future.
          </p>
        </div>

        <div className="reveal anim-slide-up flex flex-col gap-12 pt-4 opacity-0 translate-y-5" style={{ transitionDelay: '0.2s' }}>
          <div className="border-b border-white/10 pb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">Specifications</span>
            <p className="mt-2 text-sm font-light text-white/60 uppercase tracking-widest">(Item Still In Production)</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">Limited Batch Release</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUOTE VIGNETTE */}
      <section className="py-32 flex flex-col items-center justify-center border-t border-white/5 bg-gradient-to-b from-black to-neutral-950 relative z-40">
         <p className="reveal anim-fade-in font-serif text-3xl md:text-5xl italic text-white/80 px-6 text-center max-w-4xl opacity-0">
          "Organize the chaos, curate the legacy."
         </p>
      </section>
    </div>
  );
}
