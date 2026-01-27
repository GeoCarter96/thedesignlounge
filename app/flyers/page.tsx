"use client";
import { useState, useEffect } from "react"; // 1. Import useState and useEffect
import { motion } from "framer-motion";
import Link from "next/link";
import './flyers.css';   

export default function FlyerProductPage() {
  // 2. Add hydration guard state
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 3. Set to true once component is mounted on the client
    setMounted(true);
  }, []);

  // 4. If not mounted yet, return a simple placeholder matching the background
  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] pt-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4">The Digital Flyer</p>
          <h1 className="font-serif text-6xl md:text-8xl font-extralight tracking-tighter italic">
            Will You Be My <span className="not-italic font-normal">Clientine ?</span>
          </h1>
        </motion.div>

        {/* HERO IMAGE PLACEHOLDER - Vertical 4:5 Aspect Ratio */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative w-full max-w-lg aspect-[4/5] bg-neutral-900 border border-white/5 rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] group overflow-hidden"
        >
          {/* Actual Image Holder */}
          <img 
            src="/flyer.PNG" // Ensure casing is correct on server (lowercase is best practice)
            alt="Luxury Flyer Mockup"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Signature Shine Effect */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </div>
        </motion.div>
      </section>

      {/* 2. PRODUCT DETAILS */}
      <section className="max-w-5xl mx-auto py-40 px-10 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="flex flex-col gap-8">
          <h2 className="text-xs uppercase tracking-[0.5em] text-white/30">The Specification</h2>
          <p className="text-2xl font-extralight leading-relaxed tracking-tight">
            Designed for those who understand that first impressions are the only impressions. High-resolution textures, editable typography, and a <span className="text-[#D4AF37]">curated gold-foil</span> finish.
          </p>
        </div>

        <div className="flex flex-col gap-12 pt-4">
          <div className="border-b border-white/10 pb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">Deliverables</span>
            <p className="mt-2 text-sm font-light text-white/60 uppercase tracking-widest">(Item Is Still In Production)</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              {/*<span className="text-2xl font-extralight tracking-widest">$45.00</span>*/}
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">Instant Secure Download</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VIGNETTE BOTTOM */}
      <section className="h-[40vh] flex items-center justify-center border-t border-white/5 opacity-20">
         <p className="font-serif text-4xl italic">Elegance is the only beauty that never fades.</p>
      </section>
    </div>
  );
}
