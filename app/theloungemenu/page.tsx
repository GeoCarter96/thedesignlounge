"use client";
import { useState, useEffect } from "react"; // 1. Added hooks
import { motion } from "framer-motion";
import Link from "next/link";
import './theloungemenu.css';

const SECTIONS = [
  { id: "planners", title: "Planners", sub: "Architectural Time Management", img: "/planner.png" },
  { id: "freebies", title: "Freebies", sub: "Gifts from the Atelier", img: "/freebie.jpg" },
  { id: "ebooks", title: "Ebooks", sub: "Curated Digital Knowledge", img: "/ebooks.png" },
  { id: "courses", title: "Courses", sub: "Mastery of Restraint", img: "/course.png" },
  { id: "flyers", title: "Flyers", sub: "Digital Couture Assets", img: "/flyer.png" },
  { id: "privatelounge", title: "Private Lounge", sub: "Exclusivity Redefined", img: "/ple1.png" },
];

export default function LuxuryExperience() {
  // 2. Added hydration guard
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. Prevent rendering motion elements until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <div className="bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      
      {SECTIONS.map((section, i) => (
        <section 
          key={section.id} 
          className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-32 border-b border-white/5"
        >
          {/* Section Heading - Editorial Style */}
          <div className="text-center mb-20">
            <motion.p 
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              whileInView={{ opacity: 0.4, letterSpacing: "0.5em" }}
              className="uppercase text-[10px] mb-4 font-light"
            >
              Volume 0{i + 1} // {section.sub}
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="font-serif text-5xl md:text-8xl font-extralight tracking-tighter italic"
            >
              {section.title}
            </motion.h2>
          </div>

          {/* PRODUCT PLACEHOLDER - The Gold Glisten Monolith */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm bg-white/5 border border-white/10 shadow-2xl group"
          >
            {/* The Product Image */}
            <img 
              src={section.img} 
              alt={section.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
            />

            {/* Link Wrapper */}
            <Link href={`/${section.id}`} className="absolute inset-0 z-30 cursor-pointer" aria-label={`View ${section.title}`} />
          </motion.div>

          {/* CTA Link */}
          <Link 
            href={`/${section.id}`}
            className="mt-16 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-[#D4AF37] border-b border-white/5 pb-2 transition-all duration-500"
          >
            Explore {section.title} —
          </Link>
        </section>
      ))}

    </div>
  );
}
