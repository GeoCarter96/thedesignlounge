"use client";
import { useState, useEffect } from "react";
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vision: "",
  });

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
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

  const socials = [
    { name: 'Instagram', url: 'https://instagram.com/theedesignlounge' },
    { name: 'TikTok', url: 'https://tiktok.com/@maaiirr1' },
    { name: 'Youtube', url: 'https://youtube.com/@shesmair' }
  ];

  const isFormValid = formData.name && formData.email && formData.vision;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget; 
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-page">
      
        {/* 1. TOP SECTION */}
{/* 1. TOP SECTION */}
<section className="top-section-split full-viewport-width">
  
  {/* Left Side: Background Image Area forced to top-left corners */}
  <div className="fullscreen-hero-bg">
    <img 
      src="/checkin.png" 
      alt="The Design Lounge Atelier" 
      className="hero-img-fill"
    />
  </div>

  {/* Right Content Layout Area */}
  <div className="top-section-content-right reveal anim-slide-up">
    <div className="hero-right-text-wrapper">
     
     <h1 className="hero-title font-serif">Ready To Check In?</h1>

{/* 🌟 New Intermediate Context Sentence */}
<p className="hero-tagline text-gold">
  Your brand's next chapter starts here. 
</p>

<p className="hero-summary">
  Whether you know exactly what you need or could use a little guidance, your stay starts with helping us understand where your brand is where you'd like to go.
</p>

    </div>
  </div>

</section>



     {/* 2. MIDDLE SECTION (3 Arches Filling the Section Left to Right) */}
<section className="full-width-arches-section">
  <div className="arches-bg-placeholder" />
  
  {/* New Headline Overlay Area */}
  <div className="arches-section-header reveal anim-slide-up">
    <span className="header-subtitle">Exquisite Spaces</span>
    <h2 className="header-title">The Lounge Experience</h2>
  </div>
  
  <div className="arches-container full-fluid-grid">
    
    {/* Left Arch: Form */}
    <div className="reveal anim-fade-in arch-item item-left">
      {/* 🌟 New Inner Image Placeholder for Left Arch */}
   <div 
  className="arch-inner-bg-placeholder" 
  style={{ backgroundImage: `url('/bkwine.png')` }} 
/>
      
      {/* Form Foreground Content Stays Completely Safe Below */}
      
    </div>

    {/* Center Arch: Branding Spacing Element */}
    <div className="reveal anim-fade-in arch-item item-center" style={{ transitionDelay: '0.1s' }}>
      {/* 🌟 New Inner Image Placeholder for Center Arch */}
      <div className="arch-inner-bg-placeholder" style={{ backgroundImage: "url('/bktag.png')" }} />
      
      
    </div>

    {/* Right Arch: Directory / Social Atelier */}
    <div className="reveal anim-fade-in arch-item item-right" style={{ transitionDelay: '0.1s' }}>
      {/* 🌟 New Inner Image Placeholder for Right Arch */}
      <div className="arch-inner-bg-placeholder" style={{ backgroundImage: "url('/bkbag.png')" }} />
      
    
    </div>

  </div>
</section>


      {/* 3. FOOTER SECTION (Full-Width Image Cover Placeholder) */}
      <footer className="footer-section reveal anim-fade-in">
        <div className="footer-image-placeholder">
          <span className="placeholder-text">Footer Cover Image Placeholder</span>
        </div>
      </footer>

    </div>
  );
}
