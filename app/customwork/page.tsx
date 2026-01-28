"use client";
import { useEffect } from "react";
import Link from "next/link";
import './customwork.css';

export default function CustomWork() {
  useEffect(() => {
    // Native Intersection Observer for performance
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    // Track all elements with the 'reveal' class
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
  <div className="custom-work-page">
    
    {/* 1. EDITORIAL HEADER */}
    <section className="max-w-5xl header-section">
      <p className="reveal anim-fade-in editorial-tag">
        Private Commissions // Bespoke Design
      </p>
      <h1 className="reveal anim-slide-up hero-title">
        The <span className="text-gold">Personal</span> Touch
      </h1>
    </section>

    {/* 2. THE PROCESS NARRATIVE */}
    <section className="max-w-4xl narrative-section">
      <div className="reveal anim-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 className="narrative-title">The Dialogue</h2>
        <p className="narrative-text">
          Custom work at The Lounge is a collaborative journey. You deal directly with the <span style={{ fontStyle: 'italic', fontWeight: '400' }}>Founder</span> to ensure every pixel aligns with your legacy.
        </p>
      </div>

      <div className="reveal anim-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '40px', transitionDelay: '0.2s' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.4 }}>Direct Access</h3>
          <p style={{ fontSize: '1.125rem', fontWeight: 300, color: 'rgba(255,255,255,0.8)' }}>
            Skip the agency layers. Every bespoke project starts with a direct conversation to capture the nuance of your vision.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.4 }}>How to Inquire</h3>
          <p style={{ fontSize: '1.125rem', fontWeight: 300, color: 'rgba(255,255,255,0.8)' }}>
            Briefly outline your requirements via email. I personally review all inquiries to maintain the highest standard of execution.
          </p>
        </div>
      </div>
    </section>

    {/* 3. THE GOLD BULLION CTA */}
    <section className="cta-section">
      <div className="reveal anim-scale-in" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Link href="/contact" className="gold-bullion">
          <span style={{ position: 'relative', zIndex: 10 }}>Contact Founder</span>
          
          <div className="shine-ray" />
          <div className="bullion-top-bevel" />
          <div className="bullion-bottom-bevel" />
        </Link>
      </div>

      <p className="reveal anim-fade-in" style={{ marginTop: '64px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.8em', opacity: 0.2 }}>
        Response time: 24 — 48 Hours
      </p>
    </section>
  </div>
);
}