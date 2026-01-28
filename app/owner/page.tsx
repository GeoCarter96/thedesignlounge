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
          The  Founder
        </p>
        <h1 className="reveal anim-slide-up font-serif hero-title">
          Meet The Woman Behind <br />
          <span className="italic text-gold">The Lounge</span>
        </h1>
      </div>
      <div className="col-span-5 text-right-md">
        <p className="reveal anim-fade-in label-tag italic" style={{ transitionDelay: '0.4s', fontSize: '12px' }}>
          Est. 2024
        </p>
      </div>
    </section>

   
    <section className="max-w-7xl" style={{ padding: '128px 40px' }}>
      <div className="grid-container" style={{ alignItems: 'center' }}>
       
        <div className="reveal anim-scale-in col-span-5 portrait-container">
             <div className="light-layer">
 <img src="/lightbeam.png" alt="Light source" />
        </div>
          <img 
            src="/owner.PNG" 
            alt="The Curator"
            className="portrait-img"
          />
          <div className="shimmer-overlay">
             <div className="shimmer-beam" />
          </div>
         
        </div>

       
        <div className="col-span-7 pl-20-md" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="reveal anim-slide-right" style={{ maxWidth: '36rem' }}>
            <h2 className="label-tag text-gold" style={{ marginBottom: '48px', letterSpacing: '0.5em' }}>The Curator</h2>
            <p className="philosophy-text">
              Mary McDougald is the founder and CEO of The Design Lounge — a creative space where luxury, intention, and bold self-expression meet.
            </p>
            <p className="narrative-body">
              With a background in leadership, training, and design, Mary is passionate about creating spaces that help people show up fully — in their work, their creativity, and their vision. Her approach blends structure with softness, strategy with soul, and presence over performance.

The Design Lounge was created for those who don’t want to blend in, rush the process, or dilute their voice. It’s for brands that want to make statements thoughtfully, confidently, and with intention — without sacrificing ease or authenticity.


At the head of the Lounge, Mary leads with clarity, creativity, and a deep belief that how you show up matters just as much as what you create.
            </p>
            
            <div style={{ marginTop: '64px', display: 'flex', gap: '48px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span className="label-tag" style={{ opacity: 0.3, margin: 0 }}>Specialization</span>
                <span style={{ fontSize: '12px', letterSpacing: '0.1em' }}>Luxury Branding</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span className="label-tag" style={{ opacity: 0.3, margin: 0 }}>Experience</span>
                <span style={{ fontSize: '12px', letterSpacing: '0.1em' }}>4+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  
   
  </div>
);
}