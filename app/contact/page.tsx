"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import './contact.css';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vision: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const socials = [
    { name: 'Instagram', url: 'https://instagram.com/theedesignlounge' },
    { name: 'TikTok', url: 'https://tiktok.com/@maaiirr1' },
    { name: 'Youtube', url:'https://youtube.com/@shesmair' }
  ];

  const isFormValid = formData.name && formData.email && formData.vision;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget; 
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black pt-24 md:pt-40 px-6 md:px-12 pb-24">
      
      {/* 1. Hero Headline - Scaled down for better flow */}
      <section className="max-w-7xl mx-auto pb-16 md:pb-24 border-b border-white/5">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-serif italic text-5xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-[1.1]"
        >
         Need Something? <br />
         <span className="italic font-light text-[#D4AF37] tracking-normal">
           The Lounge Listens
         </span>
        </motion.h1>
      </section>

      {/* Grid: Responsive gap and vertical stacking for mobile */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 py-16 md:py-32">
        
        {/* Left: Boutique Inquiry Form */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-10 md:gap-16"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/60 leading-loose">
            Whether It's A Question, Or Feedback, The Lounge Is Always Open
          </p>
          
          <form className="flex flex-col gap-8 md:gap-12">
            <div className="group border-b border-white/10 focus-within:border-[#D4AF37] transition-colors duration-500 pb-4">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40">Full Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl font-extralight mt-2 p-0 placeholder:text-white/10 outline-none" 
              />
            </div>
            
            <div className="group border-b border-white/10 focus-within:border-[#D4AF37] transition-colors duration-500 pb-4">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40">Electronic Mail</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                placeholder="email@address.com" 
                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl font-extralight mt-2 p-0 placeholder:text-white/10 outline-none" 
              />
            </div>

            <div className="group border-b border-white/10 focus-within:border-[#D4AF37] transition-colors duration-500 pb-4">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40">Your Vision</label>
              <textarea 
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                rows={2} 
                placeholder="Tell us about your project" 
                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl font-extralight mt-2 p-0 placeholder:text-white/10 resize-none outline-none" 
              />
            </div>

            <button 
              disabled={!isFormValid}
              type="submit" 
              className={`self-start mt-4 group relative overflow-hidden px-10 py-5 rounded-full border transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.4em]
                ${isFormValid 
                  ? "border-[#D4AF37] text-white hover:text-black cursor-pointer" 
                  : "border-white/5 text-white/20 cursor-not-allowed"
                }`}
            >
              <span className="relative z-10">Send Invitation</span>
              {isFormValid && (
                <div className="absolute inset-0 z-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              )}
            </button>
          </form>
        </motion.div>

        {/* Right: Studio Details */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col gap-12 md:gap-20 md:pl-12"
        >
          <div className="flex flex-col gap-8">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-white/30">Social Atelier</h3>
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs md:text-sm uppercase tracking-[0.3em] hover:text-[#D4AF37] transition-colors w-fit"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-white/30">Direct Contact</h3>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80">concierge@yourstudio.com</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
