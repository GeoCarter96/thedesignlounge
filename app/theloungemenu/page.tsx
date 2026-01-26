"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import './theloungemenu.css';
const SECTIONS = [
  { id: "planners", title: "Planners", sub: "Architectural Time Management", img: "/planner-hero.jpg" },
  { id: "freebies", title: "Freebies", sub: "Gifts from the Atelier", img: "/freebie-hero.jpg" },
  { id: "ebooks", title: "Ebooks", sub: "Curated Digital Knowledge", img: "/ebook-hero.jpg" },
  { id: "courses", title: "Courses", sub: "Mastery of Restraint", img: "/course-hero.jpg" },
  { id: "flyers", title: "Flyers", sub: "Digital Couture Assets", img: "/flyer-hero.jpg" },
  { id: "private-lounge", title: "Private Lounge", sub: "Exclusivity Redefined", img: "/lounge-hero.jpg" },
];

export default function LuxuryExperience() {
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
              className="uppercase text-[10px] mb-4"
            >
              Volume 0{i + 1} // {section.sub}
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="font-serif-display text-5xl md:text-8xl font-extralight tracking-tighter italic"
            >
              {section.title}
            </motion.h2>
          </div>

          {/* PRODUCT PLACEHOLDER - The Gold Glisten Monolith */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm bg-white/5 border border-white/10 shadow-2xl group"
          >
            {/* The Product Image */}
            <img 
              src={section.img} 
              alt={section.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
              onError={(e) => (e.currentTarget.style.opacity = "0.1")}
            />

            {/* Inner "System Live" Anchor */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center gap-4 opacity-20">
                <div className="w-12 h-12 border border-[#D4AF37] rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                </div>
                <p className="text-[8px] uppercase tracking-[0.6em]">Visualizing {section.title}</p>
              </div>
            </div>

            {/* The Gold Shine Ray */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </div>
            
            {/* Action Overlay */}
            <Link href={`/${section.id}`} className="absolute inset-0 z-30 cursor-pointer" />
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
