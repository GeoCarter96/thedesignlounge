'use client';
import './homepage.css';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from "next/image";

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
    <div className="bg-black">
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

        <div className="content-wrapper">
          {/* Logo Monolith Section */}
          <div className="logo-container">
            <div className="logo-monolith">
              <img src="/logo3.png" alt="Logo" className="logo-img" />
            </div>
          </div>

          {/* Editorial Section - Encompasses the text and the arches grid */}
          <div className="editorial-section">
           

            {/* Magazine Layout (The video canvas ends right at the bottom of this div) */}
            <div className="magazine-layout">
              {/* Master Background Image Placeholder (Horizontally edge-to-edge via CSS) */}
              <div className="master-backdrop-placeholder">
                <Image 
                  src="/bk.png" 
                  alt="Master Backdrop Image"
                  fill={true}                 
                  className="layout-image-fit"
                  priority 
                />
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
                </div>

              </div> {/* /arches-showcase */}
            </div> {/* /magazine-layout */}
          </div> {/* /editorial-section */}
        </div> {/* /content-wrapper */}
      </div> {/* /video-background-container */}

    

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
