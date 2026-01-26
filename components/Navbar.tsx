"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      // 1. Fade and slide in from the top
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
     
    >
    <div>
         
      <nav className="relative z-20 flex items-center justify-between px-10 py-8 text-white">
        <div className="hidden md:block text-2xl font-bold tracking-widest uppercase">
  The Design Lounge
</div>

        <div className="hidden space-x-8 gap-12 md:flex">
          <Link href="/"className="transition-all duration-500 cursor-pointer
  text-white/80 
  hover:text-transparent 
  hover:bg-clip-text 
  hover:bg-gradient-to-b 
  hover:from-[#D4AF37] hover:via-[#F9E498] hover:to-[#AF8A3F]
  hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">The Lobby</Link>
          <Link href="/theloungemenu" className="transition-all duration-500 cursor-pointer
  text-white/80 
  hover:text-transparent 
  hover:bg-clip-text 
  hover:bg-gradient-to-b 
  hover:from-[#D4AF37] hover:via-[#F9E498] hover:to-[#AF8A3F]
  hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">The Lounge Menu</Link>
          <Link href="/testimonials"className="transition-all duration-500 cursor-pointer
  text-white/80 
  hover:text-transparent 
  hover:bg-clip-text 
  hover:bg-gradient-to-b 
  hover:from-[#D4AF37] hover:via-[#F9E498] hover:to-[#AF8A3F]
  hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">Testimonials</Link>
   <Link href="/owner" className="transition-all duration-500 cursor-pointer
  text-white/80 
  hover:text-transparent 
  hover:bg-clip-text 
  hover:bg-gradient-to-b 
  hover:from-[#D4AF37] hover:via-[#F9E498] hover:to-[#AF8A3F]
  hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">About The Owner</Link>
        </div>
    <Link href="/contact">
  <button className="hidden md:block transition-all duration-500 cursor-pointer text-white/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#D4AF37] hover:via-[#F9E498] hover:to-[#AF8A3F] hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
    Need Something? The Lounge Listens.
  </button>
</Link>


      </nav>
         
    </div>
     </motion.nav>
  )
}
