"use client";
import { useEffect } from "react";
import Link from "next/link";
import './planners.css';

export default function PlannerProductPage() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

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

 return (
  <div className="planner-page">
    

    <section className="hero-section">
      
      <div className="reveal anim-slide-up hero-text-layer">
        <p className="text-gold-tag">Tactile Excellence</p>
        <h1 className="hero-title">
          Balanced By <span className="text-normal">Design</span>
        </h1>
      </div>

      <div className="light-beam-layer">
        <img src="/lightbeam.png" alt="" className="light-beam-img" />
      </div>

      <div className="image-card-layer">
        <div className="reveal anim-scale-in planner-card group">
          <img src="/planner.png" alt="Luxury Planner Mockup" className="planner-img" />
          <div className="shimmer-overlay">
            <div className="shimmer-beam" />
          </div>
        </div>
      </div>
    </section>

   
    <section className="details-grid max-w-5xl">
      <div className="reveal anim-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 className="details-label">The Philosophy</h2>
        <p className="details-text">
          A sanctuary for your most ambitious intentions. Designed to hold the weight of your future.
        </p>
      </div>

      <div className="reveal anim-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '48px', transitionDelay: '0.2s' }}>
        <div className="spec-box">
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#D4AF37' }}>Specifications</span>
          <p style={{ marginTop: '8px', fontSize: '0.875rem', fontWeight: 300, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>(Item Still In Production)</p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)' }}>Limited Batch Release</span>
        </div>
      </div>
    </section>

    <section className="quote-section">
       <p className="reveal anim-fade-in quote-text">
        "Organize the chaos, curate the legacy."
       </p>
    </section>
  </div>
);
}