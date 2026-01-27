"use client";
import { useState, useEffect } from "react"; // 1. Added hooks
import { motion } from "framer-motion";
import Link from "next/link";
import './privatelounge.css';

const COLLECTION = [
  { id: "ple1", category: "Digital", title: "The Private Lounge Experience", price: "$17", link: "https://www.theedesignlounge.co/product/the-private-lounge-experience-night-1-the-brand-identity-bar/2?cp=true&sa=true&sbp=false&q=false" },
  { id: "ple2", category: "Digital", title: "The Lounge Legacy Table", price: "$17", link: "https://www.theedesignlounge.co/product/the-lounge-legacy-table-night-3/6?cp=true&sa=true&sbp=false&q=false" },
  { id: "ple3", category: "Digital", title: "The Suite Of Self Leadership", price: "$17", link: "https://www.theedesignlounge.co/product/the-suite-of-self-leadership-night-2/4?cp=true&sa=true&sbp=false&q=false" },
];

export default function PrivateloungePage() {
  // 2. Hydration Guard
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // 3. Prevent rendering motion elements until mounted
  if (!hasMounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] pt-32 pb-40">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="px-10 max-w-7xl mx-auto pb-24 border-b border-white/5">
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 0.4, letterSpacing: "0.6em" }}
          transition={{ duration: 1.5 }}
          className="uppercase text-[10px] mb-6 font-light"
        >
          Curated Excellence // Volume I
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-8xl font-extralight tracking-tighter"
        >
          The <span className="italic text-[#D4AF37]">Private Lounge</span> Experience
        </motion.h1>
      </section>

      {/* 2. THE TRIPTYCH GRID */}
      <section className="px-10 max-w-7xl mx-auto py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {COLLECTION.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="group flex flex-col"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/5] w-full bg-neutral-950 border border-white/5 overflow-hidden rounded-sm shadow-2xl transition-all duration-1000 group-hover:border-[#D4AF37]/40">
                
                {/* Product Image - Removed onLoad/onError for Hydration safety */}
                <img 
                  src={`/${item.id}.png`} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-105"
                />

                {/* Signature Gold Shine Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                   <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </div>
              </div>

              {/* PRODUCT METADATA */}
              <div className="mt-10 flex flex-col items-start">
                <div className="flex justify-between w-full items-baseline">
                  <span className="text-[9px] text-[#D4AF37] tracking-[0.5em] uppercase font-medium">{item.category}</span>
                  <span className="text-sm font-extralight opacity-40">{item.price}</span>
                </div>
                
                <h3 className="text-2xl font-serif mt-3 italic group-hover:text-[#D4AF37] transition-colors duration-500">
                  {item.title}
                </h3>
                
                <Link 
                  href={item.link}
                    target="_blank" 
      rel="noopener noreferrer"
                  className="mt-8 text-[10px] uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-1 hover:text-white hover:border-white transition-all duration-500"
                >
                  View Details —
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. VIGNETTE CLOSURE */}
      <section className="py-40 border-t border-white/5 text-center">
         <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            className="text-[10px] uppercase tracking-[1em]"
         >
            Exclusivity is a Dialogue
         </motion.p>
      </section>
    </div>
  );
}
