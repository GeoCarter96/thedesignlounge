"use client";
import { useState, useEffect } from "react";
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vision: "",
  });

  useEffect(() => {
    // Native Intersection Observer to trigger CSS reveals
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black pt-24 md:pt-40 px-6 md:px-12 pb-24">
      
      {/* 1. Hero Headline */}
      <section className="max-w-7xl mx-auto pb-16 md:pb-24 border-b border-white/5">
        <h1 className="reveal anim-slide-up font-serif italic text-5xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-[1.1] opacity-0 translate-y-8">
         Need Something? <br />
         <span className="italic font-light text-[#D4AF37] tracking-normal">
           The Lounge Listens
         </span>
        </h1>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 py-16 md:py-32">
        
        {/* Left: Boutique Inquiry Form */}
        <div className="reveal anim-fade-in flex flex-col gap-10 md:gap-16 opacity-0">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white leading-loose">
            Whether It's A Question, Or Feedback, The Lounge Is Always Open
          </p>
          
          <form className="flex flex-col gap-8 md:gap-12">
            <div className="group border-b border-white/10 focus-within:border-[#D4AF37] transition-colors duration-500 pb-4">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white">Full Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl font-extralight mt-2 p-0 placeholder:text-grey outline-none" 
              />
            </div>
            
            <div className="group border-b border-white/10 focus-within:border-[#D4AF37] transition-colors duration-500 pb-4">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white">Electronic Mail</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                placeholder="email@address.com" 
                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl font-extralight mt-2 p-0 placeholder:text-grey outline-none" 
              />
            </div>

            <div className="group border-b border-white/10 focus-within:border-[#D4AF37] transition-colors duration-500 pb-4">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white">Your Vision</label>
              <textarea 
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                rows={2} 
                placeholder="Tell us about your project" 
                className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl font-extralight mt-2 p-0 placeholder:text-grey resize-none outline-none" 
              />
            </div>

            <button 
              disabled={!isFormValid}
              type="submit" 
              className={`self-start mt-4 group relative overflow-hidden px-10 py-5 rounded-full border transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.4em]
                ${isFormValid 
                  ? "border-[#D4AF37] text-white hover:text-black cursor-pointer" 
                  : "border-white/5 text-white/80 cursor-not-allowed"
                }`}
            >
              <span className="relative z-10">Send Invitation</span>
              {isFormValid && (
                <div className="absolute inset-0 z-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              )}
            </button>
          </form>
        </div>

        {/* Right: Studio Details */}
        <div className="reveal anim-fade-in flex flex-col gap-12 md:gap-20 md:pl-12 opacity-0" style={{ transitionDelay: '0.2s' }}>
          <div className="flex flex-col gap-8">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-grey">Social Atelier</h3>
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
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-grey">Direct Contact</h3>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80">concierge@yourstudio.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
