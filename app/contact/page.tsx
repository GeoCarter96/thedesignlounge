"use client";
import { motion } from "framer-motion";
import Link from "next/dist/client/link";
import { useState } from "react";
import './contact.css';

export default function Contact() {
  const socials = [
    { name: 'Instagram', url: 'https://instagram.com/theedesignlounge?igsh=MXVvYjlpNWl4bDFngw==' },
    { name: 'TikTok', url: 'https://tiktok.com/@maaiirr1?r=1&_t=ZP-93NpubeBvoM' },
    { name: 'Youtube', url:'https://youtube.com/@shesmair?si=O_Kvq7fTNno26vF6' }
  ];
const [formData, setFormData] = useState({
    name: "",
    email: "",
    vision: "",
  });

  // [3] Validation check
  const isFormValid = formData.name && formData.email && formData.vision;

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black pt-32 px-10">
      
      {/* 1. Hero Headline */}
      <section className="max-w-7xl mx-auto pb-32 border-b border-white/5">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-serif-display italic text-6xl md:text-9xl font-extralight tracking-tighter leading-tight"
        >
         Begin Your <br />
  <span className="italic font-light text-[#D4AF37] font-serif tracking-normal">
    Legacy
  </span>
        </motion.h1>
      </section>

      {/* 2. Main Contact Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 py-32">
        
        {/* Left: Boutique Inquiry Form */}
         <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-col gap-12"
    >
      <p className="text-xs uppercase tracking-[0.5em] text-white">The Inquiry</p>
      <form className="flex flex-col gap-10">
        <div className="group border-b border-white/10 focus-within:border-[#D4AF37] transition-colors duration-500 pb-4">
          <label className="text-[10px] uppercase tracking-[0.3em] text-white">Full Name</label>
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange}
             type="text" 
            placeholder="Your Name" 
            className="w-full bg-transparent border-none focus:ring-0 text-xl font-extralight p-0 placeholder:text-white/10 outline-none" 
          />
        </div>
        
        <div className="group border-b border-white/10 focus-within:border-[#D4AF37] transition-colors duration-500 pb-4">
          <label className="text-[10px] uppercase tracking-[0.3em] text-white">Electronic Mail</label>
          <input 
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email" 
            placeholder="email@address.com" 
            className="w-full bg-transparent border-none focus:ring-0 text-xl font-extralight p-0 placeholder:text-white/10 outline-none" 
          />
        </div>
         <div className="group border-b border-white/10 focus-within:border-[#D4AF37] transition-colors duration-500 pb-4">
          <label className="text-[10px] uppercase tracking-[0.3em] text-white">Your Vision</label>
          <textarea 
            name="vision"
            value={formData.vision}
            onChange={handleChange}
            rows={1} 
            placeholder="Tell us about your project" 
            className="w-full bg-transparent border-none focus:ring-0 text-xl font-extralight p-0 placeholder:text-white/10 resize-none outline-none" 
          />
        </div>

        {/* [4] Updated Button Logic */}
        <button 
          disabled={!isFormValid}
          type="submit" 
          className={`self-start mt-8 group relative overflow-hidden px-12 py-5 rounded-full border transition-all duration-500 text-xs font-bold uppercase tracking-[0.4em]
            ${isFormValid 
                 ? "border-white/20 text-white hover:text-black cursor-pointer" 
              : "border-white/5 text-white/20 cursor-not-allowed"
            }`}
        >
          <span className="relative z-10">Send Invitation</span>
          {isFormValid && (
            <div className="absolute inset-0 z-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          )}
        </button>
      </form>
    </motion.div>

        {/* Right: Studio Details (Social Atelier) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col gap-16"
        >
          <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/40">Social Atelier</h3>
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm uppercase tracking-[0.3em] hover:text-[#D4AF37] transition-colors w-fit"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Optional: Add Location or Email details here to fill the space */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/40">Direct Contact</h3>
            <p className="text-sm uppercase tracking-[0.3em] text-white/80">concierge@yourstudio.com</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
