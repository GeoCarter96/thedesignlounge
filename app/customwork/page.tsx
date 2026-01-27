"use client";
import { useEffect } from "react";
import Link from "next/link";
import './customwork.css';

export default function CustomWork() {
  useEffect(() => {
    // Native Intersection Observer for performance
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    // Track all elements with the 'reveal' class
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] pt-40 pb-32 px-6">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="max-w-5xl mx-auto text-center mb-32">
        <p className="reveal anim-fade-in uppercase text-[10px] mb-8 font-light opacity-0">
          Private Commissions // Bespoke Design
        </p>
        <h1 className="reveal anim-slide-up font-serif text-6xl md:text-9xl font-extralight tracking-tighter italic opacity-0 translate-y-5">
          The <span className="not-italic text-[#D4AF37]">Personal</span> Touch
        </h1>
      </section>

      {/* 2. THE PROCESS NARRATIVE */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 py-24 border-t border-white/5">
        <div className="reveal anim-slide-up flex flex-col gap-8 opacity-0 translate-y-5">
          <h2 className="text-xs uppercase tracking-[0.5em] text-[#D4AF37]">The Dialogue</h2>
          <p className="text-2xl font-extralight leading-relaxed tracking-tight">
            Custom work at The Lounge is a collaborative journey. You deal directly with the <span className="italic font-normal">Founder</span> to ensure every pixel aligns with your legacy.
          </p>
        </div>

        <div className="reveal anim-slide-up flex flex-col gap-10 opacity-0 translate-y-5" style={{ transitionDelay: '0.2s' }}>
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40">Direct Access</h3>
            <p className="text-lg font-light text-white/80">
              Skip the agency layers. Every bespoke project starts with a direct conversation to capture the nuance of your vision.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40">How to Inquire</h3>
            <p className="text-lg font-light text-white/80">
              Briefly outline your requirements via email. I personally review all inquiries to maintain the highest standard of execution.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE GOLD BULLION CTA */}
      <section className="py-40 flex flex-col items-center justify-center">
        <div className="reveal anim-scale-in w-full flex justify-center px-4 opacity-0 scale-95">
          <Link 
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm w-full max-w-3xl px-6 py-16 md:px-50 md:py-[100px] text-sm md:text-base font-bold uppercase tracking-[0.4em] md:tracking-[1em] text-black transition-all hover:scale-[1.02] active:scale-95 animate-gold-pulse shadow-[0_40px_100px_-20px_rgba(212,175,55,0.4)]"
            style={{
              background: 'linear-gradient(180deg, #AF8A3F 0%, #D4AF37 30%, #F9E498 50%, #D4AF37 70%, #AF8A3F 100%)',
            }}
          >
            <span className="relative z-10 block text-center">Contact Founder</span>

            {/* Shine Ray */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/95 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </div>

            {/* Bevels */}
            <div className="absolute inset-0 border-t-[8px] border-white/40 z-[15] pointer-events-none" />
            <div className="absolute inset-0 border-b-[8px] border-black/50 z-[15] pointer-events-none" />
          </Link>
        </div>

        <p className="reveal anim-fade-in mt-16 text-[10px] uppercase tracking-[0.8em] text-white/20 text-center opacity-0">
          Response time: 24 — 48 Hours
        </p>
      </section>
    </div>
  );
}
