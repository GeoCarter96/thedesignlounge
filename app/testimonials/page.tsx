"use client";
import { useEffect } from "react";
import Link from "next/link";
import './testimonials.css';

const TESTIMONIALS = [
  {
    quote: "Quick and convenient luxury designs for marketing my business. The instructions were so easy to follow and I love that I can customize the design to my own personal brand kit. This saved me so much time!",
    author: "Teaira",
  },
  {
    quote: "The quality of the E book covers is TOP TEIR SIS!!! I’ve been looking for luxury and cute E book covers and I found the perfect one!!! Don’t hesitate buy this!!!!!!",
    author: "Tasia",
  },
];

export default function Testimonials() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-element").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
  <div className="testimonials-page">
    
 
    <section className="header-section">
      <h1 className="reveal-element anim-slide-up hero-title">
        Voices of <br />
        <span className="text-gold-italic">The Lounge</span>
      </h1>
    </section>

   
    <section className="max-w-7xl" style={{ padding: '0 40px' }}>
      {TESTIMONIALS.map((t, i) => (
        <div 
          key={i}
          className="reveal-element anim-fade-up testimonial-item"
        >
         
          <div className="quote-mark">
            ★★★★★
          </div>
          
          <div className="testimonial-content">
            <p className="quote-text">
              {t.quote}
            </p>
            
            <div style={{ marginTop: '64px' }}>
              <span className="author-name">
                {t.author}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>

    <section className="cta-section">
      <div className="reveal-element anim-fade-in">
        <p className="cta-label">Your Seat is Waiting</p>
        <Link 
          href="/"
          className="return-btn"
        >
          Return to The Lobby
        </Link>
      </div>
    </section>
  </div>
);
}