"use client";
import { useEffect } from "react";
import Link from "next/link";
import './flyers.css';   

export default function FlyerProductPage() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
  <div className="flyer-page">
    
    <section className="hero-section">
      
      <div className="reveal anim-slide-up hero-text-layer">
        <p className="product-tag">The Digital Flyer</p>
        <h1 className="hero-title">
          Will You Be My <span className="text-gold-normal">Clientine ?</span>
        </h1>
      </div>

      <div className="light-layer">
        <div style={{ position: 'absolute', top: '32px', left: 0, width: '100%', height: '288px' }}>
          <img src="/lightbeam.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'screen', opacity: '100%' }} />
        </div>
      </div>

      <div className="image-layer">
        <div className="reveal anim-scale-in product-card group">
          <img src="/flyer.PNG" alt="Luxury Flyer Mockup" />
          <div className="shimmer-overlay">
            <div className="shimmer-beam" />
          </div>
        </div>
      </div>
    </section>

    <section className="details-section">
      <div className="reveal anim-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 className="spec-title">The Specification</h2>
        <p className="spec-text">
          Designed for those who understand that first impressions are the only impressions. High-resolution textures, editable typography, and a <span style={{ color: '#D4AF37' }}>curated gold-foil</span> finish.
        </p>
      </div>

      <div className="reveal anim-slide-up details-sub-col" style={{ display: 'flex', flexDirection: 'column', gap: '48px', transitionDelay: '0.2s' }}>
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px' }}>
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#D4AF37' }}>Deliverables</span>
          <p style={{ marginTop: '8px', fontSize: '0.875rem', fontWeight: 300, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>(Item Is Still In Production)</p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)' }}>Instant Secure Download</span>
          </div>
        </div>
      </div>
    </section>

    <section className="vignette-section reveal anim-fade-in">
       <p className="vignette-text">Elegance is the only beauty that never fades.</p>
    </section>
  </div>
);
}