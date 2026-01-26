"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import './testimonials.css';



const TESTIMONIALS = [
  {
    quote: "The Design Lounge didn't just build a website; they curated a digital atmosphere that perfectly reflects our heritage.",
    author: "Julianne V.",
    title: "Creative Director, Maison Lux",
    year: "2025"
  },
  {
    quote: "Precision, elegance, and an unparalleled understanding of modern luxury. Truly in a league of their own.",
    author: "Marcus Thorne",
    title: "Founder, Thorne & Co.",
    year: "2024"
  },
  {
    quote: "An experience that transcends typical design. They treat every pixel with the reverence of a master jeweler.",
    author: "Elena Rossi",
    title: "Chief Brand Officer, VELA",
    year: "2025"
  }
];

export default function Testimonials() {
  return (
    // Added pt-20 for global Navbar clearance
    <div className="min-h-screen  bg-black text-white selection:bg-[#D4AF37] selection:text-black pt-20">
      
      {/* 1. Header Section */}
      <section className="pt-20 pb-20 px-10 border-b border-white/5">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-extralight tracking-tighter"
        >
          Voices of <br />
          <span className="italic font-normal text-[#D4AF37]">The Lounge</span>
        </motion.h1>
      </section>

      {/* 2. Testimonial List */}
      <section className="px-10 max-w-7xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="py-32 border-b border-white/5 flex flex-col md:flex-row justify-between items-start gap-12 group"
          >
            {/* Massive Gold Quote Mark with Hover Shine */}
            <div className="text-8xl font-serif text-[#D4AF37] opacity-20 select-none group-hover:opacity-100 transition-opacity duration-1000">
              “
            </div>
            
            <div className="max-w-3xl">
              <p className="text-1xl md:text-3xl italic font-extralight leading-relaxed tracking-tight text-white/90">
                {t.quote}
              </p>
              
              <div className="mt-16 flex flex-col gap-1">
                <span className="text-xl font-normal uppercase tracking-[0.2em] text-[#D4AF37]">
                  {t.author}
                </span>
                
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 3. Luxury Call to Action */}
      <section className="py-60 flex flex-col items-center text-center px-6">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 2 }}
        >
          <p className="text-xs uppercase tracking-[0.6em] opacity-30 mb-12">Your Seat is Waiting</p>
          <Link 
            href="/"
            className="rounded-full border border-white/20 bg-transparent px-16 py-6 text-sm font-bold uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-700 hover:scale-105"
          >
            Return to The Lounge
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

