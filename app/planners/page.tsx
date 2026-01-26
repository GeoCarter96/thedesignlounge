

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import './planners.css'

export default function PlannerProductPage() {
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
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4">Tactile Excellence</p>
          <h1 className="font-serif-display text-6xl md:text-8xl font-extralight tracking-tighter italic">
            The Obsidian <span className="non-italic font-normal">Planner</span>
          </h1>
        </motion.div>

        {/* HERO IMAGE PLACEHOLDER - Vertical 4:5 Aspect Ratio */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative w-full max-w-lg aspect-[4/5] bg-neutral-900 border border-white/5 rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] group overflow-hidden"
        >
          {/* Internal Loading State */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity duration-1000">
             <div className="flex flex-col items-center gap-4 text-center px-10">
                <div className="w-1 h-16 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent animate-pulse" />
                <p className="text-[9px] uppercase tracking-[0.5em]">Awaiting Visual Masterpiece</p>
             </div>
          </div>

          {/* Actual Image Holder */}
          <img 
            src="/planner-mockup.jpg" 
            alt="Luxury Planner Mockup"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
            style={{ opacity: 0 }}
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
          <h2 className="text-xs uppercase tracking-[0.5em] text-white/30">The Philosophy</h2>
          <p className="text-2xl font-extralight leading-relaxed tracking-tight">
            A sanctuary for your most ambitious intentions. Bound in vegan leather with <span className="text-[#D4AF37]">120gsm champagne paper</span>, designed to hold the weight of your future.
          </p>
        </div>

        <div className="flex flex-col gap-12 pt-4">
          <div className="border-b border-white/10 pb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">Specifications</span>
            <p className="mt-2 text-sm font-light text-white/60 uppercase tracking-widest">(Item Still In Production)</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-extralight tracking-widest">$65.00</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">Limited Batch Release</span>
            </div>
            
          {/* <Link 
              href="/checkout" 
              className="rounded-full cursor-not-allowed bg-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black hover:bg-[#D4AF37] hover:text-white transition-all duration-500"
            >
              Acquire Item
            </Link>*/}
          </div>
        </div>
      </section>

      {/* 3. QUOTE VIGNETTE */}
      <section className="py-32 flex flex-col items-center justify-center border-t border-white/5 bg-gradient-to-b from-black to-neutral-950">
         <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-serif-display text-3xl md:text-5xl italic text-white/80 px-6 text-center max-w-4xl"
         >
          "Organize the chaos, curate the legacy."
         </motion.p>
      </section>
    </div>
  );
}

