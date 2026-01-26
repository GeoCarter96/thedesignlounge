

"use client";
import { motion } from "framer-motion";
import './owner.css';

export default function Owner() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] pt-32 pb-40">
      
      {/* 1. HERO SECTION: Asymmetric Editorial Header */}
      <section className="px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-7">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 0.4, letterSpacing: "0.5em" }}
            className="uppercase text-[10px] mb-8"
          >
            The Architect // Founder
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="font-serif-display text-6xl md:text-9xl font-extralight tracking-tighter leading-none"
          >
            Defining <br />
            <span className="italic text-[#D4AF37]">The Aesthetic</span>
          </motion.h1>
        </div>
        <div className="md:col-span-5 md:text-right">
          <p className="text-xs uppercase tracking-[0.4em] opacity-30 italic">
            Est. 2026 // Indiana Studio
          </p>
        </div>
      </section>

      {/* 2. THE PORTRAIT: Vertical Monolith */}
      <section className="px-10 max-w-7xl mx-auto py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="md:col-span-5 relative aspect-[3/4] bg-neutral-900 border border-white/5 rounded-sm overflow-hidden shadow-2xl group"
          >
            {/* Owner Portrait Placeholder */}
            <img 
              src="/owner-portrait.jpg" 
              alt="The Curator"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
              onError={(e) => (e.currentTarget.style.opacity = "0.2")}
            />
            
            {/* Signature Shine Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </div>

            <div className="absolute bottom-10 left-10 opacity-20">
               <p className="text-[9px] uppercase tracking-[0.6em]">The Curator</p>
            </div>
          </motion.div>

          {/* 3. THE NARRATIVE: Multi-column Text */}
          <div className="md:col-span-7 flex flex-col justify-center md:pl-20">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-xl"
            >
              <h2 className="text-xs uppercase tracking-[0.5em] text-[#D4AF37] mb-12">The Philosophy</h2>
              <p className="text-2xl md:text-3xl font-extralight leading-relaxed tracking-tight mb-8">
                "Design is not a service; it is a <span className="italic">dialogue</span> between history and the future."
              </p>
              <p className="text-sm font-light text-white/50 leading-loose tracking-wide">
                With a decade of immersion in high-fidelity digital architecture, I founded The Design Lounge to serve those who reject the noise of the masses. We don't just build brands; we curate legacies that resonate with precision, elegance, and intentional restraint. 
              </p>
              
              <div className="mt-16 flex gap-12">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] uppercase tracking-[0.4em] opacity-30">Specialization</span>
                  <span className="text-xs tracking-widest">Luxury Branding</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] uppercase tracking-[0.4em] opacity-30">Experience</span>
                  <span className="text-xs tracking-widest">10+ Years</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING: Minimalist Quote */}
      <section className="py-40 text-center border-t border-white/5 mx-10">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-serif-display text-4xl md:text-6xl italic opacity-80"
        >
          Curated with <span className="text-[#D4AF37]">Intent.</span>
        </motion.p>
      </section>
    </div>
  );
}
