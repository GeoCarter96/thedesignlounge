'use client'
import './homepage.css';
import Link from 'next/link';
import { useEffect } from 'react';

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com/theedesignlounge?igsh=MXVvYjlpNWl4bDFngw==' },
  { name: 'TikTok', href: 'https://tiktok.com/@maaiirr1?r=1&_t=ZP-93NpubeBvoM' },
  { name: 'Youtube', href: 'https://youtube.com/@shesmair?si=O_Kvq7fTNno26vF6' },
];

export default function HomePage() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Native Intersection Observer to trigger CSS animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "-50px" });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black">
      <div className="relative h-full w-full bg-black">
        <video autoPlay loop muted playsInline preload="auto" poster="/placeholder.png" className="absolute z-0 h-full w-full object-cover opacity-60">
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col items-center w-full">
          
          {/* CONTAINER 1: Logo Reveal (Scale 0.95 -> 1) */}
          <div className="flex h-screen w-full items-center justify-center px-4">
            <div className="  relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9] ">
              <img 
                src="/logo3.png" 
                alt="Logo"
                className="absolute inset-0 w-full h-full object-contain p-12 z-10 transition-transform duration-1000 group-hover:scale-[1.02]" 
              />
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
               
              </div>
            </div>
          </div>

          {/* CONTAINER 2: Editorial Text (Slide Up) */}
          <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-center text-white px-4">
            <p className="reveal-on-scroll anim-slide-up max-w-3xl text-xl md:text-3xl font-extralight tracking-tight leading-relaxed">
              Welcome To <span className="font-normal italic">The Design Lounge</span> – Where Luxury Meets Creativity. 
              Where Bold Ideas Are Curated, Not Rushed, And Your Brand Is Treated Like An Experience, Not A Task.
              Inside The Lounge, You'll Find Done For You Designs, Planners, Templates, And Brand Assets.
            </p>
          </div>

          {/* CONTAINER 3: Gold Monolith (Scale 0.9 -> 1) */}
          <div className="flex h-screen w-full flex-col items-center justify-center bg-black px-4">
            <div className="reveal-on-scroll anim-scale-in-heavy flex justify-center w-full">
              <Link 
                href="/matchmake"
                className="group relative inline-block overflow-hidden rounded-sm px-10 py-16 md:px-[200px] md:py-[120px] text-xs md:text-3xl font-bold uppercase tracking-[0.5em] md:tracking-[1em] text-black transition-all hover:scale-105 active:scale-95 animate-gold-pulse shadow-[0_0_50px_rgba(212,175,55,0.3)] md:shadow-[0_0_100px_rgba(212,175,55,0.4)]"
                style={{ background: 'linear-gradient(180deg, #AF8A3F 0%, #D4AF37 30%, #F9E498 50%, #D4AF37 70%, #AF8A3F 100%)' }}
              >
                <span className="relative z-10 block whitespace-nowrap drop-shadow-md">Enter The Lounge</span>
                <div className="absolute inset-0 z-20 pointer-events-none">
                   <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/95 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </div>
                <div className="absolute inset-0 border-t-[3px] md:border-t-[8px] border-white/40 z-15 pointer-events-none" />
                <div className="absolute inset-0 border-b-[3px] md:border-b-[8px] border-black/50 z-15 pointer-events-none" />
              </Link>
            </div>
            
            <p className="reveal-on-scroll anim-fade-slow mt-32 text-[12px] uppercase tracking-[0.6em] text-white font-light">
              Your Seat Is Reserved
            </p>
          </div>
        </div>
      </div>

      <footer className="w-full bg-black border-t border-white/10 pt-24 pb-12 px-8">
        {/* Footer content remains same as it had no motion */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 text-white">
           <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-[0.4em] opacity-40">Inquiries</h3>
            <Link href="/contact" className="text-2xl md:text-3xl font-extralight tracking-tight hover:text-[#D4AF37] transition-colors duration-500">Visit Concierge's Desk</Link>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-[0.4em] opacity-40">Connect</h3>
            <div className="flex flex-wrap gap-12">
              {SOCIAL_LINKS.map(link => (
                <Link key={link.name} href={link.href} target="_blank" className="text-sm uppercase tracking-[0.2em] group relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
