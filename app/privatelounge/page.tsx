"use client";
import { useEffect } from "react";
import Link from "next/link";
import './privatelounge.css';

const COLLECTION = [
  { id: "ple1", category: "Digital", title: "The Private Lounge Experience", price: "$17", link: "https://www.theedesignlounge.co/product/the-private-lounge-experience-night-1-the-brand-identity-bar/2" },
  { id: "ple2", category: "Digital", title: "The Lounge Legacy Table", price: "$17", link: "https://www.theedesignlounge.co/product/the-lounge-legacy-table-night-3/6" },
  { id: "ple3", category: "Digital", title: "The Suite Of Self Leadership", price: "$17", link: "https://www.theedesignlounge.co/product/the-suite-of-self-leadership-night-2/4" },
];

export default function PrivateloungePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] pt-32 pb-40">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="px-10 max-w-7xl mx-auto pb-24 border-b border-white/5">
        <p className="reveal anim-fade-in uppercase text-[10px] mb-6 font-light tracking-[0.2em] opacity-0">
          Curated Excellence // Volume I
        </p>
        <h1 className="reveal anim-slide-up font-serif text-5xl md:text-8xl font-extralight tracking-tighter opacity-0 translate-y-5">
          The <span className="italic text-[#D4AF37]">Private Lounge</span> Experience
        </h1>
      </section>

      {/* 2. THE TRIPTYCH GRID */}
      <section className="px-10 max-w-7xl mx-auto py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {COLLECTION.map((item, i) => (
            <div 
              key={item.id}
              style={{ transitionDelay: `${i * 0.2}s` }}
              className="reveal anim-slide-up group flex flex-col opacity-0 translate-y-8 relative"
            >
              {/* LIGHT BEAM LOGIC: Desktop only, layered behind text */}
              <div className="hidden md:block absolute -top-40 left-0 w-full h-64 pointer-events-none z-0 overflow-hidden">
                <img
                  src="/lightbeam.png"
                  alt=""
                  className="w-full h-full opacity-200 object-contain opacity-30 mix-blend-screen"
                />
              </div>

              {/* PRODUCT IMAGE CONTAINER */}
              <div className="relative z-10 w-full max-w-lg bg-neutral-950 border border-white/5 overflow-hidden rounded-sm shadow-2xl transition-all duration-1000 group-hover:border-[#D4AF37]/40 mt-8">
                <img 
                  src={`/${item.id}.png`} 
                  alt={item.title}
                  className="w-full h-auto object-contain opacity-80 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = target.src.endsWith('.png') ? target.src.replace('.png', '.PNG') : target.src.replace('.PNG', '.png');
                  }}
                />
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                   <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </div>
              </div>

              {/* TEXT CONTENT CONTAINER */}
              <div className="relative z-20 mt-10 flex flex-col items-start">
                <div className="flex justify-between w-full items-baseline">
                  <span className="text-[9px] text-[#D4AF37] tracking-[0.5em] uppercase font-medium">{item.category}</span>
                  <span className="text-sm font-extralight opacity-40">{item.price}</span>
                </div>
                <h3 className="text-2xl font-serif mt-3 italic group-hover:text-[#D4AF37] transition-colors duration-500">
                  {item.title}
                </h3>
                <Link 
                  href={item.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 text-[10px] uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-1 hover:text-white hover:border-white transition-all duration-500"
                >
                  View Details —
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VIGNETTE CLOSURE */}
      <section className="py-40 border-t border-white/5 text-center">
         <p className="reveal anim-fade-in text-[10px] uppercase tracking-[1em] opacity-0">
            Exclusivity is a Dialogue
         </p>
      </section>
    </div>
  );
}
