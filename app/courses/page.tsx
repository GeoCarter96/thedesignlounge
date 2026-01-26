"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import './courses.css';

const CURRICULUM = [
  { id: "01", title: "The Visual Narrative", detail: "Decoding the language of high-end aesthetics." },
  { id: "02", title: "Atmospheric Design", detail: "Creating digital spaces that breathe." },
  { id: "03", title: "The Golden Ratio", detail: "Implementing mathematical precision in UX." },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO: Cinematic Introduction */}
      <section className="relative h-[120vh] md:h-[140vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <video autoPlay loop muted playsInline className="w-full h-full object-cover">
             <source src="/luxury-ink.mp4" type="video/mp4" />
           </video>
        </div>
        
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 0.5, letterSpacing: "0.5em" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="uppercase text-[10px] mb-8 font-light"
          >
            A Masterclass by The Design Lounge
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="font-serif-display text-6xl md:text-9xl font-extralight tracking-tighter italic"
          >
            The Canva<span className="text-[#D4AF37] non-italic"> Crash Course</span>
          </motion.h1>

          {/* LUXURY PHOTO PLACEHOLDER */}
          <motion.div 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.8, delay: 0.5 }}
    className="mt-16 relative w-full max-w-2xl aspect-[16/10] overflow-hidden rounded-xl bg-white/5 border border-white/10 shadow-2xl group"
  >
    {/* 1. THE ACTUAL IMAGE */}
    <img 
      src="/your-course-image.jpg" // Replace with your image path
      alt="Course Preview"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      onError={(e) => e.currentTarget.src = "https://placehold.co"} // Fallback
    />
     {/* 2. THE GOLDEN SHINE (Masked to the container) */}
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
       <div 
         className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" 
         style={{
           // This ensures the shine feels like it's hitting the glass of the photo
           WebkitMaskImage: 'linear-gradient(black, black)', 
           maskImage: 'linear-gradient(black, black)',
         }}
       />
    </div>

    {/* 3. SUBTLE OVERLAY VIGNETTE */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-60 pointer-events-none" />
  </motion.div>
</div>
      </section>
      

      {/* 2. THE PHILOSOPHY: Editorial Text */}
      <section className="py-40 px-10 max-w-5xl mx-auto text-center">
        <h2 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-16">The Philosophy</h2>
        <p className="text-2xl md:text-4xl font-extralight leading-relaxed tracking-tight">
          True luxury is not about what is added, but what is <span className="text-[#D4AF37]">carefully removed</span>. Learn to build digital legacies that stand outside of time.
        </p>
      </section>

      {/* 3. CURRICULUM: Minimalist List */}
      <section className="py-40 px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="sticky top-40">
            <h3 className="font-serif-display text-5xl italic">The Syllabus</h3>
            <p className="mt-6 text-white/40 max-w-xs font-light">A 12-week immersive journey into the anatomy of premium design.</p>
          </div>
          
          <div className="flex flex-col border-t border-white/10">
            {CURRICULUM.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ x: 20 }}
                className="py-12 border-b border-white/10 flex gap-12 group cursor-pointer"
              >
                <span className="text-[#D4AF37] font-serif text-lg opacity-40 group-hover:opacity-100 transition-opacity">{item.id}</span>
                <div>
                  <h4 className="text-2xl uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-white/40 font-light">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENROLLMENT: Luxury CTA */}
      <section className="py-60 bg-[#080808] border-y border-white/5 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
          <h2 className="text-4xl md:text-6xl font-extralight mb-12">Secure Your Seat</h2>
          <p className="mb-16 text-white/40 tracking-widest uppercase text-xs font-light italic">Limited Cohort // Now Enrolling for 2026</p>
          <Link 
            href="/checkout"
            className="group relative inline-block px-20 py-6 rounded-full border border-[#D4AF37] text-white overflow-hidden"
          >
            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.4em] group-hover:text-black transition-colors duration-500">Apply for Admission</span>
            <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
