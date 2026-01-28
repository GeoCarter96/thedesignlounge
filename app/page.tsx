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
    <div className="relative w-full bg-black" style={{ minHeight: '100vh' }}>
      <video 
        autoPlay loop muted playsInline preload="auto" 
        poster="/placeholder.png" 
        className="video-background"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="content-wrapper">
        
       
        <div className="logo-container">
          <div className="logo-monolith">
            <img src="/logo3.png" alt="Logo" className="logo-img" />
          </div>
        </div>

       
        <div className="editorial-section">
          <p className="reveal-on-scroll anim-slide-up editorial-text">
            Welcome To <span className="italic">The Design Lounge</span> – Where Luxury Meets Creativity. 
            Where Bold Ideas Are Curated, Not Rushed, And Your Brand Is Treated Like An Experience, Not A Task.
            Inside The Lounge, You'll Find Done For You Designs, Planners, Templates, And Brand Assets.
          </p>
        </div>

       
        <div className="gold-monolith-section">
          <div className="reveal-on-scroll anim-scale-in-heavy" style={{ width: '100%', textAlign: 'center' }}>
            <Link href="/matchmake" className="gold-bullion-link">
              <span style={{ position: 'relative', zIndex: 10 }}>Enter The Lounge</span>
              <div className="shimmer-ray" />
              <div className="bullion-top" />
              <div className="bullion-bottom" />
            </Link>
          </div>
          
          <p className="reveal-on-scroll anim-fade-slow" style={{ marginTop: '128px', fontSize: '12px', letterSpacing: '0.6em', textTransform: 'uppercase', fontWeight: 300 }}>
            Your Seat Is Reserved
          </p>
        </div>
      </div>
    </div>

    <footer>
      <div className="footer-grid">
         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.4em', opacity: 0.4 }}>Inquiries</h3>
            <Link href="/contact" style={{ fontSize: '1.5rem', fontWeight: 200, color: '#fff', textDecoration: 'none' }}>Visit Concierge's Desk</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.4em', opacity: 0.4 }}>Connect</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
              {SOCIAL_LINKS.map(link => (
                <Link key={link.name} href={link.href} target="_blank" className="social-link">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
      </div>
    </footer>
  </div>
);
}