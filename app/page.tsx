'use client'
import './homepage.css';
import Link from 'next/link';
import { motion} from "framer-motion";
import { useEffect } from 'react';




// 1. Move data outside to keep the component clean
const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com/theedesignlounge?igsh=MXVvYjlpNWl4bDFngw==' },
  { name: 'TikTok', href: 'https://tiktok.com/@maaiirr1?r=1&_t=ZP-93NpubeBvoM' },
  { name: 'Youtube', href: 'https://youtube.com/@shesmair?si=O_Kvq7fTNno26vF6' },
 
];

export default function HomePage() {
   
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <div className="relative h-full w-full bg-black">
         


        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/placeholder.png"
          className="absolute z-0 h-full w-full object-cover opacity-60"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center w-full">
          
          {/* CONTAINER 1: THE VISUAL (Logo) */}
          <div className="flex h-screen w-full items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9] group"
            >
              <img 
                src="/logo3.png" 
                alt="The Design Lounge Logo"
                className="absolute inset-0 w-full h-full object-contain p-12 z-10 transition-transform duration-1000 group-hover:scale-[1.02]" 
              />
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:animate-shimmer" 
                  style={{
                    WebkitMaskImage: 'url(/logo3.png)',
                    maskImage: 'url(/logo3.png)',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* CONTAINER 2: THE EDITORIAL */}
          <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black backdrop-blur-sm text-center text-white px-4 py-32">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-3xl text-xl md:text-3xl font-extralight tracking-tight leading-relaxed"
            >
              Welcome To <span className="font-normal italic">The Design Lounge</span> – Where Luxury Meets Creativity. 
      Where Bold Ideas Are Curated, Not Rushed, And Your Brand Is Treated Like An Experience, Not A Task.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-12 max-w-md text-sm uppercase tracking-[0.5em] opacity-40 font-light"
            >
              Your Seat Is Reserved ✨
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="mt-20"
            >
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.5, delay: 0.6 }}
  className="mt-20"
>
  <Link 
    href="/matchmake"
    className="group relative inline-block overflow-hidden  px-50 py-20 text-xs font-bold uppercase tracking-[0.5em] text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(212,175,55,0.25)]"
    style={{
      background: 'linear-gradient(180deg, #AF8A3F 0%, #D4AF37 30%, #F9E498 50%, #D4AF37 70%, #AF8A3F 100%)',
    }}
  >
    {/* 1. The Text Label - Ensured it stays centered with wide tracking */}
    <span className="relative z-10 block whitespace-nowrap">
      Enter The Lounge
    </span>

    {/* 2. The High-Contrast Shine Ray */}
    <div className="absolute inset-0 z-20 pointer-events-none">
       <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/90 to-transparent -translate-x-full group-hover:animate-shimmer" />
    </div>

    {/* 3. Luxury Bevel - Top Edge Highlight */}
    <div className="absolute inset-0 border-t-2 border-white/40 rounded-full z-15 pointer-events-none" />
    
    {/* 4. Soft Bottom Shadow (Inner) for 3D depth */}
    <div className="absolute inset-0 border-b-2 border-black/20 rounded-full z-15 pointer-events-none" />
  </Link>
</motion.div>


            </motion.div>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <footer className="w-full bg-black border-t border-white/10 pt-24 pb-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-[0.4em] text-white/40">Inquiries</h3>
            <Link 
              href="/contact" 
              className="text-2xl md:text-3xl font-extralight text-white tracking-tight hover:text-[#D4AF37] transition-colors duration-500"
            >
              Visit Concierge's Desk
            </Link>
            <p className="text-sm font-light text-white/60 tracking-wide">Based in Indiana // Globally Available</p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-[0.4em] text-white/40">Connect</h3>
            <div className="flex flex-wrap gap-x-12 text-white gap-y-4">
              {/* 2. Using the map function here */}
              {SOCIAL_LINKS.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.2em] hover:text-white transition-all duration-300 group relative"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/20">
          <p>© 2026 The Design Lounge</p>
          <p>All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
