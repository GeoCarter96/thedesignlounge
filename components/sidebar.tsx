'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import './sidebar.css';


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-[100] md:hidden flex flex-col gap-1.5 p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl"
      >
        <span className="w-6 h-[1px] bg-white"></span>
        <span className="w-4 h-[1px] bg-white self-end"></span>
      </button>

      {/* MOBILE SIDEBAR */}
     <AnimatePresence mode="wait">
  {isOpen && (
    <div className="fixed inset-0 z-[100] md:hidden">
      {/* Backdrop Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Sidebar Content */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="absolute top-0 right-0 h-full w-[80%] max-w-[400px] bg-neutral-950 border-l border-white/10 p-12 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.9)]"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="self-end text-white/40 uppercase tracking-[0.3em] text-[10px] mb-20 hover:text-white transition-colors"
        >
          X
        </button>

   {/* Scrollable Container Wrapper */}
<div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
  <nav className="flex flex-col gap-10">
    {['Home', 'Freebies', 'Testimonials',  'Courses', 'Ebooks','Flyers','Planners','PrivateLounge','Owner', 'Contact'].map((item, i) => (
      <motion.div
        key={item}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 * i }}
      >
        <Link 
          href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
          className="relative block text-4xl font-extralight tracking-tighter group overflow-hidden"
          onClick={() => setIsOpen(false)}
        >
          {/* The Base Gold Text */}
          <span className="bg-gradient-to-b from-[#D4AF37] via-[#F9E498] to-[#AF8A3F] bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]">
            {item}
          </span>

          {/* The Animated "Glistening" Layer */}
          <span 
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"
            style={{
              WebkitMaskImage: 'linear-gradient(black, black)',
              maskImage: 'linear-gradient(black, black)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          />
        </Link>
      </motion.div>
    ))}
  </nav>
</div>

        
      </motion.div>
    </div>
  )}
</AnimatePresence>
    </div>
  )
}
