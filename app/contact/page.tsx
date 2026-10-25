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
      <section className="max-w-7xl top-section-split">
        
        <div className="top-section-hero-image flush-to-edges">
          <img 
            src="/checkin.png" 
            alt="The Design Lounge Atelier" 
            className="hero-img-fill"
          />
        </div>

        

      </section>

      {/* 2. MIDDLE SECTION (3 Arches with Spaces) */}
      <section className="max-w-7xl middle-section">
        <div className="arches-container">
          
          {/* Left Arch: Form */}
          <div className="reveal anim-fade-in arch-item item-left">
            <p className="label-text" style={{ letterSpacing: '0.4em', marginBottom: '24px' }}>
              Whether It&apos;s A Question Or Feedback, The Lounge Is Always Open
            </p>

            
            <form className="form-column" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label className="label-text">Full Name</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  placeholder="Your Name" 
                  className="custom-input" 
                />
              </div>
              
              <div className="input-group">
                <label className="label-text">Electronic Mail</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="email@address.com" 
                  className="custom-input" 
                />
              </div>

              <div className="input-group">
                <label className="label-text">Your Vision</label>
                <textarea 
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  rows={2} 
                  placeholder="Tell us about your project" 
                  className="custom-input" 
                  style={{ resize: 'none' }}
                />
              </div>

              <button 
                disabled={!isFormValid}
                type="submit" 
                className={`submit-btn ${isFormValid ? 'valid' : ''}`}
              >
                <span style={{ position: 'relative', zIndex: 10 }}>Send Invitation</span>
                <div className="btn-fill" />
              </button>
            </form>
          </div>

          {/* Center Arch: Branding Spacing Element */}
          <div className="reveal anim-fade-in arch-item item-center" style={{ transitionDelay: '0.1s' }}>
            <div className="arch-center-content">
              <span className="text-gold" style={{ letterSpacing: '0.6em', textTransform: 'uppercase' }}>
                The Lounge
              </span>
            </div>
          </div>

          {/* Right Arch: Directory / Social Atelier */}
          <div className="reveal anim-fade-in arch-item item-right" style={{ transitionDelay: '0.2s' }}>
            <div className="details-column">
              <div style={{ marginBottom: '40px' }}>
                <h3 className="label-text" style={{ marginBottom: '32px', color: '#666' }}>Social Atelier</h3>
                {socials.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                    style={{ display: 'block', marginBottom: '12px' }}
                  >
                    {social.name}
                  </a>
                ))}
              </div>

              <div>
                <h3 className="label-text" style={{ marginBottom: '32px', color: '#666' }}>Direct Contact</h3>
                <p className="social-link" style={{ pointerEvents: 'none', opacity: 0.8 }}>
                  concierge@yourstudio.com
                </p>
              </div>
            </div>
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
