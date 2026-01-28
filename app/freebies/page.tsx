"use client";
import { useEffect } from "react";
import Link from "next/link";
import './freebies.css';

const FREEBIES = [
  { id: "1", title: "The Soft Launch Playbook", desc: "4K Digital Couture", link: "https://www.theedesignlounge.co/product/the-soft-launch-playbook/5?cs=true&cst=custom" },
  { id: "2", title: "The Luxe Launchpad", desc: "4K Digital Couture", link: "https://www.theedesignlounge.co/product/the-luxe-launchpad/3?cp=true&sa=true&sbp=false&q=false" },
  { id: "3", title: "The Luxe Lounge Pregame", desc: "4K Digital Couture", link: "https://www.theedesignlounge.co/product/the-luxe-lounge-pre-game/1?cp=true&sa=true&sbp=false&q=false" },
];

export default function FreebiesPage() {
  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

 return (
  <div className="freebies-page">
    
    <section className="header-section max-w-7xl">
      <p className="reveal anim-fade-in editorial-tag">
        Complimentary Access // The Lounge
      </p>
      <h1 className="reveal anim-slide-up hero-title">
        Gifted <span className="text-gold-italic">Essentials</span>
      </h1>
    </section>

    <section className="freebies-grid max-w-7xl">
      {FREEBIES.map((item, i) => (
        <div 
          key={item.id}
          style={{ transitionDelay: `${i * 0.2}s` }}
          className="reveal anim-slide-up freebie-card group"
        >
        
          <div className="light-beam-bg">
            <img src="/lightbeam.png" alt="" />
          </div>
          
          
          <div className="freebie-image-wrapper">
            <img src={`/freebie${item.id}.jpg`} alt={item.title} className="freebie-img" />
            <div className="shimmer-overlay">
              <div className="shimmer-beam" />
            </div>
          </div>

          <div className="freebie-content">
            <span className="freebie-desc">{item.desc}</span>
            <h3 className="freebie-title">{item.title}</h3>
            
            <Link 
              href={item.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="download-link"
            >
              Download Gift —
            </Link>
          </div>
        </div>
      ))}
    </section>

    <section style={{ marginTop: '80px', textAlign: 'center', opacity: 0.2 }} className="reveal anim-fade-in">
       <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.8em' }}>
         Excellence should be accessible.
       </p>
    </section>
  </div>
);
}