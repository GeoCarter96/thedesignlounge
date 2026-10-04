'use client';
import './homepage.css';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from "next/image";
import { Great_Vibes } from 'next/font/google';

const luxuryScript = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
});

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com/theedesignlounge?igsh=MXVvYjlpNWl4bDFngw==' },
  { name: 'TikTok', href: 'https://tiktok.com/@maaiirr1?r=1&_t=ZP-93NpubeBvoM' },
  { name: 'Youtube', href: 'https://youtube.com/@shesmair?si=O_Kvq7fTNno26vF6' },
];

export default function HomePage() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "-100px" });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
     <div className={`bg-black ${luxuryScript.variable}`}>
      {/* ==========================================================================
         VIDEO BACKGROUND CONTAINER (Wraps down to the bottom of the master layout)
         ========================================================================== */}
      <div className="video-background-container">
        <video 
          autoPlay loop muted playsInline preload="auto" 
          poster="/placeholder.png" 
          className="video-background"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
     <div className="video-top-text video-top-left reveal-on-scroll anim-fade-slow">
  <span className="video-meta">SAME HOSPITALITY.</span>
  <span className="video-submeta">BIGGER POSSIBILITIES.</span>
</div>

<div className="video-top-text video-top-right reveal-on-scroll anim-fade-slow">
  <span className="video-meta">BRANDS AREN&apos;T JUST BUILT.</span>
  <span className="video-submeta">THEY&apos;RE HOSTED.</span>
</div>


       <div className="content-wrapper">
  {/* Logo Monolith Section */}
  <div className="logo-container">
    <div className="logo-monolith">
      <img src="/tlogo.png" alt="Logo" className="logo-img" />
    </div>
  </div>

  {/* ==========================================================================
     NEW: BRAND MONOLITH CALL TO ACTION BLOCK
     ========================================================================== */}
  <div className="monolith-cta-block reveal-on-scroll anim-slide-up">
    {/* Space for Text 1 (Underneath the logo container) */}
    <p className="monolith-subtext-top">
      WHERE BRANDS ARE TREATED LIKE GUESTS. ™
    </p>

    {/* Luxury CTA Button Layer */}
    <Link href="/contact" className="monolith-cta-btn">
      <span>CHECK IN </span>
      <div className="btn-shimmer-ray"></div>
    </Link>

    {/* Space for Text 2 (Right underneath the button) */}
    <p className="monolith-subtext-bottom">
      Scroll To Explore Our Curated Creative Editorial 
    </p>
    <p>↓</p>
  </div>


        
      </div> {/* /video-background-container */}
  {/* Editorial Section - Encompasses the text and the arches grid */}
          <div className="editorial-section">
           

            {/* Magazine Layout (The video canvas ends right at the bottom of this div) */}
            <div className="magazine-layout">
              {/* Master Background Image Placeholder (Horizontally edge-to-edge via CSS) */}
           {/* Master Background Image Placeholder (Horizontally edge-to-edge via CSS) */}
<div className="master-backdrop-placeholder">
  <Image 
    src="/bkk.png" 
    alt="Master Backdrop Image"
    fill={true}                 
    className="layout-image-fit"
    priority 
  />

  {/* ==========================================================================
     NEW: OVERLAY TEXT ON THE LEFT & RIGHT SIDES
     ========================================================================== */}
  <div className="backdrop-text backdrop-text-left">
    <span className="backdrop-subtitle">FROM MEANINGFUL</span>
    <h2 className="backdrop-title">FIRST IMPRESSIONS</h2>
  </div>

  <div className="backdrop-text backdrop-text-right">
    <span className="backdrop-subtitle">TO LASTING</span>
 <h2 
  className={`backdrop-title backdrop-cursive ${luxuryScript.className}`}
  style={{ fontFamily: "var(--font-script), 'Great Vibes', 'Alex Brush', cursive" }}
>
  Connections...
</h2>


  </div>
</div>


        {/* Arches Showcase Wrapper Container */}
<div className="arches-showcase">
  
  {/* Arch 1 */}
  <div className="gold-arch arch-one">
    <div className="arch-bg-placeholder">
      <Image 
        src="/bk1.png" 
        alt="Showcase Arch 1"
        fill={true}                  
        className="layout-image-fit"
      />
    </div>
    {/* Luxury Content Overlay */}
    <div className="arch-overlay">
      <span className="arch-number">01</span>
      <h3 className="arch-title">BRAND IDENTITY</h3>
      <div className="arch-gold-divider"></div>
      <p className="arch-subtitle">How your brand is recognized </p>
    </div>
  </div>

  {/* Arch 2 */}
  <div className="gold-arch arch-two">
    <div className="arch-bg-placeholder">
      <Image 
        src="/bk2.png" 
        alt="Showcase Arch 2"
        fill={true}                  
        className="layout-image-fit"
      />
    </div>
    {/* Luxury Content Overlay */}
    <div className="arch-overlay">
      <span className="arch-number">02</span>
      <h3 className="arch-title">BRAND VISIBILITY</h3>
      <div className="arch-gold-divider"></div>
      <p className="arch-subtitle">How your brand is seen </p>
    </div>
  </div>

  {/* Arch 3 */}
  <div className="gold-arch arch-three">
    <div className="arch-bg-placeholder">
      <Image 
        src="/bk3.png" 
        alt="Showcase Arch 3"
        fill={true}                  
        className="layout-image-fit"
      />
    </div>
    {/* Luxury Content Overlay */}
    <div className="arch-overlay">
      <span className="arch-number">03</span>
      <h3 className="arch-title">BRAND EXPERIENCE</h3>
      <div className="arch-gold-divider"></div>
      <p className="arch-subtitle">How your brand makes people feel </p>
    </div>
  </div>

  {/* Arch 4 */}
  <div className="gold-arch arch-four">
    <div className="arch-bg-placeholder">
      <Image 
        src="/bk4.png" 
        alt="Showcase Arch 4"
        fill={true}                  
        className="layout-image-fit"
      />
    </div>
    {/* Luxury Content Overlay */}
    <div className="arch-overlay">
      <span className="arch-number">04</span>
      <h3 className="arch-title">BUSINESS ESSENTIALS</h3>
      <div className="arch-gold-divider"></div>
      <p className="arch-subtitle">The details that compliment your brand</p>
    </div>
  </div>

</div> {/* /arches-showcase */}

            </div> {/* /magazine-layout */}
          </div> {/* /editorial-section */}
        </div> {/* /content-wrapper */}
    

      {/* Footer Section */}
      <footer>
        <div className="footer-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.4em', opacity: 0.4 }}>Inquiries</h3>
            <Link href="/contact" style={{ fontSize: '1.5rem', fontWeight: 200, color: '#fff', textDecoration: 'none' }}>Visit Concierge&apos;s Desk</Link>
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
