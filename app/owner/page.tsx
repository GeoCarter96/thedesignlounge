"use client";
import { useEffect } from "react";
import './owner.css';

export default function Owner() {
    useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
      
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
     
      observer.disconnect();
    };
  }, []);


 return (
  <div className="owner-page">
    

    <section className="max-w-7xl grid-container" style={{ padding: '0 40px' }}>
      <div className="col-span-7">
        <p className="reveal anim-fade-in label-tag">
          The Architect // Founder
        </p>
        <h1 className="reveal anim-slide-up font-serif hero-title">
          Defining <br />
          <span className="italic text-gold">The Aesthetic</span>
        </h1>
      </div>
      <div className="col-span-5 text-right-md">
        <p className="reveal anim-fade-in label-tag italic" style={{ transitionDelay: '0.4s', fontSize: '12px' }}>
          Est. 2026 // Indiana Studio
        </p>
      </div>
    </section>

   
    <section className="max-w-7xl" style={{ padding: '128px 40px' }}>
      <div className="grid-container" style={{ alignItems: 'center' }}>
        <div className="reveal anim-scale-in col-span-5 portrait-container">
          <img 
            src="/owner-portrait.jpg" 
            alt="The Curator"
            className="portrait-img"
          />
          <div className="shimmer-overlay">
             <div className="shimmer-beam" />
          </div>
          <div style={{ position: 'absolute', bottom: '40px', left: '40px', opacity: 0.2 }}>
             <p className="label-tag" style={{ margin: 0, letterSpacing: '0.6em', fontSize: '9px' }}>The Curator</p>
          </div>
        </div>

       
        <div className="col-span-7 pl-20-md" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="reveal anim-slide-right" style={{ maxWidth: '36rem' }}>
            <h2 className="label-tag text-gold" style={{ marginBottom: '48px', letterSpacing: '0.5em' }}>The Philosophy</h2>
            <p className="philosophy-text">
              "Design is not a service; it is a <span className="italic">dialogue</span> between history and the future."
            </p>
            <p className="narrative-body">
              With a decade of immersion in high-fidelity digital architecture, I founded The Design Lounge to serve those who reject the noise of the masses. We don't just build brands; we curate legacies that resonate with precision, elegance, and intentional restraint. 
            </p>
            
            <div style={{ marginTop: '64px', display: 'flex', gap: '48px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span className="label-tag" style={{ opacity: 0.3, margin: 0 }}>Specialization</span>
                <span style={{ fontSize: '12px', letterSpacing: '0.1em' }}>Luxury Branding</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span className="label-tag" style={{ opacity: 0.3, margin: 0 }}>Experience</span>
                <span style={{ fontSize: '12px', letterSpacing: '0.1em' }}>10+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  
    <section className="closing-section">
      <p className="reveal anim-fade-in font-serif italic hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
        Curated with <span className="text-gold">Intent.</span>
      </p>
    </section>
  </div>
);
}