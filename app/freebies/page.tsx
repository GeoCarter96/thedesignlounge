

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import './freebies.css';

const FREEBIES = [
  { id: "1", title: "Soft Launch Playbook", desc: "4K Digital Couture", link: "/freebies/flyer" },
  { id: "2", title: "Luxe Launchpad", desc: "4K Digital Couture", link: "/freebies/font" },
  { id: "3", title: "The Luxe Lounge Pregame", desc: "4K Digital Couture", link: "/freebies/guide" },
];

export default function FreebiesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] pt-32 pb-40">
      
      {/* 1. HEADER SECTION */}
      <section className="px-10 max-w-7xl mx-auto pb-24 border-b border-white/5">
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 0.4, letterSpacing: "0.6em" }}
          transition={{ duration: 1.5 }}
          className="uppercase text-[10px] mb-6"
        >
          Complimentary Access // The Lounge
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif-display text-6xl md:text-8xl font-extralight tracking-tighter"
        >
          Gifted <span className="italic text-[#D4AF37]">Essentials</span>
        </motion.h1>
      </section>

      {/* 2. THREE-COLUMN PRODUCT GRID */}
      <section className="px-10 max-w-7xl mx-auto py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {FREEBIES.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="group flex flex-col"
            >
              {/* IMAGE PLACEHOLDER: Vertical Monolith */}
              <div className="relative aspect-[4/5] w-full bg-neutral-900 border border-white/5 overflow-hidden rounded-sm shadow-2xl transition-all duration-1000 group-hover:border-[#D4AF37]/30">
                
                {/* Visual Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity">
                   <div className="w-12 h-12 border border-white/50 rounded-full animate-pulse flex items-center justify-center">
                      <span className="text-[8px] uppercase tracking-widest">{item.id}</span>
                   </div>
                </div>

                {/* Actual Image Tag */}
                <img 
                  src={`/freebie${item.id}.jpg`} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                  onLoad={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />

                {/* Luxury Shine Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                   <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </div>
              </div>

              {/* PRODUCT METADATA */}
              <div className="mt-8 flex flex-col items-start">
                <span className="text-[10px] text-[#D4AF37] tracking-[0.4em] uppercase">{item.desc}</span>
                <h3 className="text-xl font-serif-display mt-2 italic group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <Link 
                  href={item.link}
                  className="mt-6 text-[10px] uppercase tracking-[0.4em] text-white/40 border-b border-white/10 pb-1 hover:text-white hover:border-white transition-all"
                >
                  Download Gift —
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FOOTER NOTE */}
      <section className="mt-20 text-center opacity-20">
         <p className="text-[9px] uppercase tracking-[0.8em]">Excellence should be accessible.</p>
      </section>
    </div>
  );
}
