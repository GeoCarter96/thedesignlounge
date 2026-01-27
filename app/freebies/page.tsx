"use client";
import { useEffect } from "react";
import Link from "next/link";
import './freebies.css';

const FREEBIES = [
  { id: "1", title: "The Soft Launch Playbook", desc: "4K Digital Couture", link: "https://www.theedesignlounge.co/product/the-soft-launch-playbook/5?cs=true&cst=custom" },
  { id: "2", title: "The Luxe Launchpad", desc: "4K Digital Couture", link: "https://www.theedesignlounge.co/product/the-luxe-launchpad/3?cp=true&sa=true&sbp=false&q=false" },
  { id: "3", title: "The Luxe Lounge Pregame", desc: "4K Digital Couture", link: "https://www.theedesignlounge.co/product/the-luxe-lounge-pre-game/1?cp=true&sa=true&sbp=false&q=false" },
];

export default function FreebiesPage() {
  useEffect(() => {
    // Native Intersection Observer to trigger reveals
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
      
      {/* 1. HEADER SECTION */}
      <section className="px-10 max-w-7xl mx-auto pb-24 border-b border-white/5">
        <p className="reveal anim-fade-in uppercase text-[10px] mb-6 opacity-0">
          Complimentary Access // The Lounge
        </p>
        <h1 className="reveal anim-slide-up font-serif text-6xl md:text-8xl font-extralight tracking-tighter opacity-0 translate-y-5">
          Gifted <span className="italic text-[#D4AF37]">Essentials</span>
        </h1>
      </section>

      {/* 2. THREE-COLUMN PRODUCT GRID */}
      <section className="px-10 max-w-7xl mx-auto py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {FREEBIES.map((item, i) => (
            <div 
              key={item.id}
              style={{ transitionDelay: `${i * 0.2}s` }}
              className="reveal anim-slide-up group flex flex-col opacity-0 translate-y-8"
            >
              <div className="relative  w-full bg-neutral-900 border border-white/5 overflow-hidden rounded-sm shadow-2xl transition-all duration-1000 group-hover:border-[#D4AF37]/30">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity">
                   <div className="w-12 h-12 border border-white/50 rounded-full animate-pulse flex items-center justify-center">
                      <span className="text-[8px] uppercase tracking-widest">{item.id}</span>
                   </div>
                </div>

                <img 
                  src={`/freebie${item.id}.jpg`} 
                  alt={item.title}
                  className=" inset-0 w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-1000"
                />

                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                   <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-start">
                <span className="text-[10px] text-[#D4AF37] tracking-[0.4em] uppercase">{item.desc}</span>
                <h3 className="text-xl font-serif mt-2 italic group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <Link 
                  href={item.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 text-[10px] uppercase tracking-[0.4em] text-white/40 border-b border-white/10 pb-1 hover:text-white hover:border-white transition-all"
                >
                  Download Gift —
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FOOTER NOTE */}
      <section className="mt-20 text-center opacity-20 reveal anim-fade-in">
         <p className="text-[9px] uppercase tracking-[0.8em]">Excellence should be accessible.</p>
      </section>
    </div>
  );
}
