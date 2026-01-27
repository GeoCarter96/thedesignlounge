"use client";
import { useEffect } from "react";
import Link from "next/link";
import './courses.css';

const CURRICULUM = [
  { id: "01", title: "The Visual Narrative", detail: "Decoding the language of high-end aesthetics." },
  { id: "02", title: "Atmospheric Design", detail: "Creating digital spaces that breathe." },
  { id: "03", title: "The Golden Ratio", detail: "Implementing mathematical precision in UX." },
];

export default function Courses() {
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
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO: Cinematic Introduction */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0 opacity-40">
           <video autoPlay loop muted playsInline className="w-full h-full object-cover">
             <source src="/luxury-ink.mp4" type="video/mp4" />
           </video>
        </div>
        
        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-8 md:gap-12 w-full max-w-7xl">
          <div className="reveal anim-fade-in opacity-0">
            <p className="uppercase text-[10px] mb-6 font-light tracking-[0.2em]">
              A Masterclass by The Design Lounge
            </p>

            <h1 className="reveal anim-slide-up font-serif text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter italic leading-tight opacity-0 translate-y-5">
              The Canva<span className="text-[#D4AF37] not-italic"> Crash Course</span>
            </h1>
          </div>

          <div className="reveal anim-scale-in relative w-full max-w-lg  overflow-hidden rounded-xl bg-white/5 border border-white/10 shadow-2xl group mx-auto opacity-0 scale-95 transition-all">
            <img 
              src="/course.PNG" 
              alt="Course Preview"
              className=" inset-0 w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-60 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY */}
      <section className="py-32 md:py-48 px-10 max-w-5xl mx-auto text-center">
        <h2 className="reveal anim-fade-in text-xs uppercase tracking-[0.5em] text-white/30 mb-12 opacity-0">The Philosophy</h2>
        <p className="reveal anim-slide-up text-2xl md:text-5xl font-extralight leading-snug tracking-tight opacity-0 translate-y-5">
          True luxury is not about what is added, but what is <span className="text-[#D4AF37]">carefully removed</span>.
        </p>
      </section>

      {/* 3. CURRICULUM */}
      <section className="py-24 md:py-40 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="lg:sticky lg:top-40 reveal anim-fade-in opacity-0">
            <h3 className="font-serif text-5xl md:text-6xl italic">The Syllabus</h3>
            <p className="mt-6 text-white/40 max-w-xs font-light text-lg">A self-paced immersive journey into the anatomy of premium design.</p>
          </div>
          
          <div className="flex flex-col border-t border-white/10">
            {CURRICULUM.map((item, i) => (
              <div 
                key={item.id}
                style={{ transitionDelay: `${i * 0.1}s` }}
                className="reveal anim-slide-right py-10 md:py-14 border-b border-white/10 flex gap-8 md:gap-12 group cursor-pointer transition-all opacity-0 translate-x-[-10px]"
              >
                <span className="text-[#D4AF37] font-serif text-xl opacity-40 group-hover:opacity-100 transition-opacity">{item.id}</span>
                <div>
                  <h4 className="text-xl md:text-2xl uppercase tracking-widest mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                  <p className="text-white/40 font-light leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENROLLMENT */}
      <section className="py-40 md:py-60 bg-[#080808] border-y border-white/5 text-center px-6">
        <div className="reveal anim-fade-in ">
          <h2 className="text-4xl text-white md:text-7xl font-extralight mb-8">Secure Your Seat</h2>
          <p className="mb-16 text-white tracking-[0.3em] uppercase text-[10px] font-light italic">Start Your 2026 With A Bang</p>
          <Link 
            href="https://www.theedesignlounge.co/product/the-canva-crash-course/7"
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-block px-12 md:px-20 py-6 rounded-full border border-[#D4AF37] text-white overflow-hidden transition-all"
          >
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-black transition-colors duration-500">Acquire Crash course</span>
            <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </section>
    </div>
  );
}
