"use client";
import { useEffect } from "react";
import Link from "next/link";
import './courses.css';

const CURRICULUM = [
  { id: "01", title: "The Visual Narrative", detail: "Decoding the language of high-end aesthetics." },
  { id: "02", title: "Atmospheric Design", detail: "Creating digital spaces that breathe." },
  { id: "03", title: "The Golden Ratio", detail: "Implementing mathematical precision in UX." },
];

export default function Courses() {
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
  <div className="courses-page">
    <section className="hero-section">
      <div className="video-bg">
        <video autoPlay loop muted playsInline>
          <source src="/luxury-ink.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="reveal anim-fade-in hero-text-layer">
        <p style={{ letterSpacing: '0.2em', fontSize: '10px', opacity: 0.6, marginBottom: '24px' }}>
          A Masterclass by The Design Lounge
        </p>
        <h1 className="hero-title reveal anim-slide-up">
          The Canva <span className="text-gold">Crash Course</span>
        </h1>
      </div>

      <div className="light-layer">
        <img src="/lightbeam.png" alt="" />
      </div>

      <div className="image-layer">
        <div className="reveal anim-scale-in course-card group">
          <img src="/course.PNG" alt="Course Preview" />
           <div className="shimmer-beam" />
          <div className="shimmer-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            <div className="shimmer-beam" style={{ 
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
              transform: 'translateX(-100%)'
            }} />
          </div>
        </div>
      </div>
    </section>

    <section className="curriculum-grid max-w-7xl">
      <div className="sticky-header reveal anim-fade-in">
        <h3 style={{ fontFamily: 'serif', fontSize: '3rem', fontStyle: 'italic' }}>The Syllabus</h3>
        <p style={{ marginTop: '24px', opacity: 0.4 }}>A self-paced immersive journey.</p>
      </div>
      
      <div>
        {CURRICULUM.map((item, i) => (
          <div key={item.id} className="reveal anim-slide-right curriculum-item" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span style={{ color: '#D4AF37', fontFamily: 'serif', fontSize: '1.25rem', opacity: 0.4 }}>{item.id}</span>
            <div>
              <h4 style={{ letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>{item.title}</h4>
              <p style={{ opacity: 0.4 }}>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section style={{ textAlign: 'center', padding: '160px 24px', background: '#080808' }}>
      <div className="reveal anim-fade-in">
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 200, marginBottom: '32px' }}>Secure Your Seat</h2>
        <Link href="https://www.theedesignlounge.co/product/the-canva-crash-course/7" target="_blank" className="enroll-btn">
          <span>Acquire Crash course</span>
          <div className="btn-fill" />
        </Link>
      </div>
    </section>
  </div>
);
}