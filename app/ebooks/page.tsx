"use client";
import { useState, useEffect } from "react"; // 1. Added hooks
import { motion } from "framer-motion";
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
  // 2. Added hydration guard
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. Prevent rendering motion elements until mounted
  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black pt-32">
      
      {/* 1. Header: Editorial Intro */}
      <section className="px-10 max-w-7xl mx-auto pb-24 border-b border-white/5">
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 0.4, letterSpacing: "0.5em" }}
          className="uppercase text-[10px] mb-6 tracking-[0.5em]"
        >
          The Digital Atelier // Library
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-6xl md:text-8xl font-extralight tracking-tighter"
        >
          Curated <span className="italic text-[#D4AF37]">Knowledge</span>
        </motion.h1>
      </section>

      {/* 2. The Collection Grid */}
      <section className="px-10 max-w-7xl mx-auto py-32 flex flex-col items-center">
        {PUBLICATIONS.map((book, i) => (
          <motion.div 
            key={book.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group cursor-pointer w-full max-w-lg"
          >
            {/* Luxury Book Display */}
            <div className="relative aspect-[3/4] w-full bg-neutral-900 overflow-hidden rounded-sm shadow-2xl transition-transform duration-1000 group-hover:-translate-y-4">
              <img 
                src={book.img} 
                alt={book.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
              />
              
              {/* Spine Detail */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#D4AF37] via-[#F9E498] to-[#AF8A3F] opacity-50" />
              
              {/* Signature Shine */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </div>
            </div>

            {/* Book Metadata */}
            <div className="mt-12 flex justify-between items-start">
              <div className="max-w-[70%]">
                <span className="text-[10px] text-[#D4AF37] tracking-[0.3em] uppercase">{book.id}</span>
                <h3 className="text-2xl font-serif mt-2 italic group-hover:text-[#D4AF37] transition-colors">{book.title}</h3>
                <p className="text-sm text-white/40 mt-4 font-light leading-relaxed">{book.subtitle}</p>
              </div>
              <span className="text-lg font-extralight tracking-widest">{book.price}</span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 3. Global Shipping/Delivery Note */}
      <section className="py-40 text-center border-t border-white/5">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
          Instant Digital Fulfillment // Secure Encryption
        </p>
      </section>
    </div>
  );
}
