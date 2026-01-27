"use client";
import { useEffect } from "react";
import Link from "next/link";
import './testimonials.css';

const TESTIMONIALS = [
  {
    quote: "Quick and convenient luxury designs for marketing my business. The instructions were so easy to follow and I love that I can customize the design to my own personal brand kit. This saved me so much time!",
    author: "Teaira",
  },
  {
    quote: "The quality of the E book covers is TOP TEIR SIS!!! I’ve been looking for luxury and cute E book covers and I found the perfect one!!! Don’t hesitate buy this!!!!!!",
    author: "Tasia",
  },
];

export default function Testimonials() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-element").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black pt-20">
      
      {/* 1. Header Section */}
      <section className="pt-20 pb-20 px-10 border-b border-white/5">
        <h1 className="reveal-element anim-slide-up text-5xl md:text-8xl font-extralight tracking-tighter opacity-0 translate-y-8">
          Voices of <br />
          <span className="italic font-normal text-[#D4AF37]">The Lounge</span>
        </h1>
      </section>

      {/* 2. Testimonial List */}
      <section className="px-10 max-w-7xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <div 
            key={i}
            className="reveal-element anim-fade-up py-32 border-b border-white/5 flex flex-col md:flex-row justify-between items-start gap-12 group opacity-0 translate-y-12 transition-all duration-1000"
          >
            {/* Massive Gold Quote Mark */}
            <div className="text-8xl font-serif text-[#D4AF37] opacity-20 select-none group-hover:opacity-100 transition-opacity duration-1000">
              “
            </div>
            
            <div className="max-w-3xl">
              <p className="text-xl md:text-3xl italic font-extralight leading-relaxed tracking-tight text-white/90">
                {t.quote}
              </p>
              
              <div className="mt-16 flex flex-col gap-1">
                <span className="text-xl font-normal uppercase tracking-[0.2em] text-[#D4AF37]">
                  {t.author}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Luxury Call to Action */}
      <section className="hidden md:flex py-60 flex-col items-center text-center px-6">
        <div className="reveal-element anim-fade-in opacity-0">
          <p className="text-xs uppercase tracking-[0.6em] opacity-30 mb-12">Your Seat is Waiting</p>
          <Link 
            href="/"
            className="rounded-full border border-white/20 bg-transparent px-16 py-6 text-sm font-bold uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-700 hover:scale-105"
          >
            Return to The Lobby
          </Link>
        </div>
      </section>
    </div>
  );
}
