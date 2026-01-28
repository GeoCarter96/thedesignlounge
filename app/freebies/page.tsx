"use client";
import { useEffect } from "react";
import Link from "next/link";
import './freebies.css';

const FREEBIES = [
  { id: "1", title: "The Soft Launch Playbook", desc: " The Soft Launch Playbook is a free digital guide for minimalist creatives who want to launch with intention and confidence. It supports soft pivots and aligned moves while maintaining a polished presence that still feels like you.  ", link: "https://www.etsy.com/listing/4322876267/the-soft-launch-playbook?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_8&dd=1&logging_key=62975175a521ff6baca3875f45db231a5e914b5b%3A4322876267" },
  { id: "2", title: "The Luxe Launchpad", desc: " Every takeoff starts on solid ground. The Luxe Launchpad™ is a digital brand kit designed to help your brand gain lift — refining your visuals, voice, and first impression before you ascend. This is where clarity fuels momentum and your next era begins to rise.  ", link: "https://www.etsy.com/listing/4318137438/luxe-launchpad-digital-launch-strategy?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_9&dd=1&logging_key=9aa15e5ba29135f4bda444772ecc848b72f660a5%3A4318137438" },
  { id: "3", title: "The Luxe Lounge Pregame", desc: " Before the launch, there's the moment where everything clicks. The Luxe Lounge Pre-Game is a free branding warm-up created to help you find your rhythm, refine your presence, and step into your brand with intention. This is where clarity meets creativity — and your launch begins to feel aligned. ", link: "https://www.etsy.com/listing/4316198011/the-luxe-lounge-pregame?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_11&dd=1&logging_key=52aeb48e3cebf15cc1a51171c191abb4fc0ca00c%3A4316198011" },
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