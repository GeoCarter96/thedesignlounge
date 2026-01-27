"use client";
import { useEffect } from "react";
import Link from "next/link";
import './theloungemenu.css';

const SECTIONS = [
  { id: "planners", title: "Planners", sub: "Architectural Time Management", img: "/planner.png" },
  { id: "freebies", title: "Freebies", sub: "Gifts from the Atelier", img: "/freebie.jpg" },
  { id: "ebooks", title: "Ebooks", sub: "Curated Digital Knowledge", img: "/ebooks.PNG" },
  { id: "courses", title: "Courses", sub: "Mastery of Restraint", img: "/course.PNG" },
  { id: "flyers", title: "Flyers", sub: "Digital Couture Assets", img: "/flyer.PNG" },
  { id: "privatelounge", title: "Private Lounge", sub: "Exclusivity Redefined", img: "/ple1.PNG" },
];

export default function LuxuryExperience() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-section").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      {SECTIONS.map((section, i) => (
        <section 
          key={section.id} 
          className="reveal-section relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-32 border-b border-white/5 overflow-hidden"
        >
          {/* Section Heading */}
          <div className="text-center mb-20">
            <p className="reveal-sub uppercase text-[10px] mb-4 font-light tracking-[0.2em] opacity-0">
              Volume 0{i + 1} // {section.sub}
            </p>
            <h2 className="reveal-title font-serif text-5xl md:text-8xl font-extralight tracking-tighter italic opacity-0 translate-y-5">
              {section.title}
            </h2>
          </div>

          {/* PRODUCT MONOLITH */}
          <div className="reveal-monolith relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm bg-white/5 border border-white/10 shadow-2xl group opacity-0 scale-95 transition-all">
            <img 
              src={section.img} 
              alt={section.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0"
            />
            <Link 
              href={section.title === 'The Lobby' ? '/' : section.title === 'Lounge Menu' ? '/theloungemenu' : `/${section.id}`} 
              className="absolute inset-0 z-30 cursor-pointer" 
              aria-label={`View ${section.title}`} 
            />
          </div>

          <Link 
            href={`/${section.id}`}
            className="reveal-link mt-16 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-[#D4AF37] border-b border-white/5 pb-2 transition-all duration-700 opacity-0"
          >
            Explore {section.title} —
          </Link>
        </section>
      ))}
    </div>
  );
}
