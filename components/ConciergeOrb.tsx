"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ConciergeOrb() {
  const [isOpen, setIsOpen] = useState(false);
 const [showHint, setShowHint] = useState(false); 
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) {
        setShowHint(true);
        // Hide the hint automatically after 4 seconds
        setTimeout(() => setShowHint(false), 4000);
      }
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, [isOpen]);

  const links = [
    { name: "PLANNERS", href: "/planners" },
    { name: "COURSES", href: "/courses" },
    { name: "FLYERS", href: "/flyers" },
    { name: "EBOOKS", href: "/ebooks" },
    { name: "PRIVATE LOUNGE", href: "/privatelounge" },
     { name: "THE LOUNGE MENU", href: "/theloungemenu" },
    
  ];

  return (
    <div className="fixed inset-0 pointer-events-none  z-[9999] hidden md:block">
  {/* 1. THE DRAGGABLE ORB */}
  <motion.div
    drag
    dragMomentum={true} // Adding momentum makes it feel "heavier" and expensive
    dragElastic={0.1}   // Resistance makes it feel high-end
    whileDrag={{ scale: 1.05, cursor: "grabbing" }}
    className="pointer-events-auto absolute bottom-12 right-12 flex flex-col items-end group"
  >
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
          className="mb-8 flex flex-col items-end gap-4 bg-black/40 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] min-w-[240px]"
        >
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-2 border-b border-[#D4AF37]/20 w-full pb-3 font-light">
            Concierge
          </p>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-extralight tracking-[0.2em] text-white/60 hover:text-white transition-all duration-500 hover:translate-x-[-4px]"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
    {/* THE WHISPER HINT */}
<AnimatePresence>
  {showHint && !isOpen && (
    <motion.div
      initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, x: 10, filter: "blur(10px)" }}
      className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap"
    >
      <div className="bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl">
        <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] font-light">
          Quick Navigation
        </p>
      </div>
      {/* Decorative pointer line */}
      <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-2 h-[1px] bg-[#D4AF37]/40" />
    </motion.div>
  )}
</AnimatePresence>


    {/* 2. THE LUXURY TRIGGER BUTTON */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-16 h-16 rounded-full bg-gradient-to-br cursor-pointer from-white/20 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 flex items-center justify-center shadow-2xl transition-transform duration-700 hover:scale-110 active:scale-95"
    >
      {/* Inner Metallic Ring */}
      <div className="absolute inset-[2px] rounded-full border border-white/5 bg-transparent" />
      
      <div className="relative z-10 flex flex-col gap-1.5">
        <motion.span 
          animate={isOpen ? { rotate: 45, y: 4, backgroundColor: "#D4AF37" } : { rotate: 0, y: 0, backgroundColor: "#FFFFFF" }}
          className="w-5 h-[1px] transition-all duration-500"
        />
        <motion.span 
          animate={isOpen ? { rotate: -45, y: -4, backgroundColor: "#D4AF37" } : { rotate: 0, y: 0, backgroundColor: "#FFFFFF" }}
          className="w-3 h-[1px] self-end transition-all duration-500"
        />
      </div>

      {/* Luxury Aura Glow */}
      <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Subtle Breathing Pulse */}
      <div className="absolute inset-0 rounded-full border border-[#D4AF37]/30 animate-[ping_3s_infinite] opacity-20 pointer-events-none" />
    </button>
  </motion.div>
</div>

  );
}
