"use client";
import { useEffect } from "react";
import Link from "next/link";
import './ebooks.css';

const PUBLICATIONS = [
  {
    id: "vol-01",
    title: "How To Create And Sell Digital Products",
    subtitle: "(Item Still In Production)",
    img: "/ebooks.PNG",
    price: "",
  }
];

export default function Ebooks() {
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
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black pt-32">
      
      {/* 1. Header: Editorial Intro */}
      <section className="px-10 max-w-7xl mx-auto pb-24 border-b border-black">
        <p className="reveal anim-fade-in uppercase text-[10px] mb-6 tracking-[0.5em] opacity-0">
          The Digital Atelier // Library
        </p>
        <h1 className="reveal anim-slide-up font-serif text-6xl md:text-8xl font-extralight tracking-tighter opacity-0 translate-y-5">
          Curated <span className="italic text-[#D4AF37]">Knowledge</span>
        </h1>
      </section>

      {/* 2. The Collection Grid */}
      <section className="px-10 max-w-7xl mx-auto py-32 flex flex-col items-center">
        {PUBLICATIONS.map((book, i) => (
          <div 
            key={book.id}
            style={{ transitionDelay: `${i * 0.2}s` }}
            className="reveal anim-slide-up group cursor-pointer w-full max-w-lg opacity-0 translate-y-10 relative"
          >
            {/* LIGHT BEAM LOGIC: Positioned above the book container */}
            <div className="hidden md:block absolute -top-48 left-0 w-full h-72 pointer-events-none z-0 overflow-hidden">
              <img
                src="/lightbeam.png"
                alt=""
                className="w-full h-full opacity-200 object-contain opacity-30 mix-blend-screen"
              />
            </div>

            {/* Luxury Book Display */}
            <div className="relative z-10 w-full bg-neutral-900 overflow-hidden rounded-sm shadow-2xl transition-transform duration-1000 group-hover:-translate-y-4 mt-8">
              <img 
                src={book.img} 
                alt={book.title}
                className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
              />
              
              {/* Gold Spine Detail */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#D4AF37] via-[#F9E498] to-[#AF8A3F] opacity-50 z-20" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </div>
            </div>

            {/* Book Metadata: Higher Z-Index to remain crisp over light */}
            <div className="relative z-20 mt-12 flex justify-between items-start">
              <div className="max-w-[70%]">
                <span className="text-[10px] text-[#D4AF37] tracking-[0.3em] uppercase">{book.id}</span>
                <h3 className="text-2xl font-serif mt-2 italic group-hover:text-[#D4AF37] transition-colors">{book.title}</h3>
                <p className="text-sm text-white/40 mt-4 font-light leading-relaxed">{book.subtitle}</p>
              </div>
              <span className="text-lg font-extralight tracking-widest">{book.price}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Global Shipping/Delivery Note */}
      <section className="py-40 text-center border-t border-white/5 reveal anim-fade-in opacity-0">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white">
          Instant Digital Fulfillment // Secure Encryption
        </p>
      </section>
      
    </div>
  );
}

